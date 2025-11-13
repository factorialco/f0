import type { Meta, StoryObj } from "@storybook/react-vite"
import { useState } from "react"
import { F0VersionHistory } from "../index"
import { Version } from "../types"

const mockVersions: Version[] = [
  {
    id: "4",
    author: {
      firstName: "Raul",
      lastName: "Sigüenza",
      src: "/avatars/person04.jpg",
    },
    date: "November 6, 2023",
    time: "12:00PM",
    isActive: false,
    onClick: () => console.log("Version 4 clicked!"),
  },
  {
    id: "3",
    author: {
      firstName: "Alan",
      lastName: "Kay",
      src: "storybook-assets/avatar.jpeg",
    },
    date: "October 4",
    time: "8:30AM",
    isActive: true,
    onClick: () => console.log("Version 3 clicked!"),
  },
  {
    id: "2",
    author: {
      firstName: "Eleanor",
      lastName: "Roosevelt",
      src: "/avatars/person05.jpg",
    },
    date: "Last week",
    time: "1:30PM",
    isActive: false,
    onClick: () => console.log("Version 2 clicked!"),
  },
  {
    id: "1",
    author: {
      firstName: "Raul",
      lastName: "Sigüenza",
      src: "/avatars/person04.jpg",
    },
    date: "Yesterday",
    time: "3:15PM",
    isActive: false,
    onClick: () => console.log("Version 1 clicked!"),
  },
]

const meta: Meta<typeof F0VersionHistory> = {
  title: "Experimental/F0VersionHistory",
  component: F0VersionHistory,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A component to display a timeline of document versions with authors and timestamps.",
      },
    },
  },
  argTypes: {
    title: {
      control: "text",
      description: "The title displayed at the top of the version history",
    },
    versions: {
      control: false,
      description: `Array of versions with the following structure:
        - author: { firstName, lastName, src? }
        - dateTime: ISO date string
        - onClick: Optional callback when version is clicked
        - isActive: Whether this is the currently viewed version`,
    },
    currentVersion: {
      control: false,
      description: `Object to configure the current version indicator. If undefined, the indicator won't be shown.
        - title?: Custom title (defaults to 'Current version')
        - onClick?: Callback when clicked`,
    },
  },
  decorators: [
    (Story) => (
      <div className="h-[600px] w-fit border border-solid border-f1-border">
        <Story />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => {
    const [activeId, setActiveId] = useState<string | "current">("current")

    const versionsWithHandlers = mockVersions.map((version) => ({
      ...version,
      isActive: activeId === version.id,
      onClick: () => {
        setActiveId(version.id)
        console.log(`Version ${version.id} clicked!`)
      },
    }))

    return (
      <F0VersionHistory
        title="Version history"
        currentVersion={{
          title: "Current version",
          onClick: () => {
            setActiveId("current")
            console.log("Current version clicked!")
          },
          isActive: activeId === "current",
        }}
        versions={versionsWithHandlers.reverse()}
      />
    )
  },
}

export const WithClickableCurrentVersion: Story = {
  args: {
    title: "Version history",
    currentVersion: {
      title: "Current draft",
      onClick: () => console.log("Current version clicked!"),
    },
    versions: mockVersions.reverse().map((v, i) => ({
      ...v,
      onClick: () => console.log(`Version ${i + 1} clicked!`),
    })),
  },
  parameters: {
    docs: {
      description: {
        story:
          "Version history with clickable current version indicator and custom title.",
      },
    },
  },
}

export const WithoutCurrentVersion: Story = {
  args: {
    title: "Version history",
    versions: mockVersions.reverse(),
  },
  parameters: {
    docs: {
      description: {
        story:
          "Version history without the current version indicator. Don't provide currentVersion prop.",
      },
    },
  },
}
