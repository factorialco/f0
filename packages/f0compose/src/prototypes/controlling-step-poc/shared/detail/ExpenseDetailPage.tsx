import {
  CURRENT_USER_ID,
  costCenters,
  employees,
  projects,
  vatRates,
  type ControllingFields,
  type ExpenseCategory,
  type ForeignCurrency,
} from "@/fixtures"
import { useViewerOverride } from "@/lib/viewer"
import {
  F0Box,
  F0Button,
  F0ButtonDropdown,
  F0Text,
  StandardLayout,
  type F0FormRef,
} from "@factorialco/f0-react"
import {
  DetailsItemsList,
  Page,
  PageHeader,
  ResourceHeader,
  Tabs,
  type DetailsItemType,
} from "@factorialco/f0-react/dist/experimental"
import {
  Add,
  ArrowCycle,
  CheckCircle,
  ChevronDown,
  ChevronUp,
  Coffee,
  Computer,
  Cross,
  Delete,
  Download,
  EyeVisible,
  Folder,
  Image as ImageIcon,
  Laptop,
  Minus,
  Office,
  Pencil,
  Plane,
  Printer,
  ShoppingCart,
  Sleep,
  Upload,
} from "@factorialco/f0-react/icons/app"
import type { IconType } from "@factorialco/f0-react"
import { useCallback, useEffect, useMemo, useRef, useState } from "react"

import { STATUS_LABEL, STATUS_VARIANT } from "../expenseStatus"
import { type SpendingRow } from "../rows"
import { PolicyAlertCard } from "../../../_shared/PolicyAlertCard"
import { selectPolicyAlert } from "../../../_shared/selectPolicyAlert"
import {
  getMissingRequiredFields,
  markFieldsFilled,
  missingFieldsTooltip,
} from "../../../_shared/requiredFields"
import { hasReceipt as rowHasReceipt } from "@/prototypes/_shared/receiptPresence"
import { buildReceiptDataUrl } from "./receiptSvg"
import {
  ControllingForm,
  type ControllingFormData,
} from "../sidePanel/ControllingForm"
import { SubmitterEditForm, type SubmitterFormData } from "./SubmitterEditForm"
import { ParticipantApproval } from "../participants/ParticipantApproval"
import { ownerImplicitShare } from "../participants/computeShares"
import {
  AiSuggestionBadge,
  categorySuggestionReason,
} from "../aiSuggestion"

/**
 * Full-page expense detail. Replaces the side-panel detail/controlling
 * variants for single-row flows; the side panel survives only for
 * `bulk-edit`.
 *
 * Layout mirrors Factorial > Organization > People > employee profile:
 *
 *   PageHeader (module + breadcrumb back to the source tab)
 *   ResourceHeader
 *     ├ avatar (category icon)
 *     ├ title (provider) + description (category · date · amount)
 *     ├ status pill
 *     └ actions (Edit / Save toggle, Mark as controlled, Reject, Delete)
 *   Body: 50/50 split
 *     ├ Left: read view (sectioned label/value list) OR <ControllingForm>
 *     └ Right: receipt preview with zoom/rotate toolbar
 *
 * Edit mode is local state (no URL param). Toggling "Edit" swaps the
 * left half from the read view to the form. Saving submits the form,
 * exits edit mode, and the parent `onSave` is invoked.
 *
 * Why a single-page mode toggle (vs `?mode=edit`):
 *   - The read view and form share the same fields; flipping the same
 *     URL keeps refresh semantics unsurprising.
 *   - The form's identity is keyed on `row.id` so swapping rows still
 *     resets the F0Form registration cleanly.
 */

// Category icon mapping. Production would have a richer icon set; the
// f0-react app icon pack doesn't ship a taxi/cab/hotel-fork glyph so
// we map best-effort (Hotel→Sleep, Taxis→Plane, Meals→Coffee). Falls
// back to Image for unknown categories.
const CATEGORY_ICON: Record<ExpenseCategory, IconType> = {
  Meals: Coffee,
  Taxis: Plane,
  Travel: Plane,
  Shopping: ShoppingCart,
  Hotel: Sleep,
  Office: Office,
  Software: Laptop,
  Mileage: Plane,
  "Per diem": Coffee,
}

const CATEGORY_FALLBACK_ICON: IconType = Computer

// Receipt zoom model. The toolbar mirrors a PDF viewer: discrete
// percentage stops PLUS two auto-fit modes ("Page fit" — contain the
// whole image; "Page width" — match the frame width). Buttons "−" /
// "+" jump to the nearest neighbouring percentage. Switching to a fit
// mode resets to the auto behaviour and the displayed % becomes
// purely informational.
const ZOOM_PERCENTS = [50, 75, 100, 125, 150, 200] as const
type ZoomPercent = (typeof ZOOM_PERCENTS)[number]
type ZoomMode = "page-fit" | "page-width" | ZoomPercent

const ZOOM_OPTIONS: ReadonlyArray<{ value: ZoomMode; label: string }> = [
  { value: "page-fit", label: "Page fit" },
  { value: "page-width", label: "Page width" },
  { value: 50, label: "50%" },
  { value: 75, label: "75%" },
  { value: 100, label: "100%" },
  { value: 125, label: "125%" },
  { value: 150, label: "150%" },
  { value: 200, label: "200%" },
]

// Status × tab gate for the pencil-icon-only Edit affordance in the
// header. Mirrors the spec rule:
//   - Always editable while the row is being assembled (draft /
//     pending / changes-requested). "Changes requested" is the
//     bounce-back state: the approver wants the submitter to fix
//     something and resubmit, so the row MUST be editable —
//     otherwise the submitter can't action the request.
//   - On the Controlling tab finance can also re-open already-approved
//     and already-controlled rows (controlled = "controlled within
//     finance review", still mutable until Pay locks it).
function canEditRow(status: SpendingRow["status"], controllable: boolean) {
  if (
    status === "draft" ||
    status === "pending" ||
    status === "changes-requested"
  ) {
    return true
  }
  if (controllable && (status === "approved" || status === "controlled")) {
    return true
  }
  return false
}

const eurFormatter = new Intl.NumberFormat("en-GB", {
  style: "currency",
  currency: "EUR",
})
const dateFormatter = new Intl.DateTimeFormat("en-GB", {
  year: "numeric",
  month: "short",
  day: "numeric",
})

function formatEUR(amount: number) {
  return eurFormatter.format(amount)
}
function formatDate(iso: string) {
  return dateFormatter.format(new Date(iso + "T00:00:00Z"))
}

