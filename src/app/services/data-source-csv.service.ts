import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { IDataSource } from '../classes/i-data-source';
import { StateList } from '../classes/state-list';
import { StatePersonRecordSet } from '../classes/state-person-record-set';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class DataSourceCsvService implements IDataSource {
  private baseUrl: string = 'http://localhost:5000/api/zip/csv'

  constructor(private http: Http) { }

  public getStates() : Observable<StateList> {
    var SList = this.http.get(this.baseUrl)
      .map((resp: Response) => resp.json())
      .catch(this.handleError);
    return SList;
  }

  public getStateRecords(stateAbbr: string): Observable<StatePersonRecordSet> {
    if (stateAbbr){
      let url = `${this.baseUrl}/${stateAbbr}`;
      return this.http.get(url)
        .map((resp: Response) => resp.json())
        .catch(this.handleError);
    }
  }
    
  handleError(error: any) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }

}
