import { Injectable } from '@angular/core';
import { TokenModel } from '../api-model/system/token.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _redirect = '';
  private tokenData: Readonly<TokenModel> | null;
  constructor(
    private _router: Router
  ) { }
  get token(): string {
    return this.tokenData ? this.tokenData.id : '';
  }
  redirectBack() {
    this._router.navigateByUrl(this._redirect, { replaceUrl: true });
    this._redirect = '';
  }
}
