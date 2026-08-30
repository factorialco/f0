declare const useNavigation: import('vitest').Mock<() => {
    isActive: import('vitest').Mock<(_path?: string) => boolean>;
    currentPath: undefined;
}>;
declare const MockBaseLink: import('react').ForwardRefExoticComponent<import('react').AnchorHTMLAttributes<HTMLAnchorElement> & {
    exactMatch?: boolean;
    disabled?: boolean;
} & {
    children?: import('react').ReactNode | undefined;
} & import('react').RefAttributes<HTMLAnchorElement>>;
export { MockBaseLink as Link, useNavigation };
