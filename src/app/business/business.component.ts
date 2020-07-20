import { Component } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.scss']
})
export class BusinessComponent {
  menu: NbMenuItem[] = [
    {
      title: 'home',
      link: 'as',
      icon: 'home-outline',
    },
    {
      title: '系统功能',
      group: true
    },
    {
      title: 'dashboard',
      icon: 'file-text-outline',
      expanded: true,
      children: [
        {
          title: '疫情图',
          link: '/home',
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
}
