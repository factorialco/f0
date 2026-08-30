import { F0SelectProps } from './types';
export * from './types';
export declare const F0Select: <T extends string = string, R = unknown>(props: F0SelectProps<T, R> & {
    ref?: React.Ref<HTMLButtonElement>;
}) => React.ReactElement;
