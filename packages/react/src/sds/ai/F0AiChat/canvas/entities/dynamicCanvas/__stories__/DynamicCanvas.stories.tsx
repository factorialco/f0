import type { Meta, StoryObj } from "@storybook/react-vite"
import { expect, within } from "storybook/test"

import { DynamicCanvasContent } from "../DynamicCanvasContent"
import { mockedEmployees } from "../renderers/orgChart/lib/mockedData"
import { mockedStaffing } from "../renderers/orgChart/lib/mockedMatrixData"
import type { OrgVisualizationSpec } from "../renderers/orgChart/types"
import type { DynamicCanvasContent as DynamicCanvasContentType } from "../types"

const meta = {
  component: DynamicCanvasContent,
  title: "AI/F0AiChat/Canvas/DynamicCanvas",
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof DynamicCanvasContent>

export default meta
type Story = StoryObj<typeof DynamicCanvasContent>

const orgContent = (
  spec: OrgVisualizationSpec,
  data: Record<string, unknown>[] = mockedEmployees as unknown as Record<
    string,
    unknown
  >[]
): DynamicCanvasContentType => ({
  type: "dynamicCanvas",
  title: "Org Visualization",
  renderer: "org",
  data,
  specVersion: "2026-05-10",
  spec: spec as unknown as Record<string, unknown>,
})

const treeSpec: OrgVisualizationSpec = {
  layout: {
    type: "tree",
    idField: "id",
    parentField: "managerId",
    orientation: "top-down",
    levelGap: 80,
    siblingGap: 40,
    nodeWidth: 220,
    nodeHeight: 100,
  },
  card: {
    title: "fullName",
    subtitle: "team",
    badges: ["department"],
  },
  encodings: {
    colorBy: "department",
  },
  interactions: {
    zoom: true,
    pan: true,
    collapse: true,
  },
}

const productOrgSpec: OrgVisualizationSpec = {
  layout: {
    type: "clusteredMatrix",
    rows: ["role"],
    columns: ["domain"],
    clusterBy: ["location"],
    nodeWidth: 180,
    nodeHeight: 82,
    cellGap: 8,
    rowHeaderWidth: 170,
    columnHeaderHeight: 36,
  },
  card: {
    title: "personName",
    subtitle: "location",
    badges: ["role"],
    metrics: [{ field: "arrGoal", format: "currency", label: "ARR" }],
  },
  encodings: {
    colorBy: "domain",
  },
  overlays: [
    {
      type: "badge",
      field: "isNewJoiner",
      condition: "true",
      icon: "NEW",
    },
  ],
  interactions: {
    zoom: true,
    pan: true,
  },
}

export const OrgTree: Story = {
  args: {
    content: orgContent(treeSpec),
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(await canvas.findByText("Alice CEO")).toBeInTheDocument()
    await expect(canvas.getAllByText("Product")[0]).toBeInTheDocument()
  },
}

export const OrgTreeWithSalary: Story = {
  args: {
    content: orgContent({
      ...treeSpec,
      card: {
        ...treeSpec.card,
        fields: [{ field: "salary", label: "Salary", format: "currency" }],
      },
    }),
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(await canvas.findByText("Alice CEO")).toBeInTheDocument()
    await expect(
      await canvas.findByText(/€200,000|200,000/)
    ).toBeInTheDocument()
  },
}

export const ProductOrgExcelLike: Story = {
  args: {
    content: orgContent(
      productOrgSpec,
      mockedStaffing as unknown as Record<string, unknown>[]
    ),
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(
      await canvas.findByText("Product Management")
    ).toBeInTheDocument()
    await expect(await canvas.findByText("Talent")).toBeInTheDocument()
  },
}

export const UnknownRenderer: Story = {
  args: {
    content: {
      type: "dynamicCanvas",
      title: "Unknown Viz",
      renderer: "salarySpiral",
      data: mockedEmployees as unknown as Record<string, unknown>[],
      spec: {},
    },
  },
}

export const LoadingState: Story = {
  args: {
    content: {
      type: "dynamicCanvas",
      title: "Loading...",
      renderer: "org",
      spec: treeSpec as unknown as Record<string, unknown>,
      datasetId: "employees-2026-q2",
      fetchSpecs: {
        "employees-2026-q2": {
          fetch: [{ toolId: "fetchEmployees", args: {} }],
          query: null,
        },
      },
      apiConfig: {
        baseUrl: "http://localhost:3000",
        headers: {},
      },
    },
  },
}

export const ServerFetchWithFallback: Story = {
  args: {
    content: {
      type: "dynamicCanvas",
      title: "Org Chart (Server + Fallback)",
      renderer: "org",
      data: mockedEmployees as unknown as Record<string, unknown>[],
      spec: treeSpec as unknown as Record<string, unknown>,
      datasetId: "employees-2026-q2",
      fetchSpecs: {
        "employees-2026-q2": {
          fetch: [{ toolId: "fetchEmployees", args: {} }],
          query: null,
        },
      },
      apiConfig: {
        baseUrl: "http://localhost:3000",
        headers: {},
      },
    },
  },
}
