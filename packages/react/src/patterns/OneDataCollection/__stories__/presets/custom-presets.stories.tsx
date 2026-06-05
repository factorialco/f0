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
  title: "Data Collection/Presets",
  parameters: {
    layout: "padded",
  },
  tags: ["internal"],
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

/**
 * Custom, persistable presets.
 *
 * Presets now capture the whole view: filters, sorting, view mode, grouping and
 * column order/visibility — not just filters.
 *
 * Try it:
 * - Change filters / sorting / grouping / columns with no preset selected → a
 *   dashed "Save as preset" chip appears as the last item in the presets row.
 *   Saving opens a dialog (optional emoji + title + optional description) and
 *   creates a custom preset, which becomes selected. (A view-mode-only change
 *   does not offer to save.)
 * - Hover a preset box → after a short delay its description shows in a tooltip.
 * - Hover a custom (user-created) preset → an edit icon button appears (the box
 *   grows smoothly); edit opens the form to rename it / change the emoji. The
 *   edit dialog's overflow ("…") menu holds extra actions: "Share preset" and
 *   "Remove".
 * - "Share preset" copies a self-contained link (the whole preset — title,
 *   description, emoji and config — base64url-encoded in `dc_shared_preset`).
 *   Opening that link prefills the create dialog so the recipient can just hit
 *   Save.
 * - Select the custom preset → the whole captured view is applied; its emoji (if
 *   any) shows on the left of the chip.
 * - Change something on top → a persist (save) icon appears on the selected
 *   preset itself; clicking it saves the current view into that preset in place
 *   (no dialog), keeping its title/description/emoji.
 * - The selected preset is reflected in the URL via `dc_preset`.
 * - Reload the page → custom presets rehydrate from localStorage (key
 *   `datacollection-presets/custom/v1`).
 * - Select a built-in preset → its captured sorting/view/grouping is applied;
 *   uncaptured dimensions reset to defaults. Editing a built-in preset offers
 *   "Save as preset" (a fork), never "Persist".
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
