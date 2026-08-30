import { DialogInternalProps } from './internal/internal-types';
declare const privateProps: readonly ["variant", "disableClose"];
export type F0DialogProps = Omit<DialogInternalProps, (typeof privateProps)[number]>;
declare const F0Dialog: {
    (props: F0DialogProps): import("react").JSX.Element;
    displayName: string;
};
export { F0Dialog };
