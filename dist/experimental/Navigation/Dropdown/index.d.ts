import { WithDataTestIdProps } from '../../../lib/data-testid';
import { DropdownInternalProps, DropdownItem, DropdownItemLabel, DropdownItemObject } from './internal';
declare const privateProps: readonly [];
type DropdownProps = Omit<DropdownInternalProps, (typeof privateProps)[number]> & {
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
} & WithDataTestIdProps;
/**
 * @experimental This is an experimental component use it at your own risk
 */
export declare const Dropdown: (props: DropdownProps) => import("react").JSX.Element;
export type { DropdownItem, DropdownItemLabel, DropdownItemObject };
/**
 * @experimental This is an experimental component use it at your own risk
 */
export declare const MobileDropdown: ({ items, children, dataTestId }: DropdownProps) => import("react").JSX.Element;
