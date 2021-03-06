import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverlayComponent } from './overlay.component';

describe('OverlayComponent', () => {
  let component: OverlayComponent;
  let fixture: ComponentFixture<OverlayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverlayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  describe('generateOverlayColor method ', () => {
    it('should be defined', () => {
      expect(component.generateOverlayColor).toBeDefined();
    });

    it('should return expected object', () => {
      const result = component.generateOverlayColor();
      const expectedResult = { 'background-color': component.overlayColor };
      expect(result).toEqual(expectedResult)
    })
  });
});
