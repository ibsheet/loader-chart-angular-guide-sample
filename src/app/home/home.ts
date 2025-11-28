import { Component } from '@angular/core';
import { SharedModules } from '../shared/shared.module';
import { RouterLink } from '@angular/router';

interface itemInfo {
  type: string,
  val: string,
  url: string
}

@Component({
  selector: 'app-home',
  imports: [ 
    SharedModules, RouterLink
  ],
  templateUrl: './home.html',
  styleUrl: './home.css'
})

export class Home {

  items:itemInfo[]=[
    {type: '바 차트', val: '', url: '/basicBarChart'},
    {type: '막대 차트', val: '', url: '/basicColumnChart'},
    {type: '간트 차트', val: '', url: '/ganttChart'},
    {type: '폭포 차트', val: '', url: '/waterfallChart'},
    {type: '꺾은선 차트', val: '', url: '/basicLineChart'},
    {type: '영역 차트', val: '', url: '/basicAreaChart'},
    {type: '응용 예제1 (선거투표율)', val: '', url: '/example1Chart'},
    {type: '응용 예제2 (실시간 순위)', val: '', url: '/example2Chart'},
    {type: '응용 예제3 (풍속)', val: '', url: '/example3Chart'},
  ];

  getImage(val: string): string {
    const str = '/assets/img' + val + '.png';
    return 'url(' + str + ')';
  }

  getColor(val: string): string {
    let color = '';

    switch(val) {
      case '기본기능':
        color = '#d04630';
        break;
      case '고급기능':
        color = '#009ecc';
        break;
      case '실무예제':
        color = '#4caf50';
        break;
    }

    return color;
  }
}
