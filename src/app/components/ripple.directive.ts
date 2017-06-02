import {Directive, ElementRef, Renderer2} from '@angular/core';
import {Observable} from "rxjs/Observable";
import 'rxjs/add/observable/timer';

const TOP = 'top';
const LEFT = 'left';

type RippleElPosition = 'top' | 'left'

@Directive({
  selector: '[ripple]',
  host: {
    '(click)': 'onClick($event)'
  }
})
export class RippleDirective {

  public element: HTMLElement;

  public ripple: HTMLElement;

  constructor(elementRef: ElementRef,
              public render: Renderer2) {
    this.element = elementRef.nativeElement;
    this.render.addClass(this.element, 'ripple-wrapper')
  }

  onClick(event: MouseEvent): void {
    this.initRippleElement(event);
  }

  initRippleElement({ pageY, pageX }) {
    if(!this.ripple) this.createRipple();
    this.setRipplePosition(pageY, pageX);
    this.appendRipple();
  }

  public createRipple(): void {
    this.ripple = document.createElement('span');
    this.render.addClass(this.ripple, 'ripple')
  }

  public setRipplePosition(pageY: number, pageX: number): void {
    this.render.setStyle(this.ripple, TOP, this.generateRipplePosition(pageY, TOP));
    this.render.setStyle(this.ripple, LEFT, this.generateRipplePosition(pageX, LEFT));
  }

  public generateRipplePosition(coordinate: number,
                                position: RippleElPosition): number {
    const client = this.element.getBoundingClientRect();
    return coordinate - client[position] - this.ripple.offsetHeight / 2 - document.body.scrollTop;
  }

  public appendRipple(): void {
    this.render.appendChild(this.element, this.ripple);
    this.initRippleRemoveTimer()
  }

  public initRippleRemoveTimer(): void {
    Observable.timer(700)
      .subscribe(() => this.render.removeChild(this.element, this.ripple))
  };

}
