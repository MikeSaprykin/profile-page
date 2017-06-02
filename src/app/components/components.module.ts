import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideNavComponent } from './side-nav/side-nav.component';
import { HamburgerComponent } from './hamburger/hamburger.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SideNavComponent,
    HamburgerComponent
  ],
  exports: [
    SideNavComponent,
    HamburgerComponent
  ]
})
export class ComponentsModule { }
