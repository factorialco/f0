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
import { useNavigation } from "../../../lib/linkHandler"

const PREFERRED_INITIAL_STATE_KEY = "one_sidebar_locked"

export type SidebarState = "locked" | "unlocked" | "hidden"

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
  const [isLastToggleInvokedByUser, setIsLastToggleInvokedByUser] = useState(false)

  const breakpoint = forceFloat ? breakpoints.xl : breakpoints.md
  const isSmallScreen = useMediaQuery(`(max-width: ${breakpoint}px)`, {
    initializeWithValue: true,
  })

  const [locked, setLocked] = useState<boolean>(() => {
    const storedState = localStorage.getItem(PREFERRED_INITIAL_STATE_KEY)

    return storedState !== null ? !!storedState : true
  })
  const [visible, setVisible] = useState(false)
  const [prevSidebarState, setPrevSidebarState] = useState<SidebarState | null>(null)

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

  const handlePointerMove = useCallback(
    (e: PointerEvent<HTMLDivElement>) => {
      if (isSmallScreen) return

      if (e.clientX < 32) {
        setVisible(true)
      }

      if (e.clientX > 280) {
        setVisible(false)
      }
    },
    [isSmallScreen, setVisible]
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
      }}
    >
      <div onPointerMove={handlePointerMove} className="h-screen w-screen">
        {children}
      </div>
    </FrameContext.Provider>
  )
}
