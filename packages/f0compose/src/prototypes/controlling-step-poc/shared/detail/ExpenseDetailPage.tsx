import {
  costCenters,
  employees,
  projects,
  vatRates,
  type ExpenseCategory,
} from "@/fixtures"
import {
  F0Box,
  F0Button,
  F0ButtonDropdown,
  F0Text,
  StandardLayout,
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
import { useCallback, useMemo, useState } from "react"

import { STATUS_LABEL, STATUS_VARIANT } from "../expenseStatus"
import { type SpendingRow } from "../rows"
import { PolicyAlertCard } from "../../../_shared/PolicyAlertCard"
import { selectPolicyAlert } from "../../../_shared/selectPolicyAlert"
import { hasReceipt as rowHasReceipt } from "@/prototypes/_shared/receiptPresence"
import { buildReceiptDataUrl } from "./receiptSvg"
import {
  ControllingForm,
  type ControllingFormData,
} from "../sidePanel/ControllingForm"
import { SubmitterEditForm, type SubmitterFormData } from "./SubmitterEditForm"

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
//   - Always editable while the row is being assembled (draft / pending).
//   - On the Controlling tab finance can also re-open already-approved
//     and already-controlled rows (controlled = "controlled within
//     finance review", still mutable until Pay locks it).
function canEditRow(status: SpendingRow["status"], controllable: boolean) {
  if (status === "draft" || status === "pending") return true
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
  /** Navigate back to the list. */
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
    onBack,
    onSaveControlling,
    onMarkControlled,
    onReject,
    controllable,
    tabRole,
    navigation,
  } = props

  const [editMode, setEditMode] = useState(false)
  const [activeTabId, setActiveTabId] = useState<"summary" | "comments">(
    "summary"
  )
  const [zoom, setZoom] = useState<ZoomMode>("page-fit")
  const [rotation, setRotation] = useState<0 | 90 | 180 | 270>(0)

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

  // Submitter-form save is a fire-and-forget for the prototype: we
  // log the payload and exit edit mode. Production would persist via
  // a separate mutation that updates the underlying expense record.
  const onSaveSubmitter = useCallback((data: SubmitterFormData) => {
    void data
    setEditMode(false)
  }, [])

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

  const primaryAction = editMode
    ? {
        label: "Save",
        icon: CheckCircle,
        // The actual submit is wired through ControllingForm's own
        // submit button (F0Form). Production would hoist a ref to
        // call form.submit(); for now Save just exits edit mode so
        // the header reads active.
        onClick: () => setEditMode(false),
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
        // we control the rest by ordering this array. Pencil (icon-
        // only) sits first so it lands directly next to the 3-dot
        // menu; Reject (labelled, outline) sits last so it abuts the
        // divider before the primary CTA — matching the screenshot:
        //   [⋯] [✎] | [Reject] [Approve]
        ...(editable
          ? [
              {
                label: "Edit",
                icon: Pencil,
                hideLabel: true,
                tooltip: "Edit expense",
                variant: "outline" as const,
                onClick: () => setEditMode(true),
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
    : [
        { label: "Delete", icon: Delete, onClick: () => {}, critical: true },
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
              { id: row.id, label: row.name },
            ]}
            navigation={navigation ?? undefined}
            actions={[{ label: "Back", icon: Cross, onClick: onBack }]}
          />
          <ResourceHeader
            avatar={{ type: "icon", icon: avatarIcon }}
            title={row.name}
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
                  // expense in this JTBD context. Returns null for
                  // contexts that shouldn't show one (Submitted
                  // preset, Controlling tab, Pay tab).
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
                  return (
                    <PolicyAlertCard
                      variant={alert.variant}
                      stripLabel={alert.stripLabel}
                      title={alert.title}
                      description={alert.description}
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
                  />
                )
              ) : (
                <ReadView row={row} />
              )}
            </F0Box>

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
        )}
      </StandardLayout>
    </Page>
  )
}

// -- Read view ------------------------------------------------------

/**
 * Inbox-style key/value card. Single `DetailsItemsList` rendering the
 * full set of summary fields — no progressive disclosure. Designer
 * decision: the field count (11) is small enough that the
 * "View more details" expander added a click for no real density win.
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
 *  11. Description
 *
 * Mirrors Inbox > Time-off task content
 * (`modules/inbox_tasks/tasks/approval/TimeoffLeave/index.tsx`):
 *   `<DetailsItemsList tableView />`
 */
function ReadView({ row }: { row: SpendingRow }) {
  const c = row.controlling

  // Owner is deterministically picked from the row id so the same
  // expense always shows the same person across reloads. Production
  // would carry an `ownerId` on the row.
  const ownerSeed =
    Array.from(row.id).reduce((s, ch) => s + ch.charCodeAt(0), 0) %
    employees.length
  const owner = employees[ownerSeed]
  const [ownerFirst, ...ownerRestParts] = (owner?.fullName ?? "Owner").split(
    " "
  )
  const ownerLast = ownerRestParts.join(" ")

  const details: DetailsItemType[] = [
    {
      title: "Owner",
      content: {
        type: "person",
        firstName: ownerFirst ?? "",
        lastName: ownerLast,
        avatarUrl: owner?.avatarUrl ?? "",
      },
    },
    {
      title: "Category",
      content: { type: "item", text: row.description },
    },
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
      content: { type: "item", text: row.name },
    },
    {
      title: "Payment method",
      content: { type: "item", text: "Personal card" },
    },
    {
      title: "Reimbursable amount",
      content: { type: "item", text: formatEUR(row.amount) },
    },
    {
      title: "Cost center",
      content: {
        type: "item",
        text: costCenters.find((cc) => cc.id === c?.costCenter)?.name ?? "—",
      },
    },
    {
      title: "Budget",
      // No dedicated budget fixture; reuse VAT-rate label as the
      // budget envelope name for the prototype. Production would
      // wire this to a real Budget entity.
      content: {
        type: "item",
        text: vatRates.find((v) => v.id === c?.vatRate)?.label ?? "—",
      },
    },
    {
      title: "Project",
      content: {
        type: "item",
        text: projects.find((p) => p.id === c?.project)?.name ?? "—",
      },
    },
    {
      title: "Description",
      content: {
        type: "item",
        text: c?.description && c.description.length > 0 ? c.description : "—",
      },
      verticalLayout: true,
    },
  ]

  return <DetailsItemsList details={details} tableView />
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
    return (
      <F0Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        gap="md"
        padding="xl"
        background="secondary"
        borderRadius="md"
      >
        <F0Text content="No receipt uploaded" variant="description" />
        <F0Button
          label="Upload receipt"
          icon={Upload}
          variant="default"
          onClick={() => {}}
        />
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
          push the rest of the page around. Fixed height range keeps
          the panel from growing with the receipt's intrinsic size
          (the SVG receipt is portrait and would otherwise dominate
          the column); `object-contain` on the image scales it down
          to fit. Background uses `f1-background` (dark gray strip
          like Acrobat's document chrome). */}
      <div className="relative flex min-h-[640px] flex-1 items-center justify-center overflow-hidden rounded-md bg-f1-background">
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
