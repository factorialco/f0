import type { Meta, StoryObj } from "@storybook/react-vite"
import { z } from "zod"

import { UserPlatformProvider } from "@/lib/providers/user-platafform"
import type { HourCycle } from "@/lib/providers/user-platafform"
import { useF0FormDefinition } from "@/patterns/F0WizardForm"

import { f0FormField, F0Form } from "../index"

/**
 * Demonstrates the global `hourCycle` user setting (set via `F0Provider`): the
 * F0 time field renders/parses in the selected hour cycle. Toggle **hourCycle**
 * in the Controls panel:
 * - `24h` → text input formatted as HH:mm
 * - `12h` → text input formatted with AM/PM (hh:mm a)
 */
const meta: Meta<{ hourCycle: HourCycle }> = {
  title: "Forms/TimeField hourCycle",
  tags: ["experimental"],
  argTypes: {
    hourCycle: { control: "radio", options: ["24h", "12h"] },
  },
  args: { hourCycle: "24h" },
  render: ({ hourCycle }) => (
    <UserPlatformProvider hourCycle={hourCycle}>
      <TimeForm />
    </UserPlatformProvider>
  ),
}

export default meta
type Story = StoryObj<typeof meta>

const TimeForm = () => {
  const formDefinition = useF0FormDefinition({
    name: "time-hourcycle-demo",
    schema: z.object({
      start: f0FormField(z.date(), { label: "Start time", fieldType: "time" }),
      end: f0FormField(z.date(), { label: "End time", fieldType: "time" }),
    }),
    defaultValues: {
      start: new Date(2020, 0, 1, 9, 0),
      end: new Date(2020, 0, 1, 17, 30),
    },
    onSubmit: () => ({ success: true }),
  })

  return <F0Form formDefinition={formDefinition} />
}

export const Playground: Story = {}
