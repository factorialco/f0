import { useEffect, useRef, useState } from "react"

import { ButtonInternal } from "@/components/F0Button/internal"
import { One as OneIcon } from "@/icons/ai"
import { cn } from "@/lib/utils"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/ui/dropdown-menu"

export type AccessiblePointAction = {
  key: string
  getLabel: () => string
  onSelect: () => void
}

type AccessiblePointActionsProps = {
  hasActions: boolean
  getActions: () => AccessiblePointAction[]
  /** Semantic inputs that make a cached point action stale. */
  resetOn: {
    data: unknown
    isLoading: boolean
    chartType: string
    legendSelection: Record<string, boolean> | undefined
    owner: "host" | "chat" | "none"
    title: string
    areaSelectionMode?: "idle" | "drawing" | "selected" | "unavailable"
  }
  label: string
  triggerLabel: string
  previousLabel: string
  nextLabel: string
  setTrigger: (element: HTMLButtonElement | null) => void
  focusChatAfterSelect: boolean
  focusChatInput: () => void
}

/**
 * Keyboard and screen-reader surface for canvas marks. It stays visually quiet
 * until its trigger receives focus, then exposes the same point actions in a
 * native Radix menu with arrow-key navigation.
 */
export function AccessiblePointActions({
  hasActions,
  getActions,
  resetOn,
  label,
  triggerLabel,
  previousLabel,
  nextLabel,
  setTrigger,
  focusChatAfterSelect,
  focusChatInput,
}: AccessiblePointActionsProps) {
  const [open, setOpen] = useState(false)
  const [actions, setActions] = useState<AccessiblePointAction[] | null>(null)
  const [page, setPage] = useState(0)
  const shouldFocusChatRef = useRef(false)
  const selectedActionRef = useRef(false)
  const pendingActionRef = useRef<(() => void) | null>(null)
  const triggerRef = useRef<HTMLButtonElement | null>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const shouldFocusPageRef = useRef(false)
  const shouldFocusInitialActionRef = useRef(false)
  const getActionsRef = useRef(getActions)
  getActionsRef.current = getActions

  const {
    data,
    isLoading,
    chartType,
    legendSelection,
    owner,
    title,
    areaSelectionMode,
  } = resetOn

  useEffect(() => {
    setActions(null)
    setPage(0)
    setOpen(false)
  }, [
    data,
    isLoading,
    chartType,
    legendSelection,
    owner,
    title,
    areaSelectionMode,
  ])

  useEffect(() => {
    if (!shouldFocusPageRef.current) return
    shouldFocusPageRef.current = false
    let focusFrame = 0
    const frame = requestAnimationFrame(() => {
      // Radix moves focus back to the content after an item prevents close.
      // Run one frame later so the new page's first data action wins.
      focusFrame = requestAnimationFrame(() => {
        contentRef.current
          ?.querySelector<HTMLElement>("[data-point-action]")
          ?.focus()
      })
    })
    return () => {
      cancelAnimationFrame(frame)
      cancelAnimationFrame(focusFrame)
    }
  }, [page])

  useEffect(() => {
    if (!open || actions === null || !shouldFocusInitialActionRef.current)
      return
    shouldFocusInitialActionRef.current = false
    let focusFrame = 0
    const frame = requestAnimationFrame(() => {
      focusFrame = requestAnimationFrame(() => {
        contentRef.current
          ?.querySelector<HTMLElement>("[data-point-action]")
          ?.focus()
      })
    })
    return () => {
      cancelAnimationFrame(frame)
      cancelAnimationFrame(focusFrame)
    }
  }, [actions, open])

  if (!hasActions) return null

  const pageSize = 100
  const loadedActions = actions ?? []
  const start = page * pageSize
  const pageActions = loadedActions.slice(start, start + pageSize)
  const hasPrevious = page > 0
  const hasNext = start + pageSize < loadedActions.length

  const changePage = (nextPage: number) => {
    shouldFocusPageRef.current = true
    setPage(nextPage)
  }

  return (
    <div
      className={cn(
        "absolute bottom-2 left-2 z-10 transition-opacity",
        open
          ? "pointer-events-auto opacity-100"
          : "pointer-events-none opacity-0 focus-within:pointer-events-auto focus-within:opacity-100"
      )}
    >
      <DropdownMenu
        open={open}
        onOpenChange={(nextOpen) => {
          if (nextOpen && actions === null) {
            shouldFocusInitialActionRef.current = true
            setActions(getActionsRef.current())
          }
          setOpen(nextOpen)
        }}
      >
        <DropdownMenuTrigger asChild>
          <ButtonInternal
            ref={(element) => {
              const trigger =
                element instanceof HTMLButtonElement ? element : null
              triggerRef.current = trigger
              setTrigger(trigger)
            }}
            type="button"
            variant="outline"
            size="sm"
            label={label}
            aria-label={triggerLabel}
            icon={OneIcon}
          />
        </DropdownMenuTrigger>
        <DropdownMenuContent
          ref={contentRef}
          align="start"
          side="top"
          className="max-h-80 max-w-[min(32rem,90vw)] overflow-y-auto"
          onCloseAutoFocus={(event) => {
            if (!selectedActionRef.current) return
            event.preventDefault()
            selectedActionRef.current = false
            const action = pendingActionRef.current
            pendingActionRef.current = null
            action?.()
            if (!shouldFocusChatRef.current) {
              requestAnimationFrame(() => {
                const activeElement = document.activeElement
                if (
                  !activeElement ||
                  activeElement === document.body ||
                  !activeElement.isConnected
                ) {
                  triggerRef.current?.focus()
                }
              })
              return
            }
            shouldFocusChatRef.current = false
            focusChatInput()
          }}
        >
          {hasPrevious && (
            <DropdownMenuItem
              onSelect={(event) => {
                event.preventDefault()
                changePage(page - 1)
              }}
            >
              {previousLabel}
            </DropdownMenuItem>
          )}
          {pageActions.map((action) => (
            <DropdownMenuItem
              key={action.key}
              data-point-action=""
              onSelect={() => {
                selectedActionRef.current = true
                shouldFocusChatRef.current = focusChatAfterSelect
                // Run after Radix has closed its modal focus scope. A host may
                // open and focus its own chat or dialog; doing that while the
                // menu is still modal would bounce focus back into this menu.
                pendingActionRef.current = () => {
                  // The host may replace its callback during an unrelated
                  // render while this menu is open. Resolve the same stable
                  // point key against the latest action set at selection time.
                  getActionsRef
                    .current()
                    .find((latestAction) => latestAction.key === action.key)
                    ?.onSelect()
                }
              }}
            >
              {action.getLabel()}
            </DropdownMenuItem>
          ))}
          {hasNext && (
            <DropdownMenuItem
              onSelect={(event) => {
                event.preventDefault()
                changePage(page + 1)
              }}
            >
              {nextLabel}
            </DropdownMenuItem>
          )}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
