import type { Meta, StoryObj } from "@storybook/react-vite"

import { ComponentProps, FC, useState } from "react"
import { expect, within } from "storybook/test"

import { F0Button } from "@/components/F0Button"
import { ApplicationFrame } from "@/patterns/ApplicationFrame"
import ApplicationFrameStoryMeta from "@/patterns/ApplicationFrame/index.stories"
import { ResourceHeader } from "@/patterns/ResourceHeader"
import { Default as ResourceHeaderDefault } from "@/patterns/ResourceHeader/index.stories"
import {
  OnePersonListItem,
  OnePersonListItemProps,
} from "@/experimental/Lists/OnePersonListItem"
import { Default as OnePersonListItemDefault } from "@/experimental/Lists/OnePersonListItem/index.stories"
import { Placeholder } from "@/icons/app"
import CheckDoubleIcon from "@/icons/app/CheckDouble"
import CrossIcon from "@/icons/app/Cross"
import DeleteIcon from "@/icons/app/Delete"
import PencilIcon from "@/icons/app/Pencil"
import SaveIcon from "@/icons/app/Save"
import ShareIcon from "@/icons/app/Share"
import { dataTestIdArgs } from "@/lib/data-testid/__stories__/args"
import { ActivityItemList } from "@/sds/inbox/Activity/ActivityItemList"
import { Default as ActivityItemListDefault } from "@/sds/inbox/Activity/ActivityItemList/index.stories"

import { PaginatedFetchOptions, RecordType } from "@/hooks/datasource"
import {
  expectDialogPaintsAboveChat,
  FullscreenChatFrame,
} from "@/lib/storybook-utils/aiChatStacking"
import { useDataCollectionItemNavigation } from "@/patterns/OneDataCollection/hooks/useDataCollectionItemNavigation"

import { F0Dialog } from "../index"
import { dialogPositions, dialogWidths } from "../types"

