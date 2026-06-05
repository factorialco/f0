import { useMemo } from "react"
import { useDataCollectionSource } from "@factorialco/f0-react/dist/experimental"
import {
  Ai,
  CheckCircleLine,
  Cross,
} from "@factorialco/f0-react/icons/app"

import { applySort } from "@/lib/applySort"

import type { InternalRole } from "../shared/types"
import type { MappingRow } from "./mappingTypes"

/**
 * Build group (parent) rows from the flat role list.
 */
function buildGroups(roles: InternalRole[]): MappingRow[] {
  const map = new Map<string, { roles: InternalRole[]; first: InternalRole }>()
  for (const r of roles) {
    const key = `${r.function}::${r.family}::${r.title}`
    if (!map.has(key)) map.set(key, { roles: [], first: r })
    map.get(key)!.roles.push(r)
  }
  return [...map.entries()].map(([key, { roles: groupRoles, first }]) => ({
    id: `group-${key}`,
    title: first.title,
    function: first.function,
    family: first.family,
    level: "",
    status: "unmapped" as const,
    isGroup: true,
    childCount: groupRoles.length,
    confirmedChildCount: groupRoles.filter((r) => r.status === "confirmed")
      .length,
  }))
}

/**
 * Find child rows (level entries) for a group parent.
 */
function getChildren(roles: InternalRole[], parent: MappingRow): MappingRow[] {
  return roles
    .filter(
      (r) =>
        r.title === parent.title &&
        r.family === parent.family &&
        r.function === parent.function
    )
    .map((r) => ({
      ...r,
      isGroup: false,
    }))
}

export function useMappingSource(
  roles: InternalRole[],
  onAutoMap: () => void,
  onRowClick: (role: InternalRole) => void,
  onBulkAccept: (ids: string[]) => void,
  onBulkReject: (ids: string[]) => void,
  onBulkRemap: (ids: string[]) => void
) {
  const groups = useMemo(() => buildGroups(roles), [roles])

  return useDataCollectionSource<MappingRow>(
    {
      search: { enabled: true, sync: true },
      filters: {
        status: {
          type: "in",
          label: "Status",
          options: {
            options: [
              { value: "unmapped", label: "Unmapped" },
              { value: "suggested", label: "Suggested" },
              { value: "confirmed", label: "Confirmed" },
            ],
          },
        },
      },
      currentFilters: {},
      presets: [
        { label: "All", filter: {} },
        { label: "Unmapped", filter: { status: ["unmapped"] } },
        { label: "Suggested", filter: { status: ["suggested"] } },
        { label: "Confirmed", filter: { status: ["confirmed"] } },
      ],
      sortings: {
        title: { label: "Role" },
      },
      selectable: (item: MappingRow) => item.id,
      bulkActions: () => ({
        primary: [
          {
            label: "Accept all suggestions",
            icon: CheckCircleLine,
            id: "accept-all",
          },
          {
            label: "Reject all",
            icon: Cross,
            id: "reject-all",
          },
          {
            label: "Remap",
            icon: Ai,
            id: "remap",
          },
        ],
      }),
      dataAdapter: {
        paginationType: "pages",
        perPage: 25,
        fetchData: ({ filters, search, sortings, pagination }) => {
          const wantedStatuses = Array.isArray(filters?.status)
            ? (filters.status as string[])
            : []
          const term = (search ?? "").toLowerCase().trim()

          const filtered = groups.filter((g) => {
            const children = getChildren(roles, g)
            return children.some((c) => {
              const matchesStatus =
                wantedStatuses.length === 0 ||
                wantedStatuses.includes(c.status)
              const matchesSearch =
                term === "" ||
                c.title.toLowerCase().includes(term) ||
                c.family.toLowerCase().includes(term) ||
                c.function.toLowerCase().includes(term) ||
                c.level.toLowerCase().includes(term)
              return matchesStatus && matchesSearch
            })
          })

          const sorted = applySort(filtered, sortings, (r, field) => {
            switch (field) {
              case "title":
                return r.title.toLowerCase()
              default:
                return null
            }
          })

          const perPage = pagination?.perPage ?? 25
          const currentPage =
            pagination && "currentPage" in pagination && pagination.currentPage
              ? pagination.currentPage
              : 1
          const total = sorted.length
          const pagesCount = Math.max(1, Math.ceil(total / perPage))
          const start = (currentPage - 1) * perPage

          return {
            type: "pages" as const,
            records: sorted.slice(start, start + perPage),
            total,
            perPage,
            currentPage,
            pagesCount,
          }
        },
      },
      itemsWithChildren: (item: MappingRow) => item.isGroup,
      childrenCount: ({ item }: { item: MappingRow }) => item.childCount,
      fetchChildren: ({ item }: { item: MappingRow }) => {
        const children = getChildren(roles, item)
        return { records: children }
      },
      itemOnClick: (item: MappingRow) => () => {
        if (!item.isGroup) {
          onRowClick(item as unknown as InternalRole)
        }
      },
      primaryActions: () => ({
        label: "Map automatically",
        icon: Ai,
        onClick: onAutoMap,
      }),
      itemActions: (item: MappingRow) =>
        item.isGroup
          ? []
          : [
              {
                label:
                  item.status === "suggested"
                    ? "Review suggestion"
                    : item.status === "confirmed"
                      ? "View mapping"
                      : "Map role",
                onClick: () =>
                  onRowClick(item as unknown as InternalRole),
              },
            ],
    },
    [roles, groups, onAutoMap, onRowClick, onBulkAccept, onBulkReject, onBulkRemap]
  )
}
