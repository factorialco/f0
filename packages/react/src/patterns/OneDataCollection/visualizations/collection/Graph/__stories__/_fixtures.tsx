import { Ai, Delete, Pencil, Star } from "@/icons/app"

import type { ItemActionsDefinition } from "../../../../item-actions"

/**
 * Org-chart fixture used by Graph stories. Hand-built ~12-node hierarchy
 * with realistic depth + sibling fan-out so layout + zoom variants get
 * meaningful exercise without being noisy.
 */
export type OrgPerson = {
  id: string
  name: string
  role: string
  team: string
  /** Single-parent linkage. `null` marks a root. */
  managerId: string | null
}

export const orgChart: OrgPerson[] = [
  // Root
  {
    id: "p-1",
    name: "Ada Lovelace",
    role: "CEO",
    team: "Executive",
    managerId: null,
  },

  // L1 — direct reports of CEO
  {
    id: "p-2",
    name: "Grace Hopper",
    role: "CTO",
    team: "Engineering",
    managerId: "p-1",
  },
  {
    id: "p-3",
    name: "Marie Curie",
    role: "VP Product",
    team: "Product",
    managerId: "p-1",
  },
  {
    id: "p-4",
    name: "Katherine Johnson",
    role: "VP Design",
    team: "Design",
    managerId: "p-1",
  },

  // L2 — under CTO
  {
    id: "p-5",
    name: "Alan Turing",
    role: "Director, Platform",
    team: "Engineering",
    managerId: "p-2",
  },
  {
    id: "p-6",
    name: "Linus Torvalds",
    role: "Director, Infra",
    team: "Engineering",
    managerId: "p-2",
  },

  // L2 — under VP Product
  {
    id: "p-7",
    name: "Tim Berners-Lee",
    role: "Group PM, Web",
    team: "Product",
    managerId: "p-3",
  },

  // L2 — under VP Design
  {
    id: "p-8",
    name: "Susan Kare",
    role: "Design Manager",
    team: "Design",
    managerId: "p-4",
  },

  // L3 — under Platform director
  {
    id: "p-9",
    name: "Margaret Hamilton",
    role: "Senior Engineer",
    team: "Engineering",
    managerId: "p-5",
  },
  {
    id: "p-10",
    name: "Donald Knuth",
    role: "Staff Engineer",
    team: "Engineering",
    managerId: "p-5",
  },

  // L3 — under Infra director
  {
    id: "p-11",
    name: "Brian Kernighan",
    role: "Senior Engineer",
    team: "Engineering",
    managerId: "p-6",
  },

  // L3 — under Group PM
  {
    id: "p-12",
    name: "Radia Perlman",
    role: "Senior PM",
    team: "Product",
    managerId: "p-7",
  },
]

/**
 * Fixture that contains a 3-cycle (A → B → C → A) plus a clean subtree, so
 * the `Cycle` story can verify the dev-mode warning + cycle-closing-edge
 * drop without losing all visible nodes.
 */
export const cyclicChart: OrgPerson[] = [
  // 3-cycle
  { id: "c-a", name: "Cycle A", role: "Eng", team: "Loop", managerId: "c-c" },
  { id: "c-b", name: "Cycle B", role: "Eng", team: "Loop", managerId: "c-a" },
  { id: "c-c", name: "Cycle C", role: "Eng", team: "Loop", managerId: "c-b" },
  // Clean root + child so the canvas isn't empty when the cycle edges are
  // dropped from the projection.
  { id: "root", name: "Root", role: "CEO", team: "Executive", managerId: null },
  {
    id: "child",
    name: "Child",
    role: "VP",
    team: "Executive",
    managerId: "root",
  },
]

/**
 * Roots for the lazy-mode story. Children are resolved on demand by the
 * loader in the story file.
 */
export const lazyRoots: OrgPerson[] = [
  {
    id: "lazy-1",
    name: "Ada Lovelace",
    role: "CEO",
    team: "Executive",
    managerId: null,
  },
  {
    id: "lazy-2",
    name: "Hedy Lamarr",
    role: "COO",
    team: "Executive",
    managerId: null,
  },
]

/**
 * Lazy-loaded children keyed by parent id. Used by the `LazyMode` story so
 * the loader is deterministic.
 */
export const lazyChildrenByParent: Record<string, OrgPerson[]> = {
  "lazy-1": [
    {
      id: "lazy-1-a",
      name: "Grace Hopper",
      role: "CTO",
      team: "Engineering",
      managerId: "lazy-1",
    },
    {
      id: "lazy-1-b",
      name: "Marie Curie",
      role: "VP Product",
      team: "Product",
      managerId: "lazy-1",
    },
  ],
  "lazy-2": [
    {
      id: "lazy-2-a",
      name: "Margaret Hamilton",
      role: "VP Eng",
      team: "Engineering",
      managerId: "lazy-2",
    },
  ],
}

/**
 * Shared item-actions definition reused by stories that exercise the
 * actions slot (both in-node fallback and detail-panel handoff path).
 */
export const orgItemActions: ItemActionsDefinition<OrgPerson> = (item) => [
  {
    label: "Edit",
    icon: Pencil,
    onClick: () => {
      console.log(`Editing ${item.name}`)
    },
    description: "Modify person details",
    type: "primary",
  },
  {
    label: "View profile",
    icon: Ai,
    onClick: () => {
      console.log(`Viewing ${item.name}'s profile`)
    },
  },
  { type: "separator" },
  {
    label: "Star",
    icon: Star,
    onClick: () => {
      console.log(`Star ${item.name}`)
    },
  },
  {
    label: "Remove",
    icon: Delete,
    onClick: () => {
      console.log(`Remove ${item.name}`)
    },
    critical: true,
    description: "Permanently remove",
  },
]
