import { IconType } from '../F0Icon';
type ActionType = {
    label: string;
    icon?: IconType;
    onClick?: () => void;
    disabled?: boolean;
    critical?: boolean;
    description?: string;
    loading?: boolean;
    /** Shown on hover. Its reason for existing is a disabled action. */
    tooltip?: string;
};
export type ActionBarGroup = {
    label?: string;
    items: ActionBarItem[];
};
export type ActionBarItem = ActionType;
export declare const actionBarStatuses: readonly ["idle", "loading", "success", "error"];
export type ActionBarStatus = (typeof actionBarStatuses)[number];
interface WiggleOptions {
    errorHighlight?: boolean;
}
export interface F0ActionBarRef {
    wiggle: (options?: WiggleOptions) => void;
}
interface F0ActionBarProps {
    /**
     * Whether the action bar is open
     */
    isOpen: boolean;
    /**
     * The primary action
     */
    primaryActions?: ActionBarItem[] | ActionBarGroup[] | ActionBarGroup;
    /**
     * The secondary actions
     */
    secondaryActions?: ActionBarItem[];
    /**
     * The label of the action bar
     */
    label?: string;
    /**
     * Visual variant of the action bar
     * - "dark": Dark background with light text (default)
     * - "light": Light background with dark text
     * @default "dark"
     */
    variant?: "dark" | "light";
    /**
     * Custom content to render on the left side (e.g., error navigation)
     */
    leftContent?: React.ReactNode;
    /**
     * The current status of the action bar.
     * - "idle": Default state, shows an alert icon (pending changes)
     * - "loading": Shows a spinner and disables all actions
     * - "success": Shows a checkmark icon and disables all actions
     * - "error": Shows an error icon with persistent error styling
     * @default "idle"
     */
    status?: ActionBarStatus;
}
export declare const F0ActionBar: import('../../lib/data-testid').WithDataTestIdReturnType<import('react').ForwardRefExoticComponent<F0ActionBarProps & import('react').RefAttributes<F0ActionBarRef>>>;
export {};
