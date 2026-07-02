import type { Meta, StoryObj } from "@storybook/react-vite"

import { ComponentProps, useCallback, useEffect, useRef, useState } from "react"

import { F0Button } from "@/components/F0Button"
import { F0Icon, IconType } from "@/components/F0Icon"
import { PageHeader } from "@/experimental/Navigation/Header/PageHeader"
import One from "@/icons/ai/One"
import {
  ChartVerticalBars,
  Home,
  Lightbulb,
  New,
  Pencil,
  Search,
  Sliders,
  Comment,
} from "@/icons/app"
import * as Icons from "@/icons/app"
import ArrowRight from "@/icons/app/ArrowRight"
import ExternalLink from "@/icons/app/ExternalLink"
import Marketplace from "@/icons/app/Marketplace"
import { HomeLayout } from "@/layouts/HomeLayout"
import * as HomeLayoutStories from "@/layouts/HomeLayout/index.stories"
import { F0Box } from "@/lib/F0Box"
import { mockTranscribe } from "@/lib/storybook-utils/ai-mocks"
import { fakePeople } from "@/mocks/people"
import { Page } from "@/patterns/Navigation/Page"
import * as PageStories from "@/patterns/Navigation/Page/index.stories"
import { exampleActions } from "@/patterns/Navigation/Sidebar/Chats/index.stories"
import { SidebarChatBlankState } from "@/patterns/Navigation/Sidebar/Chats/SidebarChatBlankState"
import { SidebarChatList } from "@/patterns/Navigation/Sidebar/Chats/SidebarChatList"
import {
  SidebarChatProvider,
  useSidebarChatActions,
  useSidebarChats,
} from "@/patterns/Navigation/Sidebar/Chats/SidebarChatProvider"
import { SidebarFooter } from "@/patterns/Navigation/Sidebar/Footer"
import * as SidebarFooterStories from "@/patterns/Navigation/Sidebar/Footer/index.stories"
import { SidebarHeader } from "@/patterns/Navigation/Sidebar/Header"
import * as SidebarHeaderStories from "@/patterns/Navigation/Sidebar/Header/index.stories"
import * as SidebarStories from "@/patterns/Navigation/Sidebar/index.stories"
import { TabbedSidebar } from "@/patterns/Navigation/Sidebar/index.stories"
import { Menu, type MenuCategory } from "@/patterns/Navigation/Sidebar/Menu"
import { SearchBar } from "@/patterns/Navigation/Sidebar/Searchbar"
import { Sidebar } from "@/patterns/Navigation/Sidebar/Sidebar"
import { SidebarTabPanel } from "@/patterns/Navigation/Sidebar/TabPanel"
import { SidebarTabs } from "@/patterns/Navigation/Sidebar/Tabs"
import { DaytimePage } from "@/sds/Home/DaytimePage"
import { useAiChat } from "@/sds/ai/F0AiChat"
import {
  MockAiChatRuntimeProvider,
  MockConnectedChatHeader,
  MockConnectedChatInput,
  MockConnectedMessagesContainer,
  useMockAiChatRuntime,
} from "@/sds/ai/F0AiChat/__stories__/_mock"
import {
  type CandidateProfile,
  type ExpenseProfile,
  type F0AiChatWelcomeCard,
  type JobPostingProfile,
  type RequisitionProfile,
  type PersonProfile,
  type UploadedFile,
  type VacancyProfile,
} from "@/sds/ai/F0AiChat/types"
import { WelcomeScreenCardsRow } from "@/sds/ai/F0AiChatTextArea/components/WelcomeScreenCardsRow"
import { F0AiChatCreditsButton } from "@/sds/ai/F0AiChatHeader"
import {
  ThreadItem,
  ThreadListSkeleton,
  useChatHistory,
} from "@/sds/ai/F0AiChatHistory"
import { F0Chat, F0ChatProvider } from "@/sds/chat/F0Chat"
import {
  MockChatAppProvider,
  useConversationRuntime,
  useMockChatGroups,
} from "@/sds/chat/F0Chat/mocks/MockChatApp"
import { Action } from "@/ui/Action"

