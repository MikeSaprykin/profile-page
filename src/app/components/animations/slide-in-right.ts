import {animate, state, style, transition, trigger} from "@angular/animations";

export function slideInRight() {
  return [
    trigger('slideInRight', [
      state('right', style({transform: 'translateX(0)'})),
      transition('void => right', [
        style({transform: 'translateX(200%)'}),
        animate(400)
      ]),
      state('left', style({transform: 'translateX(0)'})),
      transition('void => left', [
        style({transform: 'translateX(-200%)'}),
        animate(400)
      ])
    ])
  ]
}

