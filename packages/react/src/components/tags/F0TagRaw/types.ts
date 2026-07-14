import { IconType } from "@/components/F0Icon"

export type F0TagRawProps = {
  /**
   * The label to display in the tag or used for accessible text
   */
  text: string
  /**
   * Additional accessible text to display in the tag
   */
  additionalAccessibleText?: string
  /**
   * Info text to display an i icon and a tooltip next to the tag
   */
  info?: string
  /**
   * Extra classes merged onto the tag (e.g. to give it a background).
   */
  className?: string
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
