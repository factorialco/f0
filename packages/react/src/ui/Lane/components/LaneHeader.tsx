import { F0TagStatus, Variant } from "@/components/tags/F0TagStatus"
import { Counter } from "@/experimental/Information/Counter"

type LaneHeaderProps = {
  label: string
  variant?: Variant
  count: number
}

export const LaneHeader = ({ label, variant, count }: LaneHeaderProps) => {
  return (
    <div className="flex items-center gap-2 px-1 pb-0.5 pt-2">
      <F0TagStatus text={label} variant={variant || "neutral"} />
      <Counter size="md" type="default" value={count} />
    </div>
  )
}