export function ExpenseDetailPage(props: {
  row: SpendingRow
  /** Where the page came from — used for the breadcrumb label. */
  sourceTabLabel: string
  /** Deep-link URL back to the source tab (powers the breadcrumb click). */
  sourceTabHref: string
  /** Navigate back to the list. Currently unused inside the page
   *  (the top-right X was removed; users navigate via breadcrumb or
   *  the browser). Kept in the props so callers can still wire it
   *  for future re-introduction (e.g. a Cancel inside a Save flow). */
  onBack: () => void
  /** Persist controlling fields. Caller decides whether to also flip
   *  the row's status to `controlled`. */
  onSaveControlling: (data: ControllingFormData) => void
  /** Mark the row as controlled without opening the form. */
  onMarkControlled: () => void
  /** Reject the row (critical action). */
  onReject: () => void
  /** Whether the controlling block is meaningful for this row.
   *  Drives whether the controlling-form fields render in edit mode. */
  controllable: boolean
  /** Which JTBD owns the source tab. Drives the primary CTA set:
   *    approval     → Approve / Reject
   *    controlling  → Mark as controlled / Reject
   *    pay          → Mark as paid / Reject
   *    view         → no destructive primary; only Edit + overflow.
   *  Independent from `controllable` because Pending Approval is an
   *  approver-only flow where finance hasn't enriched the controlling
   *  block yet. */
  tabRole: "approval" | "controlling" | "pay" | "view"
  /** Sibling-list navigation shown top-right of the page header
   *  (counter + up/down chevrons). Mirrors Recruitment > Candidate's
   *  inline pagination so reviewers can walk a queue without bouncing
   *  back to the list. `null` hides the cluster (e.g. deep-linked
   *  expense with no recoverable source list). */
  navigation?: {
    counter: { current: number; total: number }
    previous?: { url: string; title: string }
    next?: { url: string; title: string }
  } | null
}) {
  const {
    row,
    sourceTabLabel,
    sourceTabHref,
    onBack: _onBack,
    onSaveControlling,
    onMarkControlled,
    onReject,
    controllable,
    tabRole,
    navigation,
  } = props

  // Push a viewer override when this expense belongs to someone
  // other than the default Hellen viewer (e.g. Alan's Greystone
  // Brunch House row). The sidebar footer, "· you" chip, and
  // owner block all re-read from `useViewer()`, so the whole
  // page flips POV while the detail page is mounted. Navigating
  // away unmounts this page and restores Hellen automatically.
  useViewerOverride(row.ownerEmployeeId ?? null)

  const [editMode, setEditMode] = useState(false)
  // True when edit-mode was entered via the policy-alert "Review"
  // CTA — in that case we trigger validation on the missing
  // required fields so they highlight red and auto-scroll. False
  // when entered via the pencil button: the user just wants to
  // edit casually, no fields should be put on focus.
  const [reviewMode, setReviewMode] = useState(false)
  // Auto-clear reviewMode whenever we leave edit-mode so a later
  // pencil-driven re-entry doesn't inherit the previous Review
  // intent.
  useEffect(() => {
    if (!editMode) setReviewMode(false)
  }, [editMode])
  const [activeTabId, setActiveTabId] = useState<"summary" | "comments">(
    "summary"
  )
  const [zoom, setZoom] = useState<ZoomMode>("page-fit")
  const [rotation, setRotation] = useState<0 | 90 | 180 | 270>(0)

  // Single F0FormRef shared between this page (header Save) and
  // the rendered form (`ControllingForm` or `SubmitterEditForm`).
  // Two reasons it lives here and not inside the form:
  //   1. The header Save button needs to call `submit()` on it to
  //      trigger validation. Without an external ref the form's
  //      built-in submit button is the only way to validate, and
  //      we hide that button (see SubmitterEditForm.submitConfig).
  //   2. The Review eye-button on the missing-fields alert calls
  //      `trigger(field)` on it after entering edit mode, so the
  //      missing fields render in their error state immediately.
  // Resetting the ref on row change is implicit: F0Form is mounted
  // with `key={row.id}` so a new row gets a fresh `formRef.current`
  // anyway — no manual cleanup needed.
  const pageFormRef = useRef<F0FormRef | null>(null)

  // Missing-required-fields gate. Sits ABOVE the policy-agent alert
  // pipeline: when the row is a draft missing Project/Description,
  // the page renders an error red "Can't send this expense" alert
  // (with a Review button) and disables Send-for-approval until the
  // user fills + saves the missing fields. See
  // `_shared/requiredFields.ts` for the full rationale and seed.
  const missingRequired = useMemo(
    () => getMissingRequiredFields(row.id),
    // Recompute when the row changes OR when edit mode toggles —
    // toggling out of edit mode after Save mutates the in-memory
    // `filled` set and we want the alert to update on that flip.
    [row.id, editMode]
  )

  // Form-level validity flag forwarded from `SubmitterEditForm`
  // via the `onValidityChange` callback. Drives the disabled state
  // on the header's Save action in edit mode — Save stays disabled
  // until every required field validates (i.e. the user has filled
  // in whatever was missing). Seeded `true` because edit mode is
  // never reached without at least the trigger-on-mount errors the
  // form fires when `requiredFields` is non-empty; for rows that
  // have no missing fields the form will fire `onValidityChange(false)`
  // on its first effect and the button unlocks.
  const [formHasErrors, setFormHasErrors] = useState(true)

  const category = row.description as ExpenseCategory
  const avatarIcon = CATEGORY_ICON[category] ?? CATEGORY_FALLBACK_ICON

  // Per-row receipt: ~80% of rows have one. The presence rule lives
  // in `_shared/receiptPresence` so `selectPolicyAlert` can steer
  // "no receipt" copy onto the same rows that show the empty state
  // here — otherwise the alert and the panel would disagree.
  const receiptUrl: string | null = useMemo(() => {
    if (!rowHasReceipt(row.id)) return null
    return buildReceiptDataUrl(row)
  }, [row])

  const onSave = useCallback(
    (data: ControllingFormData) => {
      onSaveControlling(data)
      setEditMode(false)
    },
    [onSaveControlling]
  )

  // Submitter-form save persists project + description back onto the
  // row's `controlling` block so the summary (view tab) reflects the
  // new values immediately. The summary reads from
  // `row.controlling?.project / .description` (see `ReadView` —
  // "Project" + "Description" entries); without this write the
  // summary keeps showing "—" after Save.
  //
  // We mutate `row.controlling` in place. The fixture row is the
  // single source of truth for this session; mutating it persists
  // the values across re-renders and tab switches without needing a
  // store. Production would route through a real mutation.
  const onSaveSubmitter = useCallback(
    (data: SubmitterFormData) => {
      const next: ControllingFields = {
        ...(row.controlling ?? {}),
        // Only overwrite when the submitter actually provided a
        // value — `undefined` would clobber any pre-existing data.
        ...(data.project !== undefined ? { project: data.project } : {}),
        ...(data.description !== undefined
          ? { description: data.description }
          : {}),
      }
      // Mutating in place (rather than `setState`) because `row` is a
      // memoized reference from `ControllingStepPoc`'s `expenseRow`
      // memo — we don't own the setter, but we do own the object.
      row.controlling = next

      // Persist participants + split-payment data so the read view
      // (summary mode) reflects whatever the user picked in edit
      // mode. The form's onSubmit already gates these on category
      // and the split toggle, so `participants` may be `undefined`
      // (non-participant-bearing category) and `split` may be
      // `null` (toggle off or no shares).
      row.participants = data.participants
      row.split = data.split ?? null

      // The form just validated successfully (this callback only
      // fires from F0Form's onSubmit, which RHF only invokes after
      // the resolver passes). Mark the row's required fields as
      // filled so the gate alert disappears + the Send primary
      // re-enables on the next render.
      markFieldsFilled(row.id)
      setEditMode(false)

      // Scroll back to the top of the expense summary after saving.
      // Without this, finishing edit mode while scrolled to the
      // Description field at the bottom of the form leaves the user
      // staring at the same patch of screen — they lose the context
      // that the row is now complete (alert dismissed, header in
      // "saved" state). Defer to the next frame so the layout has
      // already shrunk back to read-mode height before we scroll;
      // otherwise the browser may clamp the target offset to the
      // current (taller) document height and look like nothing
      // happened. Both `window` and the closest scrollable ancestor
      // are scrolled because StandardLayout may host its own scroll
      // container depending on viewport.
      requestAnimationFrame(() => {
        window.scrollTo({ top: 0, behavior: "smooth" })
        // Walk up from the active element / body looking for any
        // ancestor that actually scrolls vertically and reset it.
        let el: HTMLElement | null = document.body
        while (el) {
          if (el.scrollTop > 0) {
            el.scrollTo({ top: 0, behavior: "smooth" })
            break
          }
          el = el.parentElement
        }
        // Also reset every overflow-scroll/auto descendant near the
        // top of the layout — Page / StandardLayout typically nest
        // one such container.
        document
          .querySelectorAll<HTMLElement>('[class*="overflow"]')
          .forEach((node) => {
            if (node.scrollTop > 0) {
              node.scrollTo({ top: 0, behavior: "smooth" })
            }
          })
      })
    },
    [row]
  )

  /**
   * Header Save handler. Two paths:
   *
   *   - When the form is mounted (edit mode), call `submit()` on
   *     the shared form ref. F0Form runs the resolver; on success
   *     `onSubmit` (and therefore `onSave...`) fires, which exits
   *     edit mode. On failure RHF surfaces the field errors and
   *     `useErrorNavigation` scrolls to the first one — the page
   *     stays in edit mode.
   *   - Fallback: if the ref is somehow not yet attached (e.g. a
   *     paint between `setEditMode(true)` and the form mount),
   *     just exit edit mode rather than swallowing the click.
   *
   * Returning the promise is intentional — async-safe in case a
   * future caller wants to chain on completion.
   */
  const onHeaderSave = useCallback(async () => {
    const ref = pageFormRef.current
    if (!ref) {
      setEditMode(false)
      return
    }
    try {
      await ref.submit()
    } catch {
      // Validation failed; F0Form has already surfaced the errors
      // and useErrorNavigation has scrolled to the first one. Stay
      // in edit mode so the user can fix them.
    }
  }, [])

  /**
   * Review handler — wired into the missing-fields alert's
   * `bodyAction` (eye icon). Opens edit mode, then on the next
   * frame triggers validation on each missing field so the
   * F0FormField error state renders + `useErrorNavigation` scrolls
   * to the first one.
   *
   * `requestAnimationFrame` (twice) instead of `setTimeout(0)`:
   * the form mounts on the first frame, anchors are in the DOM
   * on the second. This is the same pattern the form's own
   * on-mount trigger uses (see SubmitterEditForm).
   */
  const onReview = useCallback(() => {
    setEditMode(true)
    setReviewMode(true)
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        for (const f of missingRequired) {
          pageFormRef.current?.trigger(f)
        }
      })
    })
  }, [missingRequired])

  // Zoom navigation. − / + step through the percent list; if we're in
  // a fit mode the first step "anchors" us at 100 % then walks from
  // there. This matches Acrobat / Preview behaviour and is what
  // finance users will already have muscle memory for.
  const stepZoom = useCallback((direction: -1 | 1) => {
    setZoom((current) => {
      if (current === "page-fit" || current === "page-width") return 100
      const idx = ZOOM_PERCENTS.indexOf(current)
      const nextIdx = Math.min(
        Math.max(idx + direction, 0),
        ZOOM_PERCENTS.length - 1
      )
      return ZOOM_PERCENTS[nextIdx] ?? current
    })
  }, [])
  const zoomIn = useCallback(() => stepZoom(1), [stepZoom])
  const zoomOut = useCallback(() => stepZoom(-1), [stepZoom])
  const rotate = useCallback(() => {
    setRotation((r) => ((r + 90) % 360) as 0 | 90 | 180 | 270)
  }, [])
  const setZoomMode = useCallback((mode: ZoomMode) => setZoom(mode), [])

  // ----- Header CTAs --------------------------------------------------
  // Tab-role drives the destructive primary action; Edit always lives
  // as a pencil-icon-only outline in the secondary slot when the row
  // is editable. Save/Cancel take over the slots while editing.
  //
  // Why Edit isn't in the primary slot: ResourceHeader only renders
  // primaryAction at the "default" variant (filled red), which would
  // out-shout Approve/Mark as controlled. The screenshot shows Edit
  // as an outlined pencil button next to the overflow menu, which
  // matches HeaderSecondaryAction with `variant: "outline"` and
  // `hideLabel: true`.
  const editable = canEditRow(row.status, controllable)

  // Submitter "To-Do" state: row belongs to the user, hasn't been
  // sent for approval yet (draft) or was bounced back for changes.
  // On these rows the detail page is an authoring surface, so the
  // primary CTA flips from a passive view to "Send for approval"
  // and we surface Delete as its own header button rather than
  // burying it in the 3-dot menu. Add to folder + Export PDF stay
  // in the overflow menu — useful but not headline actions.
  // Layout: [⋯] [🗑] [✎] | [Send for approval]
  // (BaseHeader puts a single divider before the primary action;
  // see comment block below on action ordering.)
  const isSubmitterTodo =
    tabRole === "view" &&
    (row.status === "draft" || row.status === "changes-requested")

  // Submitter "Submitted > pending" state: the expense has been
  // sent for approval and is sitting in the approver's queue. The
  // user can still pull it back and tweak it (Edit), but every
  // other authoring action is gone — Delete is too destructive
  // once the row is in someone else's queue, Send-for-approval is
  // a no-op (it's already there), and Add to folder / Export PDF
  // are not headline actions for a row in flight. So we collapse
  // the whole header to a single secondary Edit button with full
  // label (icon-only would be too quiet as the lone control).
  const isSubmitterPending =
    tabRole === "view" && row.status === "pending"

  const primaryAction = editMode
    ? {
        label: "Save",
        icon: CheckCircle,
        // Routes through F0Form's submit pipeline (see
        // `onHeaderSave`). Validation runs first; if it fails the
        // page stays in edit mode and the first invalid field is
        // scrolled into view.
        onClick: onHeaderSave,
        // Stay disabled (quietly, no tooltip — the inline field
        // errors already explain why) while the form is invalid.
        // `formHasErrors` is forwarded from `SubmitterEditForm` via
        // `onValidityChange`. The form runs `trigger()` on mount so
        // an unfilled required `description` reports `hasErrors:
        // true` immediately and Save starts disabled.
        disabled: formHasErrors,
      }
    : isSubmitterPending
      ? undefined
      : isSubmitterTodo
      ? {
          label: "Send for approval",
          icon: Upload,
          onClick: () => {},
          // Required-fields gate: when the row is missing one or
          // more required fields the user MUST fill them before
          // submitting. The button stays visible (so the action
          // is discoverable) but is disabled with a tooltip
          // naming what's missing. The Review button on the alert
          // is the actionable affordance.
          disabled: missingRequired.length > 0,
          tooltip:
            missingRequired.length > 0
              ? missingFieldsTooltip(missingRequired)
              : undefined,
        }
      : tabRole === "approval"
        ? {
            label: "Approve",
            icon: CheckCircle,
            onClick: () => {},
          }
        : tabRole === "controlling"
          ? {
              label: "Mark as controlled",
              icon: CheckCircle,
              onClick: onMarkControlled,
            }
          : tabRole === "pay"
            ? {
                label: "Mark as paid",
                icon: CheckCircle,
                onClick: () => {},
              }
            : undefined

  const secondaryActions = editMode
    ? [{ label: "Cancel", icon: Cross, onClick: () => setEditMode(false) }]
    : [
        // Action ordering inside ResourceHeader is fixed by BaseHeader:
        //   [otherActions 3-dot]  [secondaryActions in array order]  |  [primaryAction]
        // The 3-dot menu and the auto-divider are not configurable;
        // we control the rest by ordering this array.
        //
        // Submitter To-Do (draft / changes-requested):
        //   [📁 Add to folder] [🗑] [✎] | [Send for approval]
        // Add to folder is promoted out of the 3-dot menu and rendered
        // as the leftmost secondary (icon + label) — it's the only
        // non-destructive organisational action and the user said it
        // should be visible, not buried. Delete and Edit follow as
        // icon-only outline buttons; the primary is the red Send CTA.
        //
        // Submitter pending:
        //   [🗑 Delete] [✎ Edit]
        // No menu, no primary. Both controls are secondary outline
        // with icon + label so neither feels like a quiet tertiary.
        // Delete is shown explicitly because the user can still pull
        // a pending row back and kill it (it's their row, sitting in
        // someone else's queue).
        //
        // Other view roles (approval / controlling / pay):
        //   [⋯] [✎] | [Reject] [Approve | Mark as ...]
        ...(isSubmitterTodo
          ? [
              {
                label: "Add to folder",
                icon: Folder,
                variant: "outline" as const,
                onClick: () => {},
              },
              {
                label: "Delete",
                icon: Delete,
                hideLabel: true,
                tooltip: "Delete expense",
                // Delete is always destructive — use the `critical`
                // F0Button variant so the button reads as a red /
                // danger affordance regardless of whether it's
                // icon-only (Todo) or icon + label (Pending).
                variant: "critical" as const,
                onClick: () => {},
              },
            ]
          : []),
        ...(isSubmitterPending
          ? [
              {
                label: "Delete",
                icon: Delete,
                // Same critical variant as Todo — destructive intent
                // must read the same way wherever Delete appears.
                variant: "critical" as const,
                onClick: () => {},
              },
            ]
          : []),
        ...(editable
          ? [
              {
                label: "Edit",
                icon: Pencil,
                // Pending and Todo callouts:
                //  - Pending: Edit is shown with label (paired with a
                //    labelled Delete; symmetry matters).
                //  - Todo: Edit is icon-only because Add to folder
                //    already carries a label on the same row.
                //  - Other roles: icon-only to nestle next to Reject.
                hideLabel: !isSubmitterPending,
                tooltip: "Edit expense",
                variant: "outline" as const,
                onClick: () => {
                  setEditMode(true)
                  setReviewMode(false)
                },
              },
            ]
          : []),
        // On "view" tabs the user isn't the approver, so Reject is
        // hidden — they only get Edit + the overflow menu.
        ...(tabRole !== "view"
          ? [
              {
                label: "Reject",
                icon: Cross,
                variant: "outline" as const,
                onClick: onReject,
              },
            ]
          : []),
      ]

  const otherActions = editMode
    ? []
    : isSubmitterPending
      ? // Pending: row is in flight, no overflow needed.
        []
      : isSubmitterTodo
        ? // Todo: Add to folder is now a visible secondary; nothing
          // left worth a 3-dot menu.
          []
        : tabRole === "view"
          ? // Post-flight submitter views (approved / controlled /
            // in-payroll / paid / rejected): nothing the user can do
            // here. The row has already moved past the point where
            // Delete or Export from the detail page makes sense — if
            // they need to grab a PDF they can do it from the list.
            []
          : [
              {
                label: "Delete",
                icon: Delete,
                onClick: () => {},
                critical: true,
              },
              { label: "Export PDF", icon: Download, onClick: () => {} },
            ]

  return (
    <Page
      header={
        <>
          <PageHeader
            module={{
              id: "my_spending",
              name: "Spend management",
              // Clicking the module label always lands on the Submit ›
              // Expenses default view (the canonical "home" of the
              // module for an end-user submitter), regardless of which
              // tab the detail page was opened from.
              href: "/p/controlling-step-poc?tab=submit&sub=expenses",
            }}
            breadcrumbs={[
              // Source-tab crumb is a real link back to the originating
              // list (e.g. Manage › Pending controlling), so the user
              // can reverse out one level without losing tab context.
              { id: "back", label: sourceTabLabel, href: sourceTabHref },
              { id: row.id, label: row.headerTitleOverride ?? row.name },
            ]}
            navigation={navigation ?? undefined}
            // No top-right X. Users navigate out via the breadcrumb
            // (back to the source tab) or the browser's back gesture.
            // The sibling up/down arrows in `navigation` are kept —
            // they're how power users page through a queue without
            // returning to the list.
          />
          <ResourceHeader
            avatar={{ type: "icon", icon: avatarIcon }}
            title={row.headerTitleOverride ?? row.name}
            description={`${category} · ${formatDate(row.date)}`}
            status={{
              label: "Status",
              text: STATUS_LABEL[row.status],
              variant: STATUS_VARIANT[row.status],
            }}
            metadata={[
              {
                label: "Creation date",
                value: { type: "text", content: formatDate(row.date) },
              },
              {
                label: "Total reimbursement",
                value: {
                  type: "text",
                  content: formatEUR(row.amount),
                },
              },
            ]}
            primaryAction={primaryAction}
            secondaryActions={secondaryActions}
            otherActions={otherActions}
          />
          {/* Sticky tab strip below the header. `position: sticky`
              keeps Summary / Comments visible as the user scrolls
              the receipt/details body. `top-0` works because Page's
              scrollable region starts immediately below this slot. */}
          <div className="sticky top-0 z-10 bg-f1-background">
            <Tabs
              key={activeTabId}
              tabs={[
                {
                  id: "summary",
                  label: "Summary",
                  onClick: () => setActiveTabId("summary"),
                },
                {
                  id: "comments",
                  label: "Comments",
                  onClick: () => setActiveTabId("comments"),
                },
              ]}
              activeTabId={activeTabId}
            />
          </div>
        </>
      }
    >
      <StandardLayout>
        {activeTabId === "comments" ? (
          <F0Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            padding="xl"
            gap="sm"
          >
            <F0Text content="Comments" variant="label" />
            <F0Text
              content="No comments yet. Conversation history will appear here."
              variant="description"
            />
          </F0Box>
        ) : (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <F0Box display="flex" flexDirection="column" gap="lg">
              {!editMode &&
                (() => {
                  // Pick the policy-agent alert (if any) for this
                  // expense in this JTBD context. The required-
                  // fields gate is applied INSIDE selectPolicyAlert
                  // — when the row is missing required fields the
                  // selector returns the gate alert ("Can't send
                  // this expense", error variant) instead of the
                  // policy alert. We layer the Review eye-button on
                  // top here as a `bodyAction` because the alert
                  // selector is pure (no callbacks) and the click
                  // handler needs page-local state (editMode,
                  // formRef).
                  const alert = selectPolicyAlert({
                    tabRole,
                    status: row.status,
                    hasAlerts: row.alerts.length > 0,
                    rowId: row.id,
                    alertKinds: row.alerts,
                    category: row.description,
                    amount: row.amount,
                  })
                  if (!alert) return null
                  const showReview = missingRequired.length > 0
                  return (
                    <PolicyAlertCard
                      variant={alert.variant}
                      stripLabel={alert.stripLabel}
                      title={alert.title}
                      description={alert.description}
                      bodyAction={
                        showReview ? (
                          <F0Button
                            label="Review"
                            icon={EyeVisible}
                            variant="outline"
                            size="sm"
                            onClick={onReview}
                          />
                        ) : undefined
                      }
                    />
                  )
                })()}
              {editMode ? (
                tabRole === "controlling" ? (
                  // Pending Controlling tab → finance is coding the
                  // expense. Show the controlling/coding form
                  // (cost center, project, VAT, etc.).
                  <ControllingForm
                    key={row.id}
                    defaultValues={row.controlling}
                    onSave={onSave}
                    submitLabel="Save"
                  />
                ) : (
                  // Every other tab (Submit, Pending Approval, Pay,
                  // All, Folder Detail) → submitter is editing the
                  // expense itself. Show the full Submit-a-new-
                  // expense form.
                  <SubmitterEditForm
                    key={row.id}
                    row={row}
                    onSave={onSaveSubmitter}
                    submitLabel="Save"
                    // Only forward missingRequired when the user
                    // explicitly entered via the policy-alert
                    // "Review" CTA. Pencil-driven edits enter
                    // without `reviewMode`, so no fields get
                    // pre-validated → no red focus, no
                    // auto-scroll, just a clean top-of-form edit.
                    requiredFields={reviewMode ? missingRequired : undefined}
                    externalFormRef={pageFormRef}
                    onValidityChange={setFormHasErrors}
                  />
                )
              ) : (
                <ReadView row={row} tabRole={tabRole} />
              )}
            </F0Box>

            {/* `self-start` opts the receipt column out of the grid
                row's default `stretch` alignment. Without it, the
                column grows to match the form's height in edit mode
                (where the form has many more fields than read-only
                summary view), which would balloon the receipt
                preview to ~2x its natural height. With `self-start`
                + a fixed inner frame height, the receipt always
                renders at "summary-view tall" and the form simply
                scrolls past it when there's more content. */}
            <div className="self-start">
              <ReceiptPanel
                url={receiptUrl}
                zoom={zoom}
                rotation={rotation}
                onZoomIn={zoomIn}
                onZoomOut={zoomOut}
                onRotate={rotate}
                onSetZoomMode={setZoomMode}
              />
            </div>
          </div>
        )}
      </StandardLayout>
    </Page>
  )
}

