import { default as React, ReactNode } from 'react';
export type WithDataTestIdProps = {
    dataTestId?: string;
};
/**
 * Wrapper component that conditionally renders a `data-testid` attribute.
 *
 * When `dataTestId` is provided and the platform context enables test id rendering,
 * wraps children in a `<div data-testid={dataTestId} style={{ display: "contents" }}>`.
 * Otherwise renders children as-is with no wrapper element.
 *
 * Use this directly inside components with complex generic types (e.g. F0Select,
 * OneFilterPicker) where the `withDataTestId` HOC would erase type parameters.
 *
 * @example
 * ```tsx
 * const MyComponent = <T,>({ dataTestId, ...props }: MyProps<T> & WithDataTestIdProps) => (
 *   <DataTestIdWrapper dataTestId={dataTestId}>
 *     <div>...</div>
 *   </DataTestIdWrapper>
 * )
 * ```
 */
export declare const DataTestIdWrapper: ({ dataTestId, children, }: WithDataTestIdProps & {
    children: ReactNode;
}) => ReactNode;
/**
 * Props type of a component wrapped with withDataTestId.
 * Use when ComponentProps<typeof Component> inference fails (e.g. in Storybook stories).
 */
export type WithDataTestIdPropsOf<T extends React.ComponentType<unknown>> = React.ComponentProps<T> & WithDataTestIdProps;
/**
 * Given a component type T, produce a new component type that:
 * 1. Accepts all of T's props plus dataTestId
 * 2. Preserves callback argument types (e.g., onCheckedChange: (checked: boolean) => void)
 * 3. Preserves static members (e.g., F0Card.Skeleton)
 *
 * We use a mapped type approach to avoid the pitfalls of React.ComponentType
 * which collapses callback inference.
 */
export type WithDataTestIdReturnType<T extends React.ComponentType<any>> = React.ForwardRefExoticComponent<React.PropsWithoutRef<React.ComponentProps<T> & WithDataTestIdProps> & React.RefAttributes<T extends React.ForwardRefExoticComponent<infer P> ? P extends React.RefAttributes<infer R> ? R : unknown : unknown>> & Pick<T, Exclude<keyof T, keyof React.ForwardRefExoticComponent<unknown>>>;
export declare const withDataTestId: <T extends React.ComponentType<any>>(component: T) => WithDataTestIdReturnType<T>;
