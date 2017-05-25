import { TestBed, inject } from '@angular/core/testing';

import { SourceFactoryService } from './source-factory.service';

describe('SourceFactoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SourceFactoryService]
    });
  });

  it('should be created', inject([SourceFactoryService], (service: SourceFactoryService) => {
    expect(service).toBeTruthy();
  }));
});
