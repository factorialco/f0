import type { Meta, StoryObj } from "@storybook/react-vite"

import { useState } from "react"

import {
  F0MapMarker,
  f0MapMarkerVariants,
  type F0MapMarkerProps,
  type F0MapMarkerVariant,
} from "../F0MapMarker"

/** Sample data per semantic variant, so stories stay consistent. */
const SAMPLE: Record<F0MapMarkerVariant, F0MapMarkerProps> = {
  default: { variant: "default", label: "Meetup point" },
  workplace: { variant: "workplace", label: "Barcelona HQ" },
  stop: { variant: "stop", letter: "A", label: "Pickup" },
  employee: {
    variant: "employee",
    firstName: "Ada",
    lastName: "Lovelace",
    label: "Ada Lovelace",
  },
  company: { variant: "company", name: "Acme Corp", label: "Acme Corp" },
}

const meta = {
  title: "Map/F0MapMarker",
  component: F0MapMarker,
  tags: ["experimental", "!autodocs"],
  // Muted-green swatch approximating the f0 basemap, so markers read in context.
  decorators: [
    (Story) => (
      <div
        className="flex min-h-40 flex-wrap items-center justify-center gap-8 rounded-xl p-8"
        style={{ backgroundColor: "#d7eabe" }}
      >
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof F0MapMarker>

export default meta
type Story = StoryObj

type PlaygroundArgs = {
  variant: F0MapMarkerVariant
  label: string
  selected: boolean
  showLabel: boolean
}

/**
 * The product-semantic marker, switchable. Each variant fixes its own color and
 * rendering: workplaces share one hue, people/teams/companies take their own
 * identity color. Click to select (the white pin indicator drops in).
 */
export const Playground: StoryObj<PlaygroundArgs> = {
  args: {
    variant: "workplace",
    label: "Barcelona HQ",
    selected: false,
    showLabel: true,
  },
  argTypes: {
    variant: { control: "inline-radio", options: [...f0MapMarkerVariants] },
    selected: { control: "boolean" },
    showLabel: { control: "boolean" },
  },
  render: ({ variant, label, selected, showLabel }) => {
    const [active, setActive] = useState(selected)
    return (
      <F0MapMarker
        {...SAMPLE[variant]}
        label={label || undefined}
        showLabel={showLabel}
        selected={active}
        onClick={() => setActive((v) => !v)}
      />
    )
  },
}

const VariantsRow = () => {
  const [selected, setSelected] = useState<F0MapMarkerVariant | null>(null)
  return (
    <>
      {f0MapMarkerVariants.map((variant) => (
        <F0MapMarker
          key={variant}
          {...SAMPLE[variant]}
          showLabel={false}
          selected={selected === variant}
          onClick={() =>
            setSelected((current) => (current === variant ? null : variant))
          }
        />
      ))}
    </>
  )
}

/**
 * The four variants: workplace, employee, team, company. Click one to select it
 * - the white pin indicator appears underneath and moves to whichever marker is
 * active (single selection, like on a map).
 */
export const Variants: Story = {
  render: () => <VariantsRow />,
}
