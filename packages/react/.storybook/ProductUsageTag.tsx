import React from "react"

import { F0TagRaw } from "@/components/tags/F0TagRaw"
import { LayersFront } from "@/icons/app"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/ui/tooltip"

import type {
  ComposerPrototype,
  ProductUsageData,
  ProductUsageEntry,
  UsageResult,
} from "../scripts/product-usage-scan.mjs"
import { DIRTY_MESSAGE } from "./usage-contract.ts"
import {
  ENABLED,
  rescan,
  runRepoAction,
  useProductUsage,
} from "./useProductUsage.ts"

/** How many modules to list before collapsing the rest into a "+N more". */
const MODULES_SHOWN = 8

/** How many prototypes to name before collapsing the rest into a "+N more". */
const PROTOTYPES_SHOWN = 6

/** How many f0 components to name before collapsing the rest. */
const INTERNAL_SHOWN = 6

/** Pending-action key for the button that clones every missing repo. */
const CLONE_ALL = "clone-all"

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
 * Runs one action at a time and reports which one is in flight, so a click
 * can't be repeated while the work it started is still running.
 */
function usePendingAction() {
  const [pending, setPending] = React.useState<string | null>(null)
  const [failure, setFailure] = React.useState<string | null>(null)

  const run = React.useCallback(
    async (
      name: string,
      work: () => Promise<{ ok: boolean; message?: string } | void>
    ) => {
      setPending(name)
      setFailure(null)
      try {
        const result = await work()
        // A request the server refused never reaches the actions payload, so
        // this is the only place it can be reported.
        if (result && !result.ok) {
          setFailure(result.message ?? "Request failed")
        }
      } catch {
        setFailure("Request failed")
      } finally {
        setPending(null)
      }
    },
    []
  )

  return { pending, failure, run }
}

/** A small button styled for the dark tooltip surface. */
function TooltipButton({
  onClick,
  disabled,
  children,
}: {
  onClick: () => void
  disabled?: boolean
  children: React.ReactNode
}) {
  return (
    // Colors are inline because Storybook's Tailwind build doesn't scan
    // `.storybook/`, so one-off utilities here silently fall back to defaults.
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className="shrink-0 rounded-md px-2 py-1 text-sm font-medium transition-colors"
      style={{
        color: "#fff",
        backgroundColor: "rgba(255,255,255,0.1)",
        border: "1px solid rgba(255,255,255,0.25)",
        cursor: disabled ? "default" : "pointer",
        opacity: disabled ? 0.5 : 1,
      }}
    >
      {children}
    </button>
  )
}

/**
 * Names the product repos that weren't scanned, and offers to clone them.
 *
 * Without this the count reads as the whole picture when a product surface is
 * simply missing from disk. The clone runs on the dev server against a fixed
 * list of repos — see `KNOWN_REPOS` in the scanner.
 */
function MissingRepos({
  missing,
  actions,
}: {
  missing: ProductUsageData["missing"]
  actions: UsageResult["actions"]
}) {
  const { pending, failure, run } = usePendingAction()

  if (missing.length === 0) return null

  const label = missing.map((repo) => repo.id).join(" & ")
  const cloningId = missing.find(
    (repo) => actions?.[repo.id]?.state === "running"
  )?.id
  const cloning = pending === CLONE_ALL || Boolean(cloningId)

  // Sequential: two clones of Factorial-sized repos at once help nobody.
  const cloneAll = async () => {
    let outcome: { ok: boolean; message?: string } = { ok: true }
    for (const repo of missing) {
      const result = await runRepoAction(repo.id, "clone")
      if (!result.ok && outcome.ok) outcome = result
    }
    return outcome
  }

  return (
    <div className="mt-2 text-sm opacity-70">
      <p className="m-0">
        Not counted:{" "}
        {missing.map((repo, index) => (
          <span key={repo.id}>
            {index > 0 && ", "}
            <code className="font-mono">{repo.id}</code>
          </span>
        ))}{" "}
        — no local checkout.
      </p>
      <div className="mt-2 flex flex-col gap-2">
        <span className="flex items-center gap-2">
          {/* One button for all of them: nobody wants to click Clone twice and
              wait through two monorepos in sequence by hand. */}
          <TooltipButton
            onClick={() => void run(CLONE_ALL, cloneAll)}
            disabled={cloning}
          >
            {cloning ? `Cloning ${cloningId ?? label}…` : `Clone ${label}`}
          </TooltipButton>
          <span className="opacity-80">
            {cloning
              ? "This takes a few minutes — the tag updates when it lands."
              : failure}
          </span>
        </span>
        {missing.map((repo) => {
          const status = actions?.[repo.id]
          if (!status || status.state === "running") return null
          return (
            <span key={repo.id} className="opacity-80">
              <code className="font-mono">{repo.id}</code>: {status.message}
            </span>
          )
        })}
      </div>
    </div>
  )
}

/**
 * Fast-forwards the scanned checkouts and rescans, so the numbers reflect
 * what's on main rather than whatever was last pulled.
 *
 * Pull is `--ff-only` and skips any repo with a dirty working tree — this runs
 * against real checkouts people may be working in.
 */
