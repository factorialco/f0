import {
  F0Alert,
  F0Button,
  F0Dialog,
  F0Icon,
  OneCalendar,
} from "@factorialco/f0-react"
import type { DateRange } from "@factorialco/f0-react"
import { OneDataCollection } from "@factorialco/f0-react/dist/experimental"
import { Calendar, Pencil } from "@factorialco/f0-react/icons/app"
import { useEffect, useLayoutEffect, useRef, useState } from "react"
import { createPortal } from "react-dom"

import { controllingColumns, spendingColumns } from "../shared/columns"
import type { SpendingRow } from "../shared/rows"
import { useManageRows, useManageSource } from "./useManageSource"
import type { ManageVariant } from "./useManageSource"

/**
 * Default "Created on" date range — the current calendar month
 * (May 2026 in the prototype's frozen "today"). Purely cosmetic:
 * editing this doesn't actually filter what gets synced, but it
 * gives designers a realistic chrome surface to demo the
 * OneCalendar range picker + the edit-in-place pattern
 * (summary line ↔ calendar popover with Apply filters footer).
 */
function getDefaultSyncRange(): DateRange {
  // Frozen prototype "today" lives in May 2026 across the fixtures.
  // Anchoring the default here keeps the modal demo deterministic
  // regardless of when someone clicks Sync — production wiring
  // would derive this from the active filter set.
  return {
    from: new Date(2026, 4, 1), // 1 May 2026
    to: new Date(2026, 4, 31, 23, 59, 59, 999),
  }
}

/** Format a Date as `dd/MM/yyyy`. Used on both sides of the range. */
function formatLong(d: Date): string {
  const dd = String(d.getDate()).padStart(2, "0")
  const mm = String(d.getMonth() + 1).padStart(2, "0")
  return `${dd}/${mm}/${d.getFullYear()}`
}

/**
 * Single Manage tab body. Each of the four sub-tabs reuses this
 * component with a different `variant` so the dataset, filters and
 * actions stay consistent.
 *
 * Click handling:
 *   - Folders → navigate via `folderHref` (handled by the source's
 *     `itemUrl`, which leaves expense rows un-linked).
 *   - Expense rows → call `onExpenseClick(id)`. The parent owns the URL
 *     state (`?expense=<id>`) and chooses which side-panel variant to
 *     render based on the active sub-tab.
 *
 * Bulk actions:
 *   - The source declares the actions; the parent handles them via
 *     `onBulkAction`. This is the path that wires Spec D's
 *     `Mark as controlled` and `Bulk edit` into the side-panel layer.
 *
 * Sync to Business Central modal:
 *   - The toolbar "Sync to Business Central" secondary action opens
 *     a confirmation `F0Dialog` (canonical Factorial modal — the
 *     design system owns the backdrop tint, blur, and animation;
 *     no custom overlay needed). The modal explains the scope
 *     (filtered data only) + irreversibility, then Cancel / Sync.
 *   - A "Date range" line sits between the dialog description and
 *     the two info alerts. It toggles between a summary (calendar
 *     icon + `dd/MM – dd/MM/yyyy` + ghost pencil button) and an
 *     edit mode (`F0DatePicker` with range granularity + Save
 *     button). The picker opens the calendar as a dropdown popup
 *     — that's the canonical Factorial pattern, never roll a
 *     custom calendar. Editing is purely cosmetic in the
 *     prototype: Save commits to local state but no filter
 *     actually narrows.
 */
