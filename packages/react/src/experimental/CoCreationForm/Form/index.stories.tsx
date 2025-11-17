import type { Meta, StoryObj } from "@storybook/react-vite"

import { CoCreationForm } from "."

const meta: Meta<typeof CoCreationForm> = {
  title: "CoCreationForm/CoCreationForm",
  component: CoCreationForm,
  tags: ["autodocs", "experimental"],
  render: (args) => <CoCreationForm {...args} />,
}

export default meta
type Story = StoryObj<typeof CoCreationForm>

export const Default: Story = {
  args: {
    isEditMode: true,
    elements: [
      {
        type: "question",
        question: {
          id: "question-1",
          index: 1,
          title: "Question 1",
          type: "text" as const,
        },
      },
      {
        type: "section",
        section: {
          id: "section-1",
          index: 0,
          title: "Section 1",
          description: "Section 1 description",
          questions: [
            {
              id: "question-1",
              index: 1,
              title: "Question 1",
              type: "text" as const,
            },
            {
              id: "question-2",
              index: 2,
              title: "Question 2",
              type: "select" as const,
              value: "option-1",
              options: [
                { value: "option-1", label: "Option 1" },
                { value: "option-2", label: "Option 2" },
                { value: "option-3", label: "Option 3" },
                { value: "option-4", label: "Option 4" },
              ],
            },
          ],
        },
      },
    ],
  },
}
