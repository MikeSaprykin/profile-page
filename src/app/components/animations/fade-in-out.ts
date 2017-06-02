import {animate, state, style, transition, trigger} from "@angular/animations";

export function fadeInOut() {
  return [
    trigger('fadeInOut', [
      state('in', style({opacity: '1'})),
      transition('void => *', [
        style({opacity: '0'}),
        animate(100)
      ]),
      transition('* => void', [
        animate(100, style({opacity: '0'}))
      ])
    ])
  ]
}

