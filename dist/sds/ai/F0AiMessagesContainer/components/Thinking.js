import { jsx as t, jsxs as d } from "react/jsx-runtime";
import { useState as h, useRef as x, useEffect as b } from "react";
import v from "../../../../icons/app/Lightbulb.js";
import { CollapsibleMessage as I } from "./CollapsibleMessage.js";
import { F0ActionItem as O } from "../../F0ActionItem/F0ActionItem.js";
import { useI18n as T } from "../../../../lib/providers/i18n/i18n-provider.js";
const w = ({
  titles: o,
  title: i,
  inProgress: e,
  isWriting: m
}) => {
  const p = T(), [r, l] = h(!!e), c = x(e);
  b(() => {
    c.current && !e ? l(!1) : e && !r && l(!0), c.current = e;
  }, [e, r]);
  const s = e ? p.ai.thoughtsGroupTitle : i ?? p.ai.thoughtsGroupTitle, u = o.length - 1, f = (n) => !e || m ? "completed" : n === u ? "executing" : "completed";
  return /* @__PURE__ */ t(
    I,
    {
      icon: v,
      title: s,
      open: r,
      onOpenChange: l,
      lockOpen: e,
      children: /* @__PURE__ */ t("div", { className: "flex flex-col gap-3 pb-4", children: o.map((n, a) => /* @__PURE__ */ d("div", { className: "relative", children: [
        /* @__PURE__ */ t(
          O,
          {
            title: n,
            status: f(a),
            inGroup: !0
          }
        ),
        a < o.length - 1 && /* @__PURE__ */ t(
          "div",
          {
            "aria-hidden": !0,
            className: "absolute -bottom-3 left-2 ml-px top-5 w-px bg-f1-border-secondary rounded"
          }
        )
      ] }, a)) })
    }
  );
};
export {
  w as Thinking
};
