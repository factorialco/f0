// Replace your-framework with the name of your framework
import { F0Button } from "@/components/F0Button"
import { usePrivacyMode } from "@/lib/privacyMode"
import type { Meta, StoryObj } from "@storybook/react-vite"
import { PrivateBox } from "./index"

const meta: Meta = {
  title: "Profile/PrivateBox",
  tags: ["autodocs", "experimental"],
}

type Story = StoryObj

export const PrivateBoxExample: Story = {
  render: () => {
    const { toggle, enabled } = usePrivacyMode()

    return (
      <div className="flex flex-col gap-4">
        <p>
          My salary is{" "}
          <PrivateBox>
            <span>60,000 €/year</span>
          </PrivateBox>
        </p>
        <div className="self-start">
          <F0Button
            label={`${enabled ? "Disable " : "Enable "} Privacy Mode`}
            onClick={toggle}
            variant="neutral"
          />
        </div>
      </div>
    )
  },
}

export default meta
