import { Meta, StoryObj } from "@storybook/react"

import { ExampleComponent } from "./mockData"

const meta = {
  title: "Data Collection/Export Test",
  component: ExampleComponent,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Test story for CSV export functionality in OneDataCollection",
      },
    },
  },
  tags: ["autodocs", "experimental", "internal"],
} satisfies Meta<typeof ExampleComponent>

export default meta
type Story = StoryObj<typeof meta>

export const ExportFunctionalityTest: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="bg-blue-50 border-blue-200 rounded-md border p-4">
        <h3 className="text-blue-800 mb-2 text-lg font-semibold">
          Export Functionality Test
        </h3>
        <p className="text-blue-700 mb-3">
          This story demonstrates the CSV export functionality. The export
          action is available in the dropdown menu (three dots) in the
          collection actions area.
        </p>
        <ul className="text-blue-700 list-inside list-disc space-y-1">
          <li>Look for the "..." button in the toolbar</li>
          <li>Click it to open the actions dropdown</li>
          <li>Select "Export to CSV" to download the current data</li>
          <li>The export will respect current filters and sorting</li>
        </ul>
      </div>

      <ExampleComponent searchBar={true} id="export-test-collection" />
    </div>
  ),
}

export const ExportWithFilters: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="bg-green-50 border-green-200 rounded-md border p-4">
        <h3 className="text-green-800 mb-2 text-lg font-semibold">
          Export with Filters Test
        </h3>
        <p className="text-green-700">
          Apply filters and sorting, then export to see only the filtered data
          in the CSV file.
        </p>
      </div>

      <ExampleComponent
        searchBar={true}
        usePresets={true}
        id="export-filters-test-collection"
      />
    </div>
  ),
}

export const ExportWithSelectableItems: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="border-purple-200 rounded-md border bg-purple-50 p-4">
        <h3 className="text-purple-800 mb-2 text-lg font-semibold">
          Export with Selection Test
        </h3>
        <p className="text-purple-700">
          This version includes selectable items. The export will include all
          data, not just selected items (as per design).
        </p>
      </div>

      <ExampleComponent
        searchBar={true}
        selectable={(item) => item.id}
        id="export-selectable-test-collection"
      />
    </div>
  ),
}
