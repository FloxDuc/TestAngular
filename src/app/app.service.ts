import { Injectable } from '@angular/core';

import { Gaz } from './gaz/gaz.model'
import { FAKE_GAZ_VALUES } from './app.data'


@Injectable()
export class AppService {


  gazList : Gaz[] = FAKE_GAZ_VALUES;
  constructor() { }

  getGazList(): Gaz[]{
    return this.gazList;
  }

  setGazList(gaz : Gaz){
    this.gazList.push(gaz);
  }
}
