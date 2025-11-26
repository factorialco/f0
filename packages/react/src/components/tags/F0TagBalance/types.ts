export type Status = "positive" | "neutral" | "negative"

export interface Props {
  text: string
  status: Status
}
