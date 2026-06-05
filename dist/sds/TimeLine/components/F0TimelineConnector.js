import { jsx as o } from "react/jsx-runtime";
import { cn as r } from "../../../lib/utils.js";
const i = ({ status: e }) => /* @__PURE__ */ o(
  "div",
  {
    "data-testid": "timeline-connector",
    className: r(
      "w-0.5 min-h-2 flex-1",
      e === "completed" && "bg-f1-icon-positive",
      e === "in-progress" && "bg-f1-border-secondary",
      e === "not-started" && "bg-[length:2px_6px] bg-repeat-y bg-[linear-gradient(to_bottom,_hsl(var(--neutral-20))_3px,_transparent_3px)]"
    )
  }
);
export {
  i as F0TimelineConnector
};
