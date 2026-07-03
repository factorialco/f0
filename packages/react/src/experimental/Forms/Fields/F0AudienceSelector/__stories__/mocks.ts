import type {
  BaseFetchOptions,
  FiltersDefinition,
  PaginatedFetchOptions,
} from "@/hooks/datasource"

import type { F0AudienceEntity, F0AudienceOption } from "../types"

export type AudienceRecord = { entity: F0AudienceEntity }

const individual = (
  id: string,
  firstName: string,
  lastName: string,
  subtitle: string
): F0AudienceEntity => ({
  kind: "individual",
  id,
  name: `${firstName} ${lastName}`,
  firstName,
  lastName,
  subtitle,
})

export const employees: F0AudienceEntity[] = [
  individual("emp-001", "Ada", "Lovelace", "VP of Engineering"),
  individual("emp-002", "Marie", "Curie", "Head of People"),
  individual("emp-003", "Alan", "Turing", "Staff Engineer"),
  individual("emp-004", "Grace", "Hopper", "Principal Engineer"),
  individual("emp-005", "Katherine", "Johnson", "Data Analyst"),
  individual("emp-006", "Sofía", "Castillo", "People Partner"),
  individual("emp-007", "Aarav", "Singh", "Product Manager"),
  individual("emp-008", "Lin", "Chen", "Backend Engineer"),
  individual("emp-009", "Diego", "Hernández", "Payroll Specialist"),
  individual("emp-010", "Amara", "Okafor", "Product Designer"),
  individual("emp-011", "Hellen", "Nguyen", "HR Admin"),
  individual("emp-012", "Yusuf", "Karim", "Account Executive"),
  individual("emp-013", "Elena", "Petrova", "Legal Counsel"),
  individual("emp-014", "Tom", "Anderson", "Sales Manager"),
  individual("emp-015", "Priya", "Sharma", "QA Engineer"),
  individual("emp-016", "Jonas", "Weber", "Finance Manager"),
  individual("emp-017", "Chloé", "Dubois", "Marketing Lead"),
  individual("emp-018", "Marco", "Rossi", "Customer Success"),
  individual("emp-019", "Fatima", "Al-Sayed", "Office Manager"),
  individual("emp-020", "Leo", "Johansson", "IT Support"),
]

export const teams: F0AudienceEntity[] = [
  { kind: "team", id: "team-payroll", name: "Payroll", memberCount: 3 },
  {
    kind: "team",
    id: "team-people-ops",
    name: "People Operations",
    memberCount: 5,
  },
  { kind: "team", id: "team-platform", name: "Platform", memberCount: 8 },
  { kind: "team", id: "team-design", name: "Design", memberCount: 4 },
  { kind: "team", id: "team-sales", name: "Sales", memberCount: 6 },
  { kind: "team", id: "team-finance", name: "Finance", memberCount: 3 },
  { kind: "team", id: "team-marketing", name: "Marketing", memberCount: 4 },
  { kind: "team", id: "team-support", name: "Support", memberCount: 5 },
]

export const legalEntities: F0AudienceEntity[] = [
  {
    kind: "legal_entity",
    id: "le-es",
    name: "Factorial S.L.",
    memberCount: 14,
  },
  {
    kind: "legal_entity",
    id: "le-de",
    name: "Factorial GmbH",
    memberCount: 6,
  },
]

export const workplaces: F0AudienceEntity[] = [
  { kind: "workplace", id: "loc-bcn", name: "Barcelona", memberCount: 10 },
  { kind: "workplace", id: "loc-mad", name: "Madrid", memberCount: 4 },
  { kind: "workplace", id: "loc-ber", name: "Berlin", memberCount: 3 },
  { kind: "workplace", id: "loc-remote", name: "Remote", memberCount: 3 },
]

export const permissionGroups: F0AudienceEntity[] = [
  {
    kind: "permission_group",
    id: "pg-hr-admins",
    name: "HR Admins",
    memberCount: 2,
  },
  {
    kind: "permission_group",
    id: "pg-finance-admins",
    name: "Finance Admins",
    memberCount: 2,
  },
  {
    kind: "permission_group",
    id: "pg-people-leads",
    name: "People Team Leads",
    memberCount: 3,
  },
]

export const everyone: F0AudienceEntity = {
  kind: "everyone",
  id: "everyone",
  name: "Everyone at Factorial",
  memberCount: 20,
}

export const directory: F0AudienceEntity[] = [
  ...employees,
  ...teams,
  ...legalEntities,
  ...workplaces,
  ...permissionGroups,
]

const searchableText = (entity: F0AudienceEntity) =>
  entity.kind === "individual" ? (entity.subtitle ?? "") : ""

/**
 * The ranking the real backend would own: name startsWith < name includes <
 * subtitle includes, then alphabetical — all kinds interleaved in one list.
 */
export const searchDirectory = (query: string): AudienceRecord[] => {
  const normalized = query.trim().toLowerCase()
  const rank = (entity: F0AudienceEntity) => {
    const name = entity.name.toLowerCase()
    if (name.startsWith(normalized)) {
      return 0
    }
    if (name.includes(normalized)) {
      return 1
    }
    if (searchableText(entity).toLowerCase().includes(normalized)) {
      return 2
    }
    return Infinity
  }
  return directory
    .map((entity) => ({ entity, rank: rank(entity) }))
    .filter(({ rank: value }) => value !== Infinity)
    .sort(
      (a, b) =>
        a.rank - b.rank || a.entity.name.localeCompare(b.entity.name, "en")
    )
    .map(({ entity }) => ({ entity }))
}

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

export const createAudienceAdapter = ({
  latencyMs = 250,
  maxResults = 12,
  results,
}: {
  latencyMs?: number
  maxResults?: number
  /** Force a fixed result set (e.g. [] for the empty state) */
  results?: AudienceRecord[]
} = {}) =>
  ({
    fetchData: async ({ search }: BaseFetchOptions<FiltersDefinition>) => {
      await delay(latencyMs)
      return {
        records: results ?? searchDirectory(search ?? "").slice(0, maxResults),
      }
    },
  })

export const createInfiniteAudienceAdapter = ({
  latencyMs = 250,
  perPage = 6,
}: { latencyMs?: number; perPage?: number } = {}) => ({
  paginationType: "infinite-scroll" as const,
  perPage,
  fetchData: async ({
    search,
    pagination,
  }: PaginatedFetchOptions<FiltersDefinition>) => {
    await delay(latencyMs)
    const all = searchDirectory(search ?? "")
    const offset = pagination.cursor ? parseInt(pagination.cursor, 10) : 0
    const records = all.slice(offset, offset + perPage)
    return {
      records,
      total: all.length,
      perPage,
      type: "infinite-scroll" as const,
      cursor: String(offset + perPage),
      hasMore: offset + perPage < all.length,
    }
  },
})

export const mapRecordToOption = (
  record: AudienceRecord
): F0AudienceOption => ({
  entity: record.entity,
})

/** e.g. two direct reports and the team you lead, per the share-panel design */
export const suggestions: F0AudienceOption[] = [
  { entity: employees[2] },
  { entity: employees[8] },
  { entity: teams[0] },
]
