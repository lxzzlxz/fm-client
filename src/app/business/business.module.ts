import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BusinessRoutingModule } from './business-routing.module';
import { BusinessComponent } from './business.component';
import { NbMenuModule } from '@nebular/theme';
import { TwoSevenModule } from '../two-seven/two-seven.module';


@NgModule({
  imports: [
    BusinessRoutingModule,
    CommonModule,
    NbMenuModule,
    TwoSevenModule
  ],
  declarations: [BusinessComponent],
})
export class BusinessModule { }
