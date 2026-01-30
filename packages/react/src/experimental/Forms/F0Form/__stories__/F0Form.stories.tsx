import type { Meta, StoryObj } from "@storybook/react-vite"
import { z } from "zod"

import { f0, F0Form, F0SectionConfig } from "../index"

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

const meta: Meta = {
  title: "Experimental/F0Form",
  component: F0Form,
  tags: ["autodocs", "experimental"],
  parameters: { a11y: { skipCi: true } },
}

export default meta
type Story = StoryObj<typeof meta>

/**
 * Basic form with simple text fields using the schema-based API.
 * Field metadata (label, placeholder, position) is embedded directly in the Zod schema.
 */
export const Default: Story = {
  render() {
    const formSchema = z.object({
      username: f0(z.string().min(2).max(20), {
        label: "Username",
        position: 1,
        placeholder: "Enter username",
        helpText: "Choose a unique username",
      }),
      email: f0(z.string().email("Please enter a valid email"), {
        label: "Email",
        position: 2,
        placeholder: "you@example.com",
        inputType: "email",
      }),
      bio: f0(z.string().max(500).optional(), {
        label: "Biography",
        position: 3,
        helpText: "Tell us about yourself",
        fieldType: "textarea",
        rows: 4,
      }),
    })

    return (
      <F0Form
        name="basic"
        schema={formSchema}
        defaultValues={{ username: "", email: "", bio: "" }}
        onSubmit={async (data) => {
          await sleep(1000)
          alert(`Form submitted: ${JSON.stringify(data, null, 2)}`)
          return { success: true }
        }}
        submitLabel="Create Account"
      />
    )
  },
}

/**
 * Form with fields arranged in rows using the `row` property.
 * Fields with the same `row` value are grouped horizontally.
 */
export const WithRows: Story = {
  render() {
    const formSchema = z.object({
      fullName: f0(z.string().min(2), {
        label: "Full Name",
        position: 1,
      }),
      email: f0(z.string().email(), {
        label: "Email",
        position: 2,
        row: "contact-row",
        inputType: "email",
      }),
      phone: f0(z.string().optional(), {
        label: "Phone",
        position: 3,
        row: "contact-row",
        placeholder: "+1 (555) 000-0000",
      }),
      city: f0(z.string(), {
        label: "City",
        position: 4,
        row: "location-row",
      }),
      country: f0(z.string(), {
        label: "Country",
        position: 5,
        row: "location-row",
        options: [
          { value: "us", label: "United States" },
          { value: "uk", label: "United Kingdom" },
          { value: "ca", label: "Canada" },
          { value: "es", label: "Spain" },
        ],
        placeholder: "Select country",
      }),
    })

    return (
      <F0Form
        name="with-rows"
        schema={formSchema}
        defaultValues={{
          fullName: "",
          email: "",
          phone: "",
          city: "",
          country: "",
        }}
        onSubmit={async (data) => {
          await sleep(1000)
          alert(`Form submitted: ${JSON.stringify(data, null, 2)}`)
          return { success: true }
        }}
      />
    )
  },
}

/**
 * Form with sections for organizing related fields.
 * Fields define which section they belong to via the `section` property.
 */
export const WithSections: Story = {
  render() {
    const formSchema = z.object({
      firstName: f0(z.string().min(1), {
        label: "First Name",
        section: "personal",
        position: 1,
      }),
      lastName: f0(z.string().min(1), {
        label: "Last Name",
        section: "personal",
        position: 2,
      }),
      age: f0(z.number().min(18).max(120), {
        label: "Age",
        section: "personal",
        position: 3,
        row: "personal-row",
      }),
      birthdate: f0(z.date().optional(), {
        label: "Birth Date",
        section: "personal",
        position: 4,
        row: "personal-row",
      }),
      newsletter: f0(z.boolean(), {
        label: "Subscribe to newsletter",
        section: "preferences",
        position: 1,
        fieldType: "checkbox",
      }),
      darkMode: f0(z.boolean(), {
        label: "Enable dark mode",
        section: "preferences",
        position: 2,
        fieldType: "switch",
      }),
    })

    const sections: Record<string, F0SectionConfig> = {
      personal: {
        title: "Personal Information",
        description: "Enter your basic personal details",
        order: 1,
      },
      preferences: {
        title: "Preferences",
        description: "Configure your account preferences",
        order: 2,
      },
    }

    return (
      <F0Form
        name="with-sections"
        schema={formSchema}
        sections={sections}
        defaultValues={{
          firstName: "",
          lastName: "",
          age: undefined,
          birthdate: undefined,
          newsletter: false,
          darkMode: false,
        }}
        onSubmit={async (data) => {
          await sleep(1000)
          alert(`Form submitted: ${JSON.stringify(data, null, 2)}`)
          return { success: true }
        }}
      />
    )
  },
}

