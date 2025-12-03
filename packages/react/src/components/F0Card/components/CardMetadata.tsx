import { F0Icon } from "@/components/F0Icon"
import { valueDisplayRenderers } from "@/components/value-display"
import React from "react"
import { CardMetadata as CardMetadataType } from "../types"

export const cardPropertyRenderers = {
  text: valueDisplayRenderers.text,
  number: valueDisplayRenderers.number,
  date: valueDisplayRenderers.date,
  amount: valueDisplayRenderers.amount,
  person: valueDisplayRenderers.person,
  company: valueDisplayRenderers.company,
  team: valueDisplayRenderers.team,
  status: valueDisplayRenderers.status,
  tag: valueDisplayRenderers.tag,
  avatarList: valueDisplayRenderers.avatarList,
  tagList: valueDisplayRenderers.tagList,
  alertTag: valueDisplayRenderers.alertTag,
  dotTag: valueDisplayRenderers.dotTag,
  file: valueDisplayRenderers.file,
  folder: valueDisplayRenderers.folder,
  progressBar: valueDisplayRenderers.progressBar,
} as const

export type CardPropertyType = keyof typeof cardPropertyRenderers

interface CardMetadataProps {
  metadata: CardMetadataType
}

export function CardMetadata({ metadata }: CardMetadataProps) {
  const { type, value } = metadata.property

  const renderer = cardPropertyRenderers[type as CardPropertyType]

  if (!renderer) {
    return (
      <div className="flex h-8 items-center gap-1.5">
        {"icon" in metadata && (
          <F0Icon icon={metadata.icon} color="default" size="md" />
        )}
        <span>Unsupported property type: {type}</span>
      </div>
    )
  }

  const typedRenderer = renderer as (
    arg: Parameters<(typeof cardPropertyRenderers)[CardPropertyType]>[0],
    meta?: { visualization: "card" }
  ) => React.ReactNode

  return (
    <div className="flex h-8 items-center gap-1.5">
      {"icon" in metadata && (
        <F0Icon
          icon={metadata.icon}
          color="default"
          size="md"
          tooltip={metadata.tooltip}
        />
      )}
      {typedRenderer(value, { visualization: "card" })}
    </div>
  )
}
