import React, { useEffect, useState } from "react"

import { F0TagRaw } from "@/components/tags/F0TagRaw"
import { LayersFront } from "@/icons/app"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/ui/tooltip"

import type {
  ComposerPrototype,
  ProductUsageData,
  ProductUsageEntry,
  UsageResult,
} from "../scripts/product-usage-scan.mjs"

/**
 * Served by the Storybook dev server (see scripts/product-usage-scan.mjs).
 * Kept as a literal rather than imported from the scanner so this module never
 * pulls Node built-ins into the browser bundle.
 */
const ENDPOINT = "/f0-product-usage.json"

/** How many modules to list before collapsing the rest into a "+N more". */
const MODULES_SHOWN = 8

/** How many prototypes to name before collapsing the rest into a "+N more". */
const PROTOTYPES_SHOWN = 6

/** How many f0 components to name before collapsing the rest. */
const INTERNAL_SHOWN = 6

/**
 * One fetch per Storybook session, shared by every docs page. Resolves to
 * `null` when the data isn't available, in which case the tag stays hidden.
 */
let request: Promise<UsageResult | null> | undefined

/**
 * Local dev only. This data — product module names, internal prototype titles
 * — must never reach the public Storybook at f0.factorial.dev, which anyone
 * outside the company can read. `import.meta.env.DEV` is inlined at build
 * time, so the static bundle drops the tag and its request entirely rather
 * than relying on the endpoint 404ing.
 */
const ENABLED = import.meta.env.DEV

function fetchUsage(): Promise<UsageResult | null> {
  if (!ENABLED) return Promise.resolve(null)

  request ??= fetch(ENDPOINT)
    .then(async (response) => {
      // A static build serves index.html for unknown paths, so a 200 alone
      // isn't proof the endpoint exists — check what came back.
      if (!response.ok) return null
      const contentType = response.headers.get("content-type") ?? ""
      if (!contentType.includes("application/json")) return null
      return (await response.json()) as UsageResult
    })
    .catch(() => null)
  return request
}

function useUsage() {
  const [result, setResult] = useState<UsageResult | null>()

  useEffect(() => {
    let active = true
    void fetchUsage().then((data) => {
      if (active) setResult(data)
    })
    return () => {
      active = false
    }
  }, [])

  return result
}

/** Sums a component's usage across every name it is exported under. */
function collectUsage(
  data: ProductUsageData,
  names: string[]
): { entries: Array<[string, ProductUsageEntry]>; files: number } {
  const entries = names
    .map((name) => [name, data.components[name]] as const)
    .filter((pair): pair is [string, ProductUsageEntry] => Boolean(pair[1]))

  return {
    entries: [...entries],
    files: entries.reduce((total, [, entry]) => total + entry.files, 0),
  }
}

/** Module → importing files, merged across aliases and sorted by weight. */
function mergeModules(entries: Array<[string, ProductUsageEntry]>) {
  const merged = new Map<string, number>()
  for (const [, entry] of entries) {
    for (const [module, files] of Object.entries(entry.modules)) {
      merged.set(module, (merged.get(module) ?? 0) + files)
    }
  }
  return [...merged.entries()].sort(
    (a, b) => b[1] - a[1] || a[0].localeCompare(b[0])
  )
}

/** The prototypes using any of the names, deduped by project + slug. */
function collectPrototypes(
  byComponent: Record<string, ComposerPrototype[]>,
  names: string[]
): ComposerPrototype[] {
  const seen = new Map<string, ComposerPrototype>()
  for (const name of names) {
    for (const prototype of byComponent[name] ?? []) {
      seen.set(`${prototype.project}/${prototype.slug}`, prototype)
    }
  }
  return [...seen.values()].sort((a, b) => a.title.localeCompare(b.title))
}

function plural(count: number, noun: string) {
  return `${count} ${noun}${count === 1 ? "" : "s"}`
}

