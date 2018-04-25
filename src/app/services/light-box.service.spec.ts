import { TestBed, inject } from '@angular/core/testing';

import { LightBoxService } from './light-box.service';

describe('LightBoxService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LightBoxService]
    });
  });

  it('should be created', inject([LightBoxService], (service: LightBoxService) => {
    expect(service).toBeTruthy();
  }));
});
