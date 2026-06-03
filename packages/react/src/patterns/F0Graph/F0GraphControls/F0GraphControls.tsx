import { forwardRef } from "react"

import { F0Button } from "@/components/F0Button"
import { Add, FitView, Minus, SearchPerson } from "@/icons/app"
import { useI18n } from "@/lib/providers/i18n"

import type { F0GraphControlsProps } from "./types"

export const F0GraphControls = forwardRef<HTMLDivElement, F0GraphControlsProps>(
  ({ onZoomIn, onZoomOut, onFitView, onFocusUser, labels }, ref) => {
    const i18n = useI18n()

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

        {/* Divider */}
        <div className="h-px w-4 bg-f1-border rounded" />

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
