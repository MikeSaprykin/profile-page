import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PortfolioComponent } from './index';

const routes: Routes = [
  {
    path: '',
    component: PortfolioComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
