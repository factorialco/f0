import { useEffect, useState } from "react"
import { ComponentRecord } from "../types"
import { decideMaturity } from "../maturityDecision"

const GITHUB_BASE = "https://github.com/factorialco/factorial-one/blob/main/"
const STORYBOOK_BASE = "http://localhost:6006"

// Storybook index cache (loaded once per session)
type StoryIndex = Record<string, { type: string; title: string; importPath?: string }>
let storyIndex: StoryIndex | null = null
let storyIndexPromise: Promise<StoryIndex | null> | null = null

async function loadStoryIndex(): Promise<StoryIndex | null> {
  if (storyIndex) return storyIndex
  if (storyIndexPromise) return storyIndexPromise
  storyIndexPromise = fetch(`${STORYBOOK_BASE}/index.json`)
    .then((r) => (r.ok ? r.json() : null))
    .then((j) => {
      storyIndex = (j?.entries ?? {}) as StoryIndex
      return storyIndex
    })
    .catch(() => {
      storyIndex = {}
      return storyIndex
    })
  return storyIndexPromise
}

function findStorybookUrl(
  index: StoryIndex,
  c: ComponentRecord
): string | null {
  if (!c.storyTitle) return null
  // Find entry whose title matches; prefer docs entry
  const entries = Object.entries(index)
  const docs = entries.find(([, v]) => v.title === c.storyTitle && v.type === "docs")
  if (docs) return `${STORYBOOK_BASE}/?path=/docs/${docs[0]}`
  const story = entries.find(([, v]) => v.title === c.storyTitle)
  if (story) return `${STORYBOOK_BASE}/?path=/story/${story[0]}`
  // Fallback by importPath match
  const byImport = entries.find(([, v]) => v.importPath && c.storyPath.endsWith(v.importPath.replace(/^\.\//, "")))
  if (byImport) {
    const prefix = byImport[1].type === "docs" ? "docs" : "story"
    return `${STORYBOOK_BASE}/?path=/${prefix}/${byImport[0]}`
  }
  return null
}

function CopyButton({ text, label }: { text: string; label: string }) {
  const [copied, setCopied] = useState(false)
  return (
    <button
      type="button"
      onClick={async () => {
        await navigator.clipboard.writeText(text)
        setCopied(true)
        setTimeout(() => setCopied(false), 1500)
      }}
      className="inline-flex items-center gap-1 rounded border border-line bg-white px-2 py-1 text-xs hover:bg-gray-50"
      title={`Copy: ${text}`}
    >
      {copied ? "✓ Copied" : label}
    </button>
  )
}

function ActionLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center gap-1 rounded border border-line bg-white px-2 py-1 text-xs hover:bg-gray-50"
    >
      {label} ↗
    </a>
  )
}

export function FileActions({ c }: { c: ComponentRecord }) {
  const [sbUrl, setSbUrl] = useState<string | null>(null)

  useEffect(() => {
    let cancelled = false
    loadStoryIndex().then((idx) => {
      if (cancelled || !idx) return
      setSbUrl(findStorybookUrl(idx, c))
    })
    return () => {
      cancelled = true
    }
  }, [c.id])

  // Single source of truth — same rules as the Ola 1 patch generator.
  const decision = decideMaturity(c)
  const snippet =
    decision.target && decision.target !== c.declaredMaturity
      ? `tags: ["${decision.target}"],`
      : null

  return (
    <section className="rounded-lg border border-line bg-white p-3">
      <div className="flex flex-wrap items-center gap-2">
        <ActionLink href={GITHUB_BASE + c.storyPath} label="GitHub" />
        {sbUrl && <ActionLink href={sbUrl} label="Storybook" />}
        {snippet && <CopyButton text={snippet} label={`Copy ${snippet.replace(/,$/, "")}`} />}
      </div>
      {snippet && (
        <p className="mt-2 text-[11px] text-muted">{decision.reason}</p>
      )}
    </section>
  )
}