const meta: Meta<typeof F0Dialog> = {
  title: "Dialog",
  component: F0Dialog,
  parameters: {
    layout: "fullscreen",
    docs: {
      story: { inline: false, height: "720px" },
    },
  },
  tags: ["autodocs", "experimental"],
  argTypes: {
    position: {
      description: "The position of the dialog",
      control: {
        type: "select",
        options: dialogPositions,
      },
    },
    width: {
      description:
        "The width of the dialog. Applies to center and side panel positions (left/right)",
      control: {
        type: "select",
        options: dialogWidths,
      },
      table: {
        type: { summary: "sm | md | lg | xl" },
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

      // Stories that build their own ApplicationFrame (e.g. the fullscreen AI
      // chat stacking demo) opt out of the default frame + open-button wrapper.
      if (parameters.standaloneFrame) {
        return <Story />
      }

      return (
        <ApplicationFrame
          {...(ApplicationFrameStoryMeta.args as ComponentProps<
            typeof ApplicationFrame
          >)}
        >
          <div className="flex flex-1 items-center justify-center rounded-md border border-solid border-f1-border-secondary bg-f1-background">
            <F0Button label="Open dialog" onClick={handleOpen} />
            <Story args={{ ...rest, isOpen: open, onClose: handleClose }} />
          </div>
        </ApplicationFrame>
      )
    },
  ],
}

export default meta
type Story = StoryObj<typeof F0Dialog>

const TABS = [
  {
    id: "out-of-office",
    label: "Out of office",
  },
  {
    id: "missing-clock-in",
    label: "Missing clock in",
  },
  {
    id: "clocked-in",
    label: "Clocked in",
  },
  {
    id: "in-a-break",
    label: "In a break",
  },
]

const OTHER_ACTIONS = [
  {
    label: "Edit",
    icon: PencilIcon,
    onClick: () => {},
  },
  {
    label: "Delete",
    icon: DeleteIcon,
    critical: true,
    onClick: () => {},
  },
]

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
  args: {
    isOpen: true,
    onClose: () => {},
    title: "Team Status",
    otherActions: OTHER_ACTIONS,
    primaryAction: {
      label: "submit",
      icon: Placeholder,
      onClick: () => {},
    },
    children: <ExampleList itemsCount={2} />,
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

export const WithSmWidth: Story = {
  args: {
    isOpen: true,
    width: "sm",
    onClose: () => {},
    title: "Team Status",
    otherActions: OTHER_ACTIONS,
    tabs: TABS,
    children: <ExampleList />,
  },
}

export const WithMdWidth: Story = {
  args: {
    ...WithSmWidth.args,
    width: "md",
  },
}

export const WithLgWidth: Story = {
  args: {
    ...WithMdWidth.args,
    width: "lg",
  },
}

export const WithXlWidth: Story = {
  args: {
    ...WithLgWidth.args,
    width: "xl",
  },
}
export const WithDescription: Story = {
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

export const WithLeftPosition: Story = {
  args: {
    ...Default.args,
    position: "left",
    title: "Activity",
    otherActions: OTHER_ACTIONS,
    children: (
      <ActivityItemList
        {...(ActivityItemListDefault.args as ComponentProps<
          typeof ActivityItemList
        >)}
      />
    ),
  },
}

export const WithRightPosition: Story = {
  args: {
    ...Default.args,
    position: "right",
  },
}

export const WithLeftPositionLgWidth: Story = {
  args: {
    ...WithLeftPosition.args,
    width: "lg",
  },
}

export const WithFullscreenPosition: Story = {
  args: {
    ...Default.args,
    position: "fullscreen",
  },
}

export const WithFullscreenPositionAndActions: Story = {
  args: {
    ...WithFullscreenPosition.args,
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
      },
      {
        value: "save-draft",
        label: "Save as draft",
        onClick: () => console.log("Save as draft clicked"),
      },
      {
        value: "save-publish",
        label: "Save and publish",
        icon: ShareIcon,
        onClick: () => console.log("Save and publish clicked"),
      },
    ],
    secondaryAction: {
      label: "Cancel",
      onClick: () => {},
    },
    children: <ExampleList itemsCount={3} />,
  },
  parameters: {
    docs: {
      description: {
        story:
          "When `primaryAction` receives an array of actions, it renders a `F0ButtonDropdown` allowing the user to select between multiple primary actions.",
      },
    },
  },
}

export const WithMultipleSecondaryActions: Story = {
  args: {
    isOpen: true,
    onClose: () => {},
    title: "Document Review",
    description: "Review the document details and choose an action.",
    primaryAction: {
      label: "Approve",
      icon: CheckDoubleIcon,
      onClick: () => {},
    },
    secondaryAction: [
      {
        value: "reject",
        label: "Reject",
        icon: CrossIcon,
        onClick: () => console.log("Reject clicked"),
      },
      {
        value: "request-changes",
        label: "Request changes",
        icon: PencilIcon,
        onClick: () => console.log("Request changes clicked"),
      },
    ],
    children: <ExampleList itemsCount={3} />,
  },
  parameters: {
    docs: {
      description: {
        story:
          "When `secondaryAction` receives an array of actions, it renders a `F0ButtonDropdown` (outline variant) allowing the user to select between multiple secondary actions. The first item is the default action.",
      },
    },
  },
}

export const WithModule: Story = {
  args: {
    ...Default.args,
    position: "right",
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

export const WithModuleAndFullscreenPosition: Story = {
  args: {
    ...WithModule.args,
    position: "fullscreen",
  },
}

export const WithResourceHeader: Story = {
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

export const WithResourceHeaderAndFullscreenPosition: Story = {
  args: {
    ...WithResourceHeader.args,
    position: "fullscreen",
  },
}

/**
 * Mounted-sidepanel navigation driven by `useDataCollectionItemNavigation` in
 * **callback mode**. The list on the left stays mounted; opening a row sets an
 * active id and the dialog shows that record. The header's
 * `controls={{ kind: "resource", navigation }}` is fed the hook's render-ready
 * `navigation` — but because the hook runs with `navigationMode: "callback"`,
 * the prev/next arrows call `goToPrevious`/`goToNext` and swap the active item
 * **in place, with no URL change / no remount** (the same `NavigationProps`
 * contract PageHeader uses in url mode). The `current/total` counter still
 * comes from the collection.
 *
 * The "Open detail" expand button is a real link to the active item's
 * `itemUrl` (the hook's `activeItemUrl`): in-place arrows for browsing,
 * `expand` to jump to the full-page view (cmd/middle-clickable).
 */
const SIDEPANEL_EMPLOYEES = Array.from({ length: 8 }, (_, i) => ({
  id: `${i + 1}`,
  name: `Employee ${i + 1}`,
  role: i % 2 === 0 ? "Engineer" : "Designer",
}))

const SIDEPANEL_COLLECTION_ID = "storybook/dialog-sidepanel-employees/v1"

const sidepanelSource = {
  // `itemUrl` powers the "Open detail" expand link (full-page view), while
  // the arrows navigate in place — both derived from the same declaration.
  itemUrl: (employee: RecordType) => `#/employees/${employee.id}`,
  // One declared page holds the whole set, so navigation resolves entirely
  // from the loaded window — the focus here is the callback arrows, not the
  // neighbors fallback (covered by the PageHeader story).
  dataAdapter: {
    paginationType: "pages" as const,
    perPage: 50,
    fetchData: (_options: PaginatedFetchOptions<Record<string, never>>) => ({
      type: "pages" as const,
      records: SIDEPANEL_EMPLOYEES,
      total: SIDEPANEL_EMPLOYEES.length,
      perPage: 50,
      currentPage: 1,
      pagesCount: 1,
    }),
  },
}

const MountedSidepanelDemo = (args: ComponentProps<typeof F0Dialog>) => {
  const [activeId, setActiveId] = useState<string | null>(null)

  const { navigation, activeItemUrl } = useDataCollectionItemNavigation({
    source: sidepanelSource,
    collectionId: SIDEPANEL_COLLECTION_ID,
    activeItemId: activeId,
    navigationMode: "callback",
    onActiveItemChange: (id) => setActiveId(id === null ? null : String(id)),
    getItemTitle: (employee) => String(employee.name),
  })

  const activeEmployee = SIDEPANEL_EMPLOYEES.find((e) => e.id === activeId)

  return (
    <div className="flex flex-col gap-2 p-4">
      <span className="text-sm text-f1-foreground-secondary">
        The list stays mounted; arrows in the panel navigate by id without
        changing the URL.
      </span>
      {SIDEPANEL_EMPLOYEES.map((employee) => (
        <F0Button
          key={employee.id}
          variant="outline"
          label={`${employee.name} — ${employee.role}`}
          onClick={() => setActiveId(employee.id)}
        />
      ))}
      <F0Dialog
        {...args}
        isOpen={activeId !== null}
        onClose={() => setActiveId(null)}
        title={activeEmployee?.name ?? "Employee"}
        controls={{
          kind: "resource",
          expand: activeItemUrl
            ? { label: "Open detail", url: activeItemUrl }
            : undefined,
          navigation: navigation ?? undefined,
        }}
      >
        <div className="flex flex-col gap-2 p-4">
          <div className="text-lg font-semibold text-f1-foreground">
            {activeEmployee?.name}
          </div>
          <div className="text-base text-f1-foreground-secondary">
            {activeEmployee?.role}
          </div>
        </div>
      </F0Dialog>
    </div>
  )
}

export const WithMountedSidepanelNavigation: Story = {
  args: {
    position: "right",
  },
  render: (args) => <MountedSidepanelDemo {...args} />,
}

export const WithFewItems: Story = {
  args: {
    ...Default.args,
    position: "right",
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

// --- Opening a dialog over the fullscreen AI chat ----------------------------
// Mounts the real ApplicationFrame with the AI chat locked open in fullscreen
// (painting at z-20 inside the isolate) and opens an F0Dialog on top of it.
// Center and fullscreen dialogs portal to the top-level `#f0-overlay-root`, so
// they — and their overlay — escape the isolate and render above the chat. The
// play function hit-tests the dialog card to confirm the chat never covers it.

const OVER_CHAT_TITLE = "On top of the fullscreen chat"

export const OverFullscreenAiChat: Story = {
  parameters: {
    standaloneFrame: true,
    layout: "fullscreen",
    docs: {
      description: {
        story:
          "A center F0Dialog opened while the AI chat is locked open in fullscreen. The chat paints at `z-20` inside the ApplicationFrame `isolate`; the dialog escapes to `#f0-overlay-root` so it renders above the chat instead of being trapped behind it in `#content`.",
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

export const FullscreenDialogOverFullscreenAiChat: Story = {
  parameters: {
    standaloneFrame: true,
    layout: "fullscreen",
    docs: {
      description: {
        story:
          'Same scenario with a `position="fullscreen"` dialog. It also portals to `#f0-overlay-root`, so it covers the fullscreen chat rather than being clipped by the isolate.',
      },
    },
  },
  args: {
    isOpen: true,
    onClose: () => {},
    position: "fullscreen",
    title: OVER_CHAT_TITLE,
    primaryAction: {
      label: "Got it",
      onClick: () => {},
    },
    children: <ExamplePersonList numberOfItems={3} />,
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
