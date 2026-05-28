import type React from "react"

export function Hero() {
  return (
    <header className="pt-20">
      <p className="text-sm font-medium uppercase tracking-widest text-accent">
        F0 — Factorial's design system
      </p>
      <h1 className="mt-3 text-5xl font-semibold tracking-tight md:text-6xl">
        Build, contribute and grow F0
      </h1>
      <p className="mt-5 max-w-2xl text-lg text-muted">
        F0 is the set of components, patterns and rules every Factorial product
        shares. This site is your onboarding: what F0 is, how it works, and how
        you interact with it depending on your role.
      </p>
      <p className="mt-2 max-w-2xl text-sm text-muted">
        New here? Start with{" "}
        <a href="#what-is-f0" className="font-medium text-accent hover:underline">
          What is F0
        </a>
        . Already onboarded? Jump to{" "}
        <a href="#profile" className="font-medium text-accent hover:underline">
          I am a…
        </a>{" "}
        or{" "}
        <a href="#intent" className="font-medium text-accent hover:underline">
          I want to…
        </a>
        .
      </p>
      <nav className="mt-8 flex flex-wrap gap-3">
        <NavLink href="#what-is-f0" primary>
          What is F0
        </NavLink>
        <NavLink href="#where-f0-lives">Where F0 lives</NavLink>
        <NavLink href="#profile">I am a…</NavLink>
        <NavLink href="#intent">I want to…</NavLink>
        <NavLink href="#flow">How a component is born</NavLink>
        <NavLink href="#maturity">Maturity</NavLink>
        <NavLink href="#definition-of-done">Definition of Done</NavLink>
        <NavLink href="#rules">Rules</NavLink>
        <NavLink href="#troubleshooting">Troubleshooting</NavLink>
      </nav>
    </header>
  )
}

function NavLink({
  href,
  children,
  primary,
}: {
  href: string
  children: React.ReactNode
  primary?: boolean
}) {
  if (primary) {
    return (
      <a
        href={href}
        className="rounded-full border border-accent bg-accent px-4 py-2 text-sm font-semibold text-white transition hover:bg-accent/90"
      >
        {children}
      </a>
    )
  }
  return (
    <a
      href={href}
      className="rounded-full border border-ink/10 bg-white px-4 py-2 text-sm font-medium text-ink transition hover:border-ink/30 hover:bg-ink hover:text-white"
    >
      {children}
    </a>
  )
}
