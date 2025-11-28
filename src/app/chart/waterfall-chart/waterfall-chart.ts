import { Component } from '@angular/core';
import { SharedModules } from '../../shared/shared.module';
import { createChartOption, chartOptions, chartData } from './waterfall-chart.options';
import { createChart, removeChart } from '../../config/chart-create/chart-create';

@Component({
  selector: 'app-waterfall-chart',
  imports: [SharedModules],
  templateUrl: './waterfall-chart.html',
  styleUrl: './waterfall-chart.css',
})
export class WaterfallChart {
  chartInstance: any = null;

  ngOnInit(): void {
    createChart(createChartOption, chartOptions, chartData)
    .then((chart: any) => {
      this.chartInstance = chart;
    })
  }

  ngOnDestroy(): void {
    if (this.chartInstance) {
      removeChart(createChartOption, this.chartInstance)
      .catch((err: any) => console.error('Failed to remove chart', err));
      this.chartInstance = null;
    }
  }
}