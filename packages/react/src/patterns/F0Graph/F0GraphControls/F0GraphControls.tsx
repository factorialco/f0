import { forwardRef } from "react"

import { F0Button } from "@/components/F0Button"
import { Add, CursorClick, FitView, Minus } from "@/icons/app"

import type { F0GraphControlsProps, InteractionMode } from "./types"

export const F0GraphControls = forwardRef<HTMLDivElement, F0GraphControlsProps>(
  ({ mode = "select", onModeChange, onZoomIn, onZoomOut, onFitView }, ref) => {
    const handleModeToggle = (target: InteractionMode) => {
      if (mode !== target) onModeChange?.(target)
    }

    return (
      <div
        ref={ref}
        role="toolbar"
        aria-label="Graph navigation"
        className="flex flex-col items-center gap-2"
      >
        <F0Button
          variant="outline"
          size="md"
          label="Select mode"
          icon={CursorClick}
          hideLabel
          onClick={() => handleModeToggle("select")}
        />

        <F0Button
          variant="outline"
          size="md"
          label="Fit to view"
          icon={FitView}
          hideLabel
          onClick={onFitView}
        />

        {/* Divider */}
        <div className="h-px w-4 bg-f1-foreground/10" />

        <F0Button
          variant="outline"
          size="md"
          label="Zoom in"
          icon={Add}
          hideLabel
          onClick={onZoomIn}
        />

        <F0Button
          variant="outline"
          size="md"
          label="Zoom out"
          icon={Minus}
          hideLabel
          onClick={onZoomOut}
        />
      </div>
    )
  }
)

F0GraphControls.displayName = "F0GraphControls"
