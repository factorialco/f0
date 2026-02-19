import type { Meta, StoryObj } from "@storybook/react-vite"

import { useState } from "react"

import { UpsellingButton } from "../UpsellingButton"
import { UpsellRequestResponseDialog } from "./index"

const defaultMessages = {
  errorMessage: {
    title: "Request failed",
    description: "We couldn't process your request. Please try again later.",
  },
  successMessage: {
    title: "Request submitted!",
    description:
      "One of our experts will contact you as soon as possible with all the details.",
    buttonLabel: "Discover more products",
    buttonOnClick: () => {
      console.log("buttonOnClick")
    },
  },
  nextSteps: {
    title: "Next steps",
    items: [
      {
        text: "Request information",
        isCompleted: true,
      },
      {
        text: "Product expert contacting you.",
      },
      {
        text: "Demo to answer all your questions",
      },
    ],
  },
  closeLabel: "Close",
}

const meta = {
  title: "UpsellingKit/UpsellRequestResponseDialog",
  component: UpsellRequestResponseDialog,
  parameters: {
    layout: "fullscreen",
    docs: {
      story: { inline: false, height: "400px" },
    },
  },
  tags: ["autodocs", "no-sidebar"],
} satisfies Meta<typeof UpsellRequestResponseDialog>

export default meta
type Story = StoryObj<typeof meta>

const createStory = (success: boolean) => {
  return {
    args: {
      open: false,
      success,
      ...defaultMessages,
    },
    render: () => {
      const [isOpen, setIsOpen] = useState(false)
      const [isLoading, setIsLoading] = useState(false)

      const handleRequest = async () => {
        setIsLoading(true)
        try {
          if (success) {
            await new Promise((resolve) => setTimeout(resolve, 1000))
          } else {
            await new Promise((_, reject) =>
              setTimeout(() => reject(new Error("fail")), 1000)
            )
          }
          setIsOpen(true)
        } catch {
          setIsOpen(true)
        } finally {
          setIsLoading(false)
        }
      }

      return (
        <div className="flex h-full w-full items-center justify-center">
          <UpsellingButton
            label="Request Information"
            onClick={handleRequest}
            loading={isLoading}
            {...defaultMessages}
            loadingState={{
              label: "Processing...",
            }}
          />
          <UpsellRequestResponseDialog
            open={isOpen}
            onClose={() => setIsOpen(false)}
            success={success}
            {...defaultMessages}
          />
        </div>
      )
    },
  }
}

export const Default: Story = createStory(true)
export const SuccessExample: Story = createStory(true)
export const ErrorExample: Story = createStory(false)