// -- Read view ------------------------------------------------------

/**
 * Inbox-style key/value card. Renders the standard summary fields
 * through `DetailsItemsList` (tableView), then appends a custom
 * Description row that can show an inline `F0TagAlert level=critical`
 * when the field is still missing on a row that requires it.
 *
 * Why Description is custom and not a `DetailsItemType`:
 *   - `DataList.Item` (the "item" content type) only accepts
 *     `text + icon + action` — no trailing slot for a tag.
 *   - Passing an array of contents to `DetailsItemContent[]` does
 *     work, but `DataList` lays its children out as a vertical UL
 *     (`flex flex-col`), so the dash and the tag would stack
 *     instead of sitting on the same row with `space-between`.
 *
 * The custom row is rendered INSIDE the same bordered card as the
 * rest of the rows by composing two stacks vertically with a shared
 * outer wrapper that re-creates `DetailsItemsList`'s
 * `tableView` chrome (rounded border + 1px row dividers). The
 * non-Description rows still go through `DetailsItemsList` —
 * `tableView=false` (no border, no dividers) so we don't
 * double-paint them — and we provide the chrome ourselves.
 *
 * Field order (matches PSPEC-spending v3 + designer review):
 *   1. Owner             ← person row (avatar + full name)
 *   2. Category
 *   3. Document date
 *   4. Amount
 *   5. Vendor name
 *   6. Payment method
 *   7. Reimbursable amount
 *   8. Cost center
 *   9. Budget
 *  10. Project
 *  11. Description  ← custom row with optional inline alert tag
 */
