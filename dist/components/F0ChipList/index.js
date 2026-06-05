import { jsx as t, jsxs as v } from "react/jsx-runtime";
import { withDataTestId as a } from "../../lib/data-testid/index.js";
import { experimentalComponent as C } from "../../lib/experimental.js";
import { OverflowList as w } from "../../ui/OverflowList/index.js";
import { Chip as l } from "../OneChip/index.js";
import { ChipCounter as m } from "./ChipCounter.js";
const n = ({
  chips: r,
  max: s = 4,
  remainingCount: o,
  layout: p = "compact"
}) => {
  if (p === "fill")
    return /* @__PURE__ */ t(
      w,
      {
        items: r,
        renderListItem: (e) => /* @__PURE__ */ t(l, { ...e }),
        renderDropdownItem: () => null,
        forceShowingOverflowIndicator: o !== void 0,
        renderOverflowIndicator: (e) => /* @__PURE__ */ t(
          m,
          {
            count: (o ?? 0) + e,
            list: o ? void 0 : r.slice(r.length - e)
          }
        ),
        overflowIndicatorWithPopover: !1,
        className: "flex-1"
      }
    );
  const f = r.slice(0, s), c = r.slice(s), i = o ?? r.length - s, d = i > 0;
  return /* @__PURE__ */ v("div", { className: "flex items-center gap-2", children: [
    f.map((e, h) => /* @__PURE__ */ t(l, { ...e }, h)),
    d && /* @__PURE__ */ t(
      m,
      {
        count: i,
        list: o ? void 0 : c
      }
    )
  ] });
};
n.displayName = "F0ChipList";
const N = a(
  C("F0ChipList", n)
);
export {
  N as F0ChipList
};
