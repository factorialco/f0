import { motion } from "motion/react"
import type { SVGProps } from "react"
import { Ref, forwardRef, useId } from "react"

const pieces = [
  {
    id: "bottom",
    delay: 2.6,
    transformOrigin: "center 89%",
    rotateAxis: "1, 0, 0",
    path: "M15.9939 24.8399C19.6511 24.8399 23.2335 26.0603 26.0525 28.4219C23.2335 30.7072 19.651 32.001 15.9939 32.001C12.1849 32.0009 8.67993 30.6307 5.93728 28.4219C8.75621 26.1365 12.3369 24.84 15.9939 24.8399Z",
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
  {
    id: "left",
    delay: 2.2,
    transformOrigin: "11% center",
    rotateAxis: "0, 1, 0",
    path: "M3.57986 5.94142C5.86509 8.76031 7.1608 12.3412 7.16092 15.9981C7.16092 19.6551 5.94136 23.2376 3.57986 26.0567C1.29443 23.2376 -0.000215909 19.6552 -0.00021553 15.9981C-0.000100728 12.1889 1.37091 8.6841 3.57986 5.94142Z",
  },
]

const OneIcon = (
  svgProps: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => {
  const clipPathId = useId()
  const {
    onAnimationStart: _onAnimationStart,
    onAnimationEnd: _onAnimationEnd,
    onDragStart: _onDragStart,
    onDragEnd: _onDragEnd,
    onDrag: _onDrag,
    ...safeSvgProps
  } = svgProps

  return (
    <div className="h-4 w-4 shrink-0">
      <motion.svg
        width="100%"
        height="100%"
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
        ref={ref}
        initial={{
          rotate: "0deg",
          opacity: 0,
          scale: 0.8,
          filter: "blur(4px)",
        }}
        animate={{
          "--gradient-angle": ["0deg", "360deg"],
          rotate: "360deg",
          opacity: 1,
          scale: 1,
          filter: "blur(0px)",
        }}
        transition={{
          "--gradient-angle": {
            duration: 3,
            ease: "linear",
            repeat: Infinity,
          },
          rotate: {
            duration: 2,
            ease: [0.76, 0, 0.24, 1],
            repeat: Infinity,
          },
          opacity: {
            duration: 0.5,
            ease: [0.33, 1, 0.68, 1],
          },
          scale: {
            duration: 0.5,
            ease: [0.25, 0.46, 0.45, 1.94],
          },
          filter: {
            duration: 0.5,
            ease: [0.33, 1, 0.68, 1],
          },
        }}
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
                "--scale": [1, 8, 1],
              }}
              transition={{
                "--scale": {
                  duration: 2,
                  ease: [0.85, 0, 0.15, 1],
                  repeat: Infinity,
                  delay: 1,
                },
              }}
              style={
                {
                  "--scale": 1,
                  transform: `scale(var(--scale))`,
                  transformOrigin: piece.transformOrigin,
                  willChange: "transform",
                } as React.CSSProperties
              }
            >
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  background: `conic-gradient(from var(--gradient-angle) at 50% 50%, #E55619 0%, #A1ADE5 33%, #E51943 66%, #E55619 100%)`,
                }}
              />
            </motion.foreignObject>
          ))}
        </g>
      </motion.svg>
    </div>
  )
}
export const ChatSpinner = forwardRef<SVGSVGElement, SVGProps<SVGSVGElement>>(
  OneIcon
)
