import { Component, OnInit, OnDestroy } from '@angular/core';
import { SharedModules } from '../../shared/shared.module';
import { createChartOption, chartOptions, chartData } from './basic-bar-chart.options';
import { createChart, removeChart } from '../../config/chart-create/chart-create';
import type { IChartInstance } from '../../config/chart-create/chart.types';

@Component({
  selector: 'app-basic-bar-chart',
  imports: [SharedModules],
  templateUrl: './basic-bar-chart.html',
  styleUrl: './basic-bar-chart.css',
})
export class BasicBarChart implements OnInit, OnDestroy {
  private chartInstance: IChartInstance | null = null;

  async ngOnInit(): Promise<void> {
    try {
      this.chartInstance = await createChart(createChartOption, chartOptions, chartData);
    } catch (err) {
      console.error('Failed to create chart:', err);
    }
  }

  async ngOnDestroy(): Promise<void> {
    if (this.chartInstance) {
      try {
        await removeChart(createChartOption, this.chartInstance);
      } catch (err) {
        console.error('Failed to remove chart:', err);
      } finally {
        this.chartInstance = null;
      }
    }
  }
}