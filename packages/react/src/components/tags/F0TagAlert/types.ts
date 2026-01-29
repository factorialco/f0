import type { TestableProps } from "@/global.types"

export const levels = ["info", "warning", "critical", "positive"] as const

export type Level = (typeof levels)[number]

export type Props<Text extends string = string> = TestableProps & {
  text: Text extends "" ? never : Text
  level: Level
}
