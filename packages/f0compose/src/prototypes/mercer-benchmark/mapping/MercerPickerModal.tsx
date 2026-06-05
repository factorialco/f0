/**
 * Centered F0Dialog for mapping a role.
 *
 * - Suggested roles: shows the suggestion with Accept / Reject buttons.
 *   Accept → confirmed. Reject → switches to the search view.
 * - Unmapped / confirmed roles: F1SearchBox + CardSelectableContainer.
 */
import { useState, useMemo } from "react"
import {
  F0Box,
  F0Dialog,
  F0Heading,
  F0TagStatus,
  F0Text,
  CardSelectableContainer,
} from "@factorialco/f0-react"
import { F1SearchBox } from "@factorialco/f0-react/dist/experimental"
import { CheckCircleLine, Cross } from "@factorialco/f0-react/icons/app"

import type { InternalRole } from "../shared/types"
import { findMercerRole, searchMercerCatalog } from "../shared/mercerCatalog"

type Props = {
  role: InternalRole | null
  isOpen: boolean
  onAccept: (id: string) => void
  onReject: (id: string) => void
  onSelect: (id: string, code: string) => void
  onClose: () => void
}

export function MercerPickerModal({
  role,
  isOpen,
  onAccept,
  onReject,
  onSelect,
  onClose,
}: Props) {
  const [search, setSearch] = useState("")
  const [selected, setSelected] = useState<string | undefined>(undefined)
  const [rejected, setRejected] = useState(false)

  const results = searchMercerCatalog(search, 0)
  const items = useMemo(
    () =>
      results.map((mr) => ({
        value: mr.code,
        title: mr.title,
        description:
          mr.description.length > 200
            ? mr.description.substring(0, 200) + "..."
            : mr.description,
      })),
    [results]
  )

  const handleClose = () => {
    setSearch("")
    setSelected(undefined)
    setRejected(false)
    onClose()
  }

  if (!role) return null

  const isSuggested = role.status === "suggested" && !rejected
  const suggestedMercer = role.suggestedMercerCode
    ? findMercerRole(role.suggestedMercerCode)
    : undefined

  // ── Suggestion review view ─────────────────────────────────────────
  if (isSuggested && suggestedMercer) {
    return (
      <F0Dialog
        isOpen={isOpen}
        onClose={handleClose}
        position="center"
        width="lg"
        title={`${role.title} · ${role.level}`}
        description="We found a suggested Mercer mapping for this role. Review it below."
        primaryAction={{
          label: "Accept mapping",
          icon: CheckCircleLine,
          onClick: () => {
            onAccept(role.id)
            handleClose()
          },
        }}
        secondaryAction={{
          label: "Reject & map manually",
          icon: Cross,
          onClick: () => {
            onReject(role.id)
            setRejected(true)
          },
        }}
      >
        <F0Box display="flex" flexDirection="column" gap="lg">
          {/* Side-by-side comparison */}
          <F0Box display="flex" gap="md" alignItems="stretch">
            {/* Internal role */}
            <F0Box
              border="default"
              borderRadius="md"
              padding="md"
              grow
              display="flex"
              flexDirection="column"
              gap="xs"
            >
              <F0Text content="Your role" variant="label" />
              <F0Heading content={role.title} variant="heading" as="h4" />
              <F0TagStatus text={role.level} variant="neutral" />
              <F0Text
                content={`${role.family} · ${role.function}`}
                variant="description"
              />
            </F0Box>

            <F0Box display="flex" alignItems="center">
              <F0Text content="→" variant="body" />
            </F0Box>

            {/* Suggested Mercer role */}
            <F0Box
              border="default"
              borderRadius="md"
              padding="md"
              grow
              display="flex"
              flexDirection="column"
              gap="xs"
              background="info"
            >
              <F0Text content="Suggested Mercer role" variant="label" />
              <F0Heading
                content={suggestedMercer.title}
                variant="heading"
                as="h4"
              />
              <F0Text content={suggestedMercer.code} variant="description" />
              <F0Text
                content={
                  suggestedMercer.description.length > 300
                    ? suggestedMercer.description.substring(0, 300) + "..."
                    : suggestedMercer.description
                }
                variant="small"
              />
              {role.confidence != null && (
                <F0TagStatus
                  text={`${Math.round(role.confidence * 100)}% confidence`}
                  variant="info"
                />
              )}
            </F0Box>
          </F0Box>
        </F0Box>
      </F0Dialog>
    )
  }

  // ── Search & select view (unmapped, confirmed, or rejected suggestion) ──
  return (
    <F0Dialog
      isOpen={isOpen}
      onClose={handleClose}
      position="center"
      width="xl"
      title={`Map: ${role.title} · ${role.level}`}
      description="Search and select the Mercer role that best matches this position."
      primaryAction={
        selected
          ? {
              label: "Confirm selection",
              icon: CheckCircleLine,
              onClick: () => {
                onSelect(role.id, selected)
                handleClose()
              },
            }
          : {
              label: "Confirm selection",
              icon: CheckCircleLine,
              onClick: () => {},
              disabled: true,
            }
      }
      secondaryAction={{ label: "Cancel", onClick: handleClose }}
    >
      <F0Box display="flex" flexDirection="column" gap="md">
        <F1SearchBox
          placeholder="Search by role title, code, or family..."
          value={search}
          onChange={setSearch}
          clearable
          autoFocus
        />

        <div className="max-h-[400px] overflow-y-auto">
          {items.length > 0 ? (
            <CardSelectableContainer
              items={items}
              value={selected}
              onChange={setSelected}
              label="Mercer roles"
            />
          ) : (
            <F0Box padding="lg" display="flex" justifyContent="center">
              <F0Text
                content="No roles match your search."
                variant="description"
              />
            </F0Box>
          )}
        </div>
      </F0Box>
    </F0Dialog>
  )
}
