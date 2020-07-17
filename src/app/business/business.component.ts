import { Component } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';
import { MENU_ITEMS } from './business-menu';

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.scss']
})
export class BusinessComponent {
  // items: NbMenuItem[] = [];
  items: any[] = ['1', '2'];
  constructor() {
    // this.items = MENU_ITEMS;
  }
}
