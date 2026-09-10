import { Meta, StoryObj } from "@storybook/react-vite"
import { ExampleComponent } from "../mockData"

const meta = {
  title: "Data Collection/Total Items Summary",
  component: ExampleComponent,
  tags: ["autodocs", "experimental"],
} satisfies Meta<typeof ExampleComponent>

export default meta
type Story = StoryObj<typeof meta>

export const TotalItemsSummary: Story = {
  parameters: {
    docs: {
      description: {
        story:
          "The `totalItemSummary` useDataCollectionSource prop allows you to customize how the total number of items is displayed in the collection header. It receives a function that takes the total count as a parameter and returns a string to be displayed.",
      },
      source: {
        code: `
            const source = useDataCollectionSource({
              totalItemSummary: true
              ....
            })
            <OneDataCollection source={source} .../>
            `,
      },
    },
  },
  render: () => <ExampleComponent totalItemSummary={true} />,
}

export const TotalItemsSummaryCustom: Story = {
  parameters: {
    docs: {
      source: {
        code: `
        const source = useDataCollectionSource({
          totalItemSummary: (totalItems) =>
            \`Total items in the datacollection: \${totalItems}\`
          ....
        })
        <OneDataCollection source={source} .../>
        `,
      },
    },
  },
  render: () => (
    <ExampleComponent
      totalItemSummary={(totalItems) =>
        `Total items in the datacollection: ${totalItems}`
      }
    />
  ),
}

export const TotalItemsSummaryWithFilters: Story = {
  parameters: {
    docs: {
      source: {
        code: `
            const source = useDataCollectionSource({
              totalItemSummary: (totalItems) =>
                \`Total items in the datacollection: \${totalItems}\`
              ....
            })
            <OneDataCollection source={source} .../>
            `,
      },
    },
  },
  render: () => (
    <ExampleComponent
      hideFilters={true}
      totalItemSummary={(totalItems) =>
        `Total items in the datacollection: ${totalItems}`
      }
    />
  ),
}
