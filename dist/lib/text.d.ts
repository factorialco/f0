type Rules = {
    disallowEmpty?: boolean;
    minLength?: number;
    maxLength?: number;
    disallowEmojis?: boolean;
};
/**
 * Checks if the given text contains any emojis
 */
declare const containsEmojis: (text: string) => boolean;
export declare const useTextFormatEnforcer: (text?: string, rules?: Rules, options?: {
    warn?: boolean;
    componentName: string;
}) => void;
export { containsEmojis };
