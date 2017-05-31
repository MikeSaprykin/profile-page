import {TestBed, async, ComponentFixture, fakeAsync, tick, discardPeriodicTasks} from '@angular/core/testing';

import { AppComponent } from './app.component';
import { AppModule } from 'app/app.module';
import {DebugElement} from "@angular/core";

describe('AppComponent', () => {

  let fixture: ComponentFixture<AppComponent>;
  let app: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        AppModule
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.debugElement.componentInstance;
  }));

  it('should create the app', async(() => {
    expect(app).toBeTruthy();
  }));

  describe('hideLoader method tests', () => {

    it('should be defined', async(() => {
      expect(fixture.componentInstance.hideLoader).toBeDefined();
    }));

    it('should call method hideLoader', async(() => {
      spyOn(fixture.componentInstance, 'hideLoader');
      fixture.componentInstance.ngAfterViewInit();
      expect(fixture.componentInstance.hideLoader).toHaveBeenCalled();
    }));

    it('should return undefined', async(() => {
      const result = fixture.componentInstance.hideLoader();
      expect(result).toBeFalsy();
    }));

    it('should add hidden class to the div element ', async(() => {
      const loaderWrapper = document.createElement('div');
      loaderWrapper.classList.add('loader-wrapper');
      document.body.appendChild(loaderWrapper);

      fixture.componentInstance.hideLoader();

      expect(loaderWrapper.classList.contains('hidden')).toBeTruthy();
    }));

    it('should add none class to the div element ', fakeAsync(() => {
      const loaderWrapper = document.createElement('div');
      loaderWrapper.classList.add('loader-wrapper');
      document.body.appendChild(loaderWrapper);

      fixture.componentInstance.hideLoader();

      discardPeriodicTasks();

      tick(500);

      let loaderWrapperDiv = document.querySelector('.loader-wrapper');
      expect(loaderWrapperDiv.classList.contains('none')).toBeTruthy();

    }))

  });

});
