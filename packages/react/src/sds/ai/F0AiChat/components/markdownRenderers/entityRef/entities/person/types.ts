/**
 * Minimal reference to a person, used inline inside other entity profiles
 * (e.g. a vacancy's recruiter, a requisition's owner). Deliberately narrower
 * than `PersonProfile` — only the fields needed to render a person row.
 */
export type PersonRef = {
  id: string | number
  firstName: string
  lastName: string
  avatarUrl?: string
}

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
