import type { Meta, StoryObj } from "@storybook/react-vite"

import React from "react"

import {
  avatarVariants,
  CompanyAvatarVariant,
  FileAvatarVariant,
  FlagAvatarVariant,
  PersonAvatarVariant,
  TeamAvatarVariant,
} from "@/components/avatars/F0Avatar"
import { withSnapshot } from "@/lib/storybook-utils/parameters"

import { getBaseAvatarArgTypes } from "../../internal/BaseAvatar/__stories__/utils"
import { F0AvatarList } from "../F0AvatarList"
import { avatarListSizes } from "../types"

const dummyPeople = [
  {
    firstName: "Nik",
    lastName: "Lopin",
    src: "/avatars/person01.jpg",
  },
  {
    firstName: "Josep Jaume",
    lastName: "Rey",
    src: "/avatars/person02.jpg",
  },
  {
    firstName: "Saúl",
    lastName: "Domínguez",
  },
  {
    firstName: "Dani",
    lastName: "Moreno",
    src: "/avatars/person03.jpg",
  },
  {
    firstName: "Hellen",
    lastName: "Fernández",
    src: "/avatars/person04.jpg",
    deactivated: true,
  },
]

const dummyCompanies = [
  {
    name: "Factorial",
    src: "/avatars/company01.jpg",
  },
  {
    name: "Itnig",
  },
  {
    name: "Another cool company",
    src: "/avatars/company02.jpg",
  },
]

const dummyTeams = [
  { name: "Designers" },
  { name: "Engineering" },
  { name: "Product Management" },
]

const dummyFiles = [
  { file: { name: "document.pdf", type: "application/pdf" } },
  { file: { name: "image.jpg", type: "image/jpeg" } },
]

const dummyFlags = [
  { name: "Spain", flag: "es" },
  { name: "France", flag: "fr" },
  { name: "Germany", flag: "de" },
]

function getDummyAvatar<
  T extends "person" | "company" | "team" | "flag" | "file" = "person",
>(
  type: T,
  index: number
): T extends "person"
  ? PersonAvatarVariant
  : T extends "company"
    ? CompanyAvatarVariant
    : T extends "team"
      ? TeamAvatarVariant
      : T extends "flag"
        ? FlagAvatarVariant
        : T extends "file"
          ? FileAvatarVariant
          : never {
  const sourceData = {
    person: dummyPeople,
    company: dummyCompanies,
    team: dummyTeams,
    file: dummyFiles,
    flag: dummyFlags,
  }

  const mockItem = sourceData[type][index % sourceData[type].length]

  return {
    ...mockItem,
    src:
      "src" in mockItem && mockItem.src
        ? mockItem.src + "?t=" + index
        : undefined,
  } as T extends "person"
    ? PersonAvatarVariant
    : T extends "company"
      ? CompanyAvatarVariant
      : T extends "team"
        ? TeamAvatarVariant
        : T extends "flag"
          ? FlagAvatarVariant
          : T extends "file"
            ? FileAvatarVariant
            : never
}

function getDummyAvatars<
  T extends "person" | "company" | "team" | "flag" | "file" = "person",
>(
  count: number,
  type: T
): T extends "person"
  ? PersonAvatarVariant[]
  : T extends "company"
    ? CompanyAvatarVariant[]
    : T extends "team"
      ? TeamAvatarVariant[]
      : T extends "flag"
        ? FlagAvatarVariant[]
        : T extends "file"
          ? FileAvatarVariant[]
          : never {
  const mockList = Array.from({ length: count }, (_, index) =>
    getDummyAvatar(type, index)
  )

  return mockList as unknown as T extends "person"
    ? PersonAvatarVariant[]
    : T extends "company"
      ? CompanyAvatarVariant[]
      : T extends "team"
        ? TeamAvatarVariant[]
        : T extends "flag"
          ? FlagAvatarVariant[]
          : T extends "file"
            ? FileAvatarVariant[]
            : never
}

