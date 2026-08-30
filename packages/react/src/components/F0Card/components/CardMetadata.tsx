import type React from "react"

import { F0Icon } from "@/components/F0Icon"
import { Tooltip } from "@/experimental/Overlays/Tooltip"
import { AlertTagCell } from "@/ui/value-display/types/alertTag"
import { AmountCell } from "@/ui/value-display/types/amount"
import { AvatarListCell } from "@/ui/value-display/types/avatarList"
import { CompanyCell } from "@/ui/value-display/types/company"
import { DateCell } from "@/ui/value-display/types/date"
import { DotTagCell } from "@/ui/value-display/types/dotTag"
import { FileCell } from "@/ui/value-display/types/file"
import { FolderCell } from "@/ui/value-display/types/folder"
import { NumberCell } from "@/ui/value-display/types/number"
import { PersonCell } from "@/ui/value-display/types/person"
import { ProgressBarCell } from "@/ui/value-display/types/progressBar"
import { StatusCell } from "@/ui/value-display/types/status"
import { TagCell } from "@/ui/value-display/types/tag"
import { TagListCell } from "@/ui/value-display/types/tagList"
import { TeamCell } from "@/ui/value-display/types/team"
import { TextCell } from "@/ui/value-display/types/text"

import type { CardMetadata as CardMetadataType } from "../types"

export const cardPropertyRenderers = {
  text: TextCell,
  number: NumberCell,
  date: DateCell,
  amount: AmountCell,
  person: PersonCell,
  company: CompanyCell,
  team: TeamCell,
  status: StatusCell,
  tag: TagCell,
  avatarList: AvatarListCell,
  tagList: TagListCell,
  alertTag: AlertTagCell,
  dotTag: DotTagCell,
  file: FileCell,
  folder: FolderCell,
  progressBar: ProgressBarCell,
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
        {"icon" in metadata && metadata.icon && (
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
      {"icon" in metadata && metadata.icon && (
        <div className="pointer-events-auto flex items-center">
          <Tooltip label={metadata.property.label}>
            <F0Icon icon={metadata.icon} color="default" size="md" />
          </Tooltip>
        </div>
      )}
      {typedRenderer(value, { visualization: "card" })}
    </div>
  )
}
