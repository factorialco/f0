import type { Meta, StoryObj } from "@storybook/react-vite"

import { useState } from "react"

import { F0Button } from "@/components/F0Button"
import { Delete, Pencil, Save } from "@/icons/app"

import { F0Sidepanel } from "../index"
import { sidepanelSides, sidepanelWidths } from "../types"

const Demo = (
  props: Omit<React.ComponentProps<typeof F0Sidepanel>, "open" | "onClose">
) => {
  const [open, setOpen] = useState(false)

  return (
    <div className="flex h-[600px] items-center justify-center">
      <F0Button label="Open sidepanel" onClick={() => setOpen(true)} />
      <F0Sidepanel {...props} open={open} onClose={() => setOpen(false)} />
    </div>
  )
}

const meta: Meta<typeof Demo> = {
  title: "Components/F0Sidepanel",
  component: Demo,
  tags: ["autodocs", "experimental"],
  parameters: {
    layout: "fullscreen",
    docs: {
      story: { inline: false, height: "640px" },
    },
  },
  argTypes: {
    side: {
      description: "Which edge the sidepanel slides in from.",
      control: { type: "select" },
      options: sidepanelSides,
      table: { defaultValue: { summary: "right" } },
    },
    width: {
      description: "Width preset for the sidepanel.",
      control: { type: "select" },
      options: sidepanelWidths,
      table: { defaultValue: { summary: "narrow" } },
    },
    boxPadding: {
      description: "Apply default 24px padding around children.",
      control: { type: "boolean" },
      table: { defaultValue: { summary: "true" } },
    },
    overlay: {
      description: "Show the dimmed background overlay.",
      control: { type: "boolean" },
      table: { defaultValue: { summary: "true" } },
    },
    locked: {
      description: "Prevent closing via outside click / Esc.",
      control: { type: "boolean" },
    },
    allowBackgroundInteraction: {
      description:
        "Skip the overlay entirely so background remains interactive.",
      control: { type: "boolean" },
    },
    headerBorder: {
      description: "Show a bottom border on the header.",
      control: { type: "boolean" },
    },
    loading: {
      description:
        "Replace the header title and navigation controls with skeleton placeholders while data is loading. Close button and options menu stay functional.",
      control: { type: "boolean" },
      table: { defaultValue: { summary: "false" } },
    },
    title: {
      description:
        "Header title. Renders centered as a bold label when a string, or as-is when a ReactNode. Omit (or pass null) to use the title-less Figma layout.",
      control: { type: "text" },
      table: { type: { summary: "ReactNode" } },
    },
    closeLabel: {
      description:
        "Accessible label for the X button (used as aria-label and title).",
      control: { type: "text" },
      table: { defaultValue: { summary: '"Close"' } },
    },
    navigation: {
      description:
        "Page-stepping navigation rendered in the header (counter + previous/next chevrons). See `WithLiveNavigation` for a working example. Omit `previous` or `next` at boundaries to auto-disable the buttons.",
      control: { type: "object" },
      table: {
        type: {
          summary: "SidepanelNavigation",
          detail:
            "{ counter?: { current; total }, previous?: { onClick | url, title? }, next?: { onClick | url, title? } }",
        },
      },
    },
    options: {
      description:
        "Legacy actions menu rendered as a kebab dropdown on the right of the header.",
      control: { type: "object" },
      table: { type: { summary: "SidepanelOption[]" } },
    },
    footer: {
      description:
        "Footer slot, right-aligned with a top border. Typically used for primary/secondary action buttons.",
      control: false,
      table: { type: { summary: "ReactNode" } },
    },
    onCloseClicked: {
      description:
        "Fires immediately when the user requests close (X, outside click, Esc). `onClose` fires after the 200ms exit animation.",
      action: "closeClicked",
      table: { type: { summary: "() => void" } },
    },
  },
}

export default meta

type Story = StoryObj<typeof Demo>

const ExampleBody = () => (
  <div className="flex flex-col gap-3">
    {Array.from({ length: 12 }, (_, i) => (
      <div
        key={i}
        className="rounded-md border border-solid border-f1-border-secondary p-3"
      >
        Row {i + 1}
      </div>
    ))}
  </div>
)

export const Default: Story = {
  args: {
    width: "wide",
    children: <ExampleBody />,
  },
}

export const LeftSide: Story = {
  args: {
    side: "left",
    width: "wide",
    title: "Filters",
    headerBorder: true,
    children: <ExampleBody />,
  },
}

export const WithTitle: Story = {
  args: {
    width: "wide",
    title: "Ainhoa López",
    headerBorder: true,
    children: <ExampleBody />,
  },
}

export const WithFooter: Story = {
  args: {
    width: "wide",
    title: "Edit compensation",
    footer: (
      <>
        <F0Button variant="outline" label="Cancel" />
        <F0Button label="Save" icon={Save} />
      </>
    ),
    children: <ExampleBody />,
  },
}

export const WithNavigation: Story = {
  args: {
    width: "wide",
    headerBorder: true,
    navigation: {
      counter: { current: 1, total: 4 },
      previous: { onClick: () => {}, title: "Previous resource" },
      next: { onClick: () => {}, title: "Next resource" },
    },
    children: <ExampleBody />,
  },
}

