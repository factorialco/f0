import { IconType } from '../../components/F0Icon';
import { NavigationProps } from '../../experimental/Navigation/Header/PageNavigation';
export declare const dialogPositions: readonly ["center", "left", "right", "fullscreen"];
export type DialogPosition = (typeof dialogPositions)[number];
export declare const dialogWidths: readonly ["sm", "md", "lg", "xl"];
export type DialogWidth = (typeof dialogWidths)[number];
export type F0DialogPrimaryAction = {
    label: string;
    icon?: IconType;
    iconPosition?: "left" | "right";
    onClick: () => void;
    disabled?: boolean;
    loading?: boolean;
};
export type F0DialogSecondaryAction = {
    label: string;
    icon?: IconType;
    iconPosition?: "left" | "right";
    onClick: () => void;
    disabled?: boolean;
    loading?: boolean;
};
type F0DialogActionItem = {
    value: string;
    label: string;
    icon?: IconType;
    onClick: () => void;
    disabled?: boolean;
    loading?: boolean;
};
export type F0DialogPrimaryActionItem = F0DialogActionItem;
export type F0DialogSecondaryActionItem = F0DialogActionItem;
export type F0DialogActionsProps = {
    primaryAction?: F0DialogPrimaryAction | F0DialogPrimaryActionItem[];
    secondaryAction?: F0DialogSecondaryAction | F0DialogSecondaryActionItem[];
};
export type DialogControls = {
    kind: "resource";
    /**
     * "Open detail" affordance. Provide `url` to render a link to the
     * resource's full-page view (routed through the app's `LinkProvider`,
     * so it is cmd/middle-clickable) — typically the active item's
     * `itemUrl` from `useDataCollectionItemNavigation`. Provide `onClick`
     * for imperative expansion. `url` wins when both are set.
     */
    expand?: {
        label: string;
        url?: string;
        onClick?: () => void;
    };
    navigation?: NavigationProps;
} | {
    kind: "back";
    label: string;
    onClick: () => void;
};
export {};
