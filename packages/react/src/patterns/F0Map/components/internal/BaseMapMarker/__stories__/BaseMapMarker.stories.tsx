import type { Meta, StoryObj } from "@storybook/react-vite"

import { useState } from "react"

import { StarFilled } from "@/icons/app"

import {
  BaseMapMarker,
  markerColors,
  markerLabelPlacements,
  markerSizes,
  markerVariants,
  type BaseMapMarkerProps,
  type BaseMapMarkerVariant,
} from "../BaseMapMarker"

// Sagrada Família (Wikimedia Commons) — a place, as the image variant intends.
const PLACE_IMG =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Sagrada_Familia_01.jpg/330px-Sagrada_Familia_01.jpg"

/** Sample props per variant, so stories and the playground stay consistent. */
const SAMPLE: Record<BaseMapMarkerVariant, BaseMapMarkerProps> = {
  color: { variant: "color" },
  icon: { variant: "icon", icon: StarFilled },
  person: { variant: "person", firstName: "Ada", lastName: "Lovelace" },
  team: { variant: "team", name: "Design" },
  company: { variant: "company", name: "Factorial" },
  image: { variant: "image", src: PLACE_IMG, alt: "Sagrada Família" },
}

const meta = {
  title: "Map/internal/BaseMapMarker",
  component: BaseMapMarker,
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
} satisfies Meta<typeof BaseMapMarker>

export default meta
type Story = StoryObj

type PlaygroundArgs = {
  variant: BaseMapMarkerVariant
  size: (typeof markerSizes)[number]
  color: (typeof markerColors)[number]
  selected: boolean
  interactive: boolean
  label: string
  showLabel: boolean
  labelPlacement: (typeof markerLabelPlacements)[number]
}

/**
 * All the marker variants, switchable. Hover a marker to see it grow;
 * `selected` shows the white pin indicator underneath.
 */
export const Playground: StoryObj<PlaygroundArgs> = {
  args: {
    variant: "color",
    size: "md",
    color: "radical",
    selected: false,
    interactive: true,
    label: "Barcelona HQ",
    showLabel: true,
    labelPlacement: "right",
  },
  argTypes: {
    variant: { control: "inline-radio", options: [...markerVariants] },
    size: { control: "inline-radio", options: [...markerSizes] },
    color: { control: "select", options: [...markerColors] },
    selected: { control: "boolean" },
    interactive: { control: "boolean" },
    labelPlacement: {
      control: "inline-radio",
      options: [...markerLabelPlacements],
    },
  },
  render: ({
    variant,
    size,
    color,
    selected,
    interactive,
    label,
    showLabel,
    labelPlacement,
  }) => {
    // Clicking toggles selection so the pin indicator is visible in the
    // playground; the `selected` control seeds the initial state.
    const [active, setActive] = useState(selected)
    return (
      <BaseMapMarker
        {...SAMPLE[variant]}
        size={size}
        color={color}
        selected={interactive ? active : selected}
        label={label || undefined}
        showLabel={showLabel}
        labelPlacement={labelPlacement}
        onClick={interactive ? () => setActive((v) => !v) : undefined}
      />
    )
  },
}

const VariantsRow = () => {
  const [selected, setSelected] = useState<BaseMapMarkerVariant | null>(null)
  return (
    <>
      {markerVariants.map((variant) => (
        <BaseMapMarker
          key={variant}
          {...SAMPLE[variant]}
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
 * The six variants: color, icon, person, team, company, image.
 * Click a marker to select it - the white pin indicator appears underneath
 * and moves to whichever marker is active (single selection, like on a map).
 */
export const Variants: Story = {
  render: () => <VariantsRow />,
}

/**
 * Labels: darkest hue step, size-scaled, white halo, all four placements.
 * Note: label collision avoidance runs at the map layer (F0Map), which knows
 * every marker's screen position - this story is a static grid, so items are
 * simply spaced apart.
 */
export const Labels: Story = {
  render: () => (
    <div className="grid grid-cols-3 place-items-center gap-x-44 gap-y-20 py-12">
      <BaseMapMarker
        variant="icon"
        icon={StarFilled}
        color="malibu"
        label="Barcelona HQ"
      />
      <BaseMapMarker
        variant="color"
        color="viridian"
        label="Madrid Office"
        labelPlacement="bottom"
      />
      <BaseMapMarker
        {...SAMPLE.person}
        label="Ada Lovelace"
        labelPlacement="bottom"
        selected
      />
      <BaseMapMarker
        {...SAMPLE.image}
        label="Sagrada Família, plaça de Gaudí"
        labelPlacement="bottom"
      />
      <BaseMapMarker
        variant="color"
        color="grass"
        label="Left label"
        labelPlacement="left"
      />
      <BaseMapMarker
        variant="color"
        color="purple"
        label="Top label"
        labelPlacement="top"
      />
    </div>
  ),
}

/** Sizes sm / md / lg. */
export const Sizes: Story = {
  render: () => (
    <>
      {markerSizes.map((size) => (
        <BaseMapMarker
          key={size}
          {...SAMPLE.icon}
          size={size}
          onClick={() => {}}
        />
      ))}
    </>
  ),
}

/** f0 palette hues (color and icon variants only). */
export const Colors: Story = {
  render: () => (
    <>
      {markerColors.map((color) => (
        <BaseMapMarker key={color} variant="color" color={color} />
      ))}
    </>
  ),
}
