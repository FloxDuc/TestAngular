import { Component, DebugElement } from '@angular/core';
import { FormsModule }          from '@angular/forms';
import { By } from '@angular/platform-browser';
import { TestBed, inject, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';

import { ErrorHighlightsDirective } from './error-message.directive';

@Component({
  template: `<input id="basique" [(ngModel)]="test" type="text" appErrorMessage>
             <input id="complexe" [(ngModel)]="test" type="text" appErrorMessage [bgColor]="'rgb(255, 100, 100)'">`
})
class TestComponent {
  test:string;
}

describe('ErrorHighlightsDirective', () => {

  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let inputEl: DebugElement;
  let inputElComplexe: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestComponent, ErrorHighlightsDirective],
      providers : [
        { provide: ComponentFixtureAutoDetect, useValue: true }
      ], 
      imports : [
        FormsModule
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    inputEl = fixture.debugElement.query(By.css('#basique'));
    inputElComplexe = fixture.debugElement.query(By.css('#complexe'));
  });

  it('should create an instance of the tested component', () => {
    expect(component).toBeTruthy();
  });

  it('should test the focus', () => {
    fixture.detectChanges();
    const event = {
      target : {
        value : ''
      }
    };    
    inputEl.triggerEventHandler('focus', event) ;
    expect(inputEl.styles['border-style']).toEqual('solid');
    expect(inputEl.styles['border-color']).toEqual('orange');
    inputElComplexe.triggerEventHandler('focus', event) ;
    expect(inputElComplexe.styles['border-style']).toEqual('solid');
    expect(inputElComplexe.styles['border-color']).toEqual('orange');
  });

  it('should test the blur without', () => {
    fixture.detectChanges();
    const event = {
      target : {
        value : ''
      }
    };    
    inputEl.triggerEventHandler('blur', event) ;
    expect(inputEl.styles['border-style']).toEqual('solid');
    expect(inputEl.styles['border-color']).toEqual('red');
    inputElComplexe.triggerEventHandler('blur', event) ;
    expect(inputElComplexe.styles['border-style']).toEqual('solid');
    expect(inputElComplexe.styles['border-color']).toEqual('red');
  });

  it('should test the blur with error', () => {
    fixture.detectChanges();
    const event = {
      target : {
        value : 'value'
      }
    };
    inputEl.triggerEventHandler('blur', event) ;
    expect(inputEl.styles['border-style']).toEqual('none');
    inputElComplexe.triggerEventHandler('blur', event) ;
    expect(inputElComplexe.styles['border-style']).toEqual('none');
  });

  it('input change with value', () => {
    fixture.detectChanges();
    const event = {
      target : {
        value : 'value'
      }
    };
    inputEl.triggerEventHandler('input', event) ;
    expect(inputEl.styles['backgroundColor']).toEqual('white');
    inputElComplexe.triggerEventHandler('input', event) ;
    expect(inputElComplexe.styles['backgroundColor']).toEqual('white');
  });

  it('input change without value and no bgColor', () => {
    fixture.detectChanges();
    const event = {
      target : {
        value : ''
      }
    };
    inputEl.triggerEventHandler('input', event) ;
    expect(inputEl.styles['backgroundColor']).toEqual('rgb(255, 0, 0)');
  });

  it('input change without value and a bgColor', () => {
    fixture.detectChanges();
    const event = {
      target : {
        value : ''
      }
    };
    inputElComplexe.triggerEventHandler('input', event) ;
    expect(inputElComplexe.styles['backgroundColor']).toEqual('rgb(255, 100, 100)');
  });



});
