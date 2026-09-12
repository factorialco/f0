import { F0Button } from "@factorialco/f0-react";
import { Pencil } from "@factorialco/f0-react/icons/app";
import { useSearchParams } from "react-router-dom";
import { useProfile } from "../profileStore";
import { useFixedWidgets } from "../setup/widgetPreferences";
import { HomeToolbarActions } from "../windows/HomeToolbarActions";
import { WidgetRail } from "../windows/WidgetRail";
import { windowRegistry } from "../windows/WindowsColumn";
import { isBuiltin, useWidgetCatalog } from "./model";
import { WidgetCard } from "./WidgetCard";

export function StaticWidgets() {
  const profile = useProfile();
  const builtin = useFixedWidgets(profile);
  const catalog = useWidgetCatalog(profile);
  const [, setParams] = useSearchParams();
  const ids = [...builtin, ...catalog.selectedCustom];
  return (
    <div className="flex h-full min-h-0 shrink-0" data-static-widgets>
      <div className="shrink-0 pt-3">
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
          <F0Button
            label="Edit widgets"
            icon={Pencil}
            hideLabel={collapsed}
            size="sm"
            variant={collapsed ? "ghost" : "outline"}
            onClick={() => setParams({ view: "widgets" })}
          />
        )}
      />
    </div>
  );
}
