import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import {ContainersModule} from "app/containers";
import {storeReducer} from "app/reducers";
import {StoreModule} from "@ngrx/store";
import {CloseMenuAction, OpenMenuAction} from "app/actions/layout";

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ContainersModule,
        StoreModule.provideStore(storeReducer),
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  describe('mapMenuOpenState method ', () => {
    it('should be defined', () => {
      expect(component.mapMenuOpenState).toBeDefined()
    });

    it('should set menuOpenedState to true and return true', () => {
      const result = component.mapMenuOpenState(true);
      expect(component.menuOpenedState).toEqual(true);
      expect(result).toEqual(true)
    });
  });

  describe('onMenuClick method ', () => {
    it('should be defined', () => {
      expect(component.onMenuClick).toBeDefined();
    });

    it('should dispatch with new OpenMenuAction as params', () => {
      spyOn(component.store, 'dispatch');
      component.onMenuClick();
      expect(component.store.dispatch).toHaveBeenCalled();
      expect(component.store.dispatch).toHaveBeenCalledWith(new OpenMenuAction());
    });

    it('should dispatch with new CloseMenuAction as params', () => {
      component.menuOpenedState = true;
      spyOn(component.store, 'dispatch');
      component.onMenuClick();
      expect(component.store.dispatch).toHaveBeenCalled();
      expect(component.store.dispatch).toHaveBeenCalledWith(new CloseMenuAction());
    });

  })
});
