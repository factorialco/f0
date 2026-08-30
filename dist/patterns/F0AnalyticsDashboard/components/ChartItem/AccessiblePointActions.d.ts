export type AccessiblePointAction = {
    key: string;
    getLabel: () => string;
    onSelect: () => void;
};
type AccessiblePointActionsProps = {
    hasActions: boolean;
    getActions: () => AccessiblePointAction[];
    /** Semantic inputs that make a cached point action stale. */
    resetOn: {
        data: unknown;
        isLoading: boolean;
        chartType: string;
        legendSelection: Record<string, boolean> | undefined;
        owner: "host" | "chat" | "none";
        title: string;
    };
    label: string;
    triggerLabel: string;
    previousLabel: string;
    nextLabel: string;
    setTrigger: (element: HTMLButtonElement | null) => void;
    focusChatAfterSelect: boolean;
    focusChatInput: () => void;
};
/**
 * Keyboard and screen-reader surface for canvas marks. It stays visually quiet
 * until its trigger receives focus, then exposes the same point actions in a
 * native Radix menu with arrow-key navigation.
 */
export declare function AccessiblePointActions({ hasActions, getActions, resetOn, label, triggerLabel, previousLabel, nextLabel, setTrigger, focusChatAfterSelect, focusChatInput, }: AccessiblePointActionsProps): import("react").JSX.Element | null;
export {};
