import type { Meta, StoryObj } from "@storybook/react-vite"

import { useEffect, useRef, useState } from "react"
import { expect, fn, userEvent, within } from "storybook/test"

import { F0Button } from "@/components/F0Button"
import { withSnapshot } from "@/lib/storybook-utils/parameters"
import { Reset, Save } from "@/icons/app"

import {
  ActionBarStatus,
  F0ActionBar,
  F0ActionBarRef,
  actionBarStatuses,
} from "."

const meta = {
  title: "ActionBar",
  component: F0ActionBar,
  parameters: {
    layout: "fullscreen",
    docs: {
      story: { inline: false, height: "400px" },
    },
    a11y: {
      skipCi: true,
    },
  },
  tags: ["!autodocs", "experimental"],
  argTypes: {
    anchor: {
      control: false,
      description: "Element whose horizontal bounds center the bar",
    },
    isOpen: {
      control: "boolean",
      description: "Controls the visibility of the action bar",
    },
    primaryActions: {
      control: false,
      description: "The primary action",
    },
    secondaryActions: {
      control: false,
      description: "The secondary actions",
    },
    label: {
      control: "text",
      description: "The label of the action bar",
    },
    status: {
      control: "select",
      options: [...actionBarStatuses],
      description: "The current status of the action bar",
    },
  },
} satisfies Meta<typeof F0ActionBar>

export default meta
type Story = StoryObj<typeof F0ActionBar>

export const Default: Story = {
  args: {
    isOpen: true,
    primaryActions: [
      {
        label: "Save changes",
        onClick: fn(),
        icon: Save,
      },
    ],
    secondaryActions: [
      {
        label: "Discard",
        onClick: fn(),
        icon: Reset,
      },
    ],
    label: "Unsaved changes",
  },
}

export const Idle: Story = {
  args: {
    isOpen: true,
    variant: "light",
    status: "idle",
    primaryActions: [
      {
        label: "Save",
        onClick: fn(),
        icon: Save,
      },
    ],
    secondaryActions: [
      {
        label: "Discard",
        onClick: fn(),
      },
    ],
    label: "You have changes pending to be saved",
  },
}

export const Loading: Story = {
  args: {
    isOpen: true,
    variant: "light",
    status: "loading",
    primaryActions: [
      {
        label: "Save",
        icon: Save,
      },
    ],
    secondaryActions: [
      {
        label: "Discard",
      },
    ],
    label: "Saving...",
  },
}

export const Success: Story = {
  args: {
    isOpen: true,
    variant: "light",
    status: "success",
    primaryActions: [
      {
        label: "Save",
        icon: Save,
      },
    ],
    secondaryActions: [
      {
        label: "Discard",
      },
    ],
    label: "Your changes have been saved",
  },
}

const StatusFlowDemo = () => {
  const [status, setStatus] = useState<ActionBarStatus>("idle")
  const [label, setLabel] = useState("You have changes pending to be saved")

  const handleSave = () => {
    setStatus("loading")
    setLabel("Saving...")
    setTimeout(() => {
      setStatus("success")
      setLabel("Your changes have been saved")
    }, 2000)
  }

  const handleDiscard = () => {
    setStatus("idle")
    setLabel("You have changes pending to be saved")
  }

  useEffect(() => {
    if (status === "success") {
      const timer = setTimeout(() => {
        setStatus("idle")
        setLabel("You have changes pending to be saved")
      }, 3000)
      return () => clearTimeout(timer)
    }
  }, [status])

  return (
    <F0ActionBar
      isOpen
      variant="light"
      status={status}
      label={label}
      primaryActions={[
        {
          label: "Save",
          icon: Save,
          onClick: handleSave,
        },
      ]}
      secondaryActions={[
        {
          label: "Discard",
          onClick: handleDiscard,
        },
      ]}
    />
  )
}

export const StatusFlow: Story = {
  render: () => <StatusFlowDemo />,
}

