import { Component } from '@angular/core';
import { SharedModules } from '../../shared/shared.module';
import { createChartOption, chartOptions, chartData } from './basic-line-chart.options';
import { createChart, removeChart } from '../../config/chart-create/chart-create';

@Component({
  selector: 'app-basic-line-chart',
  imports: [SharedModules],
  templateUrl: './basic-line-chart.html',
  styleUrl: './basic-line-chart.css',
})
export class BasicLineChart {
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
