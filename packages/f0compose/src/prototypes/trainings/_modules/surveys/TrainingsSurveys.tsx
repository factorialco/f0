import {
  F0Alert,
  F0Avatar,
  F0BigNumber,
  F0Box,
  F0Button,
  F0Card,
  F0Checkbox,
  F0Heading,
  F0Select,
  F0Text,
} from "@factorialco/f0-react"
import {
  Input,
  Page,
  PageHeader,
  Tabs,
  Textarea,
} from "@factorialco/f0-react/dist/experimental"
import { Add, Delete, Pencil } from "@factorialco/f0-react/icons/app"
import { useMemo, useState } from "react"
import { useSearchParams } from "react-router-dom"

import { surveyAnswers, surveyTemplates, trainings } from "@/fixtures"
import type { PrototypeMeta } from "../../../types"

export const meta: PrototypeMeta = {
  hidden: true,
  slug: "trainings-surveys",
  title: "Trainings — Survey Templates",
  description:
    "Admin module to manage survey templates: list, edit questions, preview, publish/draft, and view collected responses across trainings.",
  category: "Talent",
  module: "trainings",
  audience: ["admin"],
  tags: ["trainings", "surveys", "templates", "questions"],
  createdAt: "2026-05-12",
}

type View = "list" | "detail" | "responses"

function useView() {
  const [params, setSearch] = useSearchParams()
  return {
    view: (params.get("view") as View) ?? "list",
    templateId: params.get("templateId"),
    trainingId: params.get("trainingId"),
    setSearch,
  }
}

function go(
  setSearch: ReturnType<typeof useSearchParams>[1],
  patch: Record<string, string | null>
) {
  setSearch((p) => {
    const next = new URLSearchParams(p)
    for (const [k, v] of Object.entries(patch)) {
      if (v == null) next.delete(k)
      else next.set(k, v)
    }
    return next
  })
}

