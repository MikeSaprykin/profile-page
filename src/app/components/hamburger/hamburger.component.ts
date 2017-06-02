import {
  ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output,
  ViewEncapsulation
} from '@angular/core';

@Component({
  selector: 'hamburger',
  template: `
    <div [class.active]="active"
         (click)="onHamburgerClick.emit()"
         ripple
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
  `,
  styleUrls: ['./hamburger.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HamburgerComponent {

  @Output() onHamburgerClick: EventEmitter<any> = new EventEmitter();
  @Input() active: boolean;

}
