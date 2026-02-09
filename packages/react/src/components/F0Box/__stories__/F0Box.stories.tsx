import type { Meta, StoryObj } from "@storybook/react-vite"
import { ComponentProps } from "react"

import { F0Box } from "../index"
import { F0Text } from "@/components/F0Text"
import { F0Heading } from "@/components/F0Heading"
import { F0Button } from "@/components/F0Button"
import { F0Icon } from "@/components/F0Icon"
import { F0AvatarPerson } from "@/components/avatars/F0AvatarPerson"
import { F0TagStatus } from "@/components/tags/F0TagStatus"
import { F0TagDot } from "@/components/tags/F0TagDot"
import { Badge } from "@/ui/badge"
import {
  ChartLine,
  Clock,
  DollarBill,
  Graph,
  ArrowUp,
  ArrowDown,
  CheckCircle,
  AlertCircle,
  Briefcase,
  Person,
} from "@/icons/app"

// ─── Option arrays for controls ──────────────────────────────────

const spacingOptions = [
  undefined,
  "none",
  "xs",
  "sm",
  "md",
  "lg",
  "xl",
  "2xl",
  "3xl",
  "4xl",
  "5xl",
]
const marginOptions = [...spacingOptions, "auto"]
const gapOptions = [
  undefined,
  "none",
  "xs",
  "sm",
  "md",
  "lg",
  "xl",
  "2xl",
  "3xl",
  "4xl",
  "5xl",
]
const sizeOptions = [
  undefined,
  "auto",
  "full",
  "screen",
  "min",
  "max",
  "fit",
  "0",
  "1",
  "2",
  "4",
  "6",
  "8",
  "10",
  "12",
  "16",
  "20",
  "24",
  "32",
  "40",
  "48",
  "56",
  "64",
  "72",
  "80",
  "96",
  "1/2",
  "1/3",
  "2/3",
  "1/4",
  "3/4",
]
const borderWidthOptions = [undefined, "none", "default", "thick"]
const borderRadiusOptions = [
  undefined,
  "none",
  "2xs",
  "xs",
  "sm",
  "md",
  "lg",
  "xl",
  "2xl",
  "full",
]
const borderColorOptions = [
  undefined,
  "default",
  "secondary",
  "bold",
  "selected",
  "selected-bold",
  "critical",
  "critical-bold",
  "warning",
  "warning-bold",
  "info",
  "info-bold",
  "positive",
  "positive-bold",
  "promote",
]
const borderStyleOptions = [
  undefined,
  "solid",
  "dashed",
  "dotted",
  "double",
  "none",
]
const overflowOptions = [undefined, "visible", "hidden", "auto", "scroll"]
const backgroundOptions = [
  undefined,
  "transparent",
  "primary",
  "secondary",
  "tertiary",
  "inverse",
  "inverse-secondary",
  "bold",
  "accent",
  "accent-bold",
  "promote",
  "critical",
  "critical-bold",
  "info",
  "info-bold",
  "warning",
  "warning-bold",
  "positive",
  "positive-bold",
  "selected",
  "selected-secondary",
  "selected-bold",
  "overlay",
]
const columnsOptions = [
  undefined,
  "none",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
  "12",
]
const colSpanOptions = [
  undefined,
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
  "12",
  "full",
]
const positionOptions = [
  undefined,
  "static",
  "relative",
  "absolute",
  "fixed",
  "sticky",
]

// ─── Meta ────────────────────────────────────────────────────────

const meta = {
  title: "Box",
  component: F0Box,
  argTypes: {
    // Display & Position
    display: {
      control: "select",
      options: ["block", "flex", "inline", "inline-flex", "grid", "none"],
    },
    position: { control: "select", options: positionOptions },
    // Padding
    padding: { control: "select", options: spacingOptions },
    paddingX: { control: "select", options: spacingOptions },
    paddingY: { control: "select", options: spacingOptions },
    paddingTop: { control: "select", options: spacingOptions },
    paddingBottom: { control: "select", options: spacingOptions },
    paddingLeft: { control: "select", options: spacingOptions },
    paddingRight: { control: "select", options: spacingOptions },
    // Margin
    margin: { control: "select", options: marginOptions },
    marginX: { control: "select", options: marginOptions },
    marginY: { control: "select", options: marginOptions },
    marginTop: { control: "select", options: marginOptions },
    marginBottom: { control: "select", options: marginOptions },
    marginLeft: { control: "select", options: marginOptions },
    marginRight: { control: "select", options: marginOptions },
    // Gap
    gap: { control: "select", options: gapOptions },
    // Grid
    columns: { control: "select", options: columnsOptions },
    rows: {
      control: "select",
      options: [undefined, "none", "1", "2", "3", "4", "5", "6"],
    },
    colSpan: { control: "select", options: colSpanOptions },
    colStart: {
      control: "select",
      options: [
        undefined,
        "auto",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10",
        "11",
        "12",
        "13",
      ],
    },
    rowSpan: {
      control: "select",
      options: [undefined, "1", "2", "3", "4", "5", "6", "full"],
    },
    // Dimensions
    width: { control: "select", options: sizeOptions },
    height: { control: "select", options: sizeOptions },
    minWidth: { control: "select", options: sizeOptions },
    minHeight: { control: "select", options: sizeOptions },
    maxWidth: { control: "select", options: sizeOptions },
    maxHeight: { control: "select", options: sizeOptions },
    // Background
    background: { control: "select", options: backgroundOptions },
    // Border
    border: { control: "select", options: borderWidthOptions },
    borderTop: { control: "select", options: borderWidthOptions },
    borderBottom: { control: "select", options: borderWidthOptions },
    borderLeft: { control: "select", options: borderWidthOptions },
    borderRight: { control: "select", options: borderWidthOptions },
    borderColor: { control: "select", options: borderColorOptions },
    borderStyle: { control: "select", options: borderStyleOptions },
    borderRadius: { control: "select", options: borderRadiusOptions },
    borderRadiusTopLeft: { control: "select", options: borderRadiusOptions },
    borderRadiusTopRight: { control: "select", options: borderRadiusOptions },
    borderRadiusBottomLeft: { control: "select", options: borderRadiusOptions },
    borderRadiusBottomRight: {
      control: "select",
      options: borderRadiusOptions,
    },
    // Overflow
    overflow: { control: "select", options: overflowOptions },
    overflowX: { control: "select", options: overflowOptions },
    overflowY: { control: "select", options: overflowOptions },
    // Divider
    divider: { control: "select", options: [undefined, "x", "y"] },
    dividerColor: { control: "select", options: borderColorOptions },
    // Flex
    alignItems: {
      control: "select",
      options: [undefined, "start", "center", "end", "stretch", "baseline"],
    },
    justifyContent: {
      control: "select",
      options: [
        undefined,
        "start",
        "center",
        "end",
        "between",
        "around",
        "evenly",
        "stretch",
      ],
    },
    flexDirection: {
      control: "select",
      options: [undefined, "row", "column", "row-reverse", "column-reverse"],
    },
    flexWrap: {
      control: "select",
      options: [undefined, "nowrap", "wrap", "wrap-reverse"],
    },
    grow: { control: "boolean" },
    shrink: { control: "boolean" },
  },
  parameters: { layout: "padded" },
  tags: ["autodocs", "stable"],
} satisfies Meta<ComponentProps<typeof F0Box>>

export default meta
type Story = StoryObj<typeof meta>

// ─── Helper components ───────────────────────────────────────────

const Label = ({
  children,
  subtitle,
}: {
  children: React.ReactNode
  subtitle?: string
}) => (
  <div className="flex flex-col gap-1 pb-2">
    <span className="text-lg font-semibold text-f1-foreground">{children}</span>
    {subtitle && (
      <span className="text-base text-f1-foreground-secondary">{subtitle}</span>
    )}
  </div>
)

