import { TestBed } from '@angular/core/testing';

import { AllocateProjectService } from './allocate-project.service';

describe('AllocateProjectService', () => {
  let service: AllocateProjectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllocateProjectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
