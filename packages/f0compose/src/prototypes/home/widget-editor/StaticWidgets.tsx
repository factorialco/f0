import { F0Box, F0Button } from "@factorialco/f0-react"
import { Cross, Pencil } from "@factorialco/f0-react/icons/app"
import { useSearchParams } from "react-router-dom"

import { useProfile } from "../profileStore"
import { useFixedWidgets } from "../setup/widgetPreferences"
import { HomeToolbarActions } from "../windows/HomeToolbarActions"
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
  return (
    <div className="flex h-full min-h-0 shrink-0" data-static-widgets>
      <div className="flex shrink-0 items-start pt-3">
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
              size={collapsed ? "sm" : "md"}
              variant={collapsed ? "ghost" : "outline"}
              onClick={() => setParams({ view: "widgets" })}
            />
          </F0Box>
        )}
      />
    </div>
  )
}
