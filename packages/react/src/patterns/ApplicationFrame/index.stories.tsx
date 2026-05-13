import type { Meta, StoryObj } from "@storybook/react-vite"

import { ComponentProps } from "react"
import { expect, within } from "storybook/test"

import { F0Button } from "@/components/F0Button"
import { F0Icon, IconType } from "@/components/F0Icon"
import { Lightbulb } from "@/icons/app"
import ArrowRight from "@/icons/app/ArrowRight"
import ExternalLink from "@/icons/app/ExternalLink"
import Marketplace from "@/icons/app/Marketplace"
import { F0Box } from "@/lib/F0Box"
import { Page } from "@/patterns/Navigation/Page"
import * as PageStories from "@/patterns/Navigation/Page/index.stories"
import * as SidebarStories from "@/patterns/Navigation/Sidebar/index.stories"
import { Sidebar } from "@/patterns/Navigation/Sidebar/Sidebar"
import { useAiChat } from "@/sds/ai/F0AiChat"
import {
  type CandidateProfile,
  type ExpenseProfile,
  type JobPostingProfile,
  type RequisitionProfile,
  type PersonProfile,
  type UploadedFile,
  type VacancyProfile,
} from "@/sds/ai/F0AiChat/types"
import { Action } from "@/ui/Action"

import { ApplicationFrame } from "./index"

/**
 * Mock people database for @mention search and entity resolution in Storybook.
 * Based on Factorial's development seed employees.
 */
const mockPeople: PersonProfile[] = [
  {
    id: "5",
    firstName: "Hellen",
    lastName: "the HR",
    jobTitle: "People Director, CPO",
  },
  { id: "6", firstName: "Phebe", lastName: "Jacobson", jobTitle: "CEO, I" },
  { id: "7", firstName: "Arnulfo", lastName: "Maggio", jobTitle: "CTO, I" },
  { id: "8", firstName: "Bernarda", lastName: "Wilkinson", jobTitle: "CFO, I" },
  { id: "10", firstName: "Anitra", lastName: "Schaden", jobTitle: "CMO, I" },
  {
    id: "11",
    firstName: "Fidel",
    lastName: "Johnson",
    jobTitle: "People Director, CPO",
  },
  {
    id: "12",
    firstName: "Jeanetta",
    lastName: "McCullough",
    jobTitle: "Store Manager, I",
  },
  {
    id: "13",
    firstName: "Florencio",
    lastName: "Little",
    jobTitle: "Sales Manager, I",
  },
  {
    id: "14",
    firstName: "Fae",
    lastName: "Fritsch",
    jobTitle: "Design Director, I",
  },
  {
    id: "15",
    firstName: "Jordan",
    lastName: "Kunze",
    jobTitle: "Sales Manager, I",
  },
]

/**
 * Mock person resolver — looks up from mockPeople, falls back to generic profile.
 */
const mockPersonResolver = (id: string): Promise<PersonProfile> =>
  new Promise((resolve) => {
    setTimeout(() => {
      const person = mockPeople.find((p) => p.id === id)
      resolve(
        person ?? {
          id,
          firstName: "Employee",
          lastName: `#${id}`,
          jobTitle: "Unknown",
        }
      )
    }, 600)
  })

const mockSearchPersons = (query: string): Promise<PersonProfile[]> =>
  new Promise((resolve) => {
    setTimeout(() => {
      const q = query.toLowerCase()
      const results = mockPeople.filter(
        (p) =>
          p.firstName.toLowerCase().includes(q) ||
          p.lastName.toLowerCase().includes(q) ||
          (p.jobTitle && p.jobTitle.toLowerCase().includes(q))
      )
      resolve(results.slice(0, 5))
    }, 300)
  })

/**
 * Mock candidates database for entity-ref hover cards in Storybook.
 */
