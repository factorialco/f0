import type { SVGProps } from "react"
import { Ref, forwardRef, useId } from "react"

const pieces = [
  {
    id: "bottom",
    path: "M11.9948 17.5244C14.2802 17.5244 16.5188 18.2872 18.2805 19.7631C16.5189 21.1914 14.2801 22 11.9948 22C9.61453 21.9999 7.42426 21.1436 5.71037 19.7631C7.47193 18.3348 9.70955 17.5245 11.9948 17.5244Z",
  },
  {
    id: "left",
    path: "M4.23721 5.71327C5.66526 7.47502 6.47496 9.71299 6.47503 11.9985C6.47502 14.2841 5.71292 16.5231 4.23721 18.2849C2.80903 16.5231 2 14.2841 2 11.9985C2.00007 9.61784 2.85682 7.42739 4.23721 5.71327Z",
  },
  {
    id: "right",
    path: "M19.7622 5.71327C21.1902 7.47502 21.9999 9.71299 22 11.9985C22 14.2841 21.2379 16.5231 19.7622 18.2849C18.334 16.5231 17.525 14.2841 17.525 11.9985C17.525 9.61784 18.3818 7.42739 19.7622 5.71327Z",
  },
  {
    id: "top",
    path: "M11.9948 2C14.2802 2 16.5188 2.76274 18.2805 4.2387C16.5189 5.66699 14.2801 6.47557 11.9948 6.47557C9.61453 6.4755 7.42426 5.61919 5.71037 4.2387C7.47193 2.81041 9.70955 2.00007 11.9948 2Z",
  },
]

const SvgOne = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => {
  const hasColorClass =
    (props.className?.includes("text-") && !props.className?.includes("text-current")) ||
    props.style?.color !== undefined

  const clipPathId = useId()

  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" ref={ref} {...props}>
      <defs>
        {pieces.map((piece) => (
          <clipPath key={piece.id} id={`${clipPathId}-${piece.id}`}>
            <path d={piece.path} />
          </clipPath>
        ))}
      </defs>

      {hasColorClass
        ? pieces.map((piece) => (
            <path
              key={piece.id}
              d={piece.path}
              fill="currentColor"
              vectorEffect="non-scaling-stroke"
            />
          ))
        : pieces.map((piece) => (
            <foreignObject
              key={piece.id}
              x="0"
              y="0"
              width="24"
              height="24"
              clipPath={`url(#${clipPathId}-${piece.id})`}
            >
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  background:
                    "conic-gradient(from 0deg at 50% 50%, #E55619 0%, #A1ADE5 33%, #E51943 66%, #E55619 100%)",
                }}
              />
            </foreignObject>
          ))}
    </svg>
  )
}
const ForwardRef = forwardRef(SvgOne)
export default ForwardRef
