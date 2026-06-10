import {
  F0Alert,
  F0BigNumber,
  F0Box,
  F0Button,
  F0Card,
  F0Heading,
  F0Select,
  F0Text,
} from "@factorialco/f0-react"
import {
  Input,
  NumberInput,
  Page,
  PageHeader,
  Tabs,
  Textarea,
} from "@factorialco/f0-react/dist/experimental"
import { useEffect, useMemo, useState } from "react"
import { useSearchParams } from "react-router-dom"

import {
  contentModules,
  contentModulesForTraining,
  findTraining,
  trainings,
  type ContentBlock,
  type ContentBlockType,
} from "@/fixtures"
import type { PrototypeMeta } from "../../../types"
import { ContentModals, type ContentAction } from "./ContentModals"

export const meta: PrototypeMeta = {
  hidden: true,
  slug: "trainings-content",
  title: "Trainings — Content (builder + consumer)",
  description:
    "Static replica of the trainings Content module: admin Builder for modules and blocks (page, video, quiz, SCORM), employee Consumer that walks block by block, SCORM viewer placeholder and CompletedState.",
  category: "Talent",
  module: "trainings",
  audience: ["admin", "employee"],
  tags: ["trainings", "content", "scorm", "builder"],
  createdAt: "2026-05-12",
}

type View = "builder" | "consumer" | "scorm" | "completed"

function useView() {
  const [params, setSearch] = useSearchParams()
  const view = (params.get("view") as View | null) ?? "builder"
  return {
    view,
    trainingId: params.get("trainingId") ?? "trn-001",
    moduleId: params.get("moduleId"),
    blockId: params.get("blockId"),
    setSearch,
  }
}

function go(
  setSearch: ReturnType<typeof useSearchParams>[1],
  next: Record<string, string | null>
) {
  setSearch((prev) => {
    const sp = new URLSearchParams(prev)
    Object.entries(next).forEach(([k, v]) => {
      if (v === null) sp.delete(k)
      else sp.set(k, v)
    })
    return sp
  })
}

const BLOCK_ICON: Record<ContentBlockType, string> = {
  page: "📄",
  video: "🎬",
  quiz: "❓",
  scorm: "📦",
}

const ContentModalContext: { open: (a: ContentAction) => void } = {
  open: () => {},
}

// --- BUILDER ----------------------------------------------------------------

