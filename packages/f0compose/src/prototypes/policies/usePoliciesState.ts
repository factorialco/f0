import { useState, useCallback } from "react"
import type { Policy } from "@/fixtures"
import { policies as initialPolicies } from "@/fixtures"

/** Mutable policy state for prototype interactions. */
export function usePoliciesState() {
  const [pages, setPages] = useState<Policy[]>(initialPolicies)

  const addPage = useCallback((page: Policy) => {
    setPages((prev) => [page, ...prev])
  }, [])

  const deletePage = useCallback((id: string) => {
    setPages((prev) => prev.filter((p) => p.id !== id))
  }, [])

  const updatePage = useCallback((id: string, patch: Partial<Policy>) => {
    setPages((prev) =>
      prev.map((p) => (p.id === id ? { ...p, ...patch } : p))
    )
  }, [])

  const getPage = useCallback(
    (id: string) => pages.find((p) => p.id === id) ?? null,
    [pages]
  )

  return { pages, addPage, deletePage, updatePage, getPage }
}

export type PoliciesState = ReturnType<typeof usePoliciesState>
