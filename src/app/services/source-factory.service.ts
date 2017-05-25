import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { DataSourceCsvService } from './data-source-csv.service';
import { DataSourceXlsService } from './data-source-xls.service';
import { DataSourceXmlService } from './data-source-xml.service';
import { IDataSource } from '../classes/i-data-source';

@Injectable()
export class SourceFactoryService {

  constructor(private csvService: DataSourceCsvService,
              private xlsService: DataSourceXlsService,
              private xmlService: DataSourceXmlService) 
              { }

  public useService(type: string): IDataSource {
    console.log(type);
    if (type == 'xls'){
      return this.xlsService;
    }
    else if (type == 'xml') {
      return this.xmlService;
    } else {
      return this.csvService;
    }
  }
}
