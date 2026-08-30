import { ValueDisplayRendererContext } from '../../renderers';
import { WithPlaceholder } from '../types';
interface DateValue extends WithPlaceholder {
    date: Date | undefined;
}
export type DateCellValue = Date | undefined | DateValue;
export declare const DateCell: (args: DateCellValue, meta: ValueDisplayRendererContext) => import("react").JSX.Element;
export {};
