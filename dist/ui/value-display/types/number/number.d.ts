import { ValueDisplayRendererContext } from '../../renderers';
import { WithPlaceholder } from '../types';
interface NumberValue extends WithPlaceholder {
    number: number | undefined;
    units?: string;
    unitsPosition?: "left" | "right";
    decimalPlaces?: number | undefined;
}
export type NumberCellValue = number | undefined | NumberValue;
export declare const NumberCell: (args: NumberCellValue, meta: ValueDisplayRendererContext) => import("react").JSX.Element;
export {};
