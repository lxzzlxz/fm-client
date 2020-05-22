import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {Router} from '@angular/router';
import { LoginService } from 'src/app/api/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(
    private loginSrvc: LoginService,
    private router: Router,
  ) {

  }
  formGroup = new FormGroup({
    username: new FormControl(),
    password: new FormControl()
  });
  onSubmit() {
    this.formGroup.disable();
    this.loginSrvc.login( this.formGroup.value ).subscribe({
      next : () => {
        this.router.navigateByUrl('home');
      }, error: err => {
        console.log('失败');
      }
    }
    );
  }
}