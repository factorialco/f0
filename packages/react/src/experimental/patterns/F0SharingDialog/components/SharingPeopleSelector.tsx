import { useMemo, type PointerEvent } from "react"

import { F0Select, type F0SelectItemProps } from "@/components/F0Select"
import type { RecordType } from "@/hooks/datasource"
import { useI18n } from "@/lib/providers/i18n"
import { cn } from "@/lib/utils"
import { useF0Dialog } from "@/patterns/F0Dialog"

import type { SharingPeopleSelectorProps } from "../internal-types"

const stopPointerDownPropagation = (event: PointerEvent<HTMLDivElement>) => {
  event.stopPropagation()
}

export function SharingPeopleSelector<
  Person extends RecordType,
  Role extends string,
  PersonId extends string,
>({
  peopleSource,
  mapPerson,
  roles,
  selectedPersonIds,
  selectedRole,
  disabled,
  resetKey,
  onPeopleChange,
  onRoleChange,
}: SharingPeopleSelectorProps<Person, Role, PersonId>) {
  const i18n = useI18n()
  const { portalContainer } = useF0Dialog()
  const hasSelectedPeople = selectedPersonIds.length > 0
  const roleOptions = useMemo<F0SelectItemProps<Role>[]>(
    () =>
      roles
        .filter((role) => role.assignable !== false)
        .map((role) => ({
          value: role.value,
          label: role.label,
          description: role.description,
        })),
    [roles]
  )

  return (
    <div
      className={cn(
        "relative min-w-0 w-full",
        hasSelectedPeople && [
          "[&_[data-testid=input-field-wrapper]_button[aria-label]:not([data-testid=clear-button])]:pr-28",
          "[&_[data-testid=clear-button]+div]:invisible",
          "[&_[data-testid=clear-button]+div]:w-0",
          "[&_[data-testid=clear-button]+div]:min-w-0",
          "[&_[data-testid=clear-button]+div]:overflow-hidden",
        ]
      )}
    >
      <F0Select<PersonId, Person>
        key={resetKey}
        multiple
        clearable
        disableSelectAll
        disabled={disabled}
        fitContentWidth
        hideLabel
        label={i18n.sharingDialog.peopleLabel}
        mapOptions={mapPerson}
        onChange={onPeopleChange}
        placeholder={i18n.sharingDialog.peoplePlaceholder}
        preserveSelectionOnDatasetChange
        showSearchBox
        size="md"
        source={peopleSource}
        value={selectedPersonIds}
      />

      {hasSelectedPeople ? (
        <div
          className="absolute right-9 top-1/2 z-10 flex max-w-[6.75rem] -translate-y-1/2 items-center"
          onPointerDown={stopPointerDownPropagation}
        >
          <F0Select<Role>
            variant="inline"
            disabled={disabled}
            label={i18n.sharingDialog.newPeopleAccessLevel}
            onChange={onRoleChange}
            options={roleOptions}
            portalContainer={portalContainer}
            value={selectedRole}
          />
        </div>
      ) : null}
    </div>
  )
}
