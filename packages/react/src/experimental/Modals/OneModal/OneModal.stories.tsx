import { F0Button } from "@/components/F0Button"
import { ButtonInternal } from "@/components/F0Button/internal"
import { F0Select } from "@/components/F0Select"
import { ActivityItemList } from "@/experimental/Information/Activity/ActivityItemList"
import { Default as ActivityItemListDefault } from "@/experimental/Information/Activity/ActivityItemList/index.stories"
import { ResourceHeader } from "@/experimental/Information/Headers/ResourceHeader"
import { Default as ResourceHeaderDefault } from "@/experimental/Information/Headers/ResourceHeader/index.stories"
import {
  OnePersonListItem,
  OnePersonListItemProps,
} from "@/experimental/Lists/OnePersonListItem"
import { Default as OnePersonListItemDefault } from "@/experimental/Lists/OnePersonListItem/index.stories"
import { ApplicationFrame } from "@/experimental/Navigation/ApplicationFrame"
import ApplicationFrameStoryMeta from "@/experimental/Navigation/ApplicationFrame/index.stories"
import CheckDoubleIcon from "@/icons/app/CheckDouble"
import CrossIcon from "@/icons/app/Cross"
import DeleteIcon from "@/icons/app/Delete"
import PencilIcon from "@/icons/app/Pencil"
import type { Meta, StoryObj } from "@storybook/react-vite"
import { ComponentProps, FC, useState } from "react"
import { OneModal } from "."
import { modalPositions, modalWidths } from "./types"

const meta: Meta<typeof OneModal> = {
  title: "Modals/OneModal",
  component: OneModal,
  parameters: {
    layout: "fullscreen",
    docs: {
      story: { inline: false, height: "720px" },
    },
  },
  tags: ["autodocs", "experimental"],
  argTypes: {
    position: {
      description: "The position of the modal",
      control: {
        type: "select",
        options: modalPositions,
      },
    },
    width: {
      description: "The width of the modal. ⚠️ Only applies to center position",
      control: {
        type: "select",
        options: modalWidths,
      },
      table: {
        type: { summary: "sm | md | lg" },
        defaultValue: { summary: "md" },
      },
    },
  },
  decorators: [
    (Story, { args: { isOpen, ...rest } }) => {
      const [open, setOpen] = useState(isOpen)

      const handleClose = () => {
        setOpen(false)
      }
      const handleOpen = () => {
        setOpen(true)
      }

      return (
        <ApplicationFrame
          {...(ApplicationFrameStoryMeta.args as ComponentProps<
            typeof ApplicationFrame
          >)}
        >
          <div className="flex flex-1 items-center justify-center rounded-md border border-solid border-f1-border-secondary bg-f1-background">
            <F0Button label="Open modal" onClick={handleOpen} />
            <Story args={{ ...rest, isOpen: open, onClose: handleClose }} />
          </div>
        </ApplicationFrame>
      )
    },
  ],
}

export default meta
type Story = StoryObj<typeof OneModal>

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
    onClick: () => {},
  },
]

const ExampleList = ({ itemsCount = 20 }: { itemsCount?: number }) => (
  <div className="flex flex-col gap-4 p-4">
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
    children: (
      <>
        <OneModal.Header title="Team Status" otherActions={OTHER_ACTIONS} />
        <OneModal.Content tabs={TABS}>
          <ExampleList itemsCount={2} />
        </OneModal.Content>
      </>
    ),
  },
}