const Cell = ({
  children,
  color = "bg-f1-background-info",
}: {
  children: React.ReactNode
  color?: string
}) => (
  <div
    className={`${color} flex items-center justify-center rounded-md px-4 py-3 text-sm text-f1-foreground`}
  >
    {children}
  </div>
)

// ═══════════════════════════════════════════════════════════════════
//  1. DEFAULT — Interactive playground
// ═══════════════════════════════════════════════════════════════════

export const Default: Story = {
  args: {
    padding: "lg",
    background: "secondary",
    borderRadius: "md",
    children: "A simple box — use the controls to explore all props",
  },
}

// ═══════════════════════════════════════════════════════════════════
//  2. DISPLAY
// ═══════════════════════════════════════════════════════════════════

export const Display: Story = {
  render: () => (
    <F0Box display="flex" flexDirection="column" gap="lg">
      <Label subtitle="display controls the CSS display value">Display</Label>

      <F0Box display="flex" gap="md" flexWrap="wrap" alignItems="start">
        <F0Box display="block" padding="md" background="secondary">
          display=&quot;block&quot;
        </F0Box>
        <F0Box display="flex" padding="md" background="secondary" gap="sm">
          <Cell>flex child 1</Cell>
          <Cell>flex child 2</Cell>
        </F0Box>
        <F0Box display="inline" padding="md" background="secondary">
          display=&quot;inline&quot;
        </F0Box>
        <F0Box
          display="inline-flex"
          padding="md"
          background="secondary"
          gap="sm"
        >
          <Cell>inline-flex 1</Cell>
          <Cell>inline-flex 2</Cell>
        </F0Box>
      </F0Box>

      <F0Box display="grid" columns="3" gap="md">
        <F0Box padding="md" background="secondary">
          Grid cell 1
        </F0Box>
        <F0Box padding="md" background="secondary">
          Grid cell 2
        </F0Box>
        <F0Box padding="md" background="secondary">
          Grid cell 3
        </F0Box>
      </F0Box>

      <F0Box display="flex" gap="md" alignItems="center">
        <F0Box padding="md" background="secondary">
          Visible
        </F0Box>
        <F0Box display="none" padding="md" background="critical">
          This is hidden (display=none)
        </F0Box>
        <F0Box padding="md" background="secondary">
          Also visible
        </F0Box>
      </F0Box>
    </F0Box>
  ),
}

// ═══════════════════════════════════════════════════════════════════
//  3. POSITION
// ═══════════════════════════════════════════════════════════════════

export const Position: Story = {
  render: () => (
    <F0Box display="flex" flexDirection="column" gap="lg">
      <Label subtitle="position maps to CSS position values">Position</Label>

      <F0Box
        position="relative"
        padding="xl"
        background="tertiary"
        borderRadius="md"
        height="40"
      >
        <span className="text-sm text-f1-foreground-secondary">
          Parent: position=&quot;relative&quot;
        </span>
        <F0Box
          position="absolute"
          padding="md"
          background="info"
          borderRadius="sm"
        >
          position=&quot;absolute&quot; (top-left by default)
        </F0Box>
      </F0Box>

      <F0Box
        position="relative"
        padding="xl"
        background="tertiary"
        borderRadius="md"
      >
        <span className="text-sm text-f1-foreground-secondary">
          position=&quot;relative&quot; — shifts from normal flow
        </span>
      </F0Box>

      <F0Box
        position="sticky"
        padding="md"
        background="warning"
        borderRadius="sm"
      >
        position=&quot;sticky&quot; — sticks on scroll (try in a scrollable
        container)
      </F0Box>
    </F0Box>
  ),
}

// ═══════════════════════════════════════════════════════════════════
//  4. PADDING
// ═══════════════════════════════════════════════════════════════════

export const Padding: Story = {
  render: () => (
    <F0Box display="flex" flexDirection="column" gap="lg">
      <Label subtitle="padding applies inner spacing using design tokens (none → 5xl)">
        Padding tokens
      </Label>

      <F0Box display="flex" gap="md" flexWrap="wrap" alignItems="start">
        {(
          [
            "none",
            "xs",
            "sm",
            "md",
            "lg",
            "xl",
            "2xl",
            "3xl",
            "4xl",
            "5xl",
          ] as const
        ).map((size) => (
          <F0Box
            key={size}
            padding={size}
            background="tertiary"
            borderRadius="sm"
          >
            <Cell>p=&quot;{size}&quot;</Cell>
          </F0Box>
        ))}
      </F0Box>

      <Label subtitle="Axis shortcuts: paddingX (horizontal) and paddingY (vertical)">
        Axis padding
      </Label>

      <F0Box display="flex" gap="md" flexWrap="wrap">
        <F0Box
          paddingX="xl"
          paddingY="sm"
          background="tertiary"
          borderRadius="sm"
        >
          paddingX=&quot;xl&quot; paddingY=&quot;sm&quot;
        </F0Box>
        <F0Box
          paddingX="sm"
          paddingY="xl"
          background="tertiary"
          borderRadius="sm"
        >
          paddingX=&quot;sm&quot; paddingY=&quot;xl&quot;
        </F0Box>
      </F0Box>

      <Label subtitle="Per-side: paddingTop, paddingBottom, paddingLeft, paddingRight">
        Per-side padding
      </Label>

      <F0Box
        paddingTop="2xl"
        paddingBottom="xs"
        paddingLeft="xl"
        paddingRight="sm"
        background="tertiary"
        borderRadius="sm"
      >
        top=2xl, bottom=xs, left=xl, right=sm
      </F0Box>
    </F0Box>
  ),
}

// ═══════════════════════════════════════════════════════════════════
//  5. MARGIN
// ═══════════════════════════════════════════════════════════════════

export const Margin: Story = {
  render: () => (
    <F0Box display="flex" flexDirection="column" gap="lg">
      <Label subtitle="marginX=auto centers a fixed-width element">
        Auto centering
      </Label>

      <F0Box background="tertiary" padding="md" borderRadius="sm">
        <F0Box
          marginX="auto"
          width="48"
          padding="md"
          background="info"
          borderRadius="sm"
        >
          Centered with marginX=&quot;auto&quot;
        </F0Box>
      </F0Box>

      <Label subtitle="margin adds outer spacing — here each box has different marginBottom">
        Spacing between elements
      </Label>

      <F0Box background="tertiary" padding="md" borderRadius="sm">
        <F0Box
          marginBottom="xs"
          padding="sm"
          background="secondary"
          borderRadius="sm"
        >
          marginBottom=&quot;xs&quot;
        </F0Box>
        <F0Box
          marginBottom="md"
          padding="sm"
          background="secondary"
          borderRadius="sm"
        >
          marginBottom=&quot;md&quot;
        </F0Box>
        <F0Box
          marginBottom="xl"
          padding="sm"
          background="secondary"
          borderRadius="sm"
        >
          marginBottom=&quot;xl&quot;
        </F0Box>
        <F0Box padding="sm" background="secondary" borderRadius="sm">
          No margin
        </F0Box>
      </F0Box>
    </F0Box>
  ),
}

// ═══════════════════════════════════════════════════════════════════
//  6. FLEX LAYOUT
// ═══════════════════════════════════════════════════════════════════

