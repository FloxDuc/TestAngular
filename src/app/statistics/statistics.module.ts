import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }          from '@angular/forms';

import { StatisticsComponent } from './index';

@NgModule({
  imports:      [ BrowserModule,  FormsModule ],
  declarations: [ StatisticsComponent ],
  exports:    [ StatisticsComponent ]
})
export class StatisticsModule { }