function StatusChip({ active }: { active: boolean }) {
  const cls = active
    ? "bg-f1-background-positive text-f1-foreground-positive"
    : "bg-f1-background-secondary text-f1-foreground-secondary"
  return (
    <span
      className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${cls}`}
    >
      {active ? "Published" : "Draft"}
    </span>
  )
}

// --- LIST ------------------------------------------------------------------

function ListView({
  setSearch,
  onCreate,
}: {
  setSearch: ReturnType<typeof useSearchParams>[1]
  onCreate: () => void
}) {
  return (
    <F0Box display="flex" flexDirection="column" gap="xl" padding="xl">
      <div className="flex items-center justify-between">
        <F0Heading content="Survey templates" variant="heading-large" as="h1" />
        <F0Button
          label="Create template"
          icon={Add}
          variant="default"
          onClick={onCreate}
        />
      </div>
      <F0Text
        content="Reusable surveys that can be attached to any training. Edit, preview and publish before assigning."
        variant="body"
      />
      <div className="grid grid-cols-2 gap-4">
        {surveyTemplates.map((t) => (
          <F0Card key={t.id}>
            <div className="flex flex-col gap-3 p-5">
              <div className="flex items-start justify-between gap-3">
                <div className="flex flex-col gap-1">
                  <strong className="text-base">{t.name}</strong>
                  <F0Text
                    content={t.description}
                    variant="small"
                  />
                </div>
                <StatusChip active={t.active} />
              </div>
              <div className="flex flex-wrap gap-2 text-xs text-f1-foreground-secondary">
                <span className="rounded-full bg-f1-background-secondary px-2 py-0.5">
                  {t.questionCount} questions
                </span>
                <span className="rounded-full bg-f1-background-secondary px-2 py-0.5">
                  Scale: {t.responseScale}
                </span>
                <span className="rounded-full bg-f1-background-secondary px-2 py-0.5">
                  {t.category}
                </span>
              </div>
              <div className="flex justify-end gap-2 border-t border-f1-border-secondary pt-3">
                <F0Button
                  label="View responses"
                  variant="outline"
                  size="sm"
                  onClick={() =>
                    go(setSearch, { view: "responses", templateId: t.id })
                  }
                />
                <F0Button
                  label="Edit"
                  variant="default"
                  size="sm"
                  onClick={() =>
                    go(setSearch, { view: "detail", templateId: t.id })
                  }
                />
              </div>
            </div>
          </F0Card>
        ))}
      </div>
    </F0Box>
  )
}

// --- DETAIL (Questions editor) --------------------------------------------

type Question = {
  id: string
  text: string
  type: "scale" | "yes-no" | "open" | "multiple"
  required: boolean
}

function InlineQuestionEdit({
  initial,
  onCommit,
}: {
  initial: string
  onCommit: (value: string) => void
}) {
  const [value, setValue] = useState(initial)
  return (
    <Input
      label="Question text"
      hideLabel
      value={value}
      onChange={(v) => setValue(v ?? "")}
      onBlur={() => onCommit(value)}
    />
  )
}

function DetailView({
  templateId,
  setSearch,
  onAction,
}: {
  templateId: string | null
  setSearch: ReturnType<typeof useSearchParams>[1]
  onAction: (a: "publish" | "delete" | "settings") => void
}) {
  const t = surveyTemplates.find((x) => x.id === templateId)
  const [tab, setTab] = useState("questions")
  const [questions, setQuestions] = useState<Question[]>(
    t
      ? Array.from({ length: t.questionCount }, (_, i) => ({
          id: `q-${i + 1}`,
          text:
            i === 0
              ? "How would you rate the overall quality of this training?"
              : i === 1
                ? "Did the training meet your expectations?"
                : `Question ${i + 1}`,
          type:
            t.responseScale === "yes-no"
              ? "yes-no"
              : i % 3 === 0
                ? "open"
                : "scale",
          required: i < 3,
        }))
      : []
  )
  const [editing, setEditing] = useState<string | null>(null)

  if (!t)
    return (
      <F0Box padding="xl">
        <F0Alert
          variant="warning"
          title="Template not found"
          description="Pick one from the list."
        />
      </F0Box>
    )

  return (
    <F0Box display="flex" flexDirection="column" gap="xl" padding="xl">
      <button
        onClick={() => go(setSearch, { view: "list", templateId: null })}
        className="self-start text-sm text-f1-foreground-info hover:underline"
      >
        ← Back to templates
      </button>

      <div className="flex items-start justify-between gap-4">
        <div className="flex flex-col gap-1">
          <F0Heading content={t.name} variant="heading-large" as="h1" />
          <F0Text content={t.description} variant="small" />
        </div>
        <div className="flex items-center gap-2">
          <StatusChip active={t.active} />
          <F0Button
            label="Settings"
            variant="outline"
            size="sm"
            onClick={() => onAction("settings")}
          />
          <F0Button
            label={t.active ? "Move to draft" : "Publish"}
            variant="default"
            size="sm"
            onClick={() => onAction("publish")}
          />
          <F0Button
            label="Delete"
            variant="critical"
            size="sm"
            onClick={() => onAction("delete")}
          />
        </div>
      </div>

      <Tabs
        tabs={[
          { id: "questions", label: "Questions", onClick: () => setTab("questions") },
          { id: "preview", label: "Preview", onClick: () => setTab("preview") },
          { id: "logic", label: "Logic", onClick: () => setTab("logic") },
        ]}
        activeTabId={tab}
      />

      {tab === "questions" && (
        <F0Card title={`Questions (${questions.length})`}>
          <div className="flex flex-col divide-y divide-f1-border-secondary">
            {questions.map((q, i) => (
              <div key={q.id} className="flex items-start gap-3 p-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-f1-background-secondary text-sm font-semibold">
                  {i + 1}
                </div>
                <div className="flex flex-1 flex-col gap-1">
                  {editing === q.id ? (
                    <InlineQuestionEdit
                      initial={q.text}
                      onCommit={(value) => {
                        setQuestions((prev) =>
                          prev.map((x) =>
                            x.id === q.id ? { ...x, text: value } : x
                          )
                        )
                        setEditing(null)
                      }}
                    />
                  ) : (
                    <strong className="text-sm">{q.text}</strong>
                  )}
                  <div className="flex gap-2 text-xs text-f1-foreground-secondary">
                    <span className="rounded-full bg-f1-background-secondary px-2 py-0.5">
                      {q.type}
                    </span>
                    {q.required && (
                      <span className="rounded-full bg-f1-background-warning px-2 py-0.5 text-f1-foreground-warning">
                        Required
                      </span>
                    )}
                  </div>
                </div>
                <div className="flex gap-1">
                  <button
                    onClick={() => setEditing(q.id)}
                    className="rounded-md p-1.5 hover:bg-f1-background-hover"
                    title="Edit"
                  >
                    <Pencil className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() =>
                      setQuestions((prev) => prev.filter((x) => x.id !== q.id))
                    }
                    className="rounded-md p-1.5 hover:bg-f1-background-hover"
                    title="Delete"
                  >
                    <Delete className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
            <div className="p-4">
              <F0Button
                label="Add question"
                icon={Add}
                variant="outline"
                size="sm"
                onClick={() =>
                  setQuestions((prev) => [
                    ...prev,
                    {
                      id: `q-${Date.now()}`,
                      text: "New question",
                      type: "scale",
                      required: false,
                    },
                  ])
                }
              />
            </div>
          </div>
        </F0Card>
      )}

      {tab === "preview" && (
        <F0Card title="Preview as employee">
          <div className="flex flex-col gap-5 p-6">
            {questions.map((q, i) => (
              <div key={q.id} className="flex flex-col gap-2">
                <strong className="text-sm">
                  {i + 1}. {q.text}
                  {q.required && (
                    <span className="ml-1 text-f1-foreground-critical">*</span>
                  )}
                </strong>
                {q.type === "scale" && (
                  <div className="flex gap-2">
                    {[1, 2, 3, 4, 5].map((n) => (
                      <button
                        key={n}
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-f1-border-secondary hover:bg-f1-background-hover"
                      >
                        {n}
                      </button>
                    ))}
                  </div>
                )}
                {q.type === "yes-no" && (
                  <div className="flex gap-2">
                    <button className="rounded-md border border-f1-border-secondary px-4 py-2 text-sm hover:bg-f1-background-hover">
                      Yes
                    </button>
                    <button className="rounded-md border border-f1-border-secondary px-4 py-2 text-sm hover:bg-f1-background-hover">
                      No
                    </button>
                  </div>
                )}
                {q.type === "open" && (
                  <Textarea
                    label="Open response"
                    hideLabel
                    rows={3}
                    placeholder="Type your answer…"
                  />
                )}
                {q.type === "multiple" && (
                  <div className="flex flex-col gap-1">
                    {["Option A", "Option B", "Option C"].map((o) => (
                      <F0Checkbox key={o} title={o} />
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="flex justify-end pt-3">
              <F0Button label="Submit" variant="default" />
            </div>
          </div>
        </F0Card>
      )}

      {tab === "logic" && (
        <F0Card title="Conditional logic">
          <div className="flex flex-col gap-3 p-6">
            <F0Alert
              variant="info"
              title="No conditional logic"
              description="Add rules to skip questions based on previous answers."
            />
            <F0Button
              label="Add rule"
              icon={Add}
              variant="outline"
              size="sm"
            />
          </div>
        </F0Card>
      )}
    </F0Box>
  )
}

// --- RESPONSES VIEWER ------------------------------------------------------

function ResponsesView({
  templateId,
  setSearch,
}: {
  templateId: string | null
  setSearch: ReturnType<typeof useSearchParams>[1]
}) {
  const t = surveyTemplates.find((x) => x.id === templateId)
  const responses = useMemo(
    () => surveyAnswers.filter((a) => a.templateId === templateId),
    [templateId]
  )
  const submitted = responses.filter((r) => r.status === "submitted")
  const avg =
    submitted.length === 0
      ? 0
      : submitted.reduce((s, r) => s + (r.averageScore ?? 0), 0) /
        submitted.length
  const responseRate =
    responses.length === 0
      ? 0
      : Math.round((submitted.length / responses.length) * 100)

  if (!t)
    return (
      <F0Box padding="xl">
        <F0Alert
          variant="warning"
          title="Template not found"
          description="Pick one from the list."
        />
      </F0Box>
    )

  return (
    <F0Box display="flex" flexDirection="column" gap="xl" padding="xl">
      <button
        onClick={() => go(setSearch, { view: "list", templateId: null })}
        className="self-start text-sm text-f1-foreground-info hover:underline"
      >
        ← Back to templates
      </button>

      <F0Heading
        content={`Responses — ${t.name}`}
        variant="heading-large"
        as="h1"
      />

      <div className="grid grid-cols-3 gap-4">
        <F0Card>
          <div className="p-5">
            <F0BigNumber
              label="Average score"
              value={avg.toFixed(1)}
              unit="/ 5"
            />
          </div>
        </F0Card>
        <F0Card>
          <div className="p-5">
            <F0BigNumber
              label="Response rate"
              value={String(responseRate)}
              unit="%"
            />
          </div>
        </F0Card>
        <F0Card>
          <div className="p-5">
            <F0BigNumber
              label="Total responses"
              value={String(submitted.length)}
              unit={`/ ${responses.length}`}
            />
          </div>
        </F0Card>
      </div>

      <F0Card title="Individual responses">
        <div className="flex flex-col divide-y divide-f1-border-secondary">
          {responses.length === 0 ? (
            <div className="p-6 text-center">
              <F0Text content="No responses yet." variant="small" />
            </div>
          ) : (
            responses.map((r) => {
              const trn = trainings.find((x) => x.id === r.trainingId)
              return (
                <div
                  key={r.id}
                  className="flex items-center gap-3 p-4 hover:bg-f1-background-hover"
                >
                  <F0Avatar
                    src={r.employeeAvatar}
                    firstName={r.employeeName.split(" ")[0]}
                    lastName={r.employeeName.split(" ")[1] ?? ""}
                    size="md"
                  />
                  <div className="flex flex-1 flex-col">
                    <strong className="text-sm">{r.employeeName}</strong>
                    <F0Text
                      content={trn?.name ?? "—"}
                      variant="small"
                    />
                  </div>
                  <div className="text-right">
                    {r.averageScore != null ? (
                      <strong className="text-base">
                        {r.averageScore.toFixed(1)}
                      </strong>
                    ) : (
                      <span className="text-xs text-f1-foreground-secondary">
                        Not answered
                      </span>
                    )}
                    <div className="text-xs text-f1-foreground-secondary">
                      {r.submittedAt ? r.submittedAt.slice(0, 10) : "—"}
                    </div>
                  </div>
                  <span
                    className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${
                      r.status === "submitted"
                        ? "bg-f1-background-positive text-f1-foreground-positive"
                        : r.status === "expired"
                          ? "bg-f1-background-critical text-f1-foreground-critical"
                          : "bg-f1-background-warning text-f1-foreground-warning"
                    }`}
                  >
                    {r.status}
                  </span>
                </div>
              )
            })
          )}
        </div>
      </F0Card>
    </F0Box>
  )
}

