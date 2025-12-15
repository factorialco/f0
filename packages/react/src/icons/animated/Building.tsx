import { motion, Transition, Variants } from "motion/react"
import * as React from "react"

const buildingTransition: Transition = {
  duration: 0.6,
  ease: [0.175, 0.885, 0.32, 1.275],
}

const buildingVariants: Variants = {
  normal: {
    scale: 1,
    rotate: 0,
  },
  animate: {
    scale: [1, 0.9, 1],
    rotate: [0, -10, 0],
  },
}

interface BuildingProps extends React.SVGProps<SVGSVGElement> {
  animate?: "normal" | "animate"
}

const BuildingAnimated = React.forwardRef<SVGSVGElement, BuildingProps>(
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
          variants={buildingVariants}
          animate={animate}
          initial="normal"
          transition={buildingTransition}
        >
          <path
            d="M5.52922 6.63982L10.5292 3.82732C11.4425 3.31362 12.5575 3.31362 13.4708 3.82732L18.4708 6.63982C19.4154 7.17117 20 8.17072 20 9.25454V14.7455C20 15.8293 19.4154 16.8288 18.4708 17.3602L13.4708 20.1727C12.5575 20.6864 11.4425 20.6864 10.5292 20.1727L5.52922 17.3602C4.58459 16.8288 4 15.8293 4 14.7455V9.25454C4 8.17072 4.58459 7.17117 5.52922 6.63982Z"
            vectorEffect="non-scaling-stroke"
          />
          <path d="M5 8L12 12M12 20V12M19 8L12 12" vectorEffect="non-scaling-stroke" />
          <path
            d="M15 15.066V18.2336C15 19.01 15.848 19.4901 16.5143 19.0902L17.0143 18.7902C17.3155 18.6095 17.5 18.284 17.5 17.9326V13.882C17.5 13.4933 17.076 13.2533 16.7426 13.4532L15.4853 14.2076C15.1841 14.3883 15 14.7138 15 15.0651Z"
            transform="translate(0, -0.5)"
            vectorEffect="non-scaling-stroke"
          />
        </motion.g>
      </svg>
    )
  }
)

BuildingAnimated.displayName = "BuildingAnimated"

export default BuildingAnimated
