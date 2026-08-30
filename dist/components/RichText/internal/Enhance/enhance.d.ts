import { Editor } from '@tiptap/react';
import { enhancedTextResponse, enhanceTextParams } from './types';
export interface EnhanceHighlightRange {
    from: number;
    to: number;
}
export interface EnhanceLoadingInfo {
    range: EnhanceHighlightRange;
    isFullDocument: boolean;
}
export interface EnhanceWithAIParams {
    editor: Editor;
    enhanceText: (params: enhanceTextParams) => Promise<enhancedTextResponse>;
    setIsLoadingEnhance: (loading: boolean) => void;
    selectedIntent?: string;
    customIntent?: string;
    onLoadingStart: (info: EnhanceLoadingInfo) => void;
    onSuccess: (highlightRange: EnhanceHighlightRange) => void;
    onError: (error?: string) => void;
}
declare function handleEnhanceWithAIFunction({ editor, enhanceText, setIsLoadingEnhance, selectedIntent, customIntent, onLoadingStart, onSuccess, onError, }: EnhanceWithAIParams): Promise<void>;
export { handleEnhanceWithAIFunction };
