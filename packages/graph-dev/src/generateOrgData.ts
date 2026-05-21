import type { GraphNode } from "@/patterns/F0Graph/types"

interface Employee {
  name: string
  title: string
}

// ── Name pools ──────────────────────────────────────────────────────────
const FIRST_NAMES = [
  "Sofia",
  "Marcus",
  "Elena",
  "Laura",
  "Tomás",
  "Aisha",
  "David",
  "Yuki",
  "Carlos",
  "Priya",
  "Lucas",
  "Fatima",
  "Noah",
  "Mei",
  "Liam",
  "Amara",
  "Oscar",
  "Zara",
  "Hugo",
  "Nadia",
  "Felix",
  "Chloe",
  "Rafael",
  "Hana",
  "Omar",
  "Ingrid",
  "Ravi",
  "Leila",
  "Erik",
  "Ximena",
  "André",
  "Suki",
  "Javier",
  "Anya",
  "Kai",
  "Marta",
  "Dmitri",
  "Isla",
  "Leo",
  "Salma",
  "Mateo",
  "Freya",
  "Idris",
  "Vera",
  "Nico",
  "Dina",
  "Theo",
  "Alina",
  "Soren",
  "Yara",
  "Axel",
  "Lena",
  "Emil",
  "Rosa",
  "Ivan",
  "Maya",
  "Dante",
  "Elsa",
  "Tariq",
  "Greta",
  "Kenji",
  "Nora",
  "Abel",
  "Petra",
  "Kian",
  "Sonia",
  "Henrik",
  "Ada",
  "Samir",
  "Luz",
  "Marcel",
  "Tessa",
  "Nils",
  "Camila",
  "Roman",
  "Iris",
  "Haruki",
  "Bianca",
  "Ezra",
  "Flora",
]

const LAST_NAMES = [
  "Reyes",
  "Chen",
  "Dupont",
  "Vázquez",
  "Herrera",
  "Patel",
  "Park",
  "Kim",
  "Müller",
  "Okafor",
  "Larsson",
  "Tanaka",
  "Costa",
  "Novak",
  "Johansson",
  "Al-Rashid",
  "Fernández",
  "Nakamura",
  "Schmidt",
  "Gupta",
  "Moreau",
  "Kowalski",
  "Berg",
  "Santos",
  "Ivanova",
  "Torres",
  "Lindström",
  "Rao",
  "Dubois",
  "Sato",
  "Petrov",
  "García",
  "Hansen",
  "Bhat",
  "Fischer",
  "Ahmad",
  "Oliveira",
  "Yamamoto",
  "Jensen",
  "Reddy",
  "Laurent",
  "Wójcik",
  "Holm",
  "Silva",
  "Kuznetsov",
  "Ruiz",
  "Eriksson",
  "Sharma",
  "Martin",
  "Choi",
  "Weber",
  "Nair",
  "Lefèvre",
  "Suzuki",
  "Kristensen",
  "Iyer",
  "Bonnet",
  "Ito",
  "Sørensen",
  "Malhotra",
  "Girard",
  "Mazur",
  "Dahl",
  "Mendes",
  "Volkov",
  "Romero",
  "Åberg",
  "Kapoor",
  "Roux",
  "Barański",
]

// ── Org structure templates ─────────────────────────────────────────────
// C-suite titles
const C_SUITE = [
  "Chief Technology Officer",
  "Chief Financial Officer",
  "Chief People Officer",
  "Chief Revenue Officer",
  "Chief Operating Officer",
  "Chief Product Officer",
  "Chief Marketing Officer",
  "Chief Legal Officer",
]

// Department-level titles (VP / Director)
const VP_TITLES = [
  "VP Engineering",
  "VP Product",
  "VP Sales",
  "VP Marketing",
  "VP Finance",
  "VP People",
  "VP Operations",
  "VP Legal",
  "VP Customer Success",
  "VP Data",
  "VP Security",
  "VP Design",
]

const DIRECTOR_TITLES = [
  "Director of Engineering",
  "Director of Product",
  "Director of Sales",
  "Director of Marketing",
  "Director of Finance",
  "Director of HR",
  "Director of Operations",
  "Director of Analytics",
  "Director of QA",
  "Director of Security",
  "Director of Design",
  "Director of Support",
]

const MANAGER_TITLES = [
  "Engineering Manager",
  "Product Manager",
  "Sales Manager",
  "Marketing Manager",
  "Finance Manager",
  "HR Manager",
  "Operations Manager",
  "Analytics Manager",
  "QA Manager",
  "Security Manager",
  "Design Manager",
  "Support Manager",
  "DevOps Manager",
  "Data Engineering Manager",
  "Growth Manager",
]

const LEAD_TITLES = [
  "Tech Lead",
  "Team Lead",
  "Project Lead",
  "Design Lead",
  "QA Lead",
  "Data Lead",
  "Security Lead",
  "Platform Lead",
]

const IC_TITLES = [
  "Senior Software Engineer",
  "Software Engineer",
  "Junior Engineer",
  "Senior Designer",
  "Product Designer",
  "UX Researcher",
  "Senior Product Manager",
  "Data Analyst",
  "Data Scientist",
  "Sales Executive",
  "Account Executive",
  "Account Manager",
  "Marketing Specialist",
  "Content Strategist",
  "Growth Analyst",
  "Financial Analyst",
  "HR Specialist",
  "Recruiter",
  "Operations Analyst",
  "QA Engineer",
  "Security Engineer",
  "DevOps Engineer",
  "Platform Engineer",
  "Frontend Engineer",
  "Backend Engineer",
  "Mobile Engineer",
  "Full Stack Engineer",
  "Machine Learning Engineer",
  "Site Reliability Engineer",
  "Technical Writer",
  "Support Specialist",
  "Customer Success Manager",
]

