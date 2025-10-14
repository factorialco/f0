import {
  avatarVariants,
  CompanyAvatarVariant,
  FileAvatarVariant,
  FlagAvatarVariant,
  PersonAvatarVariant,
  TeamAvatarVariant,
} from "@/components/avatars/F0Avatar"
import { withSnapshot } from "@/lib/storybook-utils/parameters"
import type { Meta, StoryObj } from "@storybook/react-vite"
import React from "react"
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
    terminated: true,
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
  { name: "flag", flag: "es" },
  { name: "flag", flag: "fr" },
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
  tags: ["autodocs"],
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
  decorators: [
    (Story) => (
      <div className="w-[270px]">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof F0AvatarList>

export default meta

type Story = StoryObj<typeof F0AvatarList>

export const Default: Story = {}

export const Companies: Story = {
  args: {
    size: "md",
    type: "company",
    avatars: getDummyAvatars(3, "company"),
  },
}

export const Teams: Story = {
  args: {
    size: "md",
    type: "team",
    avatars: getDummyAvatars(3, "team"),
  },
}

export const WithMaxAvatars: Story = {
  args: {
    ...Default.args,
    type: "person",
    avatars: getDummyAvatars(50, "person"),
    max: 3,
  },
}

export const LargeAvatarsList: Story = {
  args: {
    type: "person",
    avatars: getDummyAvatars(50, "person"),
  },
}

export const CompaniesWithMaxAvatars: Story = {
  args: {
    ...Companies.args,
    type: "company",
    avatars: getDummyAvatars(50, "company"),
    max: 3,
  },
}

export const WithRemainingCount: Story = {
  args: {
    ...Default.args,
    type: "person",
    avatars: getDummyAvatars(7, "person"),
    remainingCount: 10,
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
