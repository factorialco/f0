import { RefObject } from 'react';
import { HighlightSegment } from '../hooks/highlight-utils';
type ChatTextareaFieldProps = {
    textareaRef: RefObject<HTMLTextAreaElement>;
    highlightRef: RefObject<HTMLDivElement>;
    value: string;
    placeholder: string;
    accessibleLabel: string;
    onChange: (value: string, cursorPos: number) => void;
    onKeyDown: (e: React.KeyboardEvent<HTMLTextAreaElement>) => void;
    onPaste: (e: React.ClipboardEvent<HTMLTextAreaElement>) => void;
    onBlur?: (event: React.FocusEvent<HTMLTextAreaElement>) => void;
    onCursorUpdate: () => void;
    onScroll: () => void;
    highlightSegments: HighlightSegment[];
    isAutocompleteOpen: boolean;
    autocompleteListboxId?: string;
    activeAutocompleteOptionId?: string;
    /** When true, a typed `@mention` / ghost completion is shown via the overlay
     * and the textarea text is hidden (caret stays visible). */
    hasOverlay: boolean;
};
/**
 * Auto-growing textarea with a mention highlight overlay — the comms twin of
 * the AI chat composer's TextareaField. An invisible sizer drives the height; a
 * pinned overlay paints `@mention` (bold) and ghost-completion (faded) segments.
 */
export declare const ChatTextareaField: ({ textareaRef, highlightRef, value, placeholder, accessibleLabel, onChange, onKeyDown, onPaste, onBlur, onCursorUpdate, onScroll, highlightSegments, isAutocompleteOpen, autocompleteListboxId, activeAutocompleteOptionId, hasOverlay, }: ChatTextareaFieldProps) => import("react").JSX.Element;
export {};
