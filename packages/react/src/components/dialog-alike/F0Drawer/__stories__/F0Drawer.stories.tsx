import type { Meta, StoryObj } from "@storybook/react-vite"

import { ComponentProps, FC, useState } from "react"
import { F0Button } from "@/components/F0Button"
import { ResourceHeader } from "@/patterns/ResourceHeader"
import { Default as ResourceHeaderDefault } from "@/patterns/ResourceHeader/index.stories"
import {
  OnePersonListItem,
  OnePersonListItemProps,
} from "@/experimental/Lists/OnePersonListItem"
import { Default as OnePersonListItemDefault } from "@/experimental/Lists/OnePersonListItem/index.stories"
import { Placeholder } from "@/icons/app"
import SaveIcon from "@/icons/app/Save"
import ShareIcon from "@/icons/app/Share"
import { dataTestIdArgs } from "@/lib/data-testid/__stories__/args"
import { withSnapshot } from "@/lib/storybook-utils/parameters"
import { fakePeople } from "@/mocks/people"
import { ApplicationFrame } from "@/patterns/ApplicationFrame"
import { Page } from "@/patterns/Navigation/Page"
import * as PageStories from "@/patterns/Navigation/Page/index.stories"
import * as SidebarStories from "@/patterns/Navigation/Sidebar/index.stories"
import { Sidebar } from "@/patterns/Navigation/Sidebar/Sidebar"

import { getDialogAlikeArgTypes } from "../../common/__stories__/argsTypes"
import { OTHER_ACTIONS, TABS } from "../../common/__stories__/mocks"
import { DrawerControls, F0Drawer } from "../index"
import { drawerSizes } from "../types"

const meta: Meta<typeof F0Drawer> = {
  title: "Components/Drawer",
  component: F0Drawer,
  parameters: {
    layout: "fullscreen",
    docs: {
      story: { inline: false, height: "720px" },
      description: {
        component: [
          "<p>F0Drawer is a component that provides a drawer interface for the application. It is used to display a drawer to the user.</p>",
        ].join(""),
      },
    },
  },
  tags: ["autodocs", "experimental"],
  argTypes: {
    ...getDialogAlikeArgTypes({
      componentName: "drawer",
      exclude: ["size"],
    }),
    size: {
      description: "The size of the drawer.",
      control: "select",
      options: drawerSizes,
      table: {
        type: { summary: drawerSizes.join(" | ") },
        defaultValue: { summary: "md" },
      },
    },
    ...dataTestIdArgs,
  },
  decorators: [
    (Story, context) => {
      const {
        args: { isOpen, ...rest },
        parameters,
      } = context
      const [open, setOpen] = useState(isOpen)

      const handleClose = () => {
        setOpen(false)
      }
      const handleOpen = () => {
        setOpen(true)
      }

      // Stories that build their own ApplicationFrame (e.g. the sidebar
      // showcase) opt out of the default open-button + centering wrapper and
      // drive the drawer themselves.
      if (parameters.standaloneFrame) {
        return <Story />
      }

      return (
        <div className="flex flex-1 items-center justify-center rounded-md border border-solid border-f1-border-secondary bg-f1-background">
          <F0Button label="Open drawer" onClick={handleOpen} />
          <Story args={{ ...rest, isOpen: open, onClose: handleClose }} />
        </div>
      )
    },
  ],
}

export default meta
type Story = StoryObj<typeof F0Drawer>

const ExampleList = ({ itemsCount = 20 }: { itemsCount?: number }) => (
  <div className="flex flex-col gap-4">
    {Array.from({ length: itemsCount }, (_, i) => (
      <div
        key={i}
        className="rounded-sm border border-solid border-f1-border-secondary p-4"
      >
        List Item {i + 1}
      </div>
    ))}
  </div>
)

export const Default: Story = {
  parameters: withSnapshot({}),
  args: {
    isOpen: true,
    onClose: () => {},
    title: "Team Status",
    otherActions: OTHER_ACTIONS,
    primaryAction: {
      label: "submit",
      icon: Placeholder,
      onClick: () => {},
      closeOnClick: true,
    },
    children: <ExampleList itemsCount={20} />,
  },
}

export const LeftPosition: Story = {
  parameters: withSnapshot({}),
  args: {
    ...Default.args,
    position: "left",
  },
}

export const WithPromisePrimaryAction: Story = {
  args: {
    ...Default.args,
    primaryAction: {
      label: "submit",
      icon: Placeholder,
      onClick: () =>
        new Promise((resolve) => setTimeout(() => resolve(), 5000)),
      closeOnClick: true,
    },
  },
}

export const Modal: Story = {
  args: {
    ...Default.args,
    modal: true,
  },
}
export const WithDescription: Story = {
  parameters: withSnapshot({}),
  args: {
    isOpen: true,
    onClose: () => {},
    title: "Team Status",
    description:
      "This is a description of the team status. Very long text that should wrap properly and not overflow the container boundaries.",
    otherActions: OTHER_ACTIONS,
    tabs: TABS,
    children: <ExampleList />,
  },
}