/**
 * The lookup names for a component: what the story path and title suggest,
 * plus everything its folder's barrel exports.
 *
 * The second part is what makes `Toast` find `toasts` — a component is used
 * under the name it exports, which often isn't the name of its folder.
 */
function withExportedNames(
  result: UsageResult,
  names: string[],
  componentPath: string | null
): string[] {
  if (!componentPath || !result.internal.available) return names

  const exported = result.internal.exports[componentPath] ?? []
  return [...new Set([...names, ...exported])]
}

/** The f0 components importing any of the names, deduped and sorted. */
function collectInternal(
  byComponent: Record<string, string[]>,
  names: string[]
): string[] {
  const owners = new Set<string>()
  for (const name of names) {
    for (const owner of byComponent[name] ?? []) owners.add(owner)
  }
  // A component listing itself would be noise (its own docs page).
  for (const name of names) owners.delete(name)
  return [...owners].sort((a, b) => a.localeCompare(b))
}

/** A capped list of names under a heading, with a "+N more" tail. */
function NameList({
  heading,
  items,
  limit,
  className,
}: {
  heading: string
  items: string[]
  limit: number
  className?: string
}) {
  const shown = items.slice(0, limit)
  const hidden = items.length - shown.length

  return (
    <div className={className}>
      <p className="m-0 font-medium">{heading}</p>
      <ul className="m-0 mt-2 list-none space-y-1 p-0">
        {shown.map((item) => (
          <li key={item} className="truncate">
            {item}
          </li>
        ))}
      </ul>
      {hidden > 0 && <p className="m-0 mt-1 opacity-70">+{hidden} more</p>}
    </div>
  )
}

function ProductSection({
  data,
  names,
}: {
  data: ProductUsageData
  names: string[]
}) {
  const { entries, files } = collectUsage(data, names)
  const modules = mergeModules(entries)
  const shown = modules.slice(0, MODULES_SHOWN)
  const hidden = modules.length - shown.length

  if (files === 0) {
    return <p className="m-0">Not used anywhere in the product yet.</p>
  }

  return (
    <>
      <p className="m-0 font-medium">
        Used in {plural(files, "file")} across{" "}
        {plural(modules.length, "module")}
      </p>
      <ul className="m-0 mt-2 list-none space-y-1 p-0">
        {shown.map(([module, count]) => (
          <li key={module} className="flex justify-between gap-4">
            <span className="truncate font-mono">{module}</span>
            <span className="opacity-70">{count}</span>
          </li>
        ))}
      </ul>
      {hidden > 0 && <p className="m-0 mt-1 opacity-70">+{hidden} more</p>}
      {entries.length > 1 && (
        <p className="m-0 mt-2 opacity-70">
          Counted across {entries.map(([name]) => name).join(", ")}.
        </p>
      )}
    </>
  )
}

/**
 * Names the product repos that weren't scanned. Without this the count reads
 * as the whole picture when a product surface is simply missing from disk.
 */
function MissingRepos({ missing }: { missing: ProductUsageData["missing"] }) {
  if (missing.length === 0) return null

  return (
    <p className="m-0 mt-2 text-sm opacity-70">
      Not counted:{" "}
      {missing.map((repo, index) => (
        <span key={repo.id}>
          {index > 0 && ", "}
          <code className="font-mono">{repo.id}</code>
        </span>
      ))}{" "}
      — no local checkout. Clone it anywhere usual (next to this repo,{" "}
      <code className="font-mono">~/code</code>…) and it&apos;s picked up
      automatically.
    </p>
  )
}

/**
 * Everything the tag needs about one component, resolved once so the trigger
 * label and the tooltip can't disagree.
 */
function resolveUsage(result: UsageResult, names: string[]) {
  const product = result.product.available ? result.product : null
  const productFiles = product ? collectUsage(product, names).files : 0

  const prototypes = result.composer.available
    ? collectPrototypes(result.composer.prototypes, names)
    : []

  // Only worth surfacing when the component is absent from the product: it
  // answers "is this dead, or just not shipped directly?".
  const internal =
    productFiles === 0 && result.internal.available
      ? collectInternal(result.internal.components, names)
      : []

  return { product, productFiles, prototypes, internal }
}

