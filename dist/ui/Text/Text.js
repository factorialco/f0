import { jsx as a } from "react/jsx-runtime";
import { forwardRef as N, createElement as l } from "react";
import { parseMarkdown as _ } from "../../lib/markdown.js";
import { cn as s } from "../../lib/utils.js";
import { defaultTag as h, textVariants as c } from "./variants.js";
import { OneEllipsis as d } from "../../lib/OneEllipsis/OneEllipsis.js";
const I = N(
  ({
    content: u,
    variant: e,
    align: r,
    className: t,
    as: y,
    ellipsis: p,
    noEllipsisTooltip: T,
    markdown: x,
    required: g,
    ...n
  }, o) => {
    const m = y ?? h[e ?? "body"], f = g ? /* @__PURE__ */ a("span", { className: "text-f1-foreground-critical", "aria-hidden": "true", children: " *" }) : null;
    if (p !== void 0) {
      const i = typeof p == "number" ? p : 1;
      return f ? l(
        m,
        {
          ...n,
          className: s(
            c({ variant: e, align: r }),
            t,
            "inline-flex gap-0.5"
          ),
          ref: o
        },
        /* @__PURE__ */ a(
          d,
          {
            lines: i,
            noTooltip: T,
            tag: "span",
            className: "min-w-0",
            markdown: x,
            children: u
          }
        ),
        f
      ) : /* @__PURE__ */ a(
        d,
        {
          ref: o,
          lines: i,
          noTooltip: T,
          tag: m,
          className: s(c({ variant: e, align: r }), t),
          markdown: x,
          ...n,
          children: u
        }
      );
    }
    if (x) {
      const i = _(u);
      return f ? l(
        m,
        {
          ...n,
          className: s(c({ variant: e, align: r }), t),
          ref: o
        },
        /* @__PURE__ */ a("span", { dangerouslySetInnerHTML: { __html: i } }),
        f
      ) : l(m, {
        ...n,
        className: s(c({ variant: e, align: r }), t),
        ref: o,
        dangerouslySetInnerHTML: { __html: i }
      });
    }
    return l(
      m,
      {
        ...n,
        className: s(c({ variant: e, align: r }), t),
        ref: o
      },
      u,
      f
    );
  }
);
I.displayName = "Text";
export {
  I as Text
};
