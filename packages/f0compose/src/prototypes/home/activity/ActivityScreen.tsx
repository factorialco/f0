import {
  F0Box,
  F0Button,
  F0Dialog,
  F0Heading,
  F0Text,
  StandardLayout,
} from "@factorialco/f0-react"
import {
  OneDataCollection,
  Page,
  PageHeader,
} from "@factorialco/f0-react/dist/experimental"
import { useCallback, useContext, useEffect, useState } from "react"

import { AgentEntryContext, AskFactorialAction } from "../AskFactorial"
import { activityListOptions } from "./activityListOptions"
import { type ActivityRecord } from "./model"
import { advanceReview, resolveActivity, useActivity } from "./state"
import { useActivitySource } from "./useActivitySource"

function ActivityList({
  rows,
  open,
  needsYou = false,
}: {
  rows: ActivityRecord[]
  needsYou?: boolean
  open: (row: ActivityRecord) => void
}) {
  const source = useActivitySource(rows, open, needsYou)
  return (
    <OneDataCollection
      source={source}
      visualizations={[{ type: "list", options: activityListOptions }]}
    />
  )
}

export function ActivityScreen() {
  const one = useContext(AgentEntryContext)
  const rows = useActivity()
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const [confirmation, setConfirmation] = useState<string | null>(null)
  const selected = rows
    .flatMap((row) => [row, ...(row.children ?? [])])
    .find((row) => row.id === selectedId)
  const open = useCallback((row: ActivityRecord) => setSelectedId(row.id), [])
  useEffect(() => {
    const timer = window.setInterval(advanceReview, 8000)
    return () => window.clearInterval(timer)
  }, [])
  const resolve = () => {
    if (!selected) return
    resolveActivity(selected.id)
    setConfirmation(
      selected.decision === "expenses"
        ? "2 expenses approved. Saved in Completed."
        : "Marta assigned as Laura’s buddy. Saved in Completed."
    )
    setSelectedId(null)
  }
  return (
    <Page
      header={
        <F0Box
          display="flex"
          alignItems="center"
          paddingRight="xl"
          data-home-page-header
        >
          <F0Box grow minWidth="0">
            <PageHeader
              module={{ id: "home", name: "Home", href: "/p/home" }}
              breadcrumbs={[{ id: "activity", label: "Activity" }]}
            />
          </F0Box>
          <AskFactorialAction onClick={one.open} />
        </F0Box>
      }
    >
      <StandardLayout>
        <F0Box
          display="flex"
          flexDirection="column"
          gap="xl"
          width="full"
          minWidth="0"
        >
          {confirmation && (
            <F0Box
              display="flex"
              alignItems="center"
              justifyContent="between"
              gap="lg"
              padding="lg"
              background="secondary"
            >
              <F0Text content={confirmation} />
              <F0Button
                label="Dismiss"
                variant="outline"
                size="sm"
                onClick={() => {
                  setConfirmation(null)
                }}
              />
            </F0Box>
          )}
          <ActivityList rows={rows} open={open} needsYou />
          <F0Dialog
            isOpen={Boolean(selected)}
            onClose={() => setSelectedId(null)}
            title={selected?.title ?? "Activity details"}
            position="right"
            width="md"
            primaryAction={
              selected?.decision
                ? {
                    label:
                      selected.decision === "expenses"
                        ? "Approve 2 expenses"
                        : "Assign Marta",
                    onClick: resolve,
                  }
                : undefined
            }
            secondaryAction={{
              label: "Close",
              onClick: () => setSelectedId(null),
            }}
          >
            {selected && (
              <F0Box
                display="flex"
                flexDirection="column"
                gap="xl"
                padding="xl"
              >
                <F0Text
                  content={`${selected.owner} · ${selected.when}`}
                  variant="description"
                />
                <F0Text content={selected.detail} variant="label" />
                {selected.children && (
                  <F0Box display="flex" flexDirection="column" gap="lg">
                    <F0Heading
                      content={selected.breakdownLabel ?? "Tasks"}
                      variant="heading"
                    />
                    <ActivityList
                      key={selected.id}
                      rows={selected.children}
                      open={open}
                    />
                  </F0Box>
                )}
                {selected.steps.map((step, index) => (
                  <F0Box
                    key={step}
                    padding="lg"
                    borderBottom="default"
                    borderColor="secondary"
                  >
                    <F0Text content={`${index + 1}. ${step}`} />
                  </F0Box>
                ))}
              </F0Box>
            )}
          </F0Dialog>
        </F0Box>
      </StandardLayout>
    </Page>
  )
}
