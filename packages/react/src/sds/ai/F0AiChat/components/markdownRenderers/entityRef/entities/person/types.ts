/**
 * Profile data for a person entity (employee), resolved asynchronously
 * and displayed in the entity reference hover card.
 */
export type PersonProfile = {
  id: string | number
  firstName: string
  lastName: string
  avatarUrl?: string
  jobTitle?: string
  managerId?: string
  managerFirstName?: string
  managerLastName?: string
  managerAvatarUrl?: string
}
