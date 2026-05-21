import { Person, Tag } from "@factorialco/f0-react/icons/app"

import type { PrototypeMeta } from "@/prototypes/types"

const audienceLabels = {
  admin: "Admin",
  employee: "Employee",
  manager: "Manager",
} as const

/**
 * Card metadata for each prototype in the catalog. Render functions return
 * the canonical `{ type, value }` cell shape — never JSX. Cell value shapes
 * confirmed in `packages/react/src/ui/value-display/types/{tag,text}/*.tsx`.
 */
export const prototypeCardProperties = [
  {
    label: "Category",
    icon: Tag,
    render: (m: PrototypeMeta) => ({
      type: "tag" as const,
      value: { label: m.category },
    }),
  },
  {
    label: "Audience",
    icon: Person,
    render: (m: PrototypeMeta) => ({
      type: "text" as const,
      value: m.audience.map((a) => audienceLabels[a]).join(", "),
    }),
  },
]
