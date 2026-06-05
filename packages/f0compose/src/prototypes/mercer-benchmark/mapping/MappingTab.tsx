/**
 * Mapping tab — single OneDataCollection with nested rows and bulk actions.
 * Parent rows = role groups (expandable), child rows = individual levels.
 * Multi-select + bulk action bar: Accept all suggestions, Reject all, Remap.
 */
import { useCallback } from "react"
import { F0Box, F0Card, F0Heading, F0Text } from "@factorialco/f0-react"
import { OneDataCollection } from "@factorialco/f0-react/dist/experimental"

import type { InternalRole } from "../shared/types"
import { mappingColumns } from "./mappingColumns"
import { useMappingSource } from "./useMappingSource"

type Props = {
  roles: InternalRole[]
  confirmedCount: number
  totalCount: number
  onAutoMap: () => void
  onRowClick: (role: InternalRole) => void
  onBulkAccept: (ids: string[]) => void
  onBulkReject: (ids: string[]) => void
  onBulkRemap: (ids: string[]) => void
}

export function MappingTab({
  roles,
  confirmedCount,
  totalCount,
  onAutoMap,
  onRowClick,
  onBulkAccept,
  onBulkReject,
  onBulkRemap,
}: Props) {
  const source = useMappingSource(
    roles,
    onAutoMap,
    onRowClick,
    onBulkAccept,
    onBulkReject,
    onBulkRemap
  )

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleBulkAction = useCallback(
    (action: string, selectedItems: any, clearSelectedItems: () => void) => {
      const ids: string[] =
        selectedItems.type === "all"
          ? roles.map((r) => r.id)
          : (selectedItems.items ?? [])
      switch (action) {
        case "accept-all":
          onBulkAccept(ids)
          break
        case "reject-all":
          onBulkReject(ids)
          break
        case "remap":
          onBulkRemap(ids)
          break
      }
      clearSelectedItems()
    },
    [roles, onBulkAccept, onBulkReject, onBulkRemap]
  )

  const pct = totalCount > 0 ? Math.round((confirmedCount / totalCount) * 100) : 0
  const done = confirmedCount >= totalCount && totalCount > 0

  return (
    <F0Box display="flex" flexDirection="column" gap="lg">
      {/* Section header with radial progress on the left */}
      <F0Box display="flex" alignItems="start" gap="lg">
        {/* Radial progress — wide card on the left */}
        <F0Card
          title="Mapping progress"
          description={`${confirmedCount} of ${totalCount} roles mapped`}
        >
          <div className="flex h-36 w-64 items-center justify-center">
            <svg width="130" height="130" viewBox="0 0 130 130">
              <circle
                cx="65" cy="65" r="56"
                fill="none"
                stroke="hsl(0 0% 90%)"
                strokeWidth="14"
              />
              <circle
                cx="65" cy="65" r="56"
                fill="none"
                stroke={done ? "hsl(142 71% 45%)" : "hsl(48 96% 53%)"}
                strokeWidth="14"
                strokeDasharray={2 * Math.PI * 56}
                strokeDashoffset={(1 - pct / 100) * 2 * Math.PI * 56}
                strokeLinecap="round"
                transform="rotate(-90 65 65)"
              />
              <text
                x="65" y="58"
                textAnchor="middle"
                className="text-lg font-semibold"
                fill="currentColor"
              >
                {pct}%
              </text>
              <text
                x="65" y="78"
                textAnchor="middle"
                className="text-xs"
                fill="hsl(0 0% 55%)"
              >
                mapped
              </text>
            </svg>
          </div>
        </F0Card>

        <F0Box grow display="flex" flexDirection="column" gap="xs">
          <F0Heading
            content="Role mapping"
            variant="heading"
            as="h2"
          />
          <div className="pb-2" />
          <F0Text
            content="Map your internal roles to Mercer's taxonomy to unlock salary benchmarking. Review auto-suggested mappings or search the Mercer catalog to assign them manually."
            variant="description"
          />
        </F0Box>
      </F0Box>

      <div className="pb-4" />

      {/* Nested DataCollection with multi-select + bulk actions */}
      <OneDataCollection
        source={source}
        onBulkAction={handleBulkAction}
        visualizations={[
          {
            type: "table",
            options: { columns: mappingColumns },
          },
        ]}
      />
    </F0Box>
  )
}
