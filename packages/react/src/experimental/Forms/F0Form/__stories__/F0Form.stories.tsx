import type { Meta, StoryObj } from "@storybook/react-vite"
import { z } from "zod"

import { F0Form, FormDefinitionItem, useFormDefinitionSchema } from "../index"

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
 * Basic form with simple text fields
 */
export const Default: Story = {
  render() {
    const definition: FormDefinitionItem[] = [
      {
        type: "field",
        field: {
          id: "username",
          type: "text",
          label: "Username",
          validation: z.string().min(2).max(20),
          helpText: "Choose a unique username",
          placeholder: "Enter username",
        },
      },
      {
        type: "field",
        field: {
          id: "email",
          type: "text",
          inputType: "email",
          label: "Email",
          validation: z.string().email("Please enter a valid email"),
          placeholder: "you@example.com",
        },
      },
      {
        type: "field",
        field: {
          id: "bio",
          type: "textarea",
          label: "Biography",
          validation: z.string().max(500).optional(),
          helpText: "Tell us about yourself",
          rows: 4,
        },
      },
    ]

    return (
      <F0Form
        name="basic"
        definition={definition}
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
 * Form with fields arranged in rows
 */
export const WithRows: Story = {
  render() {
    const definition: FormDefinitionItem[] = [
      {
        type: "field",
        field: {
          id: "fullName",
          type: "text",
          label: "Full Name",
          validation: z.string().min(2),
        },
      },
      {
        type: "row",
        fields: [
          {
            id: "email",
            type: "text",
            inputType: "email",
            label: "Email",
            validation: z.string().email(),
          },
          {
            id: "phone",
            type: "text",
            inputType: "tel",
            label: "Phone",
            validation: z.string().optional(),
            placeholder: "+1 (555) 000-0000",
          },
        ],
      },
      {
        type: "row",
        fields: [
          {
            id: "city",
            type: "text",
            label: "City",
            validation: z.string(),
          },
          {
            id: "country",
            type: "select",
            label: "Country",
            validation: z.string(),
            options: [
              { value: "us", label: "United States" },
              { value: "uk", label: "United Kingdom" },
              { value: "ca", label: "Canada" },
              { value: "es", label: "Spain" },
            ],
            placeholder: "Select country",
          },
        ],
      },
    ]

    return (
      <F0Form
        name="with-rows"
        definition={definition}
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
 * Form with sections for organizing related fields
 */
export const WithSections: Story = {
  render() {
    const definition: FormDefinitionItem[] = [
      {
        type: "section",
        id: "personal",
        section: {
          title: "Personal Information",
          description: "Enter your basic personal details",
          fields: [
            {
              type: "field",
              field: {
                id: "firstName",
                type: "text",
                label: "First Name",
                validation: z.string().min(1),
              },
            },
            {
              type: "field",
              field: {
                id: "lastName",
                type: "text",
                label: "Last Name",
                validation: z.string().min(1),
              },
            },
            {
              type: "row",
              fields: [
                {
                  id: "age",
                  type: "number",
                  label: "Age",
                  validation: z.number().min(18).max(120),
                  min: 0,
                  max: 120,
                },
                {
                  id: "birthdate",
                  type: "date",
                  label: "Birth Date",
                  placeholder: "YYYY-MM-DD",
                },
              ],
            },
          ],
        },
      },
      {
        type: "section",
        id: "preferences",
        section: {
          title: "Preferences",
          description: "Configure your account preferences",
          fields: [
            {
              type: "field",
              field: {
                id: "newsletter",
                type: "checkbox",
                label: "Subscribe to newsletter",
                validation: z.boolean(),
              },
            },
            {
              type: "field",
              field: {
                id: "darkMode",
                type: "switch",
                label: "Enable dark mode",
                validation: z.boolean(),
              },
            },
          ],
        },
      },
    ]

    return (
      <F0Form
        name="with-sections"
        definition={definition}
        defaultValues={{
          firstName: "",
          lastName: "",
          age: undefined,
          birthdate: "",
          newsletter: false,
          darkMode: false,
          theme: "blue",
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
 * Form with conditional field rendering based on other field values
 */
export const ConditionalRendering: Story = {
  render() {
    const definition: FormDefinitionItem[] = [
      {
        type: "field",
        field: {
          id: "hasAccount",
          type: "checkbox",
          label: "I already have an account",
          validation: z.boolean(),
        },
      },
      {
        type: "field",
        field: {
          id: "accountId",
          type: "text",
          label: "Account ID",
          validation: z.string().min(6),
          helpText: "Enter your existing account ID",
          renderIf: {
            fieldId: "hasAccount",
            equalsTo: true,
          },
        },
      },
      {
        type: "field",
        field: {
          id: "newUsername",
          type: "text",
          label: "New Username",
          validation: z.string().min(3),
          helpText: "Choose a username for your new account",
          renderIf: {
            fieldId: "hasAccount",
            equalsTo: false,
          },
        },
      },
      {
        type: "field",
        field: {
          id: "employeeCount",
          type: "number",
          label: "Number of Employees",
          validation: z.number().min(1),
          min: 1,
        },
      },
      {
        type: "field",
        field: {
          id: "enterprisePlan",
          type: "checkbox",
          label: "Enable Enterprise Plan",
          helpText: "Available for companies with 50+ employees",
          renderIf: {
            fieldId: "employeeCount",
            greaterThanOrEqual: 50,
          },
        },
      },
      {
        type: "section",
        id: "enterpriseSection",
        section: {
          title: "Enterprise Features",
          description: "Configure enterprise-level features",
          renderIf: (values) =>
            values.enterprisePlan === true &&
            (values.employeeCount as number) >= 50,
          fields: [
            {
              type: "field",
              field: {
                id: "sso",
                type: "switch",
                label: "Single Sign-On (SSO)",
              },
            },
            {
              type: "field",
              field: {
                id: "auditLog",
                type: "switch",
                label: "Audit Log",
              },
            },
          ],
        },
      },
    ]

    return (
      <F0Form
        name="conditional-rendering"
        definition={definition}
        defaultValues={{
          hasAccount: false,
          accountId: "",
          newUsername: "",
          employeeCount: 1,
          enterprisePlan: false,
          sso: false,
          auditLog: false,
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
    const definition: FormDefinitionItem[] = [
      {
        type: "field",
        field: {
          id: "textField",
          type: "text",
          label: "Text Field",
          validation: z.string(),
          placeholder: "Regular text input",
        },
      },
      {
        type: "field",
        field: {
          id: "emailField",
          type: "text",
          inputType: "email",
          label: "Email Field",
          validation: z.string().email(),
          placeholder: "email@example.com",
        },
      },
      {
        type: "field",
        field: {
          id: "passwordField",
          type: "text",
          inputType: "password",
          label: "Password Field",
          validation: z.string().min(8),
          placeholder: "Enter password",
        },
      },
      {
        type: "field",
        field: {
          id: "numberField",
          type: "number",
          label: "Number Field",
          validation: z.number().min(0).max(100),
          min: 0,
          max: 100,
          step: 1,
        },
      },
      {
        type: "field",
        field: {
          id: "textareaField",
          type: "textarea",
          label: "Textarea Field",
          validation: z.string().max(500),
          rows: 3,
          maxLength: 500,
          placeholder: "Enter long text...",
        },
      },
      {
        type: "field",
        field: {
          id: "selectField",
          type: "select",
          label: "Select Field",
          validation: z.string(),
          options: [
            { value: "option1", label: "Option 1" },
            { value: "option2", label: "Option 2" },
            { value: "option3", label: "Option 3" },
          ],
          placeholder: "Select an option",
          showSearchBox: true,
        },
      },
      {
        type: "field",
        field: {
          id: "multiSelectField",
          type: "select",
          label: "Multi-Select Field",
          validation: z.array(z.string()),
          multiple: true,
          options: [
            { value: "a", label: "Option A" },
            { value: "b", label: "Option B" },
            { value: "c", label: "Option C" },
          ],
          placeholder: "Select multiple options",
        },
      },
      {
        type: "field",
        field: {
          id: "checkboxField",
          type: "checkbox",
          label: "Checkbox Field",
          validation: z.boolean(),
          helpText: "Check this box to agree",
        },
      },
      {
        type: "field",
        field: {
          id: "switchField",
          type: "switch",
          label: "Switch Field",
          validation: z.boolean(),
          helpText: "Toggle this switch",
        },
      },
      {
        type: "field",
        field: {
          id: "dateField",
          type: "date",
          label: "Date Field",
          placeholder: "Select a date",
          granularities: ["day"],
        },
      },
      {
        type: "field",
        field: {
          id: "richTextField",
          type: "richtext",
          label: "Rich Text Field",
          placeholder: "Write something with formatting...",
          maxCharacters: 1000,
          height: "sm",
          plainHtmlMode: true,
        },
      },
    ]

    return (
      <F0Form
        name="all-field-types"
        definition={definition}
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
 * Demonstrates using useFormDefinitionSchema hook to get the generated schema
 */
export const SchemaExtraction: Story = {
  render() {
    const definition: FormDefinitionItem[] = [
      {
        type: "field",
        field: {
          id: "name",
          type: "text",
          label: "Name",
          validation: z.string().min(2).describe("User's full name"),
        },
      },
      {
        type: "field",
        field: {
          id: "age",
          type: "number",
          label: "Age",
          validation: z.number().min(0).describe("User's age in years"),
        },
      },
    ]

    // Get the schema using the hook
    const schema = useFormDefinitionSchema(definition)

    return (
      <div className="flex flex-col gap-4">
        <div className="rounded-lg bg-f1-background-secondary p-4">
          <h3 className="mb-2 font-semibold">Generated Schema Shape:</h3>
          <pre className="text-sm">{JSON.stringify(schema.shape, null, 2)}</pre>
        </div>
        <F0Form
          name="schema-extraction"
          definition={definition}
          defaultValues={{ name: "", age: 0 }}
          onSubmit={async (data) => {
            // Validate with the extracted schema
            const result = schema.safeParse(data)
            if (result.success) {
              alert(`Valid data: ${JSON.stringify(result.data, null, 2)}`)
              return { success: true }
            }
            return { success: false, rootMessage: "Validation failed" }
          }}
        />
      </div>
    )
  },
}

/**
 * Form with server-side validation errors
 */
export const ServerValidation: Story = {
  render() {
    const definition: FormDefinitionItem[] = [
      {
        type: "field",
        field: {
          id: "username",
          type: "text",
          label: "Username",
          validation: z.string().min(3),
          helpText: "Try 'admin' to see server validation error",
        },
      },
      {
        type: "field",
        field: {
          id: "email",
          type: "text",
          inputType: "email",
          label: "Email",
          validation: z.string().email(),
          helpText: "Try 'taken@example.com' to see server validation error",
        },
      },
    ]

    return (
      <F0Form
        name="server-validation"
        definition={definition}
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
 * Form matching the visual design with sections and switch grouping.
 * Demonstrates how contiguous switch fields are automatically grouped
 * in a bordered container with the switch on the right and label/description on the left.
 */
export const VisualDesignExample: Story = {
  render() {
    const definition: FormDefinitionItem[] = [
      // Basic Information Section
      {
        type: "section",
        id: "basic-info",
        section: {
          title: "Basic Information",
          fields: [
            {
              type: "field",
              field: {
                id: "title",
                type: "text",
                label: "Title",
                validation: z.string().min(1),
                placeholder: "Workplace climate survey",
              },
            },
            {
              type: "field",
              field: {
                id: "description",
                type: "textarea",
                label: "Description (Optional)",
                validation: z.string().optional(),
                placeholder:
                  "This short workplace climate survey contains just 12 simple questions...",
                rows: 3,
              },
            },
          ],
        },
      },
      // Participants Section
      {
        type: "section",
        id: "participants",
        section: {
          title: "Participants",
          fields: [
            {
              type: "field",
              field: {
                id: "participants",
                type: "select",
                label: "Select participants",
                options: [
                  { value: "all", label: "All employees" },
                  { value: "department", label: "By department" },
                  { value: "team", label: "By team" },
                ],
                placeholder: "Select participants",
              },
            },
          ],
        },
      },
      // Schedule Section with row group
      {
        type: "section",
        id: "schedule",
        section: {
          title: "Schedule",
          fields: [
            {
              type: "row",
              fields: [
                {
                  id: "publishOn",
                  type: "date",
                  label: "Publish on",
                  placeholder: "dd/mm/yyyy",
                },
                {
                  id: "endsAt",
                  type: "date",
                  label: "Ends at",
                  placeholder: "dd/mm/yyyy",
                },
              ],
            },
            {
              type: "field",
              field: {
                id: "recurrence",
                type: "select",
                label: "Recurrence",
                options: [
                  { value: "none", label: "Does not repeat" },
                  { value: "weekly", label: "Weekly" },
                  { value: "monthly", label: "Monthly" },
                  { value: "quarterly", label: "Quarterly" },
                ],
                placeholder: "Does not repeat",
              },
            },
          ],
        },
      },
      // Visibility & Privacy Section with switch grouping
      {
        type: "section",
        id: "visibility",
        section: {
          title: "Visibility & Privacy",
          fields: [
            // These consecutive switch fields will be automatically grouped
            {
              type: "field",
              field: {
                id: "managerVisibility",
                type: "switch",
                label: "Add visibility permissions to managers and team leads",
                helpText:
                  "Grant access to managers and team leads. Even if they are not survey editors, they will be able to view the results of their own teams once responses are available",
              },
            },
            {
              type: "field",
              field: {
                id: "anonymousAnswers",
                type: "switch",
                label: "Anonymous answers",
              },
            },
          ],
        },
      },
      // Editors Section
      {
        type: "section",
        id: "editors",
        section: {
          title: "Editors",
          fields: [
            {
              type: "field",
              field: {
                id: "editors",
                type: "select",
                label: "Select editors",
                options: [
                  { value: "none", label: "None" },
                  { value: "hr", label: "HR Team" },
                  { value: "managers", label: "Managers" },
                ],
                placeholder: "None",
              },
            },
          ],
        },
      },
    ]

    return (
      <div className="max-w-lg">
        <F0Form
          name="visual-design-example"
          definition={definition}
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
