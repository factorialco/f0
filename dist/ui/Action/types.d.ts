import { HTMLAttributeAnchorTarget, ReactNode } from 'react';
export declare const actionButtonVariants: readonly ["default", "outline", "critical", "neutral", "ghost", "promote", "outlinePromote", "ai"];
export type ActionButtonVariant = (typeof actionButtonVariants)[number];
export declare const actionLinkVariants: readonly ["link", "unstyled", "mention"];
export type ActionLinkVariant = (typeof actionLinkVariants)[number];
export declare const actionVariants: readonly ["default", "outline", "critical", "neutral", "ghost", "promote", "outlinePromote", "ai", "link", "unstyled", "mention"];
export type ActionVariant = (typeof actionVariants)[number];
export declare const actionSizes: readonly ["sm", "md", "lg"];
export type ActionSize = (typeof actionSizes)[number];
export declare const fontSizes: readonly ["sm", "md", "lg"];
export type FontSize = (typeof fontSizes)[number];
export interface ActionCommonProps {
    /**
     * Tooltip. A string is the description on its own; the object form adds a
     * bold first line above it — for "which control this is" over "what it holds",
     * the same two-line shape `F0Select`'s trigger tooltip uses.
     */
    tooltip?: string | false | {
        label?: string;
        description: string;
    };
    /**
     * The variant of the action.
     */
    variant?: ActionVariant;
    /**
     * The children of the action.
     */
    children: ReactNode;
    /**
     * The prepend of the action.
     */
    prepend?: ReactNode;
    /**
     * The append of the action.
     */
    append?: ReactNode;
    /**
     * The prepend outside (next to the button) of the action.
     */
    prependOutside?: ReactNode;
    /**
     * The append outside of the action.
     */
    appendOutside?: ReactNode;
    /**
     * The disabled state of the action.
     */
    disabled?: boolean;
    /**
     * The loading state of the action.
     */
    loading?: boolean;
    /**
     * The pressed state of the action.
     */
    pressed?: boolean;
    /**
     * The class name of the action.
     */
    className?: string;
    /**
     * The size of the action.
     */
    size?: ActionSize;
    /**
     * The font size of the action.
     */
    fontSize?: FontSize;
    /**
     * The render mode.
     * @default "default"
     */
    mode?: "default" | "only";
    /**
     * The title of the action.
     */
    title?: string;
    /**
     * make the left and right padding of the action smaller.
     */
    compact?: boolean;
    /**
     * The aria label of the action.
     */
    "aria-label"?: string;
    /**
     * The tab index of the action.
     */
    tabIndex?: number;
    /**
     * Mouse enter event handler.
     */
    onMouseEnter?: React.MouseEventHandler<HTMLElement>;
    /**
     * Mouse leave event handler.
     */
    onMouseLeave?: React.MouseEventHandler<HTMLElement>;
}
export declare const buttonTypes: readonly ["button", "submit", "reset"];
export type ButtonType = (typeof buttonTypes)[number];
export declare const navTargets: readonly ["_blank", "_self", "_parent", "_top"];
export type NavTarget = HTMLAttributeAnchorTarget;
export type ActionBaseProps = ActionCommonProps & DataAttributes;
export type ActionLinkProps = ActionBaseProps & {
    href: string;
    target?: NavTarget;
    rel?: string;
    onFocus?: (event: React.FocusEvent<HTMLAnchorElement>) => void;
    onBlur?: (event: React.FocusEvent<HTMLAnchorElement>) => void;
    onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
    className?: string;
};
export type ActionButtonProps = ActionBaseProps & {
    type?: ButtonType;
    href?: never;
    target?: never;
    onFocus?: (event: React.FocusEvent<HTMLButtonElement>) => void;
    onBlur?: (event: React.FocusEvent<HTMLButtonElement>) => void;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};
export type ActionProps = ActionLinkProps | ActionButtonProps;
