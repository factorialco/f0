/**
 * Right-side F0Dialog showing all levels for a role and their mappings.
 * Clicking "Map manually" opens a centered Mercer role picker modal
 * with searchable selectable cards (title + description).
 */
import { useState } from "react"
import {
  F0Box,
  F0Button,
  F0Dialog,
  F0Heading,
  F0TagStatus,
  F0Text,
} from "@factorialco/f0-react"
import { CheckCircleLine, Cross, Search } from "@factorialco/f0-react/icons/app"

import type { InternalRole, MercerRole } from "../shared/types"
import { findMercerRole, searchMercerCatalog } from "../shared/mercerCatalog"
import { statusLabel, statusVariant } from "../shared/statusHelpers"

// ── Mercer Role Picker Modal ─────────────────────────────────────────

function MercerPicker({
  isOpen,
  onSelect,
  onClose,
}: {
  isOpen: boolean
  onSelect: (code: string) => void
  onClose: () => void
}) {
  const [search, setSearch] = useState("")
  const [selected, setSelected] = useState<string | null>(null)
  const results = searchMercerCatalog(search, 50)

  return (
    <F0Dialog
      isOpen={isOpen}
      onClose={onClose}
      position="center"
      width="xl"
      title="Select a Mercer role"
      description="Search and select the Mercer role that best matches this position."
      primaryAction={
        selected
          ? {
              label: "Confirm selection",
              icon: CheckCircleLine,
              onClick: () => {
                onSelect(selected)
                onClose()
              },
            }
          : { label: "Confirm selection", icon: CheckCircleLine, onClick: () => {}, disabled: true }
      }
      secondaryAction={{ label: "Cancel", onClick: onClose }}
    >
      <F0Box display="flex" flexDirection="column" gap="md">
        {/* Search */}
        <div className="flex items-center gap-2 rounded-md border border-f1-border-secondary px-3 py-2">
          <Search />
          <input
            type="text"
            placeholder="Search by role title, code, or family..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-transparent text-sm text-f1-foreground outline-none placeholder:text-f1-foreground-secondary"
            autoFocus
          />
        </div>

        {/* Selectable card list */}
        <div className="flex max-h-[400px] flex-col gap-2 overflow-y-auto">
          {results.map((mr) => (
            <MercerCard
              key={mr.code}
              role={mr}
              isSelected={selected === mr.code}
              onSelect={() => setSelected(mr.code)}
            />
          ))}
          {results.length === 0 && (
            <F0Box padding="lg" display="flex" justifyContent="center">
              <F0Text content="No roles match your search." variant="description" />
            </F0Box>
          )}
        </div>
      </F0Box>
    </F0Dialog>
  )
}

function MercerCard({
  role,
  isSelected,
  onSelect,
}: {
  role: MercerRole
  isSelected: boolean
  onSelect: () => void
}) {
  const desc =
    role.description.length > 180
      ? role.description.substring(0, 180) + "..."
      : role.description

  return (
    <div
      className={`cursor-pointer rounded-xl border-2 p-4 transition-colors ${
        isSelected
          ? "border-f1-border-selected-bold bg-f1-background-selected-secondary"
          : "border-f1-border-secondary bg-f1-background hover:border-f1-border"
      }`}
      onClick={onSelect}
    >
      <F0Box display="flex" flexDirection="column" gap="xs">
        <F0Box display="flex" alignItems="center" gap="sm">
          <F0Text content={role.title} variant="body" />
          {isSelected && (
            <F0TagStatus text="Selected" variant="positive" />
          )}
        </F0Box>
        <F0Text content={desc} variant="description" />
        <F0Text content={role.code} variant="small" />
      </F0Box>
    </div>
  )
}

// ── Level Card inside the drawer ─────────────────────────────────────

function LevelCard({
  role,
  onAccept,
  onDismiss,
  onOpenPicker,
}: {
  role: InternalRole
  onAccept: (id: string) => void
  onDismiss: (id: string) => void
  onOpenPicker: (id: string) => void
}) {
  const mercer =
    role.confirmedMercerCode
      ? findMercerRole(role.confirmedMercerCode)
      : role.suggestedMercerCode
        ? findMercerRole(role.suggestedMercerCode)
        : undefined

  return (
    <F0Box
      border="default"
      borderRadius="md"
      padding="md"
      display="flex"
      flexDirection="column"
      gap="sm"
    >
      {/* Level header */}
      <F0Box display="flex" alignItems="center" gap="sm">
        <F0Heading content={role.level} variant="heading" as="h4" />
        <F0TagStatus
          text={statusLabel(role.status)}
          variant={statusVariant(role.status)}
        />
      </F0Box>

      {/* Mercer mapping info */}
      {mercer && (
        <F0Box
          background={role.status === "confirmed" ? "positive" : "info"}
          borderRadius="md"
          padding="sm"
          display="flex"
          flexDirection="column"
          gap="xs"
        >
          <F0Text content={mercer.title} variant="body" />
          <F0Text
            content={mercer.description.length > 120 ? mercer.description.substring(0, 120) + "..." : mercer.description}
            variant="description"
          />
        </F0Box>
      )}

      {role.status === "unmapped" && (
        <F0Text content="No mapping assigned" variant="description" />
      )}

      {/* Actions */}
      <F0Box display="flex" gap="xs" flexWrap="wrap">
        {role.status === "suggested" && (
          <>
            <F0Button
              label="Accept"
              icon={CheckCircleLine}
              onClick={() => onAccept(role.id)}
            />
            <F0Button
              label="Dismiss"
              variant="neutral"
              icon={Cross}
              onClick={() => onDismiss(role.id)}
            />
          </>
        )}
        {role.status === "unmapped" && (
          <F0Button
            label="Map manually"
            variant="outline"
            onClick={() => onOpenPicker(role.id)}
          />
        )}
        {role.status === "confirmed" && (
          <F0Button
            label="Remap"
            variant="outline"
            onClick={() => onOpenPicker(role.id)}
          />
        )}
      </F0Box>
    </F0Box>
  )
}

// ── Main Drawer ──────────────────────────────────────────────────────

type Props = {
  roles: InternalRole[]
  isOpen: boolean
  onAccept: (id: string) => void
  onDismiss: (id: string) => void
  onAssign: (id: string, mercerCode: string) => void
  onClose: () => void
}

export function MappingDrawer({
  roles,
  isOpen,
  onAccept,
  onDismiss,
  onAssign,
  onClose,
}: Props) {
  const [pickerRoleId, setPickerRoleId] = useState<string | null>(null)

  if (roles.length === 0) return null

  const title = roles[0].title
  const confirmed = roles.filter((r) => r.status === "confirmed").length

  return (
    <>
      <F0Dialog
        isOpen={isOpen}
        onClose={onClose}
        position="right"
        width="md"
        title={title}
        description={`${confirmed}/${roles.length} levels mapped`}
      >
        <F0Box display="flex" flexDirection="column" gap="md">
          {roles.map((role) => (
            <LevelCard
              key={role.id}
              role={role}
              onAccept={onAccept}
              onDismiss={onDismiss}
              onOpenPicker={setPickerRoleId}
            />
          ))}
        </F0Box>
      </F0Dialog>

      {/* Mercer role picker modal */}
      <MercerPicker
        isOpen={pickerRoleId !== null}
        onSelect={(code) => {
          if (pickerRoleId) onAssign(pickerRoleId, code)
        }}
        onClose={() => setPickerRoleId(null)}
      />
    </>
  )
}