const ErrorWiggleDemo = () => {
  const actionBarRef = useRef<F0ActionBarRef>(null)

  return (
    <F0ActionBar
      ref={actionBarRef}
      isOpen
      variant="light"
      status="idle"
      label="You have changes pending to be saved"
      primaryActions={[
        {
          label: "Save",
          icon: Save,
          onClick: () => {
            actionBarRef.current?.wiggle({ errorHighlight: true })
          },
        },
      ]}
      secondaryActions={[
        {
          label: "Discard",
          onClick: fn(),
        },
      ]}
    />
  )
}

export const ErrorWiggle: Story = {
  render: () => <ErrorWiggleDemo />,
  parameters: {
    docs: {
      description: {
        story: "Click the Save button to trigger the error shake animation.",
      },
    },
  },
}

const ErrorStatusFlowDemo = () => {
  const actionBarRef = useRef<F0ActionBarRef>(null)
  const [status, setStatus] = useState<ActionBarStatus>("idle")
  const [label, setLabel] = useState("You have changes pending to be saved")
  const saveTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    return () => {
      if (saveTimeoutRef.current !== null) {
        clearTimeout(saveTimeoutRef.current)
      }
    }
  }, [])

  const handleSave = () => {
    if (saveTimeoutRef.current !== null) {
      clearTimeout(saveTimeoutRef.current)
    }

    setStatus("loading")
    setLabel("Saving...")

    saveTimeoutRef.current = setTimeout(() => {
      setStatus("error")
      setLabel("There was an error saving your changes")
      saveTimeoutRef.current = null
    }, 2000)
  }

  const handleDiscard = () => {
    if (saveTimeoutRef.current !== null) {
      clearTimeout(saveTimeoutRef.current)
      saveTimeoutRef.current = null
    }

    setStatus("idle")
    setLabel("You have changes pending to be saved")
  }

  return (
    <F0ActionBar
      ref={actionBarRef}
      isOpen
      variant="light"
      status={status}
      label={label}
      primaryActions={[
        {
          label: "Save",
          icon: Save,
          onClick: handleSave,
        },
      ]}
      secondaryActions={[
        {
          label: "Discard",
          onClick: handleDiscard,
        },
      ]}
    />
  )
}

export const ErrorStatusFlow: Story = {
  render: () => <ErrorStatusFlowDemo />,
  parameters: {
    docs: {
      description: {
        story:
          "Click Save to simulate a failed save: the bar shows a loading state, then transitions to error with a shake animation and persistent error styling.",
      },
    },
  },
}

/** The action bar follows the preview column as its neighboring catalog changes width. */
export const Anchored: Story = {
  args: { ...Default.args, isOpen: true, variant: "light", label: "1 change" },
  render: function AnchoredExample(args) {
    const [anchor, setAnchor] = useState<HTMLDivElement | null>(null)
    const [catalogOpen, setCatalogOpen] = useState(true)
    return (
      <div className="flex h-screen bg-f1-background-secondary">
        <aside className="flex flex-col gap-4 bg-f1-background p-4">
          <F0Button
            label="Toggle catalog"
            variant="outline"
            onClick={() => setCatalogOpen(!catalogOpen)}
          />
          {catalogOpen && <p>Available widgets</p>}
        </aside>
        <div
          ref={setAnchor}
          className="relative flex min-w-0 flex-1 justify-center p-6"
        >
          <p>Widget preview</p>
        </div>
        {anchor && <F0ActionBar {...args} anchor={anchor} />}
      </div>
    )
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await userEvent.click(
      canvas.getByRole("button", { name: "Toggle catalog" })
    )
    await expect(
      canvas.queryByText("Available widgets")
    ).not.toBeInTheDocument()
    const page = within(canvasElement.ownerDocument.body)
    await expect(page.getAllByText("1 change").length).toBeGreaterThan(0)
  },
}

export const Snapshot: Story = {
  ...Anchored,
  play: undefined,
  parameters: withSnapshot({}),
}
