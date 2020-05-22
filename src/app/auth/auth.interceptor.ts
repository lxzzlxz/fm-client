/* 登录功能：
    结果:
        1、成功
            1.1、刷新页面不需要重新登录；
            1.2、登录之后，多长时间失效；
            1.3、注销功能的实现；
            1.4、下次打开登录页面，用户名和密码不需要重新输入；
            1.5、页面一打开鼠标停留位置；
            1.6、注册用户功能；
        2、失败
            2.1、用户名、密码未输入；       -- 已解决
            2.2、用户名、密码出错； */




import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenService } from '../api/token.service';
import { Router } from '@angular/router';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(
    private router: Router,
    private tokenSrvc: TokenService
  ) {

  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // const authReq = request.clone({setHeaders: {token: AuthService.}});
    return next.handle(request);
  }
}
