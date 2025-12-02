import { Meta, StoryObj } from "@storybook/react-vite"
import { AiChat, AiChatProvider } from "./index"

const meta = {
  title: "Experimental/AiChat",
  component: AiChat,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  decorators: [
    (Story: React.ComponentType) => {
      return (
        <div className="h-full w-full bg-[hsl(0,0,98)]">
          <AiChatProvider
            enabled
            runtimeUrl="https://mastra.local.factorial.dev/copilotkit"
            agent="one-workflow"
            credentials="include"
            showDevConsole={false}
          >
            <Story />
          </AiChatProvider>
        </div>
      )
    },
  ],
} satisfies Meta<typeof AiChat>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
