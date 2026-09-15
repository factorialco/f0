import { OneDataCollection } from "@factorialco/f0-react/dist/experimental"
import { BarGraph, Files } from "@factorialco/f0-react/icons/app"

import { artifacts, type Artifact } from "./artifactsData"
import { useArtifactsSource } from "./useArtifactsSource"

/**
 * Artifacts — what One produced for you, as CARDS with the two presets
 * Angel specified (Documents / Analytics). The card visualization takes
 * no custom renderer, so an analytics artifact shows its properties and
 * its summary rather than a chart preview; a real preview would need
 * either an image per artifact or a bespoke grid outside
 * `OneDataCollection`.
 */
const cardProperties = [
  {
    label: "Created by",
    render: (item: Artifact) => ({
      type: "avatarList" as const,
      value: { type: "person" as const, avatarList: [item.createdBy], max: 1 },
    }),
  },
  {
    label: "From",
    render: (item: Artifact) => item.source,
  },
  {
    label: "Last update",
    render: (item: Artifact) => item.lastUpdate,
  },
]

export function ArtifactsScreen() {
  const source = useArtifactsSource()
  return (
    <div className="flex w-full flex-col gap-2 px-7 pb-6">
      <p className="text-base font-semibold text-f1-foreground">
        {artifacts.length} artifacts
      </p>
      <OneDataCollection
        source={source}
        onSelectItems={() => {}}
        visualizations={[
          {
            type: "card",
            options: {
              title: (item: Artifact) => item.name,
              description: (item: Artifact) => item.summary,
              avatar: (item: Artifact) => ({
                type: "icon" as const,
                icon: item.kind === "analytics" ? BarGraph : Files,
              }),
              cardProperties,
            },
          },
        ]}
      />
    </div>
  )
}
