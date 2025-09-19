// packages/react/src/experimental/ProductBlankslate/ProductBlankslate.stories.tsx
import { F0Button } from "@/components/F0Button"
import SalesIcon from "@/icons/modules/Sales"
import type { Meta, StoryObj } from "@storybook/react-vite"
import { ProductBlankslate } from "."
import { UpsellingButton } from "../UpsellingButton"

const meta: Meta<typeof ProductBlankslate> = {
  title: "UpsellingKit/ProductBlankslate",
  component: ProductBlankslate,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    benefits: {
      control: { type: "object" },
      description: "List of benefits to display (array of strings)",
    },
    actions: {
      control: "object",
      description: "Custom actions component to display",
    },
  },
}

export default meta

type Story = StoryObj<typeof ProductBlankslate>

const defaultArgs = {
  title:
    "Optimize and centralize your sales processes with quotes and invoices",
  image: "https://placehold.co/280x328", // 3:4 ratio
  variant: "promote" as const,
  benefits: [
    "Track every sale from quote to final invoice.",
    "Customize with client data, taxes, and discounts.",
    "Link invoices to projects and manage billable amounts.",
    "Export easily to PDF or Excel in one click.",
  ],
  icon: SalesIcon,
  moduleName: "Sales Invoices",
}

export const Default: Story = {
  args: {
    ...defaultArgs,
    actions: (
      <div className="flex gap-3">
        <F0Button
          label="Request information"
          onClick={() => alert("Request information")}
        />
        <F0Button
          label="Learn more"
          variant="outline"
          onClick={() => alert("Read more")}
        />
      </div>
    ),
  },
}

export const WithUpsellingButton: Story = {
  args: {
    ...defaultArgs,
    actions: (
      <UpsellingButton
        label="Request information"
        onRequest={async () =>
          await new Promise((resolve) => setTimeout(resolve, 1000))
        }
        errorMessage={{
          title: "Request failed",
          description:
            "We couldn't process your request. Please try again later.",
        }}
        successMessage={{
          title: "Request submitted!",
          description:
            "One of our experts will contact you as soon as possible with all the details.",
          buttonLabel: "Discover more products",
          buttonOnClick: () => {
            console.log("buttonOnClick")
          },
        }}
        loadingState={{
          label: "Processing...",
        }}
        nextSteps={{
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
        }}
        closeLabel="Close"
      />
    ),
  },
}

export const WithNoActions: Story = {
  args: {
    ...defaultArgs,
  },
}
