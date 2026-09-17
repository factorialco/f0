import type { Meta, StoryObj } from "@storybook/react-vite"
import { useState } from "react"
import { Search } from "../Search"

const PLACEHOLDERS = [
  "Hired in the last 6 months",
  "Ended agreements in Madrid",
  "Waiters hired more than 3 years ago",
  "Active employees in Valencia",
  "Pending to accept invitation",
]

const meta = {
  component: Search,
  title: "Data Collection/Components/Search",
  parameters: {
    layout: "centered",
  },
  tags: ["experimental", "!autodocs"],
  args: {
    onChange: () => {},
  },
} satisfies Meta<typeof Search>

export default meta
type Story = StoryObj<typeof meta>

/** The field as every Data Collection renders it today: a collapsed pill. */
export const Default: Story = {
  render: function Render() {
    const [value, setValue] = useState<string | undefined>()
    return <Search value={value} onChange={setValue} />
  },
}

/**
 * An open, empty field types out example queries one after another, so the
 * kind of thing worth asking is visible without a panel in the way. It holds
 * while the field is closed or has something written in it, and honours
 * reduced motion by showing each example whole.
 */
export const WithRotatingPlaceholder: Story = {
  render: function Render() {
    const [value, setValue] = useState<string | undefined>()
    return (
      <Search
        value={value}
        onChange={setValue}
        placeholderRotation={PLACEHOLDERS}
        onSubmit={(query) => setValue(query)}
      />
    )
  },
}

/**
 * The action offered inside the field: the search keeps working as it always
 * did — enter searches by name — and the button hands the same text to the
 * assistant instead. It is inert until something is written.
 */
export const WithInlineAction: Story = {
  render: function Render() {
    const [value, setValue] = useState<string | undefined>()
    return (
      <Search
        value={value}
        onChange={setValue}
        placeholderRotation={PLACEHOLDERS}
        inlineAction={{
          label: "Ask ONE",
          onClick: (query) => window.alert(`Asked: ${query}`),
        }}
      />
    )
  },
}

/** A submitted query resolving: the magnifier spins and the × aborts it. */
export const Searching: Story = {
  render: function Render() {
    const [value, setValue] = useState<string | undefined>(
      "Ended chefs in Barcelona"
    )
    const [status, setStatus] = useState<"idle" | "searching">("searching")
    return (
      <Search
        value={value}
        onChange={setValue}
        status={status}
        onCancel={() => setStatus("idle")}
      />
    )
  },
}