function BuilderView({
  trainingId,
  moduleId,
  setSearch,
}: {
  trainingId: string
  moduleId: string | null
  setSearch: ReturnType<typeof useSearchParams>[1]
}) {
  const training = findTraining(trainingId)
  const modules = contentModulesForTraining(trainingId)
  const fallbackModules = modules.length > 0 ? modules : contentModules.slice(0, 2)
  const selectedModule =
    fallbackModules.find((m) => m.id === moduleId) ?? fallbackModules[0]

  const [selectedBlockId, setSelectedBlockId] = useState<string | null>(
    selectedModule?.blocks[0]?.id ?? null
  )
  const selectedBlock = selectedModule?.blocks.find((b) => b.id === selectedBlockId)

  return (
    <F0Box display="flex" flexDirection="column" gap="xl" padding="xl">
      <div className="flex items-start justify-between">
        <div className="flex flex-col gap-1">
          <F0Heading
            content={`Content for ${training?.name ?? "training"}`}
            variant="heading-large"
            as="h1"
          />
          <F0Text
            content="Drag-and-drop builder for course content. Add modules and blocks (pages, videos, quizzes, SCORM)."
            variant="body"
          />
        </div>
        <div className="flex gap-2">
          <F0Button
            label="Preview as employee"
            variant="ghost"
            onClick={() =>
              go(setSearch, {
                view: "consumer",
                trainingId,
                moduleId: selectedModule?.id ?? null,
                blockId: selectedModule?.blocks[0]?.id ?? null,
              })
            }
          />
          <F0Button label="Publish" variant="default" />
        </div>
      </div>

      <div className="grid grid-cols-[260px_1fr_320px] gap-4">
        {/* Modules sidebar */}
        <F0Card title="Modules">
          <div className="flex flex-col divide-y divide-f1-border-secondary">
            {fallbackModules.map((m, i) => {
              const isActive = m.id === selectedModule?.id
              return (
                <button
                  key={m.id}
                  onClick={() => {
                    setSelectedBlockId(m.blocks[0]?.id ?? null)
                    go(setSearch, { moduleId: m.id })
                  }}
                  className={`flex flex-col gap-1 p-3 text-left ${isActive ? "bg-f1-background-info-secondary" : "hover:bg-f1-background-hover"}`}
                >
                  <F0Text content={`${i + 1}. ${m.title}`} variant="label" />
                  <F0Text
                    content={`${m.blocks.length} blocks`}
                    variant="small"
                  />
                </button>
              )
            })}
            <button
              className="p-3 text-left text-sm text-f1-foreground-info hover:bg-f1-background-hover"
              onClick={() => ContentModalContext.open({ kind: "add-module" })}
            >
              + Add module
            </button>
          </div>
        </F0Card>

        {/* Blocks editor */}
        <F0Card title={selectedModule?.title ?? "Select a module"}>
          <div className="flex flex-col gap-2 p-3">
            {selectedModule?.blocks.map((b) => {
              const active = b.id === selectedBlockId
              return (
                <button
                  key={b.id}
                  onClick={() => setSelectedBlockId(b.id)}
                  className={`flex items-center justify-between gap-3 rounded-md border px-3 py-2 text-left ${active ? "border-f1-border-info bg-f1-background-info-secondary" : "border-f1-border-secondary hover:bg-f1-background-hover"}`}
                >
                  <div className="flex items-center gap-2">
                    <span>{BLOCK_ICON[b.type]}</span>
                    <div className="flex flex-col">
                      <F0Text content={b.title} variant="label" />
                      <F0Text
                        content={`${b.type} • ${b.estimatedMinutes} min`}
                        variant="small"
                      />
                    </div>
                  </div>
                  <span className="text-xs text-f1-foreground-secondary">
                    drag
                  </span>
                </button>
              )
            })}
            <div className="flex gap-2 pt-2">
              <F0Button
                label="+ Page"
                variant="ghost"
                size="sm"
                onClick={() =>
                  ContentModalContext.open({
                    kind: "add-block",
                    blockType: "page",
                    moduleTitle: selectedModule?.title ?? "",
                  })
                }
              />
              <F0Button
                label="+ Video"
                variant="ghost"
                size="sm"
                onClick={() =>
                  ContentModalContext.open({
                    kind: "add-block",
                    blockType: "video",
                    moduleTitle: selectedModule?.title ?? "",
                  })
                }
              />
              <F0Button
                label="+ Quiz"
                variant="ghost"
                size="sm"
                onClick={() =>
                  ContentModalContext.open({
                    kind: "add-block",
                    blockType: "quiz",
                    moduleTitle: selectedModule?.title ?? "",
                  })
                }
              />
              <F0Button
                label="+ SCORM"
                variant="ghost"
                size="sm"
                onClick={() =>
                  ContentModalContext.open({
                    kind: "add-block",
                    blockType: "scorm",
                    moduleTitle: selectedModule?.title ?? "",
                  })
                }
              />
            </div>
          </div>
        </F0Card>

        {/* Inspector */}
        <F0Card title="Block settings">
          {selectedBlock ? (
            <BlockInspector
              block={selectedBlock}
              onDelete={() =>
                ContentModalContext.open({
                  kind: "delete-block",
                  blockTitle: selectedBlock.title,
                })
              }
              onEditQuiz={() =>
                ContentModalContext.open({
                  kind: "edit-quiz",
                  blockTitle: selectedBlock.title,
                })
              }
            />
          ) : (
            <div className="p-6 text-center">
              <F0Text content="Select a block to edit." variant="small" />
            </div>
          )}
        </F0Card>
      </div>
    </F0Box>
  )
}