const mockCandidates: CandidateProfile[] = [
  {
    id: "101",
    firstName: "Alice",
    lastName: "Martinez",
    source: "LinkedIn",
  },
  {
    id: "102",
    firstName: "Bob",
    lastName: "Chen",
    source: "Referral",
  },
  {
    id: "103",
    firstName: "Clara",
    lastName: "Nguyen",
    source: "Job Board",
  },
]

/**
 * Mock candidate resolver — looks up from mockCandidates, falls back to generic profile.
 */
const mockCandidateResolver = (id: string): Promise<CandidateProfile> =>
  new Promise((resolve) => {
    setTimeout(() => {
      const candidate = mockCandidates.find((c) => String(c.id) === id)
      resolve(
        candidate ?? {
          id,
          firstName: "Candidate",
          lastName: `#${id}`,
        }
      )
    }, 600)
  })

/**
 * Mock job postings database for entity-ref hover cards in Storybook.
 */
const mockJobPostings: JobPostingProfile[] = [
  {
    id: "201",
    title: "Senior Frontend Engineer",
    status: "Open",
    location: "Barcelona, Spain",
  },
  {
    id: "202",
    title: "Product Designer",
    status: "Open",
    location: "Remote",
  },
  {
    id: "203",
    title: "Backend Engineer",
    status: "Closed",
    location: "São Paulo, Brazil",
  },
]

/**
 * Mock job posting resolver — looks up from mockJobPostings, falls back to generic profile.
 */
const mockJobPostingResolver = (id: string): Promise<JobPostingProfile> =>
  new Promise((resolve) => {
    setTimeout(() => {
      const posting = mockJobPostings.find((jp) => String(jp.id) === id)
      resolve(
        posting ?? {
          id,
          title: `Job Posting #${id}`,
        }
      )
    }, 600)
  })

/**
 * Mock vacancies database for entity-ref hover cards in Storybook.
 */
const mockVacancies: VacancyProfile[] = [
  {
    id: "301",
    name: "Senior Frontend Engineer",
    status: "In Progress",
    vacancyType: "New Position",
  },
  {
    id: "302",
    name: "Product Designer",
    status: "To Do",
    vacancyType: "Backfill",
  },
  {
    id: "303",
    name: "Backend Engineer",
    status: "Hired",
    vacancyType: "New Position",
  },
]

/**
 * Mock vacancy resolver — looks up from mockVacancies, falls back to generic profile.
 */
const mockVacancyResolver = (id: string): Promise<VacancyProfile> =>
  new Promise((resolve) => {
    setTimeout(() => {
      const vacancy = mockVacancies.find((v) => String(v.id) === id)
      resolve(
        vacancy ?? {
          id,
          name: `Vacancy #${id}`,
        }
      )
    }, 600)
  })

/**
 * Mock requisitions database for entity-ref hover cards in Storybook.
 */
const mockRequisitions: RequisitionProfile[] = [
  {
    id: "401",
    title: "Senior Frontend Engineer",
    status: "Approved",
    reason: "New Position",
  },
  {
    id: "402",
    title: "Product Designer",
    status: "Pending",
    reason: "Backfill",
  },
  {
    id: "403",
    title: "Backend Engineer",
    status: "Rejected",
    reason: "New Position",
  },
]

/**
 * Mock requisition resolver — looks up from mockRequisitions, falls back to generic profile.
 */
const mockRequisitionResolver = (id: string): Promise<RequisitionProfile> =>
  new Promise((resolve) => {
    setTimeout(() => {
      const requisition = mockRequisitions.find((jr) => String(jr.id) === id)
      resolve(
        requisition ?? {
          id,
          title: `Requisition #${id}`,
        }
      )
    }, 600)
  })

/**
 * Mock expenses database for entity-ref hover cards in Storybook.
 */
