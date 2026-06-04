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
 * The action layouts across F0 reconcile to THREE agnostic patterns — **Trailing**,
 * **Split**, and **Reflowing** — plus orthogonal **composition** pieces (split
 * button, overflow menu, separator, icon-only). Each example is reconstructed with
 * `ButtonGroup` on a minimal mock surface, without importing the real component.
 *
 * See `ButtonGroup.mdx` for the at-a-glance matrix.
 */
const meta = {
  title: "ButtonGroup/Patterns",
  component: ButtonGroup,
  parameters: { layout: "padded" },
  tags: ["experimental"],
} satisfies Meta<typeof ButtonGroup>

export default meta
type Story = StoryObj<typeof meta>

// --- Captioned case + minimal mock surfaces ---------------------------------
// The buttons are the point; the surfaces are just clean white frames (footer
// bar, header bar, card) so examples don't float on the canvas. ButtonGroup owns
// none of this chrome.

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

const surface =
  "rounded-lg border border-solid border-f1-border-secondary bg-f1-background"

/** A footer surface: empty body, then a bottom action bar. */
const MockFooter = ({ children }: { children: React.ReactNode }) => (
  <div className={cn(surface, "max-w-md")}>
    <div className="h-14" />
    <div className="border-0 border-t border-solid border-f1-border-secondary px-4 py-3">
      {children}
    </div>
  </div>
)

/** A header surface: a top action bar, then an empty body. */
const MockHeader = ({ children }: { children: React.ReactNode }) => (
  <div className={cn(surface, "max-w-md")}>
    <div className="flex items-center justify-end border-0 border-b border-solid border-f1-border-secondary px-4 py-3">
      {children}
    </div>
    <div className="h-14" />
  </div>
)

/** A page-header / card surface holding the (right-aligned) action cluster. */
const MockPageHeader = ({ children }: { children: React.ReactNode }) => (
  <div className={cn(surface, "p-4")}>{children}</div>
)

// =============================================================================
// Pattern 1 — Trailing actions
// align="end" stack="none": actions packed at the trailing edge, primary last,
// no stacking. Recognized in dialog footers, dialog header actions, one-liners.
// =============================================================================

/** One-liner card: actions inline when wide, stacked under the text when the card
 * is narrow. Same trailing recipe — only the surrounding chrome toggles by the
 * CONTAINER width (`@md`). */