export const FlexLayout: Story = {
  render: () => (
    <F0Box display="flex" flexDirection="column" gap="xl">
      <Label subtitle="flexDirection controls the main axis">Direction</Label>

      <F0Box display="flex" gap="lg" flexWrap="wrap">
        <F0Box
          display="flex"
          flexDirection="row"
          gap="sm"
          padding="md"
          background="tertiary"
          borderRadius="sm"
        >
          <Cell>row 1</Cell>
          <Cell>row 2</Cell>
          <Cell>row 3</Cell>
        </F0Box>
        <F0Box
          display="flex"
          flexDirection="column"
          gap="sm"
          padding="md"
          background="tertiary"
          borderRadius="sm"
        >
          <Cell>col 1</Cell>
          <Cell>col 2</Cell>
          <Cell>col 3</Cell>
        </F0Box>
        <F0Box
          display="flex"
          flexDirection="row-reverse"
          gap="sm"
          padding="md"
          background="tertiary"
          borderRadius="sm"
        >
          <Cell>rev 1</Cell>
          <Cell>rev 2</Cell>
          <Cell>rev 3</Cell>
        </F0Box>
      </F0Box>

      <Label subtitle="alignItems controls cross-axis alignment">
        Align items
      </Label>

      <F0Box display="flex" gap="md" flexWrap="wrap">
        {(["start", "center", "end", "stretch", "baseline"] as const).map(
          (align) => (
            <F0Box
              key={align}
              display="flex"
              alignItems={align}
              gap="sm"
              padding="md"
              background="tertiary"
              borderRadius="sm"
              height="28"
              width="44"
            >
              <Cell>{align}</Cell>
              <Cell color="bg-f1-background-warning">B</Cell>
            </F0Box>
          )
        )}
      </F0Box>

      <Label subtitle="justifyContent controls main-axis distribution">
        Justify content
      </Label>

      <F0Box display="flex" flexDirection="column" gap="sm">
        {(
          ["start", "center", "end", "between", "around", "evenly"] as const
        ).map((justify) => (
          <F0Box
            key={justify}
            display="flex"
            justifyContent={justify}
            padding="sm"
            background="tertiary"
            borderRadius="sm"
          >
            <Cell>{justify}</Cell>
            <Cell color="bg-f1-background-warning">B</Cell>
            <Cell color="bg-f1-background-positive">C</Cell>
          </F0Box>
        ))}
      </F0Box>

      <Label subtitle="gap controls the space between flex children (xs → 5xl)">
        Gap sizes
      </Label>

      <F0Box display="flex" flexDirection="column" gap="md">
        {(
          ["xs", "sm", "md", "lg", "xl", "2xl", "3xl", "4xl", "5xl"] as const
        ).map((g) => (
          <F0Box
            key={g}
            display="flex"
            gap={g}
            padding="sm"
            background="tertiary"
            borderRadius="sm"
          >
            <Cell>gap=&quot;{g}&quot;</Cell>
            <Cell color="bg-f1-background-warning">B</Cell>
            <Cell color="bg-f1-background-positive">C</Cell>
          </F0Box>
        ))}
      </F0Box>

      <Label subtitle="grow and shrink control how items fill available space">
        Grow / Shrink
      </Label>

      <F0Box
        display="flex"
        gap="sm"
        padding="md"
        background="tertiary"
        borderRadius="sm"
      >
        <F0Box grow padding="sm" background="info" borderRadius="sm">
          grow=true (fills space)
        </F0Box>
        <F0Box
          shrink={false}
          padding="sm"
          background="warning"
          borderRadius="sm"
        >
          shrink=false (won&apos;t compress)
        </F0Box>
      </F0Box>
    </F0Box>
  ),
}

// ═══════════════════════════════════════════════════════════════════
//  7. GRID LAYOUT
// ═══════════════════════════════════════════════════════════════════

export const GridLayout: Story = {
  render: () => (
    <F0Box display="flex" flexDirection="column" gap="xl">
      <Label subtitle="12-column grid system with colSpan and colStart">
        Grid columns
      </Label>

      <F0Box display="grid" columns="12" gap="sm">
        <F0Box
          colSpan="12"
          padding="sm"
          background="secondary"
          borderRadius="sm"
        >
          <Cell>12 cols</Cell>
        </F0Box>
        <F0Box
          colSpan="6"
          padding="sm"
          background="secondary"
          borderRadius="sm"
        >
          <Cell>6 cols</Cell>
        </F0Box>
        <F0Box
          colSpan="6"
          padding="sm"
          background="secondary"
          borderRadius="sm"
        >
          <Cell>6 cols</Cell>
        </F0Box>
        <F0Box
          colSpan="4"
          padding="sm"
          background="secondary"
          borderRadius="sm"
        >
          <Cell>4</Cell>
        </F0Box>
        <F0Box
          colSpan="4"
          padding="sm"
          background="secondary"
          borderRadius="sm"
        >
          <Cell>4</Cell>
        </F0Box>
        <F0Box
          colSpan="4"
          padding="sm"
          background="secondary"
          borderRadius="sm"
        >
          <Cell>4</Cell>
        </F0Box>
        <F0Box
          colSpan="3"
          padding="sm"
          background="secondary"
          borderRadius="sm"
        >
          <Cell>3</Cell>
        </F0Box>
        <F0Box
          colSpan="3"
          padding="sm"
          background="secondary"
          borderRadius="sm"
        >
          <Cell>3</Cell>
        </F0Box>
        <F0Box
          colSpan="3"
          padding="sm"
          background="secondary"
          borderRadius="sm"
        >
          <Cell>3</Cell>
        </F0Box>
        <F0Box
          colSpan="3"
          padding="sm"
          background="secondary"
          borderRadius="sm"
        >
          <Cell>3</Cell>
        </F0Box>
      </F0Box>

      <Label subtitle="colStart offsets the column start position">
        Grid offset (colStart)
      </Label>

      <F0Box display="grid" columns="12" gap="sm">
        <F0Box colSpan="3" padding="sm" background="info" borderRadius="sm">
          <Cell>col 1-3</Cell>
        </F0Box>
        <F0Box
          colStart="5"
          colSpan="4"
          padding="sm"
          background="warning"
          borderRadius="sm"
        >
          <Cell>col 5-8 (offset)</Cell>
        </F0Box>
        <F0Box
          colStart="10"
          colSpan="3"
          padding="sm"
          background="positive"
          borderRadius="sm"
        >
          <Cell>col 10-12</Cell>
        </F0Box>
      </F0Box>

      <Label subtitle="Dashboard layout using nested grids">
        Dashboard example
      </Label>

      <F0Box display="grid" columns="12" gap="md">
        <F0Box
          colSpan="12"
          padding="lg"
          background="primary"
          border="default"
          borderRadius="md"
        >
          Header (12 cols)
        </F0Box>
        <F0Box
          colSpan="3"
          padding="lg"
          background="secondary"
          borderRadius="md"
        >
          Sidebar
        </F0Box>
        <F0Box colSpan="9" display="grid" columns="3" gap="sm">
          {["Card 1", "Card 2", "Card 3"].map((card) => (
            <F0Box
              key={card}
              padding="md"
              background="primary"
              border="default"
              borderRadius="sm"
            >
              {card}
            </F0Box>
          ))}
          <F0Box
            colSpan="2"
            padding="md"
            background="primary"
            border="default"
            borderRadius="sm"
          >
            Wide card (2 cols)
          </F0Box>
          <F0Box
            padding="md"
            background="primary"
            border="default"
            borderRadius="sm"
          >
            Card 4
          </F0Box>
        </F0Box>
      </F0Box>
    </F0Box>
  ),
}

// ═══════════════════════════════════════════════════════════════════
//  8. DIMENSIONS
// ═══════════════════════════════════════════════════════════════════

export const Dimensions: Story = {
  render: () => (
    <F0Box display="flex" flexDirection="column" gap="xl">
      <Label subtitle="Numeric width tokens map to fixed pixel sizes (e.g. 8 = 32px, 16 = 64px)">
        Numeric widths
      </Label>

      <F0Box display="flex" flexDirection="column" gap="sm">
        {(["8", "16", "24", "32", "48", "64", "80", "96"] as const).map((w) => (
          <F0Box
            key={w}
            width={w}
            padding="xs"
            background="info"
            borderRadius="xs"
          >
            <span className="text-sm">w-{w}</span>
          </F0Box>
        ))}
      </F0Box>

      <Label subtitle="Fractional widths are relative to parent (1/2 = 50%, 1/3 = 33%, etc.)">
        Fractional widths
      </Label>

      <F0Box display="flex" flexDirection="column" gap="sm" width="full">
        {(["1/4", "1/3", "1/2", "2/3", "3/4", "full"] as const).map((w) => (
          <F0Box
            key={w}
            width={w}
            padding="xs"
            background="accent"
            borderRadius="xs"
          >
            <span className="text-sm">w-{w}</span>
          </F0Box>
        ))}
      </F0Box>

      <Label subtitle="Fixed width + height for square elements">
        Fixed size box
      </Label>

      <F0Box display="flex" gap="lg" alignItems="end">
        {(["12", "16", "24", "32", "40"] as const).map((size) => (
          <F0Box
            key={size}
            width={size}
            height={size}
            display="flex"
            alignItems="center"
            justifyContent="center"
            background="secondary"
            borderRadius="sm"
          >
            <span className="text-sm">{size}</span>
          </F0Box>
        ))}
      </F0Box>
    </F0Box>
  ),
}

