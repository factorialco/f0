import { F0Dialog, F0Text } from "@factorialco/f0-react"

export type OverlapGroup = {
  category: string
  apps: string[]
  monthlyCost: number
}

type OverlapRow = {
  app: string
  users: string
  monthly: string
  engagement: string
}

type Props = {
  group: OverlapGroup | null
  onClose: () => void
}

const OVERLAP_DETAILS: Record<string, { rows: OverlapRow[]; recommendation: string }> = {
  "project management": {
    rows: [
      { app: "Notion",      users: "18/50",   monthly: "€750",  engagement: "2 tasks/wk" },
      { app: "Confluence",  users: "29/35",   monthly: "€525",  engagement: "5 pages/wk" },
      { app: "Trello",      users: "21/30",   monthly: "€300",  engagement: "3 boards/wk" },
      { app: "Asana",       users: "27/30",   monthly: "€750",  engagement: "8 tasks/wk" },
    ],
    recommendation:
      "Notion has 32 unused licences and low engagement. Consolidating project management to Confluence + Asana could save €1,050/mo and reduce tool fragmentation.",
  },
  "messaging": {
    rows: [
      { app: "Slack",           users: "98/120",  monthly: "€1,200", engagement: "High — daily active" },
      { app: "Microsoft Teams", users: "102/120", monthly: "€1,800", engagement: "Medium — 3×/wk avg" },
    ],
    recommendation:
      "Teams and Slack serve overlapping messaging needs. With Slack at higher engagement, consolidating to Slack and using Teams only for external calls could save €1,800/mo.",
  },
  "storage": {
    rows: [
      { app: "Box",     users: "12/50",  monthly: "€600",  engagement: "2 uploads/wk" },
      { app: "Dropbox", users: "8/30",   monthly: "€450",  engagement: "1 upload/wk" },
    ],
    recommendation:
      "Both Box and Dropbox have very low usage. Migrating to a single storage provider (or Google Drive, already included in Workspace) could eliminate €1,050/mo in redundant costs.",
  },
}

function getDetails(category: string) {
  return OVERLAP_DETAILS[category] ?? { rows: [], recommendation: "No detailed analysis available." }
}

export function OverlapPanel({ group, onClose }: Props) {
  if (!group) return null

  const { rows, recommendation } = getDetails(group.category)

  return (
    <F0Dialog
      isOpen={group !== null}
      onClose={onClose}
      position="right"
      width="lg"
      title={`${group.category.charAt(0).toUpperCase() + group.category.slice(1)} overlap · €${group.monthlyCost.toLocaleString()}/mo`}
      primaryAction={{ label: "Start consolidation plan", onClick: onClose }}
      secondaryAction={{ label: "Export comparison", onClick: onClose }}
      key={group.category}
    >
      <div className="flex flex-col gap-6">
        {/* Comparison table */}
        <div className="flex flex-col gap-2">
          <F0Text content="Tool comparison" variant="label" />
          <div className="overflow-hidden rounded-lg border border-f1-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-f1-border bg-f1-background-secondary">
                  <th className="px-3 py-2 text-left font-medium text-f1-foreground-secondary">App</th>
                  <th className="px-3 py-2 text-left font-medium text-f1-foreground-secondary">Users</th>
                  <th className="px-3 py-2 text-left font-medium text-f1-foreground-secondary">Monthly</th>
                  <th className="px-3 py-2 text-left font-medium text-f1-foreground-secondary">Engagement</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-f1-border">
                {rows.map((row) => (
                  <tr key={row.app} className="bg-f1-background hover:bg-f1-background-secondary">
                    <td className="px-3 py-2 font-medium text-f1-foreground">{row.app}</td>
                    <td className="px-3 py-2 text-f1-foreground-secondary">{row.users}</td>
                    <td className="px-3 py-2 text-f1-foreground-secondary">{row.monthly}</td>
                    <td className="px-3 py-2 text-f1-foreground-secondary">{row.engagement}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* AI recommendation */}
        <div className="flex flex-col gap-2">
          <F0Text content="AI recommendation" variant="label" />
          <div className="rounded-lg border border-f1-border bg-f1-background-secondary px-4 py-3 text-sm leading-relaxed text-f1-foreground-secondary">
            {recommendation}
          </div>
        </div>
      </div>
    </F0Dialog>
  )
}
