import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { IDataSource } from '../../classes/i-data-source';
import { SourceFactoryService } from '../../services/source-factory.service';
//import { DataSourceCsvService } from '../../services/data-source-csv.service';
import { StatePersonRecordSet } from '../../classes/state-person-record-set';
import { Person } from '../../classes/person';

@Component({
  selector: 'app-state-records',
  templateUrl: './state-records.component.html',
  styleUrls: ['./state-records.component.css'],
  providers: [
    SourceFactoryService
  ]
})
export class StateRecordsComponent implements OnInit {
  dataSource: string;
  stateAbbr: string;
  stateName: string;
  dsService: IDataSource;
  SPRecords: StatePersonRecordSet = new StatePersonRecordSet();
  prsnRecords: Array<Person> = new Array<Person>();

  constructor(private sfrService: SourceFactoryService, private route: ActivatedRoute) {
      route.params.subscribe( params => { 
        this.dataSource = params['source'];
        this.stateAbbr = params['stateAbbr'];
        console.log("Parameter (SR): " + this.dataSource);
        this.sfrService.useService(this.dataSource)
          .getStateRecords(this.stateAbbr)
          .subscribe((data: StatePersonRecordSet) => {
            this.SPRecords = data;
            this.stateName = this.SPRecords.stateName;
            this.prsnRecords = this.SPRecords.personRecords;
        })
      });
  }

  ngOnInit() {
  }
}
