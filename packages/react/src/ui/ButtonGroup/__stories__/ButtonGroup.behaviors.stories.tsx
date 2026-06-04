import type { Meta, StoryObj } from "@storybook/react-vite"

import { F0Button } from "@/components/F0Button"
import { F0ButtonDropdown } from "@/components/F0ButtonDropdown"
import {
  Dropdown,
  type DropdownItem,
  MobileDropdown,
} from "@/experimental/Navigation/Dropdown"
import { DropdownInternal } from "@/experimental/Navigation/Dropdown/internal"
import {
  Archive,
  ArrowUp,
  Cross,
  Delete,
  Download,
  Ellipsis,
  LayersFront,
  Pencil,
  Plus,
  Share,
} from "@/icons/app"
import { cn } from "@/lib/utils"

import { ButtonGroup, ButtonGroupSeparator } from "../ButtonGroup"
import { ButtonGroupOverflow } from "../ButtonGroupOverflow"

const noop = () => {}

/**
 * Proof-of-replaceability stories: each one reconstructs an existing component's
 * action layout using `ButtonGroup` + composed primitives, WITHOUT importing or
 * editing the component. We're documenting **button arrangements only**, so the
 * framing is intentionally minimal — just a caption per case plus the *intrinsic*
 * separator/border that is itself part of the behavior (e.g. the footer
 * top-border, the oneLiner's container-query chrome). Everything else (titles,
 * bodies, card content) is omitted on purpose.
 *
 * See `ButtonGroup.mdx` for the per-component behavior matrix.
 */
const meta = {
  title: "ButtonGroup/Behaviors",
  component: ButtonGroup,
  parameters: { layout: "padded" },
  tags: ["experimental"],
} satisfies Meta<typeof ButtonGroup>

export default meta
type Story = StoryObj<typeof meta>

/** Minimal labeled wrapper for a single case — caption above, group below. */
const Case = ({
  caption,
  children,
}: {
  caption: string
  children: React.ReactNode
}) => (
  <div className="flex flex-col gap-2">
    <span className="text-sm text-f1-foreground-secondary">{caption}</span>
    {children}
  </div>
)

const Cases = ({ children }: { children: React.ReactNode }) => (
  <div className="flex max-w-xl flex-col gap-8">{children}</div>
)

// --- Minimal mock surfaces ---------------------------------------------------
// The buttons are the point; these just give each example a real-looking surface
// (instead of floating on the canvas) using neutral placeholder blocks for the
// title/body content. None of this is owned by ButtonGroup.

const surface =
  "rounded-lg border border-solid border-f1-border-secondary bg-f1-background"

/** Static neutral placeholder block standing in for title/body content. */
const Bar = ({ className }: { className?: string }) => (
  <div className={cn("rounded bg-f1-background-secondary", className)} />
)

/** Mock dialog: placeholder body, then a footer bar holding the actions. */
const MockDialog = ({ children }: { children: React.ReactNode }) => (
  <div className={cn(surface, "max-w-md")}>
    <div className="flex flex-col gap-2 p-4">
      <Bar className="h-3 w-2/5" />
      <Bar className="h-2 w-full" />
      <Bar className="h-2 w-4/5" />
    </div>
    <div className="border-0 border-t border-solid border-f1-border-secondary px-4 py-3">
      {children}
    </div>
  </div>
)

/** Mock dialog header: a title placeholder + the actions in the header bar. */
const MockDialogHeader = ({ children }: { children: React.ReactNode }) => (
  <div className={cn(surface, "max-w-md")}>
    <div className="flex items-center justify-between gap-3 border-0 border-b border-solid border-f1-border-secondary px-4 py-3">
      <Bar className="h-3 w-28" />
      {children}
    </div>
    <div className="flex flex-col gap-2 p-4">
      <Bar className="h-2 w-full" />
      <Bar className="h-2 w-3/5" />
    </div>
  </div>
)

/** Mock page header: title/subtitle placeholder + the action cluster. */
const MockResourceHeader = ({ children }: { children: React.ReactNode }) => (
  <div className={cn(surface, "p-4")}>
    <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
      <div className="flex flex-col gap-2 py-1">
        <Bar className="h-4 w-48 max-w-full" />
        <Bar className="h-2.5 w-64 max-w-full" />
      </div>
      <div className="shrink-0">{children}</div>
    </div>
  </div>
)

// --- 1. Dialog footer --------------------------------------------------------

