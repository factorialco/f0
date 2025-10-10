import { NewColor } from "@/components/tags/F0TagDot"
import { Placeholder } from "@/icons/app"
import { Meta, StoryObj } from "@storybook/react-vite"
import {
  PropertyDefinition,
  renderProperty,
} from "../../../experimental/OneDataCollection/property-render"

function Cell({
  item,
  property,
}: {
  item: typeof mockItem
  property: PropertyDefinition<typeof mockItem>
}) {
  return renderProperty(item, property, "table")
}
const meta = {
  title: "Data Collection/Cell Types",
  component: Cell,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Cell types are a way to render data in a data collection. They are defined in the `render` function of the data collection. The type is the cell type to render and the value depends on that type.",
      },
      source: {
        code: null,
      },
    },
  },
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

const mockItem = {
  id: "1",
  lastName: "Doe",
  firstName: "John",
  salary: 100000,
  date: new Date(2025, 1, 1),
  role: "Engineer",
  amount: 100000,
  status: "Active",
  avatar: "/avatars/person01.jpg",
  avatarList: [
    {
      type: "person" as const,
      firstName: "John",
      lastName: "Doe",
      src: "/avatars/person01.jpg",
    },
    {
      type: "person" as const,
      firstName: "Josep",
      lastName: "Rey",
      src: "/avatars/person02.jpg",
    },
  ],
  companyName: "Factorial",
  companyLogo: "/avatars/factorial.png",
  teamName: "Engineering",
  teamLogo: "/avatars/team03.jpg",
  skills: [
    {
      label: "React",
      color: "viridian" as NewColor,
      description:
        "React is a JavaScript library for building user interfaces.",
    },
    {
      label: "TypeScript",
      color: "malibu" as NewColor,
      description:
        "TypeScript is a statically typed superset of JavaScript that adds optional types and other features to the language.",
    },
    {
      label: "UI/UX",
      color: "purple" as NewColor,
      description:
        "UI/UX design is the process of designing user interfaces and experiences for web and mobile applications.",
    },
    {
      label: "Testing",
      color: "yellow" as NewColor,
      description:
        "Testing is the process of verifying that a software application or system behaves as expected under specified conditions.",
    },
    {
      label: "GraphQL",
      color: "lilac" as NewColor,
      description:
        "GraphQL is a query language for APIs and a runtime for fulfilling those queries with existing data.",
    },
  ],
}

export const TextType: Story = {
  args: {
    item: mockItem,
    property: {
      label: "Name",
      render: (item) => item.firstName + " " + item.lastName,
    },
  },
}

export const TextInputAsObject: Story = {
  args: {
    item: mockItem,
    property: {
      label: "Name",
      render: (item) => ({
        type: "text",
        value: item.firstName + " " + item.lastName,
      }),
    },
  },
}

export const TextValueInputAsObject: Story = {
  args: {
    item: mockItem,
    property: {
      label: "Name",
      render: (item) => ({
        type: "text",
        value: {
          text: item.firstName + " " + item.lastName,
        },
      }),
    },
  },
}

export const TextWithPlaceholder: Story = {
  args: {
    item: mockItem,
    property: {
      label: "Name",
      render: () => ({
        type: "text",
        value: {
          text: undefined,
          placeholder: "Some placeholder",
        },
      }),
    },
  },
}

export const LongTextType: Story = {
  args: {
    item: mockItem,
    property: {
      label: "Description",
      render: () => ({
        type: "longText",
        value:
          "This is a very long description that demonstrates the longText cell type functionality. The text will be truncated with ellipsis when it exceeds the specified number of lines, and a tooltip will show the full content when hovering over the truncated text.",
      }),
    },
  },
}

export const LongTextFullText: Story = {
  args: {
    item: mockItem,
    property: {
      label: "Description (full text)",
      render: () => ({
        type: "longText",
        value: {
          text: "This is a very long description that demonstrates the longText cell type with a specific number of lines. The text will be truncated after 2 lines and show an ellipsis. When you hover over the text, a tooltip will display the full content. This is useful for maintaining consistent row heights in tables while still showing more content than a single line would allow.",
          full: true,
        },
      }),
    },
  },
}

