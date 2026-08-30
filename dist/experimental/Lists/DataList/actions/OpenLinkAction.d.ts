import { ReactNode } from 'react';
import { InternalOpenLinkActionType } from '../ItemContainer';
export type OpenLinkActionProps = {
    children: ReactNode;
    className?: string;
} & InternalOpenLinkActionType;
export declare const OpenLinkAction: import('react').MemoExoticComponent<({ children, className, href, ...props }: OpenLinkActionProps) => import("react").JSX.Element>;
