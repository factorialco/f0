import { motion } from "motion/react"

import { F0Icon } from "@/components/F0Icon"
import { ChevronDown } from "@/icons/app"
import { cn } from "@/lib/utils"

export type ChevronToggleProps = {
  open?: boolean
  className?: string
  onClick?: () => void
  disabled?: boolean
  size?: "xs" | "sm"
}

export const ChevronToggle = ({
  open,
  className,
  onClick,
  disabled,
  size = "xs",
}: ChevronToggleProps) => {
  return (
    <motion.div
      animate={{ rotate: open ? 180 : 0 }}
      transition={{ duration: 0.2 }}
      className={cn(
        "flex h-3 w-3 shrink-0 items-center justify-center",
        disabled && "cursor-not-allowed opacity-50",

        className
      )}
      onClick={onClick}
    >
      <F0Icon icon={ChevronDown} size={size} role="button" />
    </motion.div>
  )
}
