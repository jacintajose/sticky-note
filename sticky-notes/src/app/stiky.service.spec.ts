




import { TestBed, inject } from '@angular/core/testing';

import { StikyService } from './stiky.service';

describe('DataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StikyService]
    });
  });

  it('should be created', inject([StikyService], (service: StikyService) => {
    expect(service).toBeTruthy();
  }));
});