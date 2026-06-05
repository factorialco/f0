import { jsxs as r, jsx as t } from "react/jsx-runtime";
import { OneEllipsis as a } from "../../lib/OneEllipsis/OneEllipsis.js";
import { withDataTestId as p } from "../../lib/data-testid/index.js";
import { experimentalComponent as s } from "../../lib/experimental.js";
import { ScrollArea as n } from "../../ui/scrollarea.js";
import { CurrentVersionIndicator as f } from "./CurrentVersionIndicator/index.js";
import { VersionItem as c } from "./VersionItem/index.js";
function x({
  title: o,
  versions: m,
  currentVersion: i,
  activeVersionId: e
}) {
  return /* @__PURE__ */ r(
    "nav",
    {
      className: "flex h-full w-full min-w-[320px] max-w-[380px] flex-col overflow-hidden px-3 pb-3 pt-[6px]",
      "aria-label": o,
      children: [
        /* @__PURE__ */ t(
          a,
          {
            tag: "h2",
            lines: 1,
            className: "flex-shrink-0 px-2 pb-3 pt-4 text-lg font-semibold text-f1-foreground",
            children: o
          }
        ),
        /* @__PURE__ */ t(n, { className: "h-full flex-1", children: /* @__PURE__ */ r("div", { className: "flex flex-col gap-1", children: [
          i && /* @__PURE__ */ t(
            f,
            {
              title: i.title,
              onClick: i.onClick,
              isActive: e === "current"
            }
          ),
          m.map((l) => /* @__PURE__ */ t(
            c,
            {
              author: l.author,
              timestamp: l.timestamp,
              onClick: l.onClick,
              isActive: e === l.id
            },
            l.id
          ))
        ] }) })
      ]
    }
  );
}
const g = p(
  s("F0VersionHistory", x)
);
export {
  g as F0VersionHistory
};
