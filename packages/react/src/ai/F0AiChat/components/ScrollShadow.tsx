import { motion } from "motion/react"

import { cn } from "@/lib/utils"

export const ScrollShadow = ({ position }: { position: "top" | "bottom" }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 0.5 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.2, ease: "easeOut" }}
    className={cn(
      "pointer-events-none absolute inset-x-0 z-10 h-3 after:absolute after:inset-x-0 after:h-px after:bg-f1-background-inverse after:opacity-[0.04] after:content-['']",
      position === "top"
        ? [
            "top-0",
            "bg-gradient-to-b from-f1-background-secondary to-transparent",
            "after:top-0",
          ]
        : [
            "bottom-0",
            "bg-gradient-to-t from-f1-background-secondary to-transparent",
            "after:bottom-0",
          ]
    )}
  />
)
