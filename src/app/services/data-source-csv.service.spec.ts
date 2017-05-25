import { TestBed, inject } from '@angular/core/testing';

import { DataSourceCsvService } from './data-source-csv.service';

describe('DataSourceCsvService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataSourceCsvService]
    });
  });

  it('should be created', inject([DataSourceCsvService], (service: DataSourceCsvService) => {
    expect(service).toBeTruthy();
  }));
});
