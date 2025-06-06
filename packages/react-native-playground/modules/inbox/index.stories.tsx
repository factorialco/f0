import type { Meta, StoryObj } from "@storybook/react";
import {
  InboxView,
  type InboxSection,
} from "@factorialco/factorial-one-react-native";

const sampleSections: InboxSection[] = [
  {
    id: "1",
    title: "Section 1",
    data: [
      {
        id: "a",
        title: "Item 1 in Section 1",
        description: "Description 1",
        date: "2021-01-01",
      },
    ],
  },
  {
    id: "2",
    title: "Section 2",
    data: [
      {
        id: "b",
        title: "Item 1 in Section 2",
        description: "Description 2",
        date: "2021-01-02",
      },
      {
        id: "c",
        title: "Item 2 in Section 2",
        description: "Description 3",
        date: "2021-01-03",
      },
    ],
  },
];

const meta: Meta<typeof InboxView> = {
  title: "Modules/Inbox/InboxView",
  component: InboxView,
  parameters: {
    layout: "fullscreen",
  },
  args: {
    title: "Inbox",
    sections: sampleSections,
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Empty: Story = {
  args: {
    title: "Inbox (Empty)",
    sections: [],
  },
};
