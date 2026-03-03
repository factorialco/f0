export const levels = ["info", "warning", "critical", "positive"] as const

export type Level = (typeof levels)[number]

export type Props<Text extends string = string> = {
  text: Text extends "" ? never : Text
  level: Level
  /**
   * Info text to display an i icon and a tooltip next to the tag
   */
  info?: string
}
