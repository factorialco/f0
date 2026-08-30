import { ReactNode } from 'react';
import { ModuleId } from '../../components/avatars/F0AvatarModule';
import { DropdownInternalProps } from '../../experimental/Navigation/Dropdown/internal';
import { NavigationProps } from '../../experimental/Navigation/Header/PageNavigation';
import { TabsProps } from '../Navigation/Tabs';
import { F0ResourceHeaderProps } from '../F0ResourceHeader';
import { DialogControls, DialogPosition, DialogWidth, F0DialogPrimaryAction, F0DialogPrimaryActionItem, F0DialogSecondaryAction, F0DialogSecondaryActionItem } from './types';
export type F0DialogHeaderProps = {
    title?: string;
    description?: string;
    module?: {
        id: ModuleId;
        label: string;
        href: string;
    };
    otherActions?: DropdownInternalProps["items"];
    navigation?: NavigationProps;
    resourceHeader?: F0ResourceHeaderProps;
    controls?: DialogControls;
    headerStatus?: string;
    /** See {@link F0DialogInternalProps.dismissable} — hides the close button. */
    dismissable?: boolean;
} & Partial<Pick<TabsProps, "tabs" | "activeTabId" | "setActiveTabId">>;
/**
 * Controls FLANKING the panel rather than inside it — the affordance for a
 * dialog whose content can be changed without closing it (see
 * `F0CarouselDialog`).
 *
 * They are rendered INSIDE the Radix content, so they are inside the focus trap
 * and reachable by keyboard, and merely positioned outside its box. Anything
 * portalled next to the dialog instead would be `aria-hidden` and inert, which
 * is exactly the trap a modal is supposed to set.
 */
export type F0DialogSideControls = {
    previous?: ReactNode;
    next?: ReactNode;
};
export type F0DialogContextType = {
    open: boolean;
    onClose: () => void;
    shownBottomSheet: boolean;
    position: DialogPosition;
    /**
     * The dialog's content container element.
     * Use this as the `portalContainer` prop for components like F0Select
     * to ensure dropdowns render inside the dialog.
     */
    portalContainer: HTMLDivElement | null;
};
export type F0DialogProviderProps = {
    isOpen: boolean;
    onClose: () => void;
    shownBottomSheet?: boolean;
    position: DialogPosition;
    children: ReactNode;
    portalContainer: HTMLDivElement | null;
};
export type F0DialogInternalProps = {
    isOpen: boolean;
    onClose: () => void;
    /**
     * Whether the reader can walk away. `false` removes the close button and
     * stops Escape and a click outside from closing — a forced choice, where the
     * dialog's own actions are the only way out.
     *
     * Use it only when leaving would be worse than being trapped: a decision the
     * product genuinely cannot proceed without. A dialog nobody can dismiss is a
     * dead end for anyone who does not understand it.
     * @default true
     */
    dismissable?: boolean;
    asBottomSheetInMobile?: boolean;
    position?: DialogPosition;
    width?: DialogWidth;
    primaryAction?: F0DialogPrimaryAction | F0DialogPrimaryActionItem[];
    secondaryAction?: F0DialogSecondaryAction | F0DialogSecondaryActionItem[];
    title?: string;
    description?: string;
    module?: F0DialogHeaderProps["module"];
    otherActions?: F0DialogHeaderProps["otherActions"];
    navigation?: F0DialogHeaderProps["navigation"];
    resourceHeader?: F0DialogHeaderProps["resourceHeader"];
    controls?: F0DialogHeaderProps["controls"];
    /**
     * A short reading beside the close button — "3 of 11". Where the dialog says
     * WHICH of several things it is currently showing.
     *
     * Not `navigation`: that draws its own arrows in the header. This is the label
     * alone, for a dialog whose arrows are somewhere else (`sideControls`).
     */
    headerStatus?: F0DialogHeaderProps["headerStatus"];
    /**
     * Controls flanking the panel — see {@link F0DialogSideControls}. On a phone
     * (where the dialog is a bottom sheet and there is no room beside it) they move
     * ONTO the panel's own edges instead, which is where a gallery puts them.
     */
    sideControls?: F0DialogSideControls;
    children: ReactNode;
    disableContentPadding?: boolean;
    container?: HTMLElement | null;
} & Partial<Pick<TabsProps, "tabs" | "activeTabId" | "setActiveTabId">>;
