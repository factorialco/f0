import type { Meta, StoryObj } from "@storybook/react-vite"

import { DateQuestion } from "."
import { CoCreationFormProvider } from "../Context"

const meta: Meta = {
  title: "CoCreationForm/DateQuestion",
  component: DateQuestion,
  tags: ["autodocs", "experimental"],
  decorators: [
    (Story) => (
      <div className="max-w-[750px]">
        <CoCreationFormProvider elements={[]} onChange={() => {}}>
          <Story />
        </CoCreationFormProvider>
      </div>
    ),
  ],
} satisfies Meta<typeof DateQuestion>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    id: "question-1",
    title: "Tell us more about your idea",
    description: "Please provide a detailed description",
    value: new Date(),
  },
}
