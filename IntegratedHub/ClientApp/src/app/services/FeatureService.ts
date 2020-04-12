import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Feature } from '../models/feature';
import { map } from 'rxjs/operators';

@Injectable()
export class FeatureService {

  constructor(public http: HttpClient) { }

  public getFeatures(): Observable<Feature[]> {
    return this.http.get<Feature[]>("/feature")
      .pipe(
        map((response: any[]) => {
          var featuresData: Feature[] = [];
          response.forEach(data => {
            featuresData.push(new Feature(data.name, data.description, data.createdDate, data.updatedDate, data.state));
          });
          return featuresData;
        }
    ));
  }
}
