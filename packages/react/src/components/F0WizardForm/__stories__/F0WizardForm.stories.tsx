import type { Meta, StoryObj } from "@storybook/react-vite"

import { ComponentProps, useState } from "react"
import { z } from "zod"

import { F0Button } from "@/components/F0Button"
import { f0FormField } from "@/components/F0Form/f0Schema"
import { ApplicationFrame } from "@/examples/ApplicationFrame"
import ApplicationFrameStoryMeta from "@/examples/ApplicationFrame/index.stories"

import { F0WizardForm, useF0FormDefinition } from "../index"

const meta: Meta<typeof F0WizardForm> = {
  title: "Experimental/F0WizardForm",
  component: F0WizardForm,
  parameters: {
    layout: "fullscreen",
    docs: {
      story: { inline: false, height: "720px" },
    },
  },
  tags: ["autodocs", "experimental"],
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
      return { success: true }
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
          width="lg"
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
      return { success: true }
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
          width="lg"
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
  legalEntity: f0FormField(z.string().optional(), {
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
      return { success: true }
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
          width="lg"
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
      return { success: true }
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
          width="lg"
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
      return { success: true }
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
          width="lg"
          defaultStepIndex={1}
        />
      </div>
    </ApplicationFrame>
  )
}

export const WithDefaultStepIndex: Story = {
  render: () => <WithDefaultStepIndexStory />,
}
