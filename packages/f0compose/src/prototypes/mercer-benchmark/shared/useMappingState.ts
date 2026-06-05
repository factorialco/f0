/**
 * Central state for the mapping flow. Holds the mutable list of internal
 * roles + their mapping status. All mutations happen here so every view
 * stays in sync.
 */
import { useCallback, useState } from "react"

import type { InternalRole, MappingStatus } from "./types"
import { jobCatalog } from "./jobCatalog"
import { mercerCatalog } from "./mercerCatalog"

export function useMappingState() {
  const [roles, setRoles] = useState<InternalRole[]>(() =>
    jobCatalog.map((r) => ({ ...r }))
  )
  const [notificationDismissed, setNotificationDismissed] = useState(false)

  const updateRole = useCallback(
    (id: string, patch: Partial<InternalRole>) =>
      setRoles((prev) =>
        prev.map((r) => (r.id === id ? { ...r, ...patch } : r))
      ),
    []
  )

  const acceptSuggestion = useCallback(
    (id: string) => {
      setRoles((prev) =>
        prev.map((r) =>
          r.id === id
            ? {
                ...r,
                status: "confirmed" as MappingStatus,
                confirmedMercerCode: r.suggestedMercerCode,
              }
            : r
        )
      )
    },
    []
  )

  const rejectSuggestion = useCallback(
    (id: string) =>
      updateRole(id, {
        status: "unmapped",
        suggestedMercerCode: undefined,
        confidence: undefined,
      }),
    [updateRole]
  )

  const assignManually = useCallback(
    (id: string, mercerCode: string) =>
      updateRole(id, {
        status: "confirmed",
        confirmedMercerCode: mercerCode,
      }),
    [updateRole]
  )

  const runAutoMap = useCallback(() => {
    setRoles((prev) =>
      prev.map((r) => {
        if (r.status !== "unmapped") return r
        // Simple heuristic: match by title keywords against Mercer catalog
        const titleWords = r.title.toLowerCase().split(/\s+/)
        const match = mercerCatalog.find((m) =>
          titleWords.some(
            (w) => w.length > 3 && m.title.toLowerCase().includes(w)
          )
        )
        if (match) {
          return {
            ...r,
            status: "suggested" as MappingStatus,
            suggestedMercerCode: match.code,
            confidence: 0.6 + Math.random() * 0.3,
          }
        }
        return r
      })
    )
  }, [])

  const dismissNotification = useCallback(
    () => setNotificationDismissed(true),
    []
  )

  const counts = roles.reduce(
    (acc, r) => {
      acc[r.status] = (acc[r.status] ?? 0) + 1
      return acc
    },
    {} as Record<MappingStatus, number>
  )

  const confirmedCount = counts.confirmed ?? 0
  const suggestedCount = counts.suggested ?? 0
  const totalCount = roles.length

  const bulkAccept = useCallback(
    (ids: string[]) => {
      setRoles((prev) =>
        prev.map((r) =>
          ids.includes(r.id) && r.status === "suggested" && r.suggestedMercerCode
            ? { ...r, status: "confirmed" as MappingStatus, confirmedMercerCode: r.suggestedMercerCode }
            : r
        )
      )
    },
    []
  )

  const bulkReject = useCallback(
    (ids: string[]) => {
      setRoles((prev) =>
        prev.map((r) =>
          ids.includes(r.id) && r.status === "suggested"
            ? { ...r, status: "unmapped" as MappingStatus, suggestedMercerCode: undefined, confidence: undefined }
            : r
        )
      )
    },
    []
  )

  const bulkRemap = useCallback(
    (ids: string[]) => {
      setRoles((prev) =>
        prev.map((r) => {
          if (!ids.includes(r.id)) return r
          if (r.status !== "confirmed" && r.status !== "unmapped") return r
          const titleWords = r.title.toLowerCase().split(/\s+/)
          const match = mercerCatalog.find((m) =>
            titleWords.some((w) => w.length > 3 && m.title.toLowerCase().includes(w))
          )
          if (match) {
            return {
              ...r,
              status: "suggested" as MappingStatus,
              suggestedMercerCode: match.code,
              confirmedMercerCode: undefined,
              confidence: 0.6 + Math.random() * 0.3,
            }
          }
          return { ...r, status: "unmapped" as MappingStatus, confirmedMercerCode: undefined, suggestedMercerCode: undefined }
        })
      )
    },
    []
  )

  return {
    roles,
    notificationDismissed,
    dismissNotification,
    acceptSuggestion,
    rejectSuggestion,
    assignManually,
    runAutoMap,
    bulkAccept,
    bulkReject,
    bulkRemap,
    confirmedCount,
    suggestedCount,
    totalCount,
  }
}