function ReadView({
  row,
  tabRole,
}: {
  row: SpendingRow
  tabRole: "approval" | "controlling" | "pay" | "view"
}) {
  const c = row.controlling

  // Owner — in My Spending (`tabRole === "view"`) every expense
  // belongs to the logged-in user (Hellen the HR) by default, so
  // we pin the owner row to `CURRENT_USER_ID`. EXCEPTION: when
  // the row carries an explicit `ownerEmployeeId` (e.g. Alan's
  // copy of the Greystone Brunch House expense), use that instead
  // so the owner block + "· you" chip reflect the real owner.
  // For other tabs (Approval, Controlling, Pay) we fall back to
  // the deterministic per-row pick so the prototype still shows a
  // realistic spread of submitters across the queue.
  const owner =
    tabRole === "view"
      ? employees.find(
          (e) => e.id === (row.ownerEmployeeId ?? CURRENT_USER_ID)
        ) ?? employees[0]
      : (() => {
          const ownerSeed =
            Array.from(row.id).reduce((s, ch) => s + ch.charCodeAt(0), 0) %
            employees.length
          return employees[ownerSeed]
        })()
  const [ownerFirst, ...ownerRestParts] = (owner?.fullName ?? "Owner").split(
    " "
  )
  const ownerLast = ownerRestParts.join(" ")

  // Category row goes through a custom renderer so we can place the
  // AI-suggestion sparkle 8px to the right of the value. The other
  // rows still flow through `DetailsItemsList` for consistency with
  // the rest of the product; we split the list into "before
  // Category", "Category (custom)", "after Category" and stitch
  // them together with shared `tableView` chrome via a wrapping
  // bordered container.
  const ownerDetail: DetailsItemType = {
    title: "Owner",
    content: {
      type: "person",
      firstName: ownerFirst ?? "",
      lastName: ownerLast,
      avatarUrl: owner?.avatarUrl ?? "",
    },
  }
  const afterCategoryDetails: DetailsItemType[] = [
    {
      title: "Document date",
      content: { type: "item", text: formatDate(row.date) },
    },
    {
      title: "Amount",
      content: { type: "item", text: formatEUR(row.amount) },
    },
    {
      title: "Vendor name",
      content: {
        type: "item",
        text: row.headerTitleOverride ?? row.name,
      },
    },
    {
      title: "Payment method",
      content: {
        type: "item",
        // Mirror the SubmitterEditForm `PAYMENT_METHODS` labels.
        // Defaults to "Personal card" when the row predates the
        // `paymentMethod` field.
        text:
          (
            {
              "personal-card": "Personal card",
              "company-card": "Company card",
              "factorial-card": "Factorial card",
              cash: "Cash",
              "bank-transfer": "Bank transfer",
            } as const
          )[row.paymentMethod ?? "personal-card"] ?? "Personal card",
      },
    },
  ]

  // Foreign-currency summary treatment. When the row carries a
  // `foreignCurrency` overlay, the Reimbursable amount row gets
  // a muted secondary line under the EUR value showing the
  // original-currency math (e.g. "$482.50 USD × €0.92"). Source
  // attribution + rate date are intentionally absent in the
  // summary — they live in the edit-view info alert, one click
  // away. The secondary line is for at-a-glance "this was a
  // foreign charge" recognition.
  const fx = row.foreignCurrency
  // Reimbursable amount: standard row when no FX, or the custom
  // FX-aware row when present.
  const standardReimbursableRow: DetailsItemType = {
    title: "Reimbursable amount",
    content: { type: "item", text: formatEUR(row.amount) },
  }
  const afterReimbursable: DetailsItemType[] = [
    {
      title: "Cost center",
      content: {
        type: "item",
        text: costCenters.find((cc) => cc.id === c?.costCenter)?.name ?? "-",
      },
    },
    {
      title: "Budget",
      // No dedicated budget fixture; reuse VAT-rate label as the
      // budget envelope name for the prototype. Production would
      // wire this to a real Budget entity.
      content: {
        type: "item",
        text: vatRates.find((v) => v.id === c?.vatRate)?.label ?? "-",
      },
    },
    {
      title: "Project",
      content: {
        type: "item",
        text: projects.find((p) => p.id === c?.project)?.name ?? "-",
      },
    },
    {
      title: "Description",
      content: {
        type: "item",
        text:
          c?.description && c.description.length > 0 ? c.description : "-",
      },
    },
  ]

  const suggestion = categorySuggestionReason(row)

  // The two `DetailsItemsList` calls render their own
  // `rounded-md border` chrome on the inner wrapper. We suppress
  // both via a scoped style so the outer container we own paints
  // the only border and the two halves read as one continuous
  // table. (Tailwind arbitrary-selector spaces around combinators
  // don't escape reliably — using a scoped class + plain CSS is
  // more robust than `[&_>_div_>_div]:border-0`.)
  return (
    <div className="flex flex-col gap-4">
      <div className="overflow-hidden rounded-md border border-solid border-f1-border-secondary expense-readview">
        <style>{`
          .expense-readview > div > div {
            border: 0;
            border-radius: 0;
          }
        `}</style>
        <DetailsItemsList details={[ownerDetail]} tableView />
        <div className="h-[1px] w-full bg-f1-border-secondary" />
        <CategoryRow value={row.description} suggestionReason={suggestion} />
        <div className="h-[1px] w-full bg-f1-border-secondary" />
        <DetailsItemsList details={afterCategoryDetails} tableView />
        <div className="h-[1px] w-full bg-f1-border-secondary" />
        {fx ? (
          // Treatment A — muted secondary line under the EUR value.
          // Single source/treatment for the summary view; the edit
          // view carries the full alert + Source link.
          <ReimbursableAmountWithFx
            amount={row.amount}
            foreignCurrency={fx}
          />
        ) : (
          <DetailsItemsList
            details={[standardReimbursableRow]}
            tableView
          />
        )}
        {/* Participants summary + split summary — inserted only
            when the row has participants. Rendered INSIDE the
            same bordered card as the rest of the rows so they
            read as one continuous table. The two sub-components
            mirror CategoryRow's layout (label column w-44 +
            value cell padding) so columns align pixel-perfect. */}
        {row.participants && row.participants.length > 0 ? (
          <>
            <div className="h-[1px] w-full bg-f1-border-secondary" />
            <ParticipantsSummaryRow
              participants={row.participants}
              ownerId={owner?.id ?? ""}
            />
          </>
        ) : null}
        {row.split ? (
          <>
            <div className="h-[1px] w-full bg-f1-border-secondary" />
            <SharedExpenseRow />
            <div className="h-[1px] w-full bg-f1-border-secondary" />
            <YourShareRow
              receiptTotal={row.amount}
              shares={row.split.shares}
            />
          </>
        ) : null}
        <div className="h-[1px] w-full bg-f1-border-secondary" />
        <DetailsItemsList details={afterReimbursable} tableView />
      </div>

      {/* Participant approval block — sits BELOW the details
          table so the OneApprovalHistory has breathing room. Only
          rendered when the row has at least one internal
          participant (the component itself returns null otherwise
          but we gate here to avoid an empty wrapper div). */}
      {row.participants &&
      row.participants.some((p) => p.kind === "internal") ? (
        <ParticipantApproval participants={row.participants} />
      ) : null}
    </div>
  )
}

