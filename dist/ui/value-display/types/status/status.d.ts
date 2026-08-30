import { IconType } from '../../../../components/F0Icon';
import { StatusVariant } from '../../../../components/tags/F0TagStatus';
import { TooltipValue } from '../../../../lib/tooltip-wrapper';
interface StatusValue {
    status: StatusVariant;
    label: string;
    icon?: IconType;
    /**
     * A string is shown as a single title line. Pass an object for a title, a
     * body and a bulleted list.
     */
    tooltip?: TooltipValue;
}
export type StatusCellValue = StatusValue;
export declare const StatusCell: (args: StatusCellValue) => import("react").JSX.Element;
export {};