// --- ROOT ------------------------------------------------------------------

export default function TrainingsSurveys() {
  const { view, templateId, setSearch } = useView()
  const [action, setAction] = useState<
    null | "create" | "publish" | "delete" | "settings"
  >(null)
  const [createName, setCreateName] = useState("")
  const [createCategory, setCreateCategory] = useState("Satisfaction")
  const [createScale, setCreateScale] = useState("1-5")
  const [settingsTrigger, setSettingsTrigger] = useState(
    "Send 1 day after training ends"
  )
  const [settingsAnonymous, setSettingsAnonymous] = useState(true)
  const [settingsAllowSkip, setSettingsAllowSkip] = useState(false)
  const [settingsReminder, setSettingsReminder] = useState(true)

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
            breadcrumbs={
              view === "list"
                ? [
                    { id: "list", label: "Trainings", href: "/p/trainings" },
                    { id: "tpl", label: "Survey templates" },
                  ]
                : [
                    { id: "list", label: "Trainings", href: "/p/trainings" },
                    {
                      id: "tpl",
                      label: "Survey templates",
                      href: "/p/trainings-surveys",
                    },
                    {
                      id: "detail",
                      label: view === "responses" ? "Responses" : "Edit template",
                    },
                  ]
            }
          />
        }
      >
        {view === "list" && (
          <ListView setSearch={setSearch} onCreate={() => setAction("create")} />
        )}
        {view === "detail" && (
          <DetailView
            templateId={templateId}
            setSearch={setSearch}
            onAction={(a) => setAction(a)}
          />
        )}
        {view === "responses" && (
          <ResponsesView templateId={templateId} setSearch={setSearch} />
        )}
      </Page>

      {action && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center"
          style={{ backgroundColor: "rgba(0,0,0,0.55)" }}
          onClick={() => setAction(null)}
        >
          <div
            className="w-[460px] rounded-lg bg-f1-background shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-f1-border-secondary px-5 py-4">
              <strong className="text-base">
                {action === "create" && "Create template"}
                {action === "publish" && "Change template status"}
                {action === "delete" && "Delete template"}
                {action === "settings" && "Template settings"}
              </strong>
              <button
                onClick={() => setAction(null)}
                className="text-2xl leading-none text-f1-foreground-secondary hover:text-f1-foreground"
              >
                ×
              </button>
            </div>
            <div className="flex flex-col gap-3 p-5 text-sm">
              {action === "create" && (
                <>
                  <Input
                    label="Name"
                    placeholder="e.g. Post-training satisfaction"
                    value={createName}
                    onChange={(v) => setCreateName(v ?? "")}
                  />
                  <F0Select
                    label="Category"
                    value={createCategory}
                    onChange={(v: string) => setCreateCategory(v)}
                    options={[
                      { value: "Satisfaction", label: "Satisfaction" },
                      { value: "Knowledge", label: "Knowledge" },
                      { value: "Feedback", label: "Feedback" },
                    ]}
                  />
                  <F0Select
                    label="Default response scale"
                    value={createScale}
                    onChange={(v: string) => setCreateScale(v)}
                    options={[
                      { value: "1-5", label: "1-5" },
                      { value: "1-10", label: "1-10" },
                      { value: "Yes / No", label: "Yes / No" },
                      { value: "Mixed", label: "Mixed" },
                    ]}
                  />
                </>
              )}
              {action === "publish" && (
                <p>
                  This template will become available (or unavailable) for
                  attaching to trainings. Confirm to continue.
                </p>
              )}
              {action === "delete" && (
                <div className="rounded-md bg-f1-background-critical-secondary p-3 text-f1-foreground-critical">
                  This template and its questions will be permanently deleted.
                  Already-collected responses are kept.
                </div>
              )}
              {action === "settings" && (
                <>
                  <F0Select
                    label="Default trigger"
                    value={settingsTrigger}
                    onChange={(v: string) => setSettingsTrigger(v)}
                    options={[
                      {
                        value: "Send 1 day after training ends",
                        label: "Send 1 day after training ends",
                      },
                      {
                        value: "Send immediately after training ends",
                        label: "Send immediately after training ends",
                      },
                      {
                        value: "Send 7 days after training ends",
                        label: "Send 7 days after training ends",
                      },
                      { value: "Manual only", label: "Manual only" },
                    ]}
                  />
                  <F0Checkbox
                    title="Anonymous responses"
                    checked={settingsAnonymous}
                    onCheckedChange={(c) => setSettingsAnonymous(c === true)}
                  />
                  <F0Checkbox
                    title="Allow employees to skip required questions"
                    checked={settingsAllowSkip}
                    onCheckedChange={(c) => setSettingsAllowSkip(c === true)}
                  />
                  <F0Checkbox
                    title="Send reminder after 3 days"
                    checked={settingsReminder}
                    onCheckedChange={(c) => setSettingsReminder(c === true)}
                  />
                </>
              )}
            </div>
            <div className="flex justify-end gap-2 border-t border-f1-border-secondary px-5 py-4">
              <button
                onClick={() => setAction(null)}
                className="rounded-md border border-f1-border-secondary px-4 py-1.5 text-sm font-medium hover:bg-f1-background-hover"
              >
                Cancel
              </button>
              <button
                onClick={() => setAction(null)}
                className={`rounded-md px-4 py-1.5 text-sm font-semibold text-white ${action === "delete" ? "bg-f1-background-critical hover:opacity-90" : "bg-f1-background-bold hover:opacity-90"}`}
              >
                {action === "create" && "Create"}
                {action === "publish" && "Confirm"}
                {action === "delete" && "Delete"}
                {action === "settings" && "Save"}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
