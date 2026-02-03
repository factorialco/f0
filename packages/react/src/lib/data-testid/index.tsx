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
 * Use when ComponentProps<typeof Component> inference fails (e.g. in Storybook stories).
 */
export type WithDataTestIdPropsOf<T extends React.ComponentType<unknown>> =
  React.ComponentProps<T> & WithDataTestIdProps

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

  // For regular components (function or class). Plain function components can be
  // invoked to check for null return; we only wrap when they return content so
  // behavior matches forwardRef (no wrapper div when inner component returns null).
  const isFunctionComponent =
    typeof component === "function" &&
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    !(component as any).prototype?.isReactComponent

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const WrappedComponent = forwardRef((props: any, ref: any) => {
    const renderDataTestIdAttribute = useRenderDataTestIdAttribute()
    const { dataTestId, ...rest } = props
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const Component = component as any
    if (!dataTestId || !renderDataTestIdAttribute) {
      return <Component {...rest} ref={ref} />
    }
    const cleanRest = (() => {
      const { "data-testid": _d, ...r } = rest
      return r
    })()

    if (isFunctionComponent) {
      const content = Component(cleanRest)
      if (content == null) {
        return content
      }
      return (
        <div data-testid={dataTestId} style={{ display: "contents" }}>
          {content}
        </div>
      )
    }

    const content = <Component {...cleanRest} ref={ref} />
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
    const name = component.displayName || component.name || "Component"
    WrappedComponent.displayName = name
  }

  return WrappedComponent as unknown as ReturnedComponentType
}