function BlockInspector({
  block,
  onDelete,
  onEditQuiz,
}: {
  block: ContentBlock
  onDelete: () => void
  onEditQuiz: () => void
}) {
  const [title, setTitle] = useState(block.title)
  const [minutes, setMinutes] = useState<number | null>(block.estimatedMinutes)
  const [preview, setPreview] = useState(block.preview ?? "")

  useEffect(() => {
    setTitle(block.title)
    setMinutes(block.estimatedMinutes)
    setPreview(block.preview ?? "")
  }, [block])

  return (
    <div className="flex flex-col gap-3 p-3">
      <Input label="Title" value={title} onChange={(v) => setTitle(v ?? "")} />
      <NumberInput
        label="Estimated minutes"
        value={minutes}
        onChange={(v) => setMinutes(v)}
        locale="en-US"
      />
      <Textarea
        label="Preview"
        rows={3}
        value={preview}
        onChange={(v) => setPreview(v ?? "")}
      />
      <div className="flex flex-col gap-1">
        <F0Text content="Type" variant="small" />
        <F0Text content={block.type} variant="label" />
      </div>
      {block.type === "scorm" && (
        <F0Alert
          variant="info"
          title="SCORM package"
          description="Replace the .zip to update the package."
        />
      )}
      {block.type === "quiz" && (
        <F0Button
          label="Edit quiz questions"
          variant="outline"
          size="sm"
          onClick={onEditQuiz}
        />
      )}
      <div className="flex justify-between">
        <F0Button
          label="Delete"
          variant="ghost"
          size="sm"
          onClick={onDelete}
        />
        <F0Button label="Save" variant="default" size="sm" />
      </div>
    </div>
  )
}

// --- CONSUMER ---------------------------------------------------------------

