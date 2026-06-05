import { jsx as n } from "react/jsx-runtime";
import { withDataTestId as C } from "../../lib/data-testid/index.js";
import { cn as f } from "../../lib/utils.js";
import { CardSelectable as g } from "./CardSelectable.js";
function x(r) {
  const {
    items: a,
    disabled: c = !1,
    label: d,
    layout: v = "vertical",
    multiple: p,
    isToggle: t,
    grouped: S
  } = r, o = p === !0, i = (e) => {
    if (o) {
      const l = r, s = l.value ?? [], h = s.includes(e) ? s.filter((m) => m !== e) : [...s, e];
      l.onChange?.(h);
    } else {
      const l = r;
      t && l.value === e ? l.onChange?.(void 0) : l.onChange?.(e);
    }
  }, u = (e) => o ? (r.value ?? []).includes(e) : r.value === e, b = t || o ? "group" : "radiogroup";
  return S ? /* @__PURE__ */ n(
    "div",
    {
      role: b,
      "aria-label": d,
      className: "rounded-xl border border-solid border-f1-border overflow-hidden",
      children: a.map((e, l) => /* @__PURE__ */ n(
        "div",
        {
          className: f(
            l !== a.length - 1 && "border-0 border-b border-solid border-f1-border"
          ),
          children: /* @__PURE__ */ n(
            g,
            {
              item: e,
              selected: u(e.value),
              disabled: c,
              multiple: o,
              onSelect: () => i(e.value),
              isToggle: t,
              grouped: !0
            }
          )
        },
        String(e.value)
      ))
    }
  ) : /* @__PURE__ */ n(
    "div",
    {
      role: b,
      "aria-label": d,
      className: f(
        "flex gap-3",
        v === "vertical" ? "flex-col" : "flex-row"
      ),
      children: a.map((e) => /* @__PURE__ */ n(
        g,
        {
          item: e,
          selected: u(e.value),
          disabled: c,
          multiple: o,
          onSelect: () => i(e.value),
          isToggle: t
        },
        String(e.value)
      ))
    }
  );
}
const j = C(
  x
);
export {
  j as CardSelectableContainer
};