/**
 * Dialog footer: a single right-aligned row, secondary → primary, `gap-2`, no
 * responsive stacking. The top border is the footer's intrinsic separator.
 * Reproduces `F0DialogFooter.tsx`.
 */
export const DialogFooter: Story = {
  name: "Dialog footer",
  render: () => (
    <Cases>
      <Case caption="Single buttons — secondary → primary, right-aligned">
        <MockDialog>
          <ButtonGroup align="end" gap="md" stack="none" className="w-full">
            <F0Button variant="outline" label="Cancel" onClick={noop} />
            <F0Button variant="default" label="Confirm" onClick={noop} />
          </ButtonGroup>
        </MockDialog>
      </Case>

      <Case caption="Action arrays → F0ButtonDropdown (split buttons)">
        <MockDialog>
          <ButtonGroup align="end" gap="md" stack="none" className="w-full">
            <F0ButtonDropdown
              variant="outline"
              items={[
                { value: "discard", label: "Discard" },
                { value: "save-draft", label: "Save as draft" },
              ]}
              onClick={noop}
            />
            <F0ButtonDropdown
              variant="default"
              items={[
                { value: "publish", label: "Publish" },
                { value: "schedule", label: "Schedule" },
              ]}
              onClick={noop}
            />
          </ButtonGroup>
        </MockDialog>
      </Case>
    </Cases>
  ),
}

// --- 2. Dialog header --------------------------------------------------------

/**
 * Dialog header actions: a right-aligned row with a `ButtonGroupSeparator` before
 * the always-present icon-only close button. With ≤2 non-critical actions they
 * render icon-only (`hideLabel`); with 3+ or a critical action they collapse into
 * an Ellipsis dropdown. The count/critical *decision* stays in the consumer.
 * Reproduces `F0DialogHeader.tsx`.
 */
export const DialogHeaderActions: Story = {
  name: "Dialog header",
  render: () => (
    <Cases>
      <Case caption="≤2 non-critical actions → icon-only, divider, close">
        <MockDialogHeader>
          <ButtonGroup align="end" gap="md" stack="none">
            <F0Button
              variant="outline"
              icon={Pencil}
              label="Edit"
              hideLabel
              onClick={noop}
            />
            <F0Button
              variant="outline"
              icon={Share}
              label="Share"
              hideLabel
              onClick={noop}
            />
            <ButtonGroupSeparator />
            <F0Button
              variant="outline"
              icon={Cross}
              label="Close"
              hideLabel
              onClick={noop}
            />
          </ButtonGroup>
        </MockDialogHeader>
      </Case>

      <Case caption="3+ / critical → Ellipsis dropdown, divider, close">
        <MockDialogHeader>
          <ButtonGroup align="end" gap="md" stack="none">
            <DropdownInternal
              icon={Ellipsis}
              items={[
                { label: "Edit", icon: Pencil, onClick: noop },
                { label: "Share", icon: Share, onClick: noop },
                {
                  label: "Delete",
                  icon: Delete,
                  onClick: noop,
                  critical: true,
                },
              ]}
            />
            <ButtonGroupSeparator />
            <F0Button
              variant="outline"
              icon={Cross}
              label="Close"
              hideLabel
              onClick={noop}
            />
          </ButtonGroup>
        </MockDialogHeader>
      </Case>
    </Cases>
  ),
}

// --- 3. ResourceHeader -------------------------------------------------------

// `otherActions` is ALWAYS a single "more" menu (experimental Dropdown on
// desktop, MobileDropdown on mobile) — a fixed bucket, NOT width-driven overflow.
const resourceOtherActions: DropdownItem[] = [
  { label: "Archive", icon: Archive, onClick: noop },
  { label: "Copy URL", icon: LayersFront, onClick: noop },
  { type: "separator" },
  { label: "Unlist", icon: Delete, critical: true, onClick: noop },
]

/**
 * The desktop ResourceHeader action cluster: right-aligned wrapping row, size md,
 * order more → secondary → divider → primary. Parametrized to cover the cases.
 */
