import { motion, Transition, Variants } from "motion/react"
import * as React from "react"

const defaultTransition: Transition = {
  duration: 0.6,
  ease: [0.175, 0.885, 0.32, 1.275],
}

const personFrontVariants: Variants = {
  normal: {
    x: 0,
    scale: 1,
    originX: "50%",
    originY: "50%",
  },
  animate: {
    x: [0, 3, 0],
    scale: [1, 1.1, 1],
  },
}

const personBackVariants: Variants = {
  normal: {
    x: 0,
    opacity: 1,
  },
  animate: {
    x: [0, -3, 0],
    opacity: [1, 0, 1],
  },
}

interface PeopleProps extends React.SVGProps<SVGSVGElement> {
  animate?: "normal" | "animate"
}

const PeopleAnimated = React.forwardRef<SVGSVGElement, PeopleProps>(
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
        <motion.g
          initial="normal"
          variants={personFrontVariants}
          animate={animate}
          transition={defaultTransition}
        >
          <circle cx="9" cy="9" r="4" vectorEffect="non-scaling-stroke" />
          <path
            d="M4.00003 18C4.00003 18 5.50003 16 9.00003 16C12.5 16 14 18 14 18"
            vectorEffect="non-scaling-stroke"
          />
        </motion.g>
        <motion.g
          initial="normal"
          variants={personBackVariants}
          animate={animate}
          transition={defaultTransition}
        >
          <path
            d="M16 13C17.6569 13 19 11.6569 19 10C19 8.34315 17.6569 7 16 7"
            vectorEffect="non-scaling-stroke"
          />
          <path d="M17 16C19 16 19.75 17 19.75 17" vectorEffect="non-scaling-stroke" />
        </motion.g>
      </svg>
    )
  }
)

PeopleAnimated.displayName = "PeopleAnimated"

export default PeopleAnimated
