import { F0Heading, F0Icon, F0Text } from "@factorialco/f0-react"
import type { IconType } from "@factorialco/f0-react"
import {
  Bank,
  BookOpen,
  Briefcase,
  Building,
  Calendar,
  ChartLine,
  Clock,
  DollarBill,
  Files,
  Filter,
  Globe,
  Laptop,
  Menu,
  Messages,
  SearchPerson,
  Settings as SettingsIcon,
  Shield,
  Sliders,
  Sparkles,
  Tag,
  Target,
  Upload,
  UserProtected,
  Wallet,
} from "@factorialco/f0-react/icons/app"

type SettingCard = {
  id: string
  icon: IconType
  title: string
  description: string
  onClick?: () => void
}

type SettingSection = {
  id: string
  label: string
  icon: IconType
  cards: SettingCard[]
}

export function SettingsHome({ onOpenTimeOff }: { onOpenTimeOff: () => void }) {
  const sections: SettingSection[] = [
    {
      id: "general",
      label: "General",
      icon: Sliders,
      cards: [
        {
          id: "company-details",
          icon: Building,
          title: "Company details",
          description: "View and update your company details.",
        },
        {
          id: "company-page",
          icon: Globe,
          title: "Company page",
          description: "Publish and customize a public page to share...",
        },
        {
          id: "customisation",
          icon: Sliders,
          title: "Customisation",
          description: "Personalise your company workspace.",
        },
        {
          id: "documents",
          icon: Files,
          title: "Documents",
          description: "Organise your document folders.",
        },
        {
          id: "employment-data",
          icon: Briefcase,
          title: "Employment data",
          description: "Define working conditions and contract approval...",
        },
        {
          id: "external-users",
          icon: UserProtected,
          title: "External users",
          description:
            "The users who do not have a contract with the company but...",
        },
        {
          id: "import-history",
          icon: Upload,
          title: "Import history",
          description: "Review and manage the data you import to Factorial.",
        },
        {
          id: "permissions",
          icon: Shield,
          title: "Permissions",
          description: "Manage which employees can see and do what.",
        },
        {
          id: "refer-factorial",
          icon: DollarBill,
          title: "Refer Factorial",
          description:
            "Get a discount for referring us to another company....",
        },
        {
          id: "security-settings",
          icon: Shield,
          title: "Security settings",
          description:
            "Configure how employees log in to Factorial and other...",
        },
        {
          id: "subscription",
          icon: Wallet,
          title: "Subscription",
          description: "Manage your subscription details.",
        },
        {
          id: "workplaces",
          icon: Building,
          title: "Workplaces",
          description:
            "Create and manage workplaces, holidays, work areas, and...",
        },
      ],
    },
    {
      id: "time",
      label: "Time",
      icon: Calendar,
      cards: [
        {
          id: "time-categories",
          icon: Tag,
          title: "Time Categories",
          description:
            "Categorize working hours and establish values for them.",
        },
        {
          id: "time-off",
          icon: Clock,
          title: "Time off",
          description: "Set and assign your company's time off policies.",
          onClick: onOpenTimeOff,
        },
        {
          id: "time-tracking",
          icon: Clock,
          title: "Time Tracking",
          description: "Set and assign your company's time tracking policies.",
        },
        {
          id: "work-schedules",
          icon: Calendar,
          title: "Work schedules",
          description: "Set and assign your company's work schedules.",
        },
      ],
    },
    {
      id: "people",
      label: "People",
      icon: SearchPerson,
      cards: [
        {
          id: "employee-onboarding",
          icon: BookOpen,
          title: "Employee onboarding",
          description: "Manage the onboarding space.",
        },
        {
          id: "engagement",
          icon: Messages,
          title: "Engagement",
          description: "Configure your engagement preferences",
        },
        {
          id: "recruitment",
          icon: SearchPerson,
          title: "Recruitment",
          description: "Manage the recruitment process preferences.",
        },
        {
          id: "reviews",
          icon: ChartLine,
          title: "Reviews",
          description: "Customize your evaluation scoring range.",
        },
        {
          id: "surveys",
          icon: Target,
          title: "Surveys",
          description: "Edit or create ready-to-use templates for your surveys.",
        },
        {
          id: "training",
          icon: BookOpen,
          title: "Training",
          description: "Manage training settings.",
        },
        {
          id: "trust-channel",
          icon: Shield,
          title: "Trust channel",
          description:
            "Set up your Trust channel so employees can safely report...",
        },
      ],
    },
    {
      id: "it",
      label: "IT",
      icon: Laptop,
      cards: [
        {
          id: "device-catalog",
          icon: Laptop,
          title: "Device catalog",
          description: "Manage available device models in your company.",
        },
        {
          id: "it-inventory",
          icon: Menu,
          title: "IT inventory",
          description: "Track and assign devices to employees.",
        },
      ],
    },
    {
      id: "finance",
      label: "Finance",
      icon: Bank,
      cards: [
        {
          id: "expenses",
          icon: Filter,
          title: "Expenses",
          description: "Configure expense categories and approval flows.",
        },
        {
          id: "payroll",
          icon: DollarBill,
          title: "Payroll",
          description: "Configure payroll settings and contributions.",
        },
      ],
    },
  ]

  return (
    <div className="flex w-full flex-col gap-8">
      <PromoBanner />
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-3 flex items-center">
          <F0Icon icon={Filter} size="sm" />
        </div>
        <input
          type="text"
          placeholder="Search for settings..."
          className="h-10 w-full max-w-sm rounded-md border border-solid border-f1-border bg-f1-background pl-9 pr-3 text-sm text-f1-foreground placeholder:text-f1-foreground-secondary focus:border-f1-border-hover focus:outline-none"
        />
      </div>
      {sections.map((section) => (
        <SettingsSection key={section.id} section={section} />
      ))}
    </div>
  )
}

