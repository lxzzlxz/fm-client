import { Component } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent {
  items: NbMenuItem[] = [
    {
      title: 'home',
      link: 'as',
      icon: 'cube-outline',
    },
    {
      title: 'dashboard',
      expanded: true,
      children: [
        {
          title: '疫情图',
          icon: 'activity-outline',
        },
        {
          title: '专家分析',
          icon: 'people-outline'
        }
      ]
    },
    {
      title: 'dashboard',
      expanded: true,
      children: [
        {
          title: 'change'
        },
        {
          title: 'save'
        }
      ]
    }
   ];
  constructor() {

  }
}
