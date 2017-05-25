import { Observable } from 'rxjs/Observable';
import { StateList } from './state-list';
import { StatePersonRecordSet } from './state-person-record-set';

export interface IDataSource {
    getStates(): Observable<StateList>;
    getStateRecords(stateAbbr: string): Observable<StatePersonRecordSet>
}