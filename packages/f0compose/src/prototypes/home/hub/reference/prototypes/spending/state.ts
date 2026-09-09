import {
  createContext,
  useContext,
  type Dispatch,
  type SetStateAction,
} from "react"

import type { Expense, ExpenseCategory, ExpenseStatus } from "./mocks/expenses"

/**
 * Prototype UI state — the single source of truth the chat co-creates against.
 * Everything visible (tabs, toggle, column headers, category / status labels)
 * is read from `t = strings[language]`, so the chat flipping `language`
 * re-renders the whole screen in the other language. `scope` (all / mine) and
 * `onlyDuplicates` are also co-created by the chat.
 */
export type Language = "en" | "es"

export type Scope = "all" | "mine"

export type SpendingState = {
  language: Language
  /** "all" company expenses vs. just the current user's. */
  scope: Scope
  /** When true, the table only shows rows flagged with a duplicate alert. */
  onlyDuplicates: boolean
}

/** The "current user" whose expenses show under the "My expenses" toggle. */
export const CURRENT_USER_ID = "emp-001"

export const initialState: SpendingState = {
  language: "en",
  scope: "all",
  onlyDuplicates: false,
}

export const strings = {
  en: {
    title: "Spending",
    // top tabs
    tabs: {
      expenses: "Expenses",
      purchase_invoices: "Purchase invoices",
      budgets: "Budgets",
      procurement: "Procurement",
      software: "Software",
      vendors: "Vendors",
      cards: "Cards",
    },
    // scope toggle
    scopeAll: "All",
    scopeMine: "Personal",
    // cards feature
    cards: {
      allCards: "All",
      myCards: "Personal",
      scope: "Scope",
      newCard: "New card",
      newFilter: "New filter",
      colCardholder: "Cardholder",
      colCardNumber: "Card number",
      colAlias: "Card alias",
      colType: "Type",
      colService: "Service",
      colStatus: "Status",
      statusActive: "Active",
      statusInactive: "Inactive",
    },
    // presets
    presetPending: "Pending",
    presetApproved: "Approved",
    presetPaid: "Paid",
    // actions
    syncToDemo: "Sync to Demo",
    newExpense: {
      label: "New expense",
      skip: "Drop receipts",
      skipDesc: "One drafts the expenses for you",
      regular: "Regular expense",
      regularDesc: "Costs proven by receipts or invoices",
      mileage: "Mileage",
      mileageDesc: "Travel with a personal vehicle",
      perDiem: "Per diem",
      perDiemDesc: "Fixed daily travel allowance",
      group: "Add group",
      groupDesc: "Multiple related expenses",
    },
    approve: "Approve",
    reject: "Reject",
    viewDetails: "View details",
    createExpense: "Create expense",
    // columns
    colOwner: "Owner",
    colStatus: "Status",
    colDocumentDate: "Document date",
    colAmount: "Amount",
    colCategory: "Category",
    colAlerts: "Alerts",
    colGroup: "Group",
    colSyncStatus: "Sync status",
    // filters
    filterStatus: "Status",
    filterCategory: "Category",
    alertDuplicate: "Duplicate",
    status: {
      pending: "Pending",
      approved: "Approved",
      paid: "Paid",
    } satisfies Record<ExpenseStatus, string>,
    category: {
      accommodation: "Accommodation",
      per_diem: "Per diem",
      meals: "Meals",
      transport: "Transport",
      private_transport: "Private transport",
      rail_travel: "Rail travel",
      training: "Training",
      public_transport: "Public transport",
      subscriptions: "Subscriptions",
      tolls: "Tolls",
      refreshments: "Refreshments",
    } satisfies Record<ExpenseCategory, string>,
  },
  es: {
    title: "Gastos",
    tabs: {
      expenses: "Gastos",
      purchase_invoices: "Facturas de compra",
      budgets: "Presupuestos",
      procurement: "Compras",
      software: "Software",
      vendors: "Proveedores",
      cards: "Tarjetas",
    },
    scopeAll: "Todos",
    scopeMine: "Personal",
    cards: {
      allCards: "Todas",
      myCards: "Personal",
      scope: "Ámbito",
      newCard: "Nueva tarjeta",
      newFilter: "Nuevo filtro",
      colCardholder: "Titular",
      colCardNumber: "Número de tarjeta",
      colAlias: "Alias de la tarjeta",
      colType: "Tipo",
      colService: "Servicio",
      colStatus: "Estado",
      statusActive: "Activa",
      statusInactive: "Inactiva",
    },
    presetPending: "Pendientes",
    presetApproved: "Aprobados",
    presetPaid: "Pagados",
    syncToDemo: "Sincronizar con Demo",
    newExpense: {
      label: "Nuevo gasto",
      skip: "Suelta los tickets",
      skipDesc: "One redacta los gastos por ti",
      regular: "Gasto normal",
      regularDesc: "Costes justificados con tickets o facturas",
      mileage: "Kilometraje",
      mileageDesc: "Desplazamientos con vehículo propio",
      perDiem: "Dietas",
      perDiemDesc: "Asignación diaria fija de viaje",
      group: "Añadir grupo",
      groupDesc: "Varios gastos relacionados",
    },
    approve: "Aprobar",
    reject: "Rechazar",
    viewDetails: "Ver detalles",
    createExpense: "Crear gasto",
    colOwner: "Propietario",
    colStatus: "Estado",
    colDocumentDate: "Fecha del documento",
    colAmount: "Importe",
    colCategory: "Categoría",
    colAlerts: "Alertas",
    colGroup: "Grupo",
    colSyncStatus: "Estado de sincronización",
    filterStatus: "Estado",
    filterCategory: "Categoría",
    alertDuplicate: "Duplicado",
    status: {
      pending: "Pendiente",
      approved: "Aprobado",
      paid: "Pagado",
    } satisfies Record<ExpenseStatus, string>,
    category: {
      accommodation: "Alojamiento",
      per_diem: "Dietas",
      meals: "Comidas",
      transport: "Transporte",
      private_transport: "Transporte privado",
      rail_travel: "Tren",
      training: "Formación",
      public_transport: "Transporte público",
      subscriptions: "Suscripciones",
      tolls: "Peajes",
      refreshments: "Refrigerios",
    } satisfies Record<ExpenseCategory, string>,
  },
} as const

export type SpendingStrings = (typeof strings)[Language]

type SpendingStore = {
  state: SpendingState
  setState: Dispatch<SetStateAction<SpendingState>>
  language: Language
  /** Live, mutable domain data so interactions (approve) actually work. */
  expenses: Expense[]
  approveExpense: (id: string) => void
  rejectExpense: (id: string) => void
}

export const SpendingStateContext = createContext<SpendingStore | null>(null)

export function useSpendingState(): SpendingStore & { t: SpendingStrings } {
  const store = useContext(SpendingStateContext)
  if (!store) {
    throw new Error("useSpendingState must be used inside SpendingLayout")
  }
  return { ...store, t: strings[store.state.language] }
}
