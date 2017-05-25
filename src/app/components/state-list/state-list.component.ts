import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule, Routes, Router } from '@angular/router';
import { SourceFactoryService } from '../../services/source-factory.service';
import { DataSourceCsvService } from '../../services/data-source-csv.service';
import { DataSourceXlsService } from '../../services/data-source-xls.service';
import { DataSourceXmlService } from '../../services/data-source-xml.service';
import { StateList, StateListItem } from '../../classes/state-list';
import { IDataSource } from '../../classes/i-data-source';

@Component({
  templateUrl: './state-list.component.html',
  styleUrls: ['./state-list.component.css'],
  providers: [
    SourceFactoryService
  ]
})
export class StateListComponent implements OnInit {
  dsService: IDataSource;
  dataSource: string;
  stateList: StateList = new StateList();
  results: Array<StateListItem> = new Array<StateListItem>();

  constructor(private sfService: SourceFactoryService, private route: ActivatedRoute) {
      this.dataSource = this.route.snapshot.paramMap.get('source')
      this.sfService.useService(this.route.snapshot.paramMap.get('source'))
        .getStates()
        .subscribe((data: StateList) => this.stateList = data);
  }

  ngOnInit() {
  }
}