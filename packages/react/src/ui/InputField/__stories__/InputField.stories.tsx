import * as icons from "@/icons/app"
import { Search } from "@/icons/app"
import type { Meta, StoryObj } from "@storybook/react-vite"
import { InputField } from "../"

const meta = {
  title: "Components/InputField",
  component: InputField,
  parameters: {
    docs: {
      description: {
        component: [
          "The `InputField` component is a wrapper around any `input` that allows us to share code and behavior between different input types.",
        ]
          .map((text) => `<p>${text}.</p>`)
          .join(""),
      },
    },
  },
  argTypes: {
    label: {
      description:
        "Label text for the input field (required for accessibility)",
      control: "text",
    },
    hideLabel: {
      description:
        "Whether to hide the label visually while keeping it accessible",
      control: "boolean",
    },
    placeholder: {
      description: "Placeholder text for the input",
      control: "text",
    },
    value: {
      description: "Current value of the input field",
      control: "text",
    },
    onChange: {
      description: "Callback function called when the input value changes",
      action: "changed",
    },
    size: {
      description: "Size variant of the input field",
      control: "select",
      options: ["sm", "md"],
    },
    error: {
      description:
        "Error message(s) to display. Can be a string, array of strings, or boolean",
      control: "text",
    },
    disabled: {
      description: "Whether the input field is disabled",
      control: "boolean",
    },
    className: {
      description: "Additional CSS classes to apply to the wrapper",
      control: "text",
    },
    required: {
      description: "Whether the input field is required",
      control: "boolean",
    },
    clearable: {
      description: "Whether to show a clear button",
      control: "boolean",
    },
    onClear: {
      description: "Callback function called when the clear button is clicked",
      action: "cleared",
    },
    onFocus: {
      description: "Callback function called when the input receives focus",
      action: "focused",
    },
    onBlur: {
      description: "Callback function called when the input loses focus",
      action: "blurred",
    },
    children: {
      description: "Child elements to render inside the input field wrapper",
      control: false,
    },
    icon: {
      description: "Icon to display inside the input field",
      control: "select",
      mapping: icons,
      options: Object.keys(icons),
    },
    maxLength: {
      description: "Maximum length of the input field",
      control: "number",
    },
    hideMaxLength: {
      description: "Whether to hide the max length indicator",
    },
    appendTag: {
      description: "Text to display in the append tag",
      control: "text",
    },
  },
  tags: ["autodocs", "internal"],
} satisfies Meta<typeof InputField>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: "This is the label",
    value: "",
    placeholder: "This is the placeholder",
    onChange: () => {},
    children: <input type="text" className="w-full" />,
  },
}

export const WithATextarea: Story = {
  args: {
    label: "This is the label",
    value: "",
    placeholder: "This is the placeholder",
    onChange: () => {},
    canGrow: true,
    children: <textarea className="w-full" />,
    icon: icons.Ai,
    clearable: true,
    maxLength: 100,
  },
}

export const SizeSm: Story = {
  args: {
    ...Default.args,
    size: "sm",
  },
}

export const Loading: Story = {
  args: {
    ...Default.args,
    loading: true,
  },
}

export const IconLabel: Story = {
  args: {
    ...Default.args,
    labelIcon: icons.Archive,
  },
}

export const LongLabel: Story = {
  args: {
    ...Default.args,
    required: true,
    label:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
  },
}

export const WithMaxLength: Story = {
  args: {
    ...Default.args,
    maxLength: 10,
    hideMaxLength: false,
    value: "long text should be truncated",
  },
}

export const WithIcon: Story = {
  args: {
    ...Default.args,
    icon: Search,
  },
}

export const Clearable: Story = {
  args: {
    ...Default.args,
    icon: Search,
    clearable: true,
  },
}

export const Disabled: Story = {
  args: {
    ...Default.args,
    icon: Search,
    clearable: true,
    disabled: true,
  },
}

export const Readonly: Story = {
  args: {
    ...Default.args,
    icon: Search,
    clearable: true,
    readonly: true,
  },
}

export const Error: Story = {
  args: {
    ...Default.args,
    icon: Search,
    clearable: true,
    error: true,
  },
}

export const ErrorMessage: Story = {
  args: {
    ...Default.args,
    icon: Search,
    clearable: true,
    error: "This is the error message",
  },
}

export const InfoMessage: Story = {
  args: {
    ...Default.args,
    icon: Search,
    clearable: true,
    status: {
      type: "info",
      message: "This is the info message",
    },
  },
}

export const WarningMessage: Story = {
  args: {
    ...Default.args,
    icon: Search,
    clearable: true,
    status: {
      type: "warning",
      message: "This is the warning message",
    },
  },
}

export const HintMessage: Story = {
  args: {
    ...Default.args,
    icon: Search,
    clearable: true,
    hint: "This is the hint message",
  },
}

export const Required: Story = {
  args: {
    ...Default.args,
    icon: Search,
    clearable: true,
    required: true,
  },
}

export const HideLabel: Story = {
  args: {
    ...Default.args,
    icon: icons.Search,
    clearable: true,
    hideLabel: true,
    required: true,
  },
}

export const WithAppend: Story = {
  args: {
    ...Default.args,
    clearable: true,
    append: (
      <div className="rounded-sm bg-f1-background-secondary px-2 py-0.5 text-f1-foreground-secondary">
        Tag
      </div>
    ),
  },
}

export const WithAppendTag: Story = {
  args: {
    ...Default.args,
    clearable: true,
    appendTag: "Label",
  },
}
