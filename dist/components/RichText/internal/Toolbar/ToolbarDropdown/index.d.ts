import { IconType } from '../../../../F0Icon';
interface ToolbarDropdownItem {
    icon: IconType;
    label: string;
    onClick: () => void;
    isActive?: boolean;
    disabled?: boolean;
}
interface ToolbarDropdownProps {
    items: ToolbarDropdownItem[];
    disabled?: boolean;
    darkMode?: boolean;
    position?: "top" | "bottom";
    activator: {
        label: string;
        icon: IconType;
    };
}
export declare const ToolbarDropdown: ({ items, disabled, activator, darkMode, position, }: ToolbarDropdownProps) => import("react").JSX.Element;
export type { ToolbarDropdownItem, ToolbarDropdownProps };
