import { useMemo } from "react"

import { F0Avatar } from "@/components/avatars/F0Avatar"
import { F0Button } from "@/components/F0Button"
import { F0Select, type F0SelectItemProps } from "@/components/F0Select"
import { F0Text } from "@/components/F0Text"
import type { RecordType } from "@/hooks/datasource"
import { Delete } from "@/icons/app"
import { useI18n } from "@/lib/providers/i18n"

import type { SharingAccessRowProps } from "../internal-types"

export function SharingAccessRow<
  Person extends RecordType,
  Role extends string,
  PersonId extends string,
>({
  access,
  roles,
  mapPerson,
  disabled,
  onRoleChange,
  onRemoveAccess,
  portalContainer,
}: SharingAccessRowProps<Person, Role, PersonId>) {
  const i18n = useI18n()
  const person = mapPerson(access.person)
  const role = roles.find((candidate) => candidate.value === access.role)
  const assignableRoleOptions = useMemo<F0SelectItemProps<Role>[]>(
    () =>
      roles
        .filter((candidate) => candidate.assignable !== false)
        .map((candidate) => ({
          value: candidate.value,
          label: candidate.label,
          description: candidate.description,
        })),
    [roles]
  )
  const removeAccessForLabel = i18n.t("sharingDialog.removeAccessFor", {
    name: person.label,
  })

  if (!role) {
    throw new Error(
      `F0SharingDialog: access ${access.id} references a role that is not present in roles`
    )
  }

  const handleRoleChange = (nextRole: Role) => {
    if (nextRole !== access.role) {
      void onRoleChange(access, nextRole)
    }
  }

  const handleRemoveAccess = async () => {
    if (!access.canRemove || disabled) return

    await onRemoveAccess(access)
  }

  return (
    <div
      className="flex min-w-0 items-center gap-3"
      data-access-id={access.id}
      role="listitem"
    >
      {person.avatar ? <F0Avatar avatar={person.avatar} size="md" /> : null}
      <div className="flex min-w-0 flex-1 flex-col gap-1 overflow-hidden">
        <F0Text content={person.label} variant="label" />
        {person.description ? (
          <F0Text content={person.description} variant="description" />
        ) : null}
      </div>

      {access.canChangeRole ? (
        <F0Select<Role>
          variant="inline"
          actions={[
            {
              icon: Delete,
              label: i18n.sharingDialog.removeAccess,
              onClick: handleRemoveAccess,
              variant: "critical",
              disabled: !access.canRemove || disabled,
            },
          ]}
          defaultItem={{
            value: role.value,
            label: role.label,
            description: role.description,
          }}
          disabled={disabled}
          label={i18n.t("sharingDialog.accessLevelFor", {
            name: person.label,
          })}
          onChange={handleRoleChange}
          options={assignableRoleOptions}
          portalContainer={portalContainer}
          value={access.role}
        />
      ) : (
        <div className="inline-flex max-w-full items-center gap-1">
          <div className="inline-flex h-8 max-w-full items-center px-2 pl-3">
            <F0Text content={role.label} variant="label" />
          </div>
          {access.canRemove ? (
            <F0Button
              disabled={disabled}
              hideLabel
              icon={Delete}
              label={removeAccessForLabel}
              onClick={handleRemoveAccess}
              variant="ghost"
            />
          ) : null}
        </div>
      )}
    </div>
  )
}
