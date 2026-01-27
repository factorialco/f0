import { motion } from "motion/react"
import { FC } from "react"

import { F0Icon } from "@/components/F0Icon"
import { ChevronDown } from "@/icons/app"
import { useI18n } from "@/lib/providers/i18n"
import { cn } from "@/lib/utils"

const IconMotion = motion.create(F0Icon)

interface OverflowIndicatorProps {
  totalItemsCount: number
  isOpen: boolean
  count: number
}

const OverflowIndicator: FC<OverflowIndicatorProps> = ({
  count,
  totalItemsCount,
  isOpen,
}) => {
  const i18n = useI18n()

  return (
    <div
      className={cn(
        "flex items-center gap-1 rounded py-1.5 pl-3 pr-2 text-base font-medium text-f1-foreground transition-colors hover:bg-f1-background-secondary",
        isOpen && "bg-f1-background-secondary"
      )}
    >
      <span>
        {count < totalItemsCount && "+"}
        {count}
      </span>
      <span>{i18n.actions.more}</span>
      <div className="flex h-5 w-5 items-center justify-center after:absolute after:h-4 after:w-4 after:rounded-xs after:bg-f1-background-secondary after:content-['']">
        <IconMotion
          icon={ChevronDown}
          initial={{ rotate: 0 }}
          animate={{ rotate: isOpen ? 180 : 0 }}
          size="xs"
        />
      </div>
    </div>
  )
}

OverflowIndicator.displayName = "OverflowIndicator"

export { OverflowIndicator }
