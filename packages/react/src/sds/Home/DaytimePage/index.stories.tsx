import type { Meta, StoryObj } from "@storybook/react-vite"

import { expect, within } from "storybook/test"

import { HomeLayout } from "@/layouts/HomeLayout"
import { Default as DefaultHomeLayoutStory } from "@/layouts/HomeLayout/index.stories"
import { fakePeople } from "@/mocks/people"

import { ApplicationFrame } from "@/patterns/ApplicationFrame"
import { DaytimePage, DaytimePageProps } from "./index"

const meta: Meta<typeof DaytimePage> = {
  title: "Home/DaytimePage",
  component: DaytimePage,
  tags: ["autodocs", "experimental"],
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story) => (
      <ApplicationFrame
        sidebar={null}
        ai={{
          enabled: true,
          initialMessage: "Ask anything about your company",
        }}
      >
        <Story />
      </ApplicationFrame>
    ),
  ],
}

export default meta
type Story = StoryObj<DaytimePageProps>

export const DaytimeHomeLayout: Story = {
  args: {
    period: "morning",
  },
  argTypes: {
    period: {
      control: "select",
      options: ["morning", "afternoon", "evening"],
    },
  },
  render: ({ period }) => (
    <DaytimePage
      period={period}
      header={{
        employeeFirstName: fakePeople.noor.firstName,
        employeeLastName: fakePeople.noor.lastName,
        title: `Good morning, ${fakePeople.noor.firstName}!`,
        employeeAvatar: fakePeople.noor.image,
      }}
    >
      <HomeLayout {...DefaultHomeLayoutStory.args} />
    </DaytimePage>
  ),
}

export const DaytimeHomeLayoutWithDescription: Story = {
  args: {
    period: "morning",
  },
  argTypes: {
    period: {
      control: "select",
      options: ["morning", "afternoon", "evening"],
    },
  },
  render: ({ period }) => (
    <DaytimePage
      period={period}
      header={{
        employeeFirstName: fakePeople.noor.firstName,
        employeeLastName: fakePeople.noor.lastName,
        title: `Good morning, ${fakePeople.noor.firstName}!`,
        description: "How are you feeling today?",
        employeeAvatar: fakePeople.noor.image,
      }}
    >
      <HomeLayout {...DefaultHomeLayoutStory.args} />
    </DaytimePage>
  ),
}

export const DaytimeHomeLayoutWithMood: Story = {
  args: {
    period: "morning",
  },
  argTypes: {
    period: {
      control: "select",
      options: ["morning", "afternoon", "evening"],
    },
  },
  render: ({ period }) => (
    <DaytimePage
      period={period}
      header={{
        employeeFirstName: fakePeople.noor.firstName,
        employeeLastName: fakePeople.noor.lastName,
        title: `Good morning, ${fakePeople.noor.firstName}!`,
        description: "How are you feeling today?",
        pulse: "positive",
        onPulseClick: () => {},
        employeeAvatar: fakePeople.noor.image,
      }}
    >
      <HomeLayout {...DefaultHomeLayoutStory.args} />
    </DaytimePage>
  ),
}

export const DaytimeHomeLayoutWithMoodNotSet: Story = {
  args: {
    period: "morning",
  },
  argTypes: {
    period: {
      control: "select",
      options: ["morning", "afternoon", "evening"],
    },
  },
  render: ({ period }) => (
    <DaytimePage
      period={period}
      header={{
        employeeFirstName: fakePeople.noor.firstName,
        employeeLastName: fakePeople.noor.lastName,
        title: `Good morning, ${fakePeople.noor.firstName}!`,
        pulse: undefined,
        onPulseClick: () => {},
        employeeAvatar: fakePeople.noor.image,
      }}
    >
      <HomeLayout {...DefaultHomeLayoutStory.args} />
    </DaytimePage>
  ),
}

export const WithDataTestId: Story = {
  args: {
    period: "morning",
  },
  render: ({ period }) => (
    <DaytimePage
      period={period}
      header={{
        employeeFirstName: fakePeople.noor.firstName,
        employeeLastName: fakePeople.noor.lastName,
        title: `Good morning, ${fakePeople.noor.firstName}!`,
        employeeAvatar: fakePeople.noor.image,
      }}
      dataTestId="daytime-page-test-id"
    >
      <HomeLayout {...DefaultHomeLayoutStory.args} />
    </DaytimePage>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    await expect(canvas.getByTestId("daytime-page-test-id")).toBeInTheDocument()
  },
}