export const WithSmWidth: Story = {
  args: {
    isOpen: true,
    width: "sm",
    onClose: () => {},
    children: (
      <>
        <OneModal.Header title="Team Status" otherActions={OTHER_ACTIONS} />
        <OneModal.Content tabs={TABS}>
          <ExampleList />
        </OneModal.Content>
      </>
    ),
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

export const WithDescription: Story = {
  args: {
    isOpen: true,
    onClose: () => {},
    children: (
      <>
        <OneModal.Header
          title="Team Status"
          description="This is a description of the team status. Very long text that should wrap properly and not overflow the container boundaries."
          otherActions={OTHER_ACTIONS}
        />
        <OneModal.Content tabs={TABS}>
          <ExampleList />
        </OneModal.Content>
      </>
    ),
  },
}

const ExamplePersonList: FC<{ numberOfItems?: number }> = ({
  numberOfItems = 20,
}) => (
  <div className="flex flex-col gap-0.5 p-2">
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
    children: (
      <>
        <OneModal.Header title="Team Status" otherActions={OTHER_ACTIONS} />
        <OneModal.Content tabs={TABS}>
          <ExamplePersonList />
        </OneModal.Content>
      </>
    ),
  },
}

export const WithLeftPosition: Story = {
  args: {
    ...Default.args,
    position: "left",
    children: (
      <>
        <OneModal.Header title="Activity" otherActions={OTHER_ACTIONS} />
        <OneModal.Content>
          <ActivityItemList
            {...(ActivityItemListDefault.args as ComponentProps<
              typeof ActivityItemList
            >)}
          />
        </OneModal.Content>
      </>
    ),
  },
}

export const WithRightPosition: Story = {
  args: {
    ...Default.args,
    position: "right",
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
    children: (
      <>
        <OneModal.Header title="Team Status" otherActions={OTHER_ACTIONS} />
        <OneModal.Content tabs={TABS}>
          <ExamplePersonList numberOfItems={3} />
        </OneModal.Content>
        <OneModal.Footer>
          <div className="flex flex-1 flex-row gap-3">
            <ButtonInternal
              label="Approve"
              icon={CheckDoubleIcon}
              onClick={() => {}}
            />
            <ButtonInternal
              label="Reject"
              icon={CrossIcon}
              variant="critical"
              onClick={() => {}}
            />
          </div>
        </OneModal.Footer>
      </>
    ),
  },
}

export const WithModule: Story = {
  args: {
    ...Default.args,
    position: "right",
    children: (
      <>
        <OneModal.Header
          title="Team Status"
          module={{
            id: "benefits",
            label: "Benefits",
            href: "/benefits",
          }}
          otherActions={OTHER_ACTIONS}
        />
        <OneModal.Content tabs={TABS}>
          <ExamplePersonList />
        </OneModal.Content>
      </>
    ),
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
    children: (
      <>
        <OneModal.Header
          module={{
            id: "timeoff",
            label: "Time Off",
            href: "/timeoff",
          }}
        />
        <OneModal.Content withPadding>
          <ResourceHeader
            {...(ResourceHeaderDefault.args as ComponentProps<
              typeof ResourceHeader
            >)}
            primaryAction={undefined}
            secondaryActions={undefined}
            otherActions={undefined}
          />
        </OneModal.Content>
      </>
    ),
  },
}

export const WithResourceHeaderAndFullscreenPosition: Story = {
  args: {
    ...WithResourceHeader.args,
    position: "fullscreen",
  },
}

export const WithFewItems: Story = {
  args: {
    ...Default.args,
    position: "right",
    children: (
      <>
        <OneModal.Header title="Team Status" otherActions={OTHER_ACTIONS} />
        <OneModal.Content tabs={TABS}>
          <ExamplePersonList numberOfItems={3} />
        </OneModal.Content>
        <OneModal.Footer>
          <div className="flex flex-1 flex-row gap-3">
            <ButtonInternal
              label="Approve"
              icon={CheckDoubleIcon}
              onClick={() => {}}
            />
            <ButtonInternal
              label="Reject"
              icon={CrossIcon}
              variant="critical"
              onClick={() => {}}
            />
          </div>
        </OneModal.Footer>
      </>
    ),
  },
}

// Long text options for testing overflow and wrapping
const longTextOptions = [
  {
    value: "very-long-option-1",
    label:
      "This is an extremely long option text that should test if the dropdown properly expands and wraps within modal boundaries in different languages",
    description:
      "Additionally, this option has a very long description that should also wrap properly and not overflow the container boundaries",
  },
  {
    value: "very-long-option-2",
    label:
      "This is another extremely long option text that should test if the dropdown properly expands and wraps within modal boundaries when the content is very lengthy",
    description:
      "Additionally, this second option has a very long description that should also wrap properly and not overflow the container boundaries when displayed in a modal",
  },
  {
    value: "short-option",
    label: "Short",
  },
]

export const WithSelectInput: Story = {
  args: {
    isOpen: true,
    onClose: () => {},
    position: "center",
    children: (
      <>
        <OneModal.Header title="Select Component Example" />
        <OneModal.Content withPadding>
          <div className="space-y-4">
            <p className="text-sm text-f1-foreground-secondary">
              This demonstrates the Select component inside a modal with long
              text options.
            </p>
            <F0Select
              label="Choose an option (long text test)"
              placeholder="Select an option"
              showSearchBox
              options={longTextOptions}
              onChange={() => {}}
            />
          </div>
        </OneModal.Content>
      </>
    ),
  },
  parameters: {
    docs: {
      description: {
        story:
          "This story demonstrates the Select component inside a OneModal with very long text options in multiple languages. The dropdown should expand to fit content while staying within modal boundaries and properly wrapping long text.",
      },
    },
  },
}
