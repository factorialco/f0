// Canonical roster of fake people — single source of truth for fictional
// employees across stories and mocks. Each person has a stable identity:
// same name, email, job title, department, manager and avatar everywhere.

export type FakeDepartment = "Engineering" | "Product" | "Design" | "Marketing"

export type FakePerson = {
  id: string
  firstName: string
  lastName: string
  fullName: string
  email: string
  jobTitle: string
  department: FakeDepartment
  managerId: string | null
  image: string
}

// Avatar assets available under /avatars (8 person images, cycled).
const AVATARS = [
  "/avatars/person01.jpg",
  "/avatars/person02.jpg",
  "/avatars/person03.jpg",
  "/avatars/person04.jpg",
  "/avatars/person05.jpg",
  "/avatars/person06.jpg",
  "/avatars/person07.jpg",
  "/avatars/person08.jpg",
] as const

// Strip diacritics so emails stay ASCII: "Saúl" -> "saul".
const slug = (value: string): string =>
  value
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z]/g, "")

type RosterSeed = {
  firstName: string
  lastName: string
  jobTitle: string
  department: FakeDepartment
  managerId: string | null
}

// Order matters: the first 5 are managers (id 1-5). managerId references ids.
const SEEDS: RosterSeed[] = [
  {
    firstName: "Eva",
    lastName: "Lindqvist",
    jobTitle: "Engineering Manager",
    department: "Engineering",
    managerId: null,
  },
  {
    firstName: "Omar",
    lastName: "Haddad",
    jobTitle: "Head of Product",
    department: "Product",
    managerId: null,
  },
  {
    firstName: "Mira",
    lastName: "Castellanos",
    jobTitle: "Design Lead",
    department: "Design",
    managerId: null,
  },
  {
    firstName: "Bruno",
    lastName: "Tavares",
    jobTitle: "Marketing Director",
    department: "Marketing",
    managerId: null,
  },
  {
    firstName: "Priya",
    lastName: "Anand",
    jobTitle: "Staff Engineer",
    department: "Engineering",
    managerId: "person-1",
  },
  {
    firstName: "Aria",
    lastName: "Montgomery",
    jobTitle: "Senior Engineer",
    department: "Engineering",
    managerId: "person-1",
  },
  {
    firstName: "Felix",
    lastName: "Nakamura",
    jobTitle: "Software Engineer",
    department: "Engineering",
    managerId: "person-1",
  },
  {
    firstName: "Lena",
    lastName: "Vossberg",
    jobTitle: "Backend Engineer",
    department: "Engineering",
    managerId: "person-1",
  },
  {
    firstName: "Tobias",
    lastName: "Vlk",
    jobTitle: "Frontend Engineer",
    department: "Engineering",
    managerId: "person-5",
  },
  {
    firstName: "Noor",
    lastName: "Rahimi",
    jobTitle: "Product Manager",
    department: "Product",
    managerId: "person-2",
  },
  {
    firstName: "Diego",
    lastName: "Salcedo",
    jobTitle: "Product Manager",
    department: "Product",
    managerId: "person-2",
  },
  {
    firstName: "Hana",
    lastName: "Okafor",
    jobTitle: "Senior Product Designer",
    department: "Design",
    managerId: "person-3",
  },
  {
    firstName: "Caleb",
    lastName: "Ferro",
    jobTitle: "UX Designer",
    department: "Design",
    managerId: "person-3",
  },
  {
    firstName: "Yuki",
    lastName: "Brenner",
    jobTitle: "Content Strategist",
    department: "Marketing",
    managerId: "person-4",
  },
  {
    firstName: "Sofia",
    lastName: "Marchetti",
    jobTitle: "Marketing Lead",
    department: "Marketing",
    managerId: "person-4",
  },
  {
    firstName: "Ravi",
    lastName: "Bhatt",
    jobTitle: "QA Engineer",
    department: "Engineering",
    managerId: "person-5",
  },
  {
    firstName: "Greta",
    lastName: "Solberg",
    jobTitle: "SRE",
    department: "Engineering",
    managerId: "person-1",
  },
  {
    firstName: "Mateo",
    lastName: "Ferreira",
    jobTitle: "Data Analyst",
    department: "Product",
    managerId: "person-2",
  },
  {
    firstName: "Iris",
    lastName: "Wakeman",
    jobTitle: "UI Designer",
    department: "Design",
    managerId: "person-3",
  },
  {
    firstName: "Aaron",
    lastName: "Mensah",
    jobTitle: "Growth Analyst",
    department: "Marketing",
    managerId: "person-4",
  },
  {
    firstName: "Nadia",
    lastName: "Petrova",
    jobTitle: "Senior Engineer",
    department: "Engineering",
    managerId: "person-1",
  },
  {
    firstName: "Linus",
    lastName: "Achterberg",
    jobTitle: "Software Engineer",
    department: "Engineering",
    managerId: "person-5",
  },
  {
    firstName: "Camila",
    lastName: "Duarte",
    jobTitle: "Product Manager",
    department: "Product",
    managerId: "person-2",
  },
  {
    firstName: "Theo",
    lastName: "Lindqvist",
    jobTitle: "Product Designer",
    department: "Design",
    managerId: "person-3",
  },
]

export const FAKE_PEOPLE: FakePerson[] = SEEDS.map((seed, index) => {
  const fullName = `${seed.firstName} ${seed.lastName}`
  return {
    id: `person-${index + 1}`,
    firstName: seed.firstName,
    lastName: seed.lastName,
    fullName,
    email: `${slug(seed.firstName)}.${slug(seed.lastName)}@factorial.co`,
    jobTitle: seed.jobTitle,
    department: seed.department,
    managerId: seed.managerId,
    image: AVATARS[index % AVATARS.length],
  }
})

// Access people by a stable handle (their lowercased first name — all unique in
// the roster), so consumers can write `fakePeople.eva.firstName` / `.email` /
// `.image` instead of repeating literal strings. Single source of truth.
export const fakePeople = Object.fromEntries(
  FAKE_PEOPLE.map((person) => [person.firstName.toLowerCase(), person])
) as Record<string, FakePerson>

// Deterministic cyclic access: same index -> same person, everywhere.
export const getFakePerson = (index: number): FakePerson =>
  FAKE_PEOPLE[index % FAKE_PEOPLE.length]

export const getFakePersonById = (id: string): FakePerson | undefined =>
  FAKE_PEOPLE.find((person) => person.id === id)

export const getFakeManager = (person: FakePerson): FakePerson | undefined =>
  person.managerId
    ? FAKE_PEOPLE.find((candidate) => candidate.id === person.managerId)
    : undefined

// People whose ids appear as a managerId (the leadership subset).
export const FAKE_MANAGERS: FakePerson[] = FAKE_PEOPLE.filter((person) =>
  FAKE_PEOPLE.some((candidate) => candidate.managerId === person.id)
)