/**
 * Custom Category row that matches `DetailsItemsList` table-view
 * layout (left-aligned label · right-aligned value) and slots an
 * AI-suggestion sparkle 8px to the right of the value when the
 * field was auto-coded. Layout cribbed from `DataList`'s horizontal
 * branch (packages/react/src/experimental/Lists/DataList) so the
 * row aligns pixel-perfectly with the rows above and below.
 */
function CategoryRow({
  value,
  suggestionReason,
}: {
  value: string
  suggestionReason: string | null
}) {
  return (
    <div className="flex min-h-12 flex-1 flex-col py-1.5 pl-3 pr-1.5 xs:flex-row">
      <p className="mt-2 w-44 px-1.5 text-f1-foreground-secondary xs:px-0">
        Category
      </p>
      <div className="flex flex-1 items-center gap-2 px-1.5 py-1">
        <span>{value}</span>
        {suggestionReason && <AiSuggestionBadge reason={suggestionReason} />}
      </div>
    </div>
  )
}

/**
 * "Participants" summary row in the ReadView. Lists the
 * non-owner internal participants by name, plus an external
 * count if any. Owner is implicit (already shown in the Owner
 * row at the top of the details card).
 *
 * Layout mirrors CategoryRow (label column `w-44` + value cell
 * padding) for pixel-perfect alignment with the surrounding
 * rows. Names beyond the first three collapse into a "+N more"
 * tail so the row stays single-line on common widths.
 */
