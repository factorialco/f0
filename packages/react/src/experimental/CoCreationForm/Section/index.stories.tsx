import type { Meta, StoryObj } from "@storybook/react-vite"

import { Section } from "."

const meta: Meta = {
  title: "CoCreationForm/Section",
  component: Section,
  tags: ["autodocs", "experimental"],
  args: {
    onChange: (params) => {
      console.log("Question changed:", params)
    },
  },
} satisfies Meta<typeof Section>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    id: "question-1",
    title: "Teamwork",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque a ipsum tortor. Integer vel nibh vel ex sollicitudin aliquet at eu risus. Nulla in lectus eget mauris vehicula faucibus. ",
  },
}
