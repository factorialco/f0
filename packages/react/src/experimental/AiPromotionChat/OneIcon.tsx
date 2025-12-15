import { cn } from "@/lib/utils"
import { cva } from "cva"
import { motion } from "motion/react"
import type { SVGProps } from "react"
import { Ref, forwardRef, useId } from "react"

interface OneIconProps extends SVGProps<SVGSVGElement> {
  spin?: boolean
  hover?: boolean
  background?: string
  size?: "sm" | "md" | "lg"
}

const sizeVariants = cva({
  variants: {
    size: {
      sm: "h-[1.375rem] w-[1.375rem]",
      md: "h-8 w-8",
      lg: "h-10 w-10",
    },
  },
  defaultVariants: { size: "md" },
})

const pieces = [
  {
    id: "bottom",
    delay: 2.6,
    transformOrigin: "center 89%",
    rotateAxis: "1, 0, 0",
    path: "M15.9939 24.8399C19.6511 24.8399 23.2335 26.0603 26.0525 28.4219C23.2335 30.7072 19.651 32.001 15.9939 32.001C12.1849 32.0009 8.67993 30.6307 5.93728 28.4219C8.75621 26.1365 12.3369 24.84 15.9939 24.8399Z",
  },
  {
    id: "left",
    delay: 2.2,
    transformOrigin: "11% center",
    rotateAxis: "0, 1, 0",
    path: "M3.57986 5.94142C5.86509 8.76031 7.1608 12.3412 7.16092 15.9981C7.16092 19.6551 5.94136 23.2376 3.57986 26.0567C1.29443 23.2376 -0.000215909 19.6552 -0.00021553 15.9981C-0.000100728 12.1889 1.37091 8.6841 3.57986 5.94142Z",
  },
  {
    id: "right",
    delay: 2.4,
    transformOrigin: "88.5% center",
    rotateAxis: "0, 1, 0",
    path: "M28.4236 5.94142C30.7088 8.76031 32.0046 12.3412 32.0047 15.9981C32.0047 19.6551 30.7851 23.2376 28.4236 26.0567C26.1382 23.2376 24.8435 19.6552 24.8435 15.9981C24.8436 12.1889 26.2147 8.6841 28.4236 5.94142Z",
  },
  {
    id: "top",
    delay: 2,
    transformOrigin: "center 11%",
    rotateAxis: "1, 0, 0",
    path: "M15.9939 1.33514e-05C19.6511 1.37386e-05 23.2335 1.22043 26.0525 3.58204C23.2335 5.86737 19.651 7.16115 15.9939 7.16115C12.1849 7.16103 8.67993 5.79089 5.93728 3.58204C8.75621 1.29671 12.3369 0.000125175 15.9939 1.33514e-05Z",
  },
]

const OneIcon = (
  { spin = false, size = "md", background, hover = false, ...svgProps }: OneIconProps,
  ref: Ref<SVGSVGElement>
) => {
  const clipPathId = useId()
  const {
    onAnimationStart: _onAnimationStart,
    onAnimationEnd: _onAnimationEnd,
    onDragStart: _onDragStart,
    onDragEnd: _onDragEnd,
    onDrag: _onDrag,
    className,
    ...safeSvgProps
  } = svgProps

  return (
    <div
      className={cn(sizeVariants({ size }), className)}
      style={{
        background: "transparent",
        perspective: spin ? "10px" : undefined,
        transformStyle: spin ? "preserve-3d" : undefined,
      }}
    >
      <motion.svg
        width="100%"
        height="100%"
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
        ref={ref}
        animate={{
          "--gradient-angle": ["0deg", "360deg"],
        }}
        transition={
          !background
            ? {
                "--gradient-angle": {
                  duration: 6,
                  ease: "linear",
                  repeat: Infinity,
                },
              }
            : undefined
        }
        style={
          {
            "--gradient-angle": "0deg",
            ...safeSvgProps.style,
          } as React.CSSProperties
        }
        {...(({ style: _style, ...rest }) => rest)(safeSvgProps)}
      >
        <defs>
          <clipPath id={`${clipPathId}-circle`}>
            <circle cx="16" cy="16" r="16" />
          </clipPath>
          {pieces.map((piece) => (
            <clipPath key={piece.id} id={`${clipPathId}-${piece.id}`}>
              <path d={piece.path} />
            </clipPath>
          ))}
        </defs>

        <g clipPath={`url(#${clipPathId}-circle)`}>
          {pieces.map((piece) => (
            <motion.foreignObject
              key={piece.id}
              x="0"
              y="0"
              width="32"
              height="32"
              clipPath={`url(#${clipPathId}-${piece.id})`}
              animate={{
                "--rotate3d-angle": ["0deg", "180deg", "180deg", "360deg"],
                "--scale": hover ? 8 : 1,
                "--rotate": hover ? "90deg" : "0deg",
                opacity: hover ? (piece.id === "left" ? 1 : 0) : 1,
                filter: spin ? ["blur(0px)", "blur(8px)", "blur(0px)"] : undefined,
              }}
              transition={{
                "--rotate3d-angle": {
                  delay: spin ? piece.delay : 0,
                  duration: 1.8,
                  ease: [0.65, 0, 0.35, 1],
                  times: [0, 0.99, 0.9999, 1],
                },
                "--scale": {
                  duration: hover ? 0.6 : 0.35,
                  ease: [0.55, 0, 0.1, 1],
                },
                "--rotate": {
                  duration: 0.35,
                  ease: "easeInOut",
                },
                opacity: {
                  duration: hover ? 0.8 : 0.1,
                  ease: "easeInOut",
                },
                filter: {
                  delay: spin ? piece.delay : 0,
                  duration: 1.8,
                  ease: [0.65, 0, 0.35, 1],
                  times: [0, 0.5, 1],
                },
              }}
              style={
                {
                  "--rotate3d-angle": "0deg",
                  "--scale": 1,
                  "--rotate": "0deg",
                  transform: spin
                    ? `rotate3d(${piece.rotateAxis}, var(--rotate3d-angle))`
                    : `scale(var(--scale)) rotate(var(--rotate))`,
                  transformOrigin: piece.transformOrigin,
                  willChange: "transform",
                } as React.CSSProperties
              }
            >
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  background:
                    background ??
                    `conic-gradient(from var(--gradient-angle) at 50% 50%, #E55619 0%, #A1ADE5 33%, #E51943 66%, #E55619 100%)`,
                }}
              />
            </motion.foreignObject>
          ))}
        </g>
      </motion.svg>
    </div>
  )
}
const ForwardRef = forwardRef<SVGSVGElement, OneIconProps>(OneIcon)
export default ForwardRef
