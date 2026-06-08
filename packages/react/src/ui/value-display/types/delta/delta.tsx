/**
 * Delta cell type for displaying single delta values.
 * Used for displaying changes or differences in data collections.
 */
import { cn } from "@/lib/utils"
import { ArrowDown, ArrowUp } from "@/icons/app"
import { F0Icon, type IconType } from "@/components/F0Icon"

type DeltaStatus = "positive" | "negative"

interface DeltaValue {
  label: string
  deltaStatus: DeltaStatus
}
export type DeltaCellValue = DeltaValue

const iconMap: Record<DeltaStatus, IconType> = {
  positive: ArrowUp,
  negative: ArrowDown,
}

const colorMap: Record<DeltaStatus, string> = {
  positive: "text-f1-foreground-positive",
  negative: "text-f1-foreground-critical",
}

export const DeltaCell = (args: DeltaCellValue) => {
  const icon = iconMap[args.deltaStatus]
  const colorClass = colorMap[args.deltaStatus]

  return (
    <div className={cn("flex items-center gap-1", colorClass)}>
      {icon ? <F0Icon icon={icon} /> : null}
      <span>{args.label}</span>
    </div>
  )
}
