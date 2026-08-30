import { ReactNode } from 'react';
export type AwaitProps<T> = {
    resolve: Promise<T> | T;
    fallback: ReactNode;
    error?: ReactNode;
    className?: string;
    children: (value: T) => ReactNode;
};
export declare const Await: <T>(props: AwaitProps<T> & {
    dataTestId?: string;
}) => ReactNode;
