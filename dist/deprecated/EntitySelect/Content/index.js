import { jsxs as w, jsx as t } from "react/jsx-runtime";
import { MainContent as N } from "./MainContent/index.js";
import { SecondaryContent as j } from "./SecondaryContent/index.js";
const k = 500, x = 520, m = 210, v = ({
  groupView: n,
  onRemove: l,
  onSubItemRemove: a,
  selectedEntities: o,
  selectedLabel: p,
  width: h,
  singleSelector: d = !1,
  loading: c = !1,
  hiddenAvatar: f = !1,
  actions: e,
  onCreate: y,
  onCreateLabel: b,
  ...s
}) => {
  const C = (h ?? x) < k, r = !c && !d && !C, i = h ?? x, W = r ? i - m : i;
  return /* @__PURE__ */ w(
    "div",
    {
      className: "flex overflow-hidden",
      style: {
        height: d && (!e || e.length === 0) ? "435px" : "473px",
        width: i
      },
      children: [
        /* @__PURE__ */ t(
          "div",
          {
            className: "min-h-0 flex-1",
            style: { width: W + 1 + "px" },
            children: /* @__PURE__ */ t(
              N,
              {
                ...s,
                groupView: n,
                onRemove: l,
                onSubItemRemove: a,
                selectedEntities: o,
                singleSelector: d,
                loading: c,
                disabled: s.disabled,
                hiddenAvatar: f,
                actions: e,
                onCreate: y,
                onCreateLabel: b
              }
            )
          }
        ),
        r && /* @__PURE__ */ t(
          "div",
          {
            className: "min-h-0",
            style: {
              width: m + "px"
            },
            children: /* @__PURE__ */ t(
              j,
              {
                groupView: n,
                onRemove: l,
                onSubItemRemove: a,
                selectedEntities: o ?? [],
                selectedLabel: p,
                disabled: s.disabled,
                hiddenAvatar: f
              }
            )
          }
        )
      ]
    }
  );
};
export {
  v as Content
};
