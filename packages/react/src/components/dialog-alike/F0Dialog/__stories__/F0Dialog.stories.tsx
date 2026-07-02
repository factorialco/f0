import type { Meta, StoryObj } from "@storybook/react-vite"

import { ComponentProps, FC, useState } from "react"
import { expect, within } from "storybook/test"

import { F0Button } from "@/components/F0Button"
import {
  OnePersonListItem,
  OnePersonListItemProps,
} from "@/experimental/Lists/OnePersonListItem"
import { Default as OnePersonListItemDefault } from "@/experimental/Lists/OnePersonListItem/index.stories"
import { Placeholder } from "@/icons/app"
import CheckDoubleIcon from "@/icons/app/CheckDouble"
import CrossIcon from "@/icons/app/Cross"
import SaveIcon from "@/icons/app/Save"
import ShareIcon from "@/icons/app/Share"
import {
  expectDialogPaintsAboveChat,
  FullscreenChatFrame,
} from "@/lib/storybook-utils/aiChatStacking"
import { withSnapshot } from "@/lib/storybook-utils/parameters"

import { getDialogAlikeArgTypes } from "../../common/__stories__/argsTypes.ts"
import { OTHER_ACTIONS, TABS } from "../../common/__stories__/mocks.ts"
import { F0Dialog } from "../index"
import { DialogNotificationInternal } from "../internal/DialogNotification"
import { dialogSizes } from "../types"

const meta: Meta<typeof F0Dialog> = {
  title: "Dialog",
  component: F0Dialog,
  parameters: {
    layout: "fullscreen",
    docs: {
      story: { inline: false, height: "720px" },
      description: {
        component: [
          "<p>F0Dialog is a component that provides a dialog interface for the application. It is used to display a dialog to the user.</p>",
          "<div class='mt-2 bg-f1-background-secondary p-3 rounded-md'>Check the <a href='/docs/hooks/dialogs'>useDialog</a> before using this component.</div>",
        ].join(""),
      },
    },
  },
  tags: ["!autodocs", "experimental"],
  argTypes: {
    ...getDialogAlikeArgTypes({
      componentName: "dialog",
    }),
    disableContentPadding: {
      description: "Disable the default padding from the dialog content area",
      control: "boolean",
      table: { defaultValue: { summary: "false" } },
    },
    type: {
      description:
        "The type of the dialog. It changes the primary action variant.",
      control: "select",
      options: ["default", "critical"],
      table: { defaultValue: { summary: "default" } },
    },
    size: {
      description: "The size of the dialog.",
      control: "select",
      options: dialogSizes,
      table: {
        type: { summary: dialogSizes.join(" | ") },
        defaultValue: { summary: "md" },
      },
    },
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

      // Stories that build their own ApplicationFrame (e.g. the fullscreen AI
      // chat stacking demo) opt out of the default open-button + centering
      // wrapper and drive the dialog themselves.
      if (parameters.standaloneFrame) {
        return <Story />
      }

      return (
        <div className="flex flex-1 items-center justify-center rounded-md border border-solid border-f1-border-secondary bg-f1-background">
          <F0Button label="Open dialog" onClick={handleOpen} />
          <Story args={{ ...rest, isOpen: open, onClose: handleClose }} />
        </div>
      )
    },
  ],
}

export default meta
type Story = StoryObj<typeof F0Dialog>

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

export const WithDataTestId: Story = {
  args: {
    isOpen: true,
    onClose: () => {},
    title: "Dialog with Test ID",
    dataTestId: "my-test-dialog",
    children: <ExampleList itemsCount={2} />,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByTestId("my-test-dialog")).toBeInTheDocument()
  },
}

export const Notification: Story = {
  parameters: withSnapshot({}),
  args: {
    isOpen: true,
    onClose: () => {},
    title: "Team Status",
    children: <ExampleList itemsCount={20} />,
  },
  render: (args) => (
    <DialogNotificationInternal
      {...args}
      type="positive"
      title="Team Status"
      description="This is a description of the team status. Very long text that should wrap properly and not overflow the container boundaries."
      primaryAction={{
        label: "submit",
        icon: Placeholder,
        onClick: () => {},
        closeOnClick: true,
      }}
      secondaryAction={{
        label: "Cancel",
        icon: CrossIcon,
        onClick: () => {},
        closeOnClick: true,
      }}
    />
  ),
}

