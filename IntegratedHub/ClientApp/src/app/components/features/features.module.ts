// src/app/components/home/home.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeaturesComponent } from './features.component';
import { RouterModule } from '@angular/router';
import { FeaturesRoutes } from './features.route';
import { AddFeatureModalComponent } from '../add-feature-modal/add-feature-modal.component';
import { FeaturesFilterPipe } from '../../pipes/featuresfilter.pipe';
import { FormsModule } from '@angular/forms';
import { FeatureService } from '../../services/FeatureService';

@NgModule({
    declarations: [FeaturesComponent,
        FeaturesFilterPipe,
        AddFeatureModalComponent],
    exports: [FeaturesComponent],
    imports: [
        FormsModule,
        RouterModule.forChild(FeaturesRoutes),
        CommonModule
  ],
  providers: [
    FeatureService
  ]
})
export class FeaturesModule { }
