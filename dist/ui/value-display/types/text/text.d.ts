import { ValueDisplayRendererContext } from '../../renderers';
import { WithPlaceholder } from '../types';
export interface TextValue extends WithPlaceholder {
    text: string | number | undefined;
}
export type TextCellValue = string | number | undefined | TextValue;
export declare const TextCell: (args: TextCellValue, meta: ValueDisplayRendererContext) => import("react").JSX.Element;
