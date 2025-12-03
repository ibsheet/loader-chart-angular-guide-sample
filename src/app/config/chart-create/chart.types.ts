/**
 * 차트 관련 타입 정의
 */

/** 차트 생성 옵션 */
export interface ChartCreateOptions {
  id: string;
  el: string;
  options: {
    width: string;
    height: string;
  };
}

/** 차트 인스턴스 인터페이스 */
export interface IChartInstance {
  getId(): string;
  setOptions(options: ChartOptions): void;
  loadSearchData(data: ChartData, options?: LoadDataOptions): void;
  destroy?(): void;
}

/** 데이터 로드 옵션 */
export interface LoadDataOptions {
  append?: boolean;
  redraw?: boolean;
}

/** 색상 타입 (문자열 또는 그라데이션 객체) */
export type ChartColor =
  | string
  | {
      linearGradient?: Record<string, number>;
      radialGradient?: Record<string, number>;
      stops?: (string | number)[][];
    };

/** 차트 옵션 (Highcharts 기반) */
export interface ChartOptions {
  colors?: ChartColor[];
  chart?: {
    type?: string;
    inverted?: boolean;
    [key: string]: unknown;
  };
  title?: {
    text?: string;
    align?: string;
    style?: Record<string, string>;
  };
  subtitle?: {
    text?: string;
    align?: string;
    style?: Record<string, string>;
  };
  xAxis?: {
    categories?: string[];
    gridLineWidth?: number;
    lineWidth?: number;
    [key: string]: unknown;
  };
  yAxis?: {
    title?: {
      text?: string;
      align?: string;
      style?: Record<string, string>;
    };
    tickInterval?: number;
    gridLineWidth?: number;
    [key: string]: unknown;
  };
  plotOptions?: Record<string, unknown>;
  legend?: Record<string, unknown>;
  tooltip?: Record<string, unknown>;
  [key: string]: unknown;
}

/** 차트 데이터 포인트 (다양한 Highcharts 형식 지원) */
export type ChartDataPoint =
  | number
  | null
  | number[] // Gantt, range 차트 등 [x, y] 또는 [x, low, high] 형식
  | { name?: string; x?: number; y?: number | null; marker?: { symbol?: string }; [key: string]: unknown };

/** 차트 시리즈 데이터 */
export interface ChartSeriesData {
  name?: string;
  data?: ChartDataPoint[];
  shadow?: boolean;
  [key: string]: unknown;
}

/** 차트 데이터 */
export interface ChartData {
  series?: ChartSeriesData[];
  xAxis?: {
    categories?: string[];
  };
  [key: string]: unknown;
}
