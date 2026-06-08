import { Meta, StoryObj } from "@storybook/react-vite"

import type { PresetsDefinition } from "@/patterns/OneFilterPicker/types"

import { ExampleComponent, filters, mockUsers } from "../mockData"

/**
 * Developer-provided presets that capture more than filters: sorting, view mode
 * (visualization index) and grouping. Selecting one applies the whole snapshot;
 * dimensions a preset doesn't declare reset to defaults.
 *
 * Visualization indices below match the default visualization order in
 * `ExampleComponent`: 0 = table, 1 = card, 2 = list, 3 = kanban, 4 = editable table.
 */
const richPresets: PresetsDefinition<typeof filters> = [
  {
    id: "eng-by-salary-cards",
    label: "Engineering · top paid (cards)",
    description:
      "Engineering team, sorted by salary (high to low), shown as cards.",
    filter: { department: ["Engineering"] },
    sortings: { field: "salary", order: "desc" },
    visualization: 1, // card
  },
  {
    id: "by-role-grouped",
    label: "Everyone by role (grouped)",
    description: "All people grouped by role, sorted by name, as a table.",
    filter: {},
    sortings: { field: "name", order: "asc" },
    grouping: { field: "role" },
    visualization: 0, // table
  },
  {
    id: "marketing-list",
    label: "Marketing (list)",
    description: "Marketing team shown as a list.",
    filter: { department: ["Marketing"] },
    visualization: 2, // list
  },
]

const meta = {
  title: "Data Collection/Views",
  parameters: {
    layout: "padded",
  },
  tags: ["internal"],
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

/**
 * Custom, savable views.
 *
 * A view captures the whole snapshot: filters, sorting, view mode, grouping and
 * column order/visibility — not just filters.
 *
 * Try it:
 * - Change filters / sorting / grouping / columns with no view selected → a
 *   dashed "Save view" chip appears as the last item in the views row. Saving
 *   opens a dialog (title + optional description) and creates a view, which
 *   becomes selected. (A view-mode-only change from a pristine state does not
 *   offer to save.)
 * - Hover a view box → after a short delay its description shows in a tooltip.
 * - Hover a custom (user-created) view → an edit icon button appears (the box
 *   grows smoothly); edit opens the form to rename it. The edit dialog's overflow
 *   ("…") menu holds extra actions: "Share view" and "Remove".
 * - "Share view" copies a self-contained link (the whole view — title,
 *   description and config — base64url-encoded). Opening that link prefills the
 *   create dialog so the recipient can just hit Save.
 * - Select a view → the whole captured snapshot is applied.
 * - Change anything on top of a selected view → it auto-de-selects (it no longer
 *   matches) and a "Save view" chip appears to fork it into a new view.
 * - The selected view is reflected in the URL via `dc_preset`.
 * - Reload the page → custom views rehydrate from localStorage (key
 *   `datacollection-presets/custom/v1`).
 */
export const CustomPresets: Story = {
  render: () => (
    <ExampleComponent
      usePresets
      presets={richPresets}
      id="presets/custom/v1"
      tableAllowColumnHiding
      tableAllowColumnReordering
      grouping={{
        groupBy: {
          department: {
            name: "Department",
            label: (groupId) => groupId,
            itemCount: (groupId) =>
              mockUsers.filter((user) => user.department === groupId).length,
          },
          role: {
            name: "Role",
            label: (groupId) => groupId,
            itemCount: (groupId) =>
              mockUsers.filter((user) => user.role === groupId).length,
          },
        },
      }}
    />
  ),
}
