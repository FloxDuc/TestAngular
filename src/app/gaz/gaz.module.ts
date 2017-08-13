import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }          from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { GazComponent } from './index';
import { ErrorHighlightsDirective } from './../shared/directive/error-message.directive';

@NgModule({
  imports:      [ BrowserModule,  FormsModule ],
  declarations: [ GazComponent, ErrorHighlightsDirective ],
  exports:    [ GazComponent ]
})
export class GazModule { }
