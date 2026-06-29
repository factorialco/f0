import type { Meta, StoryObj } from "@storybook/react-vite"

import {
  Briefcase,
  Building,
  Calendar,
  ChartLine,
  ChartPie,
  Clock,
  Envelope,
  Exit,
  File,
  Flag,
  Globe,
  Heart,
  Home,
  Inbox,
  Megaphone,
  Money,
  PalmTree,
  People,
  Person,
  Plane,
  Rocket,
  Settings,
  Shield,
  Star,
  Suitcase,
  Target,
} from "@/icons/app"
import { F0AiChatProvider } from "@/sds/ai/F0AiChat"

import { PaneledNav } from "../PaneledNav"
import { NavSection } from "../types"

// Sections modelled on F0's real product navigation (HR / people platform
// modules), grouped the way the live sidebar groups them. Counts are
// intentionally uneven to reflect a realistic product nav.
const sections: NavSection[] = [
  {
    title: "Workspace",
    items: [
      { label: "Home", href: "/home", icon: Home },
      { label: "Inbox", href: "/inbox", icon: Inbox },
      { label: "Messaging", href: "/messaging", icon: Envelope },
    ],
  },
  {
    title: "People",
    items: [
      { label: "Organization", href: "/organization", icon: People },
      { label: "Profiles", href: "/profiles", icon: Person },
      { label: "Recruitment", href: "/recruitment", icon: Suitcase },
      { label: "Onboarding", href: "/onboarding", icon: Rocket },
      { label: "Time off", href: "/time-off", icon: PalmTree },
    ],
  },
  {
    title: "Time",
    items: [
      { label: "Calendar", href: "/calendar", icon: Calendar },
      { label: "Clock in", href: "/clock-in", icon: Clock },
    ],
  },
  {
    title: "Finance",
    items: [
      { label: "Payroll", href: "/payroll", icon: Money },
      { label: "Expenses", href: "/expenses", icon: File },
      { label: "Invoices", href: "/invoices", icon: File },
      { label: "Budgets", href: "/budgets", icon: ChartPie },
      { label: "Reports", href: "/reports", icon: ChartLine },
      { label: "Spending", href: "/spending", icon: Briefcase },
    ],
  },
  {
    title: "Company",
    items: [
      { label: "Documents", href: "/documents", icon: File },
      { label: "Announcements", href: "/announcements", icon: Megaphone },
      { label: "Goals", href: "/goals", icon: Target },
      { label: "Spaces", href: "/spaces", icon: Building },
      { label: "Travel", href: "/travel", icon: Plane },
      { label: "Benefits", href: "/benefits", icon: Heart },
    ],
  },
  {
    title: "Talent",
    items: [
      { label: "Performance", href: "/performance", icon: Star },
      { label: "Learning", href: "/learning", icon: Flag },
      { label: "Engagement", href: "/engagement", icon: Heart },
    ],
  },
  {
    title: "Admin",
    items: [
      { label: "Settings", href: "/settings", icon: Settings },
      { label: "Security", href: "/security", icon: Shield },
      { label: "Integrations", href: "/integrations", icon: Globe },
    ],
  },
]

const userMenuItems = [
  {
    label: "My settings",
    href: "/settings",
    icon: Settings,
  },
  { type: "separator" as const },
  {
    label: "Log out",
    icon: Exit,
    critical: true,
    onClick: () => console.log("log out"),
  },
]

const meta = {
  title: "Patterns/Navigation/PaneledNav",
  component: PaneledNav,
  parameters: {
    layout: "fullscreen",
  },
  args: {
    sections,
    user: {
      firstName: "Dani",
      lastName: "Moreno",
      src: "/avatars/person04.jpg",
    },
    userMenuItems,
  },
  decorators: [
    (Story) => (
      <F0AiChatProvider enabled>
        <div className="min-h-[28rem] bg-f1-background-secondary">
          <Story />
        </div>
      </F0AiChatProvider>
    ),
  ],
} satisfies Meta<typeof PaneledNav>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const ThreeColumns: Story = {
  args: {
    columns: 3,
  },
}

export const WithNotificationBadge: Story = {
  args: {
    notificationsBadge: true,
  },
}
