import type { Meta, StoryObj } from "@storybook/react-vite"

import React from "react"
import { expect, userEvent, waitFor, within } from "storybook/test"

import {
  avatarVariants,
  CompanyAvatarVariant,
  FileAvatarVariant,
  FlagAvatarVariant,
  PersonAvatarVariant,
  TeamAvatarVariant,
} from "@/components/avatars/F0Avatar"
import { withSnapshot } from "@/lib/storybook-utils/parameters"

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

const meta = {
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
    // Load-bearing: without this key nothing here is gated at all.
    // `.storybook/preview.tsx:151` sets the global a11y test mode to non-
    // blocking and `test-runner.ts:262` reads the merged parameters, so its
    // `?? "error"` fallback never fires. Every story in this file is axe-clean,
    // including `OverflowPopover`, whose play opens the `+N` popover.
    //
    // Do not spell the non-blocking mode out literally anywhere in this file:
    // `a11yTierOf` (scripts/component-status-build.mjs) greps the file's text,
    // so the words in a comment would downgrade the component's DoD tier.
    a11y: { test: "error" },
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
    // No `getBaseAvatarArgTypes` spread: `aria-label`/`aria-labelledby` are not
    // part of `F0AvatarListProps` and `F0AvatarList.tsx` never destructures
    // them, so advertising them as controls was a knob that did nothing — and it
    // contradicted the Accessibility section, which says the label belongs on an
    // entry, not on the list.
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
  play: async ({ args, canvasElement, step }) => {
    const canvas = within(canvasElement)
    await step("renders one item per entry, none collapsed", async () => {
      // What AvatarList decides is how many entries stay visible (`max`/`min`,
      // F0AvatarList.tsx:69-76) — not what any single avatar looks like. So
      // count the rendered list items rather than asserting an initials string:
      // initials come from BaseAvatar's own algorithm and from whichever
      // fixture entry happens to lack a `src`, neither of which is this
      // component's contract. Deriving the expected count from `args` keeps
      // the assertion true if `meta.args` grows.
      //
      // `waitFor`, not a bare `getAllByTestId`: OverflowList renders skeleton
      // placeholders until it has measured the items and flipped
      // `isInitialized` (ui/OverflowList/index.tsx:180), so the first paint has
      // zero `overflow-visible-item` nodes. Asserting synchronously here fails
      // in a real browser even though jsdom happens to be fast enough.
      // 5s, not the 1s default: measuring is slow on a cold browser (observed
      // 0 items at 2.5s, 3 at 5s), and this play timed out in CI once already.
      await waitFor(
        () =>
          expect(canvas.getAllByTestId("overflow-visible-item")).toHaveLength(
            args.avatars.length
          ),
        { timeout: 5000 }
      )
      // `max` equals the number of avatars, so nothing collapses into `+N`.
      await expect(canvas.queryByText(/^\+\d+$/)).not.toBeInTheDocument()
    })
  },
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
 * The `+N` counter is a disclosure button: hover it, or reach it with Tab and
 * press Enter, and a popover lists the hidden avatars by name. The card is
 * capped at the available viewport height and its list scrolls — reachable by
 * keyboard, because opening from the keyboard moves focus into the card.
 */
export const OverflowPopover: Story = {
  args: {
    type: "person",
    avatars: getDummyAvatars(15, "person"),
    max: 3,
  },
  play: async ({ args, canvasElement, step }) => {
    const canvas = within(canvasElement)
    const max = args.max as number
    const collapsedCount = args.avatars.length - max

    await step("caps the visible row at `max`", async () => {
      // `max` also sets `min` (F0AvatarList.tsx:76), so exactly `max` avatars
      // stay visible however wide the container is. Same measurement race as
      // `Default`: wait for `isInitialized` to replace the skeletons.
      // Same cold-browser measurement race as `Default`; same 5s allowance.
      await waitFor(
        () =>
          expect(canvas.getAllByTestId("overflow-visible-item")).toHaveLength(
            max
          ),
        { timeout: 5000 }
      )
    })

    await step("the counter opens from the keyboard alone", async () => {
      // The regression this pins: the counter used to be a role-less <div>, so
      // it was not in the tab order at all and the collapsed names were
      // mouse-only (WCAG 2.1.1). No pointer anywhere in this step. Name it by
      // pattern, never by the literal "+12".
      const trigger = canvas.getByRole("button", { name: /^\+\d+ more$/ })
      await expect(trigger).toHaveAttribute("aria-expanded", "false")

      trigger.focus()
      await expect(trigger).toHaveFocus()
      await userEvent.keyboard("{Enter}")
      await waitFor(() =>
        expect(trigger).toHaveAttribute("aria-expanded", "true")
      )
    })

    await step("the counter discloses every collapsed entry", async () => {
      // The popover is portalled out of the canvas (ui/popover.tsx passes no
      // `container`), so scope to <body> and pick the open radix content. Then
      // count rows by the one avatar each row renders
      // (MaxCounter.tsx) — the number of rows is AvatarList's contract, whereas
      // a per-name multiplicity would just encode how many distinct people
      // `getDummyAvatars` cycles.
      const body = canvasElement.closest("body")!
      const popover = await waitFor(
        () => {
          const el = body.querySelector<HTMLElement>(
            '[data-radix-popper-content-wrapper] [data-state="open"]'
          )
          if (!el) throw new Error("the `+N` popover did not open")
          return el
        },
        { timeout: 3000 }
      )
      expect(popover.querySelectorAll('[role="img"]')).toHaveLength(
        collapsedCount
      )
    })
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
