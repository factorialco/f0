export type Level = "info" | "warning" | "critical"

export type Props<Text extends string = string> = {
  text: Text extends "" ? never : Text
  level: Level
}
