import { default as React } from 'react';
import { AvatarVariant } from '../../../components/avatars/F0Avatar';
import { F0ButtonProps } from '../../../components/F0Button';
import { IconType } from '../../../components/F0Icon';
import { DataAttributes } from '../../../global.types';
import { NavigationItem } from '../utils';
export type DropdownItemSeparator = {
    type: "separator";
};
export type DropdownItemLabel = {
    type: "label";
    text: string;
};
export type DropdownItem = DropdownItemObject | DropdownItemSeparator | DropdownItemLabel;
export type DropdownItemObject = Pick<NavigationItem, "label" | "href"> & {
    type?: "item";
    onClick?: () => void;
    icon?: IconType;
    description?: string;
    critical?: boolean;
    avatar?: AvatarVariant;
    disabled?: boolean;
    /**
     * Tooltip shown on hover while the item is `disabled` — use it to explain why
     * the action is unavailable. Ignored when the item is not disabled. The
     * tooltip trigger re-enables pointer events, so it works despite the disabled
     * item's `pointer-events: none`.
     */
    disabledTooltip?: string;
};
export type DropdownInternalProps = {
    items: DropdownItem[];
    icon?: IconType;
    size?: F0ButtonProps["size"];
    children?: React.ReactNode;
    align?: "start" | "end" | "center";
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
    label?: string;
    /**
     * Whether the dropdown trigger is disabled. When true, the menu cannot be
     * opened via click, keyboard, or focus and the trigger receives
     * `aria-disabled="true"`. When a custom trigger is provided via `children`,
     * `disabled` is forwarded to it via `cloneElement` if it is a single React
     * element; consumer-supplied `disabled` / `aria-disabled` always win.
     * @default false
     */
    disabled?: boolean;
} & DataAttributes;
export declare function DropdownInternal({ items, icon, align, size, children, open: controlledOpen, onOpenChange: controlledOnOpenChange, label, disabled, ...rest }: DropdownInternalProps): React.JSX.Element;
