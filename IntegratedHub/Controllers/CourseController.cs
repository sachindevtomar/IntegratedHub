using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using IntegratedHub.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace IntegratedHub.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class CourseController : ControllerBase
    {

        private readonly ILogger<CourseController> _logger;

        public CourseController(ILogger<CourseController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public IEnumerable<Course> Get()
        {
            var coursesList = this.PopulateCourses();
            if (coursesList != null)
                return coursesList;
            return null;
        }

        public IEnumerable<Course> PopulateCourses()
        {
            var courses = new List<Course>()
            {
                new Course
                {
                    id = 1001,
                    courseName = "Introduction to the C# Language and the .NET Framework",
                    courseDescription = "C# is an elegant and type-safe object-oriented language that enables developers to build a variety of secure and robust applications that run on the .NET Framework.",
                    courseDetailsPageLink = "https://link1",
                    tags = new List<string>(){ "C#", ".Net" },
                    duration = 15
                },
                new Course
                {
                    id = 1002,
                    courseName = "Introduction to F#",
                    courseDescription = "F# programming primarily involves defining types and functions that are type-inferred and generalized automatically. This allows your focus to remain on the problem domain and manipulating its data, rather than the details of programming.",
                    courseDetailsPageLink = "https://link1",
                    tags = new List<string>(){ "C#", "F#", "Xamarin" },
                    duration = 6
                },
                new Course
                {
                    id = 1003,
                    courseName = "Introduction to the C# Language and the .NET Framework",
                    courseDescription = "C# is an elegant and type-safe object-oriented language that enables developers to build a variety of secure and robust applications that run on the .NET Framework.",
                    courseDetailsPageLink = "https://link1",
                    tags = new List<string>(){ "C#", ".Net" },
                    duration = 8
                },
                new Course
                {
                    id = 1004,
                    courseName = "Bing Spatial Data Services",
                    courseDescription = "The Bing™ Spatial Data Services Application Programming Interface (API) provides a Representational State Transfer (REST) interface that can geocode, store and query spatial data. This simple REST interface accomplishes tasks by setting parameters in a URL and then submitting the URL as an HTTP request.",
                    courseDetailsPageLink = "https://link1",
                    tags = new List<string>(){ "Bing", "Web", "Maps" },
                    duration = 4
                },
                new Course
                {
                    id = 1005,
                    courseName = "Bing Spatial Data Services part 2",
                    courseDescription = "The Bing Maps SDK for Android and Bing Maps SDK for iOS are libraries for building mapping applications for Android and iOS. The SDKs feature a native map control and an accompanying map services API set. The map control is powered by a full vector 3D map engine with a number of standard mapping capabilities including displaying icons, drawing polylines and polygons, and overlaying texture sources. The engine brings in the same 3D Native support you know from the Xaml Map Control in Windows 10, including worldwide 3D elevation data (via our Digital Elevation Model).",
                    courseDetailsPageLink = "https://link1",
                    tags = new List<string>(){ "Bing", "Android", "iOS" },
                    duration = 10
                }
            };
            return courses;
        }
    }
}
