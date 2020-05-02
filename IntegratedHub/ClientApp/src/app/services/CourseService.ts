import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Course } from '../models/course';
import { Injectable } from '@angular/core';

@Injectable()
export class CourseService {

  constructor(public http: HttpClient) { }

  public getCourses(): Observable<Course[]> {
    return this.http.get<Course[]>("/course");;
  }
}
