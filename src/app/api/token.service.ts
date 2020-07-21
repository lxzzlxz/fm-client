import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { restApi } from '../@core/rest-api-base';
import { TokenModel } from '../api-model/system/token.model';
import { ServerService } from '../@core/service/server.service';
const tokenApiBase = restApi<TokenModel>('tokens').idField('id')
  .create<{
    username: string;
    password: string;
    clientType?: 'web' | 'mobile';
  }>()
  .build();
@Injectable({
  providedIn: 'root'
})
export class TokenService extends tokenApiBase {
  constructor(
    http: HttpClient,
    serverService: ServerService
  ) {
    super(http, serverService);
  }
}
