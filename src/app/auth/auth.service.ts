import { Injectable } from '@angular/core';
import { TokenModel } from '../api-model/system/token.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private tokenData: Readonly<TokenModel> | null;
  constructor() { }
  get token(): string {
    return this.tokenData ? this.tokenData.id : '';
  }
}
