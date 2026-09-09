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

import { useNavigation } from "@/lib/linkHandler"

const PREFERRED_INITIAL_STATE_KEY = "one_sidebar_locked"

export type SidebarState = "locked" | "unlocked" | "hidden"

interface FrameContextType {
  isSmallScreen: boolean
  isLastToggleInvokedByUser: boolean
  sidebarState: SidebarState
  prevSidebarState: SidebarState | null
  toggleSidebar: (callData?: { isInvokedByUser: boolean }) => void
  setForceFloat: (force: boolean) => void
  /**
   * How much room the permanent module rail takes, or 0 when the sidebar has
   * no rail (the classic composition). Registered by `Sidebar` when it is
   * given a `rail`, because the frame receives the whole navigation as one
   * opaque node and cannot see inside it.
   */
  railWidth: number
  /**
   * Whether navigation is permanently on screen. What reads this is the
   * "Open main menu" button in the page surfaces: with a rail there is no
   * state without navigation, so the button has nothing to restore.
   */
  hasRail: boolean
  setRailWidth: (width: number) => void
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
      railWidth: 0,
      hasRail: false,
      setRailWidth: () => {},
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
  const [railWidth, setRailWidth] = useState(0)
  const [isLastToggleInvokedByUser, setIsLastToggleInvokedByUser] =
    useState(false)

  const breakpoint = forceFloat ? breakpoints.xl : breakpoints.md
  const isSmallScreen = useMediaQuery(`(max-width: ${breakpoint}px)`, {
    initializeWithValue: true,
  })

  const [locked, setLocked] = useState<boolean>(() => {
    const storedState = localStorage.getItem(PREFERRED_INITIAL_STATE_KEY)

    return storedState !== null ? !!storedState : true
  })
  const [visible, setVisible] = useState(false)
  const [prevSidebarState, setPrevSidebarState] = useState<SidebarState | null>(
    null
  )

  const toggleSidebar = useCallback(
    (
      { isInvokedByUser }: { isInvokedByUser: boolean } = {
        isInvokedByUser: true,
      }
    ) => {
      setIsLastToggleInvokedByUser(isInvokedByUser ?? true)
      if (isSmallScreen) setVisible(!visible)
      setLocked(!locked)
    },
    [isSmallScreen, visible, locked, setLocked, setVisible]
  )

  // Peeking the collapsed panel by reaching for the left edge. Both thresholds
  // are offset by the rail, because with one on screen the first 56px of the
  // viewport are the rail itself: unshifted, the reveal zone would sit UNDER
  // the navigation and every trip to a rail tab would drag the panel out.
  const handlePointerMove = useCallback(
    (e: PointerEvent<HTMLDivElement>) => {
      if (isSmallScreen) return

      if (e.clientX >= railWidth && e.clientX < railWidth + 32) {
        setVisible(true)
      }

      if (e.clientX > railWidth + 280) {
        setVisible(false)
      }
    },
    [isSmallScreen, setVisible, railWidth]
  )

  const sidebarState: SidebarState = useMemo(() => {
    if (isSmallScreen) {
      if (visible) return "unlocked"
      return "hidden"
    }
    if (!locked && !visible) return "hidden"
    if (!locked && visible) return "unlocked"
    return "locked"
  }, [isSmallScreen, visible, locked])

  useEffect(() => {
    setVisible(false)
  }, [currentPath])

  useEffect(() => {
    if (isLastToggleInvokedByUser) {
      localStorage.setItem(PREFERRED_INITIAL_STATE_KEY, locked ? "1" : "")
    }
  }, [locked, isLastToggleInvokedByUser])

  useEffect(() => {
    return () => {
      setPrevSidebarState(sidebarState)
    }
  }, [sidebarState])

  return (
    <FrameContext.Provider
      value={{
        isSmallScreen,
        isLastToggleInvokedByUser,
        sidebarState,
        toggleSidebar,
        prevSidebarState,
        setForceFloat,
        railWidth,
        hasRail: railWidth > 0,
        setRailWidth,
      }}
    >
      <div onPointerMove={handlePointerMove} className="h-screen w-screen">
        {children}
      </div>
    </FrameContext.Provider>
  )
}
