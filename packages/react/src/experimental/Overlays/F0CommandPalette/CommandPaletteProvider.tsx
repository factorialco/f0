import { useControllableState } from "@radix-ui/react-use-controllable-state"
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react"

import { F0CommandPalette } from "./F0CommandPalette"
import type {
  CommandEntityRef,
  F0CommandPaletteApi,
  F0CommandPaletteProviderProps,
} from "./types"

const CommandPaletteContext = createContext<F0CommandPaletteApi | null>(null)

/**
 * Open the palette from anywhere below the provider.
 *
 * `openScoped(ref)` is the one every surface that already knows its target
 * should reach for — a row menu, a bulk bar, a detail header. The UI supplies
 * the scope, the reader supplies the intent.
 */
export const useCommandPalette = (): F0CommandPaletteApi => {
  const context = useContext(CommandPaletteContext)
  if (!context) {
    throw new Error(
      "useCommandPalette must be used inside F0CommandPaletteProvider"
    )
  }
  return context
}

/** Follow an `href` with a full page load — right only for an app with no client router. */
const hardNavigate = (href: string) => {
  window.location.assign(href)
}

/**
 * Mounts the palette and owns whether it is open.
 *
 * It renders the panel itself rather than handing back something to place: the
 * palette is an overlay with exactly one instance per app, and making that a
 * separate `<Host />` only creates a way to forget it.
 */
export const CommandPaletteProvider = ({
  children,
  providers = [],
  actions = [],
  navigation = [],
  recent = [],
  assistant,
  onNavigate = hardNavigate,
  shortcut = true,
  open: openProp,
  onOpenChange,
}: F0CommandPaletteProviderProps) => {
  const [isOpen = false, setIsOpen] = useControllableState({
    prop: openProp,
    defaultProp: false,
    onChange: onOpenChange,
  })
  const [initialScope, setInitialScope] = useState<CommandEntityRef | null>(
    null
  )
  /**
   * Bumped on every open, and used to KEY the panel — so each open starts from a
   * clean state. Without it, opening scoped right after a plain open reuses the
   * live instance and silently keeps the previous scope.
   */
  const [openSeq, setOpenSeq] = useState(0)

  const open = useCallback(() => {
    setInitialScope(null)
    setOpenSeq((sequence) => sequence + 1)
    setIsOpen(true)
  }, [setIsOpen])

  const openScoped = useCallback(
    (ref: CommandEntityRef) => {
      setInitialScope(ref)
      setOpenSeq((sequence) => sequence + 1)
      setIsOpen(true)
    },
    [setIsOpen]
  )

  const close = useCallback(() => setIsOpen(false), [setIsOpen])

  useEffect(() => {
    if (!shortcut) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (
        !(event.metaKey || event.ctrlKey) ||
        event.key.toLowerCase() !== "k"
      ) {
        return
      }
      event.preventDefault()
      setInitialScope(null)
      setOpenSeq((sequence) => sequence + 1)
      setIsOpen((wasOpen) => !wasOpen)
    }

    document.addEventListener("keydown", onKeyDown)
    return () => document.removeEventListener("keydown", onKeyDown)
  }, [setIsOpen, shortcut])

  const api = useMemo<F0CommandPaletteApi>(
    () => ({ open, openScoped, close, isOpen }),
    [close, isOpen, open, openScoped]
  )

  return (
    <CommandPaletteContext.Provider value={api}>
      {children}
      <F0CommandPalette
        key={openSeq}
        open={isOpen}
        onOpenChange={setIsOpen}
        initialScope={initialScope}
        providers={providers}
        actions={actions}
        navigation={navigation}
        recent={recent}
        assistant={assistant}
        onNavigate={onNavigate}
      />
    </CommandPaletteContext.Provider>
  )
}
