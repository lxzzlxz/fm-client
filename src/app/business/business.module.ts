import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BusinessRoutingModule } from './business-routing.module';
import { BusinessComponent } from './business.component';
import { NbLayoutModule, NbSidebarModule, NbMenuModule } from '@nebular/theme';
import { TwoSevenComponent } from './two-seven/two-seven.layout';


@NgModule({
  imports: [
    BusinessRoutingModule,
    CommonModule,
    NbMenuModule,
    NbLayoutModule,
    NbSidebarModule,
  ],
  declarations: [BusinessComponent, TwoSevenComponent],
})
export class BusinessModule { }
