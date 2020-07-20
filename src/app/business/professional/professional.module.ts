import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfessionalRoutingModule } from './professional-routing.module';
import { ProfessionalComponent } from './professional.component';
import { NbCardModule, NbSearchModule, NbLayoutModule } from '@nebular/theme';


@NgModule({
  declarations: [ProfessionalComponent],
  imports: [
    CommonModule,
    ProfessionalRoutingModule,
    NbCardModule,
    NbSearchModule,
    NbLayoutModule
  ]
})
export class ProfessionalModule { }
