import { TestBed, inject } from '@angular/core/testing';

import { DataSourceXmlService } from './data-source-xml.service';

describe('DataSourceXmlService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataSourceXmlService]
    });
  });

  it('should be created', inject([DataSourceXmlService], (service: DataSourceXmlService) => {
    expect(service).toBeTruthy();
  }));
});
