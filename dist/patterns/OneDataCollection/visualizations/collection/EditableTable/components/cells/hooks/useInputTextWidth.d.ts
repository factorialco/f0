/**
 * Returns the pixel width of the given text, measured using the actual
 * computed font of the first <input> found inside the referenced container.
 *
 * The F0NumberInput component forces w-full at every wrapper level, making it
 * impossible to shrink-wrap with CSS alone. This hook lets us set an explicit
 * container width so the input + currency label hug the content tightly.
 */
export declare function useInputTextWidth(text: string, extraPx?: number, minPx?: number): {
    ref: (node: HTMLDivElement | null) => void;
    width: number | undefined;
};
