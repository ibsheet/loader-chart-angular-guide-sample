import loader from '@ibsheet/loader';
import {
  ChartCreateOptions,
  ChartOptions,
  ChartData,
  IChartInstance,
} from './chart.types';

/**
 * 공통 createChart 함수
 * @param createOptions loader.createChart에 전달할 옵션
 * @param chartOptions 차트에 적용할 options (있다면 setOptions 호출)
 * @param chartData 로드할 데이터 (있다면 loadSearchData 호출)
 * @param redraw 데이터 로드 후 리드로우 여부
 * @returns 차트 인스턴스를 반환하는 Promise
 */
export async function createChart(
  createOptions: ChartCreateOptions,
  chartOptions?: ChartOptions,
  chartData?: ChartData,
  redraw?: boolean
): Promise<IChartInstance> {
  try {
    const chart = (await loader.createChart(createOptions)) as unknown as IChartInstance;

    if (chartOptions) {
      chart.setOptions(chartOptions);
    }
    if (chartData) {
      chart.loadSearchData(chartData, {
        append: true,
        redraw: redraw ?? false,
      });
    }
    return chart;
  } catch (err) {
    console.error('Failed to create chart:', err);
    throw err;
  }
}

/**
 * 공통 removeChart 함수
 * @param createOptions loader.createChart에 전달할 옵션
 * @param chartInstance chartInstance 객체 (참조 확인용)
 * @returns 완료를 나타내는 Promise
 */
export async function removeChart(
  createOptions: ChartCreateOptions,
  chartInstance?: IChartInstance | null
): Promise<void> {
  try {
    if (chartInstance) {
      // 차트 인스턴스에 destroy 메서드가 있으면 호출
      if (typeof chartInstance.destroy === 'function') {
        chartInstance.destroy();
      }
      loader.removeChart(createOptions.id);
    }
  } catch (err) {
    console.error('Failed to remove chart:', err);
    throw err;
  }
}
