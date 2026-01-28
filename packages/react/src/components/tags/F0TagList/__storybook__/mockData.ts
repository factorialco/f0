import { Settings } from "lucide-react"

import { mockImage } from "@/testing/mocks/images"

// Sample dot tags
const dotTags = [
  {
    text: "Category 1",
    color: "viridian" as const,
  },
  {
    text: "Category 2",
    color: "malibu" as const,
  },
  {
    text: "Category 3",
    color: "yellow" as const,
  },
  {
    text: "Category 4",
    color: "purple" as const,
  },
  {
    text: "Category 5",
    color: "lilac" as const,
  },
]

// Sample person tags
const personTags = [
  {
    name: "John Doe",
    src: mockImage("person", 0),
  },
  {
    name: "Jane Smith",
    src: mockImage("person", 1),
  },
  {
    name: "Bob Johnson",
  },
]

// Sample team tags
const teamTags = [
  {
    name: "Engineering",
    src: "/avatars/team01.jpg",
  },
  {
    name: "Product",
  },
  {
    name: "Design",
    src: "/avatars/team03.jpg",
  },
]

// Sample company tags
const companyTags = [
  {
    name: "Acme Inc",
    src: "/avatars/company01.jpg",
  },
  {
    name: "Globex Corp",
    src: "/avatars/company02.jpg",
  },
  {
    name: "Stark Industries",
  },
]

// Sample status tags
const statusTags = [
  {
    variant: "positive" as const,
    text: "Active",
  },
  {
    variant: "warning" as const,
    text: "Pending",
  },
  {
    variant: "critical" as const,
    text: "Inactive",
  },
  {
    variant: "info" as const,
    text: "Processing",
  },
]

// Sample alert tags
const alertTags = [
  {
    level: "info" as const,
    text: "Information",
  },
  {
    level: "warning" as const,
    text: "Warning",
  },
  {
    level: "critical" as const,
    text: "Critical",
  },
]

// Sample balance tags
const balanceTags = [
  {
    status: "positive" as const,
    amount: 1234.56,
    percentage: 10,
  },
  {
    status: "negative" as const,
    amount: -567.89,
    percentage: -10,
  },
  {
    status: "neutral" as const,
    amount: 0,
    percentage: 0,
  },
]

// Sample balance tags
const rawTags = [
  {
    icon: Settings,
    text: "Settings",
  },
  {
    text: "Profile",
  },
  {
    text: "Notifications",
  },
]

export const mockTags = {
  dot: dotTags,
  person: personTags,
  team: teamTags,
  company: companyTags,
  status: statusTags,
  alert: alertTags,
  balance: balanceTags,
  raw: rawTags,
}