export const WithPromisePrimaryAction: Story = {
  args: {
    ...Default.args,
    primaryAction: {
      label: "submit",
      icon: Placeholder,
      onClick: () =>
        new Promise((resolve) => setTimeout(() => resolve(), 1000)),
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

export const WithSmSize: Story = {
  parameters: withSnapshot({}),
  args: {
    isOpen: true,
    size: "sm",
    onClose: () => {},
    title: "Team Status",
    otherActions: OTHER_ACTIONS,
    tabs: TABS,
    children: <ExampleList />,
  },
}

export const WithMdSize: Story = {
  parameters: withSnapshot({}),
  args: {
    ...WithSmSize.args,
    size: "md",
  },
}

export const WithLgSize: Story = {
  parameters: withSnapshot({}),
  args: {
    ...WithMdSize.args,
    size: "lg",
  },
}

export const WithXlSize: Story = {
  parameters: withSnapshot({}),
  args: {
    ...WithLgSize.args,
    size: "xl",
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

export const WithFullscreenSize: Story = {
  parameters: withSnapshot({}),
  args: {
    ...Default.args,
    size: "fullscreen",
  },
}

export const WithFullscreenSizeAndActions: Story = {
  parameters: withSnapshot({}),
  args: {
    ...WithFullscreenSize.args,
    tabs: TABS,
    primaryAction: {
      label: "Approve",
      icon: CheckDoubleIcon,
      onClick: () => {},
    },
    secondaryAction: {
      label: "Reject",
      icon: CrossIcon,
      onClick: () => {},
    },
    children: <ExamplePersonList numberOfItems={3} />,
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

export const WithModule: Story = {
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

export const WithModuleAndFullscreenSize: Story = {
  parameters: withSnapshot({}),
  args: {
    ...WithModule.args,
    size: "fullscreen",
  },
}

// --- Demo: portaling out of an app stacking context -------------------------
// Center modals portal to the top-level `#f0-overlay-root`, so they escape app
// stacking contexts. This story puts a tinted "AI canvas" panel at `z-[21]`
// inside a `relative isolate` container (mirroring ApplicationFrame, where the
// AI canvas/chat paint at z-20/z-21) and shows the dialog still renders on top.

const SimulatedCanvasLayer = () => (
  <div className="pointer-events-none absolute inset-0 z-[21] flex items-start justify-center bg-f1-background-secondary pt-6">
    <span className="rounded-md bg-f1-background px-3 py-1 font-medium shadow-md">
      Simulated AI canvas — z-21
    </span>
  </div>
)

const STACKING_DEMO_ARGS = {
  isOpen: true,
  onClose: () => {},
  primaryAction: {
    label: "Got it",
    onClick: () => {},
    closeOnClick: true,
  },
  children: <ExampleList itemsCount={3} />,
} satisfies Partial<ComponentProps<typeof F0Dialog>>

/**
 * Default behaviour: the dialog portals to `#f0-overlay-root` (outside the
 * isolate), so it renders **above** the z-21 panel.
 */
export const EscapesAppStackingContext: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "Center modals portal to the top-level `#f0-overlay-root`, escaping app stacking contexts. The tinted panel sits at `z-[21]` inside a `relative isolate` container (like ApplicationFrame's AI canvas/chat), yet the dialog renders on top because it lives outside that context. Before this fix the dialog was confined to `#content` inside the isolate and painted behind the panel.",
      },
    },
  },
  args: {
    ...STACKING_DEMO_ARGS,
    title: "I render above the z-21 layer",
    description:
      "Portaled to #f0-overlay-root, outside the simulated isolate stacking context.",
  },
  render: (args) => (
    <div className="relative isolate h-[560px] w-full overflow-hidden rounded-md border border-solid border-f1-border-secondary">
      <SimulatedCanvasLayer />
      <F0Dialog {...args} />
    </div>
  ),
}

// --- Opening a dialog over the real fullscreen AI chat -----------------------
// The previous story simulates the isolate with a tinted panel. This one mounts
// the actual ApplicationFrame with the AI chat locked open in fullscreen
// (painting at z-20 inside the isolate) and opens a center F0Dialog on top of
// it. The play function asserts the dialog stays above the chat.

const OVER_CHAT_TITLE = "On top of the fullscreen chat"

export const OverFullscreenAiChat: Story = {
  parameters: {
    standaloneFrame: true,
    layout: "fullscreen",
    docs: {
      description: {
        story:
          "Opens a center F0Dialog while the AI chat is locked open in fullscreen. The chat paints at `z-20` inside the ApplicationFrame `isolate`; the dialog escapes to `#f0-overlay-root` so it — and its overlay — render above the chat. The play function hit-tests the dialog card to confirm nothing from the chat paints over it.",
      },
    },
  },
  args: {
    isOpen: true,
    onClose: () => {},
    title: OVER_CHAT_TITLE,
    description: "The dialog and its overlay sit above the fullscreen chat.",
    primaryAction: {
      label: "Got it",
      onClick: () => {},
      closeOnClick: true,
    },
    children: <ExampleList itemsCount={3} />,
  },
  render: (args) => (
    <FullscreenChatFrame>
      <F0Dialog {...args} />
    </FullscreenChatFrame>
  ),
  play: async () => {
    await expectDialogPaintsAboveChat({ title: OVER_CHAT_TITLE })
  },
}