const meta: Meta<typeof F0AvatarList> = {
  component: F0AvatarList,
  title: "Avatars/AvatarList",
  tags: ["stable", "!autodocs"],
  args: {
    size: "md",
    type: "person",
    avatars: getDummyAvatars(3, "person"),
    noTooltip: false,
  },
  parameters: {
    docs: {
      description: {
        component: [
          "An avatar component that displays a list of avatars of the same type.",
        ]
          .map((line) => `<p>${line}</p>`)
          .join(""),
      },
    },
    layout: "centered",
  },
  argTypes: {
    ...getBaseAvatarArgTypes(["aria-label", "aria-labelledby"]),
    size: {
      control: "select",
      options: avatarListSizes,
      description: "The size of the avatars in the list",
    },
    type: {
      control: "select",
      options: avatarVariants,
      description: "The type of the avatars in the list",
    },
  },
} satisfies Meta<typeof F0AvatarList>

export default meta

type Story = StoryObj<typeof F0AvatarList>

export const Default: Story = {
  args: { max: 3 },
}

/**
 * A list is homogeneous: every avatar shares the same `type`. AvatarList
 * supports `person`, `team`, `company`, `flag` and `file`.
 */
export const AllTypes: Story = {
  render: () => (
    <div className="flex flex-row flex-wrap items-start gap-8">
      {avatarVariants.map((type) => (
        <div key={type} className="flex flex-col gap-1">
          <span className="text-sm capitalize text-f1-foreground-secondary">
            {type}
          </span>
          <F0AvatarList
            type={type}
            size="md"
            max={3}
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            avatars={getDummyAvatars(3, type) as any}
          />
        </div>
      ))}
    </div>
  ),
}

export const WithRemainingCount: Story = {
  args: {
    type: "person",
    avatars: getDummyAvatars(7, "person"),
    remainingCount: 10,
  },
}

const personEmails = [
  "lionel.messi@example.com",
  "ada.lovelace@example.com",
  "marie.curie@example.com",
  "alan.turing@example.com",
  "grace.hopper@example.com",
]

function getDummyPeopleWithDescriptions(count: number) {
  return getDummyAvatars(count, "person").map((avatar, index) => ({
    ...avatar,
    tooltipDescription: personEmails[index % personEmails.length],
  }))
}

/**
 * Avatars can carry a `tooltipDescription` (e.g. an email or role) that is
 * rendered as the secondary line of the per-avatar tooltip. Hover any avatar
 * to see the description.
 */
export const WithTooltipDescription: Story = {
  args: {
    type: "person",
    avatars: getDummyPeopleWithDescriptions(3),
    max: 3,
  },
}

/**
 * Hovering the `+N` counter opens a popover listing the hidden avatars by name.
 * The popover caps its height and scrolls by default (`tooltipScroll="vertical"`).
 */
export const OverflowPopover: Story = {
  args: {
    type: "person",
    avatars: getDummyAvatars(15, "person"),
    max: 3,
  },
}

export const Snapshot: Story = {
  parameters: withSnapshot({}),
  render: () => (
    <div className="flex w-fit gap-10">
      <section className="mb-8">
        <h4 className="mb-4 text-lg font-semibold">All avatars visible</h4>

        {avatarVariants.map((type) => (
          <React.Fragment key={`${type}-3`}>
            <h5 className="mb-2 text-lg font-semibold">{type}</h5>
            <div key={`${type}-3`} className="flex w-fit flex-col gap-2">
              {avatarListSizes.map((size, idx) => (
                <div key={`${type}-${size}-3-${idx}`} className="mb-3">
                  <F0AvatarList
                    size={size}
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    avatars={getDummyAvatars(3, type) as any}
                    type={type}
                  />
                </div>
              ))}
            </div>
          </React.Fragment>
        ))}
      </section>

      <section>
        <h4 className="text-lg font-semibold">Overflow</h4>
        {avatarVariants.map((type) => (
          <div key={`overflow-${type}`} className="flex w-fit flex-col gap-2">
            {avatarListSizes.map((size, idx) => (
              <div
                key={`${type}-${size}-10-${idx}`}
                className="mb-3 max-w-[270px]"
              >
                <F0AvatarList
                  size={size}
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  avatars={getDummyAvatars(20, type) as any}
                  type={type}
                />
              </div>
            ))}
          </div>
        ))}
      </section>
    </div>
  ),
}
