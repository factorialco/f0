import { ReactNode } from 'react';
interface SidebarProps {
    header?: ReactNode;
    body?: ReactNode;
    footer?: ReactNode;
    onFooterDropdownClick?: () => void;
}
declare function _Sidebar({ header, body, footer, onFooterDropdownClick, }: SidebarProps): import("react").JSX.Element;
export declare const Sidebar: import('../../../lib/data-testid').WithDataTestIdReturnType<typeof _Sidebar>;
export {};
