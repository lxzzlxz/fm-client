import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BusinessRoutingModule } from './business-routing.module';
import { BusinessComponent } from './business.component';
import { NbMenuModule } from '@nebular/theme';
import { TwoSevenModule } from '../two-seven/two-seven.module';


@NgModule({
  declarations: [BusinessComponent],
  imports: [
    CommonModule,
    BusinessRoutingModule,
    NbMenuModule,
    TwoSevenModule,
  ],
  exports: [BusinessComponent]
})
export class BusinessModule { }
