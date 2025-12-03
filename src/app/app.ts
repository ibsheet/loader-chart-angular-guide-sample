import { Component } from '@angular/core';
import { SharedModules } from './shared/shared.module';
import { RouterOutlet, RouterLink } from '@angular/router';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faCode, faSearch } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import loader from '@ibsheet/loader';
import Highcharts from 'highcharts';
import 'highcharts/highcharts-more';
import 'highcharts/modules/series-label';

// Highcharts를 전역 객체에 설정
(window as typeof window & { Highcharts: typeof Highcharts }).Highcharts = Highcharts;

const ibchartLib = {
  name: 'ibchart',
  baseUrl: 'https://www.ibsheet.com/v8/assets/lib/ibchart/'
}

// 로더 config
loader.config({
  registry: [ibchartLib]
});

loader.load()

@Component({
  selector: 'app-root',
  imports: [
    SharedModules,
    RouterOutlet, RouterLink
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  constructor(library: FaIconLibrary) {
    // 사용할 아이콘을 라이브러리에 등록
    library.addIcons(faCode, faSearch, faGithub);
  }
  protected title = 'ng-guide-samples';
  protected currentYear = new Date().getFullYear();
}