const mockExpenses: ExpenseProfile[] = [
  {
    id: "91",
    description: "Per diem — New York",
    amount: "€331.00",
    status: "Approved",
  },
  {
    id: "97",
    description: "Lunch with a friend",
    amount: "€174.50",
    status: "Approved",
  },
  {
    id: "188",
    description: "Per diem — New York",
    amount: "€331.00",
    status: "Pending",
  },
]

/**
 * Mock expense resolver — looks up from mockExpenses, falls back to generic profile.
 */
const mockExpenseResolver = (id: string): Promise<ExpenseProfile> =>
  new Promise((resolve) => {
    setTimeout(() => {
      const expense = mockExpenses.find((e) => String(e.id) === id)
      resolve(
        expense ?? {
          id,
          description: `Expense #${id}`,
        }
      )
    }, 600)
  })

/**
 * Mock fetchCreditsUsage — simulates a 500ms API call returning usage data.
 */
const mockFetchCreditsUsage = () =>
  new Promise<{ used: number; total: number }>((resolve) => {
    setTimeout(() => resolve({ used: 750, total: 1000 }), 500)
  })

/**
 * Mock file upload handler for Storybook.
 * Simulates a 1-second upload and returns metadata with a fake URL.
 */
const mockUploadFiles = (files: File[]): Promise<UploadedFile[]> =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(
        files.map((f) => ({
          url: `https://example.com/uploads/${f.name}`,
          filename: f.name,
          mimetype: f.type,
        }))
      )
    }, 1000)
  })

const meta: Meta<typeof ApplicationFrame> = {
  title: "ApplicationFrame",
  component: ApplicationFrame,
  tags: ["autodocs", "experimental"],
  parameters: {
    layout: "fullscreen",
  },
  args: {
    ai: {
      historyEnabled: true,
      runtimeUrl: "https://mastra.local.factorial.dev/copilotkit",
      agent: "one-workflow",
      credentials: "include",
      showDevConsole: false,
      enabled: true,
      resizable: true,
      greeting: "Hello, John",
      canvasActions: {
        dashboard: {
          save: async (id, category, config) => {
            alert(
              `Save dashboard\nid: ${id}\ncategory: ${category}\nconfig: ${JSON.stringify(config, null, 2)}`
            )
          },
          create: async (title, description, config, category) => {
            // Simulate backend persistence by returning a random id AND a
            // category so the canvas can transition into the "saved" state.
            // The UI gates "saved" on both fields (handleSave needs the
            // category to call the backend), so returning only the id would
            // leave the action bar stuck in the "Save to Analytics" state.
            const newId = `dash_${Math.random().toString(36).slice(2, 10)}`
            const resolvedCategory = category ?? "general"
            alert(
              `Create dashboard\nid: ${newId}\ntitle: ${title}\ndescription: ${description}\ncategory: ${resolvedCategory}\nconfig: ${JSON.stringify(config, null, 2)}`
            )
            return { id: newId, category: resolvedCategory }
          },
          // Mock creator + last-edited metadata. In a real integration this
          // would hit the backend using the dashboard id. Returning different
          // stub data per id lets the story cover the "different dashboard
          // selected → different author" transition.
          getMetadata: async (id) => {
            // Simulate a small network delay so the avatar/last-edited
            // appear shortly after the canvas opens (mirrors prod UX).
            await new Promise((resolve) => setTimeout(resolve, 250))
            if (id === "dash-expenses-001") {
              // Title + description intentionally DIFFER from the chat
              // history mock to showcase the backend-wins-on-save contract
              // — the header should render these instead of the config
              // snapshot once metadata resolves.
              return {
                title: "Expenses overview (backend)",
                description:
                  "Latest expenses summary pulled from the database, reflecting any edits made from the Analytics list after this chat was opened.",
                creator: {
                  firstName: "Hellen",
                  lastName: "Schmidt",
                  src: "/avatars/person01.jpg",
                },
                lastEdited: new Date("2026-04-18T10:32:00Z"),
              }
            }
            return {
              creator: { firstName: "John", lastName: "Doe" },
              lastEdited: new Date(),
            }
          },
        },
      },
      entityRefs: {
        resolvers: {
          person: mockPersonResolver,
          candidate: mockCandidateResolver,
          expense: mockExpenseResolver,
          jobPosting: mockJobPostingResolver,
          vacancy: mockVacancyResolver,
          requisition: mockRequisitionResolver,
          searchPersons: mockSearchPersons,
        },
        urls: {
          person: (id) => `/employees/${id}`,
          candidate: (id) => `/recruitment/candidates/${id}/applications`,
          expense: (id) => `/expenses/${id}`,
          jobPosting: (id) => `/recruitment/jobs/${id}/applications`,
          vacancy: (id) => `/recruitment/hiring-plan/vacancies/${id}`,
          requisition: (id) => `/recruitment/hiring-plan/requisitions/${id}`,
        },
      },
      credits: {
        fetchUsage: mockFetchCreditsUsage,
        upgradePlanUrl: "https://example.com/upgrade",
        companyName: "Factorial",
        companyLogoUrl: "/avatars/factorial.png",
        planName: "Free plan",
      },
      fileAttachments: {
        onUploadFiles: mockUploadFiles,
        maxFiles: 5,
      },
      disclaimer: {
        text: "One works within your permissions.",
        link: "/permissions",
        linkText: "See more",
      },
    },
    aiPromotion: {
      enabled: false,
      greeting: "Hey Hellen,",
      title: "Meet One, your AI agent",
      description:
        "One simplifies your daily tasks so you can focus on what really matters. Join the waitlist (open until November 30, 2025) to:",
      benefits: [
        {
          noBoldText: "Get access at",
          boldText: "no additional cost",
        },
        {
          noBoldText: "Explore key features",
          boldText: "early",
        },
        {
          noBoldText: "Share feedback and",
          boldText: "help shape One",
        },
      ],
      actions: [
        {
          label: "Join the waitlist",
          onClick: () => {},
          buttonType: "gradient",
          isLoading: false,
        },
        {
          label: "Learn more",
          onClick: () => {},
          buttonType: "internal",
          buttonVariant: "ghost",
          isLoading: false,
          icon: ExternalLink,
        },
      ],
    },
    sidebar: <Sidebar {...SidebarStories.default.args} />,
    children: <Page {...PageStories.Default.args} />,
  } satisfies ComponentProps<typeof ApplicationFrame>,
}

