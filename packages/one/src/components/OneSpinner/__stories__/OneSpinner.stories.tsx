import type { Meta, StoryObj } from "@storybook/react-vite"
import { OneSpinner } from "../OneSpinner"

const meta: Meta<typeof OneSpinner> = {
  title: "Experimental/OneSpinner",
  component: OneSpinner,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
