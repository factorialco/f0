import type { Meta, StoryObj } from "@storybook/react-vite"

import { DynamicVisualizationEngine } from "../DynamicVisualizationEngine"
import { factorialOrgData } from "../lib/mockedFactorialOrg"
import type { DynamicVisualizationGrammar } from "../types"

const meta = {
  component: DynamicVisualizationEngine,
  title: "AI/F0AiChat/Canvas/FactorialOrg",
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof DynamicVisualizationEngine>

export default meta
type Story = StoryObj<typeof DynamicVisualizationEngine>

const factorialOrgGrammar: DynamicVisualizationGrammar = {
  layout: {
    algorithm: "matrix",
    rowField: "role",
    columnField: "domain",
    nodeWidth: 200,
    nodeHeight: 120,
    cellGap: 8,
    rowHeaderWidth: 140,
    columnHeaderHeight: 36,
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
        condition: "isNewJoiner == true",
        backgroundColor: "#dcfce7",
        borderColor: "#22c55e",
      },
      {
        condition: "customFieldProductMaturity == seed",
        borderColor: "#8b5cf6",
        borderWidth: 2,
      },
    ],
  },
  visualEncoding: {
    colorBy: {
      field: "domain",
      palette: [
        "#fef3c7",
        "#dbeafe",
        "#dcfce7",
        "#fce7f3",
        "#f3e8ff",
        "#ffedd5",
      ],
    },
  },
  overlays: [
    {
      type: "badge",
      field: "isNewJoiner",
      condition: "true",
      icon: "NEW",
    },
    {
      type: "badge",
      field: "isInterim",
      condition: "true",
      icon: "INT",
    },
    {
      type: "action",
      column: "slackChannel",
      icon: "💬",
      label: "Slack",
    },
  ],
  interactivity: {
    zoom: true,
    pan: true,
    tooltip: [
      { column: "personName", label: "Name" },
      { column: "domain" },
      { column: "role" },
      { column: "location" },
      { column: "startDate", label: "Start" },
      { column: "githubTeam", label: "GitHub" },
      { column: "firefighterHandle", label: "Firefighter" },
      { column: "arrGoal", label: "ARR Goal" },
      { column: "customFieldTechStack", label: "Stack" },
    ],
  },
}

export const ProductOrg2026Q2: Story = {
  args: {
    data: factorialOrgData as unknown as Record<string, unknown>[],
    spec: factorialOrgGrammar,
  },
}

export const ProductOrgWithArrGoals: Story = {
  args: {
    data: factorialOrgData as unknown as Record<string, unknown>[],
    spec: {
      ...factorialOrgGrammar,
      nodes: {
        ...factorialOrgGrammar.nodes,
        fields: [
          { column: "personName", style: "title" },
          { column: "location", style: "tag" },
          {
            column: "arrGoal",
            format: "currency",
            position: "bottom",
            label: "ARR",
          },
        ],
      },
    },
  },
}

export const ProductOrgByMaturity: Story = {
  args: {
    data: factorialOrgData as unknown as Record<string, unknown>[],
    spec: {
      ...factorialOrgGrammar,
      visualEncoding: {
        colorBy: {
          field: "customFieldProductMaturity",
          palette: ["#8b5cf6", "#3b82f6", "#22c55e"],
        },
      },
      nodes: {
        ...factorialOrgGrammar.nodes,
        fields: [
          { column: "personName", style: "title" },
          {
            column: "customFieldProductMaturity",
            style: "tag",
            position: "bottom",
          },
        ],
      },
    },
  },
}

export const ProductOrgVacanciesHighlighted: Story = {
  args: {
    data: factorialOrgData as unknown as Record<string, unknown>[],
    spec: {
      ...factorialOrgGrammar,
      nodes: {
        ...factorialOrgGrammar.nodes,
        conditionalStyles: [
          {
            condition: "isVacant == true",
            backgroundColor: "#fecaca",
            borderColor: "#ef4444",
            borderWidth: 2,
          },
        ],
      },
    },
  },
}