// ═══════════════════════════════════════════════════════════════════
//  9. BACKGROUND
// ═══════════════════════════════════════════════════════════════════

export const Background: Story = {
  render: () => (
    <F0Box display="flex" flexDirection="column" gap="lg">
      <Label subtitle="Semantic background tokens from the design system">
        All background tokens
      </Label>

      <F0Box display="flex" gap="md" flexWrap="wrap">
        {(
          [
            "primary",
            "secondary",
            "tertiary",
            "inverse",
            "inverse-secondary",
            "bold",
            "accent",
            "accent-bold",
            "promote",
            "critical",
            "critical-bold",
            "info",
            "info-bold",
            "warning",
            "warning-bold",
            "positive",
            "positive-bold",
            "selected",
            "selected-secondary",
            "selected-bold",
            "overlay",
          ] as const
        ).map((bg) => (
          <F0Box
            key={bg}
            padding="lg"
            background={bg}
            borderRadius="sm"
            border="default"
          >
            <span className="text-sm">{bg}</span>
          </F0Box>
        ))}
      </F0Box>
    </F0Box>
  ),
}

// ═══════════════════════════════════════════════════════════════════
//  10. BORDERS — all have background for visibility
// ═══════════════════════════════════════════════════════════════════

export const BorderWidth: Story = {
  render: () => (
    <F0Box display="flex" flexDirection="column" gap="xl">
      <Label subtitle='border="default" (1px) vs border="thick" (2px) — all sides'>
        Border width (shorthand)
      </Label>

      <F0Box display="flex" gap="md" flexWrap="wrap">
        <F0Box
          padding="lg"
          border="default"
          background="secondary"
          borderRadius="sm"
        >
          border=&quot;default&quot; (1px)
        </F0Box>
        <F0Box
          padding="lg"
          border="thick"
          background="secondary"
          borderRadius="sm"
        >
          border=&quot;thick&quot; (2px)
        </F0Box>
        <F0Box
          padding="lg"
          border="none"
          background="secondary"
          borderRadius="sm"
        >
          border=&quot;none&quot; (0)
        </F0Box>
      </F0Box>
    </F0Box>
  ),
}

export const BorderPerSide: Story = {
  render: () => (
    <F0Box display="flex" flexDirection="column" gap="xl">
      <Label subtitle="Only the specified side shows a border — other sides are automatically reset to 0">
        Single side
      </Label>

      <F0Box display="flex" gap="md" flexWrap="wrap">
        <F0Box padding="lg" borderTop="default" background="secondary">
          borderTop
        </F0Box>
        <F0Box padding="lg" borderRight="default" background="secondary">
          borderRight
        </F0Box>
        <F0Box padding="lg" borderBottom="default" background="secondary">
          borderBottom
        </F0Box>
        <F0Box padding="lg" borderLeft="default" background="secondary">
          borderLeft
        </F0Box>
      </F0Box>

      <Label subtitle="Two per-side borders — only specified sides show">
        Two sides (opposite)
      </Label>

      <F0Box display="flex" gap="md" flexWrap="wrap">
        <F0Box
          padding="lg"
          borderLeft="default"
          borderRight="default"
          background="secondary"
        >
          left + right
        </F0Box>
        <F0Box
          padding="lg"
          borderTop="default"
          borderBottom="default"
          background="secondary"
        >
          top + bottom
        </F0Box>
      </F0Box>

      <Label subtitle="Two per-side borders on adjacent sides">
        Two sides (adjacent)
      </Label>

      <F0Box display="flex" gap="md" flexWrap="wrap">
        <F0Box
          padding="lg"
          borderTop="default"
          borderRight="default"
          background="secondary"
        >
          top + right
        </F0Box>
        <F0Box
          padding="lg"
          borderBottom="default"
          borderLeft="default"
          background="secondary"
        >
          bottom + left
        </F0Box>
        <F0Box
          padding="lg"
          borderTop="default"
          borderLeft="default"
          background="secondary"
        >
          top + left
        </F0Box>
        <F0Box
          padding="lg"
          borderBottom="default"
          borderRight="default"
          background="secondary"
        >
          bottom + right
        </F0Box>
      </F0Box>

      <Label subtitle="Three sides — one side excluded">Three sides</Label>

      <F0Box display="flex" gap="md" flexWrap="wrap">
        <F0Box
          padding="lg"
          borderTop="default"
          borderLeft="default"
          borderRight="default"
          background="secondary"
        >
          No bottom
        </F0Box>
        <F0Box
          padding="lg"
          borderBottom="default"
          borderLeft="default"
          borderRight="default"
          background="secondary"
        >
          No top
        </F0Box>
        <F0Box
          padding="lg"
          borderTop="default"
          borderBottom="default"
          borderRight="default"
          background="secondary"
        >
          No left
        </F0Box>
        <F0Box
          padding="lg"
          borderTop="default"
          borderBottom="default"
          borderLeft="default"
          background="secondary"
        >
          No right
        </F0Box>
      </F0Box>

      <Label subtitle="All four sides specified individually (same result as shorthand)">
        Four sides (all per-side)
      </Label>

      <F0Box display="flex" gap="md" flexWrap="wrap">
        <F0Box padding="lg" border="default" background="secondary">
          border=&quot;default&quot;
        </F0Box>
        <F0Box
          padding="lg"
          borderTop="default"
          borderRight="default"
          borderBottom="default"
          borderLeft="default"
          background="secondary"
        >
          All four per-side
        </F0Box>
      </F0Box>
    </F0Box>
  ),
}

export const BorderShorthandWithOverrides: Story = {
  render: () => (
    <F0Box display="flex" flexDirection="column" gap="xl">
      <Label subtitle='Use border shorthand for all sides, then override specific sides with "none"'>
        Shorthand + exclude sides
      </Label>

      <F0Box display="flex" gap="md" flexWrap="wrap">
        <F0Box
          padding="lg"
          border="default"
          borderTop="none"
          background="secondary"
        >
          border + borderTop=&quot;none&quot;
        </F0Box>
        <F0Box
          padding="lg"
          border="default"
          borderLeft="none"
          borderRight="none"
          background="secondary"
        >
          border + no left/right
        </F0Box>
        <F0Box
          padding="lg"
          border="default"
          borderTop="none"
          borderBottom="none"
          background="secondary"
        >
          border + no top/bottom
        </F0Box>
      </F0Box>

      <Label subtitle="Shorthand for base width + thick override on specific sides">
        Mixed widths (thick + default)
      </Label>

      <F0Box display="flex" gap="md" flexWrap="wrap">
        <F0Box
          padding="lg"
          borderTop="thick"
          borderBottom="default"
          background="secondary"
        >
          Top thick + bottom default
        </F0Box>
        <F0Box
          padding="lg"
          borderLeft="thick"
          borderRight="default"
          background="secondary"
        >
          Left thick + right default
        </F0Box>
        <F0Box
          padding="lg"
          borderTop="thick"
          borderRight="thick"
          borderBottom="default"
          borderLeft="default"
          background="secondary"
        >
          Top/right thick + bottom/left default
        </F0Box>
      </F0Box>
    </F0Box>
  ),
}

