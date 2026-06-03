import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react"
import {
  CURRENT_USER_ID,
  findEmployee,
  type Employee,
} from "@/fixtures"

/**
 * Viewer context — the f0compose-wide notion of "who is logged in".
 *
 * Default viewer is Hellen (`CURRENT_USER_ID`), matching the
 * canonical fixtures. Prototypes can temporarily override the
 * viewer via `useViewerOverride(employeeId)` — the override is
 * scoped to the prototype's lifecycle: mounting installs it,
 * unmounting restores the previous viewer (LIFO stack).
 *
 * Consumed by `FactorialSidebar` to drive the footer avatar + name.
 * Consumed by detail pages whose ownership logic needs to ask
 * "is the current viewer the owner of this expense?".
 *
 * This is a tiny synchronous state holder, not an auth system —
 * f0compose runs as a single-tenant prototype playground.
 */

type Viewer = {
  employeeId: string
  employee: Employee
}

type ViewerContextValue = {
  viewer: Viewer
  /** Push an override; returns a disposer that restores the previous viewer. */
  pushOverride: (employeeId: string) => () => void
}

const fallback: Viewer = {
  employeeId: CURRENT_USER_ID,
  // `findEmployee` returns `Employee | undefined`. The default is
  // always Hellen who's guaranteed to exist (employees.ts pushes
  // her), so the bang is safe here.
  employee: findEmployee(CURRENT_USER_ID)!,
}

const ViewerContext = createContext<ViewerContextValue | null>(null)

/**
 * Root provider. Renders the default Hellen viewer until a child
 * calls `useViewerOverride` to push a temporary override.
 *
 * Stack semantics: multiple simultaneous overrides are LIFO. If
 * Inbox pushes Marie and a (hypothetical) child also pushes Alan,
 * unmounting Alan restores Marie, then unmounting Inbox restores
 * Hellen. Avoids ordering bugs when nested prototypes overlap.
 */
export function ViewerProvider({ children }: { children: React.ReactNode }) {
  const [stack, setStack] = useState<string[]>([])

  const pushOverride = useCallback((employeeId: string) => {
    setStack((prev) => [...prev, employeeId])
    return () => {
      setStack((prev) => {
        // Remove the LAST occurrence so concurrent overrides of
        // the same id don't pop the wrong one.
        const idx = prev.lastIndexOf(employeeId)
        if (idx === -1) return prev
        return [...prev.slice(0, idx), ...prev.slice(idx + 1)]
      })
    }
  }, [])

  const viewer = useMemo<Viewer>(() => {
    const top = stack[stack.length - 1]
    if (!top) return fallback
    const employee = findEmployee(top)
    if (!employee) return fallback
    return { employeeId: top, employee }
  }, [stack])

  const value = useMemo<ViewerContextValue>(
    () => ({ viewer, pushOverride }),
    [viewer, pushOverride]
  )

  return (
    <ViewerContext.Provider value={value}>{children}</ViewerContext.Provider>
  )
}

/**
 * Read the current viewer. Safe to call outside the provider —
 * returns the default Hellen viewer rather than throwing, so
 * catalog/preview surfaces that don't mount the provider stay
 * functional.
 */
export function useViewer(): Viewer {
  const ctx = useContext(ViewerContext)
  return ctx?.viewer ?? fallback
}

/**
 * Install a temporary viewer override for the lifetime of the
 * calling component. Pass `null` (or omit) to keep the default
 * viewer; pass an employee id to swap it.
 *
 * Re-running with a different id swaps the override in place —
 * a single component never holds more than one slot in the stack.
 */
export function useViewerOverride(employeeId: string | null): void {
  const ctx = useContext(ViewerContext)
  useEffect(() => {
    if (!ctx || !employeeId) return
    const dispose = ctx.pushOverride(employeeId)
    return dispose
  }, [ctx, employeeId])
}
