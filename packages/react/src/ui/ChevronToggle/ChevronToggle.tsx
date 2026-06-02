import { motion } from "motion/react"

import { F0Icon } from "@/components/F0Icon"
import { ChevronDown } from "@/icons/app"
import { useReducedMotion } from "@/lib/a11y"
import { cn } from "@/lib/utils"

export type ChevronToggleProps = {
  open?: boolean
  className?: string
  onClick?: () => void
  disabled?: boolean
  size?: "xs" | "sm"
  closedRotation?: number
  openRotation?: number
}

export const ChevronToggle = ({
  open,
  className,
  onClick,
  disabled,
  size = "xs",
  closedRotation = 0,
  openRotation = 180,
}: ChevronToggleProps) => {
  const shouldReduceMotion = useReducedMotion()
  const rotation = open ? openRotation : closedRotation
  return (
    <motion.div
      initial={{ rotate: rotation }}
      animate={{ rotate: rotation }}
      transition={{ duration: shouldReduceMotion ? 0 : 0.2 }}
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
