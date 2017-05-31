import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  PortfolioComponent,
  routing
} from './index';
import {
  ContainersModule
} from "app/containers";

@NgModule({
  imports: [
    CommonModule,
    routing,
    ContainersModule
  ],
  declarations: [PortfolioComponent]
})
export class PortfolioModule { }
