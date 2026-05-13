import { useEffect, useState } from "react"
import {
  F0Alert,
  F0Button,
  F0Dialog,
  F0Select,
  F0Text,
} from "@factorialco/f0-react"
import {
  Input,
  NumberInput,
  Textarea,
} from "@factorialco/f0-react/dist/experimental"

import type { ContentBlockType } from "@/fixtures"

export type ContentAction =
  | { kind: "add-module" }
  | { kind: "add-block"; blockType: ContentBlockType; moduleTitle: string }
  | { kind: "delete-block"; blockTitle: string }
  | { kind: "edit-quiz"; blockTitle: string }
  | { kind: "scorm-fullscreen"; trainingName: string; blockTitle: string }
  | { kind: "video-fullscreen"; blockTitle: string }
  | null

type Props = {
  action: ContentAction
  onClose: () => void
}

const TITLES: Record<string, string> = {
  "add-module": "New module",
  "add-block": "Add block",
  "delete-block": "Delete block",
  "edit-quiz": "Edit quiz",
  "scorm-fullscreen": "SCORM player",
  "video-fullscreen": "Video player",
}

const WIDTH: Record<string, "sm" | "md" | "lg" | "xl"> = {
  "add-module": "md",
  "add-block": "md",
  "delete-block": "sm",
  "edit-quiz": "lg",
  "scorm-fullscreen": "xl",
  "video-fullscreen": "xl",
}

const BLOCK_LABELS: Record<ContentBlockType, string> = {
  page: "Page",
  video: "Video",
  quiz: "Quiz",
  scorm: "SCORM package",
}

const CONFIRM_LABEL: Record<string, string> = {
  "add-module": "Create module",
  "add-block": "Add block",
  "delete-block": "Delete",
  "edit-quiz": "Save",
  "scorm-fullscreen": "Close",
  "video-fullscreen": "Close",
}

