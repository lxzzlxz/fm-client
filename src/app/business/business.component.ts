import { Component } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';
import { BUSINESS_MENUS } from './business-menu';

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
})
export class BusinessComponent {
  menu: NbMenuItem[] = BUSINESS_MENUS;
}
