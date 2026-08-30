import { TextProps, HeadingTags } from '../../ui/Text';
declare const _allowedVariants: readonly ["heading", "heading-large"];
export type F0HeadingProps = Omit<TextProps, "className" | "variant" | "as"> & {
    variant?: (typeof _allowedVariants)[number];
    as?: HeadingTags;
};
export declare const F0Heading: import('../../lib/data-testid').WithDataTestIdReturnType<import('react').ForwardRefExoticComponent<Omit<F0HeadingProps, "ref"> & import('react').RefAttributes<HTMLElement>>>;
export {};
