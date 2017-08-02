import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }          from '@angular/forms';

import { HomeComponent } from './index';

@NgModule({
  imports:      [BrowserModule,  FormsModule ],
  declarations: [ HomeComponent ],
  exports:    [ HomeComponent ]
})
export class HomeModule { }
