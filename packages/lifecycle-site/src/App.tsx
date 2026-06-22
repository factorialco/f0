import { useEffect, useState, type ReactNode } from "react"
import { WhatIsF0 } from "./components/WhatIsF0"
import { WhereF0Lives } from "./components/WhereF0Lives"
import { MaturitySection } from "./components/MaturitySection"
import { FlowDiagram } from "./components/FlowDiagram"
import { PhaseSection } from "./components/PhaseSection"
import { DefinitionOfDone } from "./components/DefinitionOfDone"
import { PrototypeSection } from "./components/PrototypeSection"
import { ContributeSection } from "./components/ContributeSection"
import { Troubleshooting } from "./components/Troubleshooting"
import { Footer } from "./components/Footer"
import { HeroMatrix } from "./components/HeroMatrix"
import { RulesPage } from "./components/RulesPage"

type SectionDef = {
  id: string
  title: string
  blurb: string
  render: () => ReactNode
}

type Part = {
  label: string
  tagline: string
  sections: SectionDef[]
}

const PARTS: Part[] = [
  {
    label: "Understand F0",
    tagline: "How F0 works as a system. Read these if you're new.",
    sections: [
      {
        id: "what-is-f0",
        title: "What is F0",
        blurb: "What F0 is, what it solves, and what it isn't.",
        render: () => <WhatIsF0 />,
      },
      {
        id: "where-f0-lives",
        title: "Where F0 lives",
        blurb: "The tools F0 lives in — Storybook, Claude, the repo — and when to use each.",
        render: () => <WhereF0Lives />,
      },
      {
        id: "maturity",
        title: "The 3 maturity levels",
        blurb: "Experimental, stable, deprecated — the promise F0 makes at each stage.",
        render: () => <MaturitySection />,
      },
      {
        id: "flow",
        title: "How a component is born",
        blurb: "The journey from idea to stable, and eventually to deprecated.",
        render: () => (
          <div className="space-y-8">
            <FlowDiagram />
            <PhaseSection />
          </div>
        ),
      },
      {
        id: "definition-of-done",
        title: "Definition of Done",
        blurb: "The bar a component must clear to earn each maturity level.",
        render: () => <DefinitionOfDone />,
      },
    ],
  },
  {
    label: "What can I do in F0",
    tagline: "The jobs you come here for. Pick what you need to do.",
    sections: [
      {
        id: "prototype",
        title: "Prototype a screen",
        blurb: "Build a screen out of what already exists. You use the design system.",
        render: () => <PrototypeSection />,
      },
      {
        id: "contribute",
        title: "Contribute to F0",
        blurb: "Add or change something in the design system itself.",
        render: () => <ContributeSection />,
      },
      {
        id: "troubleshooting",
        title: "Stuck? Start here",
        blurb: "The questions people hit most, and where to go for help.",
        render: () => <Troubleshooting />,
      },
    ],
  },
]

const SECTION_INDEX = new Map(
  PARTS.flatMap((p) => p.sections.map((s) => [s.id, { section: s, part: p }] as const))
)

function useHashRoute(): string {
  const [hash, setHash] = useState<string>(() =>
    typeof window === "undefined" ? "" : window.location.hash
  )
  useEffect(() => {
    const onChange = () => setHash(window.location.hash)
    window.addEventListener("hashchange", onChange)
    return () => window.removeEventListener("hashchange", onChange)
  }, [])
  return hash
}

export function App() {
  const hash = useHashRoute()

  if (hash.startsWith("#/rules")) return <RulesPage />

  const sectionId = hash.startsWith("#/s/") ? hash.slice("#/s/".length) : ""
  const entry = SECTION_INDEX.get(sectionId)
  if (entry) return <SectionView section={entry.section} partLabel={entry.part.label} />

  return <Overview />
}

function Wordmark({ className = "" }: { className?: string }) {
  return (
    <a
      href="#/"
      aria-label="F0 home"
      className={`inline-flex items-baseline text-2xl font-bold lowercase tracking-tighter text-ink ${className}`}
    >
      f0
    </a>
  )
}

function Overview() {
  return (
    <>
      <header className="relative min-h-[55vh] overflow-hidden border-b border-white/10">
        <HeroMatrix />
        <div className="relative mx-auto max-w-4xl px-6 pb-16 pt-10">
          <Wordmark />
          <p className="mt-10 text-sm font-medium uppercase tracking-widest text-accent">
            F0 — Factorial's design system
          </p>
          <h1 className="mt-3 text-5xl font-semibold tracking-tight md:text-6xl">
            Get started with F0
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-muted">
            Everything you need to understand and work with F0 — the components,
            patterns and rules every Factorial product shares. Pick a topic below;
            you'll get just that, nothing else to wade through.
          </p>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-6 pb-24">
        <div className="mt-16 space-y-14">
        {PARTS.map((part) => (
          <section key={part.label}>
            <h2 className="text-2xl font-bold tracking-tight">{part.label}</h2>
            <p className="mt-1 text-muted">{part.tagline}</p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {part.sections.map((s) => (
                <a
                  key={s.id}
                  href={`#/s/${s.id}`}
                  className="group flex flex-col rounded-2xl border border-white/10 bg-surface p-6 shadow-sm transition hover:border-accent/50 hover:shadow-md"
                >
                  <h3 className="text-lg font-semibold tracking-tight">{s.title}</h3>
                  <p className="mt-2 flex-1 text-sm text-muted">{s.blurb}</p>
                  <span className="mt-4 text-sm font-semibold text-accent group-hover:underline">
                    Open →
                  </span>
                </a>
              ))}
            </div>
          </section>
        ))}
      </div>

        <Footer />
      </main>
    </>
  )
}

function SectionView({
  section,
  partLabel,
}: {
  section: SectionDef
  partLabel: string
}) {
  // Land at the top when opening a topic.
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [section.id])

  return (
    <main className="mx-auto max-w-5xl px-6 pb-24">
      <header className="pt-8">
        <Wordmark className="mb-8" />
        <a
          href="#/"
          className="inline-flex items-center gap-1 text-sm text-muted hover:text-ink"
        >
          ← All topics
        </a>
        <p className="mt-6 text-xs font-semibold uppercase tracking-widest text-accent">
          {partLabel}
        </p>
        <h1 className="mt-2 text-4xl font-semibold tracking-tight">{section.title}</h1>
        <p className="mt-3 max-w-2xl text-lg text-muted">{section.blurb}</p>
      </header>

      <div className="mt-12">{section.render()}</div>

      <div className="mt-16 border-t border-white/10 pt-8">
        <a
          href="#/"
          className="inline-flex items-center gap-1 text-sm font-medium text-accent hover:underline"
        >
          ← Back to all topics
        </a>
      </div>
    </main>
  )
}
