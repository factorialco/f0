import { Meta, StoryObj } from "@storybook/react-vite"
import { ProductWidget } from "."

const meta: Meta<typeof ProductWidget> = {
  title: "UpsellingKit/ProductWidget",
  component: ProductWidget,
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    mediaUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
    title: "More benefits to René & your team",
    description:
      "Enjoy greater savings through flexible benefits like meals, transport, and health insurance.",
    onClose: () => {
      alert("dismissed")
    },
    dismissible: true,
    width: "300px",
    actions: [
      {
        type: "regular",
        variant: "promote",
        label: "Learn more",
        onClick: () => {
          alert("clicked")
        },
      },
    ],
  },
  tags: ["autodocs", "no-sidebar"],
  argTypes: {
    mediaUrl: {
      control: "text",
      description: "URL of the media to display",
    },
    title: {
      control: "text",
      description: "Title of the product",
    },
    description: {
      control: "text",
      description: "Description of the product",
    },
    dismissible: {
      control: "boolean",
      description: "Whether the product is dismissible",
    },
    width: {
      control: "text",
      description: "Width of the product",
    },
    trackVisibility: {
      control: "object",
      description: "Function to track visibility",
    },
    actions: {
      control: "object",
      description: "Actions of the product",
    },
  },
}
export const WithUpsellingButton: Story = {
  args: {
    mediaUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
    title: "Give René some well-deserved benefits!",
    description:
      "Help people improve their take-home pay by €200 a year with flexible benefits, at no extra cost to you.",
    onClose: () => {
      alert("dismissed")
    },
    dismissible: true,
    width: "300px",
    actions: [
      {
        type: "upsell",
        variant: "promote",
        label: "Request Information",
        errorMessage: {
          title: "Request failed",
          description: "We couldn't process your request. Please try again later.",
        },
        onClick: async () => {
          console.log("onRequest")
          await new Promise((resolve) => setTimeout(resolve, 1000))
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
        showConfirmation: false,
        loadingState: {
          label: "Processing...",
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
      },
    ],
  },
  tags: ["autodocs", "no-sidebar"],
}
