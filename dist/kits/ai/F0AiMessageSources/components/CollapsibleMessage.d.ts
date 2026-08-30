import { ReactNode } from 'react';
import { IconType } from '../../../../components/F0Icon';
interface CollapsibleMessageProps {
    icon: IconType;
    title: string;
    children: ReactNode;
}
export declare const CollapsibleMessage: ({ icon, title, children, }: CollapsibleMessageProps) => import("react").JSX.Element;
export {};
