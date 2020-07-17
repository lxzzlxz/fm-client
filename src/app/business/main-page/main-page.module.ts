import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainPageRoutingModule } from './main-page-routing.module';
import { MainPageComponent } from './main-page.component';
import { NbLayoutModule, NbCardModule, NbSidebarModule, NbMenuModule, NbActionsModule } from '@nebular/theme';


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
  ]
})
export class MainPageModule { }
