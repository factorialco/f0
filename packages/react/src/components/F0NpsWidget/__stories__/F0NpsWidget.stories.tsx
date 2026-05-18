import type { Meta, StoryObj } from "@storybook/react-vite"

import { useState } from "react"
import { fn } from "storybook/test"

import { F0NpsWidget } from "../"
import type { ModuleId } from "../../avatars/F0AvatarModule/modules"

const moduleTitles: Record<ModuleId, string> = {
  ai_ticketing:
    "How likely are you to recommend our AI Ticketing feature to a colleague?",
  analytics: "How satisfied are you with the Analytics module?",
  ats: "How likely are you to recommend our Applicant Tracking System?",
  benefits: "How would you rate your experience with the Benefits module?",
  billing: "How satisfied are you with the Billing experience?",
  calendar: "How likely are you to recommend the Calendar feature?",
  cards: "How satisfied are you with the Cards module?",
  communities: "How likely are you to recommend Communities to a colleague?",
  company_attendance:
    "How satisfied are you with the Company Attendance module?",
  company_documents:
    "How likely are you to recommend Company Documents to a colleague?",
  company_projects:
    "How satisfied are you with the Company Projects experience?",
  company_trainings:
    "How likely are you to recommend Company Trainings to a colleague?",
  compensations: "How satisfied are you with the Compensations module?",
  complaints: "How likely are you to recommend the Complaints feature?",
  device_catalog: "How satisfied are you with the Device Catalog experience?",
  discover: "How likely are you to recommend the Discover feature?",
  documents: "How satisfied are you with the Documents module?",
  employee_attendance:
    "How likely are you to recommend Employee Attendance to a colleague?",
  employees: "How satisfied are you with the Employees module?",
  engagement: "How likely are you to recommend the Engagement module?",
  engagement_insights: "How satisfied are you with Engagement Insights so far?",
  my_surveys: "How likely are you to recommend Surveys to a colleague?",
  goals: "How satisfied are you with the Goals module?",
  get_started: "How was your onboarding experience with Factorial?",
  home: "How satisfied are you with the Factorial home experience?",
  hub: "How likely are you to recommend the Hub to a colleague?",
  it_management: "How satisfied are you with the IT Management module?",
  kudos: "How likely are you to recommend the Kudos feature to a colleague?",
  lms: "How satisfied are you with the Learning Management System?",
  meetings: "How likely are you to recommend the Meetings feature?",
  my_benefits: "How satisfied are you with the My Benefits experience?",
  my_documents: "How likely are you to recommend My Documents to a colleague?",
  my_projects: "How satisfied are you with the My Projects module?",
  my_spending: "How likely are you to recommend My Spending to a colleague?",
  my_trainings: "How satisfied are you with the My Trainings experience?",
  notifications: "How satisfied are you with the Notifications experience?",
  inbox: "How likely are you to recommend the Inbox feature to a colleague?",
  overviews: "How satisfied are you with the Overviews module?",
  pages: "How likely are you to recommend Pages to a colleague?",
  payroll_bundle: "How satisfied are you with the Payroll experience?",
  performance: "How likely are you to recommend the Performance module?",
  performance_v2: "How satisfied are you with the new Performance experience?",
  playground: "How satisfied are you with the Playground experience?",
  processes: "How likely are you to recommend Processes to a colleague?",
  profile: "How satisfied are you with the Profile module?",
  project_management:
    "How likely are you to recommend Project Management to a colleague?",
  reports: "How satisfied are you with the Reports module?",
  salary_advance:
    "How likely are you to recommend Salary Advance to a colleague?",
  settings: "How satisfied are you with the Settings experience?",
  personal_settings:
    "How likely are you to recommend Factorial's settings to a colleague?",
  shift_management: "How satisfied are you with the Shift Management module?",
  shifts: "How likely are you to recommend Shifts to a colleague?",
  social: "How satisfied are you with the Social module?",
  software:
    "How likely are you to recommend the Software module to a colleague?",
  space_control: "How satisfied are you with the Space Control experience?",
  talent_analytics: "How likely are you to recommend Talent Analytics?",
  tasks: "How satisfied are you with the Tasks module?",
  timeoff:
    "How likely are you to recommend the Time Off module to a colleague?",
  workflows: "How satisfied are you with the Workflows module?",
  "ai-reports": "How likely are you to recommend AI Reports to a colleague?",
  "clock-in": "How satisfied are you with the Clock In experience?",
  "finance-accounting":
    "How likely are you to recommend Finance Accounting to a colleague?",
  "finance-sales": "How satisfied are you with the Finance Sales module?",
  "finance-spending":
    "How likely are you to recommend Finance Spending to a colleague?",
  "finance-treasury": "How satisfied are you with the Finance Treasury module?",
  "finance-workspace":
    "How likely are you to recommend Finance Workspace to a colleague?",
  "new-trainings": "How satisfied are you with the new Trainings experience?",
  "time-tracking":
    "How likely are you to recommend Time Tracking to a colleague?",
}

const moduleOptions = [
  undefined,
  "ai_ticketing",
  "analytics",
  "ats",
  "benefits",
  "billing",
  "calendar",
  "cards",
  "communities",
  "company_attendance",
  "company_documents",
  "company_projects",
  "company_trainings",
  "compensations",
  "complaints",
  "device_catalog",
  "discover",
  "documents",
  "employee_attendance",
  "employees",
  "engagement",
  "engagement_insights",
  "my_surveys",
  "goals",
  "get_started",
  "home",
  "hub",
  "it_management",
  "kudos",
  "lms",
  "meetings",
  "my_benefits",
  "my_documents",
  "my_projects",
  "my_spending",
  "my_trainings",
  "notifications",
  "inbox",
  "overviews",
  "pages",
  "payroll_bundle",
  "performance",
  "playground",
  "processes",
  "profile",
  "project_management",
  "reports",
  "salary_advance",
  "settings",
  "personal_settings",
  "shift_management",
  "shifts",
  "social",
  "software",
  "space_control",
  "talent_analytics",
  "tasks",
  "timeoff",
  "workflows",
] as const

const meta: Meta<typeof F0NpsWidget> = {
  component: F0NpsWidget,
  title: "NpsWidget",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    module: {
      control: { type: "select" },
      options: moduleOptions,
    },
  },
}

export default meta
type Story = StoryObj<typeof F0NpsWidget>

const ControlledWidget = (args: React.ComponentProps<typeof F0NpsWidget>) => {
  const [open, setOpen] = useState(true)
  const title =
    args.module !== undefined ? moduleTitles[args.module] : args.title
  return (
    <div className="relative h-96 w-[560px]">
      {!open && (
        <button
          className="rounded border border-f1-border px-3 py-1 text-sm"
          onClick={() => setOpen(true)}
        >
          Reopen widget
        </button>
      )}
      <F0NpsWidget
        {...args}
        title={title ?? ""}
        open={open}
        onClose={() => setOpen(false)}
      />
    </div>
  )
}

export const Default: Story = {
  render: (args) => <ControlledWidget {...args} />,
  args: {
    title:
      "How likely are you to recommend Factorial's onboarding experience to another company?",
    module: "engagement",
    onSubmit: fn(),
  },
}

export const WithoutModule: Story = {
  render: (args) => <ControlledWidget {...args} />,
  args: {
    title: "How likely are you to recommend Factorial to a colleague?",
    onSubmit: fn(),
  },
}

export const Submitting: Story = {
  render: (args) => <ControlledWidget {...args} />,
  args: {
    title: "How likely are you to recommend Factorial to a colleague?",
    module: "engagement",
    isSubmitting: true,
    onSubmit: fn(),
  },
}
