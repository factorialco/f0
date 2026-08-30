import { ChartConfig, ChartItem } from './types';
export declare function prepareData<K extends ChartConfig>(data: ChartItem<K>[]): ({
    x: string;
} & { [key in keyof K]: number; })[];
