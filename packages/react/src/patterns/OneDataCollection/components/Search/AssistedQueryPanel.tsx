import { useEffect, useRef } from "react"
import { F0SearchInput } from "@/components/F0SearchInput"
import type { QueryAnalysis } from "./Search"

export type AssistedQueryPanelProps = {
  value: string
  onChange: (value: string) => void
  analysis?: QueryAnalysis
  placeholder?: string
  /**
   * Called once the typing has settled. Reading the query re-renders the whole
   * popover, and doing that on every keystroke costs the field characters —
   * the text has to stay ahead of the reading.
   */
  onSettle?: (value: string) => void
}

/**
 * The assisted query as a pane of the filters popover, built like the panes
 * beside it: the same search box at the top, and rows under it that are picked
 * the same way. What it understood is said by the filters themselves.
 */
export const AssistedQueryPanel = ({
  value,
  onChange,
  analysis,
  placeholder,
  onSettle,
}: AssistedQueryPanelProps) => {
  const onSettleRef = useRef(onSettle)
  onSettleRef.current = onSettle

  useEffect(() => {
    const timer = setTimeout(() => onSettleRef.current?.(value), 200)
    return () => clearTimeout(timer)
  }, [value])

  return (
    <div className="flex h-full w-full flex-col">
      <div className="rounded-tr-xl p-2">
        <F0SearchInput
          placeholder={placeholder}
          value={value}
          onChange={(next) => onChange(next ?? "")}
          clearable
          autoFocus
          tabIndex={0}
        />
      </div>

      {value && analysis?.note ? (
        <p className="px-3.5 pb-1 text-base text-f1-foreground-secondary">
          {analysis.note}
        </p>
      ) : null}
    </div>
  )
}
