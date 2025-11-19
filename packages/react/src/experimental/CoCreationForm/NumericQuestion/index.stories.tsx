import type { Meta, StoryObj } from "@storybook/react-vite"

import { NumericQuestion } from "."
import { CoCreationFormProvider } from "../Context"

const meta: Meta = {
  title: "CoCreationForm/NumericQuestion",
  component: NumericQuestion,
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
} satisfies Meta<typeof NumericQuestion>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    id: "question-1",
    title: "Tell us more about your idea",
    description: "Please provide a detailed description",
    value: 33,
  },
}
