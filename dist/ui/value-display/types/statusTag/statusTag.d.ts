import { ComponentProps } from 'react';
import { F0TagStatus } from '../../../../components/tags/F0TagStatus';
interface StatusTagValue {
    variant: ComponentProps<typeof F0TagStatus>["variant"];
    label: string;
}
export type StatusTagCellValue = StatusTagValue;
export declare const StatusTagCell: (args: StatusTagCellValue) => import("react").JSX.Element;
export {};