function ParticipantsSummaryRow(props: {
  participants: import("@/fixtures").Participant[]
  ownerId: string
}) {
  void props.ownerId
  const internals = props.participants.filter(
    (
      p
    ): p is Extract<
      import("@/fixtures").Participant,
      { kind: "internal" }
    > => p.kind === "internal"
  )
  const externalCount = props.participants.filter(
    (p) => p.kind === "external"
  ).length

  const names = internals.map((p) => {
    const emp = employees.find((e) => e.id === p.employeeId)
    return emp?.preferredName ?? emp?.fullName ?? p.employeeId
  })
  const visible = names.slice(0, 3).join(", ")
  const more = names.length > 3 ? ` +${names.length - 3} more` : ""
  const externalSuffix =
    externalCount > 0
      ? ` · ${externalCount} external ${externalCount === 1 ? "guest" : "guests"}`
      : ""

  const text =
    names.length === 0 && externalCount === 0
      ? "—"
      : `${visible}${more}${externalSuffix}`

  return (
    <div className="flex min-h-12 flex-1 flex-col py-1.5 pl-3 pr-1.5 xs:flex-row">
      <p className="mt-2 w-44 px-1.5 text-f1-foreground-secondary xs:px-0">
        Participants
      </p>
      <div className="flex flex-1 items-center gap-2 px-1.5 py-1">
        <span>{text}</span>
      </div>
    </div>
  )
}

