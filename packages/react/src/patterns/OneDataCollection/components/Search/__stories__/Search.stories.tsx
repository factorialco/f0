import type { Meta, StoryObj } from "@storybook/react-vite"
import { useState } from "react"
import { Search } from "../Search"

const SUGGESTIONS = [
  'Try "Hired in the last 6 months"',
  'Try "Ended agreements in Madrid"',
  'Try "Waiters hired more than 3 years ago"',
  'Try "Active employees in Valencia"',
  'Try "Pending to accept invitation"',
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
 * Focusing the empty field offers example queries; they disappear as soon as
 * there is text to match against.
 */
export const WithSuggestions: Story = {
  render: function Render() {
    const [value, setValue] = useState<string | undefined>()
    return (
      <Search
        value={value}
        onChange={setValue}
        suggestions={SUGGESTIONS}
        placeholderRotation={SUGGESTIONS}
        onSubmit={(query) => setValue(query)}
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
