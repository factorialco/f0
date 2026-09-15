import { F0Box, F0Button } from "@factorialco/f0-react"
import { Widget } from "@factorialco/f0-react/dist/experimental"
import { Cross, Pencil } from "@factorialco/f0-react/icons/app"

import "../setup/home-generation.css"
import { useSearchParams } from "react-router-dom"

import { useProfile } from "../profileStore"
import { useHomePreparing } from "../setup/homeGeneration"
import { useFixedWidgets } from "../setup/widgetPreferences"
import { WidgetRail } from "../windows/WidgetRail"
import { windowRegistry } from "../windows/WindowsColumn"
import { isBuiltin, readSelection, useWidgetCatalog } from "./model"
import { WidgetCard } from "./WidgetCard"

export function StaticWidgets({
  onCloseConversation,
}: {
  onCloseConversation?: () => void
}) {
  const profile = useProfile()
  const preparing = useHomePreparing(profile)
  useFixedWidgets(profile)
  const catalog = useWidgetCatalog(profile)
  const [, setParams] = useSearchParams()
  const ids = readSelection(profile).personal
  return (
    <div className="flex h-full min-h-0 shrink-0" data-static-widgets>
      <div className="flex min-h-0 flex-col">
        {/* The controls sit ON TOP of the widgets, not in a gutter beside
            them (Angel, 2026-09-14) — they act on the column, so they
            belong over it. */}
        {/* Only the conversation's ✕ survives up here (Angel,
            2026-09-15): editing the widgets and collapsing the column
            were two controls hanging over a column that already has its
            own footer button. */}
        {onCloseConversation && (
          <div className="flex shrink-0 items-center justify-end whitespace-nowrap pt-3">
            <F0Button
              label="Close conversation"
              icon={Cross}
              hideLabel
              variant="ghost"
              size="md"
              onClick={onCloseConversation}
            />
          </div>
        )}
        <div className="min-h-0 flex-1">
          <WidgetRail
            items={ids}
            titleFor={(id) =>
              isBuiltin(id)
                ? windowRegistry[id].title
                : (catalog.custom.find((widget) => widget.id === id)?.title ??
                  "Widget")
            }
            renderWidget={(id) => (
              <div
                className="home-generation-region"
                data-preparing={preparing || undefined}
                aria-busy={preparing}
              >
                <div aria-hidden={preparing || undefined}>
                  <WidgetCard id={id} custom={catalog.custom} />
                </div>
                {preparing && (
                  <div className="home-widget-skeleton">
                    <Widget.Skeleton height="full" />
                  </div>
                )}
              </div>
            )}
            footer={(collapsed) => (
              <F0Box display="flex" justifyContent="center">
                <F0Button
                  label="Edit widgets"
                  icon={Pencil}
                  hideLabel={collapsed}
                  variant="outline"
                  size="md"
                  onClick={() => setParams({ view: "widgets" })}
                />
              </F0Box>
            )}
          />
        </div>
      </div>
    </div>
  )
}
