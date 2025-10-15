type Rules = {
    disallowEmpty?: boolean;
    minLength?: number;
    maxLength?: number;
};
declare const useTextFormatEnforcer: (text?: string, rules?: Rules) => void;

export { useTextFormatEnforcer };
