import { NewColor } from "@/components/tags/F0TagDot"
import {
  PropertyDefinition,
  renderProperty,
} from "@/experimental/OneDataCollection/property-render"

export const mockItem = {
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

export function Cell({
  item,
  property,
}: {
  item: typeof mockItem
  property: PropertyDefinition<typeof mockItem>
}) {
  return renderProperty(item, property, "table")
}
