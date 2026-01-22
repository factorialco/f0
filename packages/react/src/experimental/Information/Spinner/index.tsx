import { cva, type VariantProps } from "cva"
import { motion } from "motion/react"

import { cn } from "../../../lib/utils"

const spinnerVariants = cva({
  base: "flex select-none items-center justify-center text-f1-foreground-secondary",
  variants: {
    size: {
      small: "h-4 w-4 [&_circle]:stroke-[4]",
      medium: "h-8 w-8 [&_circle]:stroke-[2.6]",
      large: "h-12 w-12 [&_circle]:stroke-2",
    },
  },
  defaultVariants: {
    size: "medium",
  },
})

interface SpinnerProps extends VariantProps<typeof spinnerVariants> {
  className?: string
}

function Spinner({ size, className }: SpinnerProps) {
  return (
    <div
      className={cn(spinnerVariants({ size, className }))}
      aria-live="polite"
      aria-busy={true}
    >
      <svg
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-full"
      >
        <circle
          cx="16"
          cy="16"
          r="12"
          className="stroke-f1-background-secondary"
        />
        <motion.circle
          cx="16"
          cy="16"
          r="12"
          stroke="currentColor"
          strokeLinecap="round"
          strokeDasharray="1 80"
          className="opacity-50"
          initial={{
            rotate: 0,
            originX: "50%",
            originY: "50%",
          }}
          animate={{
            rotate: [0, 450, 1080],
            strokeDasharray: ["1 80", "60 40", "1 80"],
          }}
          transition={{
            duration: 2,
            ease: "linear",
            repeat: Infinity,
          }}
        />
      </svg>
    </div>
  )
}

export { Spinner }