export const LongTextWithPlaceholder: Story = {
  args: {
    item: mockItem,
    property: {
      label: "Description",
      render: () => ({
        type: "longText",
        value: {
          text: undefined,
          placeholder: "No description available",
        },
      }),
    },
  },
}

export const NumberInputAsObject: Story = {
  args: {
    item: mockItem,
    property: {
      label: "Employee ID",
      render: (item) => ({
        type: "number",
        value: Number(item.id),
      }),
    },
  },
}

export const NumberValueInputAsObject: Story = {
  args: {
    item: mockItem,
    property: {
      label: "Employee ID",
      render: (item) => ({
        type: "number",
        value: { number: Number(item.id) },
      }),
    },
  },
}

export const NumberValueInputAsObjectWithDecimals: Story = {
  args: {
    item: mockItem,
    property: {
      label: "Value",
      render: () => ({
        type: "number",
        value: { number: 1234.56789, decimalPlaces: 0 },
      }),
    },
  },
}

export const NumberValueInputAsObjectWithUnits: Story = {
  args: {
    item: mockItem,
    property: {
      label: "Speed",
      render: () => ({
        type: "number",
        value: { number: 82, units: "km/h", decimalPlaces: 2 },
      }),
    },
  },
}

export const NumberWithPlaceholder: Story = {
  args: {
    item: mockItem,
    property: {
      label: "Name",
      render: () => ({
        type: "number",
        value: {
          number: undefined,
          placeholder: "Some placeholder",
        },
      }),
    },
  },
}

export const DateInputAsObject: Story = {
  args: {
    item: mockItem,
    property: {
      label: "Date",
      render: (item) => ({
        type: "date",
        value: item.date,
      }),
    },
  },
}

export const DateValueInputAsObject: Story = {
  args: {
    item: mockItem,
    property: {
      label: "Date",
      render: (item) => ({
        type: "date",
        value: { date: item.date },
      }),
    },
  },
}

export const DateWithPlaceholder: Story = {
  args: {
    item: mockItem,
    property: {
      label: "Date",
      render: () => ({
        type: "date",
        value: { date: undefined, placeholder: "Some placeholder" },
      }),
    },
  },
}

export const AmountInputAsObject: Story = {
  args: {
    item: mockItem,
    property: {
      label: "Amount",
      render: (item) => ({
        type: "amount",
        value: item.amount,
      }),
    },
  },
}

export const AmountValueInputAsObject: Story = {
  args: {
    item: mockItem,
    property: {
      label: "Amount",
      render: (item) => ({
        type: "amount",
        value: { amount: item.amount },
      }),
    },
  },
}

export const AmountWithPlaceholder: Story = {
  args: {
    item: mockItem,
    property: {
      label: "Amount",
      render: () => ({
        type: "amount",
        value: { amount: undefined, placeholder: "Some placeholder" },
      }),
    },
  },
}

export const AmountWithCurrency: Story = {
  args: {
    item: mockItem,
    property: {
      label: "Amount",
      render: () => ({
        type: "amount",
        value: {
          amount: 1234.56789,
          currency: { symbol: "$", symbolPosition: "left", decimalPlaces: 2 },
        },
      }),
    },
  },
}

export const AmountWithCurrencyEuro: Story = {
  args: {
    item: mockItem,
    property: {
      label: "Amount",
      render: () => ({
        type: "amount",
        value: {
          amount: 1234.56789,
          currency: { symbol: "EUR", decimalPlaces: 2 },
        },
      }),
    },
  },
}

export const AvatarListType: Story = {
  args: {
    item: mockItem,
    property: {
      label: "Avatar List",
      render: (item) => ({
        type: "avatarList",
        value: {
          avatarList: item.avatarList,
          max: 2,
        },
      }),
    },
  },
}

export const StatusType: Story = {
  args: {
    item: mockItem,
    property: {
      label: "Status",
      render: (item) => ({
        type: "status",
        value: {
          status: "critical",
          label: item.status,
        },
      }),
    },
  },
}

export const PersonType: Story = {
  args: {
    item: mockItem,
    property: {
      label: "Person",
      render: (item) => ({
        type: "person",
        value: {
          firstName: item.firstName,
          lastName: item.lastName,
          src: item.avatar,
        },
      }),
    },
  },
}

