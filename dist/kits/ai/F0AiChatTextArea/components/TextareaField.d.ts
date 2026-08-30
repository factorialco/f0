import { RefObject } from 'react';
import { HighlightSegment } from '../highlight-utils';
interface TextareaFieldProps {
    textareaRef: RefObject<HTMLTextAreaElement>;
    highlightRef: RefObject<HTMLDivElement>;
    inputValue: string;
    onInputChange: (value: string, cursorPos: number) => void;
    onKeyDown: (e: React.KeyboardEvent<HTMLTextAreaElement>) => void;
    onCursorUpdate: () => void;
    onScroll: () => void;
    highlightSegments: HighlightSegment[];
    hasOverlay: boolean;
    multiplePlaceholders: boolean;
    placeholders: string[];
    resolvedDefaultPlaceholder: string;
    inProgress?: boolean;
}
export declare const TextareaField: ({ textareaRef, highlightRef, inputValue, onInputChange, onKeyDown, onCursorUpdate, onScroll, highlightSegments, hasOverlay, multiplePlaceholders, placeholders, resolvedDefaultPlaceholder, inProgress, }: TextareaFieldProps) => import("react").JSX.Element;
export {};
