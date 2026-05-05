import {
  F0Box,
  F0Heading,
  F0Text,
  OneEmptyState,
  StandardLayout,
} from "@factorialco/f0-react"
import {
  ApplicationFrame,
  OneDataCollection,
  Page,
} from "@factorialco/f0-react/dist/experimental"
import { useEffect } from "react"

import { allPrototypes } from "@/prototypes/registry"
import { CatalogSidebar } from "@/shell/CatalogSidebar"
import { emojiForModule } from "@/shell/modules"

import { prototypeCardProperties } from "./prototypeCardProperties"
import { usePrototypeCatalogSource } from "./usePrototypeCatalogSource"

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

function CatalogList() {
  const source = usePrototypeCatalogSource()
  return (
    <OneDataCollection
      source={source}
      visualizations={[
        {
          type: "card",
          options: {
            cardProperties: prototypeCardProperties,
            title: (m) => m.title,
            description: (m) => m.description,
            avatar: (m) => ({
              type: "emoji",
              emoji: emojiForModule[m.module],
            }),
          },
        },
      ]}
    />
  )
}

export function CatalogHome() {
  useEffect(() => {
    document.title = "f0compose · Factorial prototypes"
  }, [])

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

          {allPrototypes.length === 0 ? <GettingStarted /> : <CatalogList />}
        </StandardLayout>
      </Page>
    </ApplicationFrame>
  )
}
