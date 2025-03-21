import { motion, Transition, Variants } from "framer-motion"
import * as React from "react"

const heartTransition: Transition = {
  duration: 0.6,
  ease: [0.175, 0.885, 0.32, 1.275],
}

const heartVariants: Variants = {
  normal: {
    scale: 1,
  },
  animate: {
    scale: [1, 0.9, 1.1, 1],
  },
}

interface HeartProps extends React.SVGProps<SVGSVGElement> {
  animate?: "normal" | "animate"
}

const HeartAnimated = React.forwardRef<SVGSVGElement, HeartProps>(
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
          d="M15.0625 6C12.875 6 12 8 12 8C12 8 11.125 6 8.9375 6C7.1875 6 5 7.71429 5 10.2857C5 14.5714 12 19 12 19C12 19 19 14.5714 19 10.2857C19 8.14286 17.25 6 15.0625 6Z"
          initial="normal"
          vectorEffect="non-scaling-stroke"
          variants={heartVariants}
          transition={heartTransition}
          animate={animate}
        />
      </svg>
    )
  }
)

HeartAnimated.displayName = "HeartAnimated"

export default HeartAnimated
