import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'app/reducers';
import {CloseMenuAction, OpenMenuAction} from 'app/actions/layout';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  private menuState$: Observable<boolean>;

  constructor(private store: Store<AppState>) {
    this.menuState$ = store.select('layout', 'sideMenuOpened')
  }

  ngOnInit() {
    setTimeout(() => {
      this.store.dispatch(new OpenMenuAction)
    }, 500);

    setTimeout(() => {
      this.store.dispatch(new CloseMenuAction)
    }, 1500)
  }

}