export const PersonTypeWithBadge: Story = {
  args: {
    item: mockItem,
    property: {
      label: "Person",
      render: (item) => ({
        type: "person",
        value: {
          firstName: item.firstName,
          lastName: item.lastName,
          src: item.avatar,
          badge: {
            type: "warning",
            icon: Placeholder,
            tooltip: "This is a tooltip",
          },
        },
      }),
    },
  },
}

export const CompanyType: Story = {
  args: {
    item: mockItem,
    property: {
      label: "Company",
      render: (item) => ({
        type: "company",
        value: {
          name: item.companyName,
          src: item.companyLogo,
        },
      }),
    },
  },
}

export const PersonTypeWithModuleBadge: Story = {
  args: {
    item: mockItem,
    property: {
      label: "Person",
      render: (item) => ({
        type: "person",
        value: {
          firstName: item.firstName,
          lastName: item.lastName,
          src: item.avatar,
          badge: {
            type: "module",
            module: "inbox",
          },
        },
      }),
    },
  },
}

export const TeamType: Story = {
  args: {
    item: mockItem,
    property: {
      label: "Team",
      render: (item) => ({
        type: "team",
        value: {
          name: item.teamName,
          src: item.teamLogo,
        },
      }),
    },
  },
}

export const TagType: Story = {
  args: {
    item: mockItem,
    property: {
      label: "Tag",
      render: (item) => ({
        type: "tag",
        value: {
          label: item.status,
          color: item.status === "active" ? "green" : "red",
        },
      }),
    },
  },
}

export const AlertTagType: Story = {
  args: {
    item: mockItem,
    property: {
      label: "Alert Tag",
      render: () => ({
        type: "alertTag",
        value: {
          level: "critical",
          label: "Critical",
        },
      }),
    },
  },
}

export const DotTagType: Story = {
  args: {
    item: mockItem,
    property: {
      label: "Dot Tag",
      render: (item) => ({
        type: "dotTag",
        value: {
          label: item.role,
          color: "viridian",
        },
      }),
    },
  },
}

export const TagArrayType: Story = {
  args: {
    item: mockItem,
    property: {
      label: "Multiple Tags",
      render: (item) => ({
        type: "tagList",
        value: {
          type: "dot",
          tags: item.skills.map((skill) => ({
            text: skill.label,
            description: skill.description,
            color: skill.color,
          })),
          max: 3,
        },
      }),
    },
  },
}

export const IconType: Story = {
  args: {
    item: mockItem,
    property: {
      label: "Icon",
      render: () => ({
        type: "icon",
        value: {
          icon: Placeholder,
          label: "Icon",
        },
      }),
    },
  },
}

export const FileType: Story = {
  args: {
    item: mockItem,
    property: {
      label: "File",
      render: () => ({
        type: "file",
        value: {
          name: "My file",
          type: "application/pdf",
        },
      }),
    },
  },
}

export const FolderType: Story = {
  args: {
    item: mockItem,
    property: {
      label: "Folder",
      render: () => ({
        type: "folder",
        value: {
          name: "My folder",
        },
      }),
    },
  },
}

export const PercentageInputAsObject: Story = {
  args: {
    item: mockItem,
    property: {
      label: "Percentage",
      render: () => ({
        type: "percentage",
        value: 42,
      }),
    },
  },
}

export const PercentageValueInputAsObject: Story = {
  args: {
    item: mockItem,
    property: {
      label: "Percentage",
      render: () => ({
        type: "percentage",
        value: { percentage: 50 },
      }),
    },
  },
}

export const PercentageWithLabel: Story = {
  args: {
    item: mockItem,
    property: {
      label: "Percentage",
      render: () => ({
        type: "percentage",
        value: {
          percentage: 75,
          label: "324 out of 432",
        },
      }),
    },
  },
}

export const PercentageWithPlaceholder: Story = {
  args: {
    item: mockItem,
    property: {
      label: "Percentage",
      render: () => ({
        type: "percentage",
        value: {
          percentage: undefined,
          placeholder: "There is no data yet",
        },
      }),
    },
  },
}
