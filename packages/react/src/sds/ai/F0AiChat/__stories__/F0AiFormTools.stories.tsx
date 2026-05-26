import type { Meta, StoryObj } from "@storybook/react-vite"

import { ComponentProps, useEffect } from "react"
import { z } from "zod"

import type { F0AiAvailableFormDefinition } from "@/patterns/F0Form"

import { PageHeader } from "@/experimental/Navigation/Header/PageHeader"
import { ApplicationFrame } from "@/patterns/ApplicationFrame"
import ApplicationFrameStoryMeta from "@/patterns/ApplicationFrame/index.stories"
import {
  f0FormField,
  F0Form,
  F0AiFormRegistryProvider,
  useF0Form,
} from "@/patterns/F0Form"
import { useF0FormDefinition } from "@/patterns/F0WizardForm"
import { Page } from "@/patterns/Navigation/Page"
import * as SidebarStories from "@/patterns/Navigation/Sidebar/index.stories"
import { Sidebar } from "@/patterns/Navigation/Sidebar/Sidebar"

import { F0AiChatProvider, useAiChat } from ".."

const meta = {
  title: "AI/F0AiFormTools",
  parameters: {
    layout: "fullscreen",
    a11y: { skipCi: true },
  },
  tags: ["autodocs"],
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

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
    steps: [
      { title: "Personal Info", sectionIds: ["personal"] },
      { title: "Job Details", sectionIds: ["job"] },
      { title: "Compensation", sectionIds: ["compensation"] },
      { title: "Important Dates", sectionIds: ["dates"] },
      { title: "Additional", sectionIds: ["additional"] },
    ],
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
    <div className="mx-auto p-8">
      <h1 className="font-bold mb-1 text-2xl text-f1-foreground">
        New Employee
      </h1>
      <p className="mb-6 text-sm text-f1-foreground-secondary">
        Try asking One to fill this form. Say something like: &quot;Fill the new
        employee form with Jane Doe, engineer, starting next Monday&quot;
      </p>
      <F0Form formRef={formRef} formDefinition={formDefinition} />
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
          initialMessage="Help me fill out the employee form"
        >
          <AutoOpenChat>
            <ApplicationFrame
              {...applicationFrameProps}
              sidebar={<Sidebar {...SidebarStories.default.args} />}
            >
              <Page header={<PageHeader module={storyModule} />}>
                <FormWithAiDemo />
              </Page>
            </ApplicationFrame>
          </AutoOpenChat>
        </F0AiChatProvider>
      </F0AiFormRegistryProvider>
    )
  },
}

const applicationFrameProps = ApplicationFrameStoryMeta.args as ComponentProps<
  typeof ApplicationFrame
>

const storyModule = {
  name: "Dashboard",
  href: "/dashboard",
  id: "benefits" as const,
}

// =============================================================================
// Story: AvailableForms — AI fills forms shown via canvas card
// =============================================================================

