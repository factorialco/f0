import type { Meta, StoryObj } from "@storybook/react-vite"

import { ComponentProps, useState } from "react"
import { z } from "zod"

import { F0Button } from "@/components/F0Button"
import { f0FormField } from "@/components/F0Form/f0Schema"
import { ApplicationFrame } from "@/examples/ApplicationFrame"
import ApplicationFrameStoryMeta from "@/examples/ApplicationFrame/index.stories"
import { withSnapshot } from "@/lib/storybook-utils/parameters"

import { F0WizardForm, useF0FormDefinition } from "../index"

const meta: Meta<typeof F0WizardForm> = {
  title: "Patterns/Forms/F0WizardForm",
  component: F0WizardForm,
  parameters: {
    layout: "fullscreen",
    docs: {
      story: { inline: false, height: "720px" },
    },
  },
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof F0WizardForm>

// =============================================================================
// Single schema stories
// =============================================================================

const singleSchema = z.object({
  email: f0FormField(z.string().email(), {
    label: "Email",
    section: "general",
    placeholder: "alicia.keys@factorial.co",
  }),
  firstName: f0FormField(z.string().min(1), {
    label: "First name",
    section: "general",
  }),
  lastName: f0FormField(z.string().min(1), {
    label: "Last name",
    section: "general",
    row: "name-row",
  }),
  birthDate: f0FormField(z.string().optional(), {
    label: "Birth date",
    section: "personal",
    placeholder: "DD/MM/YYYY",
  }),
  nationality: f0FormField(z.string().optional(), {
    label: "Nationality",
    section: "personal",
  }),
  legalEntity: f0FormField(z.string().optional(), {
    label: "Legal entity",
    section: "work",
  }),
  startDate: f0FormField(z.string().optional(), {
    label: "Start date",
    section: "work",
    placeholder: "DD/MM/YYYY",
  }),
})

function SingleSchemaStory() {
  const [open, setOpen] = useState(true)

  const definition = useF0FormDefinition({
    name: "add-employee-single",
    schema: singleSchema,
    defaultValues: { email: "alicia.keys@factorial.co" },
    sections: {
      general: { title: "General information" },
      personal: { title: "Personal details" },
      work: { title: "Work details" },
    },
    onSubmit: async ({ data }) => {
      console.log("Form submitted:", data)
      await new Promise((r) => setTimeout(r, 1500))
      return { success: true, message: "Employee saved successfully" }
    },
  })

  return (
    <ApplicationFrame
      {...(ApplicationFrameStoryMeta.args as ComponentProps<
        typeof ApplicationFrame
      >)}
    >
      <div className="flex flex-1 items-center justify-center">
        <F0Button label="Open wizard" onClick={() => setOpen(true)} />
        <F0WizardForm
          formDefinition={definition}
          isOpen={open}
          onClose={() => setOpen(false)}
          title="Add employee"
        />
      </div>
    </ApplicationFrame>
  )
}

export const SingleSchema: Story = {
  render: () => <SingleSchemaStory />,
}

// =============================================================================
// Per-section schema stories
// =============================================================================

const perSectionSchema = {
  general: z.object({
    email: f0FormField(z.string().email(), {
      label: "Email",
      placeholder: "alicia.keys@factorial.co",
    }),
    firstName: f0FormField(z.string().min(1), {
      label: "First name",
    }),
  }),
  work: z.object({
    legalEntity: f0FormField(z.string().min(1), {
      label: "Legal entity",
    }),
    startDate: f0FormField(z.string().optional(), {
      label: "Start date",
      placeholder: "DD/MM/YYYY",
    }),
  }),
}

function PerSectionSchemaStory() {
  const [open, setOpen] = useState(true)

  const definition = useF0FormDefinition({
    name: "add-employee-per-section",
    schema: perSectionSchema,
    sections: {
      general: { title: "General information" },
      work: { title: "Work details" },
    },
    onSubmit: async ({ sectionId, data, fullData }) => {
      console.log(`Section "${sectionId}" submitted:`, data)
      console.log("Full data so far:", fullData)
      await new Promise((r) => setTimeout(r, 1500))
      // Return a message only on sections where you want to show the action bar.
      // Steps without a message stay silent.
      const isLastSection = Object.keys(perSectionSchema).at(-1) === sectionId
      return isLastSection
        ? { success: true, message: "Employee created successfully" }
        : { success: true }
    },
  })

  return (
    <ApplicationFrame
      {...(ApplicationFrameStoryMeta.args as ComponentProps<
        typeof ApplicationFrame
      >)}
    >
      <div className="flex flex-1 items-center justify-center">
        <F0Button label="Open wizard" onClick={() => setOpen(true)} />
        <F0WizardForm
          formDefinition={definition}
          isOpen={open}
          onClose={() => setOpen(false)}
          title="Add employee"
        />
      </div>
    </ApplicationFrame>
  )
}

export const PerSectionSchema: Story = {
  render: () => <PerSectionSchemaStory />,
}

// =============================================================================
// Custom step grouping
// =============================================================================

const groupedSchema = z.object({
  email: f0FormField(z.string().email(), {
    label: "Email",
    section: "general",
  }),
  firstName: f0FormField(z.string().min(1), {
    label: "First name",
    section: "general",
  }),
  birthDate: f0FormField(z.string().optional(), {
    label: "Birth date",
    section: "personal",
  }),
  nationality: f0FormField(z.string().optional(), {
    label: "Nationality",
    section: "personal",
  }),
  legalEntity: f0FormField(z.string().min(1), {
    label: "Legal entity",
    section: "work",
  }),
  agreement: f0FormField(z.string().optional(), {
    label: "Agreement notes",
    section: "agreement",
  }),
  notifyManager: f0FormField(z.string().optional(), {
    label: "Notify manager",
    section: "settings",
  }),
})

function CustomStepGroupingStory() {
  const [open, setOpen] = useState(true)

  const definition = useF0FormDefinition({
    name: "add-employee-grouped",
    schema: groupedSchema,
    sections: {
      general: { title: "General information" },
      personal: { title: "Personal details" },
      work: { title: "Work details" },
      agreement: { title: "Agreement" },
      settings: { title: "Settings" },
    },
    onSubmit: async ({ data }) => {
      console.log("Form submitted:", data)
      await new Promise((r) => setTimeout(r, 1500))
      return { success: true, message: "Step saved successfully" }
    },
  })

  return (
    <ApplicationFrame
      {...(ApplicationFrameStoryMeta.args as ComponentProps<
        typeof ApplicationFrame
      >)}
    >
      <div className="flex flex-1 items-center justify-center">
        <F0Button label="Open wizard" onClick={() => setOpen(true)} />
        <F0WizardForm
          formDefinition={definition}
          isOpen={open}
          onClose={() => setOpen(false)}
          title="Add employee"
          steps={[
            {
              title: "Basic info",
              sectionIds: ["general", "personal"],
            },
            { title: "Work details", sectionIds: ["work"] },
            {
              title: "Finalize",
              sectionIds: ["agreement", "settings"],
            },
          ]}
        />
      </div>
    </ApplicationFrame>
  )
}

export const CustomStepGrouping: Story = {
  render: () => <CustomStepGroupingStory />,
}

// =============================================================================
// Disabled fields (auto-completed step)
// =============================================================================

const disabledSchema = z.object({
  email: f0FormField(z.string().email(), {
    label: "Email",
    section: "general",
    disabled: true,
  }),
  firstName: f0FormField(z.string(), {
    label: "First name",
    section: "general",
    disabled: true,
  }),
  legalEntity: f0FormField(z.string().optional(), {
    label: "Legal entity",
    section: "work",
  }),
})

function DisabledStepAutoCompletedStory() {
  const [open, setOpen] = useState(true)

  const definition = useF0FormDefinition({
    name: "edit-employee-disabled",
    schema: disabledSchema,
    defaultValues: {
      email: "alicia.keys@factorial.co",
      firstName: "Alicia",
    },
    sections: {
      general: {
        title: "General information",
        description: "All fields are disabled — step auto-completed",
      },
      work: { title: "Work details" },
    },
    onSubmit: async ({ data }) => {
      console.log("Form submitted:", data)
      await new Promise((r) => setTimeout(r, 1500))
      return { success: true, message: "Employee updated" }
    },
  })

  return (
    <ApplicationFrame
      {...(ApplicationFrameStoryMeta.args as ComponentProps<
        typeof ApplicationFrame
      >)}
    >
      <div className="flex flex-1 items-center justify-center">
        <F0Button label="Open wizard" onClick={() => setOpen(true)} />
        <F0WizardForm
          formDefinition={definition}
          isOpen={open}
          onClose={() => setOpen(false)}
          title="Edit employee"
        />
      </div>
    </ApplicationFrame>
  )
}

export const DisabledStepAutoCompleted: Story = {
  render: () => <DisabledStepAutoCompletedStory />,
}

// =============================================================================
// Default step index
// =============================================================================

function WithDefaultStepIndexStory() {
  const [open, setOpen] = useState(true)

  const definition = useF0FormDefinition({
    name: "add-employee-default-step",
    schema: singleSchema,
    sections: {
      general: { title: "General information" },
      personal: { title: "Personal details" },
      work: { title: "Work details" },
    },
    onSubmit: async ({ data }) => {
      console.log("Form submitted:", data)
      await new Promise((r) => setTimeout(r, 1500))
      return { success: true, message: "Employee saved successfully" }
    },
  })

  return (
    <ApplicationFrame
      {...(ApplicationFrameStoryMeta.args as ComponentProps<
        typeof ApplicationFrame
      >)}
    >
      <div className="flex flex-1 items-center justify-center">
        <F0Button label="Open wizard" onClick={() => setOpen(true)} />
        <F0WizardForm
          formDefinition={definition}
          isOpen={open}
          onClose={() => setOpen(false)}
          title="Add employee"
          defaultStepIndex={1}
        />
      </div>
    </ApplicationFrame>
  )
}

export const WithDefaultStepIndex: Story = {
  render: () => <WithDefaultStepIndexStory />,
}

// =============================================================================
// Auto-close on last step submit
// =============================================================================

function AutoClosePerSectionStory() {
  const [open, setOpen] = useState(true)

  const definition = useF0FormDefinition({
    name: "auto-close-per-section",
    schema: perSectionSchema,
    sections: {
      general: { title: "General information" },
      work: { title: "Work details" },
    },
    onSubmit: async ({ sectionId, data }) => {
      console.log(`Section "${sectionId}" submitted:`, data)
      await new Promise((r) => setTimeout(r, 1500))
      return { success: true, message: `Section "${sectionId}" saved` }
    },
  })

  return (
    <ApplicationFrame
      {...(ApplicationFrameStoryMeta.args as ComponentProps<
        typeof ApplicationFrame
      >)}
    >
      <div className="flex flex-1 items-center justify-center">
        <F0Button label="Open wizard" onClick={() => setOpen(true)} />
        <F0WizardForm
          formDefinition={definition}
          isOpen={open}
          onClose={() => setOpen(false)}
          title="Add employee (auto-close)"
          autoCloseOnLastStepSubmit
        />
      </div>
    </ApplicationFrame>
  )
}

export const AutoClosePerSection: Story = {
  render: () => <AutoClosePerSectionStory />,
}

// =============================================================================
// Link after last step submit
// =============================================================================

function LinkAfterSubmitStory() {
  const [open, setOpen] = useState(true)

  const definition = useF0FormDefinition({
    name: "link-after-submit",
    schema: perSectionSchema,
    sections: {
      general: { title: "General information" },
      work: { title: "Work details" },
    },
    onSubmit: async ({ sectionId, data }) => {
      console.log(`Section "${sectionId}" submitted:`, data)
      await new Promise((r) => setTimeout(r, 1500))
      return { success: true, message: `Section "${sectionId}" saved` }
    },
  })

  return (
    <ApplicationFrame
      {...(ApplicationFrameStoryMeta.args as ComponentProps<
        typeof ApplicationFrame
      >)}
    >
      <div className="flex flex-1 items-center justify-center">
        <F0Button label="Open wizard" onClick={() => setOpen(true)} />
        <F0WizardForm
          formDefinition={definition}
          isOpen={open}
          onClose={() => setOpen(false)}
          title="Add employee (link redirect)"
          linkAfterLastStepSubmit={({ fullData }) => {
            console.log("Redirecting with data:", fullData)
            return "https://factorialhr.com"
          }}
        />
      </div>
    </ApplicationFrame>
  )
}

export const LinkAfterSubmit: Story = {
  render: () => <LinkAfterSubmitStory />,
}

// =============================================================================
// Many fields per section (varied types)
// =============================================================================

const manyFieldsSchema = z.object({
  // ── Section: Personal Information (10 fields) ──
  fullName: f0FormField(z.string().min(1), {
    label: "Full name",
    section: "personal",
    placeholder: "e.g. Alicia Keys",
  }),
  email: f0FormField(z.string().email(), {
    label: "Email address",
    section: "personal",
    placeholder: "alicia.keys@factorial.co",
  }),
  phone: f0FormField(z.string().optional(), {
    label: "Phone number",
    section: "personal",
    placeholder: "+34 600 000 000",
  }),
  birthDate: f0FormField(z.date().optional(), {
    label: "Date of birth",
    section: "personal",
  }),
  gender: f0FormField(z.enum(["male", "female", "non_binary", "other"]), {
    label: "Gender",
    section: "personal",
    fieldType: "select",
    options: [
      { value: "male", label: "Male" },
      { value: "female", label: "Female" },
      { value: "non_binary", label: "Non-binary" },
      { value: "other", label: "Other" },
    ],
  }),
  nationality: f0FormField(z.string().optional(), {
    label: "Nationality",
    section: "personal",
    fieldType: "select",
    options: [
      { value: "es", label: "Spanish" },
      { value: "fr", label: "French" },
      { value: "de", label: "German" },
      { value: "it", label: "Italian" },
      { value: "pt", label: "Portuguese" },
      { value: "us", label: "American" },
      { value: "gb", label: "British" },
    ],
  }),
  idNumber: f0FormField(z.string().optional(), {
    label: "ID / Passport number",
    section: "personal",
    placeholder: "12345678A",
  }),
  address: f0FormField(z.string().optional(), {
    label: "Address",
    section: "personal",
    fieldType: "textarea",
    placeholder: "Street, city, postal code, country",
  }),
  emergencyContact: f0FormField(z.string().optional(), {
    label: "Emergency contact name",
    section: "personal",
    placeholder: "Name and relationship",
  }),
  emergencyPhone: f0FormField(z.string().optional(), {
    label: "Emergency contact phone",
    section: "personal",
    placeholder: "+34 600 000 000",
  }),

  // ── Section: Employment Details (10 fields) ──
  legalEntity: f0FormField(z.string().min(1), {
    label: "Legal entity",
    section: "employment",
    fieldType: "select",
    options: [
      { value: "factorial_sl", label: "Factorial SL" },
      { value: "factorial_inc", label: "Factorial Inc." },
      { value: "factorial_gmbh", label: "Factorial GmbH" },
    ],
  }),
  startDate: f0FormField(z.date(), {
    label: "Start date",
    section: "employment",
  }),
  endDate: f0FormField(z.date().optional(), {
    label: "End date (if applicable)",
    section: "employment",
  }),
  contractType: f0FormField(
    z.enum(["permanent", "temporary", "internship", "freelance"]),
    {
      label: "Contract type",
      section: "employment",
      fieldType: "select",
      options: [
        { value: "permanent", label: "Permanent" },
        { value: "temporary", label: "Temporary" },
        { value: "internship", label: "Internship" },
        { value: "freelance", label: "Freelance" },
      ],
    }
  ),
  jobTitle: f0FormField(z.string().min(1), {
    label: "Job title",
    section: "employment",
    placeholder: "e.g. Senior Software Engineer",
  }),
  department: f0FormField(z.string().optional(), {
    label: "Department",
    section: "employment",
    fieldType: "select",
    options: [
      { value: "engineering", label: "Engineering" },
      { value: "design", label: "Design" },
      { value: "product", label: "Product" },
      { value: "marketing", label: "Marketing" },
      { value: "sales", label: "Sales" },
      { value: "hr", label: "Human Resources" },
      { value: "finance", label: "Finance" },
      { value: "operations", label: "Operations" },
    ],
  }),
  manager: f0FormField(z.string().optional(), {
    label: "Direct manager",
    section: "employment",
    fieldType: "select",
    options: [
      { value: "saul", label: "Saul Dominguez" },
      { value: "dani", label: "Dani Moreno" },
      { value: "jj", label: "Josep Jaume Rey" },
    ],
  }),
  salary: f0FormField(z.number().min(0), {
    label: "Annual gross salary",
    section: "employment",
    placeholder: "50000",
  }),
  workSchedule: f0FormField(
    z.enum(["full_time", "part_time_morning", "part_time_afternoon"]),
    {
      label: "Work schedule",
      section: "employment",
      fieldType: "select",
      options: [
        { value: "full_time", label: "Full time (40h/week)" },
        { value: "part_time_morning", label: "Part time — morning" },
        { value: "part_time_afternoon", label: "Part time — afternoon" },
      ],
    }
  ),
  probationPeriod: f0FormField(z.boolean().optional(), {
    label: "Probation period applies",
    section: "employment",
    fieldType: "switch",
  }),

  // ── Section: Compensation & Benefits (10 fields) ──
  bankAccount: f0FormField(z.string().optional(), {
    label: "Bank account (IBAN)",
    section: "compensation",
    placeholder: "ES91 2100 0418 4502 0005 1332",
  }),
  paymentFrequency: f0FormField(
    z.enum(["monthly", "biweekly", "weekly"]).optional(),
    {
      label: "Payment frequency",
      section: "compensation",
      fieldType: "select",
      options: [
        { value: "monthly", label: "Monthly" },
        { value: "biweekly", label: "Bi-weekly" },
        { value: "weekly", label: "Weekly" },
      ],
    }
  ),
  variableCompensation: f0FormField(z.number().optional(), {
    label: "Variable compensation (%)",
    section: "compensation",
    placeholder: "10",
  }),
  stockOptions: f0FormField(z.boolean().optional(), {
    label: "Stock options granted",
    section: "compensation",
    fieldType: "checkbox",
  }),
  healthInsurance: f0FormField(z.boolean().optional(), {
    label: "Health insurance",
    section: "compensation",
    fieldType: "switch",
  }),
  mealAllowance: f0FormField(z.boolean().optional(), {
    label: "Meal allowance",
    section: "compensation",
    fieldType: "switch",
  }),
  transportAllowance: f0FormField(z.boolean().optional(), {
    label: "Transport allowance",
    section: "compensation",
    fieldType: "switch",
  }),
  gymMembership: f0FormField(z.boolean().optional(), {
    label: "Gym membership",
    section: "compensation",
    fieldType: "checkbox",
  }),
  pensionPlan: f0FormField(z.boolean().optional(), {
    label: "Pension plan contribution",
    section: "compensation",
    fieldType: "switch",
  }),
  compensationNotes: f0FormField(z.string().optional(), {
    label: "Additional compensation notes",
    section: "compensation",
    fieldType: "textarea",
    placeholder: "Any other compensation details...",
  }),

  // ── Section: Equipment & Access (10 fields) ──
  laptop: f0FormField(
    z
      .enum(["macbook_pro", "macbook_air", "thinkpad", "dell", "none"])
      .optional(),
    {
      label: "Laptop",
      section: "equipment",
      fieldType: "select",
      options: [
        { value: "macbook_pro", label: 'MacBook Pro 16"' },
        { value: "macbook_air", label: 'MacBook Air 15"' },
        { value: "thinkpad", label: "Lenovo ThinkPad X1" },
        { value: "dell", label: "Dell XPS 15" },
        { value: "none", label: "No laptop needed" },
      ],
    }
  ),
  monitor: f0FormField(z.boolean().optional(), {
    label: "External monitor",
    section: "equipment",
    fieldType: "switch",
  }),
  keyboard: f0FormField(z.boolean().optional(), {
    label: "External keyboard",
    section: "equipment",
    fieldType: "checkbox",
  }),
  headset: f0FormField(z.boolean().optional(), {
    label: "Headset",
    section: "equipment",
    fieldType: "checkbox",
  }),
  officeLocation: f0FormField(z.string().optional(), {
    label: "Office location",
    section: "equipment",
    fieldType: "select",
    options: [
      { value: "barcelona", label: "Barcelona HQ" },
      { value: "madrid", label: "Madrid Office" },
      { value: "remote", label: "Fully Remote" },
    ],
  }),
  deskNumber: f0FormField(z.string().optional(), {
    label: "Desk number",
    section: "equipment",
    placeholder: "e.g. 3F-42",
  }),
  parkingSpot: f0FormField(z.boolean().optional(), {
    label: "Parking spot required",
    section: "equipment",
    fieldType: "switch",
  }),
  accessCard: f0FormField(z.boolean().optional(), {
    label: "Building access card",
    section: "equipment",
    fieldType: "switch",
  }),
  softwareLicenses: f0FormField(z.array(z.string()).optional(), {
    label: "Software licenses",
    section: "equipment",
    fieldType: "select",
    options: [
      { value: "figma", label: "Figma" },
      { value: "github", label: "GitHub" },
      { value: "slack", label: "Slack" },
      { value: "notion", label: "Notion" },
      { value: "jira", label: "Jira" },
      { value: "linear", label: "Linear" },
    ],
  }),
  equipmentNotes: f0FormField(z.string().optional(), {
    label: "Special equipment requests",
    section: "equipment",
    fieldType: "textarea",
    placeholder: "Any specific equipment needs or preferences...",
  }),
})

function ManyFieldsStory() {
  const [open, setOpen] = useState(true)

  const definition = useF0FormDefinition({
    name: "onboard-employee-full",
    schema: manyFieldsSchema,
    defaultValues: {
      email: "alicia.keys@factorial.co",
      fullName: "Alicia Keys",
      healthInsurance: true,
      mealAllowance: true,
      accessCard: true,
    },
    sections: {
      personal: {
        title: "Personal Information",
        description:
          "Basic personal details and emergency contact information.",
      },
      employment: {
        title: "Employment Details",
        description:
          "Contract, role, and scheduling information for the new hire.",
      },
      compensation: {
        title: "Compensation & Benefits",
        description:
          "Salary structure, payment details, and benefit selections.",
      },
      equipment: {
        title: "Equipment & Access",
        description: "Hardware, software, and office access requirements.",
      },
    },
    onSubmit: async ({ data }) => {
      console.log("Full onboarding form submitted:", data)
      await new Promise((r) => setTimeout(r, 1500))
      return { success: true, message: "Employee onboarded successfully" }
    },
  })

  return (
    <ApplicationFrame
      {...(ApplicationFrameStoryMeta.args as ComponentProps<
        typeof ApplicationFrame
      >)}
    >
      <div className="flex flex-1 items-center justify-center">
        <F0Button label="Open wizard" onClick={() => setOpen(true)} />
        <F0WizardForm
          formDefinition={definition}
          isOpen={open}
          onClose={() => setOpen(false)}
          title="Full Employee Onboarding"
        />
      </div>
    </ApplicationFrame>
  )
}

export const ManyFieldsPerSection: Story = {
  render: () => <ManyFieldsStory />,
}

// =============================================================================
// Snapshot for Chromatic
// =============================================================================

export const Snapshot: Story = {
  parameters: withSnapshot({}),
  render: () => <SingleSchemaStory />,
}
