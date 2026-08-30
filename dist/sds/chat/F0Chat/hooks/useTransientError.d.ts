/**
 * Composer error state. `show(msg)` clears after `timeoutMs` by default;
 * validation errors can opt into persistence until the next corrective action
 * calls `clear()`.
 */
export declare function useTransientError(timeoutMs?: number): {
    error: string | null;
    show: (message: string, options?: {
        persistent?: boolean;
    }) => void;
    clear: () => void;
};
