import { motion, Transition, Variants } from "motion/react"
import * as React from "react"

const inboxTransition: Transition = {
  duration: 0.6,
  ease: [0.175, 0.885, 0.32, 1.275],
}

const inboxVariants: Variants = {
  normal: {
    originX: "50%",
    originY: "80%",
    scaleX: 1,
    scaleY: 1,
  },
  animate: {
    scaleX: [1, 0.8, 1.1, 1],
    scaleY: [1, 1.1, 0.8, 1],
  },
}

interface InboxProps extends React.SVGProps<SVGSVGElement> {
  animate?: "normal" | "animate"
}

const InboxAnimated = React.forwardRef<SVGSVGElement, InboxProps>(
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
          variants={inboxVariants}
          animate={animate}
          initial="normal"
          transition={inboxTransition}
        >
          <path d="M20 15V10.7146C20 10.2525 19.84 9.80467 19.5471 9.44721L17.6236 7.09894C17.0538 6.40334 16.202 6 15.3028 6H8.31014C7.31744 6 6.38901 6.49107 5.83033 7.31163L4.34677 9.49064C4.12081 9.82251 3.99997 10.2147 3.99997 10.6162V15C3.99997 16.6569 5.34312 18 6.99997 18H17C18.6568 18 20 16.6569 20 15Z" />
          <path d="M4.49997 10H7.65284C8.14168 10 8.55887 10.3534 8.63924 10.8356L8.8607 12.1644C8.94107 12.6466 9.35826 13 9.8471 13H14.1528C14.6417 13 15.0589 12.6466 15.1392 12.1644L15.3607 10.8356C15.4411 10.3534 15.8583 10 16.3471 10H19.5" />
        </motion.g>
      </svg>
    )
  }
)

InboxAnimated.displayName = "InboxAnimated"

export default InboxAnimated
