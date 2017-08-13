import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Gaz } from './gaz/gaz.model'
import { FAKE_GAZ_VALUES } from './app.data'


@Injectable()
export class AppService {

  results : any;
  gazList : Gaz[] = FAKE_GAZ_VALUES;
  constructor(private http: HttpClient) { }

  getGazList(): Gaz[]{
    return this.gazList;
  }

  setGazList(gaz : Gaz){
    this.gazList.push(gaz);
  }

  testHttpCall():any{
    this.http.get('http://services.groupkt.com/country/get/all').subscribe(data => {
      // Read the result field from the JSON response.
      this.results = data;
    });
  }
}
