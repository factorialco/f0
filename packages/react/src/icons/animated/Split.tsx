import { motion, Transition, Variants } from "motion/react"
import * as React from "react"

const lineTransition: Transition = {
  duration: 0.5,
  ease: [0, 0, 0.2, 1],
  delay: 0.2,
}

const lineVariants: Variants = {
  normal: {
    pathLength: 1,
    opacity: 1,
    transition: { delay: 0 },
  },
  animate: {
    pathLength: [0, 1],
    opacity: [0, 1],
  },
}

const arrowTransition: Transition = {
  duration: 0.5,
  ease: [0, 0, 0.2, 1],
  delay: 0.4,
}

interface SplitProps extends React.SVGProps<SVGSVGElement> {
  animate?: "normal" | "animate"
}

const SplitAnimated = React.forwardRef<SVGSVGElement, SplitProps>(
  ({ animate = "normal", ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        strokeWidth="1.3"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <motion.path
          d="M5 12H9L10.6187 9.41C11.167 8.53286 12.1284 8 13.1627 8H19"
          variants={lineVariants}
          animate={animate}
          initial="normal"
          transition={lineTransition}
        />
        <motion.path
          d="M5 12H9L10.6187 14.59C11.167 15.4671 12.1284 16 13.1627 16H19"
          variants={lineVariants}
          animate={animate}
          initial="normal"
          transition={lineTransition}
        />
        <motion.path
          d="M17 14L19 16L17 18"
          variants={lineVariants}
          animate={animate}
          initial="normal"
          transition={arrowTransition}
        />
        <motion.path
          d="M17 10L19 8L17 6"
          variants={lineVariants}
          animate={animate}
          initial="normal"
          transition={arrowTransition}
        />
      </svg>
    )
  }
)

SplitAnimated.displayName = "SplitAnimated"

export default SplitAnimated
