import { DropdownInternalProps } from '../../../experimental/Navigation/Dropdown/internal';
import { DialogModule } from '../../../lib/providers/dialogs-alike/module-types';
import { TabsProps } from '../../../patterns/Navigation/Tabs';
export type HeaderProps = {
    /**
     * Disables the close button of the dialog.
     * @internal
     */
    disableClose?: boolean;
    title?: string;
    description?: string;
    module?: DialogModule;
    otherActions?: DropdownInternalProps["items"];
} & Partial<Pick<TabsProps, "tabs" | "activeTabId" | "setActiveTabId">>;
export declare const Header: ({ title, description, module, otherActions, tabs, activeTabId, setActiveTabId, disableClose, }: HeaderProps) => import("react").JSX.Element;
