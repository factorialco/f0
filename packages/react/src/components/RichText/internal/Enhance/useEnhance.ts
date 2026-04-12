import { Editor } from "@tiptap/react";
import { useEffect, useState } from "react";

import { useI18n } from "@/lib/providers/i18n/i18n-provider";

import { handleEnhanceWithAIFunction } from "./enhance";
import { enhanceConfig, lastIntentType } from "./types";

interface UseEnhanceReturn {
  /** Whether an AI enhancement request is in progress */
  isLoading: boolean;
  /** Whether the accept/reject UI should be shown */
  isAcceptChangesOpen: boolean;
  /** Current error message, if any */
  error: string | null;
  /** Whether all editor buttons should be disabled */
  disableButtons: boolean;
  /** Trigger an AI enhancement with the given intent */
  handleEnhanceWithAI: (
    selectedIntent?: string,
    customIntent?: string,
  ) => Promise<void>;
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
}

function useEnhance(
  editor: Editor | null,
  config?: enhanceConfig,
): UseEnhanceReturn {
  const i18n = useI18n();

  const [isLoading, setIsLoading] = useState(false);
  const [isAcceptChangesOpen, setIsAcceptChangesOpen] = useState(false);
  const [lastIntent, setLastIntent] = useState<lastIntentType>(null);
  const [error, setErrorInternal] = useState<string | null>(null);

  useEffect(() => {
    if (error && editor) {
      editor.setEditable(false);
    }
  }, [error, editor]);

  const setError = (message: string | null) => {
    setErrorInternal(message);
    if (!message && editor) {
      editor.setEditable(true);
    }
  };

  const clearError = () => setError(null);

  const clearNativeSelection = () => {
    const selection = window.getSelection();
    if (selection && selection.rangeCount > 0) {
      selection.removeAllRanges();
    }
  };

  const handleEnhanceWithAI = async (
    selectedIntent?: string,
    customIntent?: string,
  ) => {
    if (!config || !editor) return;

    setLastIntent({ selectedIntent, customIntent });

    await handleEnhanceWithAIFunction({
      editor,
      enhanceText: config.onEnhanceText,
      setIsLoadingEnhance: setIsLoading,
      onLoadingStart: ({ range, isFullDocument }) => {
        editor.setEditable(false);
        if (!isFullDocument) {
          editor.commands.setEnhanceHighlight(range.from, range.to);
        }
        (editor.view.dom as HTMLElement).blur();
        clearNativeSelection();
      },
      onSuccess: (highlightRange) => {
        editor.commands.setEnhanceHighlight(
          highlightRange.from,
          highlightRange.to,
        );
        (editor.view.dom as HTMLElement).blur();
        clearNativeSelection();
        setIsAcceptChangesOpen(true);
      },
      onError: (errorMsg?: string) => {
        setIsAcceptChangesOpen(false);
        editor.commands.clearEnhanceHighlight();
        setErrorInternal(errorMsg || i18n.richTextEditor.ai.defaultError);
      },
      selectedIntent,
      customIntent,
    });
  };

  const acceptChanges = () => {
    if (!editor) return;
    editor.commands.clearEnhanceHighlight();
    setIsAcceptChangesOpen(false);
    editor.setEditable(true);
    setLastIntent(null);
  };

  const rejectChanges = () => {
    if (!editor) return;
    editor.commands.clearEnhanceHighlight();
    editor.chain().focus().undo().run();
    setIsAcceptChangesOpen(false);
    editor.setEditable(true);
    setLastIntent(null);
  };

  const retryChanges = () => {
    if (!editor) return;
    editor.commands.clearEnhanceHighlight();
    editor.chain().focus().undo().run();
    handleEnhanceWithAI(lastIntent?.selectedIntent, lastIntent?.customIntent);
  };

  const disableButtons = !!(isAcceptChangesOpen || isLoading || error);

  return {
    isLoading,
    isAcceptChangesOpen,
    error,
    disableButtons,
    handleEnhanceWithAI,
    acceptChanges,
    rejectChanges,
    retryChanges,
    setError,
    clearError,
  };
}

export { useEnhance };
export type { UseEnhanceReturn };
