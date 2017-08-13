import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';

import { AppService } from './app.service';
import { Gaz } from './gaz/gaz.model';

describe('AppService', () => {
  let service:AppService = null;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppService, HttpClient],
      imports: [
        HttpClientTestingModule
      ]
    });
  });
  afterEach(inject([HttpTestingController], (httpMock: HttpTestingController) => {
    httpMock.verify();
  }))


  it('should be created', inject([AppService], (service: AppService) => {
    expect(service).toBeTruthy();
  }));

  it('should get a Gaz element list', inject([AppService], (appService: AppService) => {
   //Ajoute notre enregistrement à la dernierre position.
   let gasList:Gaz[] = appService.getGazList();

   //test les valeur du derrnier enregistrement de la liste.
   expect(gasList[0].userName).toBe('Florian');
   expect(gasList[0].distance).toBe(10);
   expect(gasList[0].amount).toBe(35.2);
   expect(gasList.length).toBe(9);
}));

  it('should set a Gaz element to the list', inject([AppService], (appService: AppService) => {
      let toAdd : Gaz=new Gaz({ "userName":'test',
                             "distance":1,
                             "amount":2});
     //Ajoute notre enregistrement à la dernierre position.
     appService.setGazList(toAdd);

     //test les valeur du derrnier enregistrement de la liste.
     expect(appService.gazList[appService.gazList.length-1].userName).toBe('test');
     expect(appService.gazList[appService.gazList.length-1].distance).toBe(1);
     expect(appService.gazList[appService.gazList.length-1].amount).toBe(2);
  }));

  it('expects a GET request', inject([AppService, HttpClient, HttpTestingController], (appService: AppService,
     http: HttpClient, httpMock: HttpTestingController) => {
    // Make an HTTP GET request, and expect that it return an object
    // of the form "somthing".
    appService.testHttpCall();
    // could also be call like this:
    // http
    //  .get('http://services.groupkt.com/country/get/all')
    //  .subscribe(data => expect(data).toEqual(jasmine.stringMatching("\"name\" : \"Afghanistan\"")));
   
    // At this point, the request is pending, and no response has been
    // sent. The next step is to expect that the request happened.
    const req = httpMock.expectOne('http://services.groupkt.com/country/get/all');
   
    // If no request with that URL was made, or if multiple requests match,
    // expectOne() would throw. However this test makes only one request to
    // this URL, so it will match and return a mock request. The mock request
    // can be used to deliver a response or make assertions against the
    // request. In this case, the test asserts that the request is a GET.
    expect(req.request.method).toEqual('GET');
   
    // Next, fulfill the request by transmitting a response.
    req.flush(jasmine.stringMatching("\"name\" : \"Afghanistan\""));
   
    // Finally, assert that there are no outstanding requests.
    httpMock.verify();
    expect(appService.results).toEqual(jasmine.stringMatching("\"name\" : \"Afghanistan\""));

  }));

});
