import type { Meta, StoryObj } from "@storybook/react-vite"

import { useEffect } from "react"
import { z } from "zod"

import {
  f0FormField,
  F0Form,
  F0AiFormRegistryProvider,
  useF0Form,
} from "@/components/F0Form"
import { useF0FormDefinition } from "@/components/F0WizardForm"

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
  firstName: f0FormField(z.string().min(1), {
    label: "First Name",
    placeholder: "e.g. Jane",
  }),
  lastName: f0FormField(z.string().min(1), {
    label: "Last Name",
    placeholder: "e.g. Doe",
  }),
  email: f0FormField(z.string().email(), {
    label: "Email",
    placeholder: "jane@factorial.co",
  }),
  role: f0FormField(z.enum(["engineer", "designer", "pm", "other"]), {
    label: "Role",
    options: [
      { value: "engineer", label: "Engineer" },
      { value: "designer", label: "Designer" },
      { value: "pm", label: "Product Manager" },
      { value: "other", label: "Other" },
    ],
  }),
  startDate: f0FormField(z.date(), {
    label: "Start Date",
    granularities: ["day"],
  }),
  salary: f0FormField(z.number().min(0), {
    label: "Annual Salary",
    placeholder: "e.g. 50000",
  }),
  notes: f0FormField(z.string().optional(), {
    label: "Notes",
    fieldType: "textarea",
    placeholder: "Any additional notes...",
    rows: 3,
  }),
  remote: f0FormField(z.boolean(), {
    label: "Remote Worker",
    fieldType: "switch",
  }),
})

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
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      role: undefined,
      startDate: undefined,
      salary: undefined,
      notes: "",
      remote: false,
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
