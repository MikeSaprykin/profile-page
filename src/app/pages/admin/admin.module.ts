import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  AdminComponent,
  routing
} from './index';

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [AdminComponent]
})
export class AdminModule { }
