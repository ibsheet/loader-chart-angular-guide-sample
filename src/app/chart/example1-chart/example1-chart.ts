import { Component } from '@angular/core';
import { SharedModules } from '../../shared/shared.module';
import { createChartOption, chartOptions, chartData } from './example1-chart.options';
import { createChart, removeChart } from '../../config/chart-create/chart-create';

@Component({
  selector: 'app-example1-chart',
  imports: [SharedModules],
  templateUrl: './example1-chart.html',
  styleUrl: './example1-chart.css',
})
export class Example1Chart {
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
