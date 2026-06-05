import { jsx as s } from "react/jsx-runtime";
import { ToggleGroup as T, ToggleGroupItem as b } from "../../node_modules/.pnpm/@radix-ui_react-toggle-group@1.1.1_@types_react-dom@18.3.1_@types_react@18.3.18_react-dom@18._mekaj3fh36iqfcvrpjhx5ebfyi/node_modules/@radix-ui/react-toggle-group/dist/index.js";
import { useState as y, useEffect as p, useMemo as B } from "react";
import { cn as u } from "../../lib/utils.js";
import { F0ButtonToggleInternal as G } from "../F0ButtonToggle/internal/F0ButtonToggle.internal.js";
const S = (f) => {
  const {
    items: n,
    size: m,
    multiple: t,
    required: d,
    value: o,
    onChange: c,
    variant: g,
    disabled: r,
    withBorder: h = !0,
    fullWidth: a = !1
  } = f, [l, i] = y(o);
  p(() => {
    l !== o && i(o);
  }, [o]);
  const v = (e) => {
    d && (t && e.length === 0 || !e) || i(e);
  };
  p(() => {
    c?.(l);
  }, [l, t]);
  const x = B(() => n.map((e) => ({
    ...e,
    disabled: r || e.disabled
  })), [n, r]), C = t ? l : [l];
  return /* @__PURE__ */ s(
    T,
    {
      ...t ? {
        type: "multiple",
        value: l
      } : {
        type: "single",
        value: l
      },
      onValueChange: v,
      disabled: r,
      className: u(
        "flex flex-wrap items-center justify-center gap-1",
        a && "w-full"
      ),
      children: x.map((e) => /* @__PURE__ */ s(
        b,
        {
          value: e.value,
          asChild: !0,
          className: u(a && "flex-1"),
          children: /* @__PURE__ */ s(
            G,
            {
              ...e,
              size: m,
              withBorder: h,
              variant: g,
              className: u(a && "w-full"),
              selected: !!C?.includes(e.value),
              onSelectedChange: () => {
              }
            }
          )
        },
        e.value
      ))
    }
  );
};
export {
  S as F0ButtonToggleGroup
};
