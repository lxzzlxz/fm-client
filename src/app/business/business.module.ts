import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BusinessRoutingModule } from './business-routing.module';
import { BusinessComponent } from './business.component';
import { NbLayoutModule, NbSidebarModule, NbMenuModule } from '@nebular/theme';
import { TwoSevenModule } from './two-seven/two-seven.module';


@NgModule({
  imports: [
    BusinessRoutingModule,
    CommonModule,
    NbMenuModule,
    NbLayoutModule,
    NbSidebarModule,
    TwoSevenModule
  ],
  declarations: [BusinessComponent],
})
export class BusinessModule { }