// ── Seeded PRNG (deterministic across runs) ─────────────────────────────
function mulberry32(seed: number) {
  return function () {
    let t = (seed += 0x6d2b79f5)
    t = Math.imul(t ^ (t >>> 15), t | 1)
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61)
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

// ── Generator ───────────────────────────────────────────────────────────
export function generateOrgData(count: number): GraphNode<Employee>[] {
  const rand = mulberry32(count) // deterministic per size
  const pick = <T>(arr: T[]): T => arr[Math.floor(rand() * arr.length)]

  const nodes: GraphNode<Employee>[] = []
  let nextId = 1

  function addNode(parentId: string | null, title: string): string {
    const id = String(nextId++)
    const name = `${pick(FIRST_NAMES)} ${pick(LAST_NAMES)}`
    nodes.push({
      id,
      parentId,
      data: { name, title },
      childrenCount: 0, // will be patched at the end
    })
    return id
  }

  // ── Layer 0: CEO ──────────────────────────────────────────────────────
  const ceoId = addNode(null, "Chief Executive Officer")

  if (count <= 1) {
    patchChildCounts(nodes)
    return nodes
  }

  // ── Layer 1: C-suite ──────────────────────────────────────────────────
  const cSuiteCount = Math.min(
    C_SUITE.length,
    count <= 50 ? 3 : count <= 300 ? 5 : count <= 700 ? 6 : 8
  )
  const cSuiteIds: string[] = []
  const shuffledCSuite = [...C_SUITE].sort(() => rand() - 0.5)
  for (let i = 0; i < cSuiteCount; i++) {
    cSuiteIds.push(addNode(ceoId, shuffledCSuite[i]))
  }

  if (nodes.length >= count) {
    patchChildCounts(nodes)
    return nodes
  }

  // ── Layer 2: VPs / Directors ──────────────────────────────────────────
  const vpPerCSuite = Math.max(
    1,
    Math.min(4, Math.floor((count - nodes.length) / (cSuiteCount * 6)))
  )
  const vpIds: string[] = []
  for (const cId of cSuiteIds) {
    const vpCount = 1 + Math.floor(rand() * vpPerCSuite)
    for (let i = 0; i < vpCount; i++) {
      if (nodes.length >= count) break
      vpIds.push(
        addNode(cId, rand() > 0.5 ? pick(VP_TITLES) : pick(DIRECTOR_TITLES))
      )
    }
  }

  if (nodes.length >= count) {
    patchChildCounts(nodes)
    return nodes
  }

  // ── Layer 3: Managers ─────────────────────────────────────────────────
  const mgrsPerVp = Math.max(
    1,
    Math.min(6, Math.floor((count - nodes.length) / (vpIds.length * 8)))
  )
  const mgrIds: string[] = []
  for (const vpId of vpIds) {
    const mgrCount = 1 + Math.floor(rand() * mgrsPerVp)
    for (let i = 0; i < mgrCount; i++) {
      if (nodes.length >= count) break
      mgrIds.push(addNode(vpId, pick(MANAGER_TITLES)))
    }
  }

  if (nodes.length >= count) {
    patchChildCounts(nodes)
    return nodes
  }

  // ── Layer 4: Leads (optional for larger orgs) ─────────────────────────
  const leadIds: string[] = []
  if (count > 300) {
    const leadsPerMgr = Math.max(
      1,
      Math.min(4, Math.floor((count - nodes.length) / (mgrIds.length * 6)))
    )
    for (const mgrId of mgrIds) {
      const leadCount = 1 + Math.floor(rand() * leadsPerMgr)
      for (let i = 0; i < leadCount; i++) {
        if (nodes.length >= count) break
        leadIds.push(addNode(mgrId, pick(LEAD_TITLES)))
      }
    }
  }

  if (nodes.length >= count) {
    patchChildCounts(nodes)
    return nodes
  }

  // ── Layer 5: ICs ──────────────────────────────────────────────────────
  // Distribute remaining headcount across leads (or managers if no leads)
  const leafParents = leadIds.length > 0 ? leadIds : mgrIds
  let idx = 0
  while (nodes.length < count) {
    const parentId = leafParents[idx % leafParents.length]
    addNode(parentId, pick(IC_TITLES))
    idx++
  }

  patchChildCounts(nodes)
  return nodes
}

// ── Patch childrenCount after all nodes are placed ──────────────────────
function patchChildCounts(nodes: GraphNode<Employee>[]) {
  const countMap = new Map<string, number>()
  for (const node of nodes) {
    if (node.parentId) {
      countMap.set(node.parentId, (countMap.get(node.parentId) ?? 0) + 1)
    }
  }
  for (const node of nodes) {
    node.childrenCount = countMap.get(node.id) ?? 0
  }
}

// ── Preset sizes ────────────────────────────────────────────────────────
export const DATASET_SIZES = [
  { label: "7 (static)", value: 0 },
  { label: "50", value: 50 },
  { label: "300", value: 300 },
  { label: "700", value: 700 },
  { label: "2,000", value: 2_000 },
  { label: "4,000", value: 4_000 },
  { label: "10,000", value: 10_000 },
  { label: "400,000", value: 400_000 },
] as const