/**
 * Form with conditional field rendering based on other field values.
 * Fields can use `renderIf` to conditionally show/hide based on other field values.
 */
export const ConditionalRendering: Story = {
  render() {
    const formSchema = z.object({
      hasAccount: f0(z.boolean(), {
        label: "I already have an account",
        position: 1,
        fieldType: "checkbox",
      }),
      accountId: f0(z.string().min(6), {
        label: "Account ID",
        position: 2,
        helpText: "Enter your existing account ID",
        renderIf: {
          fieldId: "hasAccount",
          equalsTo: true,
        },
      }),
      newUsername: f0(z.string().min(3), {
        label: "New Username",
        position: 3,
        helpText: "Choose a username for your new account",
        renderIf: {
          fieldId: "hasAccount",
          equalsTo: false,
        },
      }),
      employeeCount: f0(z.number().min(1), {
        label: "Number of Employees",
        position: 4,
      }),
      enterprisePlan: f0(z.boolean().optional(), {
        label: "Enable Enterprise Plan",
        position: 5,
        helpText: "Available for companies with 50+ employees",
        fieldType: "checkbox",
        renderIf: {
          fieldId: "employeeCount",
          greaterThanOrEqual: 50,
        },
      }),
    })

    return (
      <F0Form
        name="conditional-rendering"
        schema={formSchema}
        defaultValues={{
          hasAccount: false,
          accountId: "",
          newUsername: "",
          employeeCount: 1,
          enterprisePlan: false,
        }}
        onSubmit={async (data) => {
          await sleep(1000)
          alert(`Form submitted: ${JSON.stringify(data, null, 2)}`)
          return { success: true }
        }}
      />
    )
  },
}

/**
 * Form demonstrating all available field types
 */
export const AllFieldTypes: Story = {
  render() {
    const formSchema = z.object({
      textField: f0(z.string(), {
        label: "Text Field",
        position: 1,
        placeholder: "Regular text input",
      }),
      emailField: f0(z.string().email(), {
        label: "Email Field",
        position: 2,
        placeholder: "email@example.com",
        inputType: "email",
      }),
      passwordField: f0(z.string().min(8), {
        label: "Password Field",
        position: 3,
        placeholder: "Enter password",
        inputType: "password",
      }),
      numberField: f0(z.number().min(0).max(100), {
        label: "Number Field",
        position: 4,
        fieldType: "number",
        step: 1,
      }),
      textareaField: f0(z.string().max(500), {
        label: "Textarea Field",
        position: 5,
        fieldType: "textarea",
        rows: 3,
        placeholder: "Enter long text...",
      }),
      selectField: f0(z.string(), {
        label: "Select Field",
        position: 6,
        options: [
          { value: "option1", label: "Option 1" },
          { value: "option2", label: "Option 2" },
          { value: "option3", label: "Option 3" },
        ],
        placeholder: "Select an option",
        showSearchBox: true,
      }),
      multiSelectField: f0(z.array(z.string()), {
        label: "Multi-Select Field",
        position: 7,
        multiple: true,
        options: [
          { value: "a", label: "Option A" },
          { value: "b", label: "Option B" },
          { value: "c", label: "Option C" },
        ],
        placeholder: "Select multiple options",
      }),
      checkboxField: f0(z.boolean(), {
        label: "Checkbox Field",
        position: 8,
        fieldType: "checkbox",
        helpText: "Check this box to agree",
      }),
      switchField: f0(z.boolean(), {
        label: "Switch Field",
        position: 9,
        fieldType: "switch",
        helpText: "Toggle this switch",
      }),
      dateField: f0(z.string().optional(), {
        label: "Date Field",
        position: 10,
        fieldType: "date",
        placeholder: "Select a date",
        granularities: ["day"],
      }),
      richTextField: f0(
        z.object({
          value: z.string().nullable(),
          mentionIds: z.array(z.number()).optional(),
        }),
        {
          label: "Rich Text Field",
          position: 11,
          fieldType: "richtext",
          placeholder: "Write something with formatting...",
          maxCharacters: 1000,
          height: "sm",
          plainHtmlMode: true,
        }
      ),
    })

    return (
      <F0Form
        name="all-field-types"
        schema={formSchema}
        defaultValues={{
          textField: "",
          emailField: "",
          passwordField: "",
          numberField: 0,
          textareaField: "",
          selectField: "",
          multiSelectField: [],
          checkboxField: false,
          switchField: false,
          dateField: undefined,
          richTextField: { value: null },
        }}
        onSubmit={async (data) => {
          await sleep(1000)
          alert(`Form submitted: ${JSON.stringify(data, null, 2)}`)
          return { success: true }
        }}
      />
    )
  },
}

