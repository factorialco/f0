import { ComponentProps, ReactNode } from 'react';
import { IconType } from '../F0Icon';
import { Input as ShadcnInput } from '../../ui/input';
import { InputFieldProps } from '../F0InputField';
export interface NumberInputPopoverConfig {
    icon?: IconType;
    side?: "top" | "bottom" | "left" | "right";
    align?: "start" | "center" | "end";
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
    triggerLabel?: string;
    commitMode?: "immediate" | "deferred";
    apply?: {
        label?: string;
        icon?: IconType;
        closeOnApply?: boolean;
    };
}
export type NumberInputInternalProps = Pick<ComponentProps<typeof ShadcnInput>, "ref" | "id" | "aria-describedby" | "aria-invalid"> & Pick<InputFieldProps<string>, "autoFocus" | "required" | "disabled" | "size" | "placeholder" | "clearable" | "maxLength" | "label" | "labelIcon" | "icon" | "hideLabel" | "name" | "error" | "status" | "hint" | "autocomplete" | "buttonToggle" | "hideMaxLength" | "loading" | "transparent" | "onBlur" | "readonly"> & {
    locale: string;
    value?: number | null;
    step?: number;
    min?: number;
    max?: number;
    maxDecimals?: number;
    /**
     * Show the locale's thousands separators in the resting display (e.g.
     * `1,234,567`). While the field is focused the number is shown ungrouped
     * for easy editing. Off by default — enable it for amounts/quantities, but
     * leave it off for years, IDs and other non-grouped numbers. @default false
     */
    grouping?: boolean;
    onChange?: (value: number | null) => void;
    units?: string;
    extraContent?: ReactNode;
    inputWidth?: string;
    popover?: NumberInputPopoverConfig;
};
export declare const NumberInputInternal: import('react').ForwardRefExoticComponent<Omit<NumberInputInternalProps, "ref"> & import('react').RefAttributes<HTMLInputElement>>;
