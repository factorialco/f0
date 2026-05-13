export interface StaffingCell {
  role: string
  domain: string
  personName: string
  location: string
  startDate?: string
  isVacant: boolean
  isInterim: boolean
  isNewJoiner: boolean
  slackChannel?: string
  arrGoal?: number
}

export const mockedStaffing: StaffingCell[] = [
  // Product Management
  {
    role: "Product Management",
    domain: "Talent",
    personName: "TBH",
    location: "",
    isVacant: true,
    isInterim: false,
    isNewJoiner: false,
    arrGoal: 21500000,
  },
  {
    role: "Product Management",
    domain: "Finance",
    personName: "TBH",
    location: "",
    isVacant: true,
    isInterim: false,
    isNewJoiner: false,
    arrGoal: 8000000,
  },
  {
    role: "Product Management",
    domain: "Time",
    personName: "TBH",
    location: "",
    isVacant: true,
    isInterim: false,
    isNewJoiner: false,
    arrGoal: 25000000,
  },
  {
    role: "Product Management",
    domain: "Platform",
    personName: "TBH",
    location: "",
    isVacant: true,
    isInterim: false,
    isNewJoiner: false,
    arrGoal: 12500000,
  },
  {
    role: "Product Management",
    domain: "Growth",
    personName: "TBH",
    location: "",
    isVacant: true,
    isInterim: false,
    isNewJoiner: false,
    arrGoal: 8000000,
  },

  // Product Design
  {
    role: "Product Design",
    domain: "Talent",
    personName: "Roberto Jimenez",
    location: "MAD",
    isVacant: false,
    isInterim: false,
    isNewJoiner: false,
  },
  {
    role: "Product Design",
    domain: "Finance",
    personName: "Lola Gimenez",
    location: "BCN",
    isVacant: false,
    isInterim: false,
    isNewJoiner: false,
  },
  {
    role: "Product Design",
    domain: "Time",
    personName: "TBH",
    location: "",
    isVacant: true,
    isInterim: false,
    isNewJoiner: false,
  },
  {
    role: "Product Design",
    domain: "Platform",
    personName: "TBH",
    location: "",
    isVacant: true,
    isInterim: false,
    isNewJoiner: false,
  },
  {
    role: "Product Design",
    domain: "Growth",
    personName: "TBH",
    location: "",
    isVacant: true,
    isInterim: false,
    isNewJoiner: false,
  },

  // Product Engineering
  {
    role: "Product Engineering",
    domain: "Talent",
    personName: "TBH",
    location: "",
    isVacant: true,
    isInterim: false,
    isNewJoiner: false,
  },
  {
    role: "Product Engineering",
    domain: "Finance",
    personName: "Carlos Dominguez",
    location: "MAD",
    isVacant: false,
    isInterim: false,
    isNewJoiner: false,
  },
  {
    role: "Product Engineering",
    domain: "Time",
    personName: "Pol Torrent",
    location: "BCN",
    isVacant: false,
    isInterim: false,
    isNewJoiner: true,
  },
  {
    role: "Product Engineering",
    domain: "Platform",
    personName: "Gaston Rey",
    location: "BCN",
    isVacant: false,
    isInterim: true,
    isNewJoiner: false,
  },
  {
    role: "Product Engineering",
    domain: "Growth",
    personName: "Guilherme Cattani",
    location: "BCN",
    isVacant: false,
    isInterim: false,
    isNewJoiner: true,
  },
]
