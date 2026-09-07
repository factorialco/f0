/**
 * Delta cell type for displaying single delta values.
 * Used for displaying changes or differences in data collections.
 */
import { ArrowDown, ArrowUp } from "@/icons/app"
import { F0Icon } from "@/components/F0Icon"

type DeltaStatus = "positive" | "negative" | "neutral"

interface DeltaValue {
  label: string
  deltaStatus: DeltaStatus
  /**
   * The arrow to draw. Defaults to the one the status implies; pass it when
   * the sign of the change and how it reads disagree — a falling number that
   * is good news is a down arrow in positive green.
   */
  arrow?: "up" | "down" | "none"
}
export type DeltaCellValue = DeltaValue

const arrowByStatus = {
  positive: "up",
  negative: "down",
  neutral: "none",
} as const

const iconByArrow = {
  up: ArrowUp,
  down: ArrowDown,
  none: undefined,
} as const

const colorByStatus = {
  positive: "positive",
  negative: "critical",
  neutral: "secondary",
} as const

export const DeltaCell = (args: DeltaCellValue) => {
  const { deltaStatus: status } = args
  const icon = iconByArrow[args.arrow ?? arrowByStatus[status]]

  return (
    <div className="flex items-center gap-1 pt-0.5">
      {icon && <F0Icon icon={icon} color={colorByStatus[status]} />}
      <span className="text-f1-foreground font-normal">{args.label}</span>
    </div>
  )
}
