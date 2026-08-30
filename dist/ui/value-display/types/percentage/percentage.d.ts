import { ValueDisplayRendererContext } from '../../renderers';
import { WithPlaceholder } from '../types';
export interface PercentageValue extends WithPlaceholder {
    percentage: number | undefined;
    label?: string;
}
export type PercentageCellValue = number | undefined | PercentageValue;
export declare const PercentageCell: (args: PercentageCellValue, meta: ValueDisplayRendererContext) => import("react").JSX.Element | null;
