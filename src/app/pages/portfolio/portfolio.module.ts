import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  PortfolioComponent,
  routing
} from './index';

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [PortfolioComponent]
})
export class PortfolioModule { }
