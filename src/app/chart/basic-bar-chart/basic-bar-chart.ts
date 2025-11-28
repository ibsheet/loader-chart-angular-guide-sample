import { Component } from '@angular/core';
import { SharedModules } from '../../shared/shared.module';
import { createChartOption, chartOptions, chartData } from './basic-bar-chart.options';
import { createChart, removeChart } from '../../config/chart-create/chart-create';

@Component({
  selector: 'app-basic-bar-chart',
  imports: [SharedModules],
  templateUrl: './basic-bar-chart.html',
  styleUrl: './basic-bar-chart.css',
})
export class BasicBarChart {
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