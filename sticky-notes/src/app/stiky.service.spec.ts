import { TestBed, inject } from '@angular/core/testing';

import { StickyService } from './stiky.service';
describe('DataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StickyService]
    });
  });

  it('should be created', inject([StickyService], (service: StickyService) => {
    expect(service).toBeTruthy();
  }));
});