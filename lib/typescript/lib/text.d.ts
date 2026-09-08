type TextFormatRules = {
    disallowEmpty?: boolean;
    minLength?: number;
    maxLength?: number;
};
/**
 * Validates text against formatting rules synchronously.
 * Only runs in development builds to avoid runtime throws in production.
 */
export declare const enforceTextFormat: (text: string | undefined, rules: TextFormatRules) => void;
/**
 * @deprecated Use `enforceTextFormat` directly (synchronous, dev-only).
 */
export declare const useTextFormatEnforcer: (text?: string, rules?: TextFormatRules) => void;
export {};
//# sourceMappingURL=text.d.ts.map