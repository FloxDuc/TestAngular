import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }          from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { StatisticsComponent } from './index';
import { KilometerFormatPipe } from './../shared/pipe/kilometer-format.pipe'

@NgModule({
  imports:      [ BrowserModule,  FormsModule ],
  declarations: [ StatisticsComponent, KilometerFormatPipe],
  exports:    [ StatisticsComponent ]
})
export class StatisticsModule { }
