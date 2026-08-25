import { createContext, useContext, useEffect, useState } from "react"

import { HourCycle, Platform } from "./types"
import { detectPlatform } from "./user-platform"

type Context = {
  platform: Platform
  isDev: boolean
  showExperimentalWarnings: boolean
  renderDataTestIdAttribute: boolean
  /**
   * Global user preference for how times are displayed and edited (12h/24h).
   * Left `undefined` when the app doesn't set it, in which case time fields
   * fall back to the native browser-locale input.
   */
  hourCycle?: HourCycle
}

const PlatformContext = createContext<Context | null>(null)

type UserPlatformProviderProps = {
  children: React.ReactNode
} & Partial<Context>

export const UserPlatformProvider = ({
  children,
  platform,
  isDev = false,
  showExperimentalWarnings = false,
  renderDataTestIdAttribute = false,
  hourCycle,
}: UserPlatformProviderProps) => {
  const [userPlatform, setUserPlatform] = useState<Platform>(
    platform ?? "unknown"
  )

  useEffect(() => {
    if (platform === undefined) {
      detectPlatform().then(setUserPlatform)
    }
  }, [platform])

  return (
    <PlatformContext.Provider
      value={{
        platform: userPlatform,
        isDev,
        showExperimentalWarnings,
        renderDataTestIdAttribute,
        hourCycle,
      }}
    >
      {children}
    </PlatformContext.Provider>
  )
}

export const useIsDev = () => {
  const context = useContext(PlatformContext)

  if (context === null) {
    throw new Error("useIsDev must be used within an UserPlatformProvider")
  }

  return context.isDev
}

export function useUserPlatform(): Platform {
  const context = useContext(PlatformContext)

  if (context === null) {
    throw new Error(
      "useUserPlatform must be used within an UserPlatformProvider"
    )
  }

  return context.platform
}

/**
 * Returns whether data-testid attributes should be rendered.
 * When false (default when outside UserPlatformProvider), withDataTestId
 * returns the original content without the wrapper or attribute.
 */
export function useRenderDataTestIdAttribute(): boolean {
  const context = useContext(PlatformContext)
  return context?.renderDataTestIdAttribute ?? false
}
export function useShowExperimentalWarnings(): boolean {
  const context = useContext(PlatformContext)

  if (context === null) {
    console.warn(
      "useShowExperimentalWarnings must be used within an UserPlatformProvider"
    )
    return false
  }

  return context.showExperimentalWarnings
}

/**
 * Returns the app's global hour-cycle preference (12h/24h), or `undefined`
 * when it isn't set — in which case time fields use the native browser-locale
 * input. Set it via the `hourCycle` prop on `F0Provider`.
 */
export function useHourCycle(): HourCycle | undefined {
  const context = useContext(PlatformContext)
  return context?.hourCycle
}
