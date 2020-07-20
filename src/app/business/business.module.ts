import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BusinessRoutingModule } from './business-routing.module';
import { BusinessComponent } from './business.component';
import { NbLayoutModule, NbSidebarModule, NbMenuModule } from '@nebular/theme';


@NgModule({
  imports: [
    BusinessRoutingModule,
    CommonModule,
    NbMenuModule,
    NbLayoutModule,
    NbSidebarModule,
  ],
  declarations: [BusinessComponent],
})
export class BusinessModule { }
