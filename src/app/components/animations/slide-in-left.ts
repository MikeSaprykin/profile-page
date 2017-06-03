import {animate, state, style, transition, trigger} from "@angular/animations";

export function slideInLeft() {
  return [
    trigger('slideInLeft', [
      state('in', style({transform: 'translateX(0)'})),
      transition('void => *', [
        style({transform: 'translateX(-200%)'}),
        animate(150)
      ])
    ])
  ]
}
