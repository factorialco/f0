/**
 * Role-detail drawer for the Job Catalog tab.
 *
 * Clicking a role in the org chart opens THIS (read-only role detail) — the
 * same layout used by the `mercer-level-analysis` prototype — instead of
 * jumping to the mapping drawer. We reuse that prototype's drawer component and
 * detail generator so the two stay identical by construction.
 */
import { useState } from "react"

import type { InternalRole } from "../shared/types"
import { RoleDetailDrawer } from "../../mercer-level-analysis/components/RoleDetailDrawer"
import {
  levelDetailsFor,
  type CatalogRole,
} from "../../mercer-level-analysis/shared/analysisData"

const LEVEL_RANK: Record<string, number> = {
  "C-Level": 100,
  VP: 90,
  Director: 80,
  Manager: 70,
  Staff: 60,
  Principal: 55,
  Lead: 50,
  Senior: 40,
  Mid: 30,
  Junior: 20,
  Intern: 10,
}

const BASE_BY_FUNCTION: Record<string, number> = {
  Engineering: 30000,
  "Product & Design": 32000,
  Sales: 28000,
  Marketing: 27000,
  Finance: 29000,
  People: 28000,
  Operations: 27000,
}

/** Build a CatalogRole (the shape the shared drawer expects) from a role group. */
function toCatalogRole(group: InternalRole[]): CatalogRole {
  const first = group[0]
  const levels = [...new Set(group.map((r) => r.level))].sort(
    (a, b) => (LEVEL_RANK[a] ?? 50) - (LEVEL_RANK[b] ?? 50)
  )
  return {
    id: `${first.function}::${first.family}::${first.title}`,
    title: first.title,
    family: first.family,
    function: first.function,
    levels,
    mercerFamily: first.suggestedMercerCode?.split(".").slice(0, 3).join(".") ?? "TEC.00.000",
    mercerTitle: first.title,
    baseMin: BASE_BY_FUNCTION[first.function] ?? 30000,
  }
}

type Props = {
  group: InternalRole[]
  isOpen: boolean
  onClose: () => void
}

export function CatalogRoleDrawer({ group, isOpen, onClose }: Props) {
  const role = group.length > 0 ? toCatalogRole(group) : null
  const levelDetails = role ? levelDetailsFor(role) : {}
  const levelIds = role ? role.levels : []
  const [selectedLevel, setSelectedLevel] = useState<string | null>(null)
  const activeLevel =
    selectedLevel && levelIds.includes(selectedLevel)
      ? selectedLevel
      : levelIds[0]

  if (!isOpen || !role || !activeLevel) return null
  const detail = levelDetails[activeLevel]

  return (
    <>
      <div
        className="fixed inset-0 z-40 bg-f1-background-overlay"
        onClick={onClose}
        aria-hidden
      />
      <div className="fixed right-0 top-0 z-50 h-full p-3">
        <RoleDetailDrawer
          role={role}
          detail={detail}
          levelIds={levelIds}
          selectedLevel={activeLevel}
          onSelectLevel={setSelectedLevel}
        />
      </div>
    </>
  )
}
