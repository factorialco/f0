import { useEffect, useState } from "react"
import type React from "react"
import { Hero } from "./components/Hero"
import { WhatIsF0 } from "./components/WhatIsF0"
import { WhereF0Lives } from "./components/WhereF0Lives"
import { ProfileSelector } from "./components/ProfileSelector"
import { IntentSelector } from "./components/IntentSelector"
import { FlowDiagram } from "./components/FlowDiagram"
import { PhaseSection } from "./components/PhaseSection"
import { MaturitySection } from "./components/MaturitySection"
import { DefinitionOfDone } from "./components/DefinitionOfDone"
import { Troubleshooting } from "./components/Troubleshooting"
import { RuleTabs } from "./components/RuleTabs"
import { Footer } from "./components/Footer"
import { RulesPage } from "./components/RulesPage"
import type { ProfileId } from "./data/profiles"

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
  return <Home />
}

function Home() {
  const [selectedProfile, setSelectedProfile] = useState<ProfileId | null>(null)

  return (
    <main className="mx-auto max-w-6xl px-6 pb-24">
      <Hero />

      {/* Onboarding — for anyone arriving for the first time */}
      <Section
        id="what-is-f0"
        title="What is F0"
        subtitle="30 seconds: what F0 is, what it solves, what it isn't."
      >
        <WhatIsF0 />
      </Section>

      <Section
        id="where-f0-lives"
        title="Where F0 lives"
        subtitle="A map of the tools you'll use to interact with F0."
      >
        <WhereF0Lives />
      </Section>

      {/* Self-orientation — find your path */}
      <Section
        id="profile"
        title="I am a…"
        subtitle="Pick your role to see the responsibilities, tools and skills relevant to you."
      >
        <ProfileSelector selected={selectedProfile} onSelect={setSelectedProfile} />
      </Section>

      <Section
        id="intent"
        title="I want to…"
        subtitle="Pick what you want to do. We'll show the steps end to end."
      >
        <IntentSelector />
      </Section>

      {/* The system — how F0 works */}
      <Section
        id="maturity"
        title="The 3 maturity levels"
        subtitle="The promise F0 makes to consumers at each stage of a component's life."
      >
        <MaturitySection />
      </Section>

      <Section
        id="flow"
        title="How a component is born"
        subtitle="From idea to stable, told as the journey it actually is."
      >
        <FlowDiagram />
      </Section>

      <Section
        id="phases"
        title="The phases in detail"
        subtitle="Each phase has a goal, gates and an owner."
      >
        <PhaseSection />
      </Section>

      <Section
        id="definition-of-done"
        title="Definition of Done"
        subtitle="The technical contract — source of truth for the promotion skill, the design review and (eventually) the dashboard."
      >
        <DefinitionOfDone />
      </Section>

      {/* Reference — for when you need the technical map */}
      <Section
        id="rules"
        title="The rules"
        subtitle="Golden rules, lint, PR conventions and what to expect from Foundations."
      >
        <RuleTabs />
      </Section>

      <Section
        id="troubleshooting"
        title="Troubleshooting"
        subtitle="If you're stuck — and how to ask for help."
      >
        <Troubleshooting />
      </Section>

      <Footer />
    </main>
  )
}

function Section({
  id,
  title,
  subtitle,
  children,
}: {
  id: string
  title: string
  subtitle: string
  children: React.ReactNode
}) {
  return (
    <section id={id} className="section-anchor mt-24">
      <header className="mb-8">
        <h2 className="text-3xl font-semibold tracking-tight">{title}</h2>
        <p className="mt-2 text-muted">{subtitle}</p>
      </header>
      {children}
    </section>
  )
}
