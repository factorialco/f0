import { forwardRef } from "react"

import { useShowExperimentalWarnings } from "./providers/user-platafform/UserPlatformProvider"

const reported: Record<string, { uses: number; usesReported: number }> = {}

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
      // This can happen with some special properties
    }
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const experimentalComponent = <T extends React.ComponentType<any>>(
  name: string,
  component: T
): T => {
  const printReports = () => {
    Object.entries(reported).forEach(([key, value]) => {
      const newUses = value.uses - value.usesReported
      if (newUses > 0) {
        console.warn(
          `🚧 The \x1b[1m${key}\x1b[0m component is experimental. Use it at your own risk.`,
          `Found ${value.uses} uses. ${value.usesReported === -1 ? "" : `New uses found since last report: ${newUses}`}`
        )
        reported[key] = {
          ...value,
          usesReported: value.uses,
        }
      }
    })
  }

  let timeout: NodeJS.Timeout | null = null
  const initReporting = () => {
    if (timeout) {
      return
    }

    timeout = setTimeout(() => {
      printReports()
    }, 5000)
    return () => {
      if (timeout) {
        clearTimeout(timeout)
      }
    }
  }

  // Check if the component is a forwardRef component

  const isForwardRef =
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (component as any).$$typeof === Symbol.for("react.forward_ref")

  if (isForwardRef) {
    // For forwardRef components, we need to wrap the render function
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const originalRender = (component as any).render

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const WrappedComponent = forwardRef((props: any, ref: any) => {
      const showExperimentalWarnings = useShowExperimentalWarnings()
      if (showExperimentalWarnings) {
        initReporting()

        if (!reported[name]) {
          reported[name] = {
            uses: 0,
            usesReported: -1,
          }
        }

        reported[name] = {
          ...reported[name],
          uses: (reported[name]?.uses ?? 0) + 1,
        }
      }

      return originalRender(props, ref)
    })

    // Copy all static properties from the original component to preserve markers
    // like __isPageLayoutBlock and __isPageLayoutGroup
    copyStaticProperties(component, WrappedComponent)

    // Set displayName if it wasn't copied from the original component
    if (!WrappedComponent.displayName) {
      WrappedComponent.displayName = `Experimental(${name})`
    }

    return WrappedComponent as unknown as T
  }

  // For regular components
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const wrappedFunction = ((...args: any[]): any => {
    const showExperimentalWarnings = useShowExperimentalWarnings()
    if (showExperimentalWarnings) {
      initReporting()

      if (!reported[name]) {
        reported[name] = {
          uses: 0,
          usesReported: -1,
        }
      }

      reported[name] = {
        ...reported[name],
        uses: (reported[name]?.uses ?? 0) + 1,
      }
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return (component as any)(...args)
  }) as unknown as T

  // Copy all static properties from the original component to preserve markers
  // like __isPageLayoutBlock and __isPageLayoutGroup
  copyStaticProperties(component, wrappedFunction)

  return wrappedFunction
}
