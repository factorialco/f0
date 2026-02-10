import {
  EntityId,
  EntitySelectEntity,
  EntitySelectNamedGroup,
} from "@/experimental/Forms/EntitySelect/types"

import { BaseQuestionPropsForOtherQuestionComponents } from "../BaseQuestion"
import { BaseQuestionOnChangeParams } from "../types"

export type EntitySelectQuestionOnChangeParams = BaseQuestionOnChangeParams &
  (
    | {
        type: "entity-select"
        value?: EntityId | null
      }
    | {
        type: "entity-select-multi"
        value?: EntityId[] | null
      }
  )

export type EntitySelectQuestionProps =
  BaseQuestionPropsForOtherQuestionComponents & {
    entities?: EntitySelectEntity[]
    groups?: EntitySelectNamedGroup[]
    onLoadEntities?: () => void
    entityLabel?: string
    searchPlaceholder?: string
  } & (
      | {
          type: "entity-select"
          value?: EntityId | null
        }
      | {
          type: "entity-select-multi"
          value?: EntityId[] | null
        }
    )
