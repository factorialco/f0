import { Plus, Search } from "@/icons/app"
import avatar from "@storybook-static/avatars/person02.jpg"
import type { Meta, StoryObj } from "@storybook/react-vite"
import { useState } from "react"
import { fn } from "storybook/test"
import { EntitySelect } from "./index"
import { EntityId, EntitySelectEntity } from "./types"

// --------------------------------------
// EXAMPLE GRAPHQL COMMENT BLOCK
// --------------------------------------
/**
 * Example of graphql request:
 *   query EntitySelect($active: Boolean, $companyId: Int!, $ids: [Int!], $legalEntityIds: [Int!], $search: String) {
 *     employees {
 *       employeeNames(
 *         companyId: $companyId
 *         ids: $ids
 *         legalEntityIds: $legalEntityIds
 *         onlyActive: $active
 *         search: $search
 *       ) {
 *         ...EntitySelectForSelect
 *         __typename
 *       }
 *       __typename
 *     }
 *   }
 *
 *   fragment EntitySelectForSelect on EmployeesEmployeeName {
 *     id
 *     avatar {
 *       id
 *       url
 *       __typename
 *     }
 *     firstName
 *     fullName
 *     lastName
 *     preferredName
 *     __typename
 *   }
 */

// --------------------------------------
// INTERFACE FOR THE EMPLOYEE FETCH RESULT
// --------------------------------------
interface FetchEmployee {
  id: number
  firstName: string
  fullName: string
  lastName: string
  preferredName: string | null
  __typename: "EmployeesEmployeeName"
  avatar: {
    id: number
    url: string
    __typename: "ApiCoreAttachment"
  } | null
}

// --------------------------------------
// MOCK DATA
// --------------------------------------
const response: {
  employees: { __typename: "employees"; employeeNames: FetchEmployee[] }
} = {
  employees: {
    __typename: "employees",
    employeeNames: [
      {
        id: 5,
        firstName: "Hellen",
        fullName: "Hellen the HR",
        lastName: "the HR",
        preferredName: null,
        __typename: "EmployeesEmployeeName",
        avatar: {
          id: 3,
          url: avatar,
          __typename: "ApiCoreAttachment",
        },
      },
      {
        id: 6,
        firstName: "Phebe",
        fullName: "Phebe Jacobson",
        lastName: "Jacobson",
        preferredName: null,
        __typename: "EmployeesEmployeeName",
        avatar: null,
      },
      {
        id: 7,
        firstName: "Arnulfo",
        fullName: "Arnulfo Maggio",
        lastName: "Maggio",
        preferredName: null,
        __typename: "EmployeesEmployeeName",
        avatar: null,
      },
    ],
  },
}

// --------------------------------------
// NEW PROPS INTERFACE FOR OUR STORY
// --------------------------------------
// We only expose two configurable props:
//   - singleSelector (true/false)
//   - onSelect (callback)
export interface EmployeeSelectorProps {
  singleSelector?: boolean
  onSelect?: (selection: FetchEmployee) => void
}

// --------------------------------------
// STORYBOOK METADATA
// --------------------------------------
const meta: Meta<EmployeeSelectorProps> = {
  title: "EntitySelect/EmployeeSelector",
  // No direct 'component' reference is strictly required if you're just
  // rendering an example inside your own "render" function, but you can
  // optionally assign it if you like:
  // component: AvatarNameSelector,

  // Only show these props in the Storybook 'Controls' panel:
  argTypes: {
    singleSelector: {
      control: "boolean",
      defaultValue: false,
      description: "Toggle between single and multiple employee selection.",
    },
    onSelect: fn(),
  },
  decorators: [
    (Story) => (
      <div className="h-[520px] w-full">
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `
**Request GraphQL:**

\`\`\`graphql
query EmployeeSelector($active: Boolean, $companyId: Int!, $ids: [Int!], $legalEntityIds: [Int!], $search: String) {
  employees {
    employeeNames(
      companyId: $companyId
      ids: $ids
      legalEntityIds: $legalEntityIds
      onlyActive: $active
      search: $search
    ) {
      ...EntitySelectForSelect
      __typename
    }
    __typename
  }
}

fragment EntitySelectForSelect on EmployeesEmployeeName {
  id
  avatar {
    id
    url
    __typename
  }
  firstName
  fullName
  lastName
  preferredName
  __typename
}

\`\`\`

**Response:**

\`\`\`ts
interface FetchEmployee {
  id: number
  firstName: string
  fullName: string
  lastName: string
  preferredName: string | null
  __typename: "EmployeesEmployeeName"
  avatar: {
    id: number
    url: string
    __typename: "ApiCoreAttachment"
  } | null
}
\`\`\`
      `,
      },
    },
  },
}

export default meta

// --------------------------------------
// SINGLE STORY EXAMPLE
// --------------------------------------
type Story = StoryObj<EmployeeSelectorProps>

