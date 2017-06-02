import {
  Component,
  Input
} from '@angular/core';

export interface MenuItem {
  title: string
  anchor: string
}

@Component({
  selector: 'app-menu',
  template: `
    <ul>
      <li *ngFor="let menuItem of menuItems"
          [menuNav]="menuItem.anchor">
        {{ menuItem.title }}
      </li>
    </ul>
  `,
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  @Input() menuItems: Array<MenuItem> = [];

}
