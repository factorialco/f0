import { MouseEventHandler } from 'react';
import { ActionButtonProps, ActionButtonVariant } from '../Action';
export type ButtonCopyProps = Omit<ActionButtonProps, "onClick" | "children" | "title" | "label" | "hideLabel" | "icon" | "target" | "aria-label"> & {
    valueToCopy: string;
    copiedTooltipLabel?: string;
    copyTooltipLabel?: string;
    onCopy?: MouseEventHandler<HTMLElement>;
    variant?: ActionButtonVariant;
};
export declare const ButtonCopy: import('react').ForwardRefExoticComponent<Omit<ActionButtonProps, "children" | "label" | "title" | "icon" | "target" | "aria-label" | "onClick" | "hideLabel"> & {
    valueToCopy: string;
    copiedTooltipLabel?: string;
    copyTooltipLabel?: string;
    onCopy?: MouseEventHandler<HTMLElement>;
    variant?: ActionButtonVariant;
} & import('react').RefAttributes<HTMLButtonElement>>;
