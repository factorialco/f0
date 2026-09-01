import { useCallback, useEffect, useRef, useState } from "react"

import { F0Button } from "@/components/F0Button"
import type { ResolvedRecordType } from "@/components/F0Select"
import type { RecordType } from "@/hooks/datasource"
import { Share } from "@/icons/app"
import { DataTestIdWrapper } from "@/lib/data-testid"
import { useI18n } from "@/lib/providers/i18n"
import { F0Dialog } from "@/patterns/F0Dialog"

import { SharingAccessList } from "./components/SharingAccessList"
import { SharingPeopleSelector } from "./components/SharingPeopleSelector"
import type {
  F0SharingDialogAccess,
  F0SharingDialogActionResult,
  F0SharingDialogProps,
} from "./types"

export function F0SharingDialog<
  Person extends RecordType,
  Role extends string,
  PersonId extends string = string,
>({
  isOpen,
  title,
  description,
  onClose,
  peopleSource,
  mapPerson,
  accesses,
  roles,
  defaultRole,
  isAddingPeople = false,
  isUpdatingAccess = false,
  onAddPeople,
  onRoleChange,
  onRemoveAccess,
  dataTestId,
}: F0SharingDialogProps<Person, Role, PersonId>) {
  const i18n = useI18n()
  const [selectedPersonIds, setSelectedPersonIds] = useState<PersonId[]>([])
  const [selectedPeople, setSelectedPeople] = useState<
    ResolvedRecordType<Person>[]
  >([])
  const [selectedRole, setSelectedRole] = useState<Role>(defaultRole)
  const [selectionResetKey, setSelectionResetKey] = useState(0)
  const peopleSelectorRef = useRef<HTMLDivElement>(null)
  const hasSelectedPeople = selectedPersonIds.length > 0

  const resetSelection = useCallback(() => {
    setSelectedPersonIds([])
    setSelectedPeople([])
    setSelectedRole(defaultRole)
    setSelectionResetKey((key) => key + 1)
  }, [defaultRole])

  useEffect(
    function resetSharingSelectionWhenClosed() {
      if (!isOpen) {
        resetSelection()
      }
    },
    [isOpen, resetSelection]
  )

  const handlePeopleChange = (
    personIds: PersonId[],
    people: ResolvedRecordType<Person>[]
  ) => {
    setSelectedPersonIds(personIds)
    setSelectedPeople(people)
  }

  const handleAddPeople = async () => {
    if (!hasSelectedPeople) return

    let result: F0SharingDialogActionResult
    try {
      result = await onAddPeople({
        personIds: selectedPersonIds,
        people: selectedPeople,
        role: selectedRole,
      })
    } catch {
      return
    }

    if (result !== false) {
      resetSelection()
    }
  }

  const handleRemoveAccess = async (
    access: F0SharingDialogAccess<Person, Role>
  ) => {
    const result = await onRemoveAccess(access)

    if (result !== false) {
      peopleSelectorRef.current
        ?.querySelector<HTMLElement>('[role="combobox"]')
        ?.focus()
    }

    return result
  }

  const sharingDisabled = isAddingPeople || isUpdatingAccess
  const hasValidDefaultRole = roles.some(
    (role) => role.value === defaultRole && role.assignable !== false
  )

  if (!hasValidDefaultRole) {
    throw new Error(
      "F0SharingDialog: defaultRole must reference an assignable role"
    )
  }

  return (
    <F0Dialog
      description={description}
      isOpen={isOpen}
      onClose={onClose}
      title={title}
      width="md"
    >
      <DataTestIdWrapper dataTestId={dataTestId}>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-3 md:flex-row md:items-end">
            <div className="min-w-0 flex-1" ref={peopleSelectorRef}>
              <SharingPeopleSelector
                peopleSource={peopleSource}
                mapPerson={mapPerson}
                roles={roles}
                selectedPersonIds={selectedPersonIds}
                selectedRole={selectedRole}
                disabled={sharingDisabled}
                resetKey={selectionResetKey}
                onPeopleChange={handlePeopleChange}
                onRoleChange={setSelectedRole}
              />
            </div>
            <div className="shrink-0">
              <F0Button
                disabled={!hasSelectedPeople || sharingDisabled}
                icon={Share}
                label={i18n.sharingDialog.share}
                loading={isAddingPeople}
                onClick={handleAddPeople}
                size="lg"
              />
            </div>
          </div>

          <SharingAccessList
            accesses={accesses}
            roles={roles}
            mapPerson={mapPerson}
            disabled={sharingDisabled}
            busy={isUpdatingAccess}
            onRoleChange={onRoleChange}
            onRemoveAccess={handleRemoveAccess}
          />
        </div>
      </DataTestIdWrapper>
    </F0Dialog>
  )
}

F0SharingDialog.displayName = "F0SharingDialog"
