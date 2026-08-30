import { ValueDisplayRendererContext } from '../../renderers';
import { WithPlaceholder } from '../types';
export type LongTextValue = WithPlaceholder & {
    text: string | number | undefined;
} & ({
    lines?: number;
    full?: never;
} | {
    lines?: never;
    full: true;
});
export type LongTextCellValue = string | number | undefined | LongTextValue;
export declare const LongTextCell: (args: LongTextCellValue, meta: ValueDisplayRendererContext) => import("react").JSX.Element;
