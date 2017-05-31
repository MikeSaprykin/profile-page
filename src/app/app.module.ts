import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { RouterStoreModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { storeReducer } from 'app/reducers';
import { environment } from '../environments/environment';
import { routing } from 'app/app.routing';
import {APP_BASE_HREF} from "@angular/common";

export const DEVTOOLS_MODULE = !environment.production ?
  [StoreDevtoolsModule.instrumentOnlyWithExtension()] : [];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    StoreModule.provideStore(storeReducer),
    RouterStoreModule.connectRouter(),
    ...DEVTOOLS_MODULE
  ],
  providers: [
    {
      provide: APP_BASE_HREF,
      useValue: '/'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
