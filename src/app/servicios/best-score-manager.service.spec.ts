import { TestBed } from '@angular/core/testing';

import { BestScoreManagerService } from './best-score-manager.service';

describe('BestScoreManagerService', () => {
  let service: BestScoreManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BestScoreManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
