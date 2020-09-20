import {TestBed} from '@angular/core/testing';

import {FeatureTogglesService} from './feature-toggles.service';
import {HttpClientModule} from "@angular/common/http";

describe('FeatureTogglesService', () => {
  let service: FeatureTogglesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ]
    });
    service = TestBed.inject(FeatureTogglesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
