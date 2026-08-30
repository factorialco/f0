import { ValueDisplayRendererContext } from '../../renderers';
import { WithPlaceholder } from '../types';
export interface CurrencyDef {
    symbol: string;
    symbolPosition?: "left" | "right";
    decimalPlaces: number;
}
export interface AmountValue extends WithPlaceholder {
    amount: number | undefined;
    currency?: CurrencyDef;
}
export type AmountCellValue = number | undefined | AmountValue;
export declare const AmountCell: (args: AmountCellValue, meta: ValueDisplayRendererContext) => import("react").JSX.Element;
