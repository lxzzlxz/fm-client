export interface DataChangeCreate<T, Id extends keyof T> {
    type: 'create';
    data: Readonly<T>;
    id: Readonly<T[Id]>;
}
export interface DataChangeUpdate<T, Id extends keyof T> {
    type: 'update';
    data: Readonly<T>;
    id: Readonly<T[Id]>;
}
export interface DataChangeDelete<T, Id extends keyof T> {
    type: 'delete';
    data?: never;
    id: Readonly<T[Id]>;
}
export interface DataChangeRefresh {
    type: 'refresh';
    data?: never;
    id?: never;
}
export type DataChange<T, Id extends keyof T> =
  DataChangeCreate<T, Id> |
  DataChangeUpdate<T, Id> |
  DataChangeDelete<T, Id> |
  DataChangeRefresh;
