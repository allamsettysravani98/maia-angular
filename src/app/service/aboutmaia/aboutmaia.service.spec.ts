import { TestBed } from '@angular/core/testing';

import { AboutmaiaService } from './aboutmaia.service';

describe('AboutmaiaService', () => {
  let service: AboutmaiaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AboutmaiaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