/**
 * "Shared expense" inline label row — confirms to readers that
 * this expense's amount was paid in concert with other people.
 * Functions as the visible counterpart to the `declared-split`
 * alert tag in the table.
 */
function SharedExpenseRow() {
  return (
    <div className="flex min-h-12 flex-1 flex-col py-1.5 pl-3 pr-1.5 xs:flex-row">
      <p className="mt-2 w-44 px-1.5 text-f1-foreground-secondary xs:px-0">
        Shared expense
      </p>
      <div className="flex flex-1 items-center gap-2 px-1.5 py-1">
        <span className="rounded-full bg-f1-background-info px-2 py-0.5 text-xs text-f1-foreground-info">
          Split declared
        </span>
        <span className="text-sm text-f1-foreground-secondary">
          Other rows for this receipt are expected.
        </span>
      </div>
    </div>
  )
}

/**
 * "Your share" row — the owner's implicit share of the receipt
 * total under the declared split. Computed deterministically from
 * the split shares (R5) so the value here always matches the
 * breakdown the submitter saw in the edit view.
 */
function YourShareRow(props: {
  receiptTotal: number
  shares: import("@/fixtures").ExpenseSplit["shares"]
}) {
  const ownerShare = ownerImplicitShare(props.receiptTotal, props.shares)
  return (
    <div className="flex min-h-12 flex-1 flex-col py-1.5 pl-3 pr-1.5 xs:flex-row">
      <p className="mt-2 w-44 px-1.5 text-f1-foreground-secondary xs:px-0">
        Your share
      </p>
      <div className="flex flex-1 items-center gap-2 px-1.5 py-1 tabular-nums">
        <span>{formatEUR(ownerShare)}</span>
        <span className="text-sm text-f1-foreground-secondary">
          of {formatEUR(props.receiptTotal)} receipt
        </span>
      </div>
    </div>
  )
}

// -- Foreign-currency summary row -----------------------------------

/**
 * Format the original-currency math line shown under the EUR
 * value in the summary's Reimbursable amount row:
 *
 *   "$482.50 USD × €0.92"
 *
 * Intentionally omits the rate date and the source attribution.
 * The summary is for scanning — the muted secondary line is a
 * "this was a foreign charge" recognition cue, not the audit
 * trail. The full attribution (date + Source link) lives on the
 * F0Alert in the edit view, one click away.
 *
 * Currency symbol is best-effort; the ISO code is always present
 * so the original value stays unambiguous when no symbol exists.
 */
function formatFxLine(fc: ForeignCurrency): string {
  const symbol: Record<string, string> = {
    USD: "$",
    GBP: "£",
    CHF: "CHF ",
    JPY: "¥",
  }
  const sym = symbol[fc.originalCurrency] ?? ""
  const original = fc.originalAmount.toFixed(2)
  const rate = fc.exchangeRate.toFixed(2)
  return `${sym}${original} ${fc.originalCurrency} × €${rate}`
}

/**
 * Reimbursable amount row with a muted secondary line carrying
 * the original-currency math (e.g. "$482.50 USD × €0.92"). Only
 * rendered when the row has a `foreignCurrency` overlay;
 * non-FX expenses use the standard single-line item.
 *
 * Layout mirrors `CategoryRow` (and `DataList`'s horizontal
 * branch) so it aligns pixel-perfectly with the rows above and
 * below. The label column width (`w-44`) and the inner padding
 * (`py-1.5 pl-3 pr-1.5` + `px-1.5 py-1` on the value cell) are
 * copied verbatim — any drift would show as a misaligned label.
 */
function ReimbursableAmountWithFx({
  amount,
  foreignCurrency,
}: {
  amount: number
  foreignCurrency: ForeignCurrency
}) {
  return (
    <div className="flex min-h-12 flex-1 flex-col py-1.5 pl-3 pr-1.5 xs:flex-row">
      <p className="mt-2 w-44 px-1.5 text-f1-foreground-secondary xs:px-0">
        Reimbursable amount
      </p>
      <div className="flex flex-1 flex-col px-1.5 py-1">
        <span>{formatEUR(amount)}</span>
        <span className="text-sm text-f1-foreground-secondary">
          {formatFxLine(foreignCurrency)}
        </span>
      </div>
    </div>
  )
}

// -- Receipt panel --------------------------------------------------

/**
 * Right-hand 50 % column. PDF-viewer-style chrome around a single
 * receipt photo: page indicator + per-page nav on the left, image
 * controls (zoom −/+, rotate) in the middle, and zoom-mode dropdown
 * + print + download on the right.
 *
 * Why a PDF-viewer toolbar for a single image: finance reviewers
 * expect Acrobat-style affordances for any "document preview" surface
 * regardless of the underlying file type. Aligning here means the same
 * mental model whether the receipt is a JPG, a multi-page PDF, or a
 * scanned email.
 *
 * Page nav is intentionally a no-op (we only ever have one page) but
 * is rendered so the toolbar's left group has the same visual weight
 * as the screenshot. The chevrons are disabled to make the limit
 * obvious.
 *
 * Zoom uses CSS transform (cheaper than re-fetching) and a
 * mode-aware effective percentage:
 *   - "page-fit"   → contained (object-fit handles it; no transform)
 *   - "page-width" → width: 100 %
 *   - <percent>    → scale(percent / 100)
 */

const PRINTER_TOOLTIP = "Print"
const DOWNLOAD_TOOLTIP = "Download"

function effectiveZoomPercent(zoom: ZoomMode): number {
  if (zoom === "page-fit" || zoom === "page-width") return 100
  return zoom
}

