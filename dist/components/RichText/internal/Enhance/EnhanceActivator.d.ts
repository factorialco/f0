import { RefObject } from 'react';
import { UseEnhanceReturn } from './useEnhance';
interface EnhanceActivatorProps {
    enhance: UseEnhanceReturn;
    disabled: boolean;
    hideLabel?: boolean;
    darkMode?: boolean;
    menuWidth?: number;
    menuContainerRef?: RefObject<HTMLElement | null>;
    lockToViewportOnLock?: boolean;
    /**
     * Notifies when this activator's menu opens/closes. The flag stays true for
     * the whole flow it owns (prompt → loading → review) until it closes.
     */
    onOpenChange?: (open: boolean) => void;
    /**
     * Suppress the built-in review panel: the consumer renders its own
     * accept/discard UI (e.g. inline in the editor footer).
     */
    hideReviewPanel?: boolean;
}
declare const EnhanceActivator: import('react').MemoExoticComponent<({ enhance, disabled, hideLabel, darkMode, menuWidth, menuContainerRef, lockToViewportOnLock, onOpenChange, hideReviewPanel, }: EnhanceActivatorProps) => import("react").JSX.Element>;
export { EnhanceActivator };
