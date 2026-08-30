interface UseAutoClearOptions {
    autoClearMinutes: number | null;
    reset: () => void;
    isOpen: boolean;
}
/**
 * Custom hook that handles auto-clearing chat messages after a period of inactivity when chat is closed.
 *
 * @param autoClearMinutes - Number of minutes of inactivity before auto-clearing, or null to disable
 * @param reset - Function to call when auto-clearing should occur
 * @param isOpen - Whether the chat is currently open or closed
 */
export declare const useAutoClear: ({ autoClearMinutes, reset, isOpen, }: UseAutoClearOptions) => void;
export {};