export const BorderColors: Story = {
  render: () => (
    <F0Box display="flex" flexDirection="column" gap="xl">
      <Label subtitle="borderColor applies to all borders — auto-applies default color if omitted">
        Border color tokens
      </Label>

      <F0Box display="flex" gap="md" flexWrap="wrap">
        {(
          [
            "default",
            "secondary",
            "bold",
            "selected",
            "selected-bold",
            "critical",
            "critical-bold",
            "warning",
            "warning-bold",
            "info",
            "info-bold",
            "positive",
            "positive-bold",
            "promote",
          ] as const
        ).map((color) => (
          <F0Box
            key={color}
            padding="lg"
            border="default"
            borderColor={color}
            background="secondary"
            borderRadius="sm"
          >
            <span className="text-sm">{color}</span>
          </F0Box>
        ))}
      </F0Box>

      <Label subtitle="Colored borders on specific sides">
        Per-side with color
      </Label>

      <F0Box display="flex" gap="md" flexWrap="wrap">
        <F0Box
          padding="lg"
          borderLeft="thick"
          borderColor="selected-bold"
          background="secondary"
        >
          Left accent
        </F0Box>
        <F0Box
          padding="lg"
          borderBottom="thick"
          borderColor="critical"
          background="secondary"
        >
          Bottom critical
        </F0Box>
        <F0Box
          padding="lg"
          borderTop="thick"
          borderBottom="thick"
          borderColor="positive-bold"
          background="secondary"
        >
          Top + bottom positive
        </F0Box>
      </F0Box>
    </F0Box>
  ),
}

export const BorderStyle: Story = {
  render: () => (
    <F0Box display="flex" flexDirection="column" gap="xl">
      <Label subtitle="borderStyle overrides the default solid style">
        Border styles
      </Label>

      <F0Box display="flex" gap="md" flexWrap="wrap">
        <F0Box
          padding="lg"
          border="default"
          borderStyle="solid"
          background="secondary"
          borderRadius="sm"
        >
          solid (default)
        </F0Box>
        <F0Box
          padding="lg"
          border="default"
          borderStyle="dashed"
          background="secondary"
          borderRadius="sm"
        >
          dashed
        </F0Box>
        <F0Box
          padding="lg"
          border="default"
          borderStyle="dotted"
          background="secondary"
          borderRadius="sm"
        >
          dotted
        </F0Box>
        <F0Box
          padding="lg"
          border="thick"
          borderStyle="double"
          background="secondary"
          borderRadius="sm"
        >
          double (thick)
        </F0Box>
      </F0Box>

      <Label subtitle="Dotted border on specific sides">Per-side dotted</Label>

      <F0Box display="flex" gap="md" flexWrap="wrap">
        <F0Box
          padding="lg"
          borderBottom="default"
          borderStyle="dotted"
          background="secondary"
        >
          Bottom dotted
        </F0Box>
        <F0Box
          padding="lg"
          borderLeft="thick"
          borderStyle="dashed"
          borderColor="critical"
          background="secondary"
        >
          Left dashed critical
        </F0Box>
      </F0Box>
    </F0Box>
  ),
}

export const BorderRadius: Story = {
  render: () => (
    <F0Box display="flex" flexDirection="column" gap="xl">
      <Label subtitle="borderRadius applies to all corners">
        All radius tokens
      </Label>

      <F0Box display="flex" gap="md" flexWrap="wrap" alignItems="end">
        {(
          ["none", "2xs", "xs", "sm", "md", "lg", "xl", "2xl", "full"] as const
        ).map((r) => (
          <F0Box
            key={r}
            width="24"
            height="24"
            display="flex"
            alignItems="center"
            justifyContent="center"
            background="secondary"
            border="default"
            borderRadius={r}
          >
            <span className="text-sm">{r}</span>
          </F0Box>
        ))}
      </F0Box>

      <Label subtitle="Per-corner radius for asymmetric rounding">
        Per-corner radius
      </Label>

      <F0Box display="flex" gap="md" flexWrap="wrap">
        <F0Box
          padding="lg"
          background="secondary"
          border="default"
          borderRadiusTopLeft="xl"
          borderRadiusBottomRight="xl"
        >
          Diagonal corners (TL + BR)
        </F0Box>
        <F0Box
          padding="lg"
          background="secondary"
          border="default"
          borderRadiusTopRight="xl"
          borderRadiusBottomLeft="xl"
        >
          Diagonal corners (TR + BL)
        </F0Box>
        <F0Box
          padding="lg"
          background="secondary"
          border="default"
          borderRadiusTopLeft="2xl"
          borderRadiusTopRight="2xl"
        >
          Rounded top only
        </F0Box>
        <F0Box
          padding="lg"
          background="secondary"
          border="default"
          borderRadiusBottomLeft="2xl"
          borderRadiusBottomRight="2xl"
        >
          Rounded bottom only
        </F0Box>
      </F0Box>
    </F0Box>
  ),
}

// ═══════════════════════════════════════════════════════════════════
//  11. OVERFLOW
// ═══════════════════════════════════════════════════════════════════

export const Overflow: Story = {
  render: () => (
    <F0Box display="flex" flexDirection="column" gap="xl">
      <Label subtitle="overflow controls content that exceeds the box dimensions">
        Overflow variants
      </Label>

      <F0Box display="flex" gap="md" flexWrap="wrap">
        <F0Box
          width="48"
          height="24"
          overflow="hidden"
          padding="md"
          background="secondary"
          border="default"
          borderRadius="sm"
        >
          overflow=&quot;hidden&quot; — This very long text is clipped at the
          box boundary and won&apos;t expand the container.
        </F0Box>
        <F0Box
          width="48"
          height="24"
          overflow="auto"
          padding="md"
          background="secondary"
          border="default"
          borderRadius="sm"
        >
          overflow=&quot;auto&quot; — This long text gets a scrollbar when it
          exceeds the container size.
        </F0Box>
        <F0Box
          width="48"
          height="24"
          overflow="scroll"
          padding="md"
          background="secondary"
          border="default"
          borderRadius="sm"
        >
          overflow=&quot;scroll&quot; — Always shows scrollbar even with short
          content.
        </F0Box>
      </F0Box>
    </F0Box>
  ),
}

// ═══════════════════════════════════════════════════════════════════
//  12. DIVIDERS
// ═══════════════════════════════════════════════════════════════════

export const Dividers: Story = {
  render: () => (
    <F0Box display="flex" flexDirection="column" gap="xl">
      <Label subtitle='divider="y" adds horizontal lines between stacked children'>
        Vertical dividers (between rows)
      </Label>

      <F0Box
        display="flex"
        flexDirection="column"
        divider="y"
        background="primary"
        border="default"
        borderRadius="md"
      >
        <F0Box padding="md">Section 1</F0Box>
        <F0Box padding="md">Section 2</F0Box>
        <F0Box padding="md">Section 3</F0Box>
      </F0Box>

      <Label subtitle='divider="x" adds vertical lines between inline children'>
        Horizontal dividers (between columns)
      </Label>

      <F0Box
        display="flex"
        divider="x"
        background="primary"
        border="default"
        borderRadius="md"
        alignItems="stretch"
      >
        <F0Box paddingX="lg" paddingY="md">
          Column 1
        </F0Box>
        <F0Box paddingX="lg" paddingY="md">
          Column 2
        </F0Box>
        <F0Box paddingX="lg" paddingY="md">
          Column 3
        </F0Box>
      </F0Box>

      <Label subtitle="Custom divider color">Divider with color</Label>

      <F0Box
        display="flex"
        flexDirection="column"
        divider="y"
        dividerColor="critical"
        background="primary"
        border="default"
        borderRadius="md"
      >
        <F0Box padding="md">Critical divider 1</F0Box>
        <F0Box padding="md">Critical divider 2</F0Box>
        <F0Box padding="md">Critical divider 3</F0Box>
      </F0Box>
    </F0Box>
  ),
}

