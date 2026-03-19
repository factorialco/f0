import type { Meta, StoryObj } from "@storybook/react-vite"

import { ComponentProps, useEffect } from "react"
import { z } from "zod"

import type { F0AiAvailableFormDefinition } from "@/components/F0Form"

import {
  f0FormField,
  F0Form,
  F0AiFormRegistryProvider,
  useF0Form,
} from "@/components/F0Form"
import { useF0FormDefinition } from "@/components/F0WizardForm"
import * as SidebarStories from "@/components/Navigation/Sidebar/index.stories"
import { Sidebar } from "@/components/Navigation/Sidebar/Sidebar"
import { ApplicationFrame } from "@/examples/ApplicationFrame"
import ApplicationFrameStoryMeta from "@/examples/ApplicationFrame/index.stories"
import { PageHeader } from "@/experimental/Navigation/Header/PageHeader"
import { Page } from "@/experimental/Navigation/Page"

import { F0AiChat, F0AiChatProvider, useAiChat } from ".."

const meta: Meta = {
  title: "AI/F0AiFormTools",
  parameters: {
    layout: "fullscreen",
    a11y: { skipCi: true },
  },
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj

// -- Shared schema for the demo form --

const employeeSchema = z.object({
  // -- Text fields --
  firstName: f0FormField(z.string().min(1), {
    label: "First Name",
    placeholder: "e.g. Jane",
    section: "personal",
    helpText: "Legal first name as it appears on official documents",
  }),
  lastName: f0FormField(z.string().min(1), {
    label: "Last Name",
    placeholder: "e.g. Doe",
    section: "personal",
    helpText: "Legal last name as it appears on official documents",
  }),
  email: f0FormField(z.string().email(), {
    label: "Email",
    placeholder: "jane@factorial.co",
    section: "personal",
    helpText: "Work email address — will be used for login",
  }),

  // -- Job fields --
  role: f0FormField(z.enum(["engineer", "designer", "pm", "other"]), {
    label: "Role",
    section: "job",
    options: [
      { value: "engineer", label: "Engineer" },
      { value: "designer", label: "Designer" },
      { value: "pm", label: "Product Manager" },
      { value: "other", label: "Other" },
    ],
  }),
  skills: f0FormField(
    z.array(z.enum(["react", "typescript", "ruby", "python", "figma"])),
    {
      label: "Skills",
      section: "job",
      multiple: true,
      helpText: "Select all that apply",
      options: [
        { value: "react", label: "React" },
        { value: "typescript", label: "TypeScript" },
        { value: "ruby", label: "Ruby" },
        { value: "python", label: "Python" },
        { value: "figma", label: "Figma" },
      ],
    }
  ),
  remote: f0FormField(z.boolean(), {
    label: "Remote Worker",
    section: "job",
    fieldType: "switch",
    helpText: "Enable if the employee works remotely full-time",
  }),

  // -- Compensation fields --
  salary: f0FormField(z.number().min(0), {
    label: "Annual Salary",
    placeholder: "e.g. 50000",
    section: "compensation",
    helpText: "Gross annual salary in the company's base currency",
  }),
  lunchBreak: f0FormField(z.number().min(0), {
    label: "Lunch Break",
    section: "compensation",
    fieldType: "duration",
    units: ["hours", "minutes"],
    helpText: "Daily lunch break duration",
  }),

  // -- Dates fields --
  startDate: f0FormField(z.date(), {
    label: "Start Date",
    section: "dates",
    granularities: ["day"],
    helpText: "First day of work",
  }),
  checkInTime: f0FormField(z.date(), {
    label: "Check-in Time",
    section: "dates",
    fieldType: "time",
    helpText: "Expected daily check-in time",
  }),
  orientationDateTime: f0FormField(z.date(), {
    label: "Orientation Date & Time",
    section: "dates",
    fieldType: "datetime",
    helpText: "When the onboarding session is scheduled",
  }),
  probationPeriod: f0FormField(
    z.object({ from: z.date(), to: z.date().optional() }),
    {
      label: "Probation Period",
      section: "dates",
      fieldType: "daterange",
      helpText: "Leave end date empty for an open-ended probation",
    }
  ),

  // -- Additional fields --
  notes: f0FormField(z.string().optional(), {
    label: "Notes",
    section: "additional",
    fieldType: "textarea",
    placeholder: "Any additional notes...",
    rows: 3,
    helpText: "Internal notes visible only to HR",
  }),
  termsAccepted: f0FormField(z.boolean(), {
    label: "Accepts Terms & Conditions",
    section: "additional",
    fieldType: "checkbox",
    helpText: "Employee must accept before starting",
  }),
})

const employeeSections = {
  personal: {
    title: "Personal Information",
    description: "Basic identity and contact details",
  },
  job: {
    title: "Job Details",
    description: "Role, skills, and work arrangement",
  },
  compensation: {
    title: "Compensation",
    description: "Salary and benefits configuration",
  },
  dates: {
    title: "Important Dates",
    description: "Start date, schedule, and probation period",
  },
  additional: {
    title: "Additional",
    description: "Notes and legal agreements",
  },
}

// -- Chat auto-opener --

function AutoOpenChat({ children }: { children: React.ReactElement }) {
  const { setOpen } = useAiChat()

  useEffect(() => {
    setOpen(true)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return <>{children}</>
}

// -- Story: Form + AI Chat side by side --

function FormWithAiDemo() {
  const { formRef } = useF0Form()

  const formDefinition = useF0FormDefinition({
    name: "new-employee",
    schema: employeeSchema,
    sections: employeeSections,
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      notes: "",
      salary: undefined,
      lunchBreak: undefined,
      remote: false,
      termsAccepted: false,
      role: undefined,
      skills: [],
      startDate: undefined,
      checkInTime: undefined,
      orientationDateTime: undefined,
      probationPeriod: undefined,
    },
    onSubmit: async ({ data }) => {
      // eslint-disable-next-line no-console
      console.info("Form submitted:", JSON.stringify(data, null, 2))
      return { success: true, message: "Employee created!" }
    },
  })

  return (
    <div className="flex h-screen w-full">
      {/* Left side: the form */}
      <div className="flex-1 overflow-y-auto p-8">
        <div className="mx-auto max-w-2xl">
          <h1 className="font-bold mb-1 text-2xl text-f1-foreground">
            New Employee
          </h1>
          <p className="mb-6 text-sm text-f1-foreground-secondary">
            Try asking One to fill this form. Say something like: &quot;Fill the
            new employee form with Jane Doe, engineer, starting next
            Monday&quot;
          </p>
          <F0Form formRef={formRef} formDefinition={formDefinition} />
        </div>
      </div>

      {/* Right side: AI Chat */}
      <F0AiChat />
    </div>
  )
}

/**
 * A form + One AI Chat side by side.
 *
 * The AI has access to form tools: it can list active forms,
 * describe their fields, fill values, read state, and submit.
 *
 * **Requires a running Mastra dev server** at
 * `https://mastra.local.factorial.dev/copilotkit`.
 *
 * Try prompts like:
 * - "What forms are available?"
 * - "Describe the new employee form"
 * - "Fill the form with: Jane Doe, engineer, salary 75000, starting 2026-04-01"
 * - "What's the current form state?"
 * - "Submit the form"
 */
export const FormWithAiChat: Story = {
  render() {
    return (
      <F0AiFormRegistryProvider>
        <F0AiChatProvider
          enabled
          runtimeUrl="https://mastra.local.factorial.dev/copilotkit"
          agent="one-workflow"
          credentials="include"
          showDevConsole={false}
          greeting="Hello! I can help you fill out the employee form. Ask me to describe it, fill fields, or submit."
        >
          <AutoOpenChat>
            <FormWithAiDemo />
          </AutoOpenChat>
        </F0AiChatProvider>
      </F0AiFormRegistryProvider>
    )
  },
}

// =============================================================================
// Story: Available Form Definitions (no rendered forms)
// =============================================================================

const timeOffRequestSchema = z.object({
  employeeName: f0FormField(z.string().min(1), {
    label: "Employee Name",
    placeholder: "e.g. Jane Doe",
  }),
  leaveType: f0FormField(z.enum(["vacation", "sick", "personal", "parental"]), {
    label: "Leave Type",
    options: [
      { value: "vacation", label: "Vacation" },
      { value: "sick", label: "Sick Leave" },
      { value: "personal", label: "Personal Day" },
      { value: "parental", label: "Parental Leave" },
    ],
  }),
  startDate: f0FormField(z.date(), {
    label: "Start Date",
    granularities: ["day"],
  }),
  endDate: f0FormField(z.date(), {
    label: "End Date",
    granularities: ["day"],
  }),
  reason: f0FormField(z.string().optional(), {
    label: "Reason",
    fieldType: "textarea",
    placeholder: "Optional reason for the request...",
    rows: 3,
  }),
})

const expenseReportSchema = z.object({
  description: f0FormField(z.string().min(1), {
    label: "Description",
    placeholder: "e.g. Client dinner",
  }),
  amount: f0FormField(z.number().min(0.01), {
    label: "Amount (€)",
    placeholder: "e.g. 125.50",
  }),
  category: f0FormField(
    z.enum(["travel", "meals", "supplies", "software", "other"]),
    {
      label: "Category",
      options: [
        { value: "travel", label: "Travel" },
        { value: "meals", label: "Meals & Entertainment" },
        { value: "supplies", label: "Office Supplies" },
        { value: "software", label: "Software & Tools" },
        { value: "other", label: "Other" },
      ],
    }
  ),
  date: f0FormField(z.date(), {
    label: "Expense Date",
    granularities: ["day"],
  }),
  notes: f0FormField(z.string().optional(), {
    label: "Notes",
    fieldType: "textarea",
    placeholder: "Additional details...",
    rows: 2,
  }),
})

const availableForms: F0AiAvailableFormDefinition[] = [
  {
    name: "time-off-request",
    schema: timeOffRequestSchema,
    defaultValues: {
      employeeName: "",
      leaveType: undefined,
      startDate: undefined,
      endDate: undefined,
      reason: "",
    },
    onSubmit: async (values) => {
      // eslint-disable-next-line no-console
      console.info(
        "Time-off request submitted:",
        JSON.stringify(values, null, 2)
      )
    },
  },
  {
    name: "expense-report",
    schema: expenseReportSchema,
    defaultValues: {
      description: "",
      amount: undefined,
      category: undefined,
      date: undefined,
      notes: "",
    },
    onSubmit: async (values) => {
      // eslint-disable-next-line no-console
      console.info("Expense report submitted:", JSON.stringify(values, null, 2))
    },
  },
]

const applicationFrameProps = ApplicationFrameStoryMeta.args as ComponentProps<
  typeof ApplicationFrame
>

const storyModule = {
  name: "Dashboard",
  href: "/dashboard",
  id: "benefits" as const,
}

/**
 * Full-screen ApplicationFrame with AI chat. Two form definitions
 * (`time-off-request` and `expense-report`) are registered via
 * `availableFormDefinitions` — no forms are rendered on the page.
 *
 * The AI can still list, describe, fill, read state, and submit these forms
 * through the standard form tools.
 *
 * **Requires a running Mastra dev server** at
 * `https://mastra.local.factorial.dev/copilotkit`.
 *
 * Try prompts like:
 * - "What forms are available?"
 * - "Fill the time-off request for Jane Doe, vacation from April 1 to April 10"
 * - "Submit the expense report with: Client dinner, 85€, meals category, today"
 * - "What's the current state of the time-off request?"
 */
export const AvailableFormDefinitions: Story = {
  render() {
    return (
      <F0AiFormRegistryProvider availableFormDefinitions={availableForms}>
        <ApplicationFrame
          {...applicationFrameProps}
          sidebar={<Sidebar {...SidebarStories.default.args} />}
        >
          <Page header={<PageHeader module={storyModule} />}>
            <div className="mx-auto max-w-2xl p-8">
              <h1 className="font-bold mb-2 text-2xl text-f1-foreground">
                Available Form Definitions
              </h1>
              <p className="mb-4 text-sm text-f1-foreground-secondary">
                No forms are rendered on this page, but the AI knows about two
                form definitions registered via{" "}
                <code className="rounded bg-f1-background-tertiary px-1 py-0.5 text-xs">
                  availableFormDefinitions
                </code>
                :
              </p>
              <ul className="list-disc space-y-2 pl-6 text-sm text-f1-foreground-secondary">
                <li>
                  <strong>time-off-request</strong> — Employee name, leave type,
                  start/end dates, and optional reason
                </li>
                <li>
                  <strong>expense-report</strong> — Description, amount,
                  category, date, and optional notes
                </li>
              </ul>
              <p className="mt-4 text-sm text-f1-foreground-secondary">
                Open the AI chat and try interacting with these forms.
              </p>
            </div>
          </Page>
        </ApplicationFrame>
      </F0AiFormRegistryProvider>
    )
  },
}

// =============================================================================
// Story: presentForm — AI opens forms in dialog or wizard mode
// =============================================================================

const presentableFormSchema = z.object({
  firstName: f0FormField(z.string().min(1), {
    label: "First Name",
    section: "personal",
    placeholder: "e.g. Jane",
  }),
  lastName: f0FormField(z.string().min(1), {
    label: "Last Name",
    section: "personal",
    placeholder: "e.g. Doe",
  }),
  email: f0FormField(z.string().email(), {
    label: "Email",
    section: "personal",
    placeholder: "jane@factorial.co",
  }),
  role: f0FormField(z.enum(["engineer", "designer", "pm"]), {
    label: "Role",
    section: "work",
    options: [
      { value: "engineer", label: "Engineer" },
      { value: "designer", label: "Designer" },
      { value: "pm", label: "Product Manager" },
    ],
  }),
  salary: f0FormField(z.number().min(0), {
    label: "Annual Salary",
    section: "compensation",
    placeholder: "e.g. 50000",
  }),
})

const presentableFormDefinitions: F0AiAvailableFormDefinition[] = [
  {
    name: "quick-contact",
    schema: z.object({
      name: f0FormField(z.string().min(1), {
        label: "Name",
        placeholder: "Full name",
      }),
      email: f0FormField(z.string().email(), {
        label: "Email",
        placeholder: "name@example.com",
      }),
      message: f0FormField(z.string().optional(), {
        label: "Message",
        fieldType: "textarea",
        placeholder: "Optional message...",
        rows: 3,
      }),
    }),
    defaultValues: { name: "", email: "", message: "" },
    title: "Quick Contact",
    description: "Send a quick message to someone",
    onSubmit: async (values) => {
      // eslint-disable-next-line no-console
      console.info("Contact submitted:", JSON.stringify(values, null, 2))
    },
  },
  {
    name: "new-employee",
    schema: presentableFormSchema,
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      role: undefined,
      salary: undefined,
    },
    sections: {
      personal: {
        title: "Personal Information",
        description: "Name and contact details",
      },
      work: {
        title: "Work Details",
        description: "Role and department",
      },
      compensation: {
        title: "Compensation",
        description: "Salary information",
      },
    },
    title: "New Employee",
    steps: [
      { title: "Personal Info", sectionIds: ["personal"] },
      { title: "Work & Compensation", sectionIds: ["work", "compensation"] },
    ],
    onSubmit: async (values) => {
      // eslint-disable-next-line no-console
      console.info("Employee created:", JSON.stringify(values, null, 2))
    },
  },
]

/**
 * AI can present forms dynamically using the `presentForm` tool.
 *
 * Two forms are registered via `availableFormDefinitions`:
 * - **quick-contact** — A simple 3-field form (best suited for dialog mode)
 * - **new-employee** — A multi-section form with wizard steps
 *
 * The AI chooses mode `"dialog"` or `"wizard"` based on form complexity.
 * Once presented, the form is live and can be filled/submitted via other tools.
 *
 * **Requires a running Mastra dev server** at
 * `https://mastra.local.factorial.dev/copilotkit`.
 *
 * Try prompts like:
 * - "What forms are available?"
 * - "Open the quick contact form"
 * - "Present the new employee form as a wizard"
 * - "Fill the contact form with John Doe, john@test.com"
 */
export const PresentForm: Story = {
  render() {
    return (
      <F0AiFormRegistryProvider
        availableFormDefinitions={presentableFormDefinitions}
      >
        <F0AiChatProvider
          enabled
          runtimeUrl="https://mastra.local.factorial.dev/copilotkit"
          agent="one-workflow"
          credentials="include"
          showDevConsole={false}
          greeting="Hello! I can open forms for you. Ask me to present the quick contact form (dialog) or the new employee form (wizard)."
        >
          <AutoOpenChat>
            <ApplicationFrame
              {...applicationFrameProps}
              sidebar={<Sidebar {...SidebarStories.default.args} />}
            >
              <Page header={<PageHeader module={storyModule} />}>
                <div className="mx-auto max-w-2xl p-8">
                  <h1 className="font-bold mb-2 text-2xl text-f1-foreground">
                    AI Form Presenter
                  </h1>
                  <p className="mb-4 text-sm text-f1-foreground-secondary">
                    No forms are rendered on this page. The AI can dynamically
                    open forms using the{" "}
                    <code className="rounded bg-f1-background-tertiary px-1 py-0.5 text-xs">
                      presentForm
                    </code>{" "}
                    tool in either <strong>dialog</strong> or{" "}
                    <strong>wizard</strong> mode.
                  </p>
                  <ul className="list-disc space-y-2 pl-6 text-sm text-f1-foreground-secondary">
                    <li>
                      <strong>quick-contact</strong> — Simple form, best as a
                      dialog
                    </li>
                    <li>
                      <strong>new-employee</strong> — Multi-section form with
                      wizard steps
                    </li>
                  </ul>
                  <p className="mt-4 text-sm text-f1-foreground-secondary">
                    Open the AI chat and ask it to present a form.
                  </p>
                </div>
              </Page>
            </ApplicationFrame>
          </AutoOpenChat>
        </F0AiChatProvider>
      </F0AiFormRegistryProvider>
    )
  },
}
