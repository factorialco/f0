import React, { forwardRef, memo, type ReactNode } from "react"

import { useRenderDataTestIdAttribute } from "../providers/user-platafform/UserPlatformProvider"

const ignoredStaticProps = ["prototype", "length", "name", "$$typeof", "render"]
/**
 * Copies all static properties from the source component to the target component.
 * This preserves marker properties like __isPageLayoutBlock and __isPageLayoutGroup.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const copyStaticProperties = (source: any, target: any): void => {
  // Get all property names including non-enumerable ones
  const allKeys = [
    ...Object.getOwnPropertyNames(source),
    ...Object.getOwnPropertySymbols(source),
  ]

  for (const key of allKeys) {
    // Skip properties that should not be copied
    if (ignoredStaticProps.includes(key as string)) {
      continue
    }

    try {
      const descriptor = Object.getOwnPropertyDescriptor(source, key)
      if (descriptor) {
        Object.defineProperty(target, key, descriptor)
      }
    } catch {
      // If we can't copy a property, skip it
    }
  }
}

export type WithDataTestIdProps = {
  dataTestId?: string
}

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
export const DataTestIdWrapper = ({
  dataTestId,
  children,
}: WithDataTestIdProps & { children: ReactNode }): ReactNode => {
  const renderDataTestIdAttribute = useRenderDataTestIdAttribute()

  if (!dataTestId || !renderDataTestIdAttribute) {
    return children
  }

  return (
    <div data-testid={dataTestId} style={{ display: "contents" }}>
      {children}
    </div>
  )
}

/**
 * Props type of a component wrapped with withDataTestId.
 * Use when ComponentProps<typeof Component> inference fails (e.g. in Storybook stories).
 */
export type WithDataTestIdPropsOf<T extends React.ComponentType<unknown>> =
  React.ComponentProps<T> & WithDataTestIdProps

/**
 * Given a component type T, produce a new component type that:
 * 1. Accepts all of T's props plus dataTestId
 * 2. Preserves callback argument types (e.g., onCheckedChange: (checked: boolean) => void)
 * 3. Preserves static members (e.g., F0Card.Skeleton)
 *
 * We use a mapped type approach to avoid the pitfalls of React.ComponentType
 * which collapses callback inference.
 */
export type WithDataTestIdReturnType<
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  T extends React.ComponentType<any>,
> = React.ForwardRefExoticComponent<
  React.PropsWithoutRef<React.ComponentProps<T> & WithDataTestIdProps> &
    React.RefAttributes<
      T extends React.ForwardRefExoticComponent<infer P>
        ? P extends React.RefAttributes<infer R>
          ? R
          : unknown
        : unknown
    >
> &
  Pick<T, Exclude<keyof T, keyof React.ForwardRefExoticComponent<unknown>>>

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const withDataTestId = <T extends React.ComponentType<any>>(
  component: T
): WithDataTestIdReturnType<T> => {
  // Check if the component is a forwardRef component
  const isForwardRef =
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (component as any).$$typeof === Symbol.for("react.forward_ref")

  // The type for the returned component (with static properties preserved via intersection with T)
  type ReturnedComponentType = WithDataTestIdReturnType<T>

  if (isForwardRef) {
    // For forwardRef components, render via JSX (not by calling the render
    // function directly) so React's reconciler properly handles null returns
    // and hook ordering stays consistent across CI environments.
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const OriginalComponent = component as any

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const WrappedComponent = forwardRef((props: any, ref: any) => {
      const { dataTestId, ...rest } = props
      return (
        <DataTestIdWrapper dataTestId={dataTestId}>
          <OriginalComponent {...rest} ref={ref} />
        </DataTestIdWrapper>
      )
    })

    // Copy all static properties
    copyStaticProperties(component, WrappedComponent)

    // Set displayName
    if (!WrappedComponent.displayName) {
      const name =
        component.displayName ||
        component.name ||
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (component as any).render?.name ||
        "Component"
      WrappedComponent.displayName = name
    }

    return WrappedComponent as unknown as ReturnedComponentType
  }

  // Check if the component is a memo component
  const isMemo =
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (component as any).$$typeof === Symbol.for("react.memo")

  if (isMemo) {
    // For memo components we recurse so the inner component gets withDataTestId.
    // Note: withDataTestId(memo(Component)) can still let dataTestId reach the DOM
    // as "datatestid" in some cases (React may pass memo's props through). For
    // memoized components, prefer memo(withDataTestId(Component)) so the HOC
    // wraps the inner component and data-testid is applied correctly.
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const originalType = (component as any).type
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const originalCompare = (component as any).compare

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const WrappedInner = withDataTestId(originalType) as any

    const MemoizedComponent = memo(WrappedInner, originalCompare)

    // Copy all static properties
    copyStaticProperties(component, MemoizedComponent)

    // Set displayName
    if (!MemoizedComponent.displayName) {
      const name =
        component.displayName ||
        component.name ||
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (component as any).type?.displayName ||
        "Component"
      MemoizedComponent.displayName = name
    }

    return MemoizedComponent as unknown as ReturnedComponentType
  }

  // For regular components (function or class). Always render via JSX to ensure
  // hooks always run in the same fiber regardless of whether dataTestId is set,
  // avoiding "Rendered more/fewer hooks than during the previous render" crashes.
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const WrappedComponent = forwardRef((props: any, ref: any) => {
    const { dataTestId, ...rest } = props
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const Component = component as any

    return (
      <DataTestIdWrapper dataTestId={dataTestId}>
        <Component {...rest} ref={ref} />
      </DataTestIdWrapper>
    )
  })

  // Copy all static properties
  copyStaticProperties(component, WrappedComponent)

  // Set displayName
  if (!WrappedComponent.displayName) {
    const name = component.displayName || component.name || "Component"
    WrappedComponent.displayName = name
  }

  return WrappedComponent as unknown as ReturnedComponentType
}
