import { Meta, StoryObj } from "@storybook/react-vite"

import { ExampleComponent } from "../mockData"

const meta = {
  title: "Data Collection/Filters",
  parameters: {
    layout: "padded",
  },
  tags: ["internal"],
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

// Example with async search functionality
export const WithAsyncSearch: Story = {
  render: () => <ExampleComponent searchBar />,
  parameters: {
    docs: {
      source: {
        code: `
           const source = useDataCollectionSource({
              //...
              search: {
                  enabled: true,
                  sync: false,
                  debounceTime: 300,
              },
              //...
          })
          `,
      },
    },
  },
}

// Search functionality demonstration
export const WithSyncSearch: Story = {
  render: () => (
    <ExampleComponent
      searchBar={{
        enabled: true,
        // Set sync to true for immediate search results
        sync: true,
        // Set debounce time to 300ms
        debounceTime: 300,
      }}
    />
  ),
  parameters: {
    docs: {
      source: {
        code: `
           const source = useDataCollectionSource({
              //...
              search: {
                  enabled: true,
                  sync: true,
                  debounceTime: 300,
              },
              //...
          })
          `,
      },
    },
  },
}

export const PresetsExample: Story = {
  render: () => <ExampleComponent usePresets />,
  parameters: {
    docs: {
      source: {
        code: `
           const source = useDataCollectionSource({
              //...
              filters: {
                  department: {
                      type: "in",
                      label: "Department",
                      options: {
                          options: [
                              { value: "Engineering", label: "Engineering" },
                              { value: "Marketing", label: "Marketing" },
                              { value: "Sales", label: "Sales" },
                              { value: "HR", label: "Human Resources" },
                              { value: "Finance", label: "Finance" },
                              { value: "Product", label: "Product" },
                          ],
                      },
                  },
              },
              presets: [
                  { label: "Engineering Only", filter: { department: ["Engineering"] } },
                  { label: "Product Team", filter: { department: ["Product"] } },
              ],
              //...
          })
          `,
      },
    },
  },
}
