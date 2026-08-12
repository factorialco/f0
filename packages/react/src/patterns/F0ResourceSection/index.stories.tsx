import type { Meta, StoryObj } from "@storybook/react-vite"

import { expect, fn, userEvent, within } from "storybook/test"

import { Pencil } from "@/icons/app"
import { withSnapshot } from "@/lib/storybook-utils/parameters"

import { F0ResourceSection } from "./index"

const meta = {
  title: "Resource section",
  component: F0ResourceSection,
  // Manual MDX lives next to this file, so autodocs is opted out of.
  tags: ["experimental", "!autodocs"],
  parameters: {
    // Padded, not fullscreen: fullscreen makes the Storybook provider paint
    // the gray app canvas behind the story, which reads as the component
    // having a gray background.
    layout: "padded",
  },
  argTypes: {
    header: {
      description:
        "The section's header. Omit it and the section is just the items",
    },
    variant: {
      description:
        "What the section holds: `details` for label and value fields, `cards` for a grid of things you can open",
    },
    columns: {
      description:
        "How many columns the fields arrange into, in the details variant. Always one below the breakpoint where the resource header stacks",
    },
    children: {
      description:
        "`F0ResourceSection.Item` elements, or `F0ResourceSection.Card` ones in the cards variant",
    },
  },
} satisfies Meta<typeof F0ResourceSection>

export default meta
type Story = StoryObj<typeof meta>

const workItems = (
  <>
    <F0ResourceSection.Item
      label="Email"
      content={{
        type: "item",
        text: "angel.moreno@factorial.co",
        action: { type: "copy" },
      }}
    />
    <F0ResourceSection.Item
      label="Manager"
      content={{
        type: "person",
        firstName: "Alberto",
        lastName: "Martínez",
        avatarUrl: "/avatars/person01.jpg",
      }}
    />
    <F0ResourceSection.Item label="Personal email" />
    <F0ResourceSection.Item
      label="Legal entity"
      content={{ type: "item", text: "Everyday Software SL" }}
    />
    <F0ResourceSection.Item label="Employee company identifier" />
    <F0ResourceSection.Item label="Seniority date" />
  </>
)

const workHeader = {
  title: "Work information",
  description: "Key details about the employee's role",
  action: { label: "Edit", icon: Pencil, onClick: fn() },
}

/** The `details` variant: label and value fields, the resource's own attributes. */
export const Details: Story = {
  args: {
    header: workHeader,
    children: workItems,
  },
}

/**
 * The `cards` variant: a grid of things the reader can open, rather than fields
 * they read. Each card is an `F0Card`, the same card the data collection's card
 * view renders, so a team looks the same here as it does anywhere else.
 */
export const Cards: Story = {
  args: {
    variant: "cards",
    header: {
      title: "Teams",
      description: "The teams Angel belongs to",
      action: { label: "Edit", icon: Pencil, onClick: fn() },
    },
    children: (
      <>
        <F0ResourceSection.Card
          title="Design"
          description="22 employees"
          avatar={{ type: "team", name: "Design" }}
          onClick={fn()}
        />
        <F0ResourceSection.Card
          title="Product"
          description="43 employees"
          avatar={{ type: "team", name: "Product" }}
          onClick={fn()}
        />
        <F0ResourceSection.Card
          title="Squad/Talent/Foundations"
          description="14 employees"
          avatar={{ type: "team", name: "Squad Talent Foundations" }}
          onClick={fn()}
        />
        <F0ResourceSection.Card
          title="Office/Remote"
          description="182 employees"
          avatar={{ type: "team", name: "Office Remote" }}
          onClick={fn()}
        />
      </>
    ),
  },
}

/**
 * A header can carry a title alone. The description renders nothing when it is
 * omitted, so the heading stays tight to the items.
 */
export const TitleOnly: Story = {
  args: {
    header: { title: "Personal" },
    children: (
      <>
        <F0ResourceSection.Item
          label="First name"
          content={{ type: "item", text: "Angel" }}
        />
        <F0ResourceSection.Item
          label="Last name"
          content={{ type: "item", text: "Moreno" }}
        />
        <F0ResourceSection.Item label="Preferred name" />
        <F0ResourceSection.Item label="Pronouns" />
      </>
    ),
  },
}

/** Without a header, for a section that sits under a heading of its own. */
export const WithoutHeader: Story = {
  args: {
    children: workItems,
  },
}

/** One column, for narrow places like a side rail. */
export const SingleColumn: Story = {
  args: {
    header: {
      title: "Work information",
      description: "Key details about the employee's role",
    },
    columns: 1,
    children: workItems,
  },
}

/**
 * Values are not only text. Anything `DetailsItem` renders works here: people,
 * teams, tags, weekdays, files, and values that copy or link on click.
 */
export const ValueTypes: Story = {
  args: {
    header: { title: "Value types" },
    children: (
      <>
        <F0ResourceSection.Item
          label="Copies on click"
          content={{
            type: "item",
            text: "angel.moreno@factorial.co",
            action: { type: "copy" },
          }}
        />
        <F0ResourceSection.Item
          label="Links somewhere"
          content={{
            type: "item",
            text: "Everyday Software SL",
            action: { type: "navigate", href: "#" },
          }}
        />
        <F0ResourceSection.Item
          label="Teams"
          content={[
            { type: "team", name: "Payroll" },
            { type: "team", name: "Platform" },
          ]}
        />
        <F0ResourceSection.Item
          label="Status"
          content={{ type: "status-tag", text: "Active", variant: "positive" }}
        />
      </>
    ),
  },
}

/**
 * Items are children, so a field that only sometimes applies is a plain
 * conditional rather than a list built up beforehand.
 */
export const Composed: Story = {
  args: {
    header: { title: "Composed from conditions" },
    children: (
      <>
        <F0ResourceSection.Item
          label="Always shown"
          content={{ type: "item", text: "A value" }}
        />
        {false && <F0ResourceSection.Item label="Never shown" />}
        {true && (
          <F0ResourceSection.Item
            label="Shown when it applies"
            content={{ type: "item", text: "Another value" }}
          />
        )}
      </>
    ),
  },
}

/**
 * How sections actually appear: stacked straight into the page with no gap on
 * the container, because each section brings its own separation. Adding a gap
 * here would stack on top of that and pull the rules away from the sections
 * they close.
 */
export const Stacked: Story = {
  args: { children: workItems },
  render: (args) => (
    <>
      <F0ResourceSection {...args} header={workHeader} />
      <F0ResourceSection
        {...args}
        header={{
          title: "Personal",
          description: "Essential information about the individual",
        }}
      />
    </>
  ),
}

export const HeaderActionRuns: Story = {
  args: {
    header: workHeader,
    children: workItems,
  },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement)

    // SectionHeader renders the action twice, once per breakpoint. The last is
    // the desktop instance, which is the visible one here.
    const editButtons = canvas.getAllByRole("button", { name: "Edit" })
    await userEvent.click(editButtons[editButtons.length - 1])
    await expect(args.header?.action?.onClick).toHaveBeenCalled()
  },
}

export const Snapshot: Story = {
  tags: ["no-sidebar"],
  parameters: withSnapshot({}),
  args: { children: workItems },
  // No container gap: the sections space themselves.
  render: (args) => (
    <>
      <F0ResourceSection {...args} header={workHeader} />
      <F0ResourceSection {...args} header={{ title: "Personal" }} />
      <F0ResourceSection {...args} columns={1} />
      <F0ResourceSection {...args} />
    </>
  ),
}
