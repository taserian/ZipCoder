import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { IDataSource } from '../classes/i-data-source';
import { StateList } from '../classes/state-list';
import { StatePersonRecordSet } from '../classes/state-person-record-set';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class DataSourceXmlService implements IDataSource {
  private baseUrl: string = 'http://localhost:5000/api/zip/xml'

  constructor(private http: Http) { }

  getStates() : Observable<StateList> {
    return this.http.get(`${this.baseUrl}`)
      .map((resp: Response) => resp.json())
      .catch(this.handleError);
  }

  getStateRecords(stateAbbr: string): Observable<StatePersonRecordSet> {
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
