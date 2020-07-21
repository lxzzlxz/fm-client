import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenService } from './token.service';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(
    private http: HttpClient,
    private _tokenApi: TokenService,
  ) { }
  login(user: {
    username: string,
    password: string
  }): Observable<boolean> {
    return this.http.post<boolean>('/api/login', user);
    // return this._tokenApi
  }
}
