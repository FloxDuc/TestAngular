import { Component, DebugElement } from '@angular/core';
import { TestBed, inject, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { KilometerFormatPipe } from './kilometer-format.pipe';


describe('KilometerFormatPipe', () => {
  let pipe;

  beforeEach( () => {
    pipe = new KilometerFormatPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should add "km" to the string in parameters', () => {
    let result:string = pipe.transform('test');
    expect(result).toEqual('test km');
    result = pipe.transform('test', KilometerFormatPipe.METRIC_KILOMETER);
    expect(result).toEqual('test km');
  });


  it('should add "000 m" to the string in parameters', () => {
    let result:string = pipe.transform('test', KilometerFormatPipe.METRIC_METER);
    expect(result).toEqual('test000 m');
  });

  it('should add nothing to the string in parameters', () => {
    let result:string = pipe.transform('test', 'somthing');
    expect(result).toEqual('test');
  });

});
