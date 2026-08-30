interface PageProps {
    children?: React.ReactNode;
    header?: React.ReactNode;
    embedded?: boolean;
}
declare function _Page({ children, header, embedded }: PageProps): import("react").JSX.Element;
declare namespace _Page {
    var displayName: string;
}
/**
 * @experimental This is an experimental component use it at your own risk
 */
export declare const Page: import('../../../lib/data-testid').WithDataTestIdReturnType<typeof _Page>;
export {};
