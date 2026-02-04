import type { Meta, StoryObj } from "@storybook/react-vite"
import { z } from "zod"

import { f0FormField, F0Form, F0SectionConfig } from "../index"

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
 * Field metadata (label, placeholder) is embedded directly in the Zod schema.
 * Position is derived from declaration order - no need to specify it.
 */
export const Default: Story = {
  render() {
    const formSchema = z.object({
      username: f0FormField(z.string().min(2).max(20), {
        label: "Username",
        placeholder: "Enter username",
        helpText: "Choose a unique username",
      }),
      email: f0FormField(z.string().email("Please enter a valid email"), {
        label: "Email",
        placeholder: "you@example.com",
      }),
      bio: f0FormField(z.string().max(500).optional(), {
        label: "Biography",
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
        submitConfig={{ label: "Create Account" }}
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
      fullName: f0FormField(z.string().min(2), {
        label: "Full Name",
      }),
      email: f0FormField(z.string().email(), {
        label: "Email",
        row: "contact-row",
      }),
      phone: f0FormField(z.string().optional(), {
        label: "Phone",
        row: "contact-row",
        placeholder: "+1 (555) 000-0000",
      }),
      city: f0FormField(z.string(), {
        label: "City",
        row: "location-row",
      }),
      country: f0FormField(z.string(), {
        label: "Country",
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
      firstName: f0FormField(z.string().min(1), {
        label: "First Name",
        section: "personal",
      }),
      lastName: f0FormField(z.string().min(1), {
        label: "Last Name",
        section: "personal",
      }),
      age: f0FormField(z.number().min(18).max(120), {
        label: "Age",
        section: "personal",
        row: "personal-row",
      }),
      birthdate: f0FormField(z.date().optional(), {
        label: "Birth Date",
        section: "personal",
        row: "personal-row",
      }),
      newsletter: f0FormField(z.boolean(), {
        label: "Subscribe to newsletter",
        section: "preferences",
        fieldType: "checkbox",
      }),
      darkMode: f0FormField(z.boolean(), {
        label: "Enable dark mode",
        section: "preferences",
        fieldType: "switch",
      }),
    })

    const sections: Record<string, F0SectionConfig> = {
      personal: {
        title: "Personal Information",
        description: "Enter your basic personal details",
      },
      preferences: {
        title: "Preferences",
        description: "Configure your account preferences",
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
      hasAccount: f0FormField(z.boolean(), {
        label: "I already have an account",
        fieldType: "checkbox",
      }),
      accountId: f0FormField(z.string().min(6), {
        label: "Account ID",
        helpText: "Enter your existing account ID",
        renderIf: {
          fieldId: "hasAccount",
          equalsTo: true,
        },
      }),
      newUsername: f0FormField(z.string().min(3), {
        label: "New Username",
        helpText: "Choose a username for your new account",
        renderIf: {
          fieldId: "hasAccount",
          equalsTo: false,
        },
      }),
      employeeCount: f0FormField(z.number().min(1), {
        label: "Number of Employees",
      }),
      enterprisePlan: f0FormField(z.boolean().optional(), {
        label: "Enable Enterprise Plan",
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
      textField: f0FormField(z.string().min(1), {
        label: "Text Field",
        placeholder: "Regular text input",
      }),
      emailField: f0FormField(z.string().email(), {
        label: "Email Field",
      }),
      passwordField: f0FormField(z.string().min(8), {
        label: "Password Field",
        placeholder: "Enter password",
        inputType: "password",
      }),
      numberField: f0FormField(z.number().min(0).max(100), {
        label: "Number Field",
        step: 1,
      }),
      textareaField: f0FormField(z.string().max(500), {
        label: "Textarea Field",
        fieldType: "textarea",
        rows: 3,
        placeholder: "Enter long text...",
      }),
      selectField: f0FormField(z.enum(["option1", "option2", "option3"]), {
        label: "Select Field",
        options: [
          { value: "option1", label: "Option 1" },
          { value: "option2", label: "Option 2" },
          { value: "option3", label: "Option 3" },
        ],
        placeholder: "Select an option",
        showSearchBox: true,
      }),
      multiSelectField: f0FormField(z.array(z.enum(["a", "b", "c"])).min(1), {
        label: "Multi-Select Field",
        multiple: true,
        options: [
          { value: "a", label: "Option A" },
          { value: "b", label: "Option B" },
          { value: "c", label: "Option C" },
        ],
        placeholder: "Select multiple options",
      }),
      urlField: f0FormField(z.string().url(), {
        label: "URL Field",
      }),
      checkboxField: f0FormField(z.boolean(), {
        label: "Checkbox Field",
        fieldType: "checkbox",
        helpText: "Check this box to agree",
      }),
      requiredCheckboxField: f0FormField(z.literal(true), {
        label: "Required Checkbox Field",
        fieldType: "checkbox",
        helpText: "Check this box to agree",
      }),
      switchField: f0FormField(z.boolean(), {
        label: "Switch Field",
        fieldType: "switch",
        helpText: "Toggle this switch",
      }),
      requiredSwitchField: f0FormField(z.literal(true), {
        label: "Required Switch Field",
        fieldType: "switch",
        helpText: "Toggle this switch",
      }),
      dateField: f0FormField(z.date(), {
        label: "Date Field",
        placeholder: "Select a date",
        granularities: ["day"],
      }),
      dateRangeField: f0FormField(
        z
          .object({
            from: z.date(),
            to: z.date(),
          })
          .optional(),
        {
          label: "Date Range Field",
          placeholder: "Select date range",
          fieldType: "daterange",
          fromLabel: "Start",
          toLabel: "End",
        }
      ),
      richTextField: f0FormField(
        z.object({
          value: z.string().nullable(),
          mentionIds: z.array(z.number()).optional(),
        }),
        {
          label: "Rich Text Field",
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
          selectField: "option1",
          multiSelectField: [],
          checkboxField: false,
          switchField: false,
          dateField: undefined,
          dateRangeField: undefined,
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
      title: f0FormField(z.string().min(1, "Title is required"), {
        label: "Task Title",
        placeholder: "Enter task title",
      }),
      assignee: f0FormField(z.string().min(1, "Please select an assignee"), {
        label: "Assignee",
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
      reviewer: f0FormField(z.string().optional(), {
        label: "Reviewer (Optional)",
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
      description: f0FormField(z.string().optional(), {
        label: "Description",
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
        submitConfig={{ label: "Create Task", icon: null }}
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
      username: f0FormField(z.string().min(3), {
        label: "Username",
        helpText: "Try 'admin' to see server validation error",
      }),
      email: f0FormField(z.string().email(), {
        label: "Email",
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
 * Position is derived from declaration order within each section.
 */
export const VisualDesignExample: Story = {
  render() {
    const formSchema = z.object({
      // Basic Information section
      title: f0FormField(z.string().min(1), {
        label: "Title",
        section: "basic-info",
        placeholder: "Workplace climate survey",
      }),
      description: f0FormField(z.string().optional(), {
        label: "Description (Optional)",
        section: "basic-info",
        fieldType: "textarea",
        rows: 3,
        placeholder:
          "This short workplace climate survey contains just 12 simple questions...",
      }),
      // Participants section
      participants: f0FormField(z.string(), {
        label: "Select participants",
        section: "participants",
        options: [
          { value: "all", label: "All employees" },
          { value: "department", label: "By department" },
          { value: "team", label: "By team" },
        ],
        placeholder: "Select participants",
      }),
      // Schedule section with row grouping
      publishOn: f0FormField(z.date().optional(), {
        label: "Publish on",
        section: "schedule",
        row: "dates-row",
      }),
      endsAt: f0FormField(z.date().optional(), {
        label: "Ends at",
        section: "schedule",
        row: "dates-row",
      }),
      recurrence: f0FormField(z.string(), {
        label: "Recurrence",
        section: "schedule",
        options: [
          { value: "none", label: "Does not repeat" },
          { value: "weekly", label: "Weekly" },
          { value: "monthly", label: "Monthly" },
          { value: "quarterly", label: "Quarterly" },
        ],
        placeholder: "Does not repeat",
      }),
      // Visibility & Privacy section with switches
      managerVisibility: f0FormField(z.boolean(), {
        label: "Add visibility permissions to managers and team leads",
        section: "visibility",
        fieldType: "switch",
        helpText:
          "Grant access to managers and team leads. Even if they are not survey editors, they will be able to view the results of their own teams once responses are available",
      }),
      anonymousAnswers: f0FormField(z.boolean(), {
        label: "Anonymous answers",
        section: "visibility",
        fieldType: "switch",
      }),
      // Editors section
      editors: f0FormField(z.string(), {
        label: "Select editors",
        section: "editors",
        options: [
          { value: "none", label: "None" },
          { value: "hr", label: "HR Team" },
          { value: "managers", label: "Managers" },
        ],
        placeholder: "None",
      }),
    })

    const sections: Record<string, F0SectionConfig> = {
      "basic-info": { title: "Basic Information" },
      participants: { title: "Participants" },
      schedule: { title: "Schedule" },
      visibility: { title: "Visibility & Privacy" },
      editors: { title: "Editors" },
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
            publishOn: undefined,
            endsAt: undefined,
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
          submitConfig={{ label: "Create Survey", icon: null }}
        />
      </div>
    )
  },
}

/**
 * Form with action bar submit type.
 * The action bar appears at the bottom of the screen when the form has changes.
 */
export const WithActionBar: Story = {
  render() {
    const formSchema = z.object({
      firstName: f0FormField(z.string().min(1), {
        label: "First Name",
        placeholder: "Enter first name",
      }),
      lastName: f0FormField(z.string().min(1), {
        label: "Last Name",
        placeholder: "Enter last name",
      }),
      email: f0FormField(z.string().email(), {
        label: "Email",
        placeholder: "you@example.com",
      }),
      notifications: f0FormField(z.boolean(), {
        label: "Enable notifications",
        fieldType: "switch",
        helpText: "Receive email notifications about updates",
      }),
    })

    return (
      <div className="max-w-lg">
        <F0Form
          name="action-bar-example"
          schema={formSchema}
          submitConfig={{
            type: "action-bar",
            label: "Save Changes",
          }}
          defaultValues={{
            firstName: "John",
            lastName: "Doe",
            email: "john@example.com",
            notifications: true,
          }}
          onSubmit={async (data) => {
            await sleep(1000)
            alert(`Settings saved: ${JSON.stringify(data, null, 2)}`)
            return { success: true }
          }}
        />
        <p className="mt-4 text-sm text-f1-foreground-secondary">
          Modify any field to see the action bar appear
        </p>
      </div>
    )
  },
}

/**
 * Form with action bar and discard button.
 * When discardable is true, a Discard button appears in the action bar.
 * Labels default to i18n values but can be customized.
 */
export const WithActionBarAndDiscard: Story = {
  render() {
    const formSchema = z.object({
      companyName: f0FormField(z.string().min(1), {
        label: "Company Name",
        placeholder: "Enter company name",
      }),
      industry: f0FormField(z.string(), {
        label: "Industry",
        options: [
          { value: "tech", label: "Technology" },
          { value: "finance", label: "Finance" },
          { value: "healthcare", label: "Healthcare" },
          { value: "retail", label: "Retail" },
        ],
        placeholder: "Select industry",
      }),
      employeeCount: f0FormField(z.number().min(1).max(100000), {
        label: "Number of Employees",
      }),
      publicCompany: f0FormField(z.boolean(), {
        label: "Publicly traded company",
        fieldType: "checkbox",
      }),
    })

    return (
      <div className="max-w-lg">
        <F0Form
          name="action-bar-discard-example"
          schema={formSchema}
          submitConfig={{
            type: "action-bar",
            label: "Save",
            discardable: true,
            discardConfig: { label: "Discard Changes" },
          }}
          defaultValues={{
            companyName: "Acme Corp",
            industry: "tech",
            employeeCount: 500,
            publicCompany: false,
          }}
          onSubmit={async (data) => {
            await sleep(1000)
            alert(`Company updated: ${JSON.stringify(data, null, 2)}`)
            return { success: true }
          }}
        />
        <p className="mt-4 text-sm text-f1-foreground-secondary">
          Modify any field to see the action bar with Save and Discard buttons
        </p>
      </div>
    )
  },
}

/**
 * Demonstrates the different error trigger modes:
 * - **on-blur** (default): Errors appear when the user leaves a field
 * - **on-change**: Errors appear as the user types (real-time validation)
 * - **on-submit**: Errors only appear after attempting to submit
 */
export const ErrorTriggerModes: Story = {
  render() {
    const formSchema = z.object({
      name: f0FormField(
        z.string().min(2, "Name must be at least 2 characters"),
        {
          label: "Name",
          placeholder: "Enter your name",
        }
      ),
      email: f0FormField(z.string().email(), {
        label: "Email",
      }),
    })

    const defaultValues = { name: "", email: "" }

    return (
      <div className="grid max-w-4xl grid-cols-3 gap-8">
        <div>
          <h3 className="mb-4 text-lg font-semibold">On Blur (default)</h3>
          <p className="mb-4 text-sm text-f1-foreground-secondary">
            Errors appear when you leave a field
          </p>
          <F0Form
            name="error-mode-blur"
            schema={formSchema}
            defaultValues={defaultValues}
            errorTriggerMode="on-blur"
            onSubmit={async () => {
              await sleep(500)
              return { success: true }
            }}
          />
        </div>

        <div>
          <h3 className="mb-4 text-lg font-semibold">On Change</h3>
          <p className="mb-4 text-sm text-f1-foreground-secondary">
            Errors appear as you type
          </p>
          <F0Form
            name="error-mode-change"
            schema={formSchema}
            defaultValues={defaultValues}
            errorTriggerMode="on-change"
            onSubmit={async () => {
              await sleep(500)
              return { success: true }
            }}
          />
        </div>

        <div>
          <h3 className="mb-4 text-lg font-semibold">On Submit</h3>
          <p className="mb-4 text-sm text-f1-foreground-secondary">
            Errors only appear after clicking submit
          </p>
          <F0Form
            name="error-mode-submit"
            schema={formSchema}
            defaultValues={defaultValues}
            errorTriggerMode="on-submit"
            onSubmit={async () => {
              await sleep(500)
              return { success: true }
            }}
          />
        </div>
      </div>
    )
  },
}
