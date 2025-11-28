import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import loader from '@ibsheet/loader';

@Component({
  selector: 'app-chart-create',
  imports: [],
  templateUrl: './chart-create.html',
  styleUrl: './chart-create.css',
})
export class ChartCreate {
  createOptions: any;
  chartOptions: any;
  chartData: any;

  constructor(
    @Inject(Array) createOptions: any, 
    @Inject(Object) chartOptions: any, 
    @Inject(Array) chartData: any) {
    this.createOptions = createOptions;
    this.chartOptions = chartOptions;
    this.chartData = chartData;
  }

  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}

/**
 * 공통 createChart 함수
 * @param createOptions loader.createChart에 전달할 옵션
 * @param chartOptions 차트에 적용할 options (있다면 setOptions 호출)
 * @param chartData 로드할 데이터 (있다면 loadSearchData 호출)
 */
export function createChart(createOptions: any, chartOptions?: any, chartData?: any, redraw?: boolean): Promise<any> {
  return loader.createChart(createOptions)
    .then((chart: any) => {
      if (chartOptions) {
        chart.setOptions(chartOptions);
      }
      if (chartData) {
        if (redraw) {
          chart.loadSearchData(chartData, { append: true, redraw: true});
        } else {
          chart.loadSearchData(chartData, { append: true });
        }
      }
      return chart;
    });
}

/**
 * 공통 removeChart 함수
 * @param createOptions loader.createChart에 전달할 옵션
 * @param chartInstance chartInstance 객체
 * @returns 
 */
export function removeChart(createOptions: any, chartInstance?: any): Promise<void> {
  return new Promise<void>((resolve, reject) => {
    try {
      // 먼저 chart instance 자체에 정리 메서드가 있는지 시도
      if (chartInstance) {
        loader.removeChart(createOptions.id);
        chartInstance = null;
      }

      // 컴포넌트 측 참조 해제 권장 (호출자 responsibility)
      resolve();
    } catch (err) {
      reject(err);
    }
  });
}
