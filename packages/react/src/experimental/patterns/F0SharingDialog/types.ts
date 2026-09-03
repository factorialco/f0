import type {
  F0SelectItemObject,
  ResolvedRecordType,
} from "@/components/F0Select"
import type { DataSourceDefinition, RecordType } from "@/hooks/datasource"
import type { WithDataTestIdProps } from "@/lib/data-testid"

export interface F0SharingDialogRole<Role extends string> {
  value: Role
  label: string
  description?: string
  /** Whether this role can be assigned to new or existing people. */
  assignable?: boolean
}

export interface F0SharingDialogAccess<
  Person extends RecordType,
  Role extends string,
> {
  id: string
  person: ResolvedRecordType<Person>
  role: Role
  canChangeRole: boolean
  canRemove: boolean
}

export interface F0SharingDialogSelection<
  Person extends RecordType,
  Role extends string,
  PersonId extends string,
> {
  personIds: PersonId[]
  people: ResolvedRecordType<Person>[]
  role: Role
}

export type F0SharingDialogActionResult = boolean | void

export interface F0SharingDialogProps<
  Person extends RecordType,
  Role extends string,
  PersonId extends string = string,
> extends WithDataTestIdProps {
  isOpen: boolean
  title: string
  description?: string
  onClose: () => void
  peopleSource: DataSourceDefinition<ResolvedRecordType<Person>>
  mapPerson: (
    person: ResolvedRecordType<Person>
  ) => F0SelectItemObject<PersonId, ResolvedRecordType<Person>>
  accesses: F0SharingDialogAccess<Person, Role>[]
  roles: F0SharingDialogRole<Role>[]
  defaultRole: Role
  isAddingPeople?: boolean
  isUpdatingAccess?: boolean
  onAddPeople: (
    selection: F0SharingDialogSelection<Person, Role, PersonId>
  ) => Promise<F0SharingDialogActionResult> | F0SharingDialogActionResult
  onRoleChange: (
    access: F0SharingDialogAccess<Person, Role>,
    role: Role
  ) => Promise<F0SharingDialogActionResult> | F0SharingDialogActionResult
  onRemoveAccess: (
    access: F0SharingDialogAccess<Person, Role>
  ) => Promise<F0SharingDialogActionResult> | F0SharingDialogActionResult
}
