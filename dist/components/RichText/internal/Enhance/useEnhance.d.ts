import { Editor } from '@tiptap/react';
import { enhanceConfig } from './types';
interface UseEnhanceReturn {
    /** The enhance configuration passed by the consumer (undefined disables enhance) */
    config?: enhanceConfig;
    /** Whether an AI enhancement request is in progress */
    isLoading: boolean;
    /** Whether the accept/reject UI should be shown */
    isAcceptChangesOpen: boolean;
    /** Current error message, if any */
    error: string | null;
    /** Whether all editor buttons should be disabled */
    disableButtons: boolean;
    /** Trigger an AI enhancement with the given intent */
    handleEnhanceWithAI: (selectedIntent?: string, customIntent?: string) => Promise<void>;
    /** Accept the current AI-enhanced changes */
    acceptChanges: () => void;
    /** Reject the current AI-enhanced changes and undo */
    rejectChanges: () => void;
    /** Reject current changes and retry with the last intent */
    retryChanges: () => void;
    /** Set an error message (disables editor when non-null, re-enables when null) */
    setError: (message: string | null) => void;
    /** Clear the current error and re-enable the editor */
    clearError: () => void;
    /**
     * Viewport bottom coordinate of the generated content when the review
     * opened, so floating review UIs can position themselves below it instead
     * of over it. Null when it couldn't be measured.
     */
    reviewAnchorTop: number | null;
}
declare function useEnhance(editor: Editor | null, config?: enhanceConfig): UseEnhanceReturn;
export { useEnhance };
export type { UseEnhanceReturn };