// ═══════════════════════════════════════════════════════════════════
//  13. RESPONSIVE
// ═══════════════════════════════════════════════════════════════════

export const ResponsivePadding: Story = {
  render: () => (
    <F0Box
      padding="sm"
      sm={{ padding: "md" }}
      md={{ padding: "lg" }}
      lg={{ padding: "xl" }}
      xl={{ padding: "2xl" }}
      background="tertiary"
      borderRadius="md"
    >
      Padding grows with viewport: sm → md → lg → xl → 2xl
      <br />
      <span className="text-sm text-f1-foreground-secondary">
        Resize the browser to see the padding change
      </span>
    </F0Box>
  ),
}

export const ResponsiveFlexDirection: Story = {
  render: () => (
    <F0Box
      display="flex"
      flexDirection="column"
      gap="md"
      padding="lg"
      background="tertiary"
      borderRadius="md"
      sm={{ flexDirection: "row" }}
    >
      <Cell>Stacked on mobile</Cell>
      <Cell color="bg-f1-background-warning">Row on sm+</Cell>
      <Cell color="bg-f1-background-positive">Responsive!</Cell>
    </F0Box>
  ),
}

export const ResponsiveGrid: Story = {
  render: () => (
    <F0Box
      display="grid"
      columns="1"
      gap="md"
      padding="lg"
      sm={{ columns: "2" }}
      md={{ columns: "3" }}
      lg={{ columns: "4" }}
    >
      {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
        <F0Box
          key={n}
          padding="md"
          background="primary"
          border="default"
          borderRadius="sm"
        >
          Card {n}
        </F0Box>
      ))}
    </F0Box>
  ),
}

export const ResponsiveDashboard: Story = {
  render: () => (
    <F0Box
      display="grid"
      columns="1"
      gap="lg"
      padding="lg"
      sm={{ columns: "12" }}
    >
      <F0Box
        colSpan="full"
        sm={{ colSpan: "12" }}
        padding="lg"
        background="primary"
        border="default"
        borderRadius="md"
      >
        Header (full width, always)
      </F0Box>
      <F0Box
        colSpan="full"
        sm={{ colSpan: "3" }}
        padding="lg"
        background="secondary"
        borderRadius="md"
      >
        Sidebar (full on mobile → 3 cols on sm+)
      </F0Box>
      <F0Box
        colSpan="full"
        display="grid"
        columns="1"
        gap="md"
        sm={{ colSpan: "9", columns: "3" }}
      >
        {["Card 1", "Card 2", "Card 3"].map((card) => (
          <F0Box
            key={card}
            padding="lg"
            background="primary"
            border="default"
            borderRadius="md"
          >
            {card}
          </F0Box>
        ))}
      </F0Box>
    </F0Box>
  ),
}

export const ResponsiveDisplay: Story = {
  render: () => (
    <F0Box display="flex" flexDirection="column" gap="md">
      <F0Box
        padding="md"
        background="info"
        borderRadius="sm"
        sm={{ display: "none" }}
      >
        Visible only on mobile (hidden on sm+)
      </F0Box>
      <F0Box
        display="none"
        padding="md"
        background="positive"
        borderRadius="sm"
        sm={{ display: "block" }}
      >
        Hidden on mobile, visible on sm+
      </F0Box>
      <F0Box padding="md" background="tertiary" borderRadius="sm">
        Always visible
      </F0Box>
    </F0Box>
  ),
}

// ═══════════════════════════════════════════════════════════════════
//  14. NESTED / REAL-WORLD COMPOSITIONS
// ═══════════════════════════════════════════════════════════════════

export const NestedLayout: Story = {
  render: () => (
    <F0Box
      display="flex"
      flexDirection="column"
      gap="lg"
      padding="xl"
      background="tertiary"
      borderRadius="lg"
    >
      <F0Box
        padding="lg"
        background="primary"
        border="default"
        borderRadius="md"
      >
        Section 1 — simple content
      </F0Box>
      <F0Box
        display="flex"
        gap="md"
        padding="lg"
        background="primary"
        border="default"
        borderRadius="md"
      >
        <Cell>Flex child A</Cell>
        <Cell color="bg-f1-background-warning">Flex child B</Cell>
        <Cell color="bg-f1-background-positive">Flex child C</Cell>
      </F0Box>
      <F0Box
        display="flex"
        justifyContent="between"
        alignItems="center"
        padding="lg"
        background="primary"
        border="default"
        borderRadius="md"
      >
        <span>Space between layout</span>
        <Cell color="bg-f1-background-accent">Action</Cell>
      </F0Box>
    </F0Box>
  ),
}

