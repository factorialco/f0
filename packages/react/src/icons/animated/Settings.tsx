import { motion, Transition, Variants } from "motion/react"
import * as React from "react"

const cogTransition: Transition = {
  duration: 0.6,
  ease: [1, -0.4, 0.35, 0.95],
}

const cogVariants: Variants = {
  normal: {
    rotate: 0,
    originX: "50%",
    originY: "50%",
  },
  animate: {
    rotate: 180,
  },
}

interface SettingsProps extends React.SVGProps<SVGSVGElement> {
  animate?: "normal" | "animate"
}

const SettingsAnimated = React.forwardRef<SVGSVGElement, SettingsProps>(
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
          d="M10.3036 4.71638C11.0868 3.46223 12.9132 3.46223 13.6964 4.71638L14.4364 5.90129C14.7887 6.46555 15.3986 6.81766 16.0635 6.8407L17.4596 6.88908C18.9373 6.94029 19.8505 8.52194 19.156 9.8273L18.4998 11.0606C18.1873 11.6479 18.1873 12.3521 18.4998 12.9394L19.156 14.1727C19.8505 15.4781 18.9373 17.0597 17.4596 17.1109L16.0635 17.1593C15.3986 17.1823 14.7887 17.5345 14.4364 18.0987L13.6964 19.2836C12.9132 20.5378 11.0868 20.5378 10.3036 19.2836L9.56365 18.0987C9.21127 17.5345 8.60139 17.1823 7.93654 17.1593L6.54039 17.1109C5.06266 17.0597 4.14949 15.4781 4.84401 14.1727L5.50018 12.9394C5.81266 12.3521 5.81266 11.6479 5.50018 11.0606L4.84401 9.8273C4.14949 8.52194 5.06266 6.94029 6.54039 6.88908L7.93654 6.8407C8.60139 6.81766 9.21127 6.46555 9.56365 5.90129L10.3036 4.71638Z"
          variants={cogVariants}
          animate={animate}
          initial="normal"
          transition={cogTransition}
          vectorEffect="non-scaling-stroke"
        />
        <circle cx="11.9995" cy="12" r="2.5" vectorEffect="non-scaling-stroke" />
      </svg>
    )
  }
)

SettingsAnimated.displayName = "SettingsAnimated"

export default SettingsAnimated
