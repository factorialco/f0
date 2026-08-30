import { DrawerInternalProps } from './internal/internal-types';
declare const privateProps: readonly ["variant", "disableClose"];
export type F0DrawerProps = Omit<DrawerInternalProps, (typeof privateProps)[number]>;
declare const F0Drawer: {
    (props: F0DrawerProps): import("react").JSX.Element;
    displayName: string;
};
export { F0Drawer };