export const ResponsiveDashboardExample: Story = {
  render: () => (
    <F0Box display="flex" flexDirection="column" gap="lg">
      {/* ─── Top bar ─── */}
      <F0Box
        display="flex"
        flexDirection="column"
        gap="md"
        justifyContent="between"
        alignItems="start"
        sm={{ flexDirection: "row", alignItems: "center" }}
      >
        <F0Box display="flex" flexDirection="column" gap="xs">
          <F0Heading content="Business Dashboard" variant="heading-large" />
          <F0Text
            content="Overview of your company performance and team activity"
            variant="description"
          />
        </F0Box>
        <F0Box display="flex" gap="sm">
          <F0Button variant="neutral" size="md" label="Export" />
          <F0Button variant="default" size="md" label="New Report" />
        </F0Box>
      </F0Box>

      {/* ─── KPI Row ─── */}
      <Label subtitle="Responsive KPI cards: 1 col mobile → 2 cols sm → 4 cols lg">
        KPI Cards
      </Label>

      <F0Box
        display="grid"
        columns="1"
        gap="md"
        sm={{ columns: "2" }}
        lg={{ columns: "4" }}
      >
        {[
          {
            title: "Total Revenue",
            value: "$482,500",
            change: "+12.5%",
            up: true,
            icon: DollarBill,
            bars: [35, 50, 45, 60, 55, 70, 80, 75, 90, 85, 95, 100],
          },
          {
            title: "Active Users",
            value: "2,847",
            change: "+8.2%",
            up: true,
            icon: Graph,
            bars: [40, 45, 55, 50, 65, 70, 60, 75, 85, 80, 90, 88],
          },
          {
            title: "Avg. Session",
            value: "4m 32s",
            change: "-3.1%",
            up: false,
            icon: Clock,
            bars: [80, 75, 70, 65, 72, 68, 60, 55, 58, 52, 50, 48],
          },
          {
            title: "Open Issues",
            value: "23",
            change: "-18%",
            up: false,
            icon: AlertCircle,
            bars: [90, 85, 70, 65, 55, 50, 45, 40, 35, 30, 28, 25],
          },
        ].map((kpi) => (
          <F0Box
            key={kpi.title}
            display="flex"
            flexDirection="column"
            gap="md"
            padding="lg"
            background="primary"
            border="default"
            borderRadius="md"
          >
            <F0Box display="flex" justifyContent="between" alignItems="center">
              <F0Text content={kpi.title} variant="description" />
              <F0Icon icon={kpi.icon} size="sm" color="secondary" />
            </F0Box>
            <span className="text-2xl font-semibold">{kpi.value}</span>
            <F0Box display="flex" gap="xs" alignItems="end" height="8">
              {kpi.bars.map((h, i) => (
                <F0Box
                  key={i}
                  grow
                  background={kpi.up ? "positive-bold" : "warning-bold"}
                  borderRadius="xs"
                  height={
                    String(Math.max(1, Math.round((h / 100) * 8))) as
                      | "1"
                      | "2"
                      | "3"
                      | "4"
                      | "5"
                      | "6"
                      | "7"
                      | "8"
                  }
                />
              ))}
            </F0Box>
            <F0Box display="flex" alignItems="center" gap="xs">
              <F0Icon
                icon={kpi.up ? ArrowUp : ArrowDown}
                size="xs"
                color={kpi.up ? "positive" : "critical"}
              />
              <span
                className={`text-sm font-medium ${kpi.up ? "text-f1-foreground-positive" : "text-f1-foreground-critical"}`}
              >
                {kpi.change}
              </span>
              <F0Text content="vs last month" variant="description" />
            </F0Box>
          </F0Box>
        ))}
      </F0Box>

      {/* ─── Main content: Table (8 cols) + Sidebar (4 cols) — stacked on mobile ─── */}
      <F0Box display="grid" columns="1" gap="lg" lg={{ columns: "12" }}>
        {/* ─── Recent Orders ─── */}
        <F0Box
          colSpan="full"
          lg={{ colSpan: "8" }}
          background="primary"
          border="default"
          borderRadius="md"
          overflow="hidden"
          display="flex"
          flexDirection="column"
        >
          <F0Box
            paddingX="lg"
            paddingY="md"
            display="flex"
            justifyContent="between"
            alignItems="center"
            borderBottom="default"
          >
            <F0Heading content="Recent Orders" />
            <F0Button variant="neutral" size="sm" label="View All" />
          </F0Box>

          {/* Table header — hidden on mobile */}
          <F0Box
            display="none"
            sm={{ display: "grid" }}
            columns="12"
            gap="md"
            paddingX="lg"
            paddingY="sm"
            background="secondary"
          >
            <F0Box colSpan="4">
              <F0Text content="Customer" variant="description" />
            </F0Box>
            <F0Box colSpan="3">
              <F0Text content="Product" variant="description" />
            </F0Box>
            <F0Box colSpan="2">
              <F0Text content="Amount" variant="description" />
            </F0Box>
            <F0Box colSpan="3">
              <F0Text content="Status" variant="description" />
            </F0Box>
          </F0Box>

          <F0Box display="flex" flexDirection="column" divider="y">
            {[
              {
                first: "Sarah",
                last: "Connor",
                product: "Pro Plan",
                amount: "$299",
                status: "positive" as const,
                statusText: "Completed",
              },
              {
                first: "James",
                last: "Wilson",
                product: "Enterprise",
                amount: "$1,200",
                status: "warning" as const,
                statusText: "Pending",
              },
              {
                first: "Emily",
                last: "Zhang",
                product: "Starter",
                amount: "$49",
                status: "positive" as const,
                statusText: "Completed",
              },
              {
                first: "Marcus",
                last: "Brown",
                product: "Pro Plan",
                amount: "$299",
                status: "critical" as const,
                statusText: "Cancelled",
              },
              {
                first: "Ana",
                last: "García",
                product: "Enterprise",
                amount: "$1,200",
                status: "info" as const,
                statusText: "Processing",
              },
            ].map((order) => (
              <F0Box
                key={order.first}
                display="flex"
                flexDirection="column"
                gap="sm"
                paddingX="lg"
                paddingY="md"
                sm={{ display: "grid" }}
                columns="12"
                alignItems="center"
              >
                <F0Box
                  colSpan="full"
                  sm={{ colSpan: "4" }}
                  display="flex"
                  alignItems="center"
                  gap="md"
                >
                  <F0AvatarPerson
                    firstName={order.first}
                    lastName={order.last}
                    size="sm"
                  />
                  <F0Text content={`${order.first} ${order.last}`} />
                </F0Box>
                <F0Box colSpan="full" sm={{ colSpan: "3" }}>
                  <F0TagDot text={order.product} color="viridian" />
                </F0Box>
                <F0Box colSpan="full" sm={{ colSpan: "2" }}>
                  <span className="text-sm font-medium">{order.amount}</span>
                </F0Box>
                <F0Box colSpan="full" sm={{ colSpan: "3" }}>
                  <F0TagStatus text={order.statusText} variant={order.status} />
                </F0Box>
              </F0Box>
            ))}
          </F0Box>
        </F0Box>

        {/* ─── Sidebar ─── */}
        <F0Box
          colSpan="full"
          lg={{ colSpan: "4" }}
          display="flex"
          flexDirection="column"
          gap="lg"
        >
          {/* Team Members */}
          <F0Box
            background="primary"
            border="default"
            borderRadius="md"
            overflow="hidden"
            display="flex"
            flexDirection="column"
          >
            <F0Box
              paddingX="lg"
              paddingY="md"
              borderBottom="default"
              display="flex"
              justifyContent="between"
              alignItems="center"
            >
              <F0Heading content="Team" />
              <Badge variant="neutral">8 members</Badge>
            </F0Box>

            <F0Box display="flex" flexDirection="column" divider="y">
              {[
                {
                  first: "Laura",
                  last: "Martínez",
                  role: "Product Manager",
                  status: "positive" as const,
                },
                {
                  first: "David",
                  last: "Kim",
                  role: "Lead Engineer",
                  status: "positive" as const,
                },
                {
                  first: "Sophie",
                  last: "Bernard",
                  role: "UX Designer",
                  status: "warning" as const,
                },
                {
                  first: "Alex",
                  last: "Nowak",
                  role: "Data Analyst",
                  status: "neutral" as const,
                },
              ].map((member) => (
                <F0Box
                  key={member.first}
                  display="flex"
                  gap="md"
                  paddingX="lg"
                  paddingY="md"
                  alignItems="center"
                >
                  <F0AvatarPerson
                    firstName={member.first}
                    lastName={member.last}
                    size="sm"
                  />
                  <F0Box display="flex" flexDirection="column" gap="xs" grow>
                    <F0Text content={`${member.first} ${member.last}`} />
                    <F0Text content={member.role} variant="description" />
                  </F0Box>
                  <F0TagStatus
                    text={
                      member.status === "positive"
                        ? "Online"
                        : member.status === "warning"
                          ? "Away"
                          : "Offline"
                    }
                    variant={member.status}
                  />
                </F0Box>
              ))}
            </F0Box>
          </F0Box>

          {/* Recent Activity */}
          <F0Box
            background="primary"
            border="default"
            borderRadius="md"
            overflow="hidden"
            display="flex"
            flexDirection="column"
          >
            <F0Box paddingX="lg" paddingY="md" borderBottom="default">
              <F0Heading content="Activity" />
            </F0Box>

            <F0Box display="flex" flexDirection="column" divider="y">
              {[
                {
                  icon: CheckCircle,
                  title: "Sprint completed",
                  time: "2h ago",
                  tag: "Engineering",
                },
                {
                  icon: ChartLine,
                  title: "Report published",
                  time: "5h ago",
                  tag: "Analytics",
                },
                {
                  icon: Briefcase,
                  title: "New client onboarded",
                  time: "Yesterday",
                  tag: "Sales",
                },
                {
                  icon: Person,
                  title: "3 new hires started",
                  time: "2 days ago",
                  tag: "HR",
                },
              ].map((activity, i) => (
                <F0Box
                  key={i}
                  display="flex"
                  gap="md"
                  paddingX="lg"
                  paddingY="md"
                  alignItems="start"
                >
                  <F0Icon icon={activity.icon} size="sm" color="secondary" />
                  <F0Box display="flex" flexDirection="column" gap="xs" grow>
                    <F0Text content={activity.title} />
                    <F0Box display="flex" gap="sm" alignItems="center">
                      <F0Text content={activity.time} variant="description" />
                      <Badge variant="neutral">{activity.tag}</Badge>
                    </F0Box>
                  </F0Box>
                </F0Box>
              ))}
            </F0Box>
          </F0Box>
        </F0Box>
      </F0Box>
    </F0Box>
  ),
}

export const ListWithDividers: Story = {
  render: () => (
    <F0Box
      display="flex"
      flexDirection="column"
      divider="y"
      border="default"
      borderRadius="md"
      background="primary"
      overflow="hidden"
    >
      {["John Doe", "Jane Smith", "Bob Johnson", "Alice Brown"].map((name) => (
        <F0Box
          key={name}
          display="flex"
          justifyContent="between"
          alignItems="center"
          paddingX="lg"
          paddingY="md"
        >
          <F0Text content={name} />
          <F0Button variant="neutral" size="md" label="View" />
        </F0Box>
      ))}
    </F0Box>
  ),
}

