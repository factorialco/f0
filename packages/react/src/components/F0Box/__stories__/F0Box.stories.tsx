import type { Meta, StoryObj } from "@storybook/react-vite"
import { ComponentProps } from "react"

import { F0Box } from "../index"

const spacingOptions = [undefined, "none", "xs", "sm", "md", "lg", "xl", "2xl"]
const marginOptions = [
  undefined,
  "none",
  "xs",
  "sm",
  "md",
  "lg",
  "xl",
  "2xl",
  "auto",
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
  "3",
  "4",
  "5",
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
const borderOptions = [undefined, "none", "default", "thick"]
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
const overflowOptions = [undefined, "visible", "hidden", "auto", "scroll"]
const backgroundOptions = [
  undefined,
  "transparent",
  "primary",
  "secondary",
  "tertiary",
  "inverse",
  "bold",
  "accent",
  "promote",
  "critical",
  "info",
  "warning",
  "positive",
  "selected",
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

const meta = {
  title: "Box",
  component: F0Box,
  argTypes: {
    display: {
      control: "select",
      options: ["block", "flex", "inline", "inline-flex", "grid", "none"],
    },
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
    gap: {
      control: "select",
      options: [undefined, "none", "sm", "md", "lg", "xl"],
    },
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
    // Background
    background: { control: "select", options: backgroundOptions },
    // Border
    borderColor: { control: "select", options: borderColorOptions },
    border: { control: "select", options: borderOptions },
    borderTop: { control: "select", options: borderOptions },
    borderBottom: { control: "select", options: borderOptions },
    borderLeft: { control: "select", options: borderOptions },
    borderRight: { control: "select", options: borderOptions },
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
    divider: {
      control: "select",
      options: [undefined, "x", "y"],
    },
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
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs", "stable"],
} satisfies Meta<ComponentProps<typeof F0Box>>

export default meta
type Story = StoryObj<typeof meta>

const PlaceholderBlock = ({
  children,
  color = "bg-f1-background-info",
}: {
  children: React.ReactNode
  color?: string
}) => (
  <div
    className={`${color} flex items-center justify-center rounded-sm px-3 py-2 text-sm text-f1-foreground`}
  >
    {children}
  </div>
)

export const Default: Story = {
  args: {
    padding: "lg",
    background: "secondary",
    borderRadius: "md",
    children: "A simple box with padding and background",
  },
}

export const WithBorder: Story = {
  args: {
    padding: "lg",
    border: "default",
    borderRadius: "md",
    children: "Box with border and rounded corners",
  },
}

export const FlexLayout: Story = {
  args: {
    display: "flex",
    gap: "md",
    padding: "lg",
    background: "tertiary",
    borderRadius: "sm",
    alignItems: "center",
  },
  render: (args) => (
    <F0Box {...args}>
      <PlaceholderBlock>Item 1</PlaceholderBlock>
      <PlaceholderBlock>Item 2</PlaceholderBlock>
      <PlaceholderBlock>Item 3</PlaceholderBlock>
    </F0Box>
  ),
}

export const Grid12Columns: Story = {
  args: {
    display: "grid",
    columns: "12",
    gap: "md",
    padding: "lg",
    background: "tertiary",
    borderRadius: "md",
  },
  render: (args) => (
    <F0Box {...args}>
      <F0Box colSpan="8" padding="md" background="primary" borderRadius="sm">
        colSpan 8
      </F0Box>
      <F0Box colSpan="4" padding="md" background="primary" borderRadius="sm">
        colSpan 4
      </F0Box>
      <F0Box colSpan="4" padding="md" background="primary" borderRadius="sm">
        colSpan 4
      </F0Box>
      <F0Box colSpan="4" padding="md" background="primary" borderRadius="sm">
        colSpan 4
      </F0Box>
      <F0Box colSpan="4" padding="md" background="primary" borderRadius="sm">
        colSpan 4
      </F0Box>
      <F0Box colSpan="6" padding="md" background="primary" borderRadius="sm">
        colSpan 6
      </F0Box>
      <F0Box colSpan="6" padding="md" background="primary" borderRadius="sm">
        colSpan 6
      </F0Box>
      <F0Box colSpan="full" padding="md" background="primary" borderRadius="sm">
        colSpan full
      </F0Box>
    </F0Box>
  ),
}

export const GridWithOffset: Story = {
  args: {
    display: "grid",
    columns: "12",
    gap: "md",
    padding: "lg",
    background: "tertiary",
    borderRadius: "md",
  },
  render: (args) => (
    <F0Box {...args}>
      <F0Box
        colSpan="3"
        padding="md"
        background="primary"
        border="default"
        borderRadius="sm"
      >
        col 1-3
      </F0Box>
      <F0Box
        colStart="5"
        colSpan="4"
        padding="md"
        background="selected"
        border="default"
        borderColor="selected"
        borderRadius="sm"
      >
        col 5-8 (offset)
      </F0Box>
      <F0Box
        colStart="10"
        colSpan="3"
        padding="md"
        background="primary"
        border="default"
        borderRadius="sm"
      >
        col 10-12
      </F0Box>
    </F0Box>
  ),
}

export const GridDashboard: Story = {
  render: () => (
    <F0Box display="grid" columns="12" gap="lg" padding="lg">
      <F0Box
        colSpan="12"
        padding="lg"
        background="primary"
        border="default"
        borderRadius="md"
      >
        Header (12 cols)
      </F0Box>
      <F0Box colSpan="3" padding="lg" background="secondary" borderRadius="md">
        Sidebar (3 cols)
      </F0Box>
      <F0Box colSpan="9" display="grid" columns="3" gap="md">
        <F0Box
          padding="lg"
          background="primary"
          border="default"
          borderRadius="md"
        >
          Card 1
        </F0Box>
        <F0Box
          padding="lg"
          background="primary"
          border="default"
          borderRadius="md"
        >
          Card 2
        </F0Box>
        <F0Box
          padding="lg"
          background="primary"
          border="default"
          borderRadius="md"
        >
          Card 3
        </F0Box>
        <F0Box
          colSpan="2"
          padding="lg"
          background="primary"
          border="default"
          borderRadius="md"
        >
          Wide card (2 cols)
        </F0Box>
        <F0Box
          padding="lg"
          background="primary"
          border="default"
          borderRadius="md"
        >
          Card 4
        </F0Box>
      </F0Box>
    </F0Box>
  ),
}

export const NumericWidths: Story = {
  render: () => (
    <F0Box display="flex" flexDirection="column" gap="sm">
      {(["8", "16", "24", "32", "48", "64", "80", "96"] as const).map((w) => (
        <F0Box
          key={w}
          width={w}
          padding="sm"
          background="info"
          borderRadius="xs"
        >
          w-{w}
        </F0Box>
      ))}
    </F0Box>
  ),
}

export const FractionalWidths: Story = {
  render: () => (
    <F0Box display="flex" flexDirection="column" gap="sm" width="full">
      {(["1/4", "1/3", "1/2", "2/3", "3/4", "full"] as const).map((w) => (
        <F0Box
          key={w}
          width={w}
          padding="sm"
          background="accent"
          borderRadius="xs"
        >
          w-{w}
        </F0Box>
      ))}
    </F0Box>
  ),
}

export const GranularPadding: Story = {
  args: {
    paddingTop: "xs",
    paddingBottom: "2xl",
    paddingLeft: "lg",
    paddingRight: "sm",
    background: "tertiary",
    borderRadius: "md",
    children:
      "Different padding on each side (top xs, bottom 2xl, left lg, right sm)",
  },
}

export const CenteredWithAutoMargin: Story = {
  args: {
    marginX: "auto",
    width: "64",
    padding: "lg",
    background: "secondary",
    borderRadius: "md",
    children: "Centered with marginX auto",
  },
}

export const PerSideBorder: Story = {
  args: {
    padding: "lg",
    borderBottom: "default",
    borderColor: "secondary",
    children: "Only bottom border",
  },
}

export const PerCornerRadius: Story = {
  args: {
    padding: "lg",
    background: "secondary",
    border: "default",
    borderRadiusTopLeft: "xl",
    borderRadiusTopRight: "none",
    borderRadiusBottomLeft: "none",
    borderRadiusBottomRight: "xl",
    children: "Diagonal rounded corners (top-left xl, bottom-right xl)",
  },
}

export const DividerVertical: Story = {
  args: {
    display: "flex",
    flexDirection: "column",
    divider: "y",
    dividerColor: "secondary",
    padding: "lg",
    background: "primary",
    border: "default",
    borderRadius: "md",
  },
  render: (args) => (
    <F0Box {...args}>
      <F0Box padding="md">Section 1</F0Box>
      <F0Box padding="md">Section 2</F0Box>
      <F0Box padding="md">Section 3</F0Box>
    </F0Box>
  ),
}

export const DividerHorizontal: Story = {
  args: {
    display: "flex",
    flexDirection: "row",
    divider: "x",
    dividerColor: "default",
    padding: "lg",
    background: "primary",
    border: "default",
    borderRadius: "md",
    alignItems: "stretch",
  },
  render: (args) => (
    <F0Box {...args}>
      <F0Box paddingX="md">Column 1</F0Box>
      <F0Box paddingX="md">Column 2</F0Box>
      <F0Box paddingX="md">Column 3</F0Box>
    </F0Box>
  ),
}

export const Nested: Story = {
  render: () => (
    <F0Box
      display="flex"
      flexDirection="column"
      gap="lg"
      padding="xl"
      background="secondary"
      borderRadius="md"
    >
      <F0Box
        padding="md"
        background="primary"
        border="default"
        borderRadius="sm"
      >
        Section 1 content
      </F0Box>
      <F0Box
        padding="md"
        background="primary"
        border="default"
        borderRadius="sm"
      >
        Section 2 content
      </F0Box>
      <F0Box
        display="flex"
        gap="md"
        padding="md"
        background="primary"
        border="default"
        borderRadius="sm"
      >
        <PlaceholderBlock>A</PlaceholderBlock>
        <PlaceholderBlock>B</PlaceholderBlock>
        <PlaceholderBlock>C</PlaceholderBlock>
      </F0Box>
    </F0Box>
  ),
}

export const SpaceBetween: Story = {
  args: {
    display: "flex",
    justifyContent: "between",
    alignItems: "center",
    padding: "lg",
    background: "tertiary",
    border: "default",
    borderRadius: "sm",
    width: "full",
  },
  render: (args) => (
    <F0Box {...args}>
      <PlaceholderBlock>Left</PlaceholderBlock>
      <PlaceholderBlock>Right</PlaceholderBlock>
    </F0Box>
  ),
}

export const FixedSize: Story = {
  args: {
    width: "24",
    height: "24",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "secondary",
    borderRadius: "xl",
    border: "default",
    children: "Fixed 96px",
  },
}

// -- Responsive stories --

export const ResponsivePadding: Story = {
  args: {
    padding: "sm",
    sm: { padding: "md" },
    md: { padding: "lg" },
    lg: { padding: "xl" },
    background: "tertiary",
    borderRadius: "md",
    children:
      "Padding grows with screen: sm on mobile → md on sm → lg on md → xl on lg",
  },
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
      <PlaceholderBlock>Stacked on mobile</PlaceholderBlock>
      <PlaceholderBlock>Row on sm+</PlaceholderBlock>
      <PlaceholderBlock>Responsive!</PlaceholderBlock>
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
      <F0Box
        padding="md"
        background="primary"
        border="default"
        borderRadius="sm"
      >
        Card 1
      </F0Box>
      <F0Box
        padding="md"
        background="primary"
        border="default"
        borderRadius="sm"
      >
        Card 2
      </F0Box>
      <F0Box
        padding="md"
        background="primary"
        border="default"
        borderRadius="sm"
      >
        Card 3
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
        Header (full width)
      </F0Box>
      <F0Box
        colSpan="full"
        sm={{ colSpan: "3" }}
        padding="lg"
        background="secondary"
        borderRadius="md"
      >
        Sidebar (full on mobile, 3 cols on sm+)
      </F0Box>
      <F0Box
        colSpan="full"
        display="grid"
        columns="1"
        gap="md"
        sm={{ colSpan: "9", columns: "3" }}
      >
        <F0Box
          padding="lg"
          background="primary"
          border="default"
          borderRadius="md"
        >
          Card 1
        </F0Box>
        <F0Box
          padding="lg"
          background="primary"
          border="default"
          borderRadius="md"
        >
          Card 2
        </F0Box>
        <F0Box
          padding="lg"
          background="primary"
          border="default"
          borderRadius="md"
        >
          Card 3
        </F0Box>
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