import { ApplicationFrame } from "./index"

/**
 * Mock people database for @mention search and entity resolution in Storybook.
 * Based on Factorial's development seed employees.
 */
const mockPeople: PersonProfile[] = [
  {
    id: "5",
    firstName: fakePeople.noor.firstName,
    lastName: fakePeople.noor.lastName,
    jobTitle: "People Director, CPO",
  },
  {
    id: "6",
    firstName: fakePeople.hana.firstName,
    lastName: fakePeople.hana.lastName,
    jobTitle: "CEO, I",
  },
  {
    id: "7",
    firstName: fakePeople.caleb.firstName,
    lastName: fakePeople.caleb.lastName,
    jobTitle: "CTO, I",
  },
  {
    id: "8",
    firstName: fakePeople.yuki.firstName,
    lastName: fakePeople.yuki.lastName,
    jobTitle: "CFO, I",
  },
  {
    id: "10",
    firstName: fakePeople.sofia.firstName,
    lastName: fakePeople.sofia.lastName,
    jobTitle: "CMO, I",
  },
  {
    id: "11",
    firstName: fakePeople.ravi.firstName,
    lastName: fakePeople.ravi.lastName,
    jobTitle: "People Director, CPO",
  },
  {
    id: "12",
    firstName: fakePeople.greta.firstName,
    lastName: fakePeople.greta.lastName,
    jobTitle: "Store Manager, I",
  },
  {
    id: "13",
    firstName: fakePeople.iris.firstName,
    lastName: fakePeople.iris.lastName,
    jobTitle: "Sales Manager, I",
  },
  {
    id: "14",
    firstName: fakePeople.aaron.firstName,
    lastName: fakePeople.aaron.lastName,
    jobTitle: "Design Director, I",
  },
  {
    id: "15",
    firstName: fakePeople.nadia.firstName,
    lastName: fakePeople.nadia.lastName,
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
    firstName: fakePeople.linus.firstName,
    lastName: fakePeople.linus.lastName,
    source: "LinkedIn",
  },
  {
    id: "102",
    firstName: fakePeople.camila.firstName,
    lastName: fakePeople.camila.lastName,
    source: "Referral",
  },
  {
    id: "103",
    firstName: fakePeople.theo.firstName,
    lastName: fakePeople.theo.lastName,
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
 * Mock fetchEmployeeCreditsUsage — same shape as above but used by the
 * employee-only popover. Smaller monthly allocation to reflect the
 * per-employee variant.
 */
const mockFetchEmployeeCreditsUsage = () =>
  new Promise<{ used: number; total: number }>((resolve) => {
    setTimeout(() => resolve({ used: 50, total: 250 }), 500)
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

const QuickActions = () => {
  const { sendMessage } = useMockAiChatRuntime()

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

const WELCOME_CARDS: F0AiChatWelcomeCard[] = [
  {
    id: "empty-survey",
    icon: Pencil,
    title: "Empty survey",
    description: "Start from scratch",
    message: "Create an empty survey.",
  },
  {
    id: "all-templates",
    icon: Marketplace,
    title: "All templates",
    description: "Browse pre-made surveys",
    // No message: browsing templates isn't a prompt — the host opens the
    // template gallery instead (see the card's onClick below).
  },
  {
    id: "q4-employee-satisfaction",
    icon: ChartVerticalBars,
    title: "Q4 Employee Satisfaction",
    description: "Reuse last quarter's survey",
    message: "Create a Q4 employee satisfaction survey.",
  },
  {
    id: "team-effectiveness",
    icon: Lightbulb,
    title: "Team Effectiveness",
    description: "Measure how teams work together",
    message: "Create a team effectiveness survey.",
  },
]

const WelcomeCards = () => {
  const { sendMessage } = useMockAiChatRuntime()

  // The host owns each card's behavior via `onClick`: "All templates" opens the
  // gallery, the rest send their prompt.
  const cards: F0AiChatWelcomeCard[] = WELCOME_CARDS.map((card) => ({
    ...card,
    onClick: () => {
      if (card.id === "all-templates") {
        console.log("open template gallery")
      } else if (card.message) {
        sendMessage(card.message)
      }
    },
  }))

  return <WelcomeScreenCardsRow cards={cards} />
}

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
      enabled: true,
      resizable: true,
      footer: <WelcomeCards />,
      onThumbsUp: (message, { threadId, feedback }) => {
        console.log("thumbs up", { message, threadId, feedback })
      },
      onThumbsDown: (message, { threadId, feedback }) => {
        console.log("thumbs down", { message, threadId, feedback })
      },
      initialMessage: [
        "Operational work, automated by One",
        "Ask anything about your company",
        "Skip the boring part of your job",
        "Ask anything about your people, policies, or payroll",
        "Turn months of data into a one-line answer",
      ],
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
                  firstName: fakePeople.eva.firstName,
                  lastName: fakePeople.eva.lastName,
                  src: fakePeople.eva.image,
                },
                lastEdited: new Date("2026-04-18T10:32:00Z"),
              }
            }
            return {
              creator: {
                firstName: fakePeople.omar.firstName,
                lastName: fakePeople.omar.lastName,
              },
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
      // When both are set the employee-only popover wins (see
      // CreditsPopoverPicker in F0AiChatHeader). The classic `credits` above
      // stays as a documented fallback for hosts that haven't opted into
      // per-employee allocations.
      employeeCredits: {
        fetchUsage: mockFetchEmployeeCreditsUsage,
        companyName: "Factorial",
        companyLogoUrl: "/avatars/factorial.png",
        planName: "Free plan",
      },
      welcomeScreenSuggestions: [
        {
          icon: ChartVerticalBars,
          label: "Analyze",
          items: [
            {
              title: "April leave and overtime summary",
              prompt:
                "Give me a detailed breakdown of leave taken and overtime worked across the company in April, grouped by department.",
            },
            {
              title: "Current gross salary by employee",
              prompt:
                "List the current gross salary of every active employee, sorted from highest to lowest.",
            },
            {
              title: "Report on starters and leavers",
              prompt:
                "Show me a report of starters and leavers in the last quarter, with start/end dates and roles.",
            },
            {
              title: "Headcount evolution by department",
              prompt:
                "Plot headcount evolution by department over the last twelve months and highlight the fastest-growing teams.",
            },
            {
              title: "Absence trends across teams",
              prompt:
                "Compare absence rates across teams over the last six months and call out any anomalies.",
            },
          ],
        },
        {
          icon: Search,
          label: "Find",
          items: [
            {
              title: "Who's out of office this week?",
              prompt:
                "List every employee on time-off, sick leave, or other absence between today and the end of the week.",
            },
            {
              title: "Engineers based in Barcelona",
              prompt:
                "Find all employees in the Engineering department whose office location is Barcelona.",
            },
            {
              title: "Open positions in Sales",
              prompt:
                "Show every open job posting in the Sales department, including hiring manager and target start date.",
            },
            {
              title: "Documents shared with me",
              prompt:
                "List documents shared with me in the last 30 days, sorted by most recent activity.",
            },
          ],
        },
        {
          icon: Pencil,
          label: "Create",
          items: [
            {
              title: "Draft a job description for a Senior Backend role",
              prompt:
                "Draft a job description for a Senior Backend Engineer focused on distributed systems, with responsibilities, requirements, and a short company pitch.",
            },
            {
              title: "Compose an offboarding email template",
              prompt:
                "Compose an offboarding email template that thanks the employee, lists return-of-equipment steps, and links to the HR exit form.",
            },
            {
              title: "Outline an onboarding checklist for new hires",
              prompt:
                "Outline a one-week onboarding checklist for new hires that covers IT setup, meetings to schedule, and key documents to read.",
            },
          ],
        },
      ],
      fileAttachments: {
        onUploadFiles: mockUploadFiles,
        maxFiles: 5,
      },
      onTranscribe: mockTranscribe,
      disclaimer: {
        text: "One works within your permissions.",
        link: "/permissions",
        linkText: "See more",
      },
    },
    aiPromotion: {
      enabled: false,
      greeting: `Hey ${fakePeople.mira.firstName},`,
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
    sidebar: <TabbedSidebar />,
    children: <Page {...PageStories.Default.args} />,
  } satisfies ComponentProps<typeof ApplicationFrame>,
}

export default meta

type Story = StoryObj<typeof ApplicationFrame>

const mockChatSlots = {
  chatHeader: <MockConnectedChatHeader />,
  chatMessages: <MockConnectedMessagesContainer />,
  chatInput: <MockConnectedChatInput />,
}

const withMockChatSlots = (
  ai: ComponentProps<typeof ApplicationFrame>["ai"]
): ComponentProps<typeof ApplicationFrame>["ai"] =>
  ai ? { ...ai, ...mockChatSlots } : ai

// Communications mode hides the per-page One switch (One is reached from the
// sidebar tab), so the page header opts out via `hideOneSwitch`.
const communicationsPageHeader = (
  <PageHeader
    module={{
      id: "time-tracking",
      name: "Time Tracking",
      href: "/time-tracking",
    }}
    hideOneSwitch
  />
)

export const Default: Story = {
  render: (args) => (
    <MockAiChatRuntimeProvider>
      <MockChatAppProvider>
        <ApplicationFrame
          // Communications mode: the sidebar owns chat navigation (history, new
          // chat) and the credits/settings popover, so the in-chat history is
          // off and the header stays compact (expand + close only). The page
          // header's One switch is hidden too — One is reached from the sidebar.
          ai={{
            ...withMockChatSlots(args.ai),
            side: "left",
            historyEnabled: false,
            chatHeader: <MockConnectedChatHeader compact />,
          }}
          aiPromotion={args.aiPromotion}
          sidebar={<ConversationsSidebar />}
        >
          {/* Real-world main content: the home "daytime" page. `hideOneSwitch`
              because One is reached from the sidebar tab in communications mode. */}
          <DaytimePage
            period="morning"
            hideOneSwitch
            header={{
              employeeFirstName: fakePeople.priya.firstName,
              employeeLastName: fakePeople.priya.lastName,
              title: `Good morning, ${fakePeople.priya.firstName}!`,
              employeeAvatar: fakePeople.priya.image,
            }}
          >
            <HomeLayout {...HomeLayoutStories.Default.args} />
          </DaytimePage>
        </ApplicationFrame>
      </MockChatAppProvider>
    </MockAiChatRuntimeProvider>
  ),
}

/**
 * The standalone AI assistant: no communications sidebar, the chat docked on the
 * right as a resizable side panel, with the full feature set (credits, file
 * attachments, dictation, entity refs, disclaimer + quick actions footer).
 */
export const WithAiAssistant: Story = {
  render: (args) => (
    <MockAiChatRuntimeProvider>
      <ApplicationFrame
        ai={withMockChatSlots(args.ai)}
        aiPromotion={args.aiPromotion}
        sidebar={<Sidebar {...SidebarStories.default.args} />}
      >
        <Page {...PageStories.Default.args} />
      </ApplicationFrame>
    </MockAiChatRuntimeProvider>
  ),
  args: {
    ai: {
      enabled: true,
      resizable: true,
      onThumbsUp: (message, { threadId, feedback }) => {
        console.log("thumbs up", { message, threadId, feedback })
      },
      onThumbsDown: (message, { threadId, feedback }) => {
        console.log("thumbs down", { message, threadId, feedback })
      },
      initialMessage: [
        "Operational work, automated by One",
        "Ask anything about your company",
        "Skip the boring part of your job",
        "Ask anything about your people, policies, or payroll",
        "Turn months of data into a one-line answer",
      ],
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
      // When both are set the employee-only popover wins (see
      // CreditsPopoverPicker in F0AiChatHeader). The classic `credits` above
      // stays as a documented fallback for hosts that haven't opted into
      // per-employee allocations.
      employeeCredits: {
        fetchUsage: mockFetchEmployeeCreditsUsage,
        companyName: "Factorial",
        companyLogoUrl: "/avatars/factorial.png",
        planName: "Free plan",
      },
      fileAttachments: {
        onUploadFiles: mockUploadFiles,
        maxFiles: 5,
      },
      onTranscribe: mockTranscribe,
      disclaimer: {
        text: "One works within your permissions.",
        link: "/permissions",
        linkText: "See more",
      },
    },
  },
}

/**
 * A fully-mocked conversation hosted in the side panel, driven by the shared
 * `MockChatApp` store (so reads/unreads stay in sync with the sidebar). Wires
 * fullscreen/close to the panel via `useAiChat()`.
 */
const MockChatPanel = ({ convId }: { convId: string }) => {
  const runtime = useConversationRuntime(convId)
  const {
    visualizationMode,
    setVisualizationMode,
    setOpen,
    clearPanelContent,
  } = useAiChat()
  const isFullscreen = visualizationMode === "fullscreen"

  return (
    <F0ChatProvider runtime={runtime}>
      <F0Chat
        isFullscreen={isFullscreen}
        onToggleFullscreen={() =>
          setVisualizationMode(isFullscreen ? "sidepanel" : "fullscreen")
        }
        onClose={() => {
          clearPanelContent()
          setOpen(false)
        }}
      />
    </F0ChatProvider>
  )
}

/**
 * Realistic "Main" menu mirroring the production Factorial sidebar (root nav +
 * Personal / Company / Operations / Talent / IT Management / Finance / More).
 */
const homeMenuTree: MenuCategory[] = [
  {
    id: "main",
    title: "Main",
    isRoot: true,
    isSortable: false,
    items: [
      { label: "Dashboard", icon: Icons.Hub, href: "/", exactMatch: true },
      {
        label: "Communications",
        icon: Icons.Megaphone,
        href: "/communications",
      },
      // `data-test` is asserted by the Default story play test.
      {
        label: "Inbox",
        icon: Icons.Inbox,
        href: "/inbox",
        badge: 6,
        "data-test": "foo",
      },
      { label: "Calendar", icon: Icons.Calendar, href: "/calendar" },
      {
        label: "Discover Factorial",
        icon: Icons.Sparkles,
        href: "/discover",
        tag: "New",
      },
    ],
  },
  {
    id: "personal",
    title: "Personal",
    isOpen: true,
    isSortable: true,
    items: [
      { label: "Profile", icon: Icons.Person, href: "/profile" },
      {
        label: "My time tracking",
        icon: Icons.Clock,
        href: "/my-time-tracking",
      },
      { label: "Time off", icon: Icons.PalmTree, href: "/time-off" },
      { label: "My benefits", icon: Icons.Present, href: "/my-benefits" },
      { label: "My documents", icon: Icons.Files, href: "/my-documents" },
      { label: "My projects", icon: Icons.Kanban, href: "/my-projects" },
      { label: "My spending", icon: Icons.CreditCard, href: "/my-spending" },
      { label: "My training", icon: Icons.AcademicCap, href: "/my-training" },
      { label: "Tasks", icon: Icons.Completed, href: "/tasks" },
    ],
  },
  {
    id: "company",
    title: "Company",
    isOpen: true,
    isSortable: true,
    items: [
      {
        label: "Organization",
        icon: Icons.Organization,
        href: "/organization",
      },
      { label: "Documents", icon: Icons.Folder, href: "/documents" },
      { label: "Policies", icon: Icons.Shield, href: "/policies" },
      { label: "Tickets", icon: Icons.Tag, href: "/tickets" },
      { label: "Spaces", icon: Icons.LayersFront, href: "/spaces" },
    ],
  },
  {
    id: "operations",
    title: "Operations",
    isOpen: true,
    isSortable: true,
    items: [
      { label: "Time tracking", icon: Icons.Timer, href: "/time-tracking" },
      { label: "Shifts", icon: Icons.Schedule, href: "/shifts" },
      { label: "Projects", icon: Icons.Kanban, href: "/projects" },
      { label: "Benefits", icon: Icons.HoldHeart, href: "/benefits" },
      { label: "Compensation", icon: Icons.MoneyBag, href: "/compensation" },
    ],
  },
  {
    id: "talent",
    title: "Talent",
    isOpen: true,
    isSortable: true,
    items: [
      {
        label: "Talent analytics",
        icon: Icons.ChartLine,
        href: "/talent-analytics",
      },
      { label: "Performance", icon: Icons.Target, href: "/performance" },
      { label: "Recruitment", icon: Icons.SearchPerson, href: "/recruitment" },
      { label: "Engagement", icon: Icons.Heart, href: "/engagement" },
      { label: "Training", icon: Icons.BookOpen, href: "/training" },
    ],
  },
  {
    id: "it",
    title: "IT Management",
    isOpen: true,
    isSortable: true,
    items: [
      { label: "Device catalog", icon: Icons.Laptop, href: "/device-catalog" },
      { label: "IT inventory", icon: Icons.HardDrive, href: "/it-inventory" },
    ],
  },
  {
    id: "finance",
    title: "Finance",
    isOpen: true,
    isSortable: true,
    items: [
      { label: "Workspace", icon: Icons.Briefcase, href: "/finance" },
      { label: "Sales", icon: Icons.ChartVerticalBars, href: "/sales" },
      { label: "Spending", icon: Icons.CreditCard, href: "/spending" },
      { label: "Treasury", icon: Icons.Bank, href: "/treasury" },
      { label: "Accounting", icon: Icons.Calculator, href: "/accounting" },
    ],
  },
  {
    id: "more",
    title: "More",
    isOpen: true,
    isSortable: true,
    items: [
      { label: "AI reports", icon: Icons.Ai, href: "/ai-reports" },
      { label: "Analytics", icon: Icons.ChartPie, href: "/analytics" },
      { label: "Billing", icon: Icons.Receipt, href: "/billing" },
      { label: "Workflows", icon: Icons.Split, href: "/workflows" },
      {
        label: "Trust channel",
        icon: Icons.UserProtected,
        href: "/trust-channel",
      },
      { label: "Settings", icon: Icons.Settings, href: "/settings" },
    ],
  },
]

/* -------------------------------------------------------------------------- *
 * "One" sidebar tab — AI chat history                                         *
 *                                                                            *
 * Reference UX for the factorial integration: communications users get a     *
 * third "One" tab with a New Chat + Settings action stack and the AI chat     *
 * history. The history reuses the F0AiChatHistory rows (title + date + a      *
 * three-dots menu to pin / delete), grouped into just two sections — Pinned   *
 * and Conversations. Selecting a thread clears any open communications panel  *
 * and loads that conversation. The per-page One toggle is gone (see           *
 * PageHeader `hideOneSwitch`).                                                *
 * -------------------------------------------------------------------------- */

const OneHistoryTab = ({
  forceEmpty = false,
}: { forceEmpty?: boolean } = {}) => {
  const { fetchThreads, deleteThread, loadThread, clear, currentThreadId } =
    useMockAiChatRuntime()
  const {
    clearPanelContent,
    setOpen,
    open,
    panelContent,
    credits,
    employeeCredits,
  } = useAiChat()
  // Demo-only: an empty history to showcase the blank state.
  const fetchEmpty = useCallback(async () => [], [])
  const {
    threads,
    isLoading,
    pinnedIds,
    pinThread,
    unpinThread,
    deleteThread: removeThread,
  } = useChatHistory({
    enabled: true,
    fetchThreads: forceEmpty ? fetchEmpty : fetchThreads,
    deleteThread,
  })

  const startNewChat = useCallback(() => {
    clearPanelContent()
    clear()
    setOpen(true)
  }, [clearPanelContent, clear, setOpen])

  // Opening a thread loads that conversation into the (shared) side panel —
  // exactly like the in-chat history — but here we stay in the One tab.
  const openThread = useCallback(
    (id: string, title: string) => {
      clearPanelContent()
      loadThread(id, title)
      setOpen(true)
    },
    [clearPanelContent, loadThread, setOpen]
  )

  const handlers = {
    onSelect: openThread,
    onPin: pinThread,
    onUnpin: unpinThread,
    onDelete: removeThread,
  }

  // A thread stays highlighted while it's the conversation shown in the (AI)
  // panel — i.e. the panel is open with no custom comms content over it.
  const activeThreadId = open && !panelContent ? currentThreadId : null

  // Render a thread with the sidebar's chat-row paddings (same as the Chat tab)
  // instead of the dialog's, so the One tab matches the rest of the sidebar.
  const toItem = (thread: (typeof threads)[number], pinnedGroup: boolean) => ({
    id: thread.id,
    searchText: thread.title,
    content: (
      <ThreadItem
        thread={thread}
        isPinned={pinnedGroup}
        isActive={thread.id === activeThreadId}
        className="gap-2 rounded pl-1.5 pr-2 hover:bg-f1-background-secondary"
        {...handlers}
      />
    ),
  })

  // Two groups: pinned, then everything else. Empty groups are dropped by the
  // panel, so both can be passed unconditionally.
  const pinned = threads.filter((t) => pinnedIds.has(t.id))
  const conversations = threads.filter((t) => !pinnedIds.has(t.id))

  return (
    <SidebarTabPanel
      searchPlaceholder="Search chats"
      loading={isLoading}
      skeleton={<ThreadListSkeleton />}
      noResultsLabel="No chats found"
      // Shared blank state (same component as the Messages tab) — shown when
      // there are no AI conversations yet, with a CTA to start one.
      emptyState={
        <SidebarChatBlankState
          title="No AI conversations yet"
          description="Ask One anything to start your first conversation."
          actions={[
            {
              label: "Start a conversation",
              icon: New,
              variant: "ai",
              onClick: startNewChat,
            },
          ]}
        />
      }
      groups={[
        {
          id: "pinned",
          title: "Pinned",
          items: pinned.map((t) => toItem(t, true)),
        },
        {
          id: "conversations",
          title: "Conversations",
          items: conversations.map((t) => toItem(t, false)),
        },
      ]}
      // New chat + Settings as one action stack. Both use the panel's standard
      // ghost button; Settings just wraps it as the credits popover trigger.
      actions={[
        {
          label: "New AI chat",
          icon: New,
          onClick: startNewChat,
        },
        {
          label: "Settings",
          icon: Sliders,
          render: (trigger) => (
            <F0AiChatCreditsButton
              credits={credits}
              employeeCredits={employeeCredits}
              trigger={trigger}
            />
          ),
        },
      ]}
    />
  )
}

/**
 * Tabbed sidebar (mirrors `TabbedSidebar`) whose "Messages" conversations swap
 * the side-panel content, plus a "One" tab hosting the AI chat history grouped
 * by day. It lives inside the `F0AiChatProvider` that `ApplicationFrame`
 * mounts, so it can call `useAiChat()` directly. "Ask AI" clears the custom
 * content and falls back to the real chat.
 */
const ConversationsSidebarInner = ({
  initialTab = "home",
  autoOpenConvId,
  forceEmpty = false,
}: {
  initialTab?: string
  /** Mount this conversation in the side panel on first render (demo only). */
  autoOpenConvId?: string
  /** Demo-only: render both lists (Messages + One) empty to show the blank states. */
  forceEmpty?: boolean
} = {}) => {
  const [company, setCompany] = useState("1")
  const [tab, setTab] = useState(initialTab)
  const { unreadChatsCount } = useSidebarChats()
  const { setGroups, setActiveChat } = useSidebarChatActions()
  const { setPanelContent, open, panelContent } = useAiChat()

  // Clicking a conversation mounts it in the side panel (one at a time).
  const onSelect = useCallback(
    (convId: string) => {
      setPanelContent({
        id: convId,
        content: <MockChatPanel convId={convId} />,
      })
    },
    [setPanelContent]
  )

  // Demo convenience: open a conversation straight away (e.g. the mentions story
  // lands inside the group so the chat + composer are visible without a click).
  const autoOpened = useRef(false)
  useEffect(() => {
    if (autoOpenConvId && !autoOpened.current) {
      autoOpened.current = true
      onSelect(autoOpenConvId)
    }
  }, [autoOpenConvId, onSelect])

  // Groups come from the shared mock store, so unread badges / presence / mute
  // are live and clear as conversations are read.
  const groups = useMockChatGroups(onSelect)
  useEffect(() => {
    setGroups(forceEmpty ? [] : groups)
  }, [groups, setGroups, forceEmpty])

  // A conversation is "selected" only while it's the one on view in the side
  // panel. Opening the AI chat (panelContent cleared) or closing the panel
  // deselects it — the sidebar selection follows the panel, not the last click.
  useEffect(() => {
    setActiveChat(open && panelContent ? panelContent.id : null)
  }, [open, panelContent, setActiveChat])

  return (
    <Sidebar
      header={
        <>
          <SidebarHeader
            {...SidebarHeaderStories.Default.args}
            selected={company}
            onChange={setCompany}
          />
          <SidebarTabs
            tabs={[
              { id: "home", label: "Home", icon: Home },
              {
                id: "messages",
                label: "Chat",
                icon: Comment,
                badge: unreadChatsCount || undefined,
              },
              { id: "one", label: "One", icon: One, variant: "ai" },
            ]}
            activeTab={tab}
            onTabChange={setTab}
          />
          {/* Search lives with the tabs in the (fixed) header so it stays put
              while the body scrolls. Only the Home tab uses it. */}
          {tab === "home" && (
            <SearchBar placeholder="Search..." onClick={() => {}} />
          )}
        </>
      }
      body={
        tab === "messages" ? (
          <SidebarChatList
            actions={exampleActions}
            // Shared blank state with a CTA — shown when there are no chats yet.
            emptyState={{
              title: "No conversations yet",
              description: "Start a chat with a teammate to see it here.",
            }}
          />
        ) : tab === "one" ? (
          <OneHistoryTab forceEmpty={forceEmpty} />
        ) : (
          <Menu tree={homeMenuTree} />
        )
      }
      footer={<SidebarFooter {...SidebarFooterStories.Default.args} />}
    />
  )
}

/**
 * Wraps the tabbed sidebar in a chat store whose conversations, when clicked,
 * mount in the same resizable + fullscreen panel the AI chat uses — one
 * content at a time. Used by the `Default` and `CommunicationsWithOneTab`
 * stories.
 */
const ConversationsSidebar = ({
  initialTab,
  autoOpenConvId,
  forceEmpty,
}: {
  initialTab?: string
  autoOpenConvId?: string
  forceEmpty?: boolean
} = {}) => {
  return (
    <SidebarChatProvider>
      <ConversationsSidebarInner
        initialTab={initialTab}
        autoOpenConvId={autoOpenConvId}
        forceEmpty={forceEmpty}
      />
    </SidebarChatProvider>
  )
}

/**
 * Both conversation lists **empty**, side by side in the frame. The Messages tab
 * and the One tab share the same compact blank state (`SidebarChatBlankState`):
 * title + description + a CTA button, no emoji. The host (factorial) supplies the
 * copy and the action per surface; F0 owns the layout so the two read
 * identically. Lands on Messages; the play function also opens One to reveal the
 * AI blank state.
 */
export const CommunicationsBlankStates: Story = {
  name: "Communications — blank states",
  render: (args) => (
    <MockAiChatRuntimeProvider>
      <MockChatAppProvider>
        <ApplicationFrame
          ai={{
            ...withMockChatSlots(args.ai),
            side: "left",
            historyEnabled: false,
            chatHeader: <MockConnectedChatHeader compact />,
          }}
          aiPromotion={args.aiPromotion}
          sidebar={<ConversationsSidebar initialTab="messages" forceEmpty />}
        >
          <Page
            {...PageStories.Default.args}
            header={communicationsPageHeader}
          />
        </ApplicationFrame>
      </MockChatAppProvider>
    </MockAiChatRuntimeProvider>
  ),
}
