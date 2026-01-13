import { Meta, StoryObj } from "@storybook/react-vite"
import { AssistantMessage } from "./AssistantMessage"
import { FeedbackModalProvider } from "./FeedbackProvider"

const meta = {
  title: "Experimental/AiChat/AssistantMessage",
  component: AssistantMessage,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs", "no-sidebar"],
  decorators: [
    (Story) => (
      <div className="w-96 bg-f1-background p-4">
        <FeedbackModalProvider>
          <Story />
        </FeedbackModalProvider>
      </div>
    ),
  ],
} satisfies Meta<typeof AssistantMessage>

export default meta
type Story = StoryObj<typeof meta>

export const PlainText: Story = {
  args: {
    message: {
      id: "plain-text-message",
      role: "assistant",
      content:
        "This is a simple plain text message from the assistant. It doesn't contain any markdown formatting and should display as regular text.",
    },
    isLoading: false,
    isGenerating: false,
    rawData: {},
  },
}

export const MarkdownContent: Story = {
  args: {
    message: {
      id: "markdown-message",
      role: "assistant",
      content: `# Welcome to the AI Assistant

This is a **markdown-formatted** message that demonstrates various markdown features:

## Features
- **Bold text** for emphasis
- *Italic text* for subtle emphasis
- [Links](https://example.com) for references

## Lists
1. Numbered list item
2. Another numbered item
3. And one more

- Bullet point
- Another bullet
- Nested bullet
  - With sub-item
  - And another

> This is a blockquote that provides additional context or highlights important information.

### Data Table

| Feature | Status | Priority |
|---------|--------|----------|
| Chat Interface | ✅ Complete | High |
| Markdown Support | 🔄 In Progress | High |
| File Upload | ❌ Not Started | Medium |
| Voice Input | ❌ Not Started | Low |

## Images

Here's an example image embedded in the response:

![Test Image](/avatars/person01.jpg)

The assistant can format responses using markdown to provide better readability and structure.`,
    },
    isLoading: false,
    isGenerating: false,
    rawData: {},
  },
}

export const Loading: Story = {
  args: {
    message: {
      id: "loading-message",
      role: "assistant",
      content: "",
    },
    isLoading: true,
    isGenerating: false,
    rawData: {},
  },
}

export const LoadingWithPartialContent: Story = {
  args: {
    message: {
      id: "loading-partial-message",
      role: "assistant",
      content: "The assistant is currently generating a response...",
    },
    isLoading: true,
    isGenerating: false,
    rawData: {},
  },
}
