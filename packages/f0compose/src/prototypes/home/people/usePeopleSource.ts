import { useDataCollectionSource } from "@factorialco/f0-react/dist/experimental"
import { Delete, Pencil, Plus, Upload } from "@factorialco/f0-react/icons/app"

import { applySort } from "@/lib/applySort"

import {
  ACCESS_LABEL,
  CONTRACT_LABEL,
  DORMANT_IDS,
  peopleRows,
  WORKPLACE_OPTIONS,
  type PersonRow,
} from "./peopleData"
import { peopleFocus } from "./peopleFocusStore"

/**
 * useDataCollectionSource for the People table (Figma 2730:461223).
 *
 * Deliberately NO presets, unlike the Policies screen: the frame's
 * toolbar carries a single "Filter" button (the FilterPicker), which is
 * what ODC renders when filters are defined and no preset is. Beside it,
 * the collapsed search, the settings sliders, a divider, then "Export"
 * and the accent "Add person" — all of that is ODC's own toolbar.
 *
 * No pagination: 24 bounded rows, same reasoning as Policies.
 */
export function usePeopleSource() {
  return useDataCollectionSource<PersonRow>(
    {
      filters: {
        workplace: {
          type: "in",
          label: "Workplace",
          options: {
            options: WORKPLACE_OPTIONS.map((value) => ({
              value,
              label: value,
            })),
          },
        },
        access: {
          type: "in",
          label: "Access status",
          options: {
            options: (
              Object.keys(ACCESS_LABEL) as (keyof typeof ACCESS_LABEL)[]
            ).map((value) => ({ value, label: ACCESS_LABEL[value] })),
          },
        },
        contract: {
          type: "in",
          label: "Contract status",
          options: {
            options: (
              Object.keys(CONTRACT_LABEL) as (keyof typeof CONTRACT_LABEL)[]
            ).map((value) => ({ value, label: CONTRACT_LABEL[value] })),
          },
        },
      },
      sortings: {
        name: { label: "Employee" },
        workplace: { label: "Workplace" },
        hired: { label: "Hired" },
      },
      search: { enabled: true, sync: true },
      dataAdapter: {
        fetchData: ({ filters, search, sortings }) => {
          const wanted = (key: string): string[] => {
            const raw = (filters as Record<string, unknown> | undefined)?.[key]
            return Array.isArray(raw) ? (raw as string[]) : []
          }
          const workplaces = wanted("workplace")
          const accesses = wanted("access")
          const contracts = wanted("contract")
          const term = (search ?? "").toLowerCase().trim()

          // One's own focus, applied BEFORE the toolbar's filters: it
          // narrows what the table is about, and the user's filters then
          // work within that. Read from the module store rather than
          // passed in, because this closure outlives any one render — see
          // peopleFocusStore for why the two filter states stay separate.
          const base =
            peopleFocus() === "dormant"
              ? peopleRows.filter((p) => DORMANT_IDS.includes(p.id))
              : peopleRows

          const filtered = base
            .filter((p) =>
              workplaces.length === 0
                ? true
                : workplaces.includes(p.workplaceKey)
            )
            .filter((p) =>
              accesses.length === 0 ? true : accesses.includes(p.access)
            )
            .filter((p) =>
              contracts.length === 0 ? true : contracts.includes(p.contract)
            )
            .filter((p) =>
              term === ""
                ? true
                : `${p.firstName} ${p.lastName}`.toLowerCase().includes(term)
            )

          const sorted = applySort(filtered, sortings, (p, field) => {
            switch (field) {
              case "name":
                return `${p.firstName} ${p.lastName}`.toLowerCase()
              case "workplace":
                return p.workplace.toLowerCase()
              case "hired":
                // Sort by real tenure, not by the printed label — "9
                // months ago" would otherwise sort next to "9 years ago".
                return p.tenureYears
              default:
                return null
            }
          })

          return { records: sorted }
        },
      },
      selectable: (item) => item.id,
      primaryActions: () => ({
        label: "Add person",
        icon: Plus,
        onClick: () => {},
      }),
      // `expanded: 1` is what keeps Export a VISIBLE outline button rather
      // than folding it into the ⋮ (ODC's default, and what the Policies
      // screen gets) — the frame draws it beside "Add person".
      secondaryActions: {
        actions: () => [{ label: "Export", icon: Upload, onClick: () => {} }],
        expanded: 1,
      },
      itemActions: (item) => [
        { label: "Open profile", onClick: () => {} },
        { label: "Edit", icon: Pencil, onClick: () => {} },
        { type: "separator" },
        {
          label: "Deactivate",
          icon: Delete,
          onClick: () => {},
          critical: true,
          description: `Deactivates ${item.firstName} ${item.lastName}`,
        },
      ],
    },
    []
  )
}
