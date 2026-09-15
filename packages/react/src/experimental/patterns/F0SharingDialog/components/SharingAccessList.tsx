import { useId } from "react"

import { F0Text } from "@/components/F0Text"
import type { RecordType } from "@/hooks/datasource"
import { useI18n } from "@/lib/providers/i18n"
import { useF0Dialog } from "@/patterns/F0Dialog"

import type { SharingAccessListProps } from "../internal-types"
import { SharingAccessRow } from "./SharingAccessRow"

export function SharingAccessList<
  Person extends RecordType,
  Role extends string,
  PersonId extends string,
>({
  accesses,
  roles,
  mapPerson,
  disabled,
  busy,
  onRoleChange,
  onRemoveAccess,
}: SharingAccessListProps<Person, Role, PersonId>) {
  const i18n = useI18n()
  const headingId = useId()
  const { portalContainer } = useF0Dialog()

  return (
    <section
      className="flex flex-col gap-3"
      aria-busy={busy}
      aria-labelledby={headingId}
    >
      <h3 className="m-0" id={headingId}>
        <F0Text
          as="span"
          content={i18n.sharingDialog.whoHasAccess}
          variant="small"
        />
      </h3>

      <span
        aria-atomic="true"
        aria-live="polite"
        className="sr-only"
        role="status"
      >
        {busy
          ? i18n.sharingDialog.updatingAccess
          : i18n.t("sharingDialog.accessSummary", { count: accesses.length })}
      </span>

      {accesses.length > 0 ? (
        <div className="flex flex-col gap-3" role="list">
          {accesses.map((access) => (
            <SharingAccessRow
              key={access.id}
              access={access}
              roles={roles}
              mapPerson={mapPerson}
              disabled={disabled}
              onRoleChange={onRoleChange}
              onRemoveAccess={onRemoveAccess}
              portalContainer={portalContainer}
            />
          ))}
        </div>
      ) : (
        <F0Text
          content={i18n.sharingDialog.noOneHasAccess}
          variant="description"
        />
      )}
    </section>
  )
}
