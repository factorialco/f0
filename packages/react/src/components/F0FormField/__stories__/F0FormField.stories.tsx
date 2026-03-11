import type { Meta, StoryObj } from "@storybook/react-vite"

import { useState } from "react"

import type { F0Field } from "@/components/F0Form/fields/types"

import { withSnapshot } from "@/lib/storybook-utils/parameters"

import { F0FormField } from "../F0FormField"

const meta: Meta<typeof F0FormField> = {
  title: "Forms/F0FormField",
  component: F0FormField,
  tags: ["autodocs"],
  parameters: { a11y: { skipCi: true } },
}

export default meta
type Story = StoryObj<typeof meta>

/**
 * A standalone text input field, rendered outside of F0Form context.
 */
export const Text: Story = {
  render() {
    const [value, setValue] = useState("")

    const field: F0Field = {
      id: "username",
      type: "text",
      label: "Username",
      placeholder: "Enter your username",
      helpText: "Choose a unique username",
    }

    return (
      <div className="max-w-sm">
        <F0FormField
          field={field}
          value={value}
          onChange={(v) => setValue(v as string)}
        />
      </div>
    )
  },
}

/**
 * A textarea field for longer text content.
 */
export const Textarea: Story = {
  render() {
    const [value, setValue] = useState("")

    const field: F0Field = {
      id: "bio",
      type: "textarea",
      label: "Biography",
      placeholder: "Tell us about yourself",
      helpText: "Max 500 characters",
    }

    return (
      <div className="max-w-sm">
        <F0FormField
          field={field}
          value={value}
          onChange={(v) => setValue(v as string)}
        />
      </div>
    )
  },
}

/**
 * A number input field.
 */
export const Number: Story = {
  render() {
    const [value, setValue] = useState<number | undefined>(undefined)

    const field: F0Field = {
      id: "age",
      type: "number",
      label: "Age",
      placeholder: "Enter your age",
    }

    return (
      <div className="max-w-sm">
        <F0FormField
          field={field}
          value={value}
          onChange={(v) => setValue(v as number | undefined)}
        />
      </div>
    )
  },
}

/**
 * A select dropdown with static options.
 */
export const Select: Story = {
  render() {
    const [value, setValue] = useState("")

    const field: F0Field = {
      id: "country",
      type: "select",
      label: "Country",
      placeholder: "Select a country",
      options: [
        { value: "us", label: "United States" },
        { value: "uk", label: "United Kingdom" },
        { value: "de", label: "Germany" },
        { value: "es", label: "Spain" },
      ],
    }

    return (
      <div className="max-w-sm">
        <F0FormField
          field={field}
          value={value}
          onChange={(v) => setValue(v as string)}
        />
      </div>
    )
  },
}

/**
 * A date picker field.
 */
export const Date: Story = {
  render() {
    const [value, setValue] = useState<globalThis.Date | undefined>(undefined)

    const field: F0Field = {
      id: "birthday",
      type: "date",
      label: "Birthday",
      placeholder: "Pick a date",
    }

    return (
      <div className="max-w-sm">
        <F0FormField
          field={field}
          value={value}
          onChange={(v) => setValue(v as globalThis.Date | undefined)}
        />
      </div>
    )
  },
}

/**
 * A time picker field.
 */
export const Time: Story = {
  render() {
    const [value, setValue] = useState<globalThis.Date | undefined>(undefined)

    const field: F0Field = {
      id: "startTime",
      type: "time",
      label: "Start time",
      placeholder: "Select a time",
    }

    return (
      <div className="max-w-sm">
        <F0FormField
          field={field}
          value={value}
          onChange={(v) => setValue(v as globalThis.Date | undefined)}
        />
      </div>
    )
  },
}

/**
 * A datetime picker field combining date and time selection.
 */
export const DateTime: Story = {
  render() {
    const [value, setValue] = useState<globalThis.Date | undefined>(undefined)

    const field: F0Field = {
      id: "eventDate",
      type: "datetime",
      label: "Event date & time",
      placeholder: "Pick date and time",
    }

    return (
      <div className="max-w-sm">
        <F0FormField
          field={field}
          value={value}
          onChange={(v) => setValue(v as globalThis.Date | undefined)}
        />
      </div>
    )
  },
}

