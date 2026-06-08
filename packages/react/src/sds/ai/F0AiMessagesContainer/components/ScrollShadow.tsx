import { motion } from "motion/react"

import { cn } from "@/lib/utils"

export const ScrollShadow = ({ position }: { position: "top" | "bottom" }) => (
  <motion.div
    transition={{ duration: 0.2, ease: "easeOut" }}
    className={cn(
      // Inset 1px on both sides so the gradient and the thin `::after` rule
      // never sit flush against the chat panel's left/right edge. Matters in
      // canvas mode: the chat has `border-l-0` there and the ResizeHandle
      // (1px, transparent) lives right at that edge; without this inset the
      // opaque top of the gradient paints next to the handle and visually
      // swallows it. In non-canvas mode the 1px sits inside the chat's own
      // border so the change is imperceptible.
      "pointer-events-none absolute inset-x-px z-[5] after:absolute after:inset-x-0 after:top-0 after:h-px after:bg-f1-background-inverse-secondary after:opacity-[0.04] after:content-['']",
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
