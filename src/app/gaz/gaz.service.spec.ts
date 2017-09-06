import { TestBed, inject } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';

import { GazService } from './gaz.service';

describe('GazService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ GazService ]
    });
  });

  it('should be created', inject([GazService], (service: GazService) => {
    expect(service).toBeTruthy();
  }));
});
