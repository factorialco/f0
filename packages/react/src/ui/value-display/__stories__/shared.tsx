import { NewColor } from "@/components/tags/F0TagDot"
import { fakePeople } from "@/mocks/people"
import {
  PropertyDefinition,
  renderProperty,
} from "@/patterns/OneDataCollection/property-render"
import { useI18n } from "@/lib/providers/i18n"

export const mockItem = {
  id: "1",
  lastName: fakePeople.eva.lastName,
  firstName: fakePeople.eva.firstName,
  salary: 100000,
  date: new Date(2025, 1, 1),
  role: "Engineer",
  amount: 100000,
  status: "Active",
  avatar: fakePeople.eva.image,
  avatarList: [
    {
      type: "person" as const,
      firstName: fakePeople.eva.firstName,
      lastName: fakePeople.eva.lastName,
      src: fakePeople.eva.image,
    },
    {
      type: "person" as const,
      firstName: fakePeople.omar.firstName,
      lastName: fakePeople.omar.lastName,
      src: fakePeople.omar.image,
    },
  ],
  positiveDelta: {
    label: "10%",
    deltaStatus: "positive" as const,
  },
  negativeDelta: {
    label: "10%",
    deltaStatus: "negative" as const,
  },
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
  const i18n = useI18n()
  return renderProperty(item, property, "table", i18n)
}
