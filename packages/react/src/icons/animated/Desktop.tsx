import { motion, Variants } from "motion/react"
import * as React from "react"

const containerVariants: Variants = {
  normal: {
    opacity: 0,
    transition: { duration: 0.2 },
  },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const lineVariants: Variants = {
  normal: {
    pathLength: 0,
    opacity: 0,
  },
  animate: {
    pathLength: [0, 1, 1, 0],
    opacity: [0, 1, 1, 1, 0],
    transition: {
      duration: 0.5,
      ease: [0, 0, 0.2, 1],
    },
  },
}

interface DesktopProps extends React.SVGProps<SVGSVGElement> {
  animate?: "normal" | "animate"
}

const DesktopAnimated = React.forwardRef<SVGSVGElement, DesktopProps>(
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
        <path
          d="M6 4H18C19.6569 4 21 5.34315 21 7V13C21 14.6569 19.6569 16 18 16H6C4.34315 16 3 14.6569 3 13V7C3 5.34315 4.34315 4 6 4Z"
          vectorEffect="non-scaling-stroke"
        />
        <path d="M7 20H17" vectorEffect="non-scaling-stroke" />
        <path d="M9 20L9 16" vectorEffect="non-scaling-stroke" />
        <path d="M15 20L15 16" vectorEffect="non-scaling-stroke" />
        <motion.g variants={containerVariants} animate={animate} initial="normal">
          <motion.path d="M6 7.5H14" variants={lineVariants} vectorEffect="non-scaling-stroke" />
          <motion.path d="M6 10H17" variants={lineVariants} vectorEffect="non-scaling-stroke" />
          <motion.path d="M6 12.5H11" variants={lineVariants} vectorEffect="non-scaling-stroke" />
        </motion.g>
      </svg>
    )
  }
)

DesktopAnimated.displayName = "DesktopAnimated"

export default DesktopAnimated
