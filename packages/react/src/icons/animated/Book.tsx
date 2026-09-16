import { motion, Transition, Variants } from "motion/react"
import * as React from "react"

const pageTransition: Transition = {
  duration: 0.7,
  ease: [0.175, 0.885, 0.32, 1.275],
}

const pageLeftVariants: Variants = {
  normal: {
    skewY: 0,
    y: 0,
    scaleX: 1,
    originX: "50%",
    originY: "50%",
  },
  animate: {
    skewY: [0, -10, 0],
    y: [0, -2, 0],
    scaleX: [1, 0.9, 1],
  },
}

const pageRightVariants: Variants = {
  normal: {
    skewY: 0,
    y: 0,
    scaleX: 1,
    originX: "50%",
    originY: "50%",
  },
  animate: {
    skewY: [0, 10, 0],
    y: [0, -2, 0],
    scaleX: [1, 0.9, 1],
  },
}

interface BookProps extends React.SVGProps<SVGSVGElement> {
  animate?: "normal" | "animate"
}

const BookAnimated = React.forwardRef<SVGSVGElement, BookProps>(
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
          d="M20 7.50006V16.9194C20 17.7579 19.0021 18.2442 18.2289 17.9199C16.2959 17.109 14.2941 17.4668 12 19V7.50006C15 5.49507 17.5 5.50004 20 7.50006Z"
          initial="normal"
          variants={pageLeftVariants}
          transition={pageTransition}
          animate={animate}
        />
        <motion.path
          d="M4 7.50006V16.9194C4 17.7579 4.99792 18.2442 5.77114 17.9199C7.7041 17.109 9.70585 17.4668 12 19V7.50006C9 5.49507 6.5 5.50004 4 7.50006Z"
          initial="normal"
          variants={pageRightVariants}
          transition={pageTransition}
          animate={animate}
        />
      </svg>
    )
  }
)

BookAnimated.displayName = "BookAnimated"

export default BookAnimated
