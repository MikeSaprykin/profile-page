import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './index';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
