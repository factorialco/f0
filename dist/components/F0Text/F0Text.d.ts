import { TextProps, TextTags } from '../../ui/Text';
declare const _allowedVariants: readonly ["body", "description", "small", "inverse", "code", "label"];
export type F0TextProps = Omit<TextProps, "className" | "variant" | "as"> & {
    variant?: (typeof _allowedVariants)[number];
    as?: TextTags;
    markdown?: boolean;
};
export declare const F0Text: import('../../lib/data-testid').WithDataTestIdReturnType<import('react').ForwardRefExoticComponent<Omit<F0TextProps, "ref"> & import('react').RefAttributes<HTMLElement>>>;
export {};
