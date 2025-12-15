import { motion, Transition, Variants } from "motion/react"
import * as React from "react"

const personTransition: Transition = {
  duration: 0.8,
  ease: [0.42, 0, 0.58, 1],
}

const personVariants: Variants = {
  normal: {
    opacity: 1,
    scale: 1,
  },
  animate: {
    opacity: [1, 0, 0, 1],
    scale: [1, 0.8, 0.8, 1],
  },
}

const magnifierTransition: Transition = {
  duration: 0.5,
  ease: [0.23, 1, 0.32, 1],
  delay: 0.25,
}

const magnifierVariants: Variants = {
  normal: {
    rotate: 0,
    originX: "80%",
    originY: "80%",
    transition: { delay: 0 },
  },
  animate: {
    rotate: [0, 14, -14, 0],
  },
}

interface SearchPersonProps extends React.SVGProps<SVGSVGElement> {
  animate?: "normal" | "animate"
}

const SearchPersonAnimated = React.forwardRef<SVGSVGElement, SearchPersonProps>(
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
          variants={personVariants}
          transition={personTransition}
          animate={animate}
        >
          <path
            d="M6.5 16V16C8.60581 12.7243 13.3942 12.7243 15.5 16V16"
            vectorEffect="non-scaling-stroke"
          />
          <circle cx="11" cy="10.5" r="2.5" vectorEffect="non-scaling-stroke" />
        </motion.g>
        <motion.g
          initial="normal"
          variants={magnifierVariants}
          transition={magnifierTransition}
          animate={animate}
        >
          <rect x="4" y="4" width="14" height="14" rx="7" vectorEffect="non-scaling-stroke" />
          <path d="M16 16L19 19" vectorEffect="non-scaling-stroke" />
        </motion.g>
      </svg>
    )
  }
)

SearchPersonAnimated.displayName = "SearchPersonAnimated"

export default SearchPersonAnimated