const presentableFormSchema = z.object({
  // -- Personal Information --
  firstName: f0FormField(z.string().min(1), {
    label: "First Name",
    section: "personal",
    placeholder: "e.g. Jane",
    helpText: "Legal first name as it appears on official documents",
  }),
  lastName: f0FormField(z.string().min(1), {
    label: "Last Name",
    section: "personal",
    placeholder: "e.g. Doe",
    helpText: "Legal last name as it appears on official documents",
  }),
  email: f0FormField(z.string().email(), {
    label: "Work Email",
    section: "personal",
    placeholder: "jane@factorial.co",
    helpText: "This will be used as the login email",
  }),
  personalEmail: f0FormField(z.string().email().optional(), {
    label: "Personal Email",
    section: "personal",
    placeholder: "jane.doe@gmail.com",
    helpText: "Optional — used for pre-boarding communications",
  }),
  phone: f0FormField(z.string().optional(), {
    label: "Phone Number",
    section: "personal",
    placeholder: "+34 600 000 000",
  }),
  dateOfBirth: f0FormField(z.date().optional(), {
    label: "Date of Birth",
    section: "personal",
    granularities: ["day"],
  }),
  nationality: f0FormField(
    z
      .enum(["spanish", "french", "german", "italian", "portuguese", "other"])
      .optional(),
    {
      label: "Nationality",
      section: "personal",
      options: [
        { value: "spanish", label: "Spanish" },
        { value: "french", label: "French" },
        { value: "german", label: "German" },
        { value: "italian", label: "Italian" },
        { value: "portuguese", label: "Portuguese" },
        { value: "other", label: "Other" },
      ],
    }
  ),
  gender: f0FormField(
    z.enum(["male", "female", "non-binary", "prefer-not-to-say"]).optional(),
    {
      label: "Gender",
      section: "personal",
      options: [
        { value: "male", label: "Male" },
        { value: "female", label: "Female" },
        { value: "non-binary", label: "Non-binary" },
        { value: "prefer-not-to-say", label: "Prefer not to say" },
      ],
    }
  ),

  // -- Work Details --
  role: f0FormField(
    z.enum(["engineer", "designer", "pm", "data", "qa", "devops", "other"]),
    {
      label: "Role",
      section: "work",
      options: [
        { value: "engineer", label: "Engineer" },
        { value: "designer", label: "Designer" },
        { value: "pm", label: "Product Manager" },
        { value: "data", label: "Data Analyst" },
        { value: "qa", label: "QA Engineer" },
        { value: "devops", label: "DevOps Engineer" },
        { value: "other", label: "Other" },
      ],
    }
  ),
  department: f0FormField(
    z.enum([
      "engineering",
      "design",
      "product",
      "hr",
      "finance",
      "marketing",
      "sales",
    ]),
    {
      label: "Department",
      section: "work",
      options: [
        { value: "engineering", label: "Engineering" },
        { value: "design", label: "Design" },
        { value: "product", label: "Product" },
        { value: "hr", label: "Human Resources" },
        { value: "finance", label: "Finance" },
        { value: "marketing", label: "Marketing" },
        { value: "sales", label: "Sales" },
      ],
    }
  ),
  team: f0FormField(z.string().optional(), {
    label: "Team",
    section: "work",
    placeholder: "e.g. Platform, Growth, Core",
    helpText: "Specific team within the department",
  }),
  manager: f0FormField(z.string().optional(), {
    label: "Direct Manager",
    section: "work",
    placeholder: "e.g. John Smith",
    helpText: "Name of the reporting manager",
  }),
  skills: f0FormField(
    z.array(
      z.enum([
        "react",
        "typescript",
        "ruby",
        "python",
        "figma",
        "sql",
        "go",
        "java",
      ])
    ),
    {
      label: "Skills",
      section: "work",
      multiple: true,
      helpText: "Select all that apply",
      options: [
        { value: "react", label: "React" },
        { value: "typescript", label: "TypeScript" },
        { value: "ruby", label: "Ruby" },
        { value: "python", label: "Python" },
        { value: "figma", label: "Figma" },
        { value: "sql", label: "SQL" },
        { value: "go", label: "Go" },
        { value: "java", label: "Java" },
      ],
    }
  ),
  contractType: f0FormField(
    z.enum(["full-time", "part-time", "contractor", "intern"]),
    {
      label: "Contract Type",
      section: "work",
      options: [
        { value: "full-time", label: "Full-time" },
        { value: "part-time", label: "Part-time" },
        { value: "contractor", label: "Contractor" },
        { value: "intern", label: "Intern" },
      ],
    }
  ),
  location: f0FormField(
    z
      .enum(["barcelona", "madrid", "lisbon", "berlin", "london", "remote"])
      .optional(),
    {
      label: "Office Location",
      section: "work",
      options: [
        { value: "barcelona", label: "Barcelona" },
        { value: "madrid", label: "Madrid" },
        { value: "lisbon", label: "Lisbon" },
        { value: "berlin", label: "Berlin" },
        { value: "london", label: "London" },
        { value: "remote", label: "Fully Remote" },
      ],
    }
  ),
  remote: f0FormField(z.boolean(), {
    label: "Remote Worker",
    section: "work",
    fieldType: "switch",
    helpText: "Enable if the employee works remotely full-time",
  }),

  // -- Compensation --
  salary: f0FormField(z.number().min(0), {
    label: "Annual Salary",
    section: "compensation",
    placeholder: "e.g. 50000",
    helpText: "Gross annual salary in EUR",
  }),
  currency: f0FormField(z.enum(["eur", "usd", "gbp"]).optional(), {
    label: "Currency",
    section: "compensation",
    options: [
      { value: "eur", label: "EUR (€)" },
      { value: "usd", label: "USD ($)" },
      { value: "gbp", label: "GBP (£)" },
    ],
  }),
  payFrequency: f0FormField(
    z.enum(["monthly", "biweekly", "weekly"]).optional(),
    {
      label: "Pay Frequency",
      section: "compensation",
      options: [
        { value: "monthly", label: "Monthly" },
        { value: "biweekly", label: "Bi-weekly" },
        { value: "weekly", label: "Weekly" },
      ],
    }
  ),
  bonus: f0FormField(z.number().min(0).optional(), {
    label: "Signing Bonus",
    section: "compensation",
    placeholder: "e.g. 5000",
    helpText: "One-time signing bonus amount",
  }),
  lunchBreak: f0FormField(z.number().min(0).optional(), {
    label: "Lunch Break",
    section: "compensation",
    fieldType: "duration",
    units: ["hours", "minutes"],
    helpText: "Daily lunch break duration",
  }),

  // -- Important Dates --
  startDate: f0FormField(z.date(), {
    label: "Start Date",
    section: "dates",
    granularities: ["day"],
    helpText: "First day of work",
  }),
  checkInTime: f0FormField(z.date().optional(), {
    label: "Check-in Time",
    section: "dates",
    fieldType: "time",
    helpText: "Expected daily check-in time",
  }),
  orientationDateTime: f0FormField(z.date().optional(), {
    label: "Orientation Date & Time",
    section: "dates",
    fieldType: "datetime",
    helpText: "When the onboarding session is scheduled",
  }),
  probationPeriod: f0FormField(
    z.object({ from: z.date(), to: z.date().optional() }).optional(),
    {
      label: "Probation Period",
      section: "dates",
      fieldType: "daterange",
      helpText: "Leave end date empty for open-ended probation",
    }
  ),

  // -- Additional --
  emergencyContactName: f0FormField(z.string().optional(), {
    label: "Emergency Contact Name",
    section: "additional",
    placeholder: "e.g. Maria Doe",
  }),
  emergencyContactPhone: f0FormField(z.string().optional(), {
    label: "Emergency Contact Phone",
    section: "additional",
    placeholder: "+34 600 000 000",
  }),
  notes: f0FormField(z.string().optional(), {
    label: "Notes",
    section: "additional",
    fieldType: "textarea",
    placeholder: "Any additional notes about this employee...",
    rows: 3,
    helpText: "Internal notes visible only to HR",
  }),
  welcomeMessage: f0FormField(
    z.object({
      value: z.string().optional(),
      mentionIds: z.array(z.number()).optional(),
    }),
    {
      label: "Welcome Message",
      section: "additional",
      fieldType: "richtext",
      placeholder: "Write a welcome message for the new employee...",
      height: "sm",
      plainHtmlMode: true,
      helpText: "Rich text welcome message sent on the first day",
    }
  ),
  termsAccepted: f0FormField(z.boolean(), {
    label: "Accepts Terms & Conditions",
    section: "additional",
    fieldType: "checkbox",
    helpText: "Employee must accept before starting",
  }),
})

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

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms))

