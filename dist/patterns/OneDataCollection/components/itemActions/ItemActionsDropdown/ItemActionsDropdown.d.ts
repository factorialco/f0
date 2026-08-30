import { DropdownItem } from '../../../../../experimental/Navigation/Dropdown';
export type ItemActionsDropdownProps = {
    items: DropdownItem[];
    label?: string;
    onOpenChange?: (open: boolean) => void;
    align?: "start" | "end";
    className?: string;
};
export declare const ItemActionsDropdown: ({ items, onOpenChange, align, label, className, }: ItemActionsDropdownProps) => import("react").JSX.Element | null;
