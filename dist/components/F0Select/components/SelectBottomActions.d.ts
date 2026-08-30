import { F0ButtonProps } from '../../F0Button';
import { IconType } from '../../F0Icon';
export type Action = {
    label: string;
    onClick: () => void;
    icon?: IconType;
    variant?: F0ButtonProps["variant"];
    disabled?: boolean;
};
interface SelectBottomActionsProps {
    actions?: Action[];
    showApplyButton?: boolean;
    showCancelButton?: boolean;
    onApply?: () => void;
    onCancel?: () => void;
    applyLabel?: string;
}
export declare const SelectBottomActions: ({ actions, showApplyButton, onApply, onCancel, showCancelButton, applyLabel, }: SelectBottomActionsProps) => import("react").JSX.Element | null;
export {};
