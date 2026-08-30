import { DropdownItem } from '../../../../../experimental/Navigation/Dropdown/internal';
export type ItemActionsMobileProps = {
    items: DropdownItem[];
    onOpenChange?: (open: boolean) => void;
    className?: string;
};
export declare const ItemActionsMobile: ({ items, onOpenChange, className, }: ItemActionsMobileProps) => import("react").JSX.Element;
