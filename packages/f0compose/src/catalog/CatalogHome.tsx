import {
  F0Box,
  F0Heading,
  F0Text,
  OneEmptyState,
  StandardLayout,
} from "@factorialco/f0-react"
import {
  ApplicationFrame,
  Page,
} from "@factorialco/f0-react/dist/experimental"
import { useEffect } from "react"
import { allPrototypes } from "@/prototypes/registry"
import type { Category } from "@/prototypes/types"
import { CatalogSidebar } from "@/shell/CatalogSidebar"
import { categories } from "./categories"
import { PrototypeCard } from "./CategoryCard"

function CategorySection({
  category,
  prototypes,
}: {
  category: (typeof categories)[number]
  prototypes: typeof allPrototypes
}) {
  if (prototypes.length === 0) return null
  return (
    <F0Box display="flex" flexDirection="column" gap="md">
      <F0Box display="flex" flexDirection="row" gap="sm" alignItems="baseline">
        <F0Heading
          content={`${category.emoji} ${category.label}`}
          variant="heading"
          as="h2"
        />
        <F0Text content={category.description} variant="description" />
      </F0Box>
      <F0Box
        display="grid"
        columns="1"
        gap="md"
        sm={{ columns: "2" }}
        lg={{ columns: "3" }}
      >
        {prototypes.map((meta) => (
          <PrototypeCard key={meta.slug} meta={meta} />
        ))}
      </F0Box>
    </F0Box>
  )
}

function GettingStarted() {
  return (
    <F0Box
      padding="xl"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <OneEmptyState
        emoji="✨"
        title="No prototypes yet"
        description="Open opencode or claude in this folder and ask the AI to design a Factorial screen — it will activate the f0-prototype skill and create one."
      />
    </F0Box>
  )
}

export function CatalogHome() {
  useEffect(() => {
    document.title = "f0compose · Factorial prototypes"
  }, [])

  const grouped = new Map<Category, typeof allPrototypes>()
  for (const meta of allPrototypes) {
    const list = grouped.get(meta.category) ?? []
    list.push(meta)
    grouped.set(meta.category, list)
  }

  return (
    <ApplicationFrame sidebar={<CatalogSidebar />}>
      <Page>
        <StandardLayout>
          <F0Box display="flex" flexDirection="column" gap="xs">
            <F0Heading
              content="What do you want to prototype today?"
              variant="heading-large"
              as="h1"
            />
            <F0Text
              content="Browse the prototypes below or chat with the AI to create a new one."
              variant="description"
            />
          </F0Box>

          {allPrototypes.length === 0 ? (
            <GettingStarted />
          ) : (
            categories.map((cat) => (
              <CategorySection
                key={cat.id}
                category={cat}
                prototypes={grouped.get(cat.id) ?? []}
              />
            ))
          )}
        </StandardLayout>
      </Page>
    </ApplicationFrame>
  )
}
