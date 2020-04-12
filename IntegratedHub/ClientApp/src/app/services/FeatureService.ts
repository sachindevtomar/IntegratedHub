import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Feature } from '../models/feature';

@Injectable({
  providedIn: 'root',
})
export class FeatureService {

  constructor(public http: HttpClient) { }

  public getFeatures(): Observable<Feature[]> {
    return this.http.get<Feature[]>("/feature");
  }
}
