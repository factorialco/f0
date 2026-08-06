import type { Meta, StoryObj } from "@storybook/react-vite"
import { expect, fn, within } from "storybook/test"

import { F0TextInput } from "@/components/F0TextInput"
import { withSnapshot } from "@/lib/storybook-utils/parameters"

import { F0PhoneInput } from "../index"
import { phoneInputSizes } from "../types"

const meta = {
  title: "Inputs/Phone input",
  component: F0PhoneInput,
  tags: ["experimental", "!autodocs"],
  args: {
    label: "Phone number",
    defaultCountry: "es",
    disabled: false,
    onChange: fn(),
  },
  argTypes: {
    size: {
      control: "select",
      options: phoneInputSizes,
      table: { type: { summary: phoneInputSizes.join(" | ") } },
    },
    value: { control: "object" },
    defaultValue: { control: "object" },
    status: { control: "object" },
  },
  decorators: [
    (Story) => (
      <div className="max-w-96">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof F0PhoneInput>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const NoDefaultCountry: Story = {
  args: {
    defaultCountry: undefined,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.queryByText(/^\+\d/)).not.toBeInTheDocument()
  },
}

export const Prefilled: Story = {
  args: {
    defaultValue: { prefix: "+34", number: "674897945" },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const input = canvas.getByRole("textbox")
    await expect(input).toHaveValue("674 89 79 45")
    await expect(canvas.getByText("+34")).toBeInTheDocument()
  },
}

export const LegacyFullNumber: Story = {
  args: {
    defaultValue: { prefix: undefined, number: "+447400123456" },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    // Full international numbers stored in `number` resolve the country
    await expect(canvas.getByText("+44")).toBeInTheDocument()
  },
}

export const PinnedCountries: Story = {
  args: {
    pinnedCountries: ["es", "gb", "us", "fr", "de", "it", "pt"],
  },
}

export const AllowedCountries: Story = {
  args: {
    defaultCountry: "es",
    allowedCountries: ["es", "pt", "fr"],
  },
}

export const WithError: Story = {
  args: {
    defaultValue: { prefix: "+34", number: "1234" },
    error: "Invalid phone number",
  },
}

export const Disabled: Story = {
  args: {
    defaultValue: { prefix: "+34", number: "674897945" },
    disabled: true,
  },
}

export const Clearable: Story = {
  args: {
    defaultValue: { prefix: "+34", number: "674897945" },
    clearable: true,
  },
}

export const Snapshot: Story = {
  parameters: withSnapshot({}),
  args: {},
  render: (args) => (
    <div className="flex max-w-96 flex-col gap-4">
      <F0TextInput
        label="Text input (default size)"
        placeholder="Alignment reference"
      />
      <F0PhoneInput {...args} label="Default" />
      <F0PhoneInput
        {...args}
        label="No country selected"
        defaultCountry={undefined}
      />
      <F0PhoneInput
        {...args}
        label="Prefilled"
        value={{ prefix: "+34", number: "674897945" }}
      />
      <F0PhoneInput
        {...args}
        label="Medium"
        size="md"
        value={{ prefix: "+34", number: "674897945" }}
      />
      <F0PhoneInput
        {...args}
        label="With error"
        value={{ prefix: "+34", number: "1234" }}
        error="Invalid phone number"
      />
      <F0PhoneInput
        {...args}
        label="With hint"
        hint="We only call you about your application"
      />
      <F0PhoneInput
        {...args}
        label="Disabled"
        disabled
        value={{ prefix: "+34", number: "674897945" }}
      />
      <F0PhoneInput
        {...args}
        label="Loading"
        loading
        value={{ prefix: "+34", number: "674897945" }}
      />
      <F0PhoneInput
        {...args}
        label="Clearable"
        clearable
        value={{ prefix: "+34", number: "674897945" }}
      />
    </div>
  ),
}
