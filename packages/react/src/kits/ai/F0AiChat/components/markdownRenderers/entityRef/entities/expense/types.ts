/**
 * Profile data for an expense entity, resolved asynchronously
 * and displayed in the entity reference hover card.
 */
export type ExpenseProfile = {
  id: string | number
  description?: string
  amount?: string
  status?: string
}
