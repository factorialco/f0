import { F0Icon } from "@/components/F0Icon/F0Icon"
import { ChevronUp } from "@/icons/app"
import { ChevronDown } from "lucide-react"

type ArrowsProps = {
  step?: number
  onClickArrow: (type: "increase" | "decrease") => () => void
}

export const Arrows = ({ onClickArrow, step }: ArrowsProps) => {
  if (!step) return null

  return (
    <div
      className="-mt-1 hidden h-full flex-col group-focus-within:flex group-hover:flex"
      onClick={(e) => e.preventDefault()}
    >
      <div
        onClick={onClickArrow("increase")}
        className="h-3 cursor-pointer"
        role="button"
        aria-label="Increase"
      >
        <F0Icon size="sm" icon={ChevronUp} />
      </div>
      <div
        onClick={onClickArrow("decrease")}
        className="h-3 cursor-pointer"
        role="button"
        aria-label="Decrease"
      >
        <F0Icon size="sm" icon={ChevronDown} />
      </div>
    </div>
  )
}
