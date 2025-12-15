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
    timestamp: new Date("2023-11-06T12:00:00"),
  },
  {
    id: "3",
    author: {
      firstName: "Alan",
      lastName: "Kay",
      src: "/storybook-assets/avatar.jpeg",
    },
    timestamp: new Date("2024-10-04T08:30:00"),
  },
  {
    id: "2",
    author: {
      firstName: "Eleanor",
      lastName: "Roosevelt",
      src: "/avatars/person05.jpg",
    },
    timestamp: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000), // 7 days ago
  },
  {
    id: "1",
    author: {
      firstName: "Raul",
      lastName: "Sigüenza",
      src: "/avatars/person04.jpg",
    },
    timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000), // Yesterday
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
        - id: Unique identifier for the version
        - author: { firstName, lastName, src? }
        - timestamp: Date object
        - onClick: Optional callback when version is clicked`,
    },
    activeVersionId: {
      control: "text",
      description: `ID of the currently active version. Use "current" for the current version indicator, or the version's ID string.`,
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
      <div className="h-[600px] w-fit rounded-md border border-solid border-f1-border-secondary">
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
        }}
        versions={versionsWithHandlers.reverse()}
        activeVersionId={activeId}
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
    activeVersionId: "3",
  },
  parameters: {
    docs: {
      description: {
        story: "Version history with clickable current version indicator and custom title.",
      },
    },
  },
}

export const WithoutCurrentVersion: Story = {
  args: {
    title: "Version history",
    versions: mockVersions.reverse(),
    activeVersionId: "2",
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
