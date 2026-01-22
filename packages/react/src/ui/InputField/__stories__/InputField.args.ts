import { icons } from "lucide-react"

import { inputFieldStatus } from "../types"

const inputFieldArgs = {
  label: {
    description: "Label text for the input field (required for accessibility)",
    control: "text",
  },
  hideLabel: {
    description:
      "Whether to hide the label visually while keeping it accessible",
    control: "boolean",
  },
  labelIcon: {
    description: "Icon to display next to the label",
    control: "select",
    mapping: icons,
    options: Object.keys(icons),
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
  readonly: {
    description: "Whether the input field is readonly",
    control: "boolean",
  },
  status: {
    description: "Status of the input field",
    control: "select",
    options: Object.keys(inputFieldStatus),
  },
  hint: {
    description: "Hint text for the input field",
    control: "text",
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
  buttonToggle: {
    description: "Button toggle to render inside the input field",
    control: "object",
    table: {
      type: {
        summary:
          "{ label: string | [string, string], icon: IconType | [IconType, IconType], selected: boolean, disabled?: boolean, onChange: (selected: boolean) => void } | undefined",
      },
    },
  },
}

export const getInputFieldArgs = (
  keys?: ReadonlyArray<keyof typeof inputFieldArgs | string>
) => {
  if (!keys) {
    return inputFieldArgs
  }

  return Object.fromEntries(
    keys
      .map((key) => [key, inputFieldArgs[key as keyof typeof inputFieldArgs]])
      .filter(([_, value]) => value !== undefined)
  )
}
