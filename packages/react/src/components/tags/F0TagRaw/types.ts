import { IconType } from "@/components/F0Icon"
import type { TestableProps } from "@/global.types"

export type F0TagRawProps = TestableProps & {
  /**
   * The label to display in the tag or used for accessible text
   */
  text: string
  /**
   * Additional accessible text to display in the tag
   */
  additionalAccessibleText?: string
} & (
  | {
      icon: IconType
      onlyIcon: true
    }
  | {
      icon?: IconType
      onlyIcon?: boolean
    }
)
