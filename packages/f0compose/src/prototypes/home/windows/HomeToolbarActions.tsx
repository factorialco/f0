import { F0Button } from "@factorialco/f0-react";
import { Pencil } from "@factorialco/f0-react/icons/app";
import { forwardRef, type SVGProps } from "react";
import { PanelCollapse } from "../PanelCollapse";
import { SidePanelIcon } from "./PanelIcons";
import { useProfile } from "../profileStore";
import { resumeHomeSetup } from "../one/conversationStore";
import { useWidgetCollapse } from "./widgetCollapse";

// Existing sidebar glyph mirrored for the right-hand panel. The installed
// F0 icon set has no sidebar-collapse glyph (see PanelCollapse.tsx).
export const RightPanelCollapse = forwardRef<
  SVGSVGElement,
  SVGProps<SVGSVGElement>
>(({ className, ...props }, ref) => (
  <PanelCollapse
    {...props}
    ref={ref}
    className={`${className ?? ""} -scale-x-100`}
  />
));
export const RightPanelExpand = SidePanelIcon;

export function HomeToolbarActions({
  openWindows,
  showEdit = true,
}: {
  openWindows: string[];
  showEdit?: boolean;
}) {
  const profile = useProfile();
  const { collapsed, setCollapsed } = useWidgetCollapse(profile);
  const expanded = openWindows.some((id) => !collapsed.includes(id));
  return (
    <div className="flex items-center gap-1" data-home-toolbar-actions>
      {showEdit && (
        <F0Button
          label="Edit"
          icon={Pencil}
          variant="ghost"
          size="md"
          onClick={() => resumeHomeSetup(profile)}
        />
      )}
      {openWindows.length > 0 && (
        <F0Button
          label={expanded ? "Collapse all widgets" : "Expand all widgets"}
          icon={expanded ? RightPanelCollapse : RightPanelExpand}
          hideLabel
          variant="ghost"
          size="md"
          onClick={() =>
            setCollapsed(
              expanded
                ? [...new Set([...collapsed, ...openWindows])]
                : collapsed.filter((id) => !openWindows.includes(id)),
            )
          }
        />
      )}
    </div>
  );
}
