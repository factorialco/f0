import { breakpoints } from "@factorialco/f0-core"
import React, {
  createContext,
  PointerEvent,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react"
import { useMediaQuery } from "usehooks-ts"

import {
  modePersistsPreference,
  resolveSidebarMode,
  type SidebarPreference,
} from "@/patterns/Navigation/Sidebar/sidebarMode"

import { useNavigation } from "@/lib/linkHandler"

const PREFERRED_INITIAL_STATE_KEY = "one_sidebar_locked"

export type SidebarState = "locked" | "unlocked" | "hidden"

/**
 * The stored value predates this provider and is `"1"` / `""`, not JSON. Read
 * and write it in that shape so nobody's saved preference is invalidated.
 *
 * Both directions are guarded: this runs during render, and an unguarded
 * `localStorage` here takes down the whole app shell — not just the sidebar —
 * under SSR, in Safari's private mode, and in storage-blocked iframes.
 */
const readStoredPreference = (): SidebarPreference => {
  try {
    if (typeof window === "undefined") return "expanded"
    const stored = window.localStorage.getItem(PREFERRED_INITIAL_STATE_KEY)
    if (stored === null) return "expanded"
    return stored === "" ? "collapsed" : "expanded"
  } catch {
    return "expanded"
  }
}

const writeStoredPreference = (preference: SidebarPreference): void => {
  try {
    if (typeof window === "undefined") return
    window.localStorage.setItem(
      PREFERRED_INITIAL_STATE_KEY,
      preference === "expanded" ? "1" : ""
    )
  } catch {
    // Storage full or unavailable — the preference is a nicety, not a
    // reason to break the frame.
  }
}

interface FrameContextType {
  isSmallScreen: boolean
  isLastToggleInvokedByUser: boolean
  sidebarState: SidebarState
  prevSidebarState: SidebarState | null
  toggleSidebar: (callData?: { isInvokedByUser: boolean }) => void
  setForceFloat: (force: boolean) => void
}

const FrameContext = createContext<FrameContextType | undefined>(undefined)

export function useSidebar(): FrameContextType {
  const context = useContext(FrameContext)
  if (context === undefined) {
    return {
      isSmallScreen: false,
      isLastToggleInvokedByUser: true,
      prevSidebarState: null,
      sidebarState: "locked",
      toggleSidebar: () => {},
      setForceFloat: () => {},
    }
  }
  return context
}

interface FrameProviderProps {
  children: React.ReactNode
}

export function FrameProvider({ children }: FrameProviderProps) {
  const { currentPath } = useNavigation()
  const [forceFloat, setForceFloat] = useState(false)
  const [isLastToggleInvokedByUser, setIsLastToggleInvokedByUser] =
    useState(false)

  const breakpoint = forceFloat ? breakpoints.xl : breakpoints.md
  const isSmallScreen = useMediaQuery(`(max-width: ${breakpoint}px)`, {
    initializeWithValue: true,
  })

  // Three separate things, because they mean three separate things.
  //
  //   preference   what you last chose, on a screen with room to choose. Persisted.
  //   overlayOpen  whether the drawer is showing. Yours for this moment only.
  //   peeking      the hover reveal. Also momentary.
  //
  // They used to be two booleans doing four jobs, and the overlap is what made
  // opening the drawer on a narrow window quietly rewrite the desktop layout.
  const [preference, setPreference] =
    useState<SidebarPreference>(readStoredPreference)
  const [overlayOpen, setOverlayOpen] = useState(false)
  const [peeking, setPeeking] = useState(false)

  const mode = resolveSidebarMode({
    isCompactViewport: isSmallScreen,
    preference,
  })

  const toggleSidebar = useCallback(
    (
      { isInvokedByUser }: { isInvokedByUser: boolean } = {
        isInvokedByUser: true,
      }
    ) => {
      setIsLastToggleInvokedByUser(isInvokedByUser)

      if (!modePersistsPreference(mode)) {
        // A drawer toggle moves the drawer. Nothing else.
        setOverlayOpen((open) => !open)
        return
      }

      setPreference((current) => {
        const next = current === "expanded" ? "collapsed" : "expanded"
        if (isInvokedByUser) writeStoredPreference(next)
        return next
      })
    },
    [mode]
  )

  const handlePointerMove = useCallback(
    (e: PointerEvent<HTMLDivElement>) => {
      if (isSmallScreen) return

      if (e.clientX < 32) {
        setPeeking(true)
      }

      if (e.clientX > 280) {
        setPeeking(false)
      }
    },
    [isSmallScreen]
  )

  const sidebarState: SidebarState = useMemo(() => {
    if (mode === "overlay") return overlayOpen ? "unlocked" : "hidden"
    if (mode === "docked") return "locked"
    return peeking ? "unlocked" : "hidden"
  }, [mode, overlayOpen, peeking])

  // Leaving a page dismisses whatever was momentarily on top. The preference
  // is not momentary, so it is untouched.
  useEffect(() => {
    setOverlayOpen(false)
    setPeeking(false)
  }, [currentPath])

  // The drawer covers the page and takes a scrim with it, so it owes the user
  // the way out that every other such surface has. Clicking the scrim was the
  // only one, which left the keyboard with none.
  useEffect(() => {
    if (mode !== "overlay" || !overlayOpen) return
    const onKeyDown = (event: KeyboardEvent): void => {
      if (event.key === "Escape") setOverlayOpen(false)
    }
    document.addEventListener("keydown", onKeyDown)
    return () => document.removeEventListener("keydown", onKeyDown)
  }, [mode, overlayOpen])

  const [prevSidebarState, setPrevSidebarState] = useState<SidebarState | null>(
    null
  )
  const [lastSeenState, setLastSeenState] = useState<SidebarState>(sidebarState)
  if (lastSeenState !== sidebarState) {
    // Derived during render rather than in an effect cleanup, which lagged a
    // render behind and cost an extra one per transition.
    setPrevSidebarState(lastSeenState)
    setLastSeenState(sidebarState)
  }

  return (
    <FrameContext.Provider
      value={{
        isSmallScreen,
        isLastToggleInvokedByUser,
        sidebarState,
        toggleSidebar,
        prevSidebarState,
        setForceFloat,
      }}
    >
      <div onPointerMove={handlePointerMove} className="h-screen w-screen">
        {children}
      </div>
    </FrameContext.Provider>
  )
}
