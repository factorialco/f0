import type {
  F0SelectItemObject,
  ResolvedRecordType,
} from "@/components/F0Select"
import type { DataSourceDefinition, RecordType } from "@/hooks/datasource"

import type {
  F0SharingDialogAccess,
  F0SharingDialogActionResult,
  F0SharingDialogRole,
} from "./types"

export interface SharingPeopleSelectorProps<
  Person extends RecordType,
  Role extends string,
  PersonId extends string,
> {
  peopleSource: DataSourceDefinition<ResolvedRecordType<Person>>
  mapPerson: (
    person: ResolvedRecordType<Person>
  ) => F0SelectItemObject<PersonId, ResolvedRecordType<Person>>
  roles: F0SharingDialogRole<Role>[]
  selectedPersonIds: PersonId[]
  selectedRole: Role
  disabled: boolean
  resetKey: number
  onPeopleChange: (
    personIds: PersonId[],
    people: ResolvedRecordType<Person>[]
  ) => void
  onRoleChange: (role: Role) => void
}

export interface SharingAccessListProps<
  Person extends RecordType,
  Role extends string,
  PersonId extends string,
> {
  accesses: F0SharingDialogAccess<Person, Role>[]
  roles: F0SharingDialogRole<Role>[]
  mapPerson: (
    person: ResolvedRecordType<Person>
  ) => F0SelectItemObject<PersonId, ResolvedRecordType<Person>>
  disabled: boolean
  busy: boolean
  onRoleChange: (
    access: F0SharingDialogAccess<Person, Role>,
    role: Role
  ) => Promise<F0SharingDialogActionResult> | F0SharingDialogActionResult
  onRemoveAccess: (
    access: F0SharingDialogAccess<Person, Role>
  ) => Promise<F0SharingDialogActionResult> | F0SharingDialogActionResult
}

export type SharingAccessRowProps<
  Person extends RecordType,
  Role extends string,
  PersonId extends string,
> = Omit<
  SharingAccessListProps<Person, Role, PersonId>,
  "accesses" | "busy"
> & {
  access: F0SharingDialogAccess<Person, Role>
  portalContainer: HTMLElement | null
}
