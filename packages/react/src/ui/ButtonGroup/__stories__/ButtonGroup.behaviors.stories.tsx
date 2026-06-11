import type { Meta, StoryObj } from "@storybook/react-vite"

import { type DropdownItem } from "@/experimental/Navigation/Dropdown"
import {
  Archive,
  ArrowUp,
  Cross,
  Delete,
  Download,
  LayersFront,
  Pencil,
  Plus,
  Share,
} from "@/icons/app"
import { cn } from "@/lib/utils"

import { ButtonGroup } from "../ButtonGroup"

const noop = () => {}

/**
 * The action layouts across F0 reconcile to THREE patterns — **Trailing**,
 * **Split**, and **Reflowing** — all expressed through `ButtonGroup`'s action
 * props (`primaryAction` / `secondaryActions` / `otherActions`), without passing
 * any JSX children. See `ButtonGroup.mdx` for the at-a-glance matrix.
 */
const meta = {
  title: "ButtonGroup/Patterns",
  component: ButtonGroup,
  parameters: { layout: "padded" },
  tags: [],
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
 * is narrow — driven by the CONTAINER width (`stack="container-md"`). */
const OneLinerRow = ({ width }: { width: number }) => (
  <div className="@container" style={{ width }}>
    <div className="rounded-lg border border-solid border-f1-border-secondary p-4">
      <div className="flex flex-col @md:flex-row @md:items-center @md:justify-between @md:gap-4">
        <div className="text-f1-foreground">
          Enable two-factor authentication
        </div>
        <ButtonGroup
          align="end"
          stack="container-md"
          fullWidthOnStack
          className="mt-4 @md:mt-0"
          secondaryActions={[{ id: "later", label: "Later", onClick: noop }]}
          primaryAction={{ id: "enable", label: "Enable", onClick: noop }}
        />
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
          <ButtonGroup
            secondaryActions={[
              { id: "cancel", label: "Cancel", onClick: noop },
            ]}
            primaryAction={{ id: "confirm", label: "Confirm", onClick: noop }}
          />
        </MockFooter>
      </Case>

      <Case caption="+ Split buttons — primary and secondary as F0ButtonDropdown">
        <MockFooter>
          <ButtonGroup
            secondaryActions={[
              {
                id: "discard",
                type: "split",
                items: [
                  { value: "discard", label: "Discard" },
                  { value: "save-draft", label: "Save as draft" },
                ],
                onClick: noop,
              },
            ]}
            primaryAction={{
              id: "publish",
              type: "split",
              items: [
                { value: "publish", label: "Publish" },
                { value: "schedule", label: "Schedule" },
              ],
              onClick: noop,
            }}
          />
        </MockFooter>
      </Case>

      <Case caption="+ Icon-only + separator + close (e.g. dialog header, ≤2 non-critical)">
        <MockHeader>
          <ButtonGroup
            secondaryActions={[
              {
                id: "edit",
                icon: Pencil,
                label: "Edit",
                hideLabel: true,
                onClick: noop,
              },
              {
                id: "share",
                icon: Share,
                label: "Share",
                hideLabel: true,
                onClick: noop,
              },
              { type: "separator" },
              {
                id: "close",
                icon: Cross,
                label: "Close",
                hideLabel: true,
                onClick: noop,
              },
            ]}
          />
        </MockHeader>
      </Case>

      <Case caption="+ Overflow menu — extra actions collapse under an ellipsis (e.g. dialog header, 3+ / critical)">
        <MockHeader>
          <ButtonGroup
            otherActions={[
              { label: "Edit", icon: Pencil, onClick: noop },
              { label: "Share", icon: Share, onClick: noop },
              { label: "Delete", icon: Delete, onClick: noop, critical: true },
            ]}
            secondaryActions={[
              {
                id: "close",
                icon: Cross,
                label: "Close",
                hideLabel: true,
                onClick: noop,
              },
            ]}
          />
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
          secondaryActions={[
            { id: "discard", label: "Discard", icon: Delete, onClick: noop },
            { id: "preview", label: "Preview", icon: Share, onClick: noop },
          ]}
          primaryAction={{ id: "save", label: "Save changes", onClick: noop }}
        />
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
// One ButtonGroup that REORDERS across the breakpoint: wide is a row
// (more → secondary → divider → primary, size md, ⋯ popover); compact is a
// full-width column with the primary on top (size lg, ⋯ mobile drawer). The
// size swap and the Dropdown↔MobileDropdown swap are handled internally.
// Recognized in page / resource headers.
// =============================================================================

const reflowOverflow: DropdownItem[] = [
  { label: "Archive", icon: Archive, onClick: noop },
  { label: "Copy URL", icon: LayersFront, onClick: noop },
  { type: "separator" },
  { label: "Unlist", icon: Delete, critical: true, onClick: noop },
]

const ReflowCluster = ({
  primaryAsDropdown = false,
  exportAsDropdown = false,
  withOverflow = true,
}: {
  primaryAsDropdown?: boolean
  exportAsDropdown?: boolean
  withOverflow?: boolean
}) => (
  <ButtonGroup
    align="end"
    stack="md"
    fullWidthOnStack
    reverseOnStack
    size={{ base: "lg", md: "md" }}
    otherActions={withOverflow ? reflowOverflow : []}
    secondaryActions={[
      { id: "edit", icon: Pencil, label: "Edit", onClick: noop },
      exportAsDropdown
        ? {
            id: "export",
            type: "split",
            items: [
              { value: "excel", label: "Export Excel", icon: Download },
              { value: "csv", label: "Export CSV", icon: Download },
            ],
            value: "excel",
            onClick: noop,
          }
        : {
            id: "export",
            icon: Download,
            label: "Export",
            hideLabel: true,
            onClick: noop,
          },
      { id: "sync", label: "Syncing", loading: true, onClick: noop },
      { type: "separator" },
    ]}
    primaryAction={
      primaryAsDropdown
        ? {
            id: "publish",
            type: "split",
            items: [
              { value: "now", label: "Publish now", icon: ArrowUp },
              { value: "schedule", label: "Schedule" },
              { value: "draft", label: "Save as draft" },
            ],
            value: "now",
            onClick: noop,
          }
        : { id: "publish", icon: ArrowUp, label: "Publish", onClick: noop }
    }
  />
)

export const ReflowingActions: Story = {
  name: "Reflowing actions",
  render: () => (
    <div className="flex max-w-3xl flex-col gap-8">
      <Case caption="Reorders across 768px — wide: more → secondary → divider → primary (size md); narrow: primary on top of a full-width column (size lg, ⋯ becomes a drawer)">
        <MockPageHeader>
          <ReflowCluster />
        </MockPageHeader>
      </Case>

      <Case caption="+ Split button — primary as a dropdown">
        <MockPageHeader>
          <ReflowCluster primaryAsDropdown />
        </MockPageHeader>
      </Case>

      <Case caption="+ Split button — a secondary as a dropdown">
        <MockPageHeader>
          <ReflowCluster exportAsDropdown />
        </MockPageHeader>
      </Case>

      <Case caption="Without the overflow menu">
        <MockPageHeader>
          <ReflowCluster withOverflow={false} />
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
 * Width-driven overflow is now native: secondaries that don't fit shed under a
 * real ellipsis "⋯" `Dropdown` (closes on select), measured automatically.
 * Narrow the canvas to watch buttons collapse; shown here at three fixed widths.
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
            <ButtonGroup secondaryActions={toolbarActions} />
          </div>
        </div>
      ))}
    </div>
  ),
}