const RhDesktopCluster = ({
  withOtherActions = true,
  primaryAsDropdown = false,
  exportAsDropdown = false,
}: {
  withOtherActions?: boolean
  primaryAsDropdown?: boolean
  exportAsDropdown?: boolean
}) => (
  <ButtonGroup align="end" gap="md" wrap className="w-full">
    {withOtherActions && <Dropdown items={resourceOtherActions} />}
    <F0Button variant="outline" icon={Pencil} label="Edit" onClick={noop} />
    {exportAsDropdown ? (
      <F0ButtonDropdown
        variant="outline"
        items={[
          { value: "excel", label: "Export Excel", icon: Download },
          { value: "csv", label: "Export CSV", icon: Download },
        ]}
        value="excel"
        onClick={noop}
      />
    ) : (
      <F0Button
        variant="outline"
        icon={Download}
        label="Export"
        hideLabel
        onClick={noop}
      />
    )}
    <F0Button variant="outline" label="Syncing" loading onClick={noop} />
    <ButtonGroupSeparator />
    {primaryAsDropdown ? (
      <F0ButtonDropdown
        variant="default"
        items={[
          { value: "now", label: "Publish now", icon: ArrowUp },
          { value: "schedule", label: "Schedule" },
          { value: "draft", label: "Save as draft" },
        ]}
        value="now"
        onClick={noop}
      />
    ) : (
      <F0Button
        variant="default"
        icon={ArrowUp}
        label="Publish"
        onClick={noop}
      />
    )}
  </ButtonGroup>
)

/**
 * ResourceHeader actions — the cases from the real `Resource header` stories,
 * buttons only (no avatar/title/metadata). `otherActions` is always a single
 * "more" menu.
 *
 * The real component renders TWO action trees because its mobile and desktop
 * orderings differ — mobile is primary → secondary → more (full-width column,
 * size lg); desktop is more → secondary → divider → primary (wrapping row, size
 * md). A single flex container can't express both, so — like the component — the
 * Default case composes one ButtonGroup per breakpoint. The remaining cases show
 * the desktop cluster only (they vary the button *types*, not the responsiveness).
 */
export const ResourceHeaderActions: Story = {
  name: "ResourceHeader · cases",
  render: () => (
    <div className="flex max-w-4xl flex-col gap-8">
      <Case caption="Default — resize across 768px (desktop row ↔ mobile full-width column)">
        <MockResourceHeader>
          {/* Desktop (≥ md): more → Edit → Export(icon) → Syncing → │ → Publish */}
          <div className="hidden md:block">
            <RhDesktopCluster />
          </div>
          {/* Mobile (< md): full-width column, size lg, primary → secondary → more.
              `stack="md"` only ever shows its column state here (hidden at md). */}
          <div className="md:hidden">
            <ButtonGroup
              stack="md"
              gap="md"
              fullWidthOnStack
              className="[&_button]:w-full"
            >
              <F0Button
                variant="default"
                icon={ArrowUp}
                label="Publish"
                size="lg"
                onClick={noop}
              />
              <F0Button
                variant="outline"
                icon={Pencil}
                label="Edit"
                size="lg"
                onClick={noop}
              />
              <F0Button
                variant="outline"
                icon={Download}
                label="Export"
                hideLabel
                size="lg"
                onClick={noop}
              />
              <F0Button
                variant="outline"
                label="Syncing"
                loading
                size="lg"
                onClick={noop}
              />
              <MobileDropdown items={resourceOtherActions} />
            </ButtonGroup>
          </div>
        </MockResourceHeader>
      </Case>

      <Case caption="Primary as dropdown (desktop cluster)">
        <MockResourceHeader>
          <RhDesktopCluster primaryAsDropdown />
        </MockResourceHeader>
      </Case>

      <Case caption="A secondary as dropdown (desktop cluster)">
        <MockResourceHeader>
          <RhDesktopCluster exportAsDropdown />
        </MockResourceHeader>
      </Case>

      <Case caption="Without otherActions (no “more” menu)">
        <MockResourceHeader>
          <RhDesktopCluster withOtherActions={false} />
        </MockResourceHeader>
      </Case>
    </div>
  ),
}

/**
 * `ButtonGroupOverflow` (generic): a row of actions that sheds buttons into a
 * "more" popover as available width shrinks, via the measurement-based
 * `OverflowList`. The overflow affordance is an ellipsis "⋯" trigger that opens a
 * menu (icon + label rows). This is **width-driven** overflow (e.g. a toolbar) —
 * distinct from a fixed "more" bucket like ResourceHeader's `otherActions`.
 * Narrow the canvas/container to watch buttons collapse under the ellipsis.
 */