const OneLinerRow = ({ width }: { width: number }) => (
  <div className="@container" style={{ width }}>
    <div className="rounded-lg border border-solid border-f1-border-secondary p-4">
      <div className="flex flex-col @md:flex-row @md:items-center @md:justify-between @md:gap-4">
        <div className="text-f1-foreground">
          Enable two-factor authentication
        </div>
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

export const TrailingActions: Story = {
  name: "Trailing actions",
  render: () => (
    <Cases>
      <Case caption="Confirm row — secondary → primary (e.g. dialog footer)">
        <MockFooter>
          <ButtonGroup align="end" stack="none" className="w-full">
            <F0Button variant="outline" label="Cancel" onClick={noop} />
            <F0Button variant="default" label="Confirm" onClick={noop} />
          </ButtonGroup>
        </MockFooter>
      </Case>

      <Case caption="+ Split button — an action array collapses to F0ButtonDropdown">
        <MockFooter>
          <ButtonGroup align="end" stack="none" className="w-full">
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
        </MockFooter>
      </Case>

      <Case caption="+ Icon-only + separator + close (e.g. dialog header, ≤2 non-critical)">
        <MockHeader>
          <ButtonGroup align="end" stack="none">
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
        </MockHeader>
      </Case>

      <Case caption="+ Overflow menu — extra actions collapse under an ellipsis (e.g. dialog header, 3+ / critical)">
        <MockHeader>
          <ButtonGroup align="end" stack="none">
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
        </MockHeader>
      </Case>

      <Case caption="One-liner — inline when wide, stacked when the card is narrow (container @md)">
        <div className="flex flex-col gap-4">
          <OneLinerRow width={560} />
          <OneLinerRow width={360} />
        </div>
      </Case>
    </Cases>
  ),
}

// =============================================================================
// Pattern 2 — Split actions
// align="between" stack="container-md" fullWidthOnStack: secondary and primary at
// opposite edges, collapsing to a full-width column when the surface is narrow.
// Recognized in card footers.
// =============================================================================

const SplitRow = ({ width }: { width: number }) => (
  <div className="@container" style={{ width }}>
    <div className="rounded-lg border border-solid border-f1-border-secondary p-4">
      <div className="border-0 border-t border-solid border-t-f1-border-secondary pt-4">
        <ButtonGroup
          align="between"
          stack="container-md"
          fullWidthOnStack
          className="w-full"
        >
          <ButtonGroup
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

export const SplitActions: Story = {
  name: "Split actions",
  render: () => (
    <Cases>
      <Case caption="Wide surface — secondary ‖ primary at opposite edges (e.g. card footer)">
        <SplitRow width={560} />
      </Case>
      <Case caption="Narrow surface — collapses to a full-width column, by container width (@md)">
        <SplitRow width={360} />
      </Case>
    </Cases>
  ),
}

// =============================================================================
// Pattern 3 — Reflowing actions
// The actions REORDER between compact and wide. The order alone fits one group
// (stack + reverseOnStack); two groups are used here only because the button
// SIZE and the overflow-menu component also change across the breakpoint.
// Recognized in page / resource headers.
// =============================================================================

const reflowOverflow: DropdownItem[] = [
  { label: "Archive", icon: Archive, onClick: noop },
  { label: "Copy URL", icon: LayersFront, onClick: noop },
  { type: "separator" },
  { label: "Unlist", icon: Delete, critical: true, onClick: noop },
]

/** The wide cluster: more → secondary → divider → primary, right-aligned. */
const WideCluster = ({
  withOverflow = true,
  primaryAsDropdown = false,
  exportAsDropdown = false,
}: {
  withOverflow?: boolean
  primaryAsDropdown?: boolean
  exportAsDropdown?: boolean
}) => (
  <ButtonGroup align="end" wrap className="w-full">
    {withOverflow && <Dropdown items={reflowOverflow} />}
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

export const ReflowingActions: Story = {
  name: "Reflowing actions",
  render: () => (
    <div className="flex max-w-3xl flex-col gap-8">
      <Case caption="Reorders across 768px — wide: more → secondary → divider → primary; narrow: primary on top of a full-width column (e.g. page / resource header)">
        <MockPageHeader>
          {/* Wide (≥ md) */}
          <div className="hidden md:block">
            <WideCluster />
          </div>
          {/* Compact (< md): full-width column, size lg, primary first.
              The order alone could be one group via `reverseOnStack`; two are
              used because the size (lg→md) and the overflow component (Dropdown
              ↔ MobileDropdown) also change here. */}
          <div className="md:hidden">
            <ButtonGroup
              stack="md"
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
              <MobileDropdown items={reflowOverflow} />
            </ButtonGroup>
          </div>
        </MockPageHeader>
      </Case>

      <Case caption="+ Split button — primary as a dropdown">
        <MockPageHeader>
          <WideCluster primaryAsDropdown />
        </MockPageHeader>
      </Case>

      <Case caption="+ Split button — a secondary as a dropdown">
        <MockPageHeader>
          <WideCluster exportAsDropdown />
        </MockPageHeader>
      </Case>

      <Case caption="Without the overflow menu">
        <MockPageHeader>
          <WideCluster withOverflow={false} />
        </MockPageHeader>
      </Case>
    </div>
  ),
}

// =============================================================================
// Composition — Overflow menu (width-driven)
// =============================================================================

const toolbarActions = [
  { id: "edit", label: "Edit", icon: Pencil, onClick: noop },
  { id: "share", label: "Share", icon: Share, onClick: noop },
  { id: "duplicate", label: "Duplicate", icon: Plus, onClick: noop },
  { id: "delete", label: "Delete", icon: Delete, onClick: noop },
]

/**
 * `ButtonGroupOverflow` sheds the buttons that don't fit under a real ellipsis
 * "⋯" `Dropdown` (closes on select), measured by `useOverflowCalculation`.
 * Width-driven — distinct from a fixed count-independent bucket. Narrow the
 * canvas to watch buttons collapse; shown here at three fixed widths.
 */
export const OverflowMenu: Story = {
  name: "Overflow menu (width-driven)",
  render: () => (
    <div className="flex flex-col gap-6">
      {[560, 360, 240].map((w) => (
        <div key={w} className="flex flex-col gap-2">
          <span className="text-sm text-f1-foreground-secondary">
            {w}px — buttons that don't fit collapse under the ellipsis
          </span>
          <div
            style={{ width: w }}
            className="rounded-lg border border-solid border-f1-border-secondary p-3"
          >
            <ButtonGroupOverflow actions={toolbarActions} />
          </div>
        </div>
      ))}
    </div>
  ),
}
