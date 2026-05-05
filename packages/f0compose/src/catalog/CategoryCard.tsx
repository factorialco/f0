import { F0Card } from "@factorialco/f0-react"
import { Person } from "@factorialco/f0-react/icons/app"
import type { PrototypeMeta } from "@/prototypes/types"
import { emojiForModule } from "@/shell/modules"

const audienceLabels = {
  admin: "Admin",
  employee: "Employee",
  manager: "Manager",
} as const

export function PrototypeCard({ meta }: { meta: PrototypeMeta }) {
  const audience = meta.audience.map((a) => audienceLabels[a]).join(", ")

  return (
    <F0Card
      title={meta.title}
      description={meta.description}
      link={`/p/${meta.slug}`}
      avatar={{ type: "emoji", emoji: emojiForModule[meta.module] }}
      metadata={[
        {
          icon: Person,
          property: { type: "text", label: "Audience", value: audience },
        },
      ]}
    />
  )
}
