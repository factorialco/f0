import { NewColor } from '../../../../components/tags/F0TagDot';
interface DotTagValue {
    label: string;
    color: NewColor;
}
export type DotTagCellValue = DotTagValue;
export declare const DotTagCell: (args: DotTagCellValue) => import("react").JSX.Element;
export {};