export default meta

type Story = StoryObj<typeof ApplicationFrame>

const DefaultStoryComponent = (
  args: ComponentProps<typeof ApplicationFrame>
) => {
  return (
    <ApplicationFrame
      ai={args.ai}
      aiPromotion={args.aiPromotion}
      sidebar={<Sidebar {...SidebarStories.default.args} />}
    >
      <Page {...PageStories.Default.args} />
    </ApplicationFrame>
  )
}

export const Default: Story = {
  render: (args) => <DefaultStoryComponent {...args} />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    const link = canvas.getByRole("link", { name: /inbox/i })
    await expect(link.dataset.test).toBe("foo")
  },
}

export const WithAiPromotion: Story = {
  render: (args) => <DefaultStoryComponent {...args} />,
  args: {
    ai: undefined,
    aiPromotion: {
      enabled: true,
      greeting: "Hey Hellen,",
      title: "Meet One, your AI agent",
      description:
        "One simplifies your daily tasks so you can focus on what really matters. Join the waitlist (open until November 30, 2025) to:",
      benefits: [
        {
          noBoldText: "Get access at",
          boldText: "no additional cost",
        },
        {
          noBoldText: "Explore key features",
          boldText: "early",
        },
        {
          noBoldText: "Share feedback and",
          boldText: "help shape One",
        },
      ],
      actions: [
        {
          label: "Join the waitlist",
          onClick: () => {},
          buttonType: "gradient",
          isLoading: false,
        },
        {
          label: "Learn more",
          onClick: () => {},
          buttonType: "internal",
          buttonVariant: "ghost",
          isLoading: false,
          icon: ExternalLink,
        },
      ],
    },
  },
}

