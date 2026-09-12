import { F0Box, F0Button } from "@factorialco/f0-react"
import { Cross, Pencil } from "@factorialco/f0-react/icons/app"

import { useSearchParams } from "react-router-dom"

import { useProfile } from "../profileStore"
import { useFixedWidgets } from "../setup/widgetPreferences"
import { HomeToolbarActions } from "../windows/HomeToolbarActions"
import { useWidgetCollapse } from "../windows/widgetCollapse"
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
  useFixedWidgets(profile)
  const catalog = useWidgetCatalog(profile)
  const [, setParams] = useSearchParams()
  const ids = readSelection(profile).personal
  const { collapsed } = useWidgetCollapse(profile)
  const hasExpanded = ids.some((id) => !collapsed.includes(id))
  return (
    <div className="flex h-full min-h-0 shrink-0" data-static-widgets>
      <div className="relative w-8 shrink-0">
        <div className="absolute right-0 top-3 z-10 flex items-start whitespace-nowrap">
          <F0Button
            label="Edit widgets"
            icon={Pencil}
            hideLabel={!hasExpanded && ids.length > 0}
            variant="ghost"
            size="md"
            onClick={() => setParams({ view: "widgets" })}
          />
          {onCloseConversation && (
            <F0Button
              label="Close conversation"
              icon={Cross}
              hideLabel
              variant="ghost"
              size="md"
              onClick={onCloseConversation}
            />
          )}
          <HomeToolbarActions openWindows={ids} showEdit={false} />
        </div>
      </div>
      <div className="flex min-h-0 flex-col">
        <div className="min-h-0 flex-1">
          <WidgetRail
            items={ids}
            titleFor={(id) =>
              isBuiltin(id)
                ? windowRegistry[id].title
                : (catalog.custom.find((widget) => widget.id === id)?.title ??
                  "Widget")
            }
            renderWidget={(id) => <WidgetCard id={id} custom={catalog.custom} />}
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
