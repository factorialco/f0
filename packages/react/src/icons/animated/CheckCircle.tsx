import { motion, Transition, Variants } from "motion/react"
import * as React from "react"

const checkTransition: Transition = {
  duration: 0.5,
  ease: [0, 0, 0.2, 1],
  delay: 0.2,
}

const checkVariants: Variants = {
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

const circleTransition: Transition = {
  duration: 0.5,
  ease: [0.175, 0.885, 0.32, 1.275],
}

const circleVariants: Variants = {
  normal: {
    scale: 1,
  },
  animate: {
    scale: [1, 0.9, 1],
  },
}

interface CheckCircleAnimatedProps extends React.SVGProps<SVGSVGElement> {
  animate?: "normal" | "animate"
}

const CheckCircleAnimated = React.forwardRef<SVGSVGElement, CheckCircleAnimatedProps>(
  ({ animate = "normal", ...props }, ref) => {
    return (
      <svg ref={ref} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <motion.circle
          cx="12"
          cy="12"
          r="8"
          fill="currentColor"
          initial="normal"
          variants={circleVariants}
          transition={circleTransition}
          animate={animate}
          vectorEffect="non-scaling-stroke"
        />
        <motion.path
          d="M16.52 9.39C16.7354 9.10281 16.6772 8.69539 16.39 8.48C16.1028 8.26461 15.6954 8.32281 15.48 8.61L11.4297 14.0104L8.95963 11.5404C8.70578 11.2865 8.29423 11.2865 8.04039 11.5404C7.78655 11.7942 7.78655 12.2058 8.04039 12.4596L11.0404 15.4596C11.1736 15.5929 11.3581 15.6617 11.5461 15.6484C11.734 15.635 11.9069 15.5407 12.02 15.39L16.52 9.39Z"
          fill="white"
          fillRule="evenodd"
          clipRule="evenodd"
          initial="normal"
          variants={checkVariants}
          transition={checkTransition}
          animate={animate}
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    )
  }
)

CheckCircleAnimated.displayName = "CheckCircleAnimated"

export default CheckCircleAnimated