function ConsumerView({
  trainingId,
  blockId,
  setSearch,
}: {
  trainingId: string
  moduleId: string | null
  blockId: string | null
  setSearch: ReturnType<typeof useSearchParams>[1]
}) {
  const training = findTraining(trainingId)
  const modules = contentModulesForTraining(trainingId)
  const fallbackModules = modules.length > 0 ? modules : contentModules.slice(0, 2)

  const flatBlocks = useMemo(
    () => fallbackModules.flatMap((m) => m.blocks.map((b) => ({ moduleId: m.id, block: b }))),
    [fallbackModules]
  )

  const currentIndex = Math.max(
    0,
    flatBlocks.findIndex((x) => x.block.id === blockId)
  )
  const current = flatBlocks[currentIndex]
  const isLast = currentIndex === flatBlocks.length - 1

  if (!current)
    return (
      <F0Box padding="xl">
        <F0Alert
          variant="warning"
          title="No content"
          description="This training has no content yet."
        />
      </F0Box>
    )

  const progress = Math.round(((currentIndex + 1) / flatBlocks.length) * 100)

  return (
    <F0Box display="flex" flexDirection="column" gap="xl" padding="xl">
      <div className="flex items-start justify-between">
        <div className="flex flex-col gap-1">
          <F0Heading
            content={training?.name ?? "Training"}
            variant="heading-large"
            as="h1"
          />
          <F0Text
            content={`Block ${currentIndex + 1} of ${flatBlocks.length}`}
            variant="small"
          />
        </div>
        <F0Button
          label="Back to builder"
          variant="ghost"
          onClick={() => go(setSearch, { view: "builder" })}
        />
      </div>

      {/* Progress bar */}
      <div className="h-2 w-full overflow-hidden rounded-full bg-f1-background-secondary">
        <div
          className="h-full bg-f1-background-info"
          style={{ width: `${progress}%` }}
        />
      </div>

      <F0Card title={current.block.title}>
        <div className="flex flex-col gap-3 p-6">
          <F0Text
            content={`${current.block.type.toUpperCase()} • ${current.block.estimatedMinutes} min`}
            variant="small"
          />

          {current.block.type === "page" && (
            <div className="prose max-w-none">
              <F0Text
                content={current.block.preview ?? "Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
                variant="body"
              />
            </div>
          )}

          {current.block.type === "video" && (
            <div className="flex flex-col gap-2">
              <button
                onClick={() =>
                  ContentModalContext.open({
                    kind: "video-fullscreen",
                    blockTitle: current.block.title,
                  })
                }
                className="flex aspect-video items-center justify-center rounded-md bg-f1-background-secondary hover:bg-f1-background-tertiary"
              >
                <F0Text content="▶ Play video" variant="label" />
              </button>
            </div>
          )}

          {current.block.type === "quiz" && (
            <QuizBlock />
          )}

          {current.block.type === "scorm" && (
            <div className="flex flex-col items-center gap-3 rounded-md border border-f1-border-secondary p-8">
              <F0Text content="📦 SCORM package" variant="label" />
              <F0Text
                content="Launch the SCORM viewer to take this lesson."
                variant="small"
              />
              <div className="flex gap-2">
                <F0Button
                  label="Launch in iframe"
                  variant="default"
                  onClick={() =>
                    ContentModalContext.open({
                      kind: "scorm-fullscreen",
                      trainingName: training?.name ?? "",
                      blockTitle: current.block.title,
                    })
                  }
                />
                <F0Button
                  label="Open full page"
                  variant="outline"
                  onClick={() =>
                    go(setSearch, {
                      view: "scorm",
                      trainingId,
                      moduleId: current.moduleId,
                      blockId: current.block.id,
                    })
                  }
                />
              </div>
            </div>
          )}
        </div>
      </F0Card>

      <div className="flex items-center justify-between">
        <F0Button
          label="Previous"
          variant="ghost"
          disabled={currentIndex === 0}
          onClick={() => {
            const prev = flatBlocks[currentIndex - 1]
            if (prev) {
              go(setSearch, {
                blockId: prev.block.id,
                moduleId: prev.moduleId,
              })
            }
          }}
        />
        {isLast ? (
          <F0Button
            label="Finish"
            variant="default"
            onClick={() => go(setSearch, { view: "completed" })}
          />
        ) : (
          <F0Button
            label="Next"
            variant="default"
            onClick={() => {
              const next = flatBlocks[currentIndex + 1]
              if (next) {
                go(setSearch, {
                  blockId: next.block.id,
                  moduleId: next.moduleId,
                })
              }
            }}
          />
        )}
      </div>
    </F0Box>
  )
}

function QuizBlock() {
  const [selected, setSelected] = useState<number | null>(null)
  const opts = ["Option A", "Option B", "Option C", "Option D"]
  return (
    <div className="flex flex-col gap-3">
      <F0Text
        content="Which of the following best describes the concept covered in this module?"
        variant="label"
      />
      <div className="flex flex-col gap-2">
        {opts.map((o, i) => (
          <button
            key={o}
            onClick={() => setSelected(i)}
            className={`rounded-md border px-3 py-2 text-left text-sm ${selected === i ? "border-f1-border-info bg-f1-background-info-secondary" : "border-f1-border-secondary hover:bg-f1-background-hover"}`}
          >
            {o}
          </button>
        ))}
      </div>
      {selected !== null && (
        <F0Alert
          variant={selected === 1 ? "positive" : "critical"}
          title={selected === 1 ? "Correct!" : "Try again"}
          description={
            selected === 1
              ? "You can proceed to the next block."
              : "Review the previous block and try again."
          }
        />
      )}
    </div>
  )
}

// --- SCORM VIEWER -----------------------------------------------------------

function ScormView({
  trainingId,
  setSearch,
}: {
  trainingId: string
  setSearch: ReturnType<typeof useSearchParams>[1]
}) {
  const training = findTraining(trainingId)
  return (
    <F0Box display="flex" flexDirection="column" gap="xl" padding="xl">
      <button
        onClick={() => go(setSearch, { view: "consumer" })}
        className="self-start text-sm text-f1-foreground-info hover:underline"
      >
        ← Back to lesson
      </button>
      <div className="flex flex-col gap-1">
        <F0Heading
          content={`SCORM — ${training?.name ?? ""}`}
          variant="heading-large"
          as="h1"
        />
        <F0Text content="Playing a SCORM 1.2 / 2004 package." variant="small" />
      </div>

      <div className="flex aspect-video items-center justify-center rounded-md bg-f1-background-secondary">
        <div className="flex flex-col items-center gap-2">
          <F0Text content="📦" variant="label" />
          <F0Text content="SCORM player placeholder" variant="small" />
          <F0Text
            content="In production this is an iframe pointing to /scorm_packages/:id/index.html"
            variant="description"
          />
        </div>
      </div>

      <div className="flex justify-between">
        <F0Text content="Lesson status: in progress" variant="small" />
        <F0Button
          label="Mark as completed"
          variant="default"
          onClick={() => go(setSearch, { view: "completed" })}
        />
      </div>
    </F0Box>
  )
}

// --- COMPLETED STATE --------------------------------------------------------

function CompletedView({
  trainingId,
  setSearch,
}: {
  trainingId: string
  setSearch: ReturnType<typeof useSearchParams>[1]
}) {
  const training = findTraining(trainingId)
  return (
    <F0Box display="flex" flexDirection="column" gap="xl" padding="xl">
      <div className="flex flex-col items-center gap-4 rounded-lg border border-f1-border-secondary bg-f1-background p-12 text-center">
        <span className="text-5xl">🎉</span>
        <F0Heading
          content="Training completed"
          variant="heading-large"
          as="h1"
        />
        <F0Text
          content={`You've finished ${training?.name ?? "the training"}. Your certificate is being generated.`}
          variant="body"
        />
        <div className="grid grid-cols-3 gap-4">
          <F0BigNumber label="Score" value="92%" />
          <F0BigNumber label="Time" value="2h 14m" />
          <F0BigNumber label="Certificate" value="Issued" />
        </div>
        <div className="flex gap-2">
          <F0Button
            label="Back to training"
            variant="ghost"
            onClick={() => go(setSearch, { view: "consumer" })}
          />
          <F0Button label="Download certificate" variant="default" />
        </div>
      </div>
    </F0Box>
  )
}

// --- ROOT -------------------------------------------------------------------

export default function TrainingsContent() {
  const { view, trainingId, moduleId, blockId, setSearch } = useView()
  const training = findTraining(trainingId)
  const [action, setAction] = useState<ContentAction>(null)
  ContentModalContext.open = (a: ContentAction) => setAction(a)

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
            {
              id: "training",
              label: training?.name ?? "Training",
              href: `/p/trainings?trainingId=${trainingId}`,
            },
            { id: "content", label: "Content" },
          ]}
        />
      }
    >
      <div className="flex items-center gap-3 px-6 pt-4">
        <F0Text content="Training:" variant="small" />
        <div className="min-w-[280px]">
          <F0Select
            label="Training"
            hideLabel
            value={trainingId}
            onChange={(v: string) => go(setSearch, { trainingId: v })}
            options={trainings
              .slice(0, 8)
              .map((t) => ({ value: t.id, label: t.name }))}
          />
        </div>
      </div>

      <Tabs
        tabs={[
          {
            id: "builder",
            label: "Builder (admin)",
            onClick: () => go(setSearch, { view: "builder" }),
          },
          {
            id: "consumer",
            label: "Consumer (employee)",
            onClick: () => go(setSearch, { view: "consumer" }),
          },
          {
            id: "scorm",
            label: "SCORM viewer",
            onClick: () => go(setSearch, { view: "scorm" }),
          },
          {
            id: "completed",
            label: "Completed",
            onClick: () => go(setSearch, { view: "completed" }),
          },
        ]}
        activeTabId={view}
        key={view}
      />

      {view === "builder" && (
        <BuilderView
          trainingId={trainingId}
          moduleId={moduleId}
          setSearch={setSearch}
        />
      )}
      {view === "consumer" && (
        <ConsumerView
          trainingId={trainingId}
          moduleId={moduleId}
          blockId={blockId}
          setSearch={setSearch}
        />
      )}
      {view === "scorm" && (
        <ScormView trainingId={trainingId} setSearch={setSearch} />
      )}
      {view === "completed" && (
        <CompletedView trainingId={trainingId} setSearch={setSearch} />
      )}
    </Page>
    <ContentModals action={action} onClose={() => setAction(null)} />
    </>
  )
}

// keep type imports referenced
export type _Block = ContentBlock
