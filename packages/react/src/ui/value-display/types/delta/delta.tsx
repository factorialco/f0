/**
 * Delta cell type for displaying single delta values.
 * Used for displaying changes or differences in data collections.
 */
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

export const DeltaCell = (args: DeltaCellValue) => {
  const { deltaStatus: status } = args
  const icon = iconMap[status]

  return (
    <div className="flex items-center gap-1 pt-0.5">
      <F0Icon
        icon={icon}
        color={status == "positive" ? "positive" : "critical"}
      />
      <span className="text-f1-foreground font-normal">{args.label}</span>
    </div>
  )
}
