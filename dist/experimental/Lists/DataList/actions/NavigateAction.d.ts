import { ReactNode } from 'react';
import { InternalNavigateActionType } from '../ItemContainer';
export type NavigateActionProps = {
    children: ReactNode;
    className?: string;
} & InternalNavigateActionType;
export declare const NavigateAction: import('react').MemoExoticComponent<({ children, className, ...props }: NavigateActionProps) => import("react").JSX.Element>;