function RefreshActions({
  repos,
  actions,
  stashes,
  generatedAt,
  rescanning,
}: {
  repos: ProductUsageData["repos"]
  actions: UsageResult["actions"]
  stashes: UsageResult["stashes"]
  generatedAt: string
  rescanning: boolean
}) {
  const { pending, failure, run } = usePendingAction()

  // Either a button is mid-click, or the server still has git running from an
  // earlier one (a pull outlives the request that started it).
  const runningOnServer = repos.some(
    (repo) => actions?.[repo.id]?.state === "running"
  )
  const busy = pending !== null || runningOnServer || rescanning

  // Repos a plain pull refused to touch. Offering "Pull latest" again would
  // just reproduce the same refusal, so those get the stash route instead.
  const blocked = repos.filter(
    (repo) => actions?.[repo.id]?.message === DIRTY_MESSAGE
  )

  const results = repos
    .map((repo) => [repo.id, actions?.[repo.id]] as const)
    .filter(([, status]) => status && status.state !== "running")

  // Sequential: two gits writing at once, and the second failing on a lock,
  // helps nobody. The first refusal is what gets reported.
  const pullAll = async () => {
    let outcome: { ok: boolean; message?: string } = { ok: true }
    for (const repo of repos) {
      const result = await runRepoAction(repo.id, "pull")
      if (!result.ok && outcome.ok) outcome = result
    }
    return outcome
  }

  return (
    <div className="mt-3 border-0 border-t border-solid border-f1-border-inverse pt-2 text-sm">
      <div className="flex flex-wrap items-center gap-2">
        {blocked.length === 0 && (
          <TooltipButton
            disabled={busy}
            onClick={() => void run("pull", pullAll)}
          >
            {pending === "pull" || runningOnServer ? "Pulling…" : "Pull latest"}
          </TooltipButton>
        )}
        {blocked.map((repo) => (
          <TooltipButton
            key={repo.id}
            disabled={busy}
            onClick={() =>
              void run(repo.id, () => runRepoAction(repo.id, "stash-pull"))
            }
          >
            {pending === repo.id
              ? `Stashing ${repo.id}…`
              : `Stash & pull ${repo.id}`}
          </TooltipButton>
        ))}
        <TooltipButton
          disabled={busy}
          onClick={() => void run("rescan", rescan)}
        >
          Rescan
        </TooltipButton>
        <span className="opacity-70">
          {rescanning
            ? "Rescanning…"
            : pending !== null || runningOnServer
              ? "Running git…"
              : `Scanned at ${new Date(generatedAt).toLocaleTimeString()}`}
        </span>
      </div>
      {blocked.length > 0 && (
        <p className="m-0 mt-2 opacity-70">
          Stashing keeps your work — restore it with{" "}
          <code className="font-mono">git stash pop</code>. It also switches to
          the default branch before pulling.
        </p>
      )}
      {failure && <p className="m-0 mt-2 opacity-80">{failure}</p>}
      {Object.entries(stashes ?? {}).map(([id, stash]) => (
        // Someone's uncommitted work is sitting in a stash because of a click
        // here. Say where it is, and how to get back to it, until Storybook
        // restarts.
        <p key={id} className="m-0 mt-2 opacity-80">
          Stashed your <code className="font-mono">{id}</code> changes
          {stash.branch ? (
            <>
              {" "}
              from <code className="font-mono">{stash.branch}</code>
            </>
          ) : null}
          . Restore with{" "}
          <code className="font-mono">
            git -C {id} {stash.branch ? `checkout ${stash.branch} && ` : ""}git
            stash pop
          </code>
          .
        </p>
      ))}
      {results.length > 0 && (
        <ul className="m-0 mt-2 list-none space-y-1 p-0 opacity-70">
          {results.map(([id, status]) => (
            <li key={id}>
              <code className="font-mono">{id}</code>: {status?.message}
            </li>
          ))}
        </ul>
      )}
    </div>
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
  rescanning,
}: {
  result: UsageResult
  names: string[]
  rescanning: boolean
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
          <MissingRepos missing={product.missing} actions={result.actions} />
        </>
      ) : (
        <>
          <p className="m-0">
            No local factorial checkout — whether the product uses this is
            unknown.
          </p>
          <MissingRepos
            missing={result.product.missing ?? []}
            actions={result.actions}
          />
        </>
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
      {product && (
        <RefreshActions
          repos={product.repos}
          actions={result.actions}
          stashes={result.stashes}
          generatedAt={result.generatedAt}
          rescanning={rescanning}
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
  const { data: result, rescanning } = useProductUsage()

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

  const { product, productFiles, internal } = resolveUsage(result, lookup)

  // Without a factorial checkout there is no product answer at all — claiming
  // "not used" would be a confident lie about a component the product may
  // depend on hundreds of times.
  const label = !product
    ? "Where is this used?"
    : productFiles > 0
      ? "Where is this used in the product?"
      : // "Not used" would be misleading for the building blocks other
        // components are made of, so say which of the two it is.
        internal.length > 0
        ? "Only used internally in F0"
        : "Not used in the product"

  // A clone runs for minutes, and the tooltip is only open while you hover.
  // Put it on the tag itself so starting one doesn't look like nothing
  // happened.
  const running = Object.entries(result.actions ?? {}).find(
    ([, status]) => status.state === "running"
  )

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <span
          className={`sb-unstyled inline-flex align-middle ${running ? "cursor-progress" : "cursor-help"}`}
        >
          <F0TagRaw
            text={
              running
                ? `${running[1].action === "clone" ? "Cloning" : "Pulling"} ${running[0]}…`
                : label
            }
            icon={LayersFront}
          />
        </span>
      </TooltipTrigger>
      <TooltipContent
        side="bottom"
        align="start"
        className="w-max max-w-[min(90vw,42rem)] overflow-hidden !p-0"
      >
        <UsageDetails result={result} names={lookup} rescanning={rescanning} />
      </TooltipContent>
    </Tooltip>
  )
}
