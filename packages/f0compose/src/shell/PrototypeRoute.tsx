import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { NotFound } from "@/lib/notFound"
import { prototypeRegistry } from "@/prototypes/registry"
import { FactorialShell } from "./FactorialShell"

/**
 * Loads a prototype from the registry and renders it inside the canonical
 * Factorial shell. The prototype itself is responsible for rendering
 * `<Page header={<PageHeader ... />}>...</Page>` so it can supply the
 * module name, breadcrumbs, actions etc. that match the screen.
 */
export function PrototypeRoute() {
  const { slug } = useParams<{ slug: string }>()
  const entry = slug ? prototypeRegistry[slug] : undefined

  useEffect(() => {
    if (entry) {
      document.title = `${entry.meta.title} · f0compose`
    } else {
      document.title = "Prototype not found · f0compose"
    }
  }, [entry])

  if (!entry) {
    return (
      <FactorialShell activeModule={null}>
        <NotFound message={`Slug "${slug}" doesn't match any prototype.`} />
      </FactorialShell>
    )
  }

  const Component = entry.component
  return (
    <FactorialShell activeModule={entry.meta.module}>
      <Component />
    </FactorialShell>
  )
}
