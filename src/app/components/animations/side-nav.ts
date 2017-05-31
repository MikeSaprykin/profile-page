import {animate, state, style, transition, trigger} from "@angular/animations";

export function flyInOut() {
  return [
    trigger('flyInOut', [
      state('in', style({transform: 'translateX(0)'})),
      transition('void => *', [
        style({transform: 'translateX(-100%)'}),
        animate(150)
      ]),
      transition('* => void', [
        animate(150, style({transform: 'translateX(-100%)'}))
      ])
    ])
  ]
}
