import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';
import { BusinessComponent } from '../business/business.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'business',
    component: BusinessComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
