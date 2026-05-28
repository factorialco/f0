// Source: CODEOWNERS + packages/react/AGENTS.md (Ownership by zone)

export type OwnershipZone = {
  path: string
  owner: string
  notes: string
}

export const ownershipZones: OwnershipZone[] = [
  { path: "packages/react/src/components/", owner: "@factorialco/foundations", notes: "Stable, public components." },
  { path: "packages/react/src/patterns/", owner: "@factorialco/foundations", notes: "Composed patterns built on stable components." },
  { path: "packages/react/src/ui/", owner: "@factorialco/foundations", notes: "UI primitives (buttons, inputs, layout helpers)." },
  { path: "packages/react/src/kits/", owner: "@factorialco/foundations", notes: "Pre-wired component kits." },
  { path: "packages/react/src/layouts/", owner: "@factorialco/foundations", notes: "Page-level layouts." },
  { path: "packages/react/src/hooks/", owner: "@factorialco/foundations", notes: "Reusable React hooks." },
  { path: "packages/react/src/lib/", owner: "@factorialco/foundations", notes: "Internal utilities, helpers." },
  { path: "packages/react/src/sds/<area>/", owner: "Domain team (per area)", notes: "Specific design system surfaces." },
  { path: "packages/react/src/experimental/<area>/", owner: "Creator team", notes: "Owned by the team that proposed it. Promotion transfers ownership to Foundations." },
]
