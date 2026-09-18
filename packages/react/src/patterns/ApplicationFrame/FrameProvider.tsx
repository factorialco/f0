import { breakpoints, sidebarWidths } from "@factorialco/f0-core"
import React, {
  PointerEvent,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
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
   * The section panel's width. A module whose panel IS its content — an inbox
   * list, a month — needs more than the 240 a menu needs, and everything laid
   * out against the navigation has to read the same number.
   */
  panelWidth: number
  /**
   * Whether navigation is permanently on screen. What reads this is the
   * "Open main menu" button in the page surfaces: with a rail there is no
   * state without navigation, so the button has nothing to restore.
   */
  hasRail: boolean
  /**
   * True for the one frame in which a module change commits. Changing section
   * is not a movement to watch: the panel and the content are a different
   * section's, not this one's on its way somewhere, so everything laid out
   * against the navigation lands at once instead of easing into place.
   */
  isLayoutJumping: boolean
  /** Call before a module change to land the next layout without animation. */
  jumpLayout: () => void
  setRailWidth: (width: number) => void
  setPanelWidth: (width: number) => void
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
      panelWidth: sidebarWidths.panel,
      hasRail: false,
      isLayoutJumping: false,
      jumpLayout: () => {},
      setRailWidth: () => {},
      setPanelWidth: () => {},
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
  const [panelWidth, setPanelWidth] = useState(sidebarWidths.panel)
  const [isLayoutJumping, setIsLayoutJumping] = useState(false)

  // Held for a beat rather than a frame or two. A module change is not one
  // commit: the panel mounts, publishes its width from an effect, and the
  // frame reserves the room on the render after that. Two frames covered the
  // first of those and let the rest ease.
  const jumpTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const jumpLayout = useCallback(() => {
    setIsLayoutJumping(true)
    if (jumpTimer.current) clearTimeout(jumpTimer.current)
    jumpTimer.current = setTimeout(() => setIsLayoutJumping(false), 120)
  }, [])
  useEffect(
    () => () => {
      if (jumpTimer.current) clearTimeout(jumpTimer.current)
    },
    []
  )
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
  const hasRail = railWidth > 0
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

      // With a rail there is nothing to peek: the panel is docked or it is
      // gone, and a floating copy of it over the content is a third state
      // nobody asked for. The rail is what stays behind when it goes.
      if (hasRail) return

      if (e.clientX >= railWidth && e.clientX < railWidth + 32) {
        setVisible(true)
      }

      if (e.clientX > railWidth + 280) {
        setVisible(false)
      }
    },
    [isSmallScreen, hasRail, setVisible, railWidth]
  )

  const sidebarState: SidebarState = useMemo(() => {
    // The panel never floats beside a rail. It takes room from the content or
    // it gives the room back; it does not hover over it.
    // With a rail the panel is the user's to collapse, at every width. A
    // narrow window is a reason to make things smaller, not a reason to decide
    // for somebody which half of the navigation they keep — and the rail is
    // already the answer to "there is no room for all of it".
    if (hasRail) return locked ? "locked" : "hidden"
    if (isSmallScreen) {
      if (visible) return "unlocked"
      return "hidden"
    }
    if (!locked && !visible) return "hidden"
    if (!locked && visible) return "unlocked"
    return "locked"
  }, [hasRail, isSmallScreen, visible, locked])

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
        panelWidth,
        isLayoutJumping,
        jumpLayout,
        hasRail,
        setRailWidth,
        setPanelWidth,
      }}
    >
      <div onPointerMove={handlePointerMove} className="h-screen w-screen">
        {children}
      </div>
    </FrameContext.Provider>
  )
}