/**
 * A date range picker with from/to values.
 */
export const DateRange: Story = {
  render() {
    const [value, setValue] = useState<
      { from: globalThis.Date; to: globalThis.Date } | undefined
    >(undefined)

    const field: F0Field = {
      id: "vacationRange",
      type: "daterange",
      label: "Vacation dates",
      fromLabel: "Start date",
      toLabel: "End date",
    }

    return (
      <div className="max-w-sm">
        <F0FormField
          field={field}
          value={value}
          onChange={(v) =>
            setValue(
              v as { from: globalThis.Date; to: globalThis.Date } | undefined
            )
          }
        />
      </div>
    )
  },
}

/**
 * A rich text editor field with formatting support.
 */
export const RichText: Story = {
  render() {
    const [value, setValue] = useState<{
      value: string | null
      mentionIds?: number[]
    }>({ value: null })

    const field: F0Field = {
      id: "description",
      type: "richtext",
      label: "Description",
      placeholder: "Write a detailed description...",
    }

    return (
      <div className="max-w-lg">
        <F0FormField
          field={field}
          value={value}
          onChange={(v) =>
            setValue(v as { value: string | null; mentionIds?: number[] })
          }
        />
      </div>
    )
  },
}

/**
 * A custom field using a render function for bespoke UI.
 */
export const Custom: Story = {
  render() {
    const [value, setValue] = useState("")

    const field: F0Field = {
      id: "color",
      type: "custom",
      label: "Favorite color",
      render: ({ value: currentValue, onChange }) => (
        <div className="flex gap-2">
          {["red", "green", "blue", "purple"].map((color) => (
            <button
              key={color}
              type="button"
              onClick={() => onChange(color)}
              className={`h-8 w-8 rounded-full border-2 ${
                currentValue === color
                  ? "border-f1-foreground"
                  : "border-transparent"
              }`}
              style={{ backgroundColor: color }}
            />
          ))}
        </div>
      ),
    }

    return (
      <div className="max-w-sm">
        <F0FormField
          field={field}
          value={value}
          onChange={(v) => setValue(v as string)}
        />
      </div>
    )
  },
}

/**
 * A checkbox field.
 */
export const Checkbox: Story = {
  render() {
    const [value, setValue] = useState(false)

    const field: F0Field = {
      id: "terms",
      type: "checkbox",
      label: "I accept the terms and conditions",
    }

    return (
      <div className="max-w-sm">
        <F0FormField
          field={field}
          value={value}
          onChange={(v) => setValue(v as boolean)}
        />
      </div>
    )
  },
}

/**
 * A switch toggle field.
 */
export const Switch: Story = {
  render() {
    const [value, setValue] = useState(false)

    const field: F0Field = {
      id: "notifications",
      type: "switch",
      label: "Enable notifications",
    }

    return (
      <div className="max-w-sm">
        <F0FormField
          field={field}
          value={value}
          onChange={(v) => setValue(v as boolean)}
        />
      </div>
    )
  },
}

/**
 * A text field in error state with a custom error message.
 */
export const WithError: Story = {
  render() {
    const [value, setValue] = useState("")

    const field: F0Field = {
      id: "email",
      type: "text",
      label: "Email",
      placeholder: "you@example.com",
      inputType: "email",
    }

    return (
      <div className="max-w-sm">
        <F0FormField
          field={field}
          value={value}
          onChange={(v) => setValue(v as string)}
          error
          errorMessage="Please enter a valid email address"
        />
      </div>
    )
  },
}

/**
 * A disabled text field.
 */
export const Disabled: Story = {
  render() {
    const field: F0Field = {
      id: "readonly",
      type: "text",
      label: "Read-only field",
      placeholder: "Cannot edit",
    }

    return (
      <div className="max-w-sm">
        <F0FormField
          field={field}
          value="Fixed value"
          onChange={() => {}}
          disabled
        />
      </div>
    )
  },
}

