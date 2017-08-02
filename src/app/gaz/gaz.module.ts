import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }          from '@angular/forms';

import { GazComponent } from './index';

@NgModule({
  imports:      [BrowserModule,  FormsModule ],
  declarations: [ GazComponent ],
  exports:    [ GazComponent ]
})
export class GazModule { }
