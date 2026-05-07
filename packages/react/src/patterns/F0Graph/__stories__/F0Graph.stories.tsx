import type { Meta, StoryObj } from "@storybook/react-vite"

import "@xyflow/react/dist/style.css"
import { F0AvatarPerson } from "@/components/avatars/F0AvatarPerson"

import type { GraphNode, ZoomLevel } from "../types"

import { F0Graph, type F0GraphProps } from "../F0Graph"
import {
  F0GraphNodeAvatar,
  F0GraphNodeTitle,
  F0GraphNodeSubtitle,
} from "../F0GraphNode"

const meta: Meta<F0GraphProps<Employee>> = {
  title: "Graph/F0Graph",
  component: F0Graph as React.ComponentType<F0GraphProps<Employee>>,
  tags: ["stable", "!autodocs"],
  decorators: [
    (Story) => (
      <div className="h-[600px] w-full bg-f1-background-tertiary">
        <Story />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<F0GraphProps<Employee>>

// ─── Sample data ───────────────────────────────────────────────
interface Employee {
  name: string
  title: string
  avatar?: string
}

const BASIC_NODES: GraphNode<Employee>[] = [
  {
    id: "1",
    parentId: null,
    data: { name: "Sofia Reyes", title: "Chief Executive Officer" },
    childrenCount: 2,
  },
  {
    id: "2",
    parentId: "1",
    data: { name: "Marcus Chen", title: "Chief Technology Officer" },
    childrenCount: 2,
  },
  {
    id: "3",
    parentId: "1",
    data: { name: "Elena Dupont", title: "Chief Financial Officer" },
    childrenCount: 0,
  },
  {
    id: "4",
    parentId: "2",
    data: { name: "Tomás Herrera", title: "Engineering Manager" },
    childrenCount: 0,
  },
  {
    id: "5",
    parentId: "2",
    data: { name: "Aisha Patel", title: "QA Lead" },
    childrenCount: 0,
  },
]

function renderEmployee(node: GraphNode<Employee>, _zoomLevel: ZoomLevel) {
  const { name, title } = node.data as Employee
  const [firstName = "", lastName = ""] = name.split(" ")
  return (
    <>
      <F0GraphNodeAvatar>
        <F0AvatarPerson firstName={firstName} lastName={lastName} size="lg" />
      </F0GraphNodeAvatar>
      <F0GraphNodeTitle>{name}</F0GraphNodeTitle>
      <F0GraphNodeSubtitle>{title}</F0GraphNodeSubtitle>
    </>
  )
}

// ─── Stories ───────────────────────────────────────────────────

export const BasicTree: Story = {
  args: {
    nodes: BASIC_NODES,
    renderNode: renderEmployee,
    defaultExpandDepth: 2,
  },
}

export const CompactView: Story = {
  args: {
    nodes: BASIC_NODES,
    renderNode: renderEmployee,
    defaultZoom: 0.5,
    defaultExpandDepth: 2,
  },
}

export const DotView: Story = {
  args: {
    nodes: BASIC_NODES,
    renderNode: renderEmployee,
    defaultZoom: 0.2,
    defaultExpandDepth: 2,
  },
}

export const WithControls: Story = {
  args: {
    nodes: BASIC_NODES,
    renderNode: renderEmployee,
    showControls: true,
    showMinimap: true,
    defaultExpandDepth: 2,
  },
}

export const LazyTree: Story = {
  args: {
    rootNodes: [
      {
        id: "root",
        parentId: null,
        data: { name: "Sofia Reyes", title: "Chief Executive Officer" },
        childrenCount: 3,
        childrenLoaded: false,
      },
    ],
    loadChildren: async (nodeId: string) => {
      const teamsByNode: Record<
        string,
        Array<{ name: string; title: string }>
      > = {
        root: [
          { name: "Marcus Chen", title: "VP Engineering" },
          { name: "Laura Kim", title: "VP Product" },
          { name: "James Okafor", title: "VP People" },
        ],
        "root-child-0": [
          { name: "Nina Volkov", title: "Staff Engineer" },
          { name: "Diego Martín", title: "Senior Engineer" },
        ],
        "root-child-1": [
          { name: "Yuki Tanaka", title: "Product Manager" },
          { name: "Priya Sharma", title: "Product Designer" },
        ],
      }
      // Simulate async delay
      await new Promise((r) => setTimeout(r, 800))
      const team = teamsByNode[nodeId]
      if (team) {
        return team.map((member, i) => ({
          id: `${nodeId}-child-${i}`,
          parentId: nodeId,
          data: member,
          childrenCount: nodeId === "root" ? 2 : 0,
          childrenLoaded: false,
        }))
      }
      return Array.from({ length: 2 }, (_, i) => ({
        id: `${nodeId}-child-${i}`,
        parentId: nodeId,
        data: {
          name: `Team Member ${i + 1}`,
          title: "Individual Contributor",
        },
        childrenCount: 0,
        childrenLoaded: false,
      }))
    },
    renderNode: renderEmployee,
    showControls: true,
  },
}

// Generate a large tree for performance testing
const DEPARTMENTS = [
  {
    head: { name: "Marcus Chen", title: "VP Engineering" },
    roles: [
      "Staff Engineer",
      "Senior Engineer",
      "Software Engineer",
      "Engineering Manager",
      "QA Engineer",
      "DevOps Engineer",
      "Frontend Engineer",
      "Backend Engineer",
      "Mobile Engineer",
      "Site Reliability Engineer",
    ],
  },
  {
    head: { name: "Laura Kim", title: "VP Product" },
    roles: [
      "Senior Product Manager",
      "Product Manager",
      "Product Analyst",
      "Product Designer",
      "UX Researcher",
      "Technical Writer",
    ],
  },
  {
    head: { name: "James Okafor", title: "VP People" },
    roles: [
      "People Partner",
      "Talent Acquisition Lead",
      "Recruiter",
      "People Operations",
      "Compensation Analyst",
      "L&D Specialist",
    ],
  },
  {
    head: { name: "Elena Dupont", title: "VP Finance" },
    roles: [
      "Financial Controller",
      "Senior Accountant",
      "Accountant",
      "Payroll Specialist",
      "FP&A Analyst",
    ],
  },
  {
    head: { name: "Amir Hassan", title: "VP Sales" },
    roles: [
      "Sales Director",
      "Account Executive",
      "Sales Development Rep",
      "Account Manager",
      "Solutions Engineer",
      "Sales Operations",
      "Customer Success Manager",
    ],
  },
]

const FIRST_NAMES = [
  "Nina",
  "Diego",
  "Yuki",
  "Priya",
  "Liam",
  "Fatima",
  "Noah",
  "Marta",
  "Oliver",
  "Sara",
  "Hugo",
  "Chloe",
  "André",
  "Mei",
  "Oscar",
  "Ines",
  "Leo",
  "Dana",
  "Erik",
  "Zara",
  "Mateo",
  "Nadia",
  "Ravi",
  "Clara",
  "Joel",
  "Amara",
  "Kai",
  "Elsa",
  "Marco",
  "Lena",
  "Adam",
  "Vera",
  "Ivan",
  "Rosa",
  "Sam",
  "Leila",
  "Jan",
  "Petra",
  "Alex",
  "Nora",
  "Tomás",
  "Aisha",
  "Finn",
  "Julia",
  "Bruno",
  "Hana",
  "Lukas",
  "Dina",
  "Felix",
  "Sana",
]

const LAST_NAMES = [
  "Volkov",
  "Martín",
  "Tanaka",
  "Sharma",
  "Andersen",
  "Benali",
  "Williams",
  "Ferreira",
  "Park",
  "Novak",
  "Laurent",
  "Zhang",
  "Santos",
  "Lindqvist",
  "Moreau",
  "Kowalski",
  "Nakamura",
  "Al-Rashid",
  "Weber",
  "Johansson",
  "Rossi",
  "Müller",
  "Petrov",
  "García",
  "Silva",
  "Dubois",
  "Hayashi",
  "Berg",
  "Costa",
  "Larsson",
  "Ali",
  "Richter",
  "Popov",
  "Ortega",
  "Flores",
  "Yamazaki",
  "Khoury",
  "Bauer",
  "Eriksen",
  "Torres",
  "Herrera",
  "Patel",
  "Reyes",
  "Kim",
  "Oliveira",
  "Schmid",
  "Ito",
  "Bakker",
  "Hansen",
  "Meyer",
]

function makeLargeTree(count: number): GraphNode<Employee>[] {
  const nodes: GraphNode<Employee>[] = [
    {
      id: "root",
      parentId: null,
      data: { name: "Sofia Reyes", title: "Chief Executive Officer" },
      childrenCount: DEPARTMENTS.length,
    },
  ]

  let nameIndex = 0
  const getName = () => {
    const first = FIRST_NAMES[nameIndex % FIRST_NAMES.length] ?? "Alex"
    const last = LAST_NAMES[nameIndex % LAST_NAMES.length] ?? "Smith"
    nameIndex++
    return `${first} ${last}`
  }

  const perDept = Math.floor(
    (count - 1 - DEPARTMENTS.length) / DEPARTMENTS.length
  )

  for (let d = 0; d < DEPARTMENTS.length; d++) {
    const dept = DEPARTMENTS[d]!
    const deptId = `dept-${d}`
    nodes.push({
      id: deptId,
      parentId: "root",
      data: dept.head,
      childrenCount: perDept,
    })

    for (let i = 0; i < perDept; i++) {
      nodes.push({
        id: `${deptId}-member-${i}`,
        parentId: deptId,
        data: {
          name: getName(),
          title: dept.roles[i % dept.roles.length] ?? "Team Member",
        },
        childrenCount: 0,
      })
    }
  }

  return nodes
}

export const LargeTree: Story = {
  args: {
    nodes: makeLargeTree(60),
    renderNode: renderEmployee,
    showControls: true,
    showMinimap: true,
    defaultExpandDepth: 2,
  },
}
