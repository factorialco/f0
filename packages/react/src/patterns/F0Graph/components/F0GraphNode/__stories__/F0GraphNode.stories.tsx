import type { Decorator, Meta, StoryObj } from "@storybook/react-vite"

import {
  ReactFlow,
  ReactFlowProvider,
  type Node,
  type NodeTypes,
} from "@xyflow/react"
import "@xyflow/react/dist/style.css"
import type { ReactNode } from "react"
import { expect, fn, userEvent, waitFor, within } from "storybook/test"

import { F0Button } from "@/components/F0Button"
import { Building, Calendar, Delete, Files, Pencil } from "@/icons/app"
import { withSnapshot } from "@/lib/storybook-utils/parameters"

import { F0GraphNode } from ".."
import { graphNodeStates, graphNodeVariants } from "../types"

const meta = {
  component: F0GraphNode,
  tags: ["stable", "!autodocs"],
  title: "Graph/F0GraphNode",
  parameters: {
    layout: "centered",
    a11y: { test: "error" },
  },
  // Only React Flow context is shared here. The `role="tree"` owner that every
  // story needs is added per story instead — `inTree` for arg-driven stories, an
  // explicit `TreeExample` inside a `render` — because no single wrapper at this
  // level is correct for all of them: a `tree` that DOM-contains another `tree`,
  // or React Flow's own `role="application"` div, fails `aria-required-children`.
  decorators: [
    (Story) => (
      <ReactFlowProvider>
        <Story />
      </ReactFlowProvider>
    ),
  ],
  argTypes: {
    variant: {
      control: "radio",
      options: graphNodeVariants,
    },
    state: {
      control: "radio",
      options: graphNodeStates,
    },
    expanded: { control: "boolean" },
    hasChildren: { control: "boolean" },
    childrenCount: { control: "number" },
  },
} satisfies Meta<typeof F0GraphNode>

export default meta
type Story = StoryObj<typeof meta>

const personAvatar = {
  type: "person",
  firstName: "Alice",
  lastName: "Moreno",
} as const

const baseProps = {
  avatar: personAvatar,
  title: "Alice Moreno",
  subtitle: "Staff Designer",
} as const

// F0GraphNode renders a bare `role="treeitem"`, which axe's
// `aria-required-parent` requires to be owned by a `tree`. A `role="group"`
// wrapper is not a substitute: axe walks up from the treeitem and, on meeting a
// `group`, drops `group` from the set of roles it will still accept
// (axe-core 4.11.1, `getMissingContext`), then keeps looking for a real `tree`
// above it. Measured, not inferred — under `a11y: { test: "error" }` a
// `role="group"` wrapper failed six of these stories on `aria-required-parent`.
function TreeExample({
  children,
  label,
}: {
  children: ReactNode
  label: string
}) {
  return (
    <div role="tree" aria-label={label}>
      {children}
    </div>
  )
}

/** Story decorator form of `TreeExample`, for stories driven by `args`. */
const inTree = (label: string): Decorator =>
  function InTree(Story) {
    return (
      <TreeExample label={label}>
        <Story />
      </TreeExample>
    )
  }

export const Default: Story = {
  decorators: [inTree("Graph node example")],
  args: {
    ...baseProps,
    expanded: false,
    hasChildren: true,
    onClick: fn(),
    onExpandToggle: fn(),
  },
  play: async ({ args, canvasElement, step }) => {
    const canvas = within(canvasElement)
    const node = canvas.getByRole("treeitem")

    await step("Focus and activate the node", async () => {
      await userEvent.tab()
      await expect(node).toHaveFocus()
      await userEvent.keyboard("{Enter}")
      await expect(args.onClick).toHaveBeenCalledOnce()
    })

    await step("Expand the node", async () => {
      await userEvent.keyboard("{ArrowRight}")
      await expect(args.onExpandToggle).toHaveBeenCalledOnce()
    })
  },
}

const teamAvatar = {
  type: "team",
  name: "Marketing",
} as const

/**
 * The node silhouette follows the avatar variant — no extra prop. A `person`
 * avatar keeps the circular dot/pill (org chart); a `team`/`icon`/… avatar makes
 * the node a rounded-square card (Teams / Job Catalog).
 */
export const AvatarShape: Story = {
  tags: ["no-sidebar"],
  render: () => (
    <div className="flex flex-wrap items-start gap-4">
      <TreeExample label="Person graph node example">
        <F0GraphNode
          avatar={personAvatar}
          title="Person → circle"
          subtitle="Org chart look"
        />
      </TreeExample>
      <TreeExample label="Team graph node example">
        <F0GraphNode
          avatar={teamAvatar}
          title="Team → square"
          subtitle="Teams / Job Catalog"
        />
      </TreeExample>
    </div>
  ),
}

