import type { Meta, StoryObj } from "@storybook/react-vite"
import { useState } from "react"
import { Search } from "../Search"

const PLACEHOLDERS = [
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
 * An idle field cycles example queries every few seconds, so the kind of thing
 * worth asking is visible without a panel in the way. The rotation stops the
 * moment the field is focused.
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