const presentableFormDefinitions: F0AiAvailableFormDefinition[] = [
  {
    name: "time-off-request",
    schema: timeOffRequestSchema,
    title: "Time Off Request",
    description: "Request time off for an employee",
    module: "timeoff",
    defaultValues: {
      employeeName: "",
      leaveType: undefined,
      startDate: undefined,
      endDate: undefined,
      reason: undefined,
    },
    onSubmit: async (values) => {
      await sleep(3000)
      // eslint-disable-next-line no-console
      console.info(
        "Time-off request submitted:",
        JSON.stringify(values, null, 2)
      )
    },
    submitConfig: {
      label: "Request Time Off",
    },
  },
  {
    name: "expense-report",
    schema: expenseReportSchema,
    title: "Expense Report",
    description: "Submit an expense report for reimbursement",
    module: "my_spending",
    defaultValues: {
      description: "",
      amount: undefined,
      category: undefined,
      date: undefined,
      notes: undefined,
    },
    onSubmit: async (values) => {
      await sleep(3000)
      // eslint-disable-next-line no-console
      console.info("Expense report submitted:", JSON.stringify(values, null, 2))
    },
    submitConfig: {
      label: "Submit Expense",
    },
  },
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
    module: "communities",
    onSubmit: async (values) => {
      await sleep(3000)
      // eslint-disable-next-line no-console
      console.info("Contact submitted:", JSON.stringify(values, null, 2))
    },
    submitConfig: {
      label: "Send Message",
    },
  },
  {
    name: "new-employee",
    schema: presentableFormSchema,
    module: "employees",
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      personalEmail: undefined,
      phone: undefined,
      dateOfBirth: undefined,
      nationality: undefined,
      gender: undefined,
      role: undefined,
      department: undefined,
      team: undefined,
      manager: undefined,
      skills: [],
      contractType: undefined,
      location: undefined,
      remote: false,
      salary: undefined,
      currency: undefined,
      payFrequency: undefined,
      bonus: undefined,
      lunchBreak: undefined,
      startDate: undefined,
      checkInTime: undefined,
      orientationDateTime: undefined,
      probationPeriod: undefined,
      emergencyContactName: undefined,
      emergencyContactPhone: undefined,
      notes: undefined,
      welcomeMessage: { value: "" },
      termsAccepted: false,
    },
    sections: {
      personal: {
        title: "Personal Information",
        description: "Identity, contact details, and demographics",
      },
      work: {
        title: "Work Details",
        description: "Role, department, team, skills, and work arrangement",
      },
      compensation: {
        title: "Compensation",
        description: "Salary, currency, pay schedule, and benefits",
      },
      dates: {
        title: "Important Dates",
        description: "Start date, schedule, and probation period",
      },
      additional: {
        title: "Additional",
        description: "Emergency contacts, notes, and legal agreements",
      },
    },
    title: "New Employee",
    // steps: [
    //   { title: "Personal Info", sectionIds: ["personal"] },
    //   { title: "Work Details", sectionIds: ["work"] },
    //   { title: "Compensation", sectionIds: ["compensation"] },
    //   { title: "Dates & Schedule", sectionIds: ["dates"] },
    //   { title: "Additional", sectionIds: ["additional"] },
    // ],
    onSubmit: async (values) => {
      await sleep(3000)
      // eslint-disable-next-line no-console
      console.info("Employee created:", JSON.stringify(values, null, 2))
    },
    submitConfig: {
      label: "Create Employee",
    },
  },
]

