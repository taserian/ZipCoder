import { Component, OnInit } from '@angular/core';
import { DataSourceCsvService } from '../../services/data-source-csv.service';
import { SourceFactoryService } from '../../services/source-factory.service';

@Component({
  selector: 'app-data-source',
  templateUrl: './data-source.component.html',
  styleUrls: ['./data-source.component.css'],
  providers: [ 
    SourceFactoryService,
    DataSourceCsvService
     ]
})
export class DataSourceComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
