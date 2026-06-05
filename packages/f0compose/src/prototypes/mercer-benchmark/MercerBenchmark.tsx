/**
 * Mercer Salary Benchmark — role mapping prototype.
 *
 * Flow: Job Catalog (ReactFlow org chart) → Notification → Mapping table
 * (nested by role family) → Click row → Mercer picker modal.
 *
 *   /p/mercer-benchmark                              — catalog (default)
 *   /p/mercer-benchmark?tab=mapping                  — mapping table
 */
import { useCallback, useState } from "react"
import { F0Box, F0Button, F0Text, StandardLayout } from "@factorialco/f0-react"
import {
  Page,
  PageHeader,
  Tabs,
} from "@factorialco/f0-react/dist/experimental"
import { Bell, Cross } from "@factorialco/f0-react/icons/app"
import { useSearchParams } from "react-router-dom"

import type { PrototypeMeta } from "../types"
import type { InternalRole } from "./shared/types"
import { CatalogTab } from "./catalog/CatalogTab"
import { CatalogRoleDrawer } from "./catalog/CatalogRoleDrawer"
import { MercerPickerModal } from "./mapping/MercerPickerModal"
import { MappingTab } from "./mapping/MappingTab"
import { useMappingState } from "./shared/useMappingState"
import { primaryTabs, type PrimaryTabId } from "./tabs"

export const meta: PrototypeMeta = {
  slug: "mercer-benchmark",
  title: "Mercer Salary Benchmark",
  description:
    "Map your internal job catalog to Mercer's role taxonomy. Review auto-mapped suggestions, map unmapped roles manually, and track progress.",
  category: "Payroll",
  module: "payroll-settings",
  audience: ["admin"],
  tags: ["compensation", "mercer", "benchmark", "salary", "mapping"],
  createdAt: "2026-06-04",
}

const VALID_TABS = new Set<string>(primaryTabs.map((t) => t.id))

export default function MercerBenchmark() {
  const [searchParams, setSearchParams] = useSearchParams()
  const {
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
  } = useMappingState()

  // Tab state from URL
  const rawTab = searchParams.get("tab")
  const activeTab: PrimaryTabId =
    rawTab && VALID_TABS.has(rawTab) ? (rawTab as PrimaryTabId) : "catalog"

  const setActiveTab = (id: string) => {
    const next = new URLSearchParams()
    if (id !== "catalog") next.set("tab", id)
    setSearchParams(next)
  }

  // Catalog drawer state from URL
  const selectedRoleId = searchParams.get("role")
  const selectedRole = selectedRoleId
    ? roles.find((r) => r.id === selectedRoleId)
    : undefined
  const selectedGroupRoles = selectedRole
    ? roles.filter(
        (r) =>
          r.title === selectedRole.title &&
          r.family === selectedRole.family &&
          r.function === selectedRole.function
      )
    : []

  const openCatalogDetail = useCallback(
    (role: InternalRole) => {
      const next = new URLSearchParams(searchParams)
      next.set("role", role.id)
      setSearchParams(next)
    },
    [searchParams, setSearchParams]
  )

  const closeCatalogDetail = useCallback(() => {
    const next = new URLSearchParams(searchParams)
    next.delete("role")
    setSearchParams(next)
  }, [searchParams, setSearchParams])

  const goToMapping = useCallback(() => {
    dismissNotification()
    setSearchParams({ tab: "mapping" })
  }, [dismissNotification, setSearchParams])

  // Mercer picker modal — opens when clicking a row in the mapping table
  const [pickerRoleId, setPickerRoleId] = useState<string | null>(null)
  const pickerRole = pickerRoleId
    ? roles.find((r) => r.id === pickerRoleId) ?? null
    : null

  const openPicker = useCallback((role: InternalRole) => {
    setPickerRoleId(role.id)
  }, [])

  const handlePickerAccept = useCallback(
    (id: string) => {
      acceptSuggestion(id)
    },
    [acceptSuggestion]
  )

  const handlePickerReject = useCallback(
    (id: string) => {
      rejectSuggestion(id)
    },
    [rejectSuggestion]
  )

  const handlePickerSelect = useCallback(
    (id: string, mercerCode: string) => {
      assignManually(id, mercerCode)
    },
    [assignManually]
  )

  // Notification banner state
  const [showNotification, setShowNotification] = useState(true)
  const shouldShowNotification =
    showNotification && !notificationDismissed && activeTab === "catalog"

  const tabsWithNav = primaryTabs.map((t) => ({
    ...t,
    onClick: () => setActiveTab(t.id),
  }))

  return (
    <>
      <Page
        header={
          <>
            <PageHeader
              module={{
                id: "compensations",
                name: "Mercer Salary Benchmark",
                href: "/p/mercer-benchmark",
              }}
              actions={[]}
            />
            <Tabs
              key={activeTab}
              tabs={tabsWithNav}
              activeTabId={activeTab}
            />
          </>
        }
      >
        <StandardLayout>
          {/* Notification banner */}
          {shouldShowNotification && (
            <div className="mb-4 flex items-center gap-3 rounded-lg bg-f1-background-info p-4">
              <div className="flex items-center rounded-md bg-f1-background-primary p-1">
                <Bell />
              </div>
              <F0Box grow>
                <F0Text
                  content={`You've purchased the Mercer Salary Benchmark. We auto-mapped ${suggestedCount} of your ${totalCount} roles — review and finish mapping the rest.`}
                  variant="body"
                />
              </F0Box>
              <F0Button
                label="Review mappings"
                onClick={goToMapping}
              />
              <F0Button
                label="Dismiss"
                variant="neutral"
                icon={Cross}
                hideLabel
                onClick={() => setShowNotification(false)}
              />
            </div>
          )}

          {/* Tab content */}
          {activeTab === "catalog" && (
            <CatalogTab
              roles={roles}
              onRoleClick={(id) => {
                const role = roles.find((r) => r.id === id)
                if (role) openCatalogDetail(role)
              }}
            />
          )}
          {activeTab === "mapping" && (
            <MappingTab
              roles={roles}
              confirmedCount={confirmedCount}
              totalCount={totalCount}
              onAutoMap={runAutoMap}
              onRowClick={openPicker}
              onBulkAccept={bulkAccept}
              onBulkReject={bulkReject}
              onBulkRemap={bulkRemap}
            />
          )}
        </StandardLayout>
      </Page>

      {/* Catalog tab: read-only role detail drawer */}
      {activeTab === "catalog" && (
        <CatalogRoleDrawer
          group={selectedGroupRoles}
          isOpen={selectedGroupRoles.length > 0}
          onClose={closeCatalogDetail}
        />
      )}

      {/* Mapping tab: Mercer picker modal — opens on row click */}
      <MercerPickerModal
        role={pickerRole}
        isOpen={pickerRoleId !== null}
        onAccept={handlePickerAccept}
        onReject={handlePickerReject}
        onSelect={handlePickerSelect}
        onClose={() => setPickerRoleId(null)}
      />
    </>
  )
}
