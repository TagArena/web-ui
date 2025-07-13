import { TestBed } from '@angular/core/testing';

import { RestHttpService } from './rest-http.service';

describe('HttpService', () => {
  let service: RestHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RestHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
