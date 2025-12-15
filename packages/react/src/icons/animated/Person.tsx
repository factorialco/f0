import { motion, Transition, Variants } from "motion/react"
import * as React from "react"

const headTransition: Transition = {
  duration: 0.6,
  ease: [0.42, 0, 0.58, 1],
}

const headVariants: Variants = {
  normal: {
    rotate: 0,
    originX: "50%",
    originY: "60%",
  },
  animate: {
    rotate: [0, -28, 28, 0],
  },
}

interface PersonProps extends React.SVGProps<SVGSVGElement> {
  animate?: "normal" | "animate"
}

const PersonAnimated = React.forwardRef<SVGSVGElement, PersonProps>(
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
        <motion.circle
          cx="12"
          cy="9"
          r="4"
          initial="normal"
          variants={headVariants}
          transition={headTransition}
          animate={animate}
          vectorEffect="non-scaling-stroke"
        />
        <path d="M7 18C7 18 8.5 16 12 16C15.5 16 17 18 17 18" vectorEffect="non-scaling-stroke" />
      </svg>
    )
  }
)

PersonAnimated.displayName = "PersonAnimated"

export default PersonAnimated
