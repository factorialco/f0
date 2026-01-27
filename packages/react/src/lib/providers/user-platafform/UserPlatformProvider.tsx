import { createContext, useContext, useEffect, useState } from "react"

import { Platform } from "./types"
import { detectPlatform } from "./user-platform"

type Context = {
  platform: Platform
  isDev: boolean
  showExperimentalWarnings: boolean
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
