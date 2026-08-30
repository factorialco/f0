import { ReactNode } from 'react';
import { IconType } from '../../../../components/F0Icon';
interface CollapsibleMessageProps {
    icon: IconType;
    title: string;
    children: ReactNode;
    /** Controlled open state. When set, the parent owns the open state. */
    open?: boolean;
    /** Initial open state when uncontrolled. */
    defaultOpen?: boolean;
    /** Fires on user toggle. Required when `open` is provided. */
    onOpenChange?: (open: boolean) => void;
    /**
     * When true, the chevron is hidden and the trigger does not toggle —
     * the section stays open regardless of user clicks. The parent must
     * keep `open` true while locked.
     */
    lockOpen?: boolean;
}
export declare const CollapsibleMessage: ({ icon, title, children, open, defaultOpen, onOpenChange, lockOpen, }: CollapsibleMessageProps) => import("react").JSX.Element;
export {};
