import { withSkipA11y, withSnapshot } from "@/lib/storybook-utils/parameters"
import { Meta, StoryObj } from "@storybook/react-vite"
import { Cell, mockItem } from "../../../__stories__/shared"

const meta = {
  title: "Value Display/Country",
  component: Cell,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Renders a country flag avatar with the country name. The country name is automatically translated based on the i18n context, or can be provided via the label property. ",
      },
      source: {
        code: null,
      },
    },
  },
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const CountryType: Story = {
  args: {
    item: mockItem,
    property: {
      label: "Country",
      render: () => ({
        type: "country",
        value: {
          code: "es",
        },
      }),
    },
  },
}

export const CountryTypeWithLabel: Story = {
  args: {
    item: mockItem,
    property: {
      label: "Country",
      render: () => ({
        type: "country",
        value: {
          code: "gb",
          label: "United Kingdom",
        },
      }),
    },
  },
}

export const Snapshot: Story = {
  parameters: withSkipA11y(withSnapshot({})),
  args: {
    item: mockItem,
    property: {
      label: "Country",
      render: () => ({
        type: "country",
        value: { code: "es" },
      }),
    },
  },
  render: () => {
    const variants = [
      {
        title: "Just code",
        code: "es",
      },
      {
        title: "Custom label",
        code: "gb",
        label: "Custom label for GB",
      },
      {
        title: "Not existing code",
        code: "gb2",
        label: "United Kingdom",
      },
    ]
    return (
      <div className="flex flex-col gap-2">
        <h3 className="text-lg font-semibold">Country</h3>
        <div className="flex flex-col gap-2">
          {variants.map((variant) => (
            <div key={variant.title}>
              <h4 className="text-lg font-semibold">{variant.title}</h4>
              <Cell
                item={mockItem}
                property={{
                  label: "Country",
                  render: () => ({
                    type: "country",
                    value: {
                      code: variant.code,
                      label: variant.label,
                    },
                  }),
                }}
              />
            </div>
          ))}
        </div>

        <h4 className="text-lg font-semibold">Ellipsis</h4>
        <div className="flex max-w-[100px] flex-col gap-2">
          {variants.map((variant) => (
            <div key={variant.title}>
              <h4 className="text-lg font-semibold">{variant.title}</h4>
              <Cell
                item={mockItem}
                property={{
                  label: "Country",
                  render: () => ({
                    type: "country",
                    value: {
                      code: variant.code,
                      label: variant.label,
                    },
                  }),
                }}
              />
            </div>
          ))}
        </div>
      </div>
    )
  },
}
