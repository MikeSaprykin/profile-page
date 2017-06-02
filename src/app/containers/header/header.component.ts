import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState, getMenuState } from 'app/reducers';
import {CloseMenuAction, OpenMenuAction} from 'app/actions/layout';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-header',
  template: `
    <header>
      <hamburger
        (onHamburgerClick)="onMenuClick()"
        [active]="menuOpen$ | async">
      </hamburger>
    </header>
    <app-side-nav [openSideNav]="menuOpen$ | async">
    </app-side-nav>
  `,
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  public menuOpen$: Observable<boolean>;
  public menuOpenedState: boolean;

  constructor(public store: Store<AppState>) {
    this.menuOpen$ = store.select(getMenuState)
      .map((value: boolean) => this.mapMenuOpenState(value));
  }

  public mapMenuOpenState(value: boolean): boolean {
    this.menuOpenedState = value;
    return value;
  }

  onMenuClick(): void {
    this.menuOpenedState ? this.store.dispatch(new CloseMenuAction()) :
      this.store.dispatch(new OpenMenuAction());
  }

}
