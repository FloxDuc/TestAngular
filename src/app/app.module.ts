//Libs
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }          from '@angular/forms';
import { RouterModule , Routes } from '@angular/router';

// Apps stuff
import { AppComponent }  from './app.component';
import { appRoutes } from './app.routes';

//Modules
import { HomeModule } from './home/home.module';
import { GazModule } from './gaz/gaz.module';
import { StatisticsModule } from './statistics/statistics.module';
import { ErrorMessageDirective } from './shared/directive/error-message.directive';
import { DateFormatPipe } from './shared/pipe/date-format.pipe';
import { MenuComponent } from './menu/menu.component';


@NgModule({
  imports:      [ BrowserModule,
                  FormsModule,
                  RouterModule.forRoot(appRoutes),
                  HomeModule,
                  GazModule,
                  StatisticsModule],
  declarations: [ AppComponent, ErrorMessageDirective, DateFormatPipe, MenuComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule {}
