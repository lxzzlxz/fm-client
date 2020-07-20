import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { NbLayoutModule, NbCardModule, NbSidebarModule, NbFormFieldModule, NbInputModule, NbButtonModule, NbDialogModule } from '@nebular/theme';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeModule } from '../business/home/home.module';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    HomeModule,
    ReactiveFormsModule,
    NbLayoutModule,
    NbCardModule,
    NbSidebarModule,
    NbFormFieldModule,
    NbInputModule,
    NbButtonModule,
    NbDialogModule,
  ],
})
export class LoginModule { }
