import { forwardRef, useState } from "react"

import { F0Button } from "@/components/F0Button"
import { ButtonInternal } from "@/components/F0Button/internal"
import { Switch } from "@/experimental/Forms/Fields/Switch"
import { Add, FitView, Minus, SearchPerson, Sliders } from "@/icons/app"
import { useI18n } from "@/lib/providers/i18n"
import { Popover, PopoverContent, PopoverTrigger } from "@/ui/popover"

import type { F0GraphNodeTagType } from "../F0GraphNode"
import type { F0GraphControlsProps } from "./types"

const DEFAULT_TAG_TYPE_LABELS: Record<F0GraphNodeTagType, string> = {
  person: "People",
  team: "Teams",
  company: "Companies",
  status: "Statuses",
  alert: "Alerts",
  balance: "Balances",
  dot: "Tags",
  raw: "Tags",
}

export const F0GraphControls = forwardRef<HTMLDivElement, F0GraphControlsProps>(
  (
    {
      onZoomIn,
      onZoomOut,
      onFitView,
      onFocusUser,
      tagTypes,
      visibleTagTypes,
      onToggleTagType,
      tagTypeLabels,
      labels,
    },
    ref
  ) => {
    const i18n = useI18n()
    const [tagPopoverOpen, setTagPopoverOpen] = useState(false)

    const showTagButton = !!tagTypes && tagTypes.length > 0 && !!onToggleTagType

    const tagButtonLabel =
      labels?.metadataSettings ?? i18n.graph.controls.metadataSettings

    return (
      <div
        ref={ref}
        role="toolbar"
        aria-label={i18n.graph.controls.navigation}
        className="flex flex-col items-center gap-2"
      >
        {onFocusUser && (
          <F0Button
            variant="outline"
            size="md"
            label={labels?.findMe ?? i18n.graph.controls.findMe}
            icon={SearchPerson}
            hideLabel
            onClick={onFocusUser}
          />
        )}

        <F0Button
          variant="outline"
          size="md"
          label={labels?.fitView ?? i18n.graph.controls.fitToView}
          icon={FitView}
          hideLabel
          onClick={onFitView}
        />

        {showTagButton && (
          <Popover open={tagPopoverOpen} onOpenChange={setTagPopoverOpen}>
            <PopoverTrigger asChild>
              <ButtonInternal
                variant="outline"
                size="md"
                label={tagButtonLabel}
                icon={Sliders}
                hideLabel
                pressed={tagPopoverOpen}
                onClick={() => setTagPopoverOpen((o) => !o)}
              />
            </PopoverTrigger>
            <PopoverContent
              align="start"
              side="right"
              sideOffset={8}
              className="w-[220px] rounded-md border border-solid border-f1-border-secondary p-2"
            >
              <div className="flex flex-col gap-1">
                {tagTypes!.map((type) => {
                  const label =
                    tagTypeLabels?.[type] ?? DEFAULT_TAG_TYPE_LABELS[type]
                  const checked = visibleTagTypes?.has(type) ?? false
                  return (
                    <label
                      key={type}
                      className="flex cursor-pointer items-center justify-between gap-2 rounded px-2 py-1.5 hover:bg-f1-background-secondary"
                    >
                      <span className="text-sm font-medium text-f1-foreground">
                        {label}
                      </span>
                      <Switch
                        title={label}
                        hideLabel
                        checked={checked}
                        onCheckedChange={() => onToggleTagType?.(type)}
                      />
                    </label>
                  )
                })}
              </div>
            </PopoverContent>
          </Popover>
        )}

        {/* Divider */}
        <div className="h-px w-4 bg-f1-foreground/10" />

        <F0Button
          variant="outline"
          size="md"
          label={labels?.zoomIn ?? i18n.graph.controls.zoomIn}
          icon={Add}
          hideLabel
          onClick={onZoomIn}
        />

        <F0Button
          variant="outline"
          size="md"
          label={labels?.zoomOut ?? i18n.graph.controls.zoomOut}
          icon={Minus}
          hideLabel
          onClick={onZoomOut}
        />
      </div>
    )
  }
)

F0GraphControls.displayName = "F0GraphControls"