export const Default: Story = {
  render: (props) => {
    const [loading, setLoading] = useState<boolean>(true)
    const [fetchEmployees, setFetchEmployees] = useState<FetchEmployee[]>([])
    const [selectedGroup, setSelectedGroup] = useState<string>("all")
    const [expandedElements, setExpandedElements] = useState<EntityId[]>([])
    const [selectedEmployees, setSelectedEmployees] = useState<
      EntitySelectEntity[]
    >([])

    const onOpenChange = (open: boolean) => {
      if (open) {
        setTimeout(() => {
          setFetchEmployees([...response.employees.employeeNames])
          setLoading(false)
        }, 500)
      } else {
        setLoading(true)
      }
    }

    const onSelect = (el: EntitySelectEntity[] | EntitySelectEntity | null) => {
      setSelectedEmployees(Array.isArray(el) ? el : el ? [el] : [])
    }

    const onItemExpandedChange = (id: EntityId, expanded: boolean) => {
      if (expanded) {
        setExpandedElements([id].concat(expandedElements))
      } else {
        setExpandedElements(expandedElements.filter((el) => el !== id))
      }
    }

    return (
      <div className="w-60">
        <EntitySelect
          // Groups (hard-coded as an example)
          label="Role"
          hideLabel={true}
          groups={[{ label: "None", value: "all", groupType: "avatar" }]}
          selectedGroup={selectedGroup}
          onGroupChange={(value) => setSelectedGroup(value ?? "all")}
          // Convert our fetched employees to the shape needed by AvatarNameSelector
          entities={fetchEmployees.map((emp) => ({
            id: emp.id,
            name: emp.fullName,
            avatar: emp.avatar?.url || undefined,
            expanded: expandedElements.includes(emp.id),
          }))}
          // Loading animation
          loading={loading}
          icon={Search}
          onOpenChange={onOpenChange}
          onItemExpandedChange={onItemExpandedChange}
          // Basic placeholders and labels
          placeholder="Select employees..."
          selectedItemsCopy="employees selected"
          searchPlaceholder="Search..."
          selectAllLabel="Select all"
          clearLabel="Clear"
          selectedLabel="selected"
          notFoundTitle="No results found"
          notFoundSubtitle="Try searching with a different term."
          // Exposed props from EmployeeSelectorProps
          singleSelector={props.singleSelector}
          onSelect={onSelect}
          selectedEntities={selectedEmployees}
        />
      </div>
    )
  },
  args: {
    singleSelector: false,
  },
}

// --------------------------------------
// TEST STORY WITH ACTIONS
// --------------------------------------
// This story tests the Footer behavior when actions are provided
// along with Select All and Clear options
export const WithActions: Story = {
  render: (props) => {
    const [loading, setLoading] = useState<boolean>(true)
    const [fetchEmployees, setFetchEmployees] = useState<FetchEmployee[]>([])
    const [selectedGroup, setSelectedGroup] = useState<string>("all")
    const [expandedElements, setExpandedElements] = useState<EntityId[]>([])
    const [selectedEmployees, setSelectedEmployees] = useState<
      EntitySelectEntity[]
    >([])

    const onOpenChange = (open: boolean) => {
      if (open) {
        setTimeout(() => {
          setFetchEmployees([...response.employees.employeeNames])
          setLoading(false)
        }, 500)
      } else {
        setLoading(true)
      }
    }

    const onSelect = (el: EntitySelectEntity[] | EntitySelectEntity | null) => {
      const newSelection = Array.isArray(el) ? el : el ? [el] : []
      setSelectedEmployees(newSelection)
    }

    const onItemExpandedChange = (id: EntityId, expanded: boolean) => {
      if (expanded) {
        setExpandedElements([id].concat(expandedElements))
      } else {
        setExpandedElements(expandedElements.filter((el) => el !== id))
      }
    }

    return (
      <div className="w-60">
        <EntitySelect
          label="Role"
          hideLabel={true}
          groups={[{ label: "None", value: "all", groupType: "avatar" }]}
          selectedGroup={selectedGroup}
          onGroupChange={(value) => setSelectedGroup(value ?? "all")}
          entities={fetchEmployees.map((emp) => ({
            id: emp.id,
            name: emp.fullName,
            avatar: emp.avatar?.url || undefined,
            expanded: expandedElements.includes(emp.id),
          }))}
          loading={loading}
          icon={Search}
          onOpenChange={onOpenChange}
          onItemExpandedChange={onItemExpandedChange}
          placeholder="Select employees..."
          selectedItemsCopy="employees selected"
          searchPlaceholder="Search..."
          selectAllLabel="Select all"
          clearLabel="Clear"
          selectedLabel="selected"
          notFoundTitle="No results found"
          notFoundSubtitle="Try searching with a different term."
          singleSelector={props.singleSelector}
          onSelect={onSelect}
          selectedEntities={selectedEmployees}
          // Actions to test Footer behavior
          actions={[
            {
              label: "New employee",
              onClick: () => fn(),
              icon: Plus,
              variant: "default",
            },
          ]}
        />
      </div>
    )
  },
  args: {
    singleSelector: false,
  },
  parameters: {
    docs: {
      description: {
        story: `
This story tests the Footer behavior when actions are provided alongside Select All and Clear options.

**Key test scenarios:**
1. When all employees are selected, "Select All" should be disabled but the dropdown should remain accessible to reach "Clear"
2. The left dropdown (Select All/Clear) and right dropdown (actions) should work independently
3. Actions should be clickable and log their execution
        `,
      },
    },
  },
}