function SettingsSection({ section }: { section: SettingSection }) {
  return (
    <section className="flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <F0Icon icon={section.icon} size="sm" />
        <F0Heading content={section.label} variant="heading" as="h2" />
      </div>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
        {section.cards.map((card) => (
          <SettingCardItem key={card.id} card={card} />
        ))}
      </div>
    </section>
  )
}

function SettingCardItem({ card }: { card: SettingCard }) {
  return (
    <button
      type="button"
      onClick={card.onClick}
      className="flex h-full flex-col items-start gap-2 rounded-lg border border-solid border-f1-border-secondary bg-f1-background p-4 text-left transition-colors cursor-pointer hover:border-f1-border-hover hover:bg-f1-background-hover"
    >
      <div className="flex h-8 w-8 items-center justify-center rounded-md bg-f1-background-secondary text-f1-foreground">
        <F0Icon icon={card.icon} size="sm" />
      </div>
      <F0Heading content={card.title} variant="heading" as="h3" />
      <F0Text content={card.description} variant="description" />
    </button>
  )
}

function PromoBanner() {
  return (
    <div className="flex items-center gap-6 rounded-xl border border-solid border-f1-border-secondary bg-f1-background-secondary p-4">
      <div className="flex h-32 w-48 shrink-0 items-center justify-center rounded-lg bg-f1-background">
        <F0Icon icon={Sparkles} size="md" />
      </div>
      <div className="flex flex-1 flex-col gap-2">
        <F0Heading
          content="An iPhone Air is waiting for you"
          variant="heading"
          as="h2"
        />
        <F0Text
          content="Share your referral link and earn an iPhone Air for every successful signup — plus up to €3000 off your subscription."
          variant="body"
        />
        <div>
          <button
            type="button"
            className="inline-flex h-9 items-center rounded-md bg-f1-background-bold px-4 text-sm font-medium text-f1-foreground-inverse hover:bg-f1-background-boldHover"
          >
            Learn more
          </button>
        </div>
      </div>
    </div>
  )
}

export const settingsModuleIcon = SettingsIcon