/**
 * Demonstrates custom field type for integrating external components
 */
export const CustomField: Story = {
  render() {
    // Simulated external component (like EmployeeSelectorV2)
    const ExternalSelector = ({
      label,
      value,
      onChange,
      error,
      disabled,
      options,
    }: {
      label: string
      value: string | undefined
      onChange: (value: string | undefined) => void
      error?: string
      disabled?: boolean
      options: { id: string; name: string }[]
    }) => (
      <div className="flex flex-col gap-1">
        <label className="text-sm font-medium text-f1-foreground-secondary">
          {label}
        </label>
        <select
          value={value ?? ""}
          onChange={(e) => onChange(e.target.value || undefined)}
          disabled={disabled}
          className={`rounded-lg border px-3 py-2 text-sm ${
            error ? "border-f1-border-critical" : "border-f1-border-secondary"
          } ${disabled ? "opacity-50" : ""}`}
        >
          <option value="">Select an option...</option>
          {options.map((opt) => (
            <option key={opt.id} value={opt.id}>
              {opt.name}
            </option>
          ))}
        </select>
        {error && (
          <span className="text-sm text-f1-foreground-critical">{error}</span>
        )}
      </div>
    )

    const employees = [
      { id: "1", name: "John Doe" },
      { id: "2", name: "Jane Smith" },
      { id: "3", name: "Bob Johnson" },
    ]

    const formSchema = z.object({
      title: f0(z.string().min(1, "Title is required"), {
        label: "Task Title",
        position: 1,
        placeholder: "Enter task title",
      }),
      assignee: f0(z.string().min(1, "Please select an assignee"), {
        label: "Assignee",
        position: 2,
        fieldType: "custom",
        render: ({ label, value, onChange, error, disabled }) => (
          <ExternalSelector
            label={label}
            value={value as string | undefined}
            onChange={onChange}
            error={error}
            disabled={disabled}
            options={employees}
          />
        ),
      }),
      reviewer: f0(z.string().optional(), {
        label: "Reviewer (Optional)",
        position: 3,
        fieldType: "custom",
        render: ({ label, value, onChange, error, disabled }) => (
          <ExternalSelector
            label={label}
            value={value as string | undefined}
            onChange={onChange}
            error={error}
            disabled={disabled}
            options={employees}
          />
        ),
      }),
      description: f0(z.string().optional(), {
        label: "Description",
        position: 4,
        fieldType: "textarea",
        rows: 3,
      }),
    })

    return (
      <F0Form
        name="custom-field-example"
        schema={formSchema}
        defaultValues={{
          title: "",
          assignee: "",
          reviewer: "",
          description: "",
        }}
        onSubmit={async (data) => {
          await sleep(1000)
          alert(`Task created: ${JSON.stringify(data, null, 2)}`)
          return { success: true }
        }}
        submitLabel="Create Task"
      />
    )
  },
}

/**
 * Form with server-side validation errors
 */