export function ContentModals({ action, onClose }: Props) {
  const [moduleTitle, setModuleTitle] = useState("")
  const [moduleDesc, setModuleDesc] = useState("")
  const [blockTitle, setBlockTitle] = useState("")
  const [blockMinutes, setBlockMinutes] = useState<number | null>(10)
  const [pageContent, setPageContent] = useState("")
  const [videoUrl, setVideoUrl] = useState("")
  const [scormFile, setScormFile] = useState("")
  const [questions, setQuestions] = useState<
    { id: string; text: string; options: string[]; correct: number }[]
  >([
    {
      id: "q1",
      text: "Sample question",
      options: ["Option A", "Option B", "Option C", "Option D"],
      correct: 0,
    },
  ])

  useEffect(() => {
    if (!action) return
    setModuleTitle("")
    setModuleDesc("")
    setBlockTitle("")
    setBlockMinutes(10)
    setPageContent("")
    setVideoUrl("")
    setScormFile("")
  }, [action])

  if (!action) return null

  const addQuestion = () =>
    setQuestions((qs) => [
      ...qs,
      {
        id: `q${qs.length + 1}`,
        text: "",
        options: ["", "", "", ""],
        correct: 0,
      },
    ])

  const updateQuestion = (
    id: string,
    patch: Partial<{ text: string; options: string[]; correct: number }>
  ) =>
    setQuestions((qs) =>
      qs.map((q) => (q.id === id ? { ...q, ...patch } : q))
    )

  const removeQuestion = (id: string) =>
    setQuestions((qs) => qs.filter((q) => q.id !== id))

  const isCritical = action.kind === "delete-block"

  return (
    <F0Dialog
      isOpen={action !== null}
      onClose={onClose}
      position="center"
      width={WIDTH[action.kind] ?? "md"}
      title={TITLES[action.kind]}
      primaryAction={{
        label: CONFIRM_LABEL[action.kind],
        onClick: onClose,
        variant: isCritical ? "critical" : "default",
      }}
      secondaryAction={{ label: "Cancel", onClick: onClose }}
    >
      <div className="flex flex-col gap-4">
        {action.kind === "add-module" && (
          <>
            <Input
              label="Module title"
              value={moduleTitle}
              onChange={(v) => setModuleTitle(v ?? "")}
              placeholder="e.g. Introduction"
            />
            <Textarea
              label="Description"
              value={moduleDesc}
              onChange={(v) => setModuleDesc(v ?? "")}
              rows={3}
            />
            <F0Alert
              variant="info"
              title="Modules group blocks"
              description="You can add pages, videos, quizzes and SCORM blocks inside a module."
            />
          </>
        )}

        {action.kind === "add-block" && (
          <>
            <F0Text
              content={`Adding a ${BLOCK_LABELS[action.blockType]} block to "${action.moduleTitle}".`}
              variant="small"
            />
            <Input
              label="Block title"
              value={blockTitle}
              onChange={(v) => setBlockTitle(v ?? "")}
              placeholder={`New ${BLOCK_LABELS[action.blockType]}`}
            />
            <NumberInput
              label="Estimated duration (minutes)"
              value={blockMinutes}
              onChange={(v) => setBlockMinutes(v)}
              locale="en-US"
            />
            {action.blockType === "page" && (
              <Textarea
                label="Page content (markdown)"
                value={pageContent}
                onChange={(v) => setPageContent(v ?? "")}
                rows={6}
                placeholder="# Heading…"
              />
            )}
            {action.blockType === "video" && (
              <Input
                label="Video URL or upload"
                value={videoUrl}
                onChange={(v) => setVideoUrl(v ?? "")}
                placeholder="https://… or upload a file"
              />
            )}
            {action.blockType === "scorm" && (
              <>
                <Input
                  label="SCORM .zip"
                  value={scormFile}
                  onChange={(v) => setScormFile(v ?? "")}
                  placeholder="course-package.zip"
                />
                <F0Alert
                  variant="info"
                  title="SCORM 1.2 / 2004 supported"
                  description="The package will be unzipped and served from /scorm_packages/:id/index.html."
                />
              </>
            )}
            {action.blockType === "quiz" && (
              <F0Alert
                variant="info"
                title="Empty quiz"
                description="A blank quiz will be created. Use Edit quiz to add questions."
              />
            )}
          </>
        )}

        {action.kind === "delete-block" && (
          <F0Alert
            variant="critical"
            title={`Delete "${action.blockTitle}"?`}
            description="This block and all its content will be permanently removed. Employee progress on this block will be lost."
          />
        )}

        {action.kind === "edit-quiz" && (
          <>
            <F0Text content={`Quiz: ${action.blockTitle}`} variant="small" />
            {questions.map((q, qi) => (
              <div
                key={q.id}
                className="flex flex-col gap-3 rounded-md border border-f1-border-secondary p-3"
              >
                <div className="flex items-center justify-between">
                  <F0Text content={`Question ${qi + 1}`} variant="label" />
                  {questions.length > 1 && (
                    <F0Button
                      label="Remove"
                      variant="ghost"
                      size="sm"
                      onClick={() => removeQuestion(q.id)}
                    />
                  )}
                </div>
                <Input
                  label="Question text"
                  hideLabel
                  value={q.text}
                  onChange={(v) => updateQuestion(q.id, { text: v ?? "" })}
                  placeholder="Question text"
                />
                <div className="flex flex-col gap-2">
                  {q.options.map((opt, oi) => (
                    <Input
                      key={oi}
                      label={`Option ${String.fromCharCode(65 + oi)}`}
                      value={opt}
                      onChange={(v) => {
                        const next = [...q.options]
                        next[oi] = v ?? ""
                        updateQuestion(q.id, { options: next })
                      }}
                      placeholder={`Option ${String.fromCharCode(65 + oi)}`}
                    />
                  ))}
                </div>
                <F0Select<string>
                  label="Correct answer"
                  value={String(q.correct)}
                  onChange={(v: string) =>
                    updateQuestion(q.id, { correct: Number(v) })
                  }
                  options={q.options.map((_o, i) => ({
                    value: String(i),
                    label: `Option ${String.fromCharCode(65 + i)}`,
                  }))}
                />
              </div>
            ))}
            <F0Button
              label="+ Add question"
              variant="ghost"
              size="sm"
              onClick={addQuestion}
            />
          </>
        )}

        {action.kind === "scorm-fullscreen" && (
          <div className="flex h-full min-h-[60vh] flex-col gap-3">
            <F0Text
              content={`${action.trainingName} — ${action.blockTitle}`}
              variant="small"
            />
            <div className="flex flex-1 items-center justify-center rounded-md bg-f1-background-secondary">
              <div className="flex flex-col items-center gap-2">
                <span className="text-6xl">📦</span>
                <F0Text content="SCORM iframe placeholder" variant="label" />
                <F0Text
                  content="In production: <iframe src='/scorm_packages/:id/index.html' />"
                  variant="description"
                />
              </div>
            </div>
            <div className="flex items-center justify-between rounded-md border border-f1-border-secondary p-3">
              <F0Text content="Status: in progress" variant="small" />
              <F0Button
                label="Mark as completed"
                variant="default"
                size="sm"
                onClick={onClose}
              />
            </div>
          </div>
        )}

        {action.kind === "video-fullscreen" && (
          <div className="flex h-full min-h-[55vh] flex-col gap-3">
            <F0Text content={action.blockTitle} variant="small" />
            <div className="relative flex flex-1 items-center justify-center rounded-md bg-black">
              <span className="text-6xl text-white">▶</span>
            </div>
            <div className="flex items-center gap-3 rounded-md border border-f1-border-secondary p-3">
              <F0Text content="⏯" variant="small" />
              <div className="h-2 flex-1 overflow-hidden rounded-full bg-f1-background-secondary">
                <div className="h-full w-1/3 bg-f1-background-info" />
              </div>
              <F0Text content="01:23 / 04:30" variant="small" />
              <F0Text content="⛶" variant="small" />
            </div>
          </div>
        )}
      </div>
    </F0Dialog>
  )
}