export const ToolbarOverflow: Story = {
  name: "Width-driven overflow (toolbar)",
  render: () => (
    <div className="w-full max-w-xs rounded-lg border border-solid border-f1-border-secondary p-3">
      <ButtonGroupOverflow
        actions={[
          { id: "edit", label: "Edit", icon: Pencil, onClick: noop },
          { id: "share", label: "Share", icon: Share, onClick: noop },
          { id: "duplicate", label: "Duplicate", icon: Plus, onClick: noop },
          { id: "delete", label: "Delete", icon: Delete, onClick: noop },
        ]}
      />
    </div>
  ),
}

// --- 4. Card footer (container query) ---------------------------------------

const CardFooterRow = ({ width }: { width: number }) => (
  <div className="@container" style={{ width }}>
    <div className="rounded-lg border border-solid border-f1-border-secondary p-4">
      {/* footer top-border chrome (not owned by ButtonGroup) */}
      <div className="border-0 border-t border-solid border-t-f1-border-secondary pt-4">
        <ButtonGroup
          align="between"
          gap="lg"
          stack="container-md"
          fullWidthOnStack
          className="w-full"
        >
          {/* secondary group: full-width column when the card is narrow, row when wide */}
          <ButtonGroup
            gap="md"
            stack="container-md"
            fullWidthOnStack
            className="w-full @md:w-fit"
          >
            <F0Button
              variant="outline"
              label="Discard"
              icon={Delete}
              onClick={noop}
            />
            <F0Button
              variant="outline"
              label="Preview"
              icon={Share}
              onClick={noop}
            />
          </ButtonGroup>
          <F0Button variant="default" label="Save changes" onClick={noop} />
        </ButtonGroup>
      </div>
    </div>
  </div>
)

/**
 * Card footer: stacking is driven by the **card's own width** (container `@md` =
 * 28rem / 448px), not the viewport — so a small card always stacks regardless of
 * screen size. Narrow: full-width column. Wide: `justify-between` row. This is the
 * recommended target and intentionally upgrades today's `CardActions` footer
 * (which uses a viewport `sm` media query). Button size stays constant — it can't
 * follow a container query. Both widths shown.
 */
export const CardFooter: Story = {
  name: "Card footer · container query",
  render: () => (
    <div className="flex flex-col gap-6">
      <div>
        <div className="mb-2 text-sm text-f1-foreground-secondary">
          Narrow card (&lt; @md / 448px): full-width column
        </div>
        <CardFooterRow width={360} />
      </div>
      <div>
        <div className="mb-2 text-sm text-f1-foreground-secondary">
          Wide card (≥ @md / 448px): justify-between row
        </div>
        <CardFooterRow width={560} />
      </div>
    </div>
  ),
}

// --- 5. Card oneLiner (container query) -------------------------------------

const OneLinerRow = ({ width }: { width: number }) => (
  <div className="@container" style={{ width }}>
    <div className="rounded-lg border border-solid border-f1-border-secondary p-4">
      <div className="flex flex-col @md:flex-row @md:items-center @md:justify-between @md:gap-4">
        <div className="text-f1-foreground">
          Enable two-factor authentication
        </div>
        {/* Actions are always a row; the CONTAINER query toggles the footer
            chrome (separator + spacing) on/off — not the button arrangement. */}
        <ButtonGroup
          align="end"
          stack="none"
          className="relative z-[1] -mx-4 mt-4 border-0 border-t border-solid border-t-f1-border-secondary px-4 pt-4 @md:mx-0 @md:mt-0 @md:border-t-0 @md:px-0 @md:pt-0"
        >
          <F0Button variant="outline" label="Later" onClick={noop} />
          <F0Button variant="default" label="Enable" onClick={noop} />
        </ButtonGroup>
      </div>
    </div>
  </div>
)

/**
 * Card oneLiner: a CONTAINER query (`@md` = 28rem / 448px). Narrow: actions wrap
 * beneath the text with a footer separator. Wide: actions sit inline to the
 * right, no separator. Button size stays constant (size can't follow a container
 * query). Reproduces the oneLiner path of `CardActions.tsx`. Both states shown.
 */
export const CardOneLiner: Story = {
  name: "Card oneLiner · container query",
  render: () => (
    <div className="flex flex-col gap-6">
      <div>
        <div className="mb-2 text-sm text-f1-foreground-secondary">
          Narrow (&lt; @md / 448px): stacked, with footer separator
        </div>
        <OneLinerRow width={360} />
      </div>
      <div>
        <div className="mb-2 text-sm text-f1-foreground-secondary">
          Wide (≥ @md / 448px): inline, no separator
        </div>
        <OneLinerRow width={560} />
      </div>
    </div>
  ),
}
