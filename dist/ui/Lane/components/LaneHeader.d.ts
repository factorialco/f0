import { NewColor } from '../../../components/tags/F0TagDot';
import { Variant } from '../../../components/tags/F0TagStatus';
type LaneHeaderProps = {
    label: string;
    variant?: Variant;
    color?: NewColor;
    count: number;
    onPrimaryAction?: () => void;
};
export declare const LaneHeader: ({ label, variant, color, count, onPrimaryAction, }: LaneHeaderProps) => import("react").JSX.Element;
export {};
