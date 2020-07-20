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
  declarations: [BusinessComponent, BaseComponent],
  entryComponents: [BaseComponent],
})
export class BusinessModule { }
