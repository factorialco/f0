import type { Category, PaymentMethod, Subcategory } from "./types"

/**
 * Default category list seeded by AI on first setup (spec §4).
 * Curated starter set spanning the most common expense families.
 */
export const seedCategories: Category[] = [
  { id: "cat-meals", name: "Meals", visible: true },
  { id: "cat-travel", name: "Travel", visible: true },
  { id: "cat-per-diems", name: "Per diems", visible: true },
  { id: "cat-office-supplies", name: "Office supplies", visible: true },
  { id: "cat-hospitality", name: "Hospitality", visible: true },
  { id: "cat-fuel", name: "Fuel", visible: true },
  { id: "cat-software", name: "Software", visible: true },
  { id: "cat-training", name: "Training", visible: true },
]

/**
 * Seed subcategories. Travel and Per diems are broken down per spec
 * §9 ("breaking Per diems into half-day / full-day / overnight").
 */
export const seedSubcategories: Subcategory[] = [
  { id: "sub-travel-flights", categoryId: "cat-travel", name: "Flights" },
  { id: "sub-travel-hotels", categoryId: "cat-travel", name: "Hotels" },
  { id: "sub-travel-taxis", categoryId: "cat-travel", name: "Taxis & rideshare" },
  { id: "sub-perdiem-half", categoryId: "cat-per-diems", name: "Half-day" },
  { id: "sub-perdiem-full", categoryId: "cat-per-diems", name: "Full-day" },
  { id: "sub-perdiem-overnight", categoryId: "cat-per-diems", name: "Overnight" },
  { id: "sub-meals-team", categoryId: "cat-meals", name: "Team lunch" },
  { id: "sub-meals-client", categoryId: "cat-meals", name: "Client lunch" },
]

/**
 * Default payment methods (spec §6).
 */
export const seedPaymentMethods: PaymentMethod[] = [
  { id: "pm-personal-debit", name: "Personal debit card" },
  { id: "pm-personal-credit", name: "Personal credit card" },
  { id: "pm-cash", name: "Cash" },
]
