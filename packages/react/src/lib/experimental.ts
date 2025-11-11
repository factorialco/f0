import { forwardRef } from "react"
import { useShowExperimentalWarnings } from "./providers/user-platafform/UserPlatformProvider"

const reported: Record<string, { uses: number; usesReported: number }> = {}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const experimentalComponent = <T extends (...args: any[]) => any>(
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
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const isForwardRef =
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

    WrappedComponent.displayName = `Experimental(${name})`

    return WrappedComponent as unknown as T
  }

  // For regular components
  return ((...args: Parameters<T>): ReturnType<T> => {
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

    return component(...args)
  }) as T
}