/**
 * AI can interact with virtual forms: fill fields, read state, and submit.
 * A canvas card appears inline in the chat when a form is actively being filled.
 * The user can open the card to see the form in the canvas panel.
 *
 * Four forms are registered via `availableFormDefinitions`:
 * - **time-off-request** — Simple leave request
 * - **expense-report** — Expense submission
 * - **quick-contact** — A simple 3-field form
 * - **new-employee** — A multi-section form with wizard steps
 *
 * **Requires a running Mastra dev server** at
 * `https://mastra.local.factorial.dev/copilotkit`.
 *
 * Try prompts like:
 * - "What forms are available?"
 * - "Fill the time-off request for Jane Doe, vacation from April 1 to April 10"
 * - "Fill the new employee form with Jane Doe, engineer, salary 75000"
 * - "Open the quick contact form"
 */
export const AvailableForms: Story = {
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
          initialMessage="What form do you want to fill out?"
        >
          <AutoOpenChat>
            <ApplicationFrame
              {...applicationFrameProps}
              sidebar={<Sidebar {...SidebarStories.default.args} />}
            >
              <Page header={<PageHeader module={storyModule} />}>
                <div className="mx-auto h-screen overflow-hidden p-8">
                  <h1 className="font-bold mb-2 text-2xl text-f1-foreground">
                    AI Form Tools
                  </h1>
                  <p className="mb-4 text-sm text-f1-foreground-secondary">
                    No forms are rendered on this page. The AI can fill, read,
                    submit, and present forms dynamically using{" "}
                    <code className="rounded bg-f1-background-tertiary px-1 py-0.5 text-xs">
                      availableFormDefinitions
                    </code>
                    .
                  </p>
                  <ul className="list-disc space-y-2 pl-6 text-sm text-f1-foreground-secondary">
                    <li>
                      <strong>time-off-request</strong> — Employee name, leave
                      type, start/end dates, and optional reason
                    </li>
                    <li>
                      <strong>expense-report</strong> — Description, amount,
                      category, date, and optional notes
                    </li>
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
                    Open the AI chat and try interacting with these forms.
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

// =============================================================================
// Story: FormWithDefaultValuesParams — edit an existing aircraft record by id
// =============================================================================

// Mock "database" of aircraft the AI can edit
const mockAircraft = [
  {
    id: "ac-1",
    registration: "EC-LVL",
    manufacturer: "airbus" as const,
    model: "A320",
    status: "active" as const,
    capacity: 180,
    rangeKm: 6150,
    firstFlight: new Date("2012-05-10"),
    maintenanceDue: new Date("2026-08-15"),
    activeRoute: true,
    notes: "Assigned to short-haul Mediterranean routes",
  },
  {
    id: "ac-2",
    registration: "EC-MXV",
    manufacturer: "boeing" as const,
    model: "737 MAX 8",
    status: "maintenance" as const,
    capacity: 162,
    rangeKm: 6570,
    firstFlight: new Date("2019-11-03"),
    maintenanceDue: new Date("2026-05-20"),
    activeRoute: false,
    notes: "Scheduled engine inspection",
  },
  {
    id: "ac-3",
    registration: "EC-NQK",
    manufacturer: "airbus" as const,
    model: "A350-900",
    status: "active" as const,
    capacity: 369,
    rangeKm: 15000,
    firstFlight: new Date("2021-03-22"),
    maintenanceDue: new Date("2027-01-10"),
    activeRoute: true,
    notes: "Long-haul intercontinental fleet",
  },
]

const editAircraftSchema = z.object({
  registration: f0FormField(z.string().min(1), {
    label: "Registration",
    placeholder: "e.g. EC-LVL",
    section: "identity",
    helpText: "Official ICAO aircraft registration code",
  }),
  manufacturer: f0FormField(
    z.enum(["airbus", "boeing", "embraer", "bombardier", "other"]),
    {
      label: "Manufacturer",
      section: "identity",
      options: [
        { value: "airbus", label: "Airbus" },
        { value: "boeing", label: "Boeing" },
        { value: "embraer", label: "Embraer" },
        { value: "bombardier", label: "Bombardier" },
        { value: "other", label: "Other" },
      ],
    }
  ),
  model: f0FormField(z.string().min(1), {
    label: "Model",
    placeholder: "e.g. A320",
    section: "identity",
    helpText: "Aircraft model designation",
  }),
  status: f0FormField(z.enum(["active", "maintenance", "retired"]), {
    label: "Status",
    section: "operations",
    options: [
      { value: "active", label: "Active" },
      { value: "maintenance", label: "In Maintenance" },
      { value: "retired", label: "Retired" },
    ],
  }),
  capacity: f0FormField(z.number().int().min(1), {
    label: "Passenger Capacity",
    section: "specs",
    placeholder: "e.g. 180",
    helpText: "Maximum number of passengers",
  }),
  rangeKm: f0FormField(z.number().int().min(0), {
    label: "Range (km)",
    section: "specs",
    placeholder: "e.g. 6150",
    helpText: "Maximum flight range in kilometres",
  }),
  firstFlight: f0FormField(z.date(), {
    label: "First Flight Date",
    section: "specs",
    granularities: ["day"],
    helpText: "Date of the aircraft's maiden flight",
  }),
  maintenanceDue: f0FormField(z.date(), {
    label: "Next Maintenance Due",
    section: "operations",
    granularities: ["day"],
    helpText: "Scheduled date for the next maintenance check",
  }),
  activeRoute: f0FormField(z.boolean(), {
    label: "On Active Route",
    section: "operations",
    fieldType: "switch",
    helpText: "Enable if the aircraft is currently assigned to a route",
  }),
  notes: f0FormField(z.string().optional(), {
    label: "Notes",
    section: "additional",
    fieldType: "textarea",
    placeholder: "Any additional notes...",
    rows: 3,
    helpText: "Internal operational notes",
  }),
})

const editAircraftFormDefinition: F0AiAvailableFormDefinition = {
  name: "edit-aircraft",
  title: "Edit Aircraft",
  description: "Update an existing aircraft record",
  module: "employees",
  schema: editAircraftSchema,
  defaultValuesParamsSchema: z.object({
    id: z
      .string()
      .describe(
        "Aircraft id. Available aircraft: ac-1 (EC-LVL, Airbus A320), ac-2 (EC-MXV, Boeing 737 MAX 8), ac-3 (EC-NQK, Airbus A350-900)"
      ),
  }),
  defaultValues: async (params: Record<string, unknown>) => {
    console.log("Received defaultValuesParams:", params)
    const id = params.id as string
    const aircraft = mockAircraft.find((a) => a.id === id)
    // Simulate a slow API fetch (2 seconds)
    await sleep(2000)
    if (!aircraft) {
      return {
        registration: "",
        manufacturer: undefined,
        model: "",
        status: undefined,
        capacity: undefined,
        rangeKm: undefined,
        firstFlight: undefined,
        maintenanceDue: undefined,
        activeRoute: false,
        notes: "",
      }
    }
    return {
      registration: aircraft.registration,
      manufacturer: aircraft.manufacturer,
      model: aircraft.model,
      status: aircraft.status,
      capacity: aircraft.capacity,
      rangeKm: aircraft.rangeKm,
      firstFlight: aircraft.firstFlight,
      maintenanceDue: aircraft.maintenanceDue,
      activeRoute: aircraft.activeRoute,
      notes: aircraft.notes,
    }
  },
  sections: {
    identity: {
      title: "Identity",
      description: "Registration and manufacturer",
    },
    specs: { title: "Specifications", description: "Capacity and range" },
    operations: { title: "Operations", description: "Status and scheduling" },
    additional: { title: "Additional", description: "Internal notes" },
  },
  onSubmit: async (values) => {
    await sleep(1500)
    // eslint-disable-next-line no-console
    console.info("Aircraft updated:", JSON.stringify(values, null, 2))
  },
  submitConfig: { label: "Save Changes" },
}

const availableFormDefinitions = [editAircraftFormDefinition]

/**
 * Demonstrates `defaultValuesParamsSchema`: the AI asks for an aircraft id,
 * looks it up in the mock fleet, and pre-populates the edit form with that
 * aircraft's current data.
 *
 * Three aircraft are available: `ac-1`, `ac-2`, `ac-3`.
 *
 * Try prompts like:
 * - "Edit aircraft ac-1"
 * - "Open the edit form for the A350"
 * - "Set ac-2 status to active"
 */
export const FormWithDefaultValuesParams: Story = {
  render() {
    return (
      <F0AiFormRegistryProvider
        availableFormDefinitions={availableFormDefinitions}
      >
        <F0AiChatProvider
          enabled
          runtimeUrl="https://mastra.local.factorial.dev/copilotkit"
          agent="one-workflow"
          credentials="include"
          showDevConsole={false}
          initialMessage="Which aircraft do you want to edit?"
        >
          <AutoOpenChat>
            <ApplicationFrame
              {...applicationFrameProps}
              sidebar={<Sidebar {...SidebarStories.default.args} />}
            >
              <Page header={<PageHeader module={storyModule} />}>
                <div className="mx-auto h-screen overflow-hidden p-8">
                  <h1 className="font-bold mb-2 text-2xl text-f1-foreground">
                    Fleet Management (defaultValuesParamsSchema)
                  </h1>
                  <p className="mb-4 text-sm text-f1-foreground-secondary">
                    The AI form uses{" "}
                    <code className="rounded bg-f1-background-tertiary px-1 py-0.5 text-xs">
                      defaultValuesParamsSchema
                    </code>{" "}
                    to receive an aircraft id and pre-populate the edit form
                    with its current data.
                  </p>
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b text-left text-f1-foreground-secondary">
                        <th className="pb-2 pr-4">ID</th>
                        <th className="pb-2 pr-4">Registration</th>
                        <th className="pb-2 pr-4">Manufacturer</th>
                        <th className="pb-2 pr-4">Model</th>
                        <th className="pb-2">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {mockAircraft.map((ac) => (
                        <tr key={ac.id} className="border-b text-f1-foreground">
                          <td className="font-mono py-2 pr-4 text-xs text-f1-foreground-secondary">
                            {ac.id}
                          </td>
                          <td className="py-2 pr-4">{ac.registration}</td>
                          <td className="py-2 pr-4">{ac.manufacturer}</td>
                          <td className="py-2 pr-4">{ac.model}</td>
                          <td className="py-2">{ac.status}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <p className="mt-6 text-sm text-f1-foreground-secondary">
                    Open the AI chat and ask it to edit one of the aircraft
                    above.
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
