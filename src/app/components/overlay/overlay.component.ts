import {
  ChangeDetectionStrategy,
  Component,
  Input
} from '@angular/core';
import { fadeInOut } from 'app/components/animations';

const BASE_OVERLAY_COLOR = 'rgba(0, 0, 0, 0.08)';

@Component({
  selector: 'overlay',
  template: `
    <div class="overlay"
         *ngIf="showOverlay"
         [ngStyle]="generateOverlayColor()"
         [@fadeInOut]>
    </div>
  `,
  styleUrls: ['./overlay.component.scss'],
  animations: [
    fadeInOut()
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OverlayComponent {

  @Input() showOverlay: boolean;
  @Input() overlayColor: string = BASE_OVERLAY_COLOR;

  generateOverlayColor() {
    return { 'background-color': this.overlayColor }
  }

}
