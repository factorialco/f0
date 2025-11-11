import type { Meta, StoryObj } from "@storybook/react-vite"

import { SelectQuestion } from "."

const meta: Meta = {
  title: "CoCreationForm/SelectQuestion",
  component: SelectQuestion,
  tags: ["autodocs", "experimental"],
  args: {
    onChange: (params) => {
      console.log("Question changed:", params)
    },
  },
} satisfies Meta<typeof SelectQuestion>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    id: "question-1",
    title: "How supported do you feel by your manager and team?",
    description: "Responders can select 1",
    type: "select",
    value: null,
    options: [
      { value: "work-life-balance", label: "Work-life balance" },
      { value: "recognition", label: "Recognition and appreciation" },
      { value: "manager-relationship", label: "Relationship with manager" },
      { value: "team-collaboration", label: "Team collaboration" },
    ],
  },
}

export const WithSelectedValue: Story = {
  args: {
    id: "question-2",
    title: "What is your primary concern?",
    description: "Select one option",
    type: "select",
    value: "work-life-balance",
    options: [
      { value: "work-life-balance", label: "Work-life balance" },
      { value: "recognition", label: "Recognition and appreciation" },
      { value: "manager-relationship", label: "Relationship with manager" },
      { value: "team-collaboration", label: "Team collaboration" },
    ],
  },
}

export const ManyOptions: Story = {
  args: {
    id: "question-3",
    title: "Which areas would you like to improve?",
    description: "Select one option",
    type: "select",
    value: null,
    options: [
      { value: "communication", label: "Communication" },
      { value: "feedback", label: "Feedback and recognition" },
      { value: "growth", label: "Career growth opportunities" },
      { value: "workload", label: "Workload management" },
      { value: "team-dynamics", label: "Team dynamics" },
      { value: "tools", label: "Tools and resources" },
    ],
  },
}

export const MultiSelect: Story = {
  args: {
    id: "question-4",
    title: "What are your primary concerns?",
    description: "Select one or more options",
    type: "multi-select",
    value: [],
    options: [
      { value: "communication", label: "Communication" },
      { value: "feedback", label: "Feedback and recognition" },
      { value: "growth", label: "Career growth opportunities" },
      { value: "workload", label: "Workload management" },
      { value: "team-dynamics", label: "Team dynamics" },
    ],
  },
}
