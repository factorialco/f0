import { useEffect, useMemo, useRef, useState } from "react"

import { ButtonInternal } from "@/components/F0Button/internal"
import { CursorClick } from "@/icons/app"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/ui/dropdown-menu"

import type { F0DataChartAreaSelectionPoint } from "../types"

export type F0DataChartAccessibleAreaSelectionAction = {
  key: string
  label: string
  point: F0DataChartAreaSelectionPoint
}

type F0DataChartAccessibleAreaSelectionActionsProps = {
  actions: F0DataChartAccessibleAreaSelectionAction[]
  label: string
  submitLabel: string
  previousLabel: string
  nextLabel: string
  resetOn: unknown
  onSubmit: (points: F0DataChartAreaSelectionPoint[]) => void
}

/**
 * Keyboard, touch, and single-pointer equivalent for polygon selection.
 * Its compact icon-only trigger submits the same bounded data contract.
 */
export function F0DataChartAccessibleAreaSelectionActions({
  actions,
  label,
  submitLabel,
  previousLabel,
  nextLabel,
  resetOn,
  onSubmit,
}: F0DataChartAccessibleAreaSelectionActionsProps) {
  const [open, setOpen] = useState(false)
  const [page, setPage] = useState(0)
  const [selectedKeys, setSelectedKeys] = useState<Set<string>>(new Set())
  const contentRef = useRef<HTMLDivElement>(null)
  const shouldFocusPageRef = useRef(false)

  useEffect(() => {
    setOpen(false)
    setPage(0)
    setSelectedKeys(new Set())
  }, [resetOn])

  useEffect(() => {
    if (!shouldFocusPageRef.current) return
    shouldFocusPageRef.current = false
    let focusFrame = 0
    const frame = requestAnimationFrame(() => {
      focusFrame = requestAnimationFrame(() => {
        contentRef.current
          ?.querySelector<HTMLElement>("[data-area-selection-action]")
          ?.focus()
      })
    })
    return () => {
      cancelAnimationFrame(frame)
      cancelAnimationFrame(focusFrame)
    }
  }, [page])

  const pageSize = 100
  const start = page * pageSize
  const pageActions = actions.slice(start, start + pageSize)
  const hasPrevious = page > 0
  const hasNext = start + pageSize < actions.length
  const selectedPoints = useMemo(
    () =>
      actions
        .filter((action) => selectedKeys.has(action.key))
        .map((action) => action.point),
    [actions, selectedKeys]
  )

  return (
    <div className="absolute bottom-2 left-2 z-20">
      <DropdownMenu open={open} onOpenChange={setOpen}>
        <DropdownMenuTrigger asChild>
          <ButtonInternal
            type="button"
            variant="outline"
            size="sm"
            label={label}
            icon={CursorClick}
            hideLabel
          />
        </DropdownMenuTrigger>
        <DropdownMenuContent
          ref={contentRef}
          align="start"
          side="top"
          className="max-h-80 max-w-[min(32rem,90vw)] overflow-y-auto"
        >
          {hasPrevious && (
            <DropdownMenuItem
              onSelect={(event) => {
                event.preventDefault()
                shouldFocusPageRef.current = true
                setPage((current) => current - 1)
              }}
            >
              {previousLabel}
            </DropdownMenuItem>
          )}
          {pageActions.map((action) => (
            <DropdownMenuCheckboxItem
              key={action.key}
              data-area-selection-action=""
              checked={selectedKeys.has(action.key)}
              onCheckedChange={(checked) => {
                setSelectedKeys((current) => {
                  const next = new Set(current)
                  if (checked) next.add(action.key)
                  else next.delete(action.key)
                  return next
                })
              }}
              onSelect={(event) => event.preventDefault()}
            >
              {action.label}
            </DropdownMenuCheckboxItem>
          ))}
          {hasNext && (
            <DropdownMenuItem
              onSelect={(event) => {
                event.preventDefault()
                shouldFocusPageRef.current = true
                setPage((current) => current + 1)
              }}
            >
              {nextLabel}
            </DropdownMenuItem>
          )}
          <DropdownMenuItem
            disabled={selectedPoints.length === 0}
            onSelect={() => onSubmit(selectedPoints)}
          >
            {submitLabel.replace("{{count}}", String(selectedPoints.length))}
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
