import { ComponentRecord } from "../types"
import { MaturityChip } from "./MaturityChip"
import { FileActions } from "./FileActions"
import {
  getCriteria,
  getGapToTarget,
  getIssues,
  suggestMaturity,
} from "../criteria"

const GITHUB_BASE =
  "https://github.com/factorialco/factorial-one/blob/main/"

function SourceBadge({ source }: { source: { label: string; path: string; section?: string } }) {
  return (
    <a
      href={GITHUB_BASE + source.path}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center rounded bg-blue-50 px-1.5 py-0.5 font-mono text-[10px] text-blue-700 ring-1 ring-blue-200 hover:bg-blue-100"
      title={source.path + (source.section ? ` § ${source.section}` : "")}
    >
      {source.label}
      {source.section && <span className="ml-1 text-blue-500">§ {source.section}</span>}
    </a>
  )
}

export function ComponentDetail({ c }: { c: ComponentRecord }) {
  const criteria = getCriteria(c)
  const issues = getIssues(c)
  const suggestion = suggestMaturity(c)
  const passed = criteria.filter((cr) => cr.passed).length
  const failed = criteria.length - passed
  const blockingFailed = criteria.filter(
    (cr) => !cr.passed && cr.severityIfFailed === "blocking"
  ).length

  // What is missing to reach stable? Only shown when not already stable
  // (and not internal/sds — those have their own lifecycle).
  const showPathToStable =
    c.declaredMaturity !== "stable" &&
    c.declaredMaturity !== "internal" &&
    c.declaredMaturity !== "sds" &&
    c.folder !== "ui"
  const gapToStable = showPathToStable ? getGapToTarget(c, "stable") : []

  return (
    <div className="flex h-full flex-col gap-4 overflow-y-auto p-6">
      <header>
        <div className="flex items-center gap-3">
          <h2 className="text-xl font-semibold">{c.name}</h2>
          <MaturityChip maturity={c.declaredMaturity} />
          <span className="font-mono text-xs text-muted">
            folder: {c.folder}/
          </span>
        </div>
        {c.storyTitle && (
          <p className="mt-1 font-mono text-xs text-muted">
            Storybook title: {c.storyTitle}
          </p>
        )}
        <p className="mt-1 text-xs text-muted">
          {passed}/{criteria.length} criteria passed
          {blockingFailed > 0 && (
            <span className="ml-2 rounded bg-red-100 px-1.5 py-0.5 font-mono text-red-700">
              {blockingFailed} blocking
            </span>
          )}
        </p>
      </header>

      <FileActions c={c} />

      <section className="rounded-lg border border-line bg-amber-50/40 p-4">
        <div className="flex items-baseline gap-2">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-muted">
            Suggestion
          </h3>
          <MaturityChip maturity={suggestion.maturity} small />
          <span className="text-xs text-muted">
            confidence: {suggestion.confidence}
          </span>
        </div>
        <p className="mt-1 text-sm">{suggestion.reason}</p>
      </section>

      {showPathToStable && (
        <section className="rounded-lg border border-emerald-200 bg-emerald-50/50 p-4">
          <div className="flex items-baseline gap-2">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-emerald-800">
              Path to stable
            </h3>
            {gapToStable.length === 0 ? (
              <span className="rounded bg-emerald-200 px-1.5 py-0.5 font-mono text-[11px] text-emerald-900">
                ready
              </span>
            ) : (
              <span className="rounded bg-amber-100 px-1.5 py-0.5 font-mono text-[11px] text-amber-900">
                {gapToStable.length} blocker
                {gapToStable.length === 1 ? "" : "s"}
              </span>
            )}
          </div>
          {gapToStable.length === 0 ? (
            <p className="mt-2 text-sm text-emerald-800">
              This component meets every blocking criterion required for{" "}
              <strong>stable</strong>. It can be promoted (update the meta tag
              from <code className="font-mono">"experimental"</code> to{" "}
              <code className="font-mono">"stable"</code> and move it under{" "}
              <code className="font-mono">src/components/</code>).
            </p>
          ) : (
            <>
              <p className="mt-1 text-xs text-emerald-900">
                These blocking criteria from the DoD + f0 skills must pass
                before the component can be promoted to{" "}
                <strong>stable</strong>:
              </p>
              <ul className="mt-2 space-y-1.5">
                {gapToStable.map((cr) => (
                  <li
                    key={cr.id}
                    className="rounded border-l-4 border-emerald-400 bg-white px-3 py-2 text-sm"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <span>{cr.label}</span>
                      <SourceBadge source={cr.source} />
                    </div>
                    {cr.detail && (
                      <p className="mt-1 font-mono text-[11px] text-muted">
                        {cr.detail}
                      </p>
                    )}
                  </li>
                ))}
              </ul>
            </>
          )}
        </section>
      )}

      {issues.length > 0 && (
        <section>
          <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide text-muted">
            Blocking issues ({issues.length})
          </h3>
          <ul className="space-y-1.5">
            {issues.map((i) => (
              <li
                key={i.id}
                className="rounded border-l-4 border-red-400 bg-red-50 px-3 py-2 text-sm"
              >
                <div className="flex items-start justify-between gap-2">
                  <span>{i.label}</span>
                  <SourceBadge source={i.source} />
                </div>
                {i.detail && (
                  <p className="mt-1 font-mono text-[11px] text-muted">
                    {i.detail}
                  </p>
                )}
              </li>
            ))}
          </ul>
        </section>
      )}

      <section>
        <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide text-muted">
          Criteria checklist · scoped to {c.declaredMaturity !== "unknown" ? c.declaredMaturity : c.inferredMaturity}
        </h3>
        <ul className="space-y-1.5">
          {criteria.map((cr) => (
            <li key={cr.id} className="text-sm">
              <div className="flex items-start gap-2">
                <span
                  className={`mt-0.5 inline-flex h-4 w-4 shrink-0 items-center justify-center rounded text-[10px] font-bold ${
                    cr.passed
                      ? "bg-emerald-500 text-white"
                      : cr.severityIfFailed === "blocking"
                        ? "bg-red-500 text-white"
                        : "bg-amber-400 text-white"
                  }`}
                >
                  {cr.passed ? "✓" : cr.severityIfFailed === "blocking" ? "✗" : "!"}
                </span>
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-2">
                    <span>
                      {cr.label}{" "}
                      <span className="text-xs text-muted">
                        [{cr.weight}]
                      </span>
                    </span>
                    <SourceBadge source={cr.source} />
                  </div>
                  {cr.detail && (
                    <p className="mt-0.5 font-mono text-[11px] text-muted">
                      {cr.detail}
                    </p>
                  )}
                </div>
              </div>
            </li>
          ))}
        </ul>
        {failed === 0 && (
          <p className="mt-2 text-sm text-emerald-700">
            ✓ All applicable criteria passing.
          </p>
        )}
      </section>

      <section className="grid grid-cols-2 gap-x-6 gap-y-3 text-sm">
        <div>
          <h4 className="text-xs font-semibold uppercase text-muted">Tags</h4>
          <p className="font-mono text-xs">
            {c.storyTags.length > 0 ? c.storyTags.join(", ") : "—"}
          </p>
        </div>
        <div>
          <h4 className="text-xs font-semibold uppercase text-muted">Wrappers</h4>
          <p className="font-mono text-xs">
            experimentalComponent(): {c.hasExperimentalWrapper ? "yes" : "no"}
            <br />
            Component(): {c.hasComponentMeta ? "yes" : "no"}
          </p>
        </div>
        <div>
          <h4 className="text-xs font-semibold uppercase text-muted">Story signals</h4>
          <p className="font-mono text-xs">
            satisfies Meta: {c.story.usesSatisfiesMeta ? "yes" : "no"}
            <br />
            as Meta: {c.story.usesAsMeta ? "yes" : "no"}
            <br />
            Snapshot story: {c.story.hasSnapshotStory ? "yes" : "no"}
            <br />
            withSnapshot(): {c.story.usesWithSnapshot ? "yes" : "no"}
            <br />
            !autodocs: {c.story.optedOutOfAutodocs ? "yes" : "no"}
            <br />
            play(): {c.story.hasPlayFn ? "yes" : "no"}
          </p>
        </div>
        <div>
          <h4 className="text-xs font-semibold uppercase text-muted">Impl signals</h4>
          <p className="font-mono text-xs">
            forwardRef: {c.impl.usesForwardRef ? "yes" : "no"} · displayName: {c.impl.setsDisplayName ? "yes" : "no"}
            <br />
            uses any: {c.impl.usesAny ? "yes" : "no"}
            <br />
            default export: {c.impl.hasDefaultExport ? "yes" : "no"}
            <br />
            direct Radix: {c.impl.importsRadixDirectly ? "yes" : "no"}
            <br />
            @/ui/ imports: {c.impl.importsFromUi ? "yes" : "no"}
          </p>
        </div>
        <div>
          <h4 className="text-xs font-semibold uppercase text-muted">JSDoc</h4>
          <p className="font-mono text-xs">
            @deprecated: {c.jsdoc.deprecated ?? "—"}
            <br />
            @removeIn: {c.jsdoc.removeIn ?? "—"}
            <br />
            @migration: {c.jsdoc.migration ?? "—"}
          </p>
        </div>
        <div>
          <h4 className="text-xs font-semibold uppercase text-muted">Tests</h4>
          <p className="font-mono text-xs">
            {c.testPaths.length} file(s)
            {c.testPaths.length > 0 && (
              <>
                <br />
                {c.testPaths.map((t) => (
                  <span key={t} className="block truncate" title={t}>
                    {t}
                  </span>
                ))}
              </>
            )}
          </p>
        </div>
      </section>

      <section className="rounded border border-line bg-gray-50 p-3 text-xs">
        <h4 className="mb-1 font-semibold uppercase text-muted">Files</h4>
        <p className="font-mono break-all">story: {c.storyPath}</p>
        {c.indexPath && (
          <p className="font-mono break-all">index: {c.indexPath}</p>
        )}
        {c.implPath && (
          <p className="font-mono break-all">impl: {c.implPath}</p>
        )}
        {c.mdxPath && <p className="font-mono break-all">mdx: {c.mdxPath}</p>}
      </section>
    </div>
  )
}
