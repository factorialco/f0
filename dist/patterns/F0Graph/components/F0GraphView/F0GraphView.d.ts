import { ForwardedRef } from 'react';
import { F0GraphHandle, F0GraphProps } from '../../F0Graph';
export declare function F0GraphView<T = unknown>(props: F0GraphProps<T> & {
    handleRef?: ForwardedRef<F0GraphHandle>;
}): import("react").JSX.Element;
