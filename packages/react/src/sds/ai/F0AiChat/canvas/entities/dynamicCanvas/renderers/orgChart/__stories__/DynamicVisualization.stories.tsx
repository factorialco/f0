import type { Meta, StoryObj } from "@storybook/react-vite"

import { DynamicVisualizationEngine } from "../DynamicVisualizationEngine"
import { mockedEmployees } from "../lib/mockedData"
import { mockedStaffing } from "../lib/mockedMatrixData"
import type { DynamicVisualizationGrammar } from "../types"

const meta = {
  component: DynamicVisualizationEngine,
  title: "AI/F0AiChat/Canvas/DynamicVisualization",
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof DynamicVisualizationEngine>

export default meta
type Story = StoryObj<typeof DynamicVisualizationEngine>

const treeGrammar: DynamicVisualizationGrammar = {
  layout: {
    algorithm: "tree",
    orientation: "top-down",
    nodeWidth: 220,
    nodeHeight: 100,
    levelGap: 80,
    siblingGap: 40,
  },
  nodes: {
    shape: "rounded-rect",
    fields: [
      { column: "fullName", style: "title" },
      { column: "team", style: "tag", position: "bottom" },
    ],
  },
  edges: {
    style: "bezier",
    width: 2,
    color: "#cbd5e1",
  },
  interactivity: {
    zoom: true,
    pan: true,
    collapsible: true,
  },
}

export const TreeBasic: Story = {
  args: {
    data: mockedEmployees as unknown as Record<string, unknown>[],
    spec: treeGrammar,
  },
}

export const TreeColored: Story = {
  args: {
    data: mockedEmployees as unknown as Record<string, unknown>[],
    spec: {
      ...treeGrammar,
      visualEncoding: {
        colorBy: {
          field: "department",
          palette: "categorical",
        },
      },
    },
  },
}

export const TreeHorizontal: Story = {
  args: {
    data: mockedEmployees as unknown as Record<string, unknown>[],
    spec: {
      ...treeGrammar,
      layout: {
        ...treeGrammar.layout,
        orientation: "left-to-right",
        levelGap: 120,
      },
    },
  },
}

const matrixGrammar: DynamicVisualizationGrammar = {
  layout: {
    algorithm: "matrix",
    rowField: "role",
    columnField: "domain",
    nodeWidth: 160,
    nodeHeight: 70,
    cellGap: 8,
    rowHeaderWidth: 140,
    columnHeaderHeight: 32,
  },
  nodes: {
    shape: "rounded-rect",
    fields: [
      { column: "personName", style: "title" },
      { column: "location", style: "tag", position: "bottom" },
    ],
    conditionalStyles: [
      {
        condition: "isVacant == true",
        backgroundColor: "#f3f4f6",
        borderColor: "#d1d5db",
      },
      {
        condition: "isInterim == true",
        borderColor: "#f59e0b",
        borderWidth: 2,
      },
    ],
  },
  interactivity: {
    zoom: true,
    pan: true,
  },
}

export const MatrixBasic: Story = {
  args: {
    data: mockedStaffing as unknown as Record<string, unknown>[],
    spec: matrixGrammar,
  },
}

export const MatrixWithEncodings: Story = {
  args: {
    data: mockedStaffing as unknown as Record<string, unknown>[],
    spec: {
      ...matrixGrammar,
      nodes: {
        ...matrixGrammar.nodes,
        fields: [
          { column: "personName", style: "title" },
          { column: "location", style: "tag" },
          { column: "arrGoal", format: "currency", position: "bottom" },
        ],
        conditionalStyles: [
          {
            condition: "isVacant == true",
            backgroundColor: "#f3f4f6",
            borderColor: "#d1d5db",
          },
          {
            condition: "isNewJoiner == true",
            backgroundColor: "#dcfce7",
            borderColor: "#22c55e",
          },
          {
            condition: "isInterim == true",
            borderColor: "#f59e0b",
            borderWidth: 2,
          },
        ],
      },
      overlays: [
        {
          type: "badge",
          field: "isNewJoiner",
          condition: "true",
          icon: "NEW",
        },
      ],
    },
  },
}
