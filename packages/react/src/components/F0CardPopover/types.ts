import type { UseControllableProps } from "use-controllable"
import { ReactNode } from "react"
import { CardMetadata } from "../F0Card/types"
import {
  CardPrimaryAction,
  CardSecondaryAction,
} from "../F0Card/components/CardActions"

export type F0CardPopoverProps = UseControllableProps<boolean, "open"> & {
  /**
   * The trigger element that will open the card popover
   */
  children?: ReactNode
  metadata?: CardMetadata[]
  primaryAction?: CardPrimaryAction
  secondaryActions?: CardSecondaryAction[]
}