/**
 * A required text field showing the required indicator.
 */
export const Required: Story = {
  render() {
    const [value, setValue] = useState("")

    const field: F0Field = {
      id: "name",
      type: "text",
      label: "Full name",
      placeholder: "Enter your full name",
    }

    return (
      <div className="max-w-sm">
        <F0FormField
          field={field}
          value={value}
          onChange={(v) => setValue(v as string)}
          required
        />
      </div>
    )
  },
}

/**
 * Multiple F0FormField instances composed together to build a form-like layout.
 */
export const ComposedForm: Story = {
  render() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [role, setRole] = useState("")

    const nameField: F0Field = {
      id: "name",
      type: "text",
      label: "Name",
      placeholder: "Enter your name",
    }

    const emailField: F0Field = {
      id: "email",
      type: "text",
      label: "Email",
      placeholder: "you@example.com",
      inputType: "email",
    }

    const roleField: F0Field = {
      id: "role",
      type: "select",
      label: "Role",
      placeholder: "Select a role",
      options: [
        { value: "admin", label: "Admin" },
        { value: "editor", label: "Editor" },
        { value: "viewer", label: "Viewer" },
      ],
    }

    return (
      <div className="flex max-w-sm flex-col gap-4">
        <F0FormField
          field={nameField}
          value={name}
          onChange={(v) => setName(v as string)}
          required
        />
        <F0FormField
          field={emailField}
          value={email}
          onChange={(v) => setEmail(v as string)}
          required
        />
        <F0FormField
          field={roleField}
          value={role}
          onChange={(v) => setRole(v as string)}
        />
      </div>
    )
  },
}

/**
 * Snapshot story rendering key field variants for visual regression testing.
 */
export const Snapshot: Story = {
  parameters: withSnapshot({}),
  render() {
    const textField: F0Field = {
      id: "text",
      type: "text",
      label: "Text field",
      placeholder: "Enter text",
      helpText: "Helper text",
    }

    const selectField: F0Field = {
      id: "select",
      type: "select",
      label: "Select field",
      placeholder: "Choose an option",
      options: [
        { value: "a", label: "Option A" },
        { value: "b", label: "Option B" },
      ],
    }

    const checkboxField: F0Field = {
      id: "checkbox",
      type: "checkbox",
      label: "Checkbox field",
    }

    const switchField: F0Field = {
      id: "switch",
      type: "switch",
      label: "Switch field",
    }

    const numberField: F0Field = {
      id: "number",
      type: "number",
      label: "Number field",
      placeholder: "0",
    }

    const textareaField: F0Field = {
      id: "textarea",
      type: "textarea",
      label: "Textarea field",
      placeholder: "Enter long text",
    }

    return (
      <div className="flex max-w-sm flex-col gap-6">
        <section className="flex flex-col gap-4">
          <h4 className="text-lg font-semibold">Field types</h4>
          <F0FormField field={textField} value="" onChange={() => {}} />
          <F0FormField
            field={numberField}
            value={undefined}
            onChange={() => {}}
          />
          <F0FormField field={textareaField} value="" onChange={() => {}} />
          <F0FormField field={selectField} value="" onChange={() => {}} />
          <F0FormField
            field={checkboxField}
            value={false}
            onChange={() => {}}
          />
          <F0FormField field={switchField} value={false} onChange={() => {}} />
        </section>

        <section className="flex flex-col gap-4">
          <h4 className="text-lg font-semibold">States</h4>
          <F0FormField
            field={{ ...textField, id: "filled", label: "Filled" }}
            value="Hello world"
            onChange={() => {}}
          />
          <F0FormField
            field={{ ...textField, id: "required", label: "Required" }}
            value=""
            onChange={() => {}}
            required
          />
          <F0FormField
            field={{ ...textField, id: "disabled", label: "Disabled" }}
            value="Cannot edit"
            onChange={() => {}}
            disabled
          />
          <F0FormField
            field={{ ...textField, id: "error", label: "With error" }}
            value=""
            onChange={() => {}}
            error
            errorMessage="This field is required"
          />
        </section>
      </div>
    )
  },
}
