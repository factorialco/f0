import { useCallback, useState } from "react"

import {
  seedCategories,
  seedPaymentMethods,
  seedSubcategories,
} from "./seeds"
import type { Category, PaymentMethod, Subcategory } from "./types"

/**
 * Single source of truth for the global policy lists. Visual-only —
 * nothing is persisted (BR-008 / AC-006).
 *
 * Empty-name behaviour (revised): new rows are created with an empty
 * name and no placeholder is shown. Committing an empty name (Enter
 * or blur) deletes the row instead of keeping an "Untitled X" stub.
 * The same applies when renaming an existing row to blank.
 *
 * - add{Category, Subcategory, PaymentMethod}: append an empty-named
 *   row and return its id so the caller can flag it for inline edit.
 * - rename*: commit a name change. Empty input → delete the row.
 * - delete*: immediate, no confirmation modal (§8). Deleting a
 *   category cascades to all its subcategories (§8).
 * - toggleCategoryVisible: flip a category's `visible` flag (§4).
 */
export function usePolicyData() {
  const [categories, setCategories] = useState<Category[]>(seedCategories)
  const [subcategories, setSubcategories] = useState<Subcategory[]>(
    seedSubcategories
  )
  const [paymentMethods, setPaymentMethods] = useState<PaymentMethod[]>(
    seedPaymentMethods
  )

  // ── Categories ───────────────────────────────────────────────────
  const addCategory = useCallback((): string => {
    const id = `cat-new-${Date.now()}`
    setCategories((prev) => [...prev, { id, name: "", visible: true }])
    return id
  }, [])

  const renameCategory = useCallback((id: string, nextName: string) => {
    const trimmed = nextName.trim()
    if (trimmed === "") {
      setCategories((prev) => prev.filter((c) => c.id !== id))
      setSubcategories((prev) => prev.filter((s) => s.categoryId !== id))
      return
    }
    setCategories((prev) =>
      prev.map((c) => (c.id === id ? { ...c, name: trimmed } : c))
    )
  }, [])

  const deleteCategory = useCallback((id: string) => {
    setCategories((prev) => prev.filter((c) => c.id !== id))
    // Cascading delete (spec §8): remove this category's subcategories.
    setSubcategories((prev) => prev.filter((s) => s.categoryId !== id))
  }, [])

  const toggleCategoryVisible = useCallback((id: string) => {
    setCategories((prev) =>
      prev.map((c) => (c.id === id ? { ...c, visible: !c.visible } : c))
    )
  }, [])

  /**
   * Bulk-replace setters used by the co-creation cascades
   * (`data/cascades.ts`). The Q1 cascade computes a brand new
   * Category + Subcategory list (visibility flipped, seed subcategory
   * bundles assembled per chosen kind); applying it as a single
   * replace keeps the cascade pure and idempotent. Same idea for Q3
   * → payment methods.
   *
   * Manual edits applied between cascades are overwritten — spec §8
   * explicitly mandates that re-asking a clarifying question hard-
   * resets to defaults.
   */
  const replaceCategories = useCallback((next: Category[]) => {
    setCategories(next)
  }, [])

  const replaceSubcategories = useCallback((next: Subcategory[]) => {
    setSubcategories(next)
  }, [])

  const replacePaymentMethods = useCallback((next: PaymentMethod[]) => {
    setPaymentMethods(next)
  }, [])

  // ── Subcategories ────────────────────────────────────────────────
  const addSubcategory = useCallback((categoryId: string): string => {
    const id = `sub-new-${Date.now()}`
    setSubcategories((prev) => [...prev, { id, categoryId, name: "" }])
    return id
  }, [])

  const renameSubcategory = useCallback((id: string, nextName: string) => {
    const trimmed = nextName.trim()
    if (trimmed === "") {
      setSubcategories((prev) => prev.filter((s) => s.id !== id))
      return
    }
    setSubcategories((prev) =>
      prev.map((s) => (s.id === id ? { ...s, name: trimmed } : s))
    )
  }, [])

  const deleteSubcategory = useCallback((id: string) => {
    setSubcategories((prev) => prev.filter((s) => s.id !== id))
  }, [])

  // ── Payment methods ──────────────────────────────────────────────
  const addPaymentMethod = useCallback((): string => {
    const id = `pm-new-${Date.now()}`
    setPaymentMethods((prev) => [...prev, { id, name: "" }])
    return id
  }, [])

  const renamePaymentMethod = useCallback((id: string, nextName: string) => {
    const trimmed = nextName.trim()
    if (trimmed === "") {
      setPaymentMethods((prev) => prev.filter((p) => p.id !== id))
      return
    }
    setPaymentMethods((prev) =>
      prev.map((p) => (p.id === id ? { ...p, name: trimmed } : p))
    )
  }, [])

  const deletePaymentMethod = useCallback((id: string) => {
    setPaymentMethods((prev) => prev.filter((p) => p.id !== id))
  }, [])

  return {
    categories,
    subcategories,
    paymentMethods,
    addCategory,
    renameCategory,
    deleteCategory,
    toggleCategoryVisible,
    replaceCategories,
    replaceSubcategories,
    replacePaymentMethods,
    addSubcategory,
    renameSubcategory,
    deleteSubcategory,
    addPaymentMethod,
    renamePaymentMethod,
    deletePaymentMethod,
  }
}

export type PolicyData = ReturnType<typeof usePolicyData>
