
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { FraudDetectionPreventionComponent } from './fraud-detection-prevention/fraud-detection-prevention.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomepageComponent
  },
  {
    path: 'fraud-detection-prevention',
    component: FraudDetectionPreventionComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

