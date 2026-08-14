import type { Meta, StoryObj } from "@storybook/react-vite"
import { z } from "zod"

import { WeekStartDay } from "@/components/OneCalendar/types"
import { L10nProvider } from "@/lib/providers/l10n"
import type { HourCycle } from "@/lib/providers/l10n"
import { useF0FormDefinition } from "@/patterns/F0WizardForm"

import { f0FormField, F0Form } from "../index"

/**
 * Demonstrates `l10n.time.hourCycle`: the F0 time field renders/parses in the
 * selected hour cycle. Toggle **hourCycle** in the Controls panel:
 * - `24h` → native time input (HH:mm)
 * - `12h` → text input formatted with AM/PM (hh:mm a)
 */
const meta: Meta<{ hourCycle: HourCycle }> = {
  title: "Forms/TimeField hourCycle",
  component: F0Form,
  tags: ["experimental"],
  argTypes: {
    hourCycle: { control: "radio", options: ["24h", "12h"] },
  },
  args: { hourCycle: "24h" },
  render: ({ hourCycle }) => (
    <L10nProvider
      l10n={{
        locale: "en",
        date: { weekStartsOn: WeekStartDay.Monday },
        time: { hourCycle },
      }}
    >
      <TimeForm />
    </L10nProvider>
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
