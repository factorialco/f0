import { StoryObj } from "@storybook/react-vite"
import { mockItem } from "../../../__stories__/shared"
import { meta } from "../../../__stories__/ValueDisplay.stories"

export default meta
type Story = StoryObj<typeof meta>

export const CompanyType: Story = {
  args: {
    item: mockItem,
    property: {
      label: "Company",
      render: (item) => ({
        type: "company",
        value: {
          name: item.companyName,
          src: item.companyLogo,
        },
      }),
    },
  },
}
