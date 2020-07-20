import { Injectable } from '@angular/core';
import { CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivateChild {
  constructor(private _authSrvc: AuthService) {
  }

  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    // if (!this._authSrvc.loggedIn) {
    //   if (state.url !== `/login`) {
    //     this._authSrvc.redirectToLogin(state.url);
    //     return false;
    //   }
    // }
    return true;
  }
}
