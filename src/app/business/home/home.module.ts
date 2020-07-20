import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import {
  NbCardModule,
  NbStepperModule,
  NbSearchModule,
  NbLayoutModule,
  NbUserModule,
  NbIconModule,
  NbSidebarModule
} from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NbCardModule,
    NbStepperModule,
    NbSearchModule,
    NbLayoutModule,
    NbUserModule,
    NbEvaIconsModule,
    NbIconModule,
    NbSidebarModule,
  ],
  exports: [HomeComponent]
})
export class HomeModule { }
