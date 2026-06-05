import { jsx as t } from "react/jsx-runtime";
import { OverflowList as i } from "../../../ui/OverflowList/index.js";
import { Tag as f } from "../F0Tag/F0Tag.js";
import { TagCounter as l } from "./components/TagCounter.js";
const n = ({
  type: s,
  tags: m,
  max: a = 4,
  remainingCount: o
}) => {
  const e = m.map(
    (r) => ({ type: s, ...r })
  );
  return /* @__PURE__ */ t(
    i,
    {
      items: e,
      max: a,
      min: 1,
      renderListItem: (r) => /* @__PURE__ */ t(f, { tag: r }),
      renderDropdownItem: () => null,
      forceShowingOverflowIndicator: o !== void 0,
      renderOverflowIndicator: (r) => /* @__PURE__ */ t(
        l,
        {
          count: (o ?? 0) + r,
          list: o ? void 0 : e.slice(e.length - r)
        }
      ),
      overflowIndicatorWithPopover: !1,
      className: "flex-1"
    }
  );
};
n.displayName = "F0TagList";
export {
  n as F0TagList
};
