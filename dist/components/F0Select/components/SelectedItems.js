import { jsx as e, jsxs as d } from "react/jsx-runtime";
import { forwardRef as x } from "react";
import { F0Avatar as g } from "../../avatars/F0Avatar/index.js";
import { F0Icon as p } from "../../F0Icon/index.js";
import { F0TagStatus as h } from "../../tags/F0TagStatus/index.js";
import { useLabelsOverflow as v, LABEL_SEPARATOR as N } from "../utils.js";
import { useI18n as o } from "../../../lib/providers/i18n/i18n-provider.js";
import { OneEllipsis as c } from "../../../lib/OneEllipsis/OneEllipsis.js";
function m({ count: l }) {
  const r = o();
  return /* @__PURE__ */ e("div", { className: "flex w-full items-center gap-1 text-left", children: /* @__PURE__ */ e(c, { className: "min-w-0 flex-1 text-f1-foreground", children: `${l} ${l === 1 ? r.status.selected.singular : r.status.selected.plural}`.toLowerCase() }) });
}
function w({
  selection: l,
  totalSelectedCount: r
}) {
  const i = l.map((n) => n.label), { allFit: a, containerRef: f } = v(i);
  return a ? /* @__PURE__ */ e(
    "div",
    {
      ref: f,
      className: "flex w-full items-center gap-1 text-left",
      children: /* @__PURE__ */ e("span", { className: "min-w-0 flex-1 truncate text-f1-foreground", children: i.join(N) })
    }
  ) : /* @__PURE__ */ e("div", { ref: f, className: "flex w-full items-center text-left", children: /* @__PURE__ */ e(m, { count: r }) });
}
const R = x(
  function({ selection: r, multiple: i, totalSelectedCount: a, allSelected: f }, n) {
    const u = o();
    if (i) {
      const s = a ?? r.length;
      return s === 0 && r.length === 0 ? null : f === !0 ? /* @__PURE__ */ e("div", { className: "flex w-full items-center gap-1 text-left", children: /* @__PURE__ */ e(c, { className: "min-w-0 flex-1 text-f1-foreground", children: `${u.status.selected.all} (${s})` }) }) : r.length === 0 && s > 0 ? /* @__PURE__ */ e(m, { count: s }) : /* @__PURE__ */ e(
        w,
        {
          selection: r,
          totalSelectedCount: s
        }
      );
    }
    const t = r[0];
    return !t && a && a > 0 ? /* @__PURE__ */ e("div", { className: "flex min-w-0 flex-1 justify-start gap-1.5", ref: n, children: /* @__PURE__ */ e(
      c,
      {
        tag: "span",
        className: "text-left text-f1-foreground-secondary",
        children: "..."
      }
    ) }) : t ? t.tag && typeof t.tag != "string" && t.tag.type === "status" ? /* @__PURE__ */ e("div", { className: "flex min-w-0 flex-1 justify-start", ref: n, children: /* @__PURE__ */ e(
      h,
      {
        text: t.tag.text,
        variant: t.tag.variant
      }
    ) }) : /* @__PURE__ */ d("div", { className: "flex min-w-0 flex-1 justify-start gap-1.5", ref: n, children: [
      t.avatar && /* @__PURE__ */ e("div", { className: "flex shrink-0 items-center", children: /* @__PURE__ */ e(g, { avatar: t.avatar, size: "xs" }) }),
      t.icon && /* @__PURE__ */ e("div", { className: "h-5 shrink-0 text-f1-icon", children: /* @__PURE__ */ e(p, { icon: t.icon }) }),
      /* @__PURE__ */ e(c, { tag: "span", className: "text-left text-f1-foreground", children: t.label })
    ] }) : null;
  }
);
export {
  R as SelectedItems
};
