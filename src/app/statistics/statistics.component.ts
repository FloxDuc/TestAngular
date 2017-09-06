import { Component } from '@angular/core';
import { Gaz } from './../gaz/index';
import { AppService } from './../app.service'

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css'],
  providers: [AppService]
})
export class StatisticsComponent {

  userName : string;

  constructor(private appService:AppService) { }


  getList():Gaz[]{
    let result : Gaz[] = [];
    if(this.userName){
      for(let value of this.appService.getGazList()){
        if(value.userName.indexOf(this.userName)>=0){
          result.push(value);
        }
      }
    }else{
      result = this.appService.getGazList();
    }
    return result;
  }

}
