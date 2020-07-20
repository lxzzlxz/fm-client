import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TwoSevenComponent } from './two-seven.layout';
import { NbLayoutModule, NbSidebarModule } from '@nebular/theme';

@NgModule({
  declarations: [TwoSevenComponent],
  imports: [
    CommonModule,
    NbLayoutModule,
    NbSidebarModule,
  ],
  exports: [TwoSevenComponent]
})
export class TwoSevenModule { }
