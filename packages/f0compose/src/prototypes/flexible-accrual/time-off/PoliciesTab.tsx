import { F0Card } from "@factorialco/f0-react"
import { Calendar } from "@factorialco/f0-react/icons/app"

import { policies, type Policy } from "./policiesData"

export function PoliciesTab({
  onOpenPolicy,
}: {
  onOpenPolicy: (id: string) => void
}) {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
      {policies.map((p) => (
        <PolicyCard key={p.id} policy={p} onOpen={() => onOpenPolicy(p.id)} />
      ))}
    </div>
  )
}

function PolicyCard({
  policy,
  onOpen,
}: {
  policy: Policy
  onOpen: () => void
}) {
  return (
    <F0Card
      avatar={{ type: "icon", icon: Calendar }}
      title={policy.name}
      description={`${policy.employees} employees assigned to this policy`}
      secondaryActions={[
        {
          label: "View policy",
          onClick: onOpen,
        },
      ]}
      onClick={onOpen}
    />
  )
}
