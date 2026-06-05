import { jsx as i, jsxs as S } from "react/jsx-runtime";
import { useCallback as w } from "react";
import { cn as x } from "../../../../../../../lib/utils.js";
import { BaseCell as B } from "./BaseCell.js";
import { useNumberCellLayout as D } from "./hooks/useNumberCellLayout.js";
import { F0NumberInput as F } from "../../../../../../../components/F0NumberInput/F0NumberInput.js";
function z({
  editableColumn: s,
  value: n,
  error: h,
  loading: d,
  onChange: o,
  item: g,
  hint: N
}) {
  const e = s.numberConfig, m = typeof n == "string" ? n.trim() : n, a = m !== "" && m != null ? Number(m) : NaN, u = isFinite(a) ? a : null, { ref: b, width: C, locale: y, units: c, unitsBefore: l } = D(
    e,
    u,
    g
  ), k = (r) => {
    if (r == null) {
      n !== "" && o(null);
      return;
    }
    let t = r;
    e?.min != null && t < e.min && (t = e.min), e?.max != null && t > e.max && (t = e.max);
    const p = String(t);
    p !== n && o(p);
  }, f = c && /* @__PURE__ */ i("span", { className: "flex shrink-0 select-none items-center self-center pt-[1px] text-sm text-f1-foreground", children: c }), j = w((r) => {
    const t = r.currentTarget.querySelector("input");
    t && r.target !== t && t.focus();
  }, []);
  return /* @__PURE__ */ i(B, { error: h, hint: N, children: /* @__PURE__ */ i(
    "div",
    {
      ref: b,
      onClick: j,
      className: x(
        "flex h-full w-full cursor-text items-center",
        s.align === "right" && "justify-end"
      ),
      children: /* @__PURE__ */ S(
        "div",
        {
          className: x(
            "flex h-full max-w-full items-center gap-1",
            l && "pl-3 [&_input]:pl-1",
            !l && c && "pr-3 [&_input]:pr-1"
          ),
          style: { width: C },
          children: [
            l && f,
            /* @__PURE__ */ i(
              F,
              {
                label: s.label,
                hideLabel: !0,
                value: u,
                onChange: k,
                loading: d,
                transparent: !0,
                hint: "",
                locale: y,
                min: e?.min,
                max: e?.max,
                step: e?.step,
                maxDecimals: e?.maxDecimals
              }
            ),
            !l && f
          ]
        }
      )
    }
  ) });
}
export {
  z as NumberCell
};
