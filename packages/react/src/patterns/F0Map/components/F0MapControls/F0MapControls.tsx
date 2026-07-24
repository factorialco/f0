import { forwardRef } from "react"

import { F0Button } from "@/components/F0Button"
import { Add, FitView, Minus, SearchPerson } from "@/icons/app"
import { DataTestIdWrapper } from "@/lib/data-testid"
import { F0Box } from "@/lib/F0Box"
import { useI18n } from "@/lib/providers/i18n"

import type { F0MapControlsProps } from "./types"

/**
 * The map's navigation toolbar - locate, fit, zoom in/out - as a vertical stack
 * of outline icon buttons. Presentational and engine-free: F0Map wires the
 * callbacks to the MapLibre instance and positions this overlay. Mirrors
 * F0GraphControls so the two spatial patterns share one control language.
 */
export const F0MapControls = forwardRef<HTMLDivElement, F0MapControlsProps>(
  ({ onZoomIn, onZoomOut, onFit, onLocate, labels, dataTestId }, ref) => {
    const i18n = useI18n()
    const hasTopGroup = Boolean(onLocate || onFit)
    const hasZoomGroup = Boolean(onZoomIn || onZoomOut)

    // Each group sits on its own card so zoom and navigation read as two
    // separate surfaces lifted off the map. F0Box has no backdrop-filter
    // prop, so the frosted-glass blur lives on a wrapper whose radius matches
    // the card - the translucent surface then frosts the map behind it.
    const card = (children: React.ReactNode) => (
      <div className="rounded-lg backdrop-blur-md">
        <F0Box
          background="inverse-secondary"
          border="default"
          borderStyle="solid"
          borderColor="secondary"
          borderRadius="lg"
          padding="xs"
        >
          <div className="flex flex-col items-center gap-1">{children}</div>
        </F0Box>
      </div>
    )

    return (
      <DataTestIdWrapper dataTestId={dataTestId}>
        <div
          ref={ref}
          role="toolbar"
          aria-orientation="vertical"
          aria-label={i18n.map.navigation}
          className="flex flex-col items-center gap-2"
        >
          {hasTopGroup &&
            card(
              <>
                {onFit && (
                  <F0Button
                    variant="ghost"
                    size="md"
                    label={labels?.fit ?? i18n.map.controls.fit}
                    icon={FitView}
                    hideLabel
                    onClick={onFit}
                  />
                )}
                {onLocate && (
                  <F0Button
                    variant="ghost"
                    size="md"
                    label={labels?.locate ?? i18n.map.controls.locate}
                    icon={SearchPerson}
                    hideLabel
                    onClick={onLocate}
                  />
                )}
              </>
            )}

          {hasZoomGroup &&
            card(
              <>
                {onZoomIn && (
                  <F0Button
                    variant="ghost"
                    size="md"
                    label={labels?.zoomIn ?? i18n.map.controls.zoomIn}
                    icon={Add}
                    hideLabel
                    onClick={onZoomIn}
                  />
                )}
                {onZoomOut && (
                  <F0Button
                    variant="ghost"
                    size="md"
                    label={labels?.zoomOut ?? i18n.map.controls.zoomOut}
                    icon={Minus}
                    hideLabel
                    onClick={onZoomOut}
                  />
                )}
              </>
            )}
        </div>
      </DataTestIdWrapper>
    )
  }
)

F0MapControls.displayName = "F0MapControls"
