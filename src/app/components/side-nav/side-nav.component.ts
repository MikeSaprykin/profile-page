import {
  ChangeDetectionStrategy,
  Component,
  Input,
  ViewEncapsulation
} from '@angular/core';
import {
  flyInOut
} from "app/components/animations";

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: [
    flyInOut()
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SideNavComponent {

  @Input() openSideNav: boolean;

}
