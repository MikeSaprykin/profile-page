import {
  ChangeDetectionStrategy,
  Component,
  Input,
  ViewEncapsulation
} from '@angular/core';
import {
  slideInOutLeft,
  fadeInOut
} from "app/components/animations";

@Component({
  selector: 'app-side-nav',
  template: `
    <div class="overlay"
         *ngIf="openSideNav"
         [@fadeInOut]>
    </div>
    <div class="side-nav"
         *ngIf="openSideNav"
         [@slideInOutLeft]>
    </div>
  `,
  styleUrls: ['./side-nav.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: [
    slideInOutLeft(),
    fadeInOut()
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SideNavComponent {

  @Input() openSideNav: boolean;

}
