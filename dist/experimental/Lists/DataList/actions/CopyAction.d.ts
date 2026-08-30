import { ReactNode } from 'react';
import { InternalCopyActionType } from '../ItemContainer';
export type CopyActionProps = {
    children: ReactNode;
} & InternalCopyActionType;
export declare const CopyAction: ({ text, children }: CopyActionProps) => import("react").JSX.Element;
