import {Directive, Input} from '@angular/core';
import {MenuItem} from "app/components/menu/menu.component";

@Directive({
  selector: '[menuNav]'
})
export class MenuDirective {

  @Input() menuNav: MenuItem;

}
