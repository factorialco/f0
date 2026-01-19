import { Await } from "@/components/Utilities/Await"
import { experimentalComponent } from "@/lib/experimental"
import { Skeleton } from "@/ui/skeleton"
import { cn } from "../../lib/utils"
import { Counter } from "../Information/Counter"

interface PresetProps {
  label: string
  number?: number | Promise<number | undefined>
  onClick?: () => void
  selected?: boolean
}

const _Preset = ({ label, number, onClick, selected }: PresetProps) => {
  return (
    <label
      className={cn(
        "flex cursor-default appearance-none items-center gap-2 rounded px-2.5 py-1.5 font-medium text-f1-foreground outline outline-1 outline-f1-border transition-all",
        onClick &&
          "focus-within:ring-2 focus-within:ring-f1-border-selected focus-within:ring-offset-2",
        number && "pr-1.5",
        onClick && "cursor-pointer hover:outline-f1-border-hover",
        selected &&
          "bg-f1-background-selected-secondary text-f1-foreground-selected outline-f1-border-selected hover:outline-f1-border-selected"
      )}
    >
      <input
        type="checkbox"
        className="sr-only"
        checked={selected}
        onChange={() => onClick?.()}
      />
      <span className="whitespace-nowrap">{label}</span>
      {number !== undefined && (
        <Await resolve={number} fallback={<Skeleton className="h-4 w-4" />}>
          {(number) =>
            number !== undefined && (
              <Counter
                value={number}
                type={selected ? "selected" : "default"}
              />
            )
          }
        </Await>
      )}
    </label>
  )
}

/**
 * @experimental This is an experimental component use it at your own risk
 */
export const Preset = experimentalComponent("Preset", _Preset)
