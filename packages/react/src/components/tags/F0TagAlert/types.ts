export const levels = ["info", "warning", "critical", "positive"] as const

export type Level = (typeof levels)[number]

export type Props<Text extends string = string> = {
  text: Text extends "" ? never : Text
  level: Level
}