const SAMPLE_EMPLOYEES = [
  { id: "1", name: "Ainhoa López", role: "Product Designer" },
  { id: "2", name: "Vincent Tang", role: "Engineering Manager" },
  { id: "3", name: "Sarah Mehta", role: "Senior Product Manager" },
  { id: "4", name: "Michael Roberts", role: "Staff Engineer" },
  { id: "5", name: "Charles Okafor", role: "Data Scientist" },
] as const

const LiveNavigationDemo = () => {
  const [currentIndex, setCurrentIndex] = useState<number | null>(null)
  const isOpen = currentIndex !== null
  const current = isOpen ? SAMPLE_EMPLOYEES[currentIndex] : null
  const total = SAMPLE_EMPLOYEES.length

  return (
    <div className="flex h-[600px] items-center justify-center">
      <F0Button
        label="Open first employee"
        onClick={() => setCurrentIndex(0)}
      />
      <F0Sidepanel
        open={isOpen}
        onClose={() => setCurrentIndex(null)}
        title={current?.name}
        width="wide"
        headerBorder
        navigation={{
          counter:
            currentIndex !== null
              ? { current: currentIndex + 1, total }
              : undefined,
          previous:
            currentIndex !== null && currentIndex > 0
              ? {
                  onClick: () => setCurrentIndex(currentIndex - 1),
                  title: "Previous employee",
                }
              : undefined,
          next:
            currentIndex !== null && currentIndex < total - 1
              ? {
                  onClick: () => setCurrentIndex(currentIndex + 1),
                  title: "Next employee",
                }
              : undefined,
        }}
      >
        {current && (
          <div className="flex flex-col gap-3">
            <p className="text-sm text-f1-foreground-secondary">
              Step through employees using the chevrons in the header. Buttons
              auto-disable at the start and end of the list.
            </p>
            <div className="rounded-md border border-solid border-f1-border-secondary p-4">
              <p className="text-base font-semibold text-f1-foreground">
                {current.name}
              </p>
              <p className="text-sm text-f1-foreground-secondary">
                {current.role}
              </p>
            </div>
          </div>
        )}
      </F0Sidepanel>
    </div>
  )
}

export const WithLiveNavigation: StoryObj = {
  render: () => <LiveNavigationDemo />,
  parameters: {
    docs: {
      description: {
        story:
          "Working example: open the sidepanel and step through a list of employees with the chevron buttons. Previous/next are omitted at the boundaries so the buttons disable automatically.",
      },
    },
  },
}

export const WithOptions: Story = {
  args: {
    width: "wide",
    title: "Resource",
    options: [
      { label: "Edit", icon: Pencil, onClick: () => {} },
      { label: "Delete", icon: Delete, critical: true, onClick: () => {} },
    ],
    children: <ExampleBody />,
  },
}

export const Locked: Story = {
  args: {
    width: "wide",
    title: "Locked",
    locked: true,
    children: (
      <p className="text-sm text-f1-foreground-secondary">
        Outside clicks and Escape are disabled — close via the X button.
      </p>
    ),
  },
}

export const WideXL: Story = {
  args: {
    width: "wideXL",
    title: "wideXL (800px)",
    children: <ExampleBody />,
  },
}

export const Extended: Story = {
  args: {
    width: "extended",
    title: "Extended (95% viewport)",
    children: <ExampleBody />,
  },
}

export const Loading: Story = {
  args: {
    width: "wide",
    loading: true,
    headerBorder: true,
    children: (
      <p className="text-sm text-f1-foreground-secondary">
        `loading={"{true}"}` only affects the header (title + navigation
        skeletons). Render your own body content here — or your own body-level
        skeleton — while data is loading.
      </p>
    ),
  },
  parameters: {
    docs: {
      description: {
        story:
          "Use `loading={true}` to swap the header title and navigation chevrons with skeleton placeholders while data is loading. The close button and options menu stay functional. Body and footer are unchanged — manage their loading state yourself.",
      },
    },
  },
}

export const NoOverlay: Story = {
  args: {
    width: "wide",
    title: "No backdrop",
    overlay: false,
    headerBorder: true,
    children: <ExampleBody />,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Use `overlay={false}` to hide the dimmed backdrop while keeping the panel modal. The user still can't reach the page underneath — outside-click and Escape still close the panel.",
      },
    },
  },
}

export const Floating: Story = {
  args: {
    width: "wide",
    title: "Floating panel",
    allowBackgroundInteraction: true,
    headerBorder: true,
    children: <ExampleBody />,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Use `allowBackgroundInteraction` for an inspector/utility panel that coexists with the page. No overlay, no modal focus trap — the user can scroll, click, and type behind the panel.",
      },
    },
  },
}

export const NoBoxPadding: Story = {
  args: {
    width: "wide",
    title: "Form owns its padding",
    boxPadding: false,
    children: (
      <div className="bg-f1-background-secondary p-6">
        <p className="text-sm text-f1-foreground-secondary">
          With boxPadding=false, the form below renders edge-to-edge.
        </p>
      </div>
    ),
  },
}
