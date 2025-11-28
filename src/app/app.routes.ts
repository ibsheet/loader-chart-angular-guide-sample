import { Routes } from '@angular/router';
import { Home } from './home/home';

import { BasicBarChart } from './chart/basic-bar-chart/basic-bar-chart';
import { BasicColumnChart } from './chart/basic-column-chart/basic-column-chart';
import { GanttChart } from './chart/gantt-chart/gantt-chart';
import { WaterfallChart } from './chart/waterfall-chart/waterfall-chart';
import { BasicLineChart } from './chart/basic-line-chart/basic-line-chart';
import { BasicAreaChart } from './chart/basic-area-chart/basic-area-chart';
import { Example1Chart } from './chart/example1-chart/example1-chart';
import { Example2Chart } from './chart/example2-chart/example2-chart';
import { Example3Chart } from './chart/example3-chart/example3-chart';

export const routes: Routes = [
    {path: '', component: Home},
    {path: 'basicBarChart', component: BasicBarChart},
    {path: 'basicColumnChart', component: BasicColumnChart},
    {path: 'ganttChart', component: GanttChart},
    {path: 'waterfallChart', component: WaterfallChart},
    {path: 'basicLineChart', component: BasicLineChart},
    {path: 'basicAreaChart', component: BasicAreaChart},
    {path: 'example1Chart', component: Example1Chart},
    {path: 'example2Chart', component: Example2Chart},
    {path: 'example3Chart', component: Example3Chart},
];
