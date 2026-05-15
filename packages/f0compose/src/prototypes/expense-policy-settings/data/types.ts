/**
 * Domain types for the global policy data (shared across all expense
 * forms — Regular, Per diem, Mileage — per spec §10).
 */

export type Category = {
  id: string
  name: string
  visible: boolean
}

export type Subcategory = {
  id: string
  categoryId: string
  name: string
}

export type PaymentMethod = {
  id: string
  name: string
}