const ExamplePersonList: FC<{ numberOfItems?: number }> = ({
  numberOfItems = 20,
}) => (
  <div className="flex flex-col gap-0.5">
    {Array.from({ length: numberOfItems }, (_, i) => (
      <OnePersonListItem
        key={i}
        {...(OnePersonListItemDefault.args as OnePersonListItemProps)}
      />
    ))}
  </div>
)

export const WithPersonListItems: Story = {
  args: {
    ...Default.args,
    tabs: TABS,
    children: <ExamplePersonList />,
  },
}

export const WithMultiplePrimaryActions: Story = {
  args: {
    isOpen: true,
    onClose: () => {},
    title: "Document Editor",
    description: "Edit your document and choose how to save it.",
    primaryAction: [
      {
        value: "save",
        label: "Save",
        icon: SaveIcon,
        onClick: () => console.log("Save clicked"),
        closeOnClick: true,
      },
      {
        value: "save-draft",
        label: "Save as draft",
        onClick: () => console.log("Save as draft clicked"),
        closeOnClick: true,
      },
      {
        value: "save-publish",
        label: "Save and publish",
        icon: ShareIcon,
        onClick: () => console.log("Save and publish clicked"),
        closeOnClick: true,
      },
    ],
    secondaryAction: {
      label: "Cancel",
      onClick: () => {},
    },
    children: <ExampleList itemsCount={3} />,
  },
  parameters: withSnapshot({
    docs: {
      description: {
        story:
          "When `primaryAction` receives an array of actions, it renders a `F0ButtonDropdown` allowing the user to select between multiple primary actions.",
      },
    },
  }),
}

export const WithModuleAndTabs: Story = {
  parameters: withSnapshot({}),
  args: {
    ...Default.args,
    title: "Team Status",
    module: {
      id: "benefits",
      label: "Benefits",
      href: "/benefits",
    },
    otherActions: OTHER_ACTIONS,
    tabs: TABS,
    children: <ExamplePersonList />,
  },
}

export const WithResourceHeader: Story = {
  parameters: withSnapshot({}),
  args: {
    ...Default.args,
    position: "right",
    title: "Resource Header",
    module: {
      id: "timeoff",
      label: "Time Off",
      href: "/timeoff",
    },
    children: (
      <ResourceHeader
        {...(ResourceHeaderDefault.args as ComponentProps<
          typeof ResourceHeader
        >)}
        primaryAction={undefined}
        secondaryActions={undefined}
        otherActions={undefined}
      />
    ),
  },
}

// ─── Resource-aware header stories ────────────────────────────────────────────

const CANDIDATE_RESOURCE_HEADER: ComponentProps<typeof ResourceHeader> = {
  title: fakePeople.bruno.fullName,
  description: "Senior Product Designer",
  avatar: {
    type: "person",
    firstName: fakePeople.bruno.firstName,
    lastName: fakePeople.bruno.lastName,
    src: fakePeople.bruno.image,
  },
  status: {
    label: "Stage",
    text: "Interview",
    variant: "warning",
    actions: [],
  },
  metadata: [
    {
      label: "Applied",
      value: { type: "date", formattedDate: "2026-05-12" },
    },
    {
      label: "Manager",
      value: {
        type: "avatar",
        variant: {
          type: "person",
          firstName: fakePeople.noor.firstName,
          lastName: fakePeople.noor.lastName,
          src: fakePeople.noor.image,
        },
        text: fakePeople.noor.fullName,
      },
    },
  ],
}

/**
 * `navigation` in the standard title row — useful when the drawer shows
 * one item from a list and the user should be able to step through
 * without closing and reopening.
 */
export const WithNavigation: Story = {
  args: {
    ...Default.args,
    title: "Team Status",
    navigation: {
      previous: { title: "Previous item", onClick: () => {} },
      next: { title: "Next item", onClick: () => {} },
      counter: { current: 3, total: 10 },
    },
  },
  parameters: withSnapshot({
    docs: {
      description: {
        story:
          "Pass `navigation` to render prev/next arrows and an optional counter beside the close button in the standard title row.",
      },
    },
  }),
}

/**
 * `resourceHeader` renders the resource identity band (avatar, title,
 * description, status, metadata) directly in the header area instead of
 * composing it inside the body. No controls row — the close button sits alone
 * at the top right.
 *
 * Unlike composing a `<ResourceHeader>` inside `children` (see
 * `WithResourceHeader`), the band is owned by the dialog as **pinned header
 * chrome**: it stays fixed above the tabs while the body scrolls underneath.
 * The long list below makes that pinning visible.
 */
