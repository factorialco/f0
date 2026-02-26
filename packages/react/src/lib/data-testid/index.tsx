import React, { forwardRef, memo } from "react"

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
 * Props type of a component wrapped with withDataTestId.
 *
 * Uses a distributive conditional type so that when the wrapped component has
 * discriminated-union props (e.g. F0Select with `multiple: true | false`
 * branches), each branch of the union is individually intersected with
 * `WithDataTestIdProps` instead of being flattened into a single merged type.
 *
 * Use when ComponentProps<typeof Component> inference fails (e.g. in Storybook stories).
 *
 * NOTE: For components with generic type parameters (e.g. `F0Select<T, R>`,
 * `RadarChart<K>`, `Await<T>`), `WithDataTestIdReturnType<T>` cannot preserve
 * the generic signature — TypeScript erases the type parameter when inferring
 * `ComponentType<infer P>`, collapsing `<T>` to its constraint. In those cases,
 * do NOT rely on this type; instead cast the wrapped component to a hand-written
 * generic function type that re-adds `dataTestId` manually:
 *
 * @example
 * ```ts
 * type MyGeneric = <T>(props: MyProps<T> & WithDataTestIdProps) => ReactElement | null
 *
 * // `as unknown as MyGeneric`: withDataTestId() returns WithDataTestIdReturnType<T>
 * // which cannot express generic call signatures. The double cast re-adds the
 * // type parameter that TypeScript erased during HOC wrapping.
 * export const MyComponent = withDataTestId(_MyComponent) as unknown as MyGeneric
 * ```
 */
export type WithDataTestIdPropsOf<T extends React.ComponentType<unknown>> =
  T extends React.ComponentType<infer P> ? P & WithDataTestIdProps : never

/**
 * Keys on T that are not part of Function, so we preserve static members (Skeleton, displayName, etc.)
 * without bringing in a second call signature that would confuse ComponentProps<> inference.
 */
type StaticMembersOf<T> = Pick<T, Exclude<keyof T, keyof Function>>

/**
 * Return type has a single call signature with props = ComponentProps<T> & WithDataTestIdProps,
 * so ComponentProps<Wrapped> and Storybook's Meta/StoryObj infer correctly.
 * Static properties (e.g. F0Card.Skeleton) are preserved via StaticMembersOf<T>.
 */
export type WithDataTestIdReturnType<T extends React.ComponentType<unknown>> =
  React.ComponentType<WithDataTestIdPropsOf<T>> & StaticMembersOf<T>

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
    // For forwardRef components, we need to wrap the render function
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const originalRender = (component as any).render

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const WrappedComponent = forwardRef((props: any, ref: any) => {
      const renderDataTestIdAttribute = useRenderDataTestIdAttribute()
      const { dataTestId, ...rest } = props
      if (!dataTestId || !renderDataTestIdAttribute) {
        return originalRender(rest, ref)
      }
      const cleanRest = (() => {
        const { "data-testid": _d, ...r } = rest
        return r
      })()
      const content = originalRender(cleanRest, ref)
      if (content == null) {
        return content
      }
      return (
        <div data-testid={dataTestId} style={{ display: "contents" }}>
          {content}
        </div>
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

  const isFunctionComponent =
    typeof component === "function" &&
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    !(component as any).prototype?.isReactComponent

  // For regular components (function or class). Always render via JSX to ensure
  // hooks always run in the same fiber regardless of whether dataTestId is set,
  // avoiding "Rendered more/fewer hooks than during the previous render" crashes.
  //
  // When dataTestId is set we delegate to a stable inner component (InnerWithTestId)
  // that lives in its own fiber. For function components it calls Component() directly
  // (safe since it's always called the same way within that fiber) to detect null and
  // suppress the wrapper div. For class components it falls back to JSX.
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const InnerWithTestId = ({
    dataTestId,
    innerRef,
    componentProps,
  }: {
    dataTestId: string
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    innerRef: any
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    componentProps: any
  }) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const Component = component as any
    if (isFunctionComponent) {
      const content = Component({ ...componentProps, ref: innerRef })
      if (content == null) return null
      return (
        <div data-testid={dataTestId} style={{ display: "contents" }}>
          {content}
        </div>
      )
    }
    return (
      <div data-testid={dataTestId} style={{ display: "contents" }}>
        <Component {...componentProps} ref={innerRef} />
      </div>
    )
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const WrappedComponent = forwardRef((props: any, ref: any) => {
    const renderDataTestIdAttribute = useRenderDataTestIdAttribute()
    const { dataTestId, ...rest } = props
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const Component = component as any

    if (!dataTestId || !renderDataTestIdAttribute) {
      return <Component {...rest} ref={ref} />
    }

    // Strip data-testid from props passed to the inner component to avoid it
    // leaking to the DOM alongside the wrapper div's data-testid attribute.
    const cleanRest = (() => {
      const { "data-testid": _d, ...r } = rest
      return r
    })()

    return (
      <InnerWithTestId
        dataTestId={dataTestId}
        innerRef={ref}
        componentProps={cleanRest}
      />
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
