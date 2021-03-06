import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SideNavComponent } from './side-nav/side-nav.component';
import { HamburgerComponent } from './hamburger/hamburger.component';
import { MenuComponent } from './menu/menu.component';
import { MenuDirective } from './menu/menu.directive';
import { RippleDirective } from './ripple.directive';
import { OverlayComponent } from './overlay/overlay.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CarouselPipe } from './carousel/carousel.pipe';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    SideNavComponent,
    HamburgerComponent,
    MenuComponent,
    MenuDirective,
    RippleDirective,
    OverlayComponent,
    CarouselComponent,
    CarouselPipe
  ],
  exports: [
    CarouselComponent,
    OverlayComponent,
    SideNavComponent,
    HamburgerComponent,
    MenuComponent
  ]
})
export class ComponentsModule { }
