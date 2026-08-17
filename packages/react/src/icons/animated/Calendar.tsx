import { motion, Transition, Variants } from "motion/react"
import * as React from "react"

const pageTransition: Transition = {
  duration: 0.7,
  ease: [0.175, 0.885, 0.32, 1.275],
}

const pageVariants: Variants = {
  normal: {
    originX: "50%",
    originY: "80%",
    rotate: 0,
  },
  animate: {
    originX: ["50%", "80%", "50%", "20%", "50%"],
    rotate: [0, 15, 0, -15, 0],
  },
}

interface CalendarProps extends React.SVGProps<SVGSVGElement> {
  animate?: "normal" | "animate"
}

const CalendarAnimated = React.forwardRef<SVGSVGElement, CalendarProps>(
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
          variants={pageVariants}
          animate={animate}
          initial="normal"
          transition={pageTransition}
        >
          <g>
            <path d="M5 10H19" />
            <path d="M5 8C5 6.34315 6.34315 5 8 5H16C17.6569 5 19 6.34315 19 8V10H5V8Z" />

            <path d="M9 3V7" />
            <path d="M15 3V7" />
          </g>
          <path d="M5 10H19V16C19 17.6569 17.6569 19 16 19H8C6.34315 19 5 17.6569 5 16V10Z" />
          <path d="M5 10H19V16C19 17.6569 17.6569 19 16 19H8C6.34315 19 5 17.6569 5 16V10Z" />
        </motion.g>
      </svg>
    )
  }
)

CalendarAnimated.displayName = "CalendarAnimated"

export default CalendarAnimated
