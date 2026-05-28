// "What is F0" — 30-second answer for anyone who has just heard about F0.
// Source of truth for the underlying claims:
//   packages/react/docs/Introduction.mdx
//   packages/react/docs/contributions.mdx
//   packages/react/AGENTS.md

export function WhatIsF0() {
  return (
    <div className="space-y-8">
      <p className="max-w-3xl text-lg leading-relaxed">
        <strong>F0 is Factorial's design system.</strong> It's a shared library
        of React components, patterns and visual rules that every Factorial
        product uses to look and behave consistently — so teams don't reinvent
        the same UI in different places.
      </p>

      <div className="grid gap-4 md:grid-cols-3">
        <Card title="What F0 is">
          <ul className="space-y-2 text-sm">
            <Item>A shared component library (`@factorialco/f0-react`).</Item>
            <Item>A set of design rules and tokens (colors, spacing, typography).</Item>
            <Item>A contribution lifecycle anyone in Factorial can use.</Item>
            <Item>Owned by the Foundations team, built with the whole company.</Item>
          </ul>
        </Card>

        <Card title="What F0 solves">
          <ul className="space-y-2 text-sm">
            <Item>One source of truth for UI — no more 5 different buttons.</Item>
            <Item>Accessibility built-in, so every product gets it.</Item>
            <Item>Faster shipping — compose features, don't rebuild primitives.</Item>
            <Item>A predictable look across the whole Factorial product.</Item>
          </ul>
        </Card>

        <Card title="What F0 is NOT">
          <ul className="space-y-2 text-sm">
            <Item>Not a product-specific UI kit. If only your product uses it, it doesn't belong here.</Item>
            <Item>Not a sandbox to iterate styles. Once stable, components have a contract.</Item>
            <Item>Not a Figma library. The repo is the source of truth.</Item>
            <Item>Not owned by Foundations alone — anyone can propose and contribute.</Item>
          </ul>
        </Card>
      </div>

      <div className="rounded-2xl border border-ink/10 bg-white p-6 shadow-sm">
        <h3 className="text-xs font-semibold uppercase tracking-wider text-muted">
          Why a lifecycle?
        </h3>
        <p className="mt-2 max-w-3xl text-sm leading-relaxed">
          F0 grows intentionally. Every component goes through the same path —
          from idea, to design, to experimental, to real-world usage, to stable
          — so consumers know what to expect and contributors know how to add
          new pieces. This site walks you through that path.
        </p>
      </div>
    </div>
  )
}

function Card({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <article className="rounded-2xl border border-ink/10 bg-white p-6 shadow-sm">
      <h3 className="text-base font-semibold">{title}</h3>
      <div className="mt-4">{children}</div>
    </article>
  )
}

function Item({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex gap-2">
      <span className="mt-0.5 text-accent">→</span>
      <span>{children}</span>
    </li>
  )
}