export const ServerValidation: Story = {
  render() {
    const formSchema = z.object({
      username: f0(z.string().min(3), {
        label: "Username",
        position: 1,
        helpText: "Try 'admin' to see server validation error",
      }),
      email: f0(z.string().email(), {
        label: "Email",
        position: 2,
        inputType: "email",
        helpText: "Try 'taken@example.com' to see server validation error",
      }),
    })

    return (
      <F0Form
        name="server-validation"
        schema={formSchema}
        defaultValues={{ username: "", email: "" }}
        onSubmit={async (data) => {
          await sleep(1000)

          const errors: Record<string, string> = {}

          if (data.username === "admin") {
            errors.username = "This username is reserved"
          }

          if (data.email === "taken@example.com") {
            errors.email = "This email is already registered"
          }

          if (Object.keys(errors).length > 0) {
            return {
              success: false,
              rootMessage: "Please fix the errors below",
              errors,
            }
          }

          alert(`Account created successfully!`)
          return { success: true }
        }}
      />
    )
  },
}

/**
 * Complete form matching the visual design example.
 * Demonstrates sections, rows, and switch grouping.
 */
export const VisualDesignExample: Story = {
  render() {
    const formSchema = z.object({
      // Basic Information section
      title: f0(z.string().min(1), {
        label: "Title",
        section: "basic-info",
        position: 1,
        placeholder: "Workplace climate survey",
      }),
      description: f0(z.string().optional(), {
        label: "Description (Optional)",
        section: "basic-info",
        position: 2,
        fieldType: "textarea",
        rows: 3,
        placeholder:
          "This short workplace climate survey contains just 12 simple questions...",
      }),
      // Participants section
      participants: f0(z.string(), {
        label: "Select participants",
        section: "participants",
        position: 1,
        options: [
          { value: "all", label: "All employees" },
          { value: "department", label: "By department" },
          { value: "team", label: "By team" },
        ],
        placeholder: "Select participants",
      }),
      // Schedule section with row grouping
      publishOn: f0(z.string(), {
        label: "Publish on",
        section: "schedule",
        position: 1,
        row: "dates-row",
        fieldType: "date",
        placeholder: "dd/mm/yyyy",
      }),
      endsAt: f0(z.string(), {
        label: "Ends at",
        section: "schedule",
        position: 2,
        row: "dates-row",
        fieldType: "date",
        placeholder: "dd/mm/yyyy",
      }),
      recurrence: f0(z.string(), {
        label: "Recurrence",
        section: "schedule",
        position: 3,
        options: [
          { value: "none", label: "Does not repeat" },
          { value: "weekly", label: "Weekly" },
          { value: "monthly", label: "Monthly" },
          { value: "quarterly", label: "Quarterly" },
        ],
        placeholder: "Does not repeat",
      }),
      // Visibility & Privacy section with switches
      managerVisibility: f0(z.boolean(), {
        label: "Add visibility permissions to managers and team leads",
        section: "visibility",
        position: 1,
        fieldType: "switch",
        helpText:
          "Grant access to managers and team leads. Even if they are not survey editors, they will be able to view the results of their own teams once responses are available",
      }),
      anonymousAnswers: f0(z.boolean(), {
        label: "Anonymous answers",
        section: "visibility",
        position: 2,
        fieldType: "switch",
      }),
      // Editors section
      editors: f0(z.string(), {
        label: "Select editors",
        section: "editors",
        position: 1,
        options: [
          { value: "none", label: "None" },
          { value: "hr", label: "HR Team" },
          { value: "managers", label: "Managers" },
        ],
        placeholder: "None",
      }),
    })

    const sections: Record<string, F0SectionConfig> = {
      "basic-info": { title: "Basic Information", order: 1 },
      participants: { title: "Participants", order: 2 },
      schedule: { title: "Schedule", order: 3 },
      visibility: { title: "Visibility & Privacy", order: 4 },
      editors: { title: "Editors", order: 5 },
    }

    return (
      <div className="max-w-lg">
        <F0Form
          name="visual-design-example"
          schema={formSchema}
          sections={sections}
          defaultValues={{
            title: "Workplace climate survey",
            description:
              "This short workplace climate survey contains just 12 simple questions. It is designed to help measure employees' perceptions, experiences, and overall satisfaction within the workplace.",
            participants: "",
            publishOn: "",
            endsAt: "",
            recurrence: "none",
            managerVisibility: false,
            anonymousAnswers: false,
            editors: "none",
          }}
          onSubmit={async (data) => {
            await sleep(1000)
            alert(`Form submitted: ${JSON.stringify(data, null, 2)}`)
            return { success: true }
          }}
          submitLabel="Create Survey"
        />
      </div>
    )
  },
}
