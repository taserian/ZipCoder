import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { DataSourceCsvService } from './services/data-source-csv.service';
import { DataSourceXlsService } from './services/data-source-xls.service';
import { DataSourceXmlService } from './services/data-source-xml.service';
import { SourceFactoryService } from './services/source-factory.service';

import { AppComponent } from './app.component';
import { DataSourceComponent } from './components/data-source/data-source.component';
import { StateListComponent } from './components/state-list/state-list.component';
import { StateRecordsComponent } from './components/state-records/state-records.component';
//import { StateListRoutingModule } from './components/state-list/state-list.routes';
import { routing } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    DataSourceComponent,
    StateListComponent,
    StateRecordsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
   // StateListRoutingModule,
    routing
  ],
  providers: [
    DataSourceCsvService,
    DataSourceXlsService,
    DataSourceXmlService,
    SourceFactoryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
