import { OnDestroy } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { DataChange } from './data/data-change';
import { HttpClient } from '@angular/common/http';
import { Constructor } from '@angular/cdk/table';
import { ServerService } from './service/server.service';
import { tap } from 'rxjs/operators';
import { DataGetInterface, DataCreateInterface, DataInterface } from './data/data-interface';

export function restApi<T>(path: string): RestApiBuilder<T> {
    return new RestApiBuilder<T>(path);
}
export type PathVariables = { [token: string]: string | number };
function renderUrlTemplate(template: string, data: PathVariables) {
    const pattern = /\{\s*(\w+?)\s*\}/g;
    return template.replace(pattern, (str, token) => encodeURIComponent(data[token] || str));
}
function mixinGet<T, Id extends keyof T, Ctor extends Constructor<RestApiBase<T, Id>>>(
    ctor: Ctor
) {
    return class extends ctor implements DataGetInterface<T, Id> {
        get(id: Readonly<T[Id]>): Observable<T> {
            return this.http.get<T>(this.idUrl(id));
        }
    };
}

function mixinCreate<T, Id extends keyof T, Ctor extends Constructor<RestApiBase<T, Id>>, C>(ctor: Ctor) {
    return class extends ctor implements DataCreateInterface<T, Id, C> {
        create(obj: Readonly<C>): Observable<T> {
            return this.http.post<T>(this.url, obj).pipe(
                tap(r => this.onCreate(r))
            );
        }
    };
}
// 第一步
export class RestApiBase<T, ID extends keyof T> implements DataInterface<T, ID>, OnDestroy {
    readonly change$ = new Subject<DataChange<T, ID>>();
    readonly url: string;
    readonly idField: ID;
    constructor(
        readonly http: HttpClient,
        private readonly serverService: ServerService
    ) {

    }
    refresh(): void {
        this.change$.next({ type: 'refresh' });
    }
    ngOnDestroy(): void {
    }
    protected onCreate(data: T) {
        this.change$.next({ type: 'create', data, id: data[this.idField] });
    }
    protected idUrl(id: Readonly<T[ID]>): string {
        const encodedId = encodeURIComponent(`${id}`);
        return `${this.url}/${encodedId}`;
    }
}
export class RestApiBuilder<T> {
    // tslint:disable-next-line: variable-name
    constructor(private _path: string) { }
    idField<ID extends keyof T>(idField: ID): RestApiMethodBuilder<T, ID> {
        const path = this._path;
        return new RestApiMethodBuilder<T, ID>(class extends RestApiBase<T, ID> {
            readonly url: string;
            readonly idField: ID = idField;

            constructor(http: HttpClient, serverService: ServerService, pathVariables: PathVariables = {}) {
                super(http, serverService);
                this.url = serverService.api(renderUrlTemplate(path, pathVariables));
            }
        });
    }
}
export class RestApiMethodBuilder<T, ID extends keyof T, Api extends RestApiBase<T, ID> = RestApiBase<T, ID>> {
    // tslint:disable-next-line: variable-name
    constructor(private _class: Constructor<Api>) { }
    get(): RestApiMethodBuilder<T, ID, Api & DataGetInterface<T, ID>> {
        return new RestApiMethodBuilder(mixinGet(this._class));
    }
    create<C = Partial<T>>(): RestApiMethodBuilder<T, ID, Api & DataCreateInterface<T, ID, C>> {
        return new RestApiMethodBuilder(mixinCreate(this._class));
    }
    build(): Constructor<Api> & (new (http: HttpClient, serverService: ServerService, pathVariables?: PathVariables) => Api) {
        return this._class;
    }
}