function ReceiptPanel(props: {
  url: string | null
  zoom: ZoomMode
  rotation: 0 | 90 | 180 | 270
  onZoomIn: () => void
  onZoomOut: () => void
  onRotate: () => void
  onSetZoomMode: (mode: ZoomMode) => void
}) {
  const {
    url,
    zoom,
    rotation,
    onZoomIn,
    onZoomOut,
    onRotate,
    onSetZoomMode,
  } = props
  if (!url) {
    // Empty state shares the outer chrome with the real-receipt
    // panel (same F0Box, same `background="secondary"` gray), but
    // intentionally drops the inner white viewer frame. Rationale:
    // a white inner card on a gray outer pad reads as "a document
    // is here, it's just blank", which is confusing — there IS no
    // document. Collapsing to a single solid gray panel reads more
    // honestly as "nothing uploaded yet".
    //
    // Because the surface is now gray, the muted `description`
    // text variant (which uses `text-f1-foreground-secondary`,
    // designed for white backgrounds) becomes hard to read. We
    // switch to `body` so the label uses the full-strength
    // `text-f1-foreground` token, which has the contrast budget
    // for a non-white surface.
    //
    // Height is applied via inline `style={{ height: 640 }}` for
    // the same reason as the real-receipt frame below — f0compose
    // ships precompiled Tailwind from f0-react, so `h-[640px]`
    // silently no-ops because that exact arbitrary value isn't in
    // the bundle.
    //
    // We skip the toolbar deliberately — none of its controls (zoom,
    // rotate, page nav, download, print) make sense without a
    // document, and a disabled toolbar would just be noise.
    return (
      <F0Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        gap="md"
        background="secondary"
        borderRadius="md"
        padding="md"
      >
        <div
          className="flex w-full flex-col items-center justify-center gap-3"
          style={{ height: 640 }}
        >
          <F0Text content="No receipt uploaded" variant="body" />
          <F0Button
            label="Upload receipt"
            icon={Upload}
            variant="default"
            onClick={() => {}}
          />
        </div>
      </F0Box>
    )
  }

  const currentZoomLabel =
    ZOOM_OPTIONS.find((o) => o.value === zoom)?.label ?? "Page fit"
  const percent = effectiveZoomPercent(zoom)
  const isFitMode = zoom === "page-fit"
  const isWidthMode = zoom === "page-width"

  return (
    <F0Box
      display="flex"
      flexDirection="column"
      gap="sm"
      background="secondary"
      borderRadius="md"
      padding="md"
    >
      {/* PDF-style toolbar. Three groups separated by `justify-between`
          so the dropdown + print/download anchor to the right edge
          regardless of how many controls we add to the middle group
          later (e.g. annotation tools). */}
      <F0Box
        display="flex"
        alignItems="center"
        justifyContent="between"
        gap="sm"
      >
        {/* Left group — page indicator + page nav. Disabled because
            we only ever render one page; the chrome is here so the
            toolbar matches the screenshot. */}
        <F0Box display="flex" alignItems="center" gap="xs">
          <F0Text content="1 / 1" variant="description" />
          <F0Button
            label="Previous page"
            hideLabel
            icon={ChevronUp}
            variant="outline"
            size="sm"
            disabled
            onClick={() => {}}
          />
          <F0Button
            label="Next page"
            hideLabel
            icon={ChevronDown}
            variant="outline"
            size="sm"
            disabled
            onClick={() => {}}
          />
        </F0Box>

        {/* Middle group — zoom −/+ and rotate. Operate on the active
            percent; in fit modes the first −/+ press anchors at 100 %
            then walks. Rotate is a single-direction 90° step (matches
            Acrobat's default), users hit it 3× for counter-clockwise. */}
        <F0Box display="flex" alignItems="center" gap="xs">
          <F0Button
            label="Zoom out"
            hideLabel
            icon={Minus}
            variant="outline"
            size="sm"
            onClick={onZoomOut}
          />
          <F0Button
            label="Zoom in"
            hideLabel
            icon={Add}
            variant="outline"
            size="sm"
            onClick={onZoomIn}
          />
          <F0Button
            label="Rotate"
            hideLabel
            icon={ArrowCycle}
            variant="outline"
            size="sm"
            onClick={onRotate}
          />
        </F0Box>

        {/* Right group — zoom-mode dropdown + print + download.
            Dropdown uses `mode: "dropdown"` (single button + chevron)
            because every option is mutually exclusive — a "split"
            button doesn't fit; there's no canonical "main action". */}
        <F0Box display="flex" alignItems="center" gap="xs">
          <F0ButtonDropdown
            mode="dropdown"
            trigger={currentZoomLabel}
            variant="outline"
            size="sm"
            items={ZOOM_OPTIONS.map((o) => ({
              value: String(o.value),
              label: o.label,
            }))}
            onClick={(value) => {
              const match = ZOOM_OPTIONS.find((o) => String(o.value) === value)
              if (match) onSetZoomMode(match.value)
            }}
          />
          <F0Button
            label={PRINTER_TOOLTIP}
            hideLabel
            icon={Printer}
            variant="outline"
            size="sm"
            tooltip={PRINTER_TOOLTIP}
            onClick={() => window.print()}
          />
          <F0Button
            label={DOWNLOAD_TOOLTIP}
            hideLabel
            icon={Download}
            variant="outline"
            size="sm"
            tooltip={DOWNLOAD_TOOLTIP}
            onClick={() => window.open(url, "_blank")}
          />
        </F0Box>
      </F0Box>

      {/* Frame — overflow hidden so a zoomed/rotated image doesn't
          push the rest of the page around. Fixed 640px height so
          the panel matches summary-view rhythm in BOTH read mode
          and edit mode; the edit form is taller but the receipt
          column stays capped (parent grid cell uses `self-start`
          so it doesn't get stretched, see ExpenseDetailPage).
          `object-contain` on the image scales it down to fit.
          Background uses `f1-background` (dark gray strip like
          Acrobat's document chrome).
          Height is set inline rather than via `h-[640px]` because
          f0compose ships precompiled Tailwind from f0-react and
          that exact arbitrary value isn't in the bundle — see the
          empty-state comment above for the full explanation. */}
      <div
        className="relative flex items-center justify-center overflow-hidden rounded-md bg-f1-background"
        style={{ height: 640 }}
      >
        <img
          src={url}
          alt="Expense receipt"
          // Fit modes use object-fit/width to let the browser size
          // the image; explicit percents use a CSS transform so we
          // don't need to re-fetch a higher-res asset on every step.
          className={
            isFitMode
              ? "max-h-full max-w-full object-contain transition-transform duration-150"
              : isWidthMode
                ? "w-full transition-transform duration-150"
                : "max-w-none transition-transform duration-150"
          }
          style={{
            transform: isFitMode
              ? `rotate(${rotation}deg)`
              : `scale(${percent / 100}) rotate(${rotation}deg)`,
          }}
        />
        {/* Tiny corner badge so the empty/uploaded state is obvious
            even when the image hasn't loaded yet. */}
        <div className="absolute left-2 top-2 flex items-center gap-1 rounded-sm bg-f1-background-inverse-secondary px-2 py-1">
          <ImageIcon className="h-3 w-3 text-f1-foreground-inverse" />
          <span className="text-xs text-f1-foreground-inverse">Receipt</span>
        </div>
      </div>
    </F0Box>
  )
}
