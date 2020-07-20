import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BusinessComponent } from './business.component';
import { AuthGuard } from '../auth/auth.guard';
import { LoginComponent } from '../login/login.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    component: BusinessComponent,
    canActivateChild: [AuthGuard],
    children: [
      {
        path: 'home',
        component: HomeComponent
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BusinessRoutingModule { }
