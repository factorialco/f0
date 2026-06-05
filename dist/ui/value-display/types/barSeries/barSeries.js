import { jsx as e, jsxs as c, Fragment as f } from "react/jsx-runtime";
import { getColor as h } from "../../../../kits/Charts/utils/colors.js";
import { TooltipProvider as A, Tooltip as I, TooltipTrigger as D, TooltipContent as B } from "../../../tooltip.js";
import { tableDisplayClassNames as S } from "../../const.js";
import { cn as T } from "../../../../lib/utils.js";
const r = 52, i = 6, _ = 2, H = 72, E = 2, k = "categorical-5", w = "categorical-1", L = 0.5, F = "categorical-1";
function G(o) {
  return o;
}
function X(o) {
  return String(o);
}
function j({
  point: o,
  scaleMax: a,
  formatLabel: n,
  formatValue: u,
  formatTooltip: m
}) {
  const { label: g, value: l, secondaryValue: t, neutralValue: p, neutralFullHeight: b } = o, x = n(g), y = u(l), v = m?.({ point: o, formattedLabel: x, formattedValue: y }) ?? `${x} – ${y}`, R = Math.max(p ?? 0, 0), O = l + R, P = t != null && O < t, C = t != null && l > t, s = a > 0 ? Math.round(r * (l / a)) : 0, V = b ? r : a > 0 ? Math.round(r * (R / a)) : 0, d = Math.min(
    V,
    r - s
  ), M = t != null && a > 0 && !P ? Math.round(
    r * (Math.min(l, t) / a)
  ) : s, N = C ? Math.round(r * ((l - (t ?? 0)) / a)) : 0;
  return /* @__PURE__ */ e(A, { delayDuration: 100, disableHoverableContent: !0, children: /* @__PURE__ */ c(I, { children: [
    /* @__PURE__ */ e(D, { asChild: !0, children: /* @__PURE__ */ e(
      "div",
      {
        className: "flex-shrink-0 cursor-default rounded-sm transition-opacity hover:opacity-90",
        style: {
          width: i,
          height: r,
          minHeight: r,
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          alignItems: "stretch"
        },
        role: "img",
        "aria-label": v,
        children: l === 0 && d === 0 ? /* @__PURE__ */ e(
          "div",
          {
            className: "rounded-sm bg-f1-border-secondary",
            style: {
              width: i,
              height: E,
              minHeight: E
            }
          }
        ) : b ? /* @__PURE__ */ e(
          "div",
          {
            className: "rounded-sm bg-f1-border-secondary",
            style: {
              width: i,
              height: r,
              minHeight: r
            }
          }
        ) : P ? /* @__PURE__ */ c(f, { children: [
          s > 0 && /* @__PURE__ */ e(
            "div",
            {
              style: {
                width: i,
                height: s,
                backgroundColor: h(k),
                borderRadius: d > 0 ? "2px 2px 0 0" : 2
              }
            }
          ),
          d > 0 && /* @__PURE__ */ e(
            "div",
            {
              className: "bg-f1-border-secondary",
              style: {
                width: i,
                height: d,
                borderRadius: s > 0 ? "0 0 2px 2px" : 2
              }
            }
          )
        ] }) : C && N > 0 ? /* @__PURE__ */ c(f, { children: [
          /* @__PURE__ */ e(
            "div",
            {
              style: {
                width: i,
                height: N,
                backgroundColor: h(F),
                borderRadius: "2px 2px 0 0"
              }
            }
          ),
          /* @__PURE__ */ e(
            "div",
            {
              style: {
                width: i,
                height: M,
                backgroundColor: h(w, L),
                borderRadius: "0 0 2px 2px"
              }
            }
          )
        ] }) : /* @__PURE__ */ c(f, { children: [
          s > 0 && /* @__PURE__ */ e(
            "div",
            {
              style: {
                width: i,
                height: s,
                backgroundColor: h(w, L),
                borderRadius: d > 0 ? "2px 2px 0 0" : 2
              }
            }
          ),
          d > 0 && /* @__PURE__ */ e(
            "div",
            {
              className: "bg-f1-border-secondary",
              style: {
                width: i,
                height: d,
                borderRadius: s > 0 ? "0 0 2px 2px" : 2
              }
            }
          )
        ] })
      }
    ) }),
    /* @__PURE__ */ e(
      B,
      {
        className: "pointer-events-none z-[100] max-w-xs",
        side: "top",
        sideOffset: 6,
        children: /* @__PURE__ */ e("p", { className: "font-semibold", children: v })
      }
    )
  ] }) });
}
const J = (o, a) => {
  const n = o?.dataPoints;
  if (!n || !Array.isArray(n) || n.length === 0)
    return /* @__PURE__ */ e(
      "div",
      {
        className: T(
          "text-f1-foreground-secondary",
          a.visualization === "table" && S.text
        ),
        "data-cell-type": "barSeries",
        children: "–"
      }
    );
  const u = o.formatLabel ?? G, m = o.formatValue ?? X, g = Math.max(
    ...n.map(
      (t) => Math.max(
        t.value + Math.max(t.neutralValue ?? 0, 0),
        t.secondaryValue ?? 0
      )
    ),
    0
  ), l = o.scaleMax ?? Math.max(g, 1);
  return /* @__PURE__ */ e(
    "div",
    {
      className: T(
        "flex items-center justify-end gap-0.5 overflow-visible py-1",
        a.visualization === "table" && "pt-0.5"
      ),
      style: {
        minHeight: H,
        height: H,
        minWidth: n.length * (i + _) - _
      },
      "data-cell-type": "barSeries",
      role: "img",
      "aria-label": "Bar series",
      children: n.map((t, p) => /* @__PURE__ */ e("div", { className: "pointer-events-auto", children: /* @__PURE__ */ e(
        j,
        {
          point: t,
          scaleMax: l,
          formatLabel: u,
          formatValue: m,
          formatTooltip: o.formatTooltip
        }
      ) }, `${t.label}-${p}`))
    }
  );
};
export {
  J as BarSeriesCell
};
