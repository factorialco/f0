import {
  F0Alert,
  F0Box,
  F0Card,
  F0Dialog,
  F0Heading,
  F0Select,
  F0Text,
} from "@factorialco/f0-react"
import {
  Input,
  Page,
  PageHeader,
} from "@factorialco/f0-react/dist/experimental"
import { Add, Delete, Pencil } from "@factorialco/f0-react/icons/app"
import { useState } from "react"

import { trainingAxes, trainings } from "@/fixtures"
import type { PrototypeMeta } from "../../../types"

export const meta: PrototypeMeta = {
  slug: "trainings-axes",
  title: "Trainings — Axes",
  description:
    "Admin module to manage training axes (strategic dimensions) used to classify and report on trainings: list, create, rename, delete and see usage per axis.",
  category: "Talent",
  module: "trainings",
  audience: ["admin"],
  tags: ["trainings", "axes", "taxonomy"],
  createdAt: "2026-05-12",
}

type Action = null | "create" | "rename" | "delete" | "merge"

export default function TrainingsAxes() {
  const [axes, setAxes] = useState(trainingAxes)
  const [action, setAction] = useState<Action>(null)
  const [target, setTarget] = useState<string | null>(null)
  const [draft, setDraft] = useState("")
  const [mergeInto, setMergeInto] = useState<string>("")

  const usage = (axisId: string) =>
    trainings.filter((t) => (t as { axisIds?: string[] }).axisIds?.includes(axisId))
      .length

  const open = (a: Action, axisId?: string) => {
    setAction(a)
    setTarget(axisId ?? null)
    const ax = axes.find((x) => x.id === axisId)
    setDraft(ax?.name ?? "")
    setMergeInto("")
  }

  const close = () => {
    setAction(null)
    setTarget(null)
    setDraft("")
    setMergeInto("")
  }

  const confirm = () => {
    if (action === "create" && draft.trim()) {
      setAxes((prev) => [
        ...prev,
        { id: `axis-${Date.now()}`, name: draft.trim() },
      ])
    }
    if (action === "rename" && target && draft.trim()) {
      setAxes((prev) =>
        prev.map((a) => (a.id === target ? { ...a, name: draft.trim() } : a))
      )
    }
    if (action === "delete" && target) {
      setAxes((prev) => prev.filter((a) => a.id !== target))
    }
    close()
  }

  return (
    <>
      <Page
        header={
          <PageHeader
            module={{
              id: "company_trainings",
              name: "Trainings",
              href: "/p/trainings",
            }}
            breadcrumbs={[
              { id: "list", label: "Trainings", href: "/p/trainings" },
              { id: "axes", label: "Axes" },
            ]}
            actions={[
              {
                label: "New axis",
                icon: Add,
                onClick: () => open("create"),
              },
            ]}
          />
        }
      >
        <F0Box display="flex" flexDirection="column" gap="xl" padding="xl">
          <div className="flex flex-col gap-1">
            <F0Heading
              content="Training axes"
              variant="heading-large"
              as="h1"
            />
            <F0Text
              content="Strategic dimensions used to classify trainings and to power Insights filters."
              variant="body"
            />
          </div>

          {axes.length === 0 ? (
            <F0Alert
              variant="info"
              title="No axes yet"
              description="Create your first axis to start grouping trainings."
            />
          ) : (
            <F0Card title={`${axes.length} axes`}>
              <div className="flex flex-col divide-y divide-f1-border-secondary">
                {axes.map((a) => {
                  const used = usage(a.id)
                  return (
                    <div
                      key={a.id}
                      className="flex items-center gap-3 p-4 hover:bg-f1-background-hover"
                    >
                      <div className="flex flex-1 flex-col">
                        <strong className="text-sm">{a.name}</strong>
                        <F0Text
                          content={`${used} training${used === 1 ? "" : "s"} use this axis`}
                          variant="small"
                        />
                      </div>
                      <span className="rounded-full bg-f1-background-secondary px-2 py-0.5 text-xs">
                        {a.id}
                      </span>
                      <button
                        onClick={() => open("rename", a.id)}
                        className="rounded-md p-1.5 hover:bg-f1-background-hover"
                        title="Rename"
                      >
                        <Pencil className="h-4 w-4" />
                      </button>
                      <button
                        onClick={() => open("merge", a.id)}
                        className="rounded-md border border-f1-border-secondary px-2 py-1 text-xs hover:bg-f1-background-hover"
                      >
                        Merge…
                      </button>
                      <button
                        onClick={() => open("delete", a.id)}
                        className="rounded-md p-1.5 text-f1-foreground-critical hover:bg-f1-background-hover"
                        title="Delete"
                      >
                        <Delete className="h-4 w-4" />
                      </button>
                    </div>
                  )
                })}
              </div>
            </F0Card>
          )}
        </F0Box>
      </Page>

      {action && (
        <F0Dialog
          isOpen={action !== null}
          onClose={close}
          position="center"
          width="md"
          title={
            action === "create"
              ? "New axis"
              : action === "rename"
                ? "Rename axis"
                : action === "delete"
                  ? "Delete axis"
                  : "Merge axis"
          }
          primaryAction={{
            label:
              action === "create"
                ? "Create"
                : action === "rename"
                  ? "Save"
                  : action === "delete"
                    ? "Delete"
                    : "Merge & delete",
            onClick: confirm,
            variant: action === "delete" ? "critical" : "default",
          }}
          secondaryAction={{ label: "Cancel", onClick: close }}
        >
          <div className="flex flex-col gap-4">
            {(action === "create" || action === "rename") && (
              <Input
                label="Axis name"
                value={draft}
                onChange={(v) => setDraft(v ?? "")}
                placeholder="e.g. Leadership development"
              />
            )}
            {action === "delete" && (
              <F0Alert
                variant="critical"
                title="Delete axis?"
                description="Trainings classified under this axis will lose this axis but remain in the catalog. This action cannot be undone."
              />
            )}
            {action === "merge" && (
              <>
                <F0Text
                  variant="body"
                  content="Move all trainings classified under this axis to another axis, then delete this one."
                />
                <F0Select<string>
                  label="Merge into"
                  value={mergeInto}
                  onChange={(v: string) => setMergeInto(v)}
                  options={axes
                    .filter((a) => a.id !== target)
                    .map((a) => ({ value: a.id, label: a.name }))}
                />
              </>
            )}
          </div>
        </F0Dialog>
      )}
    </>
  )
}
