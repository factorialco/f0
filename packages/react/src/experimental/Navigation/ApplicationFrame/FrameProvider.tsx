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

type SidebarState = "locked" | "unlocked" | "hidden"

interface FrameContextType {
  isSmallScreen: boolean
  sidebarState: SidebarState
  prevSidebarState: SidebarState | null
  toggleSidebar: () => void
  setForceFloatingMode: (force: boolean) => void
}

const FrameContext = createContext<FrameContextType | undefined>(undefined)

export function useSidebar(): FrameContextType {
  const context = useContext(FrameContext)
  if (context === undefined) {
    return {
      isSmallScreen: false,
      prevSidebarState: null,
      sidebarState: "locked",
      toggleSidebar: () => {},
      setForceFloatingMode: () => {},
    }
  }
  return context
}

interface FrameProviderProps {
  children: React.ReactNode
}

export function FrameProvider({ children }: FrameProviderProps) {
  const { currentPath } = useNavigation()
  const [forceFloatingMode, setForceFloatingMode] = useState(false)

  const breakpoint = forceFloatingMode ? 1440 : 900
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

  const toggleSidebar = useCallback(() => {
    if (isSmallScreen) setVisible(!visible)
    setLocked(!locked)
  }, [isSmallScreen, visible, locked, setLocked, setVisible])

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
    localStorage.setItem(PREFERRED_INITIAL_STATE_KEY, locked ? "1" : "")
  }, [locked])

  useEffect(() => {
    return () => {
      setPrevSidebarState(sidebarState)
    }
  }, [sidebarState])

  return (
    <FrameContext.Provider
      value={{
        isSmallScreen,
        sidebarState,
        toggleSidebar,
        prevSidebarState,
        setForceFloatingMode,
      }}
    >
      <div onPointerMove={handlePointerMove} className="h-screen w-screen">
        {children}
      </div>
    </FrameContext.Provider>
  )
}
