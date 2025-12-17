/**
 * Sync status cell type for displaying sync status indicators with icons and tooltips.
 * Used for showing the synchronization state of items in data collections.
 */
import { F0Icon, IconType } from "@/components/F0Icon"
import {
  ArrowCycle,
  CheckCircle,
  CrossedCircle,
  DottedCircle,
  PartiallyCompleted,
  Warning,
} from "@/icons/app"
import { TooltipWrapper } from "@/lib/tooltip-wrapper"
import { cn } from "@/lib/utils"
import { motion } from "motion/react"
import { tableDisplayClassNames } from "../../const"
import { ValueDisplayRendererContext } from "../../types"

export type SyncStatusType =
  | "synced"
  | "syncing"
  | "pending"
  | "partiallySynced"
  | "outdated"
  | "failed"

type SyncStatusConfig = {
  icon: IconType
  colorClass: string
  animated?: boolean
}

const syncStatusConfig: Record<SyncStatusType, SyncStatusConfig> = {
  synced: {
    icon: CheckCircle,
    colorClass: "text-f1-icon-positive",
  },
  syncing: {
    icon: ArrowCycle,
    colorClass: "text-f1-icon-info",
    animated: true,
  },
  pending: {
    icon: DottedCircle,
    colorClass: "text-f1-icon-secondary",
    animated: true,
  },
  partiallySynced: {
    icon: PartiallyCompleted,
    colorClass: "text-f1-icon-warning",
  },
  outdated: {
    icon: Warning,
    colorClass: "text-f1-icon-warning",
  },
  failed: {
    icon: CrossedCircle,
    colorClass: "text-f1-icon-critical",
  },
}

interface SyncStatusValue {
  status: SyncStatusType
  tooltip?: string
}
export type SyncStatusCellValue = SyncStatusValue

export const SyncStatusCell = (
  args: SyncStatusCellValue,
  context: ValueDisplayRendererContext
) => {
  const config = syncStatusConfig[args.status]
  const defaultTooltip = context.i18n.syncStatus[args.status]
  const tooltipText = args.tooltip ?? defaultTooltip

  const icon = <F0Icon icon={config.icon} aria-label={tooltipText} />

  return (
    <div
      className={cn(
        "flex items-center",
        context.visualization === "table" && tableDisplayClassNames.avatar
      )}
      data-cell-type="sync-status"
    >
      <TooltipWrapper tooltip={tooltipText}>
        <div className={cn("inline-flex items-center", config.colorClass)}>
          {config.animated ? (
            <motion.div
              className="flex items-center justify-center"
              style={{ originX: 0.5, originY: 0.5 }}
              animate={{ rotate: 360 }}
              transition={{
                duration: 2,
                ease: "linear",
                repeat: Infinity,
              }}
            >
              {icon}
            </motion.div>
          ) : (
            icon
          )}
        </div>
      </TooltipWrapper>
    </div>
  )
}
