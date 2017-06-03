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
    <overlay [showOverlay]="openSideNav">
    </overlay>
    <div class="side-nav"
         *ngIf="openSideNav"
         [@slideInOutLeft]>
    </div>
  `,
  styleUrls: ['./side-nav.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: [
    slideInOutLeft()
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SideNavComponent {

  @Input() openSideNav: boolean = false;

}