// ═══════════════════════════════════════════════════════════════════
//  15. TOKEN REFERENCE — pixel values for all semantic tokens
// ═══════════════════════════════════════════════════════════════════

const TokenRow = ({
  token,
  px,
  twClass,
}: {
  token: string
  px: string
  twClass: string
}) => (
  <F0Box
    display="flex"
    alignItems="center"
    gap="md"
    paddingX="lg"
    paddingY="sm"
  >
    <F0Box width="12">
      <span className="text-sm font-semibold text-f1-foreground">{token}</span>
    </F0Box>
    <F0Box width="16">
      <span className="text-sm font-mono text-f1-foreground-secondary">
        {twClass}
      </span>
    </F0Box>
    <F0Box width="12">
      <span className="text-sm font-mono text-f1-foreground-secondary">
        {px}
      </span>
    </F0Box>
    <F0Box grow display="flex" alignItems="center">
      <div
        className="h-3 rounded-sm bg-f1-background-selected-bold"
        style={{ width: px }}
      />
    </F0Box>
  </F0Box>
)

const SectionHeader = ({ children }: { children: React.ReactNode }) => (
  <F0Box paddingX="lg" paddingY="sm" background="tertiary">
    <span className="text-base font-semibold text-f1-foreground">
      {children}
    </span>
  </F0Box>
)

const ColumnHeaders = () => (
  <F0Box
    display="flex"
    alignItems="center"
    gap="md"
    paddingX="lg"
    paddingY="xs"
    background="secondary"
  >
    <F0Box width="12">
      <span className="text-sm font-semibold text-f1-foreground-secondary">
        Token
      </span>
    </F0Box>
    <F0Box width="16">
      <span className="text-sm font-semibold text-f1-foreground-secondary">
        Tailwind
      </span>
    </F0Box>
    <F0Box width="12">
      <span className="text-sm font-semibold text-f1-foreground-secondary">
        Value
      </span>
    </F0Box>
    <F0Box grow>
      <span className="text-sm font-semibold text-f1-foreground-secondary">
        Preview
      </span>
    </F0Box>
  </F0Box>
)

export const TokenReference: Story = {
  render: () => (
    <F0Box display="flex" flexDirection="column" gap="xl">
      <Label subtitle="Visual reference of all F0Box design tokens and their pixel values">
        Token Reference
      </Label>

      {/* Padding / Margin tokens */}
      <F0Box
        display="flex"
        flexDirection="column"
        border="default"
        borderRadius="md"
        overflow="hidden"
        divider="y"
      >
        <SectionHeader>
          Padding / Margin — padding, paddingX, paddingY, margin, etc.
        </SectionHeader>
        <ColumnHeaders />
        <TokenRow token="none" twClass="p-0" px="0px" />
        <TokenRow token="xs" twClass="p-1" px="4px" />
        <TokenRow token="sm" twClass="p-2" px="8px" />
        <TokenRow token="md" twClass="p-3" px="12px" />
        <TokenRow token="lg" twClass="p-4" px="16px" />
        <TokenRow token="xl" twClass="p-6" px="24px" />
        <TokenRow token="2xl" twClass="p-8" px="32px" />
        <TokenRow token="3xl" twClass="p-10" px="40px" />
        <TokenRow token="4xl" twClass="p-12" px="48px" />
        <TokenRow token="5xl" twClass="p-16" px="64px" />
      </F0Box>

      {/* Gap tokens — shown with actual gap between boxes */}
      <F0Box
        display="flex"
        flexDirection="column"
        border="default"
        borderRadius="md"
        overflow="hidden"
        divider="y"
      >
        <SectionHeader>Gap — space between flex/grid children</SectionHeader>
        {(
          [
            { token: "none", px: "0px" },
            { token: "xs", px: "2px" },
            { token: "sm", px: "4px" },
            { token: "md", px: "8px" },
            { token: "lg", px: "12px" },
            { token: "xl", px: "16px" },
            { token: "2xl", px: "24px" },
            { token: "3xl", px: "32px" },
            { token: "4xl", px: "40px" },
            { token: "5xl", px: "48px" },
          ] as const
        ).map((g) => (
          <F0Box
            key={g.token}
            display="flex"
            alignItems="center"
            gap="lg"
            paddingX="lg"
            paddingY="sm"
          >
            <F0Box width="12">
              <span className="text-sm font-semibold text-f1-foreground">
                {g.token}
              </span>
            </F0Box>
            <F0Box width="12">
              <span className="text-sm font-mono text-f1-foreground-secondary">
                {g.px}
              </span>
            </F0Box>
            <F0Box grow display="flex" alignItems="center">
              <F0Box display="flex" gap={g.token} alignItems="center">
                <F0Box
                  width="10"
                  height="6"
                  background="selected-bold"
                  borderRadius="xs"
                />
                <F0Box
                  width="10"
                  height="6"
                  background="selected-bold"
                  borderRadius="xs"
                />
              </F0Box>
            </F0Box>
          </F0Box>
        ))}
      </F0Box>

      {/* Border Radius tokens */}
      <F0Box
        display="flex"
        flexDirection="column"
        border="default"
        borderRadius="md"
        overflow="hidden"
        divider="y"
      >
        <SectionHeader>Border Radius</SectionHeader>
        <F0Box
          display="flex"
          alignItems="center"
          gap="md"
          paddingX="lg"
          paddingY="xs"
          background="secondary"
        >
          <F0Box width="12">
            <span className="text-sm font-semibold text-f1-foreground-secondary">
              Token
            </span>
          </F0Box>
          <F0Box grow>
            <span className="text-sm font-semibold text-f1-foreground-secondary">
              Preview
            </span>
          </F0Box>
        </F0Box>
        {(
          [
            { token: "none", label: "0px" },
            { token: "2xs", label: "2px" },
            { token: "xs", label: "4px" },
            { token: "sm", label: "6px" },
            { token: "md", label: "8px" },
            { token: "lg", label: "12px" },
            { token: "xl", label: "16px" },
            { token: "2xl", label: "20px" },
            { token: "full", label: "9999px" },
          ] as const
        ).map((r) => (
          <F0Box
            key={r.token}
            display="flex"
            alignItems="center"
            gap="md"
            paddingX="lg"
            paddingY="sm"
          >
            <F0Box width="12">
              <span className="text-sm font-semibold text-f1-foreground">
                {r.token}
              </span>
            </F0Box>
            <F0Box display="flex" alignItems="center" gap="sm">
              <F0Box
                width="12"
                height="12"
                background="selected-bold"
                borderRadius={r.token}
              />
              <span className="text-sm font-mono text-f1-foreground-secondary">
                {r.label}
              </span>
            </F0Box>
          </F0Box>
        ))}
      </F0Box>

      {/* Border Width tokens */}
      <F0Box
        display="flex"
        flexDirection="column"
        border="default"
        borderRadius="md"
        overflow="hidden"
        divider="y"
      >
        <SectionHeader>Border Width</SectionHeader>
        {(
          [
            { token: "none", px: "0px" },
            { token: "default", px: "1px" },
            { token: "thick", px: "2px" },
          ] as const
        ).map((b) => (
          <F0Box
            key={b.token}
            display="flex"
            alignItems="center"
            gap="md"
            paddingX="lg"
            paddingY="sm"
          >
            <F0Box width="12">
              <span className="text-sm font-semibold text-f1-foreground">
                {b.token}
              </span>
            </F0Box>
            <F0Box display="flex" alignItems="center" gap="sm">
              <F0Box
                width="16"
                height="10"
                border={b.token}
                borderColor="selected-bold"
                borderRadius="sm"
                background="secondary"
              />
              <span className="text-sm font-mono text-f1-foreground-secondary">
                {b.px}
              </span>
            </F0Box>
          </F0Box>
        ))}
      </F0Box>
    </F0Box>
  ),
}
