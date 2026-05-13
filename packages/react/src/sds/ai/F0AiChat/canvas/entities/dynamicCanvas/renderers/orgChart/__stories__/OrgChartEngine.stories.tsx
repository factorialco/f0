import type { Meta, StoryObj } from "@storybook/react-vite"

import { OrgChartEngine } from "../OrgChartEngine"
import { mockedEmployees } from "../lib/mockedData"
import type { OrgChartGrammar } from "../types"

const meta = {
  component: OrgChartEngine,
  title: "AI/F0AiChat/Canvas/OrgChart/Engine",
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof OrgChartEngine>

export default meta
type Story = StoryObj<typeof OrgChartEngine>

const baseGrammar: OrgChartGrammar = {
  layout: {
    algorithm: "tree",
    orientation: "top-down",
    levelGap: 80,
    siblingGap: 40,
    nodeWidth: 220,
    nodeHeight: 100,
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
    initialDepth: Infinity,
  },
}

export const Basic: Story = {
  args: {
    data: mockedEmployees as unknown as Record<string, unknown>[],
    grammar: baseGrammar,
  },
}

export const ColorByTeam: Story = {
  args: {
    data: mockedEmployees as unknown as Record<string, unknown>[],
    grammar: {
      ...baseGrammar,
      nodes: {
        ...baseGrammar.nodes,
        fields: [
          { column: "fullName", style: "title" },
          { column: "team", style: "tag", position: "bottom" },
        ],
      },
      visualEncoding: {
        colorBy: {
          field: "team",
          palette: "categorical",
        },
      },
    },
  },
}

export const ColorByDepartment: Story = {
  args: {
    data: mockedEmployees as unknown as Record<string, unknown>[],
    grammar: {
      ...baseGrammar,
      visualEncoding: {
        colorBy: {
          field: "department",
          palette: "categorical",
        },
      },
    },
  },
}

export const HorizontalLayout: Story = {
  args: {
    data: mockedEmployees as unknown as Record<string, unknown>[],
    grammar: {
      ...baseGrammar,
      layout: {
        ...baseGrammar.layout,
        orientation: "left-to-right",
        levelGap: 120,
        siblingGap: 30,
      },
    },
  },
}

export const SizedBySalary: Story = {
  args: {
    data: mockedEmployees as unknown as Record<string, unknown>[],
    grammar: {
      ...baseGrammar,
      nodes: {
        ...baseGrammar.nodes,
        fields: [
          { column: "fullName", style: "title" },
          { column: "salary", format: "currency", position: "bottom" },
        ],
      },
      visualEncoding: {
        sizeBy: {
          field: "salary",
          range: [0.7, 1.4],
        },
      },
    },
  },
}

export const ManagerBadges: Story = {
  args: {
    data: mockedEmployees as unknown as Record<string, unknown>[],
    grammar: {
      ...baseGrammar,
      overlays: [
        { type: "badge", field: "isManager", condition: "true", icon: "★" },
      ],
    },
  },
}

export const ProgressBars: Story = {
  args: {
    data: mockedEmployees as unknown as Record<string, unknown>[],
    grammar: {
      ...baseGrammar,
      overlays: [
        { type: "progress-bar", field: "goalCompletion", maxValue: 100 },
      ],
    },
  },
}

export const Combined: Story = {
  args: {
    data: mockedEmployees as unknown as Record<string, unknown>[],
    grammar: {
      ...baseGrammar,
      layout: {
        ...baseGrammar.layout,
        orientation: "left-to-right",
      },
      nodes: {
        ...baseGrammar.nodes,
        fields: [
          { column: "fullName", style: "title" },
          { column: "department", style: "tag", position: "bottom" },
          {
            column: "tenureYears",
            label: "Tenure",
            format: "number",
            position: "bottom",
          },
        ],
      },
      visualEncoding: {
        colorBy: {
          field: "department",
          palette: "categorical",
        },
        sizeBy: {
          field: "tenureYears",
          range: [0.8, 1.3],
        },
      },
      overlays: [
        { type: "badge", field: "isManager", condition: "true", icon: "★" },
        { type: "progress-bar", field: "goalCompletion", maxValue: 100 },
      ],
    },
  },
}

export const CollapsedInitial: Story = {
  args: {
    data: mockedEmployees as unknown as Record<string, unknown>[],
    grammar: {
      ...baseGrammar,
      interactivity: {
        ...baseGrammar.interactivity,
        initialDepth: 1,
      },
    },
  },
}

export const ConditionalStyles: Story = {
  args: {
    data: mockedEmployees as unknown as Record<string, unknown>[],
    grammar: {
      ...baseGrammar,
      nodes: {
        ...baseGrammar.nodes,
        conditionalStyles: [
          {
            condition: "salary > 140000",
            backgroundColor: "#fef3c7",
            borderColor: "#f59e0b",
            borderWidth: 3,
          },
          {
            condition: "isManager == true",
            borderColor: "#3b82f6",
          },
        ],
      },
    },
  },
}

export const Tooltips: Story = {
  args: {
    data: mockedEmployees as unknown as Record<string, unknown>[],
    grammar: {
      ...baseGrammar,
      interactivity: {
        ...baseGrammar.interactivity,
        tooltip: [
          { column: "fullName", label: "Name" },
          { column: "department" },
          { column: "salary" },
          { column: "tenureYears", label: "Years" },
          { column: "goalCompletion", label: "Goals" },
        ],
      },
    },
  },
}

export const CustomPalette: Story = {
  args: {
    data: mockedEmployees as unknown as Record<string, unknown>[],
    grammar: {
      ...baseGrammar,
      visualEncoding: {
        colorBy: {
          field: "team",
          palette: ["#e11d48", "#2563eb", "#16a34a", "#d97706", "#7c3aed"],
        },
      },
    },
  },
}

export const OpacityByTenure: Story = {
  args: {
    data: mockedEmployees as unknown as Record<string, unknown>[],
    grammar: {
      ...baseGrammar,
      visualEncoding: {
        opacityBy: {
          field: "tenureYears",
          range: [0.4, 1],
        },
      },
    },
  },
}

export const AnimatedEdges: Story = {
  args: {
    data: mockedEmployees as unknown as Record<string, unknown>[],
    grammar: {
      ...baseGrammar,
      edges: {
        style: "bezier",
        width: 2,
        color: "#94a3b8",
        animated: true,
      },
    },
  },
}

export const EdgeStyles: Story = {
  args: {
    data: mockedEmployees as unknown as Record<string, unknown>[],
    grammar: {
      ...baseGrammar,
      layout: {
        ...baseGrammar.layout,
        siblingGap: 60,
      },
      edges: {
        style: "orthogonal",
        width: 3,
        color: "#64748b",
      },
    },
  },
}

export const AllEncodings: Story = {
  args: {
    data: mockedEmployees as unknown as Record<string, unknown>[],
    grammar: {
      ...baseGrammar,
      nodes: {
        ...baseGrammar.nodes,
        fields: [
          { column: "fullName", style: "title" },
          { column: "team", style: "tag", position: "bottom" },
          { column: "salary", format: "currency", position: "bottom" },
        ],
        conditionalStyles: [
          {
            condition: "salary >= 150000",
            backgroundColor: "#fef3c7",
            borderColor: "#f59e0b",
          },
        ],
      },
      visualEncoding: {
        colorBy: { field: "department", palette: "categorical" },
        sizeBy: { field: "salary", range: [0.8, 1.3] },
        opacityBy: { field: "goalCompletion", range: [0.5, 1] },
      },
      edges: {
        style: "bezier",
        width: 2,
        color: "#94a3b8",
        animated: true,
      },
      overlays: [
        { type: "badge", field: "isManager", condition: "true", icon: "★" },
        { type: "progress-bar", field: "goalCompletion", maxValue: 100 },
      ],
      interactivity: {
        zoom: true,
        pan: true,
        collapsible: true,
        tooltip: [
          { column: "fullName" },
          { column: "department" },
          { column: "salary" },
        ],
      },
    },
  },
}

export const BoundaryUnsupportedOverlay: Story = {
  args: {
    data: mockedEmployees as unknown as Record<string, unknown>[],
    grammar: {
      ...baseGrammar,
      overlays: [
        { type: "badge", field: "isManager", condition: "true" },
        {
          type: "sparkline",
          field: "trend",
        } as unknown as import("../types").VizOverlay,
        {
          type: "avatar-stack",
          field: "reports",
        } as unknown as import("../types").VizOverlay,
      ],
    },
  },
}

export const BoundaryMissingColumns: Story = {
  args: {
    data: mockedEmployees as unknown as Record<string, unknown>[],
    grammar: {
      ...baseGrammar,
      nodes: {
        ...baseGrammar.nodes,
        fields: [
          { column: "fullName" },
          { column: "performanceScore", label: "Perf" },
          { column: "managerName", label: "Manager" },
        ],
      },
      visualEncoding: {
        colorBy: { field: "nonExistentField" },
      },
    },
  },
}

export const BoundaryComplexConditions: Story = {
  args: {
    data: mockedEmployees as unknown as Record<string, unknown>[],
    grammar: {
      ...baseGrammar,
      nodes: {
        ...baseGrammar.nodes,
        conditionalStyles: [
          {
            condition: "salary > 100000",
            backgroundColor: "#fef3c7",
          },
          {
            condition: "department IN ('Engineering', 'Product')",
            borderColor: "#3b82f6",
          },
          {
            condition: "salary > 100000 AND tenure > 2",
            backgroundColor: "#fecaca",
          },
        ],
      },
    },
  },
}
