interface Option {
    title?: string;
    description?: string;
    href?: string;
    target?: string;
    onClick?: (event: any) => unknown;
}
interface OmniButtonProps {
    label: string;
    options: Option[];
    hasNewUpdate?: boolean;
}
declare function _OmniButton({ label, options, hasNewUpdate }: OmniButtonProps): import("react").JSX.Element;
/**
 * @experimental This is an experimental component use it at your own risk
 */
export declare const OmniButton: import('../../lib/data-testid').WithDataTestIdReturnType<typeof _OmniButton>;
export {};