export const States: Story = {
  tags: ["no-sidebar"],
  render: () => (
    <div className="flex flex-wrap items-start gap-4">
      {(["default", "selected", "highlighted", "dimmed"] as const).map(
        (state) => (
          <TreeExample key={state} label={`${state} graph node example`}>
            <F0GraphNode
              avatar={personAvatar}
              title={state}
              subtitle="State variant"
              state={state}
            />
          </TreeExample>
        )
      )}
    </div>
  ),
}

export const ZoomLevels: Story = {
  tags: ["no-sidebar"],
  render: () => (
    <div className="flex flex-wrap items-start gap-16">
      {(["detail", "compact", "dot"] as const).map((variant) => (
        <div key={variant} className="flex flex-col items-center gap-2">
          <TreeExample label={`${variant} graph node example`}>
            <F0GraphNode
              avatar={personAvatar}
              title="Alice Moreno"
              subtitle="Staff Designer"
              variant={variant}
            />
          </TreeExample>
          <span
            className={`text-xs text-f1-foreground-secondary ${
              variant === "dot" ? "mt-[49px]" : ""
            }`}
          >
            {variant}
          </span>
        </div>
      ))}
    </div>
  ),
}

export const Avatars: Story = {
  tags: ["no-sidebar"],
  render: () => {
    const nodes = [
      {
        key: "person",
        label: "person",
        avatar: { type: "person", firstName: "Alice", lastName: "Moreno" },
        title: "Alice Moreno",
        subtitle: "Staff Designer",
      },
      {
        key: "team",
        label: "team",
        avatar: { type: "team", name: "Design Systems" },
        title: "Design Systems",
        subtitle: "12 members",
      },
      {
        key: "company",
        label: "company",
        avatar: { type: "company", name: "Factorial HR" },
        title: "Factorial HR",
        subtitle: "Barcelona, Spain",
      },
      {
        key: "file",
        label: "file",
        avatar: {
          type: "file",
          file: { name: "Q4-roadmap.pdf", type: "application/pdf" },
        },
        title: "Q4 Roadmap",
        subtitle: "Shared with Leadership",
      },
      {
        key: "flag",
        label: "flag",
        avatar: { type: "flag", flag: "es" },
        title: "Spain",
        subtitle: "EMEA region",
      },
      {
        key: "emoji",
        label: "emoji",
        avatar: { type: "emoji", emoji: "🚀" },
        title: "Launch squad",
        subtitle: "Cross-functional",
      },
      {
        key: "icon",
        label: "icon",
        avatar: { type: "icon", icon: Building },
        title: "HQ Office",
        subtitle: "Workspace",
      },
    ] as const

    return (
      <div className="grid grid-cols-4 items-start gap-x-12 gap-y-16">
        {nodes.map((n) => (
          <div
            key={n.key}
            className="flex flex-col items-center gap-2 justify-self-center"
          >
            <TreeExample label={`${n.label} graph node example`}>
              <F0GraphNode
                avatar={n.avatar}
                title={n.title}
                subtitle={n.subtitle}
              />
            </TreeExample>
            <span className="text-xs text-f1-foreground-secondary">
              {n.label}
            </span>
          </div>
        ))}
      </div>
    )
  },
  parameters: {
    docs: {
      description: {
        story:
          "Every avatar variant the node supports. Avatar is always rendered at size `lg` regardless of zoom level.",
      },
    },
  },
}

