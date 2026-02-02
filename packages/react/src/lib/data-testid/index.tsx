import React, { forwardRef, memo } from "react"

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
    if (
      key === "prototype" ||
      key === "length" ||
      key === "name" ||
      key === "$$typeof" ||
      key === "render" // For forwardRef, we don't want to copy the render function
    ) {
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

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const withDataTestId = <T extends React.ComponentType<any>>(
  component: T
): React.ComponentType<React.ComponentProps<T> & WithDataTestIdProps> => {
  // Check if the component is a forwardRef component
  const isForwardRef =
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (component as any).$$typeof === Symbol.for("react.forward_ref")

  // The type for the returned component
  type ReturnedComponentType = React.ComponentType<
    React.ComponentProps<T> & WithDataTestIdProps
  >

  if (isForwardRef) {
    // For forwardRef components, we need to wrap the render function
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const originalRender = (component as any).render

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const WrappedComponent = forwardRef((props: any, ref: any) => {
      const { dataTestId, ...rest } = props
      const newProps = { ...rest }

      if (dataTestId) {
        newProps["data-test-id"] = dataTestId
      }

      return originalRender(newProps, ref)
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
      WrappedComponent.displayName = `withDataTestId(${name})`
    }

    return WrappedComponent as unknown as ReturnedComponentType
  }

  // Check if the component is a memo component
  const isMemo =
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (component as any).$$typeof === Symbol.for("react.memo")

  if (isMemo) {
    // For memo components, we need to wrap the inner component and re-memoize
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const originalType = (component as any).type
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const originalCompare = (component as any).compare

    // Recurse to wrap the inner component (which might be forwardRef or regular)
    // We cast to any because the recursive call returns a type with props already extended,
    // but here we are recomposing it.
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
      MemoizedComponent.displayName = `withDataTestId(${name})`
    }

    return MemoizedComponent as unknown as ReturnedComponentType
  }

  // For regular components (function or class)
  // We wrap them in forwardRef to ensure we pass refs correctly if the underlying component handles them
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const WrappedComponent = forwardRef((props: any, ref: any) => {
    const { dataTestId, ...rest } = props
    const newProps = { ...rest }

    if (dataTestId) {
      newProps["data-test-id"] = dataTestId
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const Component = component as any
    return <Component {...newProps} ref={ref} />
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
