import { ComponentProps } from 'react';
import { F0TagAlert } from '../../../../components/tags/F0TagAlert';
interface AlertTagValue {
    level: ComponentProps<typeof F0TagAlert>["level"];
    label: string;
}
export type AlertTagCellValue = AlertTagValue;
export declare const AlertTagCell: (args: AlertTagCellValue) => import("react").JSX.Element;
export {};
