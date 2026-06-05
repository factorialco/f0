import { jsx as e, Fragment as x, jsxs as d } from "react/jsx-runtime";
import { useState as g, useRef as b, useMemo as C, useCallback as p, useEffect as N } from "react";
import { withDataTestId as P } from "../../../lib/data-testid/index.js";
import { experimentalComponent as y } from "../../../lib/experimental.js";
import { TooltipProvider as D, Tooltip as O, TooltipTrigger as w, TooltipContent as F } from "../../../ui/tooltip.js";
import { cn as S } from "../../../lib/utils.js";
import { Shortcut as j } from "../../../ui/Shortcut/index.js";
function k({
  label: s,
  description: i,
  children: u,
  shortcut: r,
  instant: n = !1,
  delay: l = 700
}) {
  const [T, m] = g(!1), c = b(null), f = C(() => n ? 100 : l, [l, n]), a = p(() => {
    c.current && (clearTimeout(c.current), c.current = null);
  }, []), o = p(() => {
    a(), m(!1);
  }, [a]), h = p(() => {
    a(), c.current = setTimeout(() => m(!0), f);
  }, [a, f]);
  N(() => o, [o]);
  const v = p((t) => {
    try {
      return t.matches(":focus-visible");
    } catch {
      return !1;
    }
  }, []);
  return /* @__PURE__ */ e(x, { children: /* @__PURE__ */ e(
    D,
    {
      delayDuration: f,
      disableHoverableContent: n,
      children: /* @__PURE__ */ d(
        O,
        {
          open: T,
          onOpenChange: (t) => {
            t || o();
          },
          children: [
            /* @__PURE__ */ e(
              w,
              {
                asChild: !0,
                className: "pointer-events-auto",
                onPointerEnter: (t) => {
                  t.pointerType !== "touch" && h();
                },
                onPointerLeave: () => o(),
                onPointerDown: () => o(),
                onFocus: (t) => {
                  v(t.currentTarget) ? m(!0) : o();
                },
                onBlur: () => o(),
                children: u
              }
            ),
            /* @__PURE__ */ e(
              F,
              {
                className: S(
                  "max-w-xs",
                  r && "pr-1.5",
                  n && "pointer-events-none"
                ),
                children: /* @__PURE__ */ d("div", { className: "flex flex-col gap-0.5", children: [
                  /* @__PURE__ */ d("div", { className: "flex items-center gap-2", children: [
                    s && /* @__PURE__ */ e("p", { className: "font-semibold", children: s }),
                    r && /* @__PURE__ */ e(j, { keys: r, variant: "inverse" })
                  ] }),
                  i && /* @__PURE__ */ e("p", { className: "font-normal", children: i.toString() })
                ] })
              }
            )
          ]
        }
      )
    }
  ) });
}
const E = ["delay"], I = (s) => {
  const i = E.reduce((u, r) => {
    const { [r]: n, ...l } = u;
    return l;
  }, s);
  return /* @__PURE__ */ e(k, { ...i });
}, $ = P(
  y("Tooltip", I)
);
export {
  $ as Tooltip,
  k as TooltipInternal
};
