import { cn as e } from "../../../lib/utils.js";
import { jsx as t } from "react/jsx-runtime";
//#region src/sds/timeline/components/F0TimelineConnector.tsx
var n = ({ status: n }) => /* @__PURE__ */ t("div", {
	"data-testid": "timeline-connector",
	className: e("w-0.5 min-h-2 flex-1", n === "completed" && "bg-f1-icon-positive", n === "in-progress" && "bg-f1-border-secondary", n === "not-started" && "bg-[length:2px_6px] bg-repeat-y bg-[linear-gradient(to_bottom,_hsl(var(--neutral-20))_3px,_transparent_3px)]")
});
//#endregion
export { n as F0TimelineConnector };