function UsageDetails({
  result,
  names,
}: {
  result: UsageResult
  names: string[]
}) {
  const { product, productFiles, prototypes, internal } = resolveUsage(
    result,
    names
  )

  return (
    <div className="sb-unstyled max-w-xs p-3 text-base text-f1-foreground-inverse">
      {product ? (
        <>
          <ProductSection data={product} names={names} />
          <MissingRepos missing={product.missing} />
        </>
      ) : (
        <p className="m-0">
          No local factorial checkout — product usage unavailable.
        </p>
      )}
      {internal.length > 0 && (
        <NameList
          className="mt-3"
          heading={`Used inside F0 by ${plural(internal.length, "component")}`}
          items={internal}
          limit={INTERNAL_SHOWN}
        />
      )}
      {prototypes.length > 0 && (
        <NameList
          className={productFiles === 0 && internal.length === 0 ? "" : "mt-3"}
          heading={`Used in ${plural(prototypes.length, "Composer prototype")}`}
          items={prototypes.map((prototype) => prototype.title)}
          limit={PROTOTYPES_SHOWN}
        />
      )}
    </div>
  )
}

/**
 * Renders a usage tag next to the docs title, revealing on hover how many
 * product files import this component and which modules they belong to, plus —
 * when it isn't in the product — which f0 components and Composer prototypes
 * use it.
 *
 * The data comes from a dev-server scan of this package's `src/` and of local
 * `factorialco/factorial` and `factorialco/factorial-composer` checkouts, so
 * the tag renders nothing on the public Storybook.
 *
 * @see scripts/product-usage-scan.mjs
 */
export function ProductUsageTag({
  names,
  componentPath,
}: {
  names: string[]
  /** Folder relative to `src/`, used to look up what it exports. */
  componentPath: string | null
}) {
  const result = useUsage()

  // Before anything renders: the loading state would otherwise flash on the
  // public build for the frame between mount and the effect resolving to
  // "unavailable", advertising internal tooling to the outside world.
  if (!ENABLED) return null
  if (names.length === 0) return null

  // The first docs page of a session pays for the scan (a second or two of
  // walking three repos). Say so rather than leaving a gap where the tag will
  // be — an absent tag is indistinguishable from a broken one.
  if (result === undefined) {
    return (
      <Tooltip>
        <TooltipTrigger asChild>
          <span className="sb-unstyled inline-flex cursor-progress align-middle opacity-60">
            <F0TagRaw text="Checking usage…" icon={LayersFront} />
          </span>
        </TooltipTrigger>
        <TooltipContent side="bottom" align="start">
          <span className="sb-unstyled text-base text-f1-foreground-inverse">
            Scanning the product, F0 and Composer prototypes for usages of this
            component.
          </span>
        </TooltipContent>
      </Tooltip>
    )
  }

  // `null` means there's no endpoint to ask — i.e. the public static build,
  // where this internal data must not appear at all.
  if (result === null) return null

  // Path/title candidates miss components whose export name differs from their
  // folder (`hooks/toast` ships `toasts`), so fold in what the folder exports.
  const lookup = withExportedNames(result, names, componentPath)

  const { productFiles, internal } = resolveUsage(result, lookup)

  // "Not used" would be misleading for the building blocks other components
  // are made of, so say which of the two it is.
  const label =
    productFiles > 0
      ? "Where is this used in the product?"
      : internal.length > 0
        ? "Only used internally in F0"
        : "Not used in the product"

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <span className="sb-unstyled inline-flex cursor-help align-middle">
          <F0TagRaw text={label} icon={LayersFront} />
        </span>
      </TooltipTrigger>
      <TooltipContent
        side="bottom"
        align="start"
        className="w-max max-w-[min(90vw,42rem)] overflow-hidden !p-0"
      >
        <UsageDetails result={result} names={lookup} />
      </TooltipContent>
    </Tooltip>
  )
}
