import { TestBed, inject } from '@angular/core/testing';

import { DataSourceXlsService } from './data-source-xls.service';

describe('DataSourceXlsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataSourceXlsService]
    });
  });

  it('should be created', inject([DataSourceXlsService], (service: DataSourceXlsService) => {
    expect(service).toBeTruthy();
  }));
});
