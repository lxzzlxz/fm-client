import { Observable } from 'rxjs';
import { DataChange } from './data-change';

export interface DataInterface<T, ID extends keyof T> {
    readonly idField: ID;
    readonly change$: Observable<DataChange<T, ID>>;
    refresh(): void;
}
export interface DataGetInterface<T, ID extends keyof T> extends DataInterface<T, ID> {
    get(id: Readonly<T[ID]>): Observable<T>;
}
export interface DataCreateInterface<T, ID extends keyof T, C> extends DataInterface<T, ID> {
    create(Obj: Readonly<C>): Observable<T>;
}
