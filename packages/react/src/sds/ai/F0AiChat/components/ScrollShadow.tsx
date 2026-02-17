import { motion } from "motion/react"

import { cn } from "@/lib/utils"

export const ScrollShadow = ({ position }: { position: "top" | "bottom" }) => (
  <motion.div
    transition={{ duration: 0.2, ease: "easeOut" }}
    className={cn(
      "pointer-events-none absolute inset-x-0 z-10  after:absolute after:inset-x-0 after:top-0 after:h-px after:bg-f1-background-inverse-secondary after:opacity-[0.04] after:content-['']",
      position === "top"
        ? [
            "top-0",
            "h-6",
            "bg-gradient-to-b from-f1-background dark:from-f1-background-secondary to-transparent",
            "after:top-0",
          ]
        : [
            "bottom-0",
            "h-6",
            "bg-gradient-to-t from-f1-background dark:from-f1-background-secondary to-transparent",
            "after:bottom-0",
          ]
    )}
  />
)
