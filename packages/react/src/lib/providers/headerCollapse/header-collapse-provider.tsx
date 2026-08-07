import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
} from "react"

interface HeaderCollapseContextValue {
  /** How far the header should be condensed, 0 to 1. */
  progress: number
  /** Called by a header on mount. Returns its own deregister function. */
  register: () => () => void
}

/**
 * Inert by default, which is what a header outside any provider reads: fully
 * open, and registering with nobody. `F0Dialog` renders a `BaseHeader` far from
 * any scrolling page and relies on this.
 */
const HeaderCollapseContext = createContext<HeaderCollapseContextValue>({
  progress: 0,
  register: () => () => {},
})

interface HeaderCollapseProviderProps {
  /** How far the header should be condensed, 0 to 1. */
  progress: number
  /**
   * Called when the first header registers, and again when the last one leaves.
   * The owner uses it to avoid measuring anything on a page that has no header
   * to condense.
   */
  onRegistrationChange?: (hasHeader: boolean) => void
  children?: ReactNode
}

/**
 * Carries the collapse progress from whatever owns the scrolling to whatever
 * draws the header, and reports back whether any header is actually listening.
 *
 * Deliberately internal. The only thing that may drive a header's collapse is
 * the component that owns both the header's position and the scrollport, which
 * today means `patterns/Navigation/Page`. Exporting this would hand consumers
 * the numeric channel and with it their own collapse distance, and the point of
 * the whole arrangement is that every resource page condenses identically.
 */
export function HeaderCollapseProvider({
  progress,
  onRegistrationChange,
  children,
}: HeaderCollapseProviderProps) {
  const registered = useRef(0)

  // Held in a ref so `register` stays stable even when the owner passes a fresh
  // closure each render. An unstable `register` would re-run the consumer's
  // effect, deregistering and registering on every render of the owner.
  const notify = useRef(onRegistrationChange)
  notify.current = onRegistrationChange

  // Counted rather than a flag: two headers in one slot, or a header remounting
  // across a route change, both have to leave the count truthful.
  const register = useCallback(() => {
    registered.current += 1
    if (registered.current === 1) notify.current?.(true)

    return () => {
      registered.current -= 1
      if (registered.current === 0) notify.current?.(false)
    }
  }, [])

  const value = useMemo(() => ({ progress, register }), [progress, register])

  return (
    <HeaderCollapseContext.Provider value={value}>
      {children}
    </HeaderCollapseContext.Provider>
  )
}

/**
 * How far this header should be condensed. Registers on mount, so the container
 * knows a header is present and can start watching the scroll, and deregisters
 * on unmount.
 *
 * Returns 0 outside any provider, which is the header's normal open state.
 */
export function useHeaderCollapse(): number {
  const { progress, register } = useContext(HeaderCollapseContext)

  // `register` hands back its own deregister, which is exactly the cleanup
  // shape an effect wants.
  useEffect(() => register(), [register])

  return progress
}