const QuickActions = () => {
  const { sendMessage } = useAiChat()

  const buttonWithMessage = (action: {
    label: string
    message: string
    icon: IconType
  }) => {
    return (
      <F0Button
        variant="outline"
        label={action.label}
        onClick={() => {
          sendMessage(action.message)
        }}
        icon={action.icon}
      />
    )
  }

  const actions = [
    {
      label: "All templates",
      message: "Give me a summary of my pending time-off requests",
      icon: Lightbulb,
    },
    {
      label: "Empty survey",
      message: "Give me a summary of my pending time-off requests",
      icon: Lightbulb,
    },
    {
      label: "Q4 Employee Satisfaction",
      message: "Give me a summary of my pending time-off requests",
      icon: Lightbulb,
    },
    {
      label: "Team Effectiveness",
      message: "Give me a summary of my pending time-off requests",
      icon: Lightbulb,
    },
  ]

  return (
    <div className="flex w-full flex-col gap-4 rounded-md border-2 border-dotted border-f1-border p-4">
      <div className="flex items-center justify-between gap-4">
        <p className="whitespace-nowrap text-sm text-f1-foreground-secondary">
          Or start from
        </p>
        <div className="flex items-center gap-2">
          <Action
            variant="ghost"
            prepend={<F0Icon icon={Marketplace} size="sm" />}
            append={<ArrowRight className="h-3.5 w-3.5" />}
            onClick={() => {}}
          >
            All templates
          </Action>
        </div>
      </div>
      <F0Box display="grid" columns="4" gap="sm">
        {actions.map((action) => buttonWithMessage(action))}
      </F0Box>
    </div>
  )
}

export const FullscreenWithActions: Story = {
  render: (args) => (
    <ApplicationFrame
      ai={args.ai}
      aiPromotion={args.aiPromotion}
      sidebar={<Sidebar {...SidebarStories.default.args} />}
    >
      <Page {...PageStories.Default.args} />
    </ApplicationFrame>
  ),
  args: {
    ai: {
      runtimeUrl: "https://mastra.local.factorial.dev/copilotkit",
      agent: "one-workflow",
      credentials: "include",
      showDevConsole: false,
      enabled: true,
      resizable: true,
      greeting: "Hello, John",
      defaultVisualizationMode: "fullscreen",
      lockVisualizationMode: true,
      footer: <QuickActions />,
      entityRefs: {
        resolvers: {
          person: mockPersonResolver,
          candidate: mockCandidateResolver,
          expense: mockExpenseResolver,
          jobPosting: mockJobPostingResolver,
          vacancy: mockVacancyResolver,
          requisition: mockRequisitionResolver,
          searchPersons: mockSearchPersons,
        },
        urls: {
          person: (id) => `/employees/${id}`,
          candidate: (id) => `/recruitment/candidates/${id}/applications`,
          expense: (id) => `/expenses/${id}`,
          jobPosting: (id) => `/recruitment/jobs/${id}/applications`,
          vacancy: (id) => `/recruitment/hiring-plan/vacancies/${id}`,
          requisition: (id) => `/recruitment/hiring-plan/requisitions/${id}`,
        },
      },
      credits: {
        fetchUsage: mockFetchCreditsUsage,
        upgradePlanUrl: "https://example.com/upgrade",
        companyName: "Factorial",
        companyLogoUrl: "/avatars/factorial.png",
        planName: "Free plan",
      },
      fileAttachments: {
        onUploadFiles: mockUploadFiles,
        maxFiles: 5,
      },
      disclaimer: {
        text: "One works within your permissions.",
        link: "/permissions",
        linkText: "See more",
      },
    },
  },
}
