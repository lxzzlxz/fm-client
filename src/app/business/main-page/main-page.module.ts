import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainPageRoutingModule } from './main-page-routing.module';
import { MainPageComponent } from './main-page.component';
import { NbLayoutModule, NbCardModule, NbSidebarModule, NbMenuModule, NbActionsModule } from '@nebular/theme';
import { TwoSevenModule } from 'src/app/two-seven/two-seven.module';


@NgModule({
  declarations: [
    MainPageComponent
  ],
  imports: [
    CommonModule,
    MainPageRoutingModule,
    NbLayoutModule,
    NbCardModule,
    NbSidebarModule,
    NbMenuModule,
    NbActionsModule,
    TwoSevenModule
  ]
})
export class MainPageModule { }
