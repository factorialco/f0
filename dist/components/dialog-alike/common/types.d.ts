import { ReactNode } from 'react';
import { IconType } from '../../F0Icon/F0Icon';
import { TabsProps } from '../../../patterns/Navigation/Tabs';
import { DialogModule } from '../../../lib/providers/dialogs-alike/module-types';
import { HeaderProps } from './Header';
export declare const dialogAlikePositions: readonly ["center", "left", "right", "fullscreen"];
export type DialogAlikePosition = (typeof dialogAlikePositions)[number];
export declare const dialogAlikeSizes: readonly ["sm", "md", "lg", "xl", "fullscreen"];
export type DialogAlikeSize = (typeof dialogAlikeSizes)[number];
export declare const dialogAlikePrivateProps: readonly ["variant", "disableClose"];
export type DialogAlikePrivateProps = (typeof dialogAlikePrivateProps)[number];
export type DialogAlikeAction = {
    value?: string;
    label: string;
    icon?: IconType;
    onClick: () => void | Promise<void>;
    disabled?: boolean;
    loading?: boolean;
    closeOnClick?: boolean;
};
export type DialogAlikeActionsProps = {
    primaryAction?: DialogAlikeAction | DialogAlikeAction[];
    secondaryAction?: DialogAlikeAction | DialogAlikeAction[];
};
export type DialogAlikeTabsProps = {
    tabs: TabsProps["tabs"];
    activeTabId?: TabsProps["activeTabId"];
    setActiveTabId?: TabsProps["setActiveTabId"];
};
export type DialogAlikeInternalProps = {
    isOpen: boolean;
    onClose: () => void;
    size?: DialogAlikeSize;
    primaryAction?: DialogAlikeAction | DialogAlikeAction[];
    secondaryAction?: DialogAlikeAction | DialogAlikeAction[];
    title?: string;
    description?: string;
    /**
     * Whether the dialog should be modal (only closable by clickiong the actions).
     * @default false
     */
    modal?: boolean;
    /**
     * Disables the close button of the dialog.
     * @internal
     */
    disableClose?: boolean;
    module?: DialogModule;
    otherActions?: HeaderProps["otherActions"];
    children: ReactNode;
    disableContentPadding?: boolean;
    /**
     * Override the DOM element the dialog is portaled into. By default center
     * dialogs portal to the top-level `#f0-overlay-root` (escaping app stacking
     * contexts such as the ApplicationFrame's `isolate` layer) and side drawers
     * to `#content`. Pass an element, or `null` to portal to `document.body`.
     */
    container?: HTMLElement | null;
} & (DialogAlikeTabsProps | {
    [key in keyof DialogAlikeTabsProps]?: undefined;
});
