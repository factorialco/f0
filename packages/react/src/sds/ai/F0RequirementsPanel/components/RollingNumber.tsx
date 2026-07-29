import { AnimatePresence, motion } from "motion/react"
import { useRef } from "react"

import { useReducedMotion } from "@/lib/a11y"

interface RollingNumberProps {
  value: number
}

/**
 * Single number that rolls vertically when it changes — up when it increases,
 * down when it decreases (odometer feel). tabular-nums keeps the width stable so
 * surrounding text never shifts. Falls back to a plain number under reduced motion.
 */
export const RollingNumber = ({ value }: RollingNumberProps) => {
  const shouldReduceMotion = useReducedMotion()
  const prev = useRef(value)
  const direction = value >= prev.current ? 1 : -1
  prev.current = value

  if (shouldReduceMotion) {
    return <span className="tabular-nums">{value}</span>
  }

  return (
    <span className="relative inline-flex h-5 items-center overflow-hidden tabular-nums">
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.span
          key={value}
          // Increasing: new value enters from below and the old one exits up.
          // Decreasing: reversed.
          initial={{ y: `${direction * 100}%`, opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          exit={{ y: `${direction * -100}%`, opacity: 0 }}
          transition={{ type: "spring", duration: 0.3, bounce: 0 }}
          className="inline-block"
        >
          {value}
        </motion.span>
      </AnimatePresence>
    </span>
  )
}
