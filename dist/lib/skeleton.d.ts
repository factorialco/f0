import { ComponentClass, ComponentType, ForwardRefExoticComponent, ReactNode, RefAttributes } from 'react';
type AnyReactComponent<P> = ComponentType<P> | ForwardRefExoticComponent<P & RefAttributes<any>> | ComponentClass<P>;
export declare function withSkeleton<T extends AnyReactComponent<any>, U extends AnyReactComponent<any>>(Component: T, Skeleton: U): T & {
    Skeleton: U;
};
export declare const Blend: React.FC<{
    orientation?: "vertical" | "horizontal";
    limit?: number;
    children: ReactNode;
}>;
export {};
