import { PendingQuote } from '../../F0AiChat/types';
type PendingQuoteChipProps = {
    quote: PendingQuote;
    onRemove: () => void;
};
/**
 * Inline "file chip"–style preview shown at the top of the composer when the
 * user is replying to a fragment. Single line, truncated, with a quote icon
 * on the left and a close button on the right. Mirrors the Figma spec of
 * the reply chip: compact, flush with the textarea, neutral background.
 */
export declare const PendingQuoteChip: ({ quote, onRemove, }: PendingQuoteChipProps) => import("react").JSX.Element;
export {};
