import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BusinessRoutingModule } from './business-routing.module';
import { BusinessComponent } from './business.component';
import { NbLayoutModule, NbSidebarModule } from '@nebular/theme';
import { NbMenuModule } from '@nebular/theme';
import { BaseComponent } from './base/base.component';

@NgModule({
  imports: [
    BusinessRoutingModule,
    CommonModule,
    NbMenuModule,
    NbLayoutModule,
    NbSidebarModule,
  ],
  exports: [BaseComponent],
  declarations: [BusinessComponent, BaseComponent],
})
export class BusinessModule { }
