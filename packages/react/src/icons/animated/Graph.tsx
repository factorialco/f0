import { motion, Transition, Variants } from "motion/react"
import * as React from "react"

const graphTransition: Transition = {
  duration: 0.5,
  ease: [0, 0, 0.2, 1],
  delay: 0.2,
}

const graphVariants: Variants = {
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

const arrowVariants: Variants = {
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

const axisTransition: Transition = {
  duration: 0.5,
  ease: [0.175, 0.885, 0.32, 1.275],
}

const axisVariants: Variants = {
  normal: {
    scale: 1,
  },
  animate: {
    scale: [1, 0.9, 1],
  },
}

interface GraphProps extends React.SVGProps<SVGSVGElement> {
  animate?: "normal" | "animate"
}

const GraphAnimated = React.forwardRef<SVGSVGElement, GraphProps>(
  ({ animate = "normal", ...props }, ref) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <motion.path
          d="M4 6V15C4 16.6569 5.34315 18 7 18H20"
          initial="normal"
          variants={axisVariants}
          transition={axisTransition}
          animate={animate}
        />
        <motion.path
          d="M8 14L12 10L15 13L20 8"
          initial="normal"
          variants={graphVariants}
          transition={graphTransition}
          animate={animate}
        />
        <motion.path
          d="M17 8H20V11"
          initial="normal"
          variants={arrowVariants}
          transition={arrowTransition}
          animate={animate}
        />
      </svg>
    )
  }
)

GraphAnimated.displayName = "GraphAnimated"

export default GraphAnimated
