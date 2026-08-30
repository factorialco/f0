import { ReactElement } from 'react';
import { IconType } from '../../../components/F0Icon';
type ItemContainerProps = {
    leftIcon?: IconType | (() => ReactElement);
    action?: InternalActionType;
    text: string;
    className?: string;
};
export type InternalActionType = InternalCopyActionType | InternalNavigateActionType | InternalOpenLinkActionType | InternalNoopActionType;
export type InternalCopyActionType = {
    type: "copy";
    text: string;
};
export type InternalNavigateActionType = {
    type: "navigate";
    href: string;
};
export type InternalOpenLinkActionType = {
    type: "open-link";
    href: string;
};
export type InternalNoopActionType = {
    type: "noop";
};
export declare const ItemContainer: import('react').ForwardRefExoticComponent<ItemContainerProps & import('react').RefAttributes<HTMLLIElement>>;
export {};
