import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'app/reducers';
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

  constructor(private store: Store<AppState>) {
    this.menuOpen$ = store.select('layout', 'sideMenuOpened')
      .map((value: boolean) => this.menuOpenState(value));
  }

  public menuOpenState(value: boolean) {
    this.menuOpenedState = value;
    return value;
  }

  onMenuClick(): void {
    console.log(this.menuOpenedState);
      this.menuOpenedState ? this.store.dispatch(new CloseMenuAction()) :
        this.store.dispatch(new OpenMenuAction());
  }

}
