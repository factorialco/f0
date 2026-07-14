const sources = [
  { label: "Definition of Done", path: "packages/react/docs/definition-of-done.mdx" },
  { label: "Components Maturity", path: "packages/react/docs/components-maturity.mdx" },
  { label: "Design Review", path: "packages/react/docs/design-review.mdx" },
  { label: "Contributions", path: "packages/react/docs/contributions.mdx" },
  { label: "Release & Versioning", path: "packages/react/docs/development/release-and-versioning.mdx" },
]

const skills = [
  "f0-component-contribution",
  "f0-component-promotion",
  "f0-experimental-component-migration",
  "f0-code-review",
  "f0-pr",
  "f0-component-patterns",
  "f0-storybook-stories",
  "f0-storybook-testing",
  "f0-unit-testing",
  "f0-ai-config-hygiene",
]

const REPO = "https://github.com/factorialco/f0/blob/main/"

export function Footer() {
  return (
    <footer className="mt-24 border-t border-white/10 pt-10">
      <div className="grid gap-10 md:grid-cols-2">
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-muted">
            Source of truth
          </h3>
          <ul className="mt-3 space-y-2 text-sm">
            {sources.map((s) => (
              <li key={s.path}>
                <a
                  href={`${REPO}${s.path}`}
                  target="_blank"
                  rel="noreferrer"
                  className="text-accent hover:underline"
                >
                  {s.label}
                </a>
                <span className="ml-2 font-mono text-xs text-muted">{s.path}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-muted">
            Companion skills
          </h3>
          <ul className="mt-3 grid grid-cols-1 gap-1 text-sm sm:grid-cols-2">
            {skills.map((s) => (
              <li key={s} className="font-mono text-xs">
                {s}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <p className="mt-10 text-xs text-muted">
        F0 Foundations · Lifecycle site is a view over the specs. To change
        a policy, edit the corresponding{" "}
        <span className="font-mono">.mdx</span> and then update{" "}
        <span className="font-mono">src/data/*.ts</span>.
      </p>
    </footer>
  )
}
