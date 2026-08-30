import { ValueDisplayRendererContext } from '../../renderers';
import { WithPlaceholder } from '../types';
export interface ProgressBarValue extends WithPlaceholder {
    value: number | undefined;
    max?: number;
    label: string;
    hideLabel?: boolean;
    color?: string;
}
export type ProgressBarCellValue = number | undefined | ProgressBarValue;
export declare const ProgressBarCell: (args: ProgressBarCellValue, _meta: ValueDisplayRendererContext) => import("react").JSX.Element | null;
