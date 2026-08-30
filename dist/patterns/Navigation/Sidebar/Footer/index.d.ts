import { DropdownItem } from '../../../../experimental/Navigation/Dropdown';
interface SidebarFooterProps {
    user: {
        firstName: string;
        lastName: string;
        avatarUrl?: string;
    };
    showActivityButton?: boolean;
    hasActivityUpdates?: boolean;
    activityButtonShortcut?: string[];
    onActivityButtonClick?: () => void;
    onDropdownClick?: () => void;
    options: DropdownItem[];
}
export declare function SidebarFooter({ user, options, showActivityButton, activityButtonShortcut, onActivityButtonClick, onDropdownClick, hasActivityUpdates, }: SidebarFooterProps): import("react").JSX.Element;
export {};