export const WithResourceHeaderProp: Story = {
  args: {
    ...Default.args,
    position: "right",
    title: fakePeople.bruno.fullName,
    resourceHeader: CANDIDATE_RESOURCE_HEADER,
    otherActions: OTHER_ACTIONS,
    tabs: TABS,
    children: <ExampleList itemsCount={30} />,
  },
  parameters: withSnapshot({
    docs: {
      description: {
        story:
          "Pass `resourceHeader` to render the identity band as pinned header chrome (vs. composing `<ResourceHeader>` in the body, which scrolls away). A visually-hidden `DialogTitle` keeps the accessible name, and `otherActions` appears in the top-right beside the close button. Scroll the body to see the band and tabs stay fixed.",
      },
    },
  }),
}

/**
 * Full resource-aware layout: a controls row owns the top chrome
 * (expand link + prev/next navigation), the identity band sits below it,
 * and tabs follow. This is the ATS-style application preview pattern.
 */
export const WithResourceControls: Story = {
  render: (args) => {
    const CANDIDATES = [
      fakePeople.bruno.fullName,
      fakePeople.noor.fullName,
      fakePeople.hana.fullName,
      fakePeople.caleb.fullName,
      fakePeople.yuki.fullName,
    ]

    const Wrapper = () => {
      const [open, setOpen] = useState(args.isOpen)
      const [index, setIndex] = useState(0)

      const controls: DrawerControls = {
        kind: "resource",
        expand: { label: "Open detail", onClick: () => {} },
        navigation: {
          previous:
            index > 0
              ? {
                  title: CANDIDATES[index - 1],
                  onClick: () => setIndex((i) => i - 1),
                }
              : undefined,
          next:
            index < CANDIDATES.length - 1
              ? {
                  title: CANDIDATES[index + 1],
                  onClick: () => setIndex((i) => i + 1),
                }
              : undefined,
          counter: { current: index + 1, total: CANDIDATES.length },
        },
      }

      return (
        <div className="flex flex-1 items-center justify-center rounded-md border border-solid border-f1-border-secondary bg-f1-background">
          <F0Button label="Open drawer" onClick={() => setOpen(true)} />
          <F0Drawer
            {...args}
            isOpen={open}
            onClose={() => setOpen(false)}
            title={CANDIDATES[index]}
            resourceHeader={{
              ...CANDIDATE_RESOURCE_HEADER,
              title: CANDIDATES[index],
            }}
            controls={controls}
            tabs={TABS}
          >
            <ExampleList itemsCount={6} />
          </F0Drawer>
        </div>
      )
    }

    return <Wrapper />
  },
  args: {
    isOpen: true,
    onClose: () => {},
    otherActions: OTHER_ACTIONS,
    disableContentPadding: false,
  },
  parameters: withSnapshot({
    docs: {
      description: {
        story:
          "`controls={{ kind: 'resource' }}` renders the top chrome row with an expand affordance and prev/next navigation. The identity band sits below. Click the arrows to step through items.",
      },
    },
  }),
}

/**
 * `controls={{ kind: "back" }}` represents a drilled-in sub-page inside
 * the same drawer — the left slot shows a back button instead of the
 * resource navigation.
 */
export const WithBackControls: Story = {
  args: {
    ...Default.args,
    position: "right",
    title: fakePeople.bruno.fullName,
    resourceHeader: CANDIDATE_RESOURCE_HEADER,
    controls: {
      kind: "back",
      label: "Back to candidates",
      onClick: () => {},
    },
    otherActions: OTHER_ACTIONS,
    children: <ExampleList itemsCount={6} />,
  },
  parameters: withSnapshot({
    docs: {
      description: {
        story:
          "`controls={{ kind: 'back' }}` is used when the drawer has drilled into a sub-page. The left slot shows a single back affordance; the identity band and close button remain.",
      },
    },
  }),
}

// ─── Drawer inside the app shell ──────────────────────────────────────────────

/**
 * The drawer rendered inside a real `ApplicationFrame`, to show how it sits
 * relative to the sidebar. Side drawers portal into `#content` (not the
 * top-level overlay root), so the drawer docks within the content area beside
 * the sidebar rather than covering the whole viewport. Use the `position`
 * control to switch sides.
 */
export const InApplicationFrame: Story = {
  parameters: { standaloneFrame: true, layout: "fullscreen" },
  args: {
    isOpen: true,
    onClose: () => {},
    position: "left",
    title: "Team Status",
    otherActions: OTHER_ACTIONS,
    primaryAction: {
      label: "submit",
      icon: Placeholder,
      onClick: () => {},
      closeOnClick: true,
    },
  },
  render: (args) => {
    const Wrapper = () => {
      const [open, setOpen] = useState(true)

      return (
        <ApplicationFrame
          sidebar={<Sidebar {...SidebarStories.default.args} />}
        >
          <Page {...PageStories.Default.args}>
            <div className="p-4">
              <F0Button label="Open drawer" onClick={() => setOpen(true)} />
            </div>
          </Page>
          <F0Drawer {...args} isOpen={open} onClose={() => setOpen(false)}>
            <ExampleList itemsCount={20} />
          </F0Drawer>
        </ApplicationFrame>
      )
    }

    return <Wrapper />
  },
}
