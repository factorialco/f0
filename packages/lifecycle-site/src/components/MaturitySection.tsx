import { maturityLevels, type MaturityId } from "../data/maturity"

const colorMap: Record<MaturityId, { bg: string; text: string; border: string }> = {
  experimental: { bg: "bg-experimental/10", text: "text-experimental", border: "border-experimental/40" },
  stable: { bg: "bg-stable/10", text: "text-stable", border: "border-stable/40" },
  deprecated: { bg: "bg-deprecated/10", text: "text-deprecated", border: "border-deprecated/40" },
}

export function MaturitySection() {
  return (
    <div className="space-y-6">
      <div className="grid gap-6 md:grid-cols-3">
        {maturityLevels.map((m) => {
          const c = colorMap[m.id]
          return (
            <article
              key={m.id}
              className={`flex flex-col rounded-2xl border ${c.border} bg-surface p-6 shadow-sm`}
            >
              <span
                className={`inline-flex w-fit items-center rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider ${c.bg} ${c.text}`}
              >
                {m.label}
              </span>
              <p className="mt-4 text-sm font-medium">{m.promise}</p>

              <h4 className="mt-5 text-xs font-semibold uppercase tracking-wider text-muted">
                Rules
              </h4>
              <ul className="mt-2 space-y-1.5 text-sm">
                {m.rules.map((r) => (
                  <li key={r} className="flex gap-2">
                    <span className="mt-0.5 text-muted">·</span>
                    <span>{r}</span>
                  </li>
                ))}
              </ul>

              <dl className="mt-5 space-y-2 border-t border-white/10 pt-4 text-xs">
                <div className="flex justify-between gap-3">
                  <dt className="text-muted">Storybook tag</dt>
                  <dd className="font-mono">{m.storybookTag}</dd>
                </div>
                {m.jsdocMarker && (
                  <div className="flex justify-between gap-3">
                    <dt className="text-muted">JSDoc</dt>
                    <dd className="text-right font-mono text-[10px]">{m.jsdocMarker}</dd>
                  </div>
                )}
                <div className="text-muted">{m.examples}</div>
              </dl>
            </article>
          )
        })}
      </div>

      <aside className="rounded-2xl border border-white/10 bg-paper p-5 text-sm">
        <p className="font-semibold">How to tag a component</p>
        <p className="mt-1 text-muted">
          Every story must declare exactly one maturity tag. There is no default.
        </p>
        <pre className="mt-3 overflow-x-auto rounded-lg bg-white/[0.04] p-3 font-mono text-xs">
{`const meta: Meta<typeof F0Example> = {
  title: "Components/F0Example",
  component: F0Example,
  tags: ["stable"], // experimental | stable | deprecated
}`}
        </pre>
      </aside>
    </div>
  )
}
