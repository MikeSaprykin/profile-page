import {async, ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';
import {Component, DebugElement} from "@angular/core";
import {RippleDirective} from "app/components/ripple.directive";
import {By} from "@angular/platform-browser";

describe('RippleDirective', () => {
  let fixture: ComponentFixture<TestRippleComponent>;
  let directive: DebugElement;
  let directiveInstance: RippleDirective;
  const pageX = 200;
  const pageY = 200;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TestRippleComponent,
        RippleDirective
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestRippleComponent);
    directive = fixture.debugElement.query(By.directive(RippleDirective));
    directiveInstance = directive.injector.get(RippleDirective);
    fixture.detectChanges();
  });

  it('directive should be created', () => {
    expect(directiveInstance).toBeTruthy();
  });

  it('should add ripple-wrapper class to an element', () => {
    const element = fixture.nativeElement.querySelector('div');
    expect(element.classList.contains('ripple-wrapper')).toBeTruthy();
  });

  describe('onClick method tests ', () => {
    it('should be defined ', () => {
      expect(directiveInstance.onClick).toBeDefined();
    });

    it('should call initRipple ', () => {
      spyOn(directiveInstance, 'initRipple');
      directiveInstance.onClick(new MouseEvent('click'));
      expect(directiveInstance.initRipple).toHaveBeenCalled();
    })
  });

  describe('initRipple method tests ', () => {

    it('should be defined', () => {
      expect(directiveInstance.initRipple).toBeDefined()
    });

    it('should call createRipple method', () => {
      spyOn(directiveInstance, 'createRipple').and.callThrough();
      directiveInstance.initRipple({ pageX, pageY });
      expect(directiveInstance.createRipple).toHaveBeenCalled()
    });

    it('should not call createRipple method', () => {
      directiveInstance.ripple = document.createElement('span');
      spyOn(directiveInstance, 'createRipple');
      directiveInstance.initRipple({ pageX, pageY });
      expect(directiveInstance.createRipple).not.toHaveBeenCalled()
    });

    it('should call setRipplePosition method', () => {
      spyOn(directiveInstance, 'setRipplePosition');
      directiveInstance.initRipple({ pageX, pageY });
      expect(directiveInstance.setRipplePosition).toHaveBeenCalled();
    });

    it('should call appendRipple method ', () => {
      spyOn(directiveInstance, 'appendRipple');
      directiveInstance.initRipple({ pageX, pageY });
      expect(directiveInstance.appendRipple).toHaveBeenCalled();
    })
  });

  describe('createRipple method tests ', () => {
    it('should be defined ', () => {
      expect(directiveInstance.createRipple).toBeDefined();
    });

    it('should create a span element', () => {
      directiveInstance.createRipple();
      expect(directiveInstance.ripple).toBeTruthy();
    });

    it('should renderer.setClass on span element', () => {
      spyOn(directiveInstance.render, 'addClass').and.callThrough();
      directiveInstance.createRipple();
      expect(directiveInstance.render.addClass).toHaveBeenCalled();
      expect(directiveInstance.ripple.classList.contains('ripple')).toBeTruthy();
    });

    it('should renderer.setStyle on span element', () => {
      spyOn(directiveInstance.render, 'setStyle').and.callThrough();
      directiveInstance.createRipple();
      expect(directiveInstance.render.setStyle).toHaveBeenCalled();
      expect(directiveInstance.ripple.style.backgroundColor).toEqual('rgba(0, 0, 0, 0.2)');
    })
  });

  describe('setRipplePosition method ', () => {

    beforeEach(() => {
      directiveInstance.ripple = document.createElement('span')
    });

    it('should be defined', () => {
      expect(directiveInstance.setRipplePosition).toBeDefined()
    });

    it('should call render.setStyle twice', () => {
      spyOn(directiveInstance.render, 'setStyle');
      directiveInstance.setRipplePosition(pageY, pageX);
      expect(directiveInstance.render.setStyle).toHaveBeenCalled();
      expect(directiveInstance.render.setStyle).toHaveBeenCalledTimes(2);
    });

    it('should call render.generateRipplePosition twice', () => {
      spyOn(directiveInstance, 'generateRipplePosition');
      directiveInstance.setRipplePosition(pageY, pageX);
      expect(directiveInstance.generateRipplePosition).toHaveBeenCalled();
      expect(directiveInstance.generateRipplePosition).toHaveBeenCalledTimes(2);
    });
  });

  describe('generateRipplePosition method ', () => {
    beforeEach(() => {
      directiveInstance.ripple = document.createElement('span')
    });

    it('should be defined', () => {
      expect(directiveInstance.generateRipplePosition).toBeDefined();
    });

    it('should return a number', () => {
      const result = directiveInstance.generateRipplePosition(pageX, 'top');
      expect(typeof result === 'number').toBeTruthy();
    })
  });

  describe('appendRipple method ', () => {
    it('should be defined', () => {
      expect(directiveInstance.appendRipple).toBeDefined();
    });

    it('should call render.appendChild', () => {
      spyOn(directiveInstance.render, 'appendChild');
      directiveInstance.appendRipple();
      expect(directiveInstance.render.appendChild).toHaveBeenCalled()
    });

    it('should call initRippleRemoveTimer', () => {
      directiveInstance.ripple = document.createElement('span');
      spyOn(directiveInstance, 'initRippleRemoveTimer');
      directiveInstance.appendRipple();
      expect(directiveInstance.initRippleRemoveTimer).toHaveBeenCalled()
    });
  });

  describe('initRippleRemoveTimer method ', () => {
    it('should be defined', () => {
      expect(directiveInstance.initRippleRemoveTimer).toBeDefined();
    });

    it('should call render.removeChild with timer', fakeAsync(() => {
      spyOn(directiveInstance.render, 'removeChild');
      directiveInstance.initRippleRemoveTimer();
      tick(800);
      expect(directiveInstance.render.removeChild).toHaveBeenCalled();
    }));
  })

});

@Component({
  template: '<div ripple></div>'
})
class TestRippleComponent {

}
