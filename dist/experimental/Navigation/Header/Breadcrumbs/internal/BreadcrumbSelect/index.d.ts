import { F0SelectProps } from '../../../../../../components/F0Select';
export type BreadcrumbSelectProps<T extends string, R = unknown> = F0SelectProps<T, R> & {
    multiple?: false;
    variant?: "field";
};
export declare function BreadcrumbSelect<T extends string, R = unknown>({ ...props }: BreadcrumbSelectProps<T, R>): import("react").JSX.Element;
