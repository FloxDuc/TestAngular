import { Component, OnInit } from '@angular/core';
import { Gaz } from './index';
import { AppService } from './../app.service'

@Component({
  selector: 'app-gaz',
  templateUrl: './gaz.component.html',
  styleUrls: ['./gaz.component.css'],
  providers: [AppService]
})
export class GazComponent implements OnInit {

  gaz = new Gaz({});

  constructor(private appService:AppService) {
    appService.testHttpCall();
  }

  ngOnInit() {
  }


  onSubmit() {
    this.appService.setGazList(this.gaz);
    console.log(this.appService.getGazList());
  }
}
