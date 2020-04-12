import { Component, OnInit } from '@angular/core';
import { Feature } from '../../models/feature';
import { FEATURES } from '../../Shared/features';
import { FeatureService } from '../../services/FeatureService';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent implements OnInit {

  constructor(private featureService: FeatureService) { }

  //public featuresList: Feature[] = FEATURES;
  public featuresList: Feature[] = [];
  public featureSearchText: string = "";

  ngOnInit() {
    this.getFeatures();
  }

  public getFeatures(): void {
    this.featureService.getFeatures().
      subscribe(
        data => this.featuresList = data
      );
  }
}
