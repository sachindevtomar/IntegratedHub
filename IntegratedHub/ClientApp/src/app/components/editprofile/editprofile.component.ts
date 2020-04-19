import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';
import { USER_History } from '../../Shared/user-history';
import { COURSES } from '../../Shared/courses';
import { User } from '../../models/user';

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.scss']
})
export class EditprofileComponent implements OnInit {


  public currentUser: User; 

  constructor() { }

  ngOnInit(): void {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    var currentUserHistory = USER_History.find(userHistory => userHistory.Username == this.currentUser.username);
    var courseTagFreq: any[] = [];

    currentUserHistory.CourseIDConsumption.forEach(courseId => {
      var courseTags = COURSES.find(course => course.id == courseId).tags;
      courseTags.forEach(courseTag => {

        var matchedCourse = courseTagFreq.filter(function (w) {
          return w.text == courseTag;
        });

        if (matchedCourse.length) {
          matchedCourse[0].count += 1;
        } else {
          courseTagFreq.push({ text: courseTag, count: 1 });
        }
      });
    });


    var finalTagFreq = new Array();
    courseTagFreq.forEach(o => {
      finalTagFreq[o.text] = o.count;
    });

    this.createCourseConsumptionGraph(finalTagFreq);
  }

  public createCourseConsumptionGraph(courseTagFreq:any[]): void {
    // set the dimensions and margins of the graph
    var width = 550;
    var height = 450;
    var margin = 40;

    // The radius of the pieplot is half the width or half the height (smallest one). I subtract a bit of margin.
    var radius = Math.min(width, height) / 2 - margin

    // append the svg object to the div called 'my_dataviz'
    var svg = d3.select("#course-consumption-graph")
      .append("svg")
      .attr("width", width)
      .attr("height", height)
      .append("g")
      .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

    // Create dummy data
    var data = { 'kfsdnkj': 9, 'b': 20}

    // set the color scale
    var color = d3.scaleOrdinal()
      .domain([])
      .range(d3.schemeDark2);

    // Compute the position of each group on the pie:
    var pie = d3.pie()
      .sort(null) // Do not sort group by size
      .value(function (d) { return d.value; })
    var data_ready = pie(d3.entries(courseTagFreq))

    // The arc generator
    var arc = d3.arc()
      .innerRadius(radius * 0.5)         // This is the size of the donut hole
      .outerRadius(radius * 0.8)

    // Another arc that won't be drawn. Just for labels positioning
    var outerArc = d3.arc()
      .innerRadius(radius * 0.9)
      .outerRadius(radius * 0.9)

    // Build the pie chart: Basically, each part of the pie is a path that we build using the arc function.
    svg
      .selectAll('allSlices')
      .data(data_ready)
      .enter()
      .append('path')
      .attr('d', arc)
      .attr('fill', function (d) { return (color(d.data.key)) })
      .attr("stroke", "white")
      .style("stroke-width", "2px")
      .style("opacity", 0.7)

    // Add the polylines between chart and labels:
    svg
      .selectAll('allPolylines')
      .data(data_ready)
      .enter()
      .append('polyline')
      .attr("stroke", "black")
      .style("fill", "none")
      .attr("stroke-width", 1)
      .attr('points', function (d) {
        var posA = arc.centroid(d) // line insertion in the slice
        var posB = outerArc.centroid(d) // line break: we use the other arc generator that has been built only for that
        var posC = outerArc.centroid(d); // Label position = almost the same as posB
        var midangle = d.startAngle + (d.endAngle - d.startAngle) / 2 // we need the angle to see if the X position will be at the extreme right or extreme left
        posC[0] = radius * 0.95 * (midangle < Math.PI ? 1 : -1); // multiply by 1 or -1 to put it on the right or on the left
        return [posA, posB, posC]
      })

    // Add the polylines between chart and labels:
    svg
      .selectAll('allLabels')
      .data(data_ready)
      .enter()
      .append('text')
      .text(function (d) { console.log(d.data.key); return d.data.key })
      .attr('transform', function (d) {
        var pos = outerArc.centroid(d);
        var midangle = d.startAngle + (d.endAngle - d.startAngle) / 2
        pos[0] = radius * 0.99 * (midangle < Math.PI ? 1 : -1);
        return 'translate(' + pos + ')';
      })
      .style('text-anchor', function (d) {
        var midangle = d.startAngle + (d.endAngle - d.startAngle) / 2
        return (midangle < Math.PI ? 'start' : 'end')
      })
  }
}