export const WithTags: Story = {
  tags: ["no-sidebar"],
  decorators: [inTree("Graph node with tags example")],
  args: {
    ...baseProps,
    tags: [
      { type: "team", name: "Design" },
      { type: "team", name: "Platform" },
      { type: "team", name: "Research" },
      { type: "status", text: "Manager", variant: "info" },
      { type: "person", name: "Bob Smith" },
    ],
  },
  parameters: {
    docs: {
      description: {
        story:
          "Every tag is rendered individually — tags are never grouped or collapsed into a summary, even when several share the same type.",
      },
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const tagRow = canvas.getByText("Design").closest("[data-no-node-select]")

    await waitFor(() => {
      expect(tagRow).toHaveStyle({ opacity: "1" })
    })
  },
}

export const MetadataColumns: Story = {
  tags: ["no-sidebar"],
  decorators: [inTree("Graph node metadata columns example")],
  args: {
    ...baseProps,
    tags: [
      {
        type: "raw",
        text: "Barcelona",
        icon: Building,
        column: "workplace",
      },
      {
        type: "raw",
        text: "May 6, 2021",
        icon: Calendar,
        column: "hireDate",
      },
    ],
    tagLabels: { workplace: "Workplace", hireDate: "Hire date" },
    visibleTagTypes: new Set(["workplace"]),
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const tagRow = canvas
      .getByText("Barcelona")
      .closest("[data-no-node-select]")

    await waitFor(() => {
      expect(tagRow).toHaveStyle({ opacity: "1" })
    })
    await expect(canvas.queryByText("May 6, 2021")).not.toBeInTheDocument()
  },
}

export const HoverCard: Story = {
  tags: ["no-sidebar"],
  decorators: [inTree("Graph node hover card example")],
  args: {
    ...baseProps,
    variant: "compact",
    hoverCard: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const body = within(canvasElement.closest("body")!)

    await userEvent.tab()
    await expect(canvas.getByRole("treeitem")).toHaveFocus()
    await waitFor(() => {
      expect(body.getByText("Staff Designer")).toBeVisible()
    })

    await userEvent.keyboard("{Escape}")
    await waitFor(() => {
      expect(body.queryByText("Staff Designer")).not.toBeInTheDocument()
    })
  },
}

export const Snapshot: Story = {
  tags: ["no-sidebar"],
  parameters: withSnapshot({}),
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-4">
        {(["detail", "compact", "dot"] as const).map((variant) => (
          <div key={variant} className="flex flex-wrap items-center gap-3">
            {(["default", "selected", "highlighted", "dimmed"] as const).map(
              (state) => (
                <TreeExample
                  key={`${variant}-${state}`}
                  label={`${variant} ${state} graph node example`}
                >
                  <F0GraphNode
                    avatar={personAvatar}
                    title={`${variant} · ${state}`}
                    subtitle="Variant/state"
                    variant={variant}
                    state={state}
                  />
                </TreeExample>
              )
            )}
          </div>
        ))}
        <div className="flex flex-wrap items-center gap-3">
          <TreeExample label="Expanded graph node example">
            <F0GraphNode
              avatar={personAvatar}
              title="Expanded"
              subtitle="Expanded with children"
              hasChildren
              expanded
              childrenCount={3}
            />
          </TreeExample>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <TreeExample label="Graph node with tags example">
            <F0GraphNode
              avatar={personAvatar}
              title="With tags"
              subtitle="Visible metadata"
              hasChildren
              childrenCount={5}
              tags={[
                { type: "team", name: "Design" },
                { type: "team", name: "Platform" },
                { type: "team", name: "Research" },
              ]}
            />
          </TreeExample>
        </div>
      </div>
      <ToolbarDemo />
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const tagRow = canvas.getByText("Design").closest("[data-no-node-select]")

    await waitFor(() => {
      expect(tagRow).toHaveStyle({ opacity: "1" })
    })
    await expect(
      await canvas.findByRole("button", { name: "Copy" })
    ).toBeVisible()
  },
}

function ToolbarDemoNode() {
  return (
    <div role="tree" aria-label="Graph node toolbar example">
      <F0GraphNode
        {...baseProps}
        nodeId="toolbar-demo"
        state="selected"
        actions={
          <>
            <span className="backdrop-blur-[180px]">
              <F0Button
                variant="neutral"
                size="md"
                icon={Files}
                label="Copy"
                hideLabel
              />
            </span>
            <span className="backdrop-blur-[180px]">
              <F0Button
                variant="neutral"
                size="md"
                icon={Pencil}
                label="Edit"
                hideLabel
              />
            </span>
            <span className="backdrop-blur-[180px]">
              <F0Button
                variant="neutral"
                size="md"
                icon={Delete}
                label="Delete"
                hideLabel
              />
            </span>
          </>
        }
      />
    </div>
  )
}

const toolbarNodeTypes: NodeTypes = {
  toolbarDemo: ToolbarDemoNode,
}

const toolbarDemoNodes: Node[] = [
  {
    id: "toolbar-demo",
    type: "toolbarDemo",
    position: { x: 0, y: 0 },
    data: {},
    draggable: false,
    selectable: false,
  },
]

function ToolbarDemo() {
  return (
    // The `role="tree"` sits inside the node type (`ToolbarDemoNode`), wrapping
    // the treeitem directly. It deliberately does not wrap `<ReactFlow>`:
    // React Flow hardcodes `role="application"` on its root div after the props
    // spread (@xyflow/react 12.10.2), and an `application` child makes the
    // surrounding `tree` fail `aria-required-children`. `aria-owns` does not
    // rescue that — the rule reads what the tree contains, not only what it owns.
    <div style={{ width: 480, height: 240 }}>
      <ReactFlow
        nodes={toolbarDemoNodes}
        nodeTypes={toolbarNodeTypes}
        nodesDraggable={false}
        nodesConnectable={false}
        nodesFocusable={false}
        elementsSelectable={false}
        panOnDrag={false}
        panOnScroll={false}
        zoomOnScroll={false}
        zoomOnPinch={false}
        zoomOnDoubleClick={false}
        fitView
        proOptions={{ hideAttribution: true }}
      />
    </div>
  )
}

export const WithToolbar: Story = {
  tags: ["no-sidebar"],
  render: () => <ToolbarDemo />,
  parameters: {
    docs: {
      description: {
        story:
          "When the node is in the `selected` state, a toolbar appears above it with three icon-only actions: Copy, Edit, and Delete.",
      },
    },
  },
}
