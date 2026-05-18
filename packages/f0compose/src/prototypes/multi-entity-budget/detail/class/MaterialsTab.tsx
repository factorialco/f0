import { useState } from "react"
import {
  F0Alert,
  F0Button,
  F0Heading,
  F0Text,
} from "@factorialco/f0-react"
import { Add, Delete, Link } from "@factorialco/f0-react/icons/app"

import type { Training, TrainingClass, TrainingFile } from "@/fixtures"
import { filesForTraining } from "@/fixtures"

type Props = { training: Training; klass: TrainingClass }
type Filter = "all" | "file" | "link"

const ICON_BY_TYPE: Record<string, string> = {
  pdf: "📄",
  video: "🎬",
  doc: "📝",
  link: "🔗",
  image: "🖼️",
  scorm: "📦",
}

type Material = TrainingFile & { kind: "file" | "link" }

function FilterButton({
  active,
  label,
  onClick,
}: {
  active: boolean
  label: string
  onClick: () => void
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-md border border-solid px-3 py-1.5 text-sm font-medium transition-colors ${
        active
          ? "border-f1-border-bold bg-f1-background-bold text-f1-foreground-bold"
          : "border-f1-border-secondary bg-f1-background text-f1-foreground"
      }`}
    >
      {label}
    </button>
  )
}

export function MaterialsTab({ training }: Props) {
  // Class materials are a subset of training materials (demo split: every other file).
  const baseFiles = filesForTraining(training.id)
  const materials: Material[] = baseFiles.map((f) => ({
    ...f,
    kind: f.type === "link" ? "link" : "file",
  }))

  const [filter, setFilter] = useState<Filter>("all")
  const filtered =
    filter === "all" ? materials : materials.filter((m) => m.kind === filter)

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div className="flex flex-col gap-1">
          <F0Heading
            as="h3"
            variant="heading-large"
            content={`Materials (${materials.length})`}
          />
          <F0Text
            variant="description"
            content="Files and links shared with this group's participants."
          />
        </div>
        <div className="flex gap-2">
          <F0Button label="Add link" icon={Link} variant="outline" />
          <F0Button label="Upload file" icon={Add} />
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        <FilterButton
          active={filter === "all"}
          label="All"
          onClick={() => setFilter("all")}
        />
        <FilterButton
          active={filter === "file"}
          label="Files"
          onClick={() => setFilter("file")}
        />
        <FilterButton
          active={filter === "link"}
          label="Links"
          onClick={() => setFilter("link")}
        />
      </div>

      {filtered.length === 0 ? (
        <F0Alert
          variant="info"
          title="No materials yet"
          description="Upload files or add links accessible to all participants of this group."
        />
      ) : (
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((m) => (
            <div
              key={m.id}
              className="flex items-start justify-between gap-3 rounded-md border border-solid border-f1-border-secondary bg-f1-background p-4"
            >
              <div className="flex min-w-0 items-start gap-3">
                <span aria-hidden className="text-2xl">
                  {ICON_BY_TYPE[m.type] ?? "📎"}
                </span>
                <div className="flex min-w-0 flex-col gap-1">
                  <F0Text variant="label" content={m.name} />
                  <F0Text
                    variant="small"
                    content={`${m.type.toUpperCase()} · ${m.size} · ${m.uploadedAt}`}
                  />
                </div>
              </div>
              <F0Button
                label="Delete"
                icon={Delete}
                variant="ghost"
                size="sm"
                hideLabel
              />
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