export function ManageTab(props: {
  variant: ManageVariant
  folderHref: (folderId: string) => string
  onExpenseClick: (expenseId: string) => void
  onBulkAction: (actionId: string, selectedIds: string[]) => void
}) {
  const rows = useManageRows()
  const [syncOpen, setSyncOpen] = useState(false)
  // Committed range that the summary line renders. Initialised to
  // the current month so the demo always opens on a sensible
  // window without designers having to interact.
  const [dateRange, setDateRange] = useState<DateRange>(getDefaultSyncRange)
  // Are we in edit mode? When true a calendar popover opens
  // below the pencil button with OneCalendar (range) + a
  // Clear / Apply filters footer — mirroring the DateFilter
  // surface used in the OneDataCollection filter chrome.
  const [rangeEditing, setRangeEditing] = useState(false)
  // Draft buffer while the picker is open. Keeping this separate
  // from `dateRange` means closing the popover (or clicking
  // outside) doesn't accidentally commit a half-finished pick —
  // only Apply commits. Apply also closes the popover; Clear
  // wipes the draft so the user starts over within the same
  // session.
  const [draftRange, setDraftRange] = useState<DateRange | undefined>(dateRange)
  // Frozen snapshot of the selection at the moment the popover
  // opened. `OneCalendar` is uncontrolled — its internal
  // `defaultSelected` effect resets state whenever the prop
  // changes identity, which would clobber the user's
  // in-progress range pick on every re-render. By capturing
  // the initial value here and keeping it referentially
  // stable for the whole edit session, OneCalendar's internal
  // state (and its day-click range logic) is left alone.
  const [calendarInitial, setCalendarInitial] = useState<DateRange | null>(
    dateRange
  )
  // Anchor refs for the floating popover. We portal the popover
  // into `document.body` (so it escapes F0Dialog's
  // `overflow-hidden` content area) and compute its position
  // from the trigger button's bounding rect each time edit mode
  // toggles. Both refs are needed: `triggerRef` for the anchor
  // rect, `popoverRef` for the outside-click target check.
  const triggerRef = useRef<HTMLButtonElement | null>(null)
  const popoverRef = useRef<HTMLDivElement | null>(null)
  // Top/left in viewport coordinates for the portalled popover.
  // Recomputed every time the popover opens (and on window
  // resize / scroll while open).
  const [popoverPos, setPopoverPos] = useState<{ top: number; left: number }>({
    top: 0,
    left: 0,
  })
  const source = useManageSource({
    rows,
    variant: props.variant,
    folderHref: props.folderHref,
    onSyncClick: () => setSyncOpen(true),
  })

  // Close handler that also resets the edit affordance, so opening
  // the dialog again always lands on the summary line (with the
  // last committed range still applied).
  const closeSync = () => {
    setSyncOpen(false)
    setRangeEditing(false)
  }

  // Outside-click closes the calendar popover without committing
  // the draft — same affordance Radix popovers give for free.
  // Scoped to mousedown so the click that opened the popover
  // doesn't immediately close it (the pencil's click bubbles
  // after mousedown). The trigger is also excluded so clicking
  // the pencil while open toggles cleanly instead of double-firing.
  useEffect(() => {
    if (!rangeEditing) return
    const onMouseDown = (e: MouseEvent) => {
      const target = e.target as Node
      if (
        popoverRef.current &&
        !popoverRef.current.contains(target) &&
        triggerRef.current &&
        !triggerRef.current.contains(target)
      ) {
        setRangeEditing(false)
      }
    }
    document.addEventListener("mousedown", onMouseDown)
    return () => document.removeEventListener("mousedown", onMouseDown)
  }, [rangeEditing])

  // Position the portalled popover just below the pencil
  // trigger. `useLayoutEffect` runs synchronously before paint
  // so the popover never flashes at (0,0). We also recompute on
  // scroll/resize while open — the dialog body can scroll
  // internally on small screens, and we don't want the popover
  // detaching from its anchor mid-interaction.
  useLayoutEffect(() => {
    if (!rangeEditing) return
    const compute = () => {
      const rect = triggerRef.current?.getBoundingClientRect()
      if (!rect) return
      setPopoverPos({ top: rect.bottom + 8, left: rect.left })
    }
    compute()
    window.addEventListener("resize", compute)
    window.addEventListener("scroll", compute, true)
    return () => {
      window.removeEventListener("resize", compute)
      window.removeEventListener("scroll", compute, true)
    }
  }, [rangeEditing])

  // Stop native pointer/mouse events from bubbling out of the
  // popover. Radix Dialog (which F0Dialog wraps) attaches
  // NATIVE `pointerdown` listeners on `document` in capture
  // phase to detect outside-clicks. Because our popover is
  // portalled into the Radix Dialog's content root (so its
  // DOM subtree IS inside the dialog), Radix's containment
  // check passes and the dialog stays open — that's the
  // primary mechanism keeping us alive. As a defensive belt
  // for any other listeners (e.g. our own document
  // mousedown handler that closes the popover), we also
  // stop propagation at the popover node bubble phase.
  useEffect(() => {
    if (!rangeEditing) return
    const node = popoverRef.current
    if (!node) return
    const stop = (e: Event) => e.stopPropagation()
    node.addEventListener("pointerdown", stop)
    node.addEventListener("mousedown", stop)
    node.addEventListener("click", stop)
    return () => {
      node.removeEventListener("pointerdown", stop)
      node.removeEventListener("mousedown", stop)
      node.removeEventListener("click", stop)
    }
  }, [rangeEditing])

  // Resolve the Radix Dialog content node at the moment the
  // popover opens, so we can portal INTO it. Radix attributes
  // `[role="dialog"][data-state="open"]` to its content root.
  // Portalling inside this node means Radix's outside-click
  // containment check passes for all popover interactions
  // (day clicks, input focus, footer buttons) — the popover's
  // DOM is a descendant of the dialog content. Falls back to
  // `document.body` if the selector somehow doesn't match
  // (e.g. if Radix changes their attribute convention in a
  // future major). `null` while resolving so we render
  // nothing until the host is found, avoiding a one-frame
  // flash at the wrong spot.
  const [portalHost, setPortalHost] = useState<HTMLElement | null>(null)
  useLayoutEffect(() => {
    if (!rangeEditing) {
      setPortalHost(null)
      return
    }
    const host =
      document.querySelector<HTMLElement>(
        '[role="dialog"][data-state="open"]'
      ) ?? document.body
    setPortalHost(host)
  }, [rangeEditing])

  return (
    <>
      <OneDataCollection
        source={{
          ...source,
          // Only intercept clicks for expense rows (open the detail
          // page). Folder rows fall through to `itemUrl` so the URL
          // navigates to `?folder=<id>`. Returning `undefined` here is
          // critical: if we return a no-op function, OneTable renders
          // an absolute-positioned <button> over the link and the
          // folder navigation gets swallowed by stopPropagation.
          itemOnClick: ((item: SpendingRow) =>
            item.kind === "expense"
              ? () => props.onExpenseClick(item.id)
              : undefined) as unknown as (item: SpendingRow) => () => void,
        }}
        onBulkAction={(actionId, selected, clearSelection) => {
          const ids = selected.itemsStatus
            .filter((s) => s.checked)
            .map((s) => s.item.id)
          props.onBulkAction(actionId, ids)
          // Bulk-edit opens a side panel and the user may cancel — keep
          // the selection so they can retry without re-checking rows.
          if (actionId !== "bulk-edit") {
            clearSelection()
          }
        }}
        visualizations={[
          {
            type: "table",
            options: {
              // Pending Controlling shows the full accounting coding
              // surface (subcategory, cost center, project, VAT,
              // description) plus an alerts column — the other Manage
              // sub-tabs serve approvers/payers who don't need that
              // density and keep the lighter `spendingColumns` layout.
              columns: [
                ...(props.variant === "pending-controlling"
                  ? controllingColumns
                  : spendingColumns),
              ],
            },
          },
        ]}
      />
      {/* Sync-to-ERP confirmation modal. Reuses F0Dialog so the
          backdrop tint, blur, focus trap, and close animation come
          from the design system 1:1 — never hand-roll a `<div>`
          overlay for a Factorial modal, the tokens won't match.
          The body is: a "Date range" edit-in-place row + two
          `F0Alert variant="info"` blocks. F0Dialog owns the
          title + footer (Cancel/Sync) chrome around them. */}
      <F0Dialog
        isOpen={syncOpen}
        onClose={closeSync}
        title="Ready to sync"
        description="Your data is ready to sync to Business Central."
        width="md"
        primaryAction={{
          label: "Sync",
          onClick: () => {
            // Visual-only in the prototype — no actual mutation.
            // Closes the modal so the user lands back on the table
            // and can verify the sync-status column flips on the
            // expenses they expected (production wiring lives in
            // the ERP integration layer).
            closeSync()
          },
        }}
        secondaryAction={{
          label: "Cancel",
          onClick: closeSync,
        }}
      >
        <div className="flex flex-col gap-4">
          {/* "Created on" row. Lives outside the alert stack so
              the chrome (icon + label + value + edit pencil)
              reads as metadata about the sync, not as another
              warning. Clicking the pencil opens a floating
              OneCalendar (range) popover that's portalled to
              `document.body` so it escapes F0Dialog's
              `overflow-hidden` content container — mirroring the
              DateFilter surface used by the OneDataCollection
              filter chrome. */}
          <div className="flex items-center gap-2 text-base">
            <F0Icon icon={Calendar} size="md" />
            <span className="text-f1-foreground-secondary">Created on</span>
            <span className="font-medium text-f1-foreground">
              {dateRange.from && dateRange.to
                ? `${formatLong(dateRange.from)} → ${formatLong(dateRange.to)}`
                : "-"}
            </span>
            {/* Outline pencil button: icon-only, no tooltip per
                designer's call — context (the "Created on" label
                right next to it) makes the affordance obvious.
                Size `sm` so it doesn't dominate the row. */}
            <F0Button
              ref={triggerRef as React.Ref<HTMLButtonElement>}
              variant="outline"
              size="sm"
              icon={Pencil}
              hideLabel
              label="Edit created-on range"
              onClick={() => {
                // Snapshot the current committed range into the
                // draft AND into the calendar's initial value.
                // The calendar prop must stay referentially
                // stable for the rest of the session to avoid
                // OneCalendar's reset-on-prop-change behaviour.
                setDraftRange(dateRange)
                setCalendarInitial(dateRange)
                setRangeEditing((v) => !v)
              }}
            />
          </div>
          {rangeEditing &&
            portalHost &&
            createPortal(
              // Portalled calendar popover. Fixed positioning so
              // it's placed relative to the viewport (the rect
              // we measured from the trigger). `z-[60]` clears
              // the F0Dialog backdrop+content z-index. The
              // chrome (rounded border, shadow, f1 tokens)
              // mirrors the DateFilter popover surface.
              //
              // CRITICAL: stopping React's synthetic events
              // isn't enough — Radix Dialog attaches NATIVE
              // `pointerdown` listeners to `document` for its
              // outside-click dismissal. We attach a capture-
              // phase native listener on the popover root that
              // calls `stopPropagation()` on the native event,
              // so Radix never sees these as outside-clicks.
              // The hook lives below; the ref is wired here.
              <div
                ref={popoverRef}
                style={{
                  top: popoverPos.top,
                  left: popoverPos.left,
                  zIndex: 9999,
                }}
                className="fixed w-fit rounded-md border border-solid border-f1-border-secondary bg-f1-background shadow-lg"
              >
                <div className="space-y-4 overflow-x-hidden p-3">
                  <OneCalendar
                    mode="range"
                    view="day"
                    defaultSelected={calendarInitial}
                    onSelect={(value) => {
                      // `OneCalendar` in range mode emits
                      // `DateRange | null`. Treat null/empty as
                      // a clearing event (matches the Clear
                      // button below); partial ranges (only
                      // `from`) flow through unchanged so the
                      // second click in the calendar completes
                      // the selection.
                      if (
                        value &&
                        typeof value === "object" &&
                        "from" in value
                      ) {
                        setDraftRange(value)
                      } else if (!value) {
                        setDraftRange(undefined)
                      }
                    }}
                    showInput
                  />
                </div>
                <div className="flex items-center justify-end gap-2 border border-solid border-transparent border-t-f1-border-secondary bg-f1-background/80 p-2 backdrop-blur-[8px]">
                  <F0Button
                    variant="ghost"
                    size="sm"
                    label="Clear"
                    onClick={() => {
                      // Resetting `calendarInitial` to null
                      // triggers OneCalendar's internal
                      // reset-on-prop-change effect, clearing
                      // the highlighted days. The draft is
                      // wiped in lockstep so the Apply button
                      // disables again.
                      setDraftRange(undefined)
                      setCalendarInitial(null)
                    }}
                    disabled={!draftRange}
                  />
                  <F0Button
                    variant="default"
                    size="sm"
                    label="Apply filters"
                    onClick={() => {
                      if (draftRange) setDateRange(draftRange)
                      setRangeEditing(false)
                    }}
                    disabled={!draftRange?.from || !draftRange?.to}
                  />
                </div>
              </div>,
              portalHost
            )}
          <F0Alert
            variant="info"
            title="Filtered data will be synced"
            description="Only the data currently visible in the table based on your filters will be included."
          />
          <F0Alert
            variant="info"
            title="This action is irreversible"
            description="Once synced, expenses can't be edited."
          />
        </div>
      </F0Dialog>
    </>
  )
}
