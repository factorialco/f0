import { IconType } from '../../../../components/F0Icon';
import { TooltipValue } from '../../../../lib/tooltip-wrapper';
import { ValueDisplayRendererContext } from '../../renderers';
interface IconValue {
    icon: IconType;
    label: string;
    /**
     * A string is shown as a single title line. Pass an object for a title, a
     * body and a bulleted list.
     */
    tooltip?: TooltipValue;
    hideLabel?: boolean;
}
export type IconCellValue = IconValue;
export declare const IconCell: (args: IconCellValue, meta: ValueDisplayRendererContext) => import("react").JSX.Element;
export {};
