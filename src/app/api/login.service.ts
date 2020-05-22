import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private http: HttpClient) { }
  login(user: {
    username: string,
    password: string
  }): Observable<boolean> {
    return this.http.post<boolean>('/api/login', {});
  }
}