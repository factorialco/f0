import { jsx as p } from "react/jsx-runtime";
import a from "../../../node_modules/.pnpm/dompurify@3.3.3/node_modules/dompurify/dist/purify.es.js";
import { forwardRef as f, useMemo as n } from "react";
import { withDataTestId as c } from "../../../lib/data-testid/index.js";
import { cn as h } from "../../../lib/utils.js";
import '../index.css';/* empty css           */
import { unified as l } from "../../../node_modules/.pnpm/unified@11.0.5/node_modules/unified/lib/index.js";
import u from "../../../node_modules/.pnpm/remark-parse@11.0.0/node_modules/remark-parse/lib/index.js";
import y from "../../../node_modules/.pnpm/remark-gfm@4.0.1/node_modules/remark-gfm/lib/index.js";
import R from "../../../node_modules/.pnpm/remark-rehype@11.1.2/node_modules/remark-rehype/lib/index.js";
import T from "../../../node_modules/.pnpm/rehype-stringify@10.0.1/node_modules/rehype-stringify/lib/index.js";
const d = l().use(u).use(y).use(R).use(T), D = f(function({ content: r, className: i, format: t = "html", ...o }, m) {
  const e = n(
    () => a.sanitize(
      t === "markdown" ? String(d.processSync(r)) : r,
      {
        ADD_ATTR: ["target"],
        ALLOWED_ATTR: ["href", "target", "rel", "class"]
      }
    ),
    [t, r]
  ), s = /<[^>]*>/.test(e);
  return /* @__PURE__ */ p(
    "div",
    {
      ref: m,
      className: h(
        "rich-text-display-container",
        !s && "whitespace-pre-wrap",
        i
      ),
      dangerouslySetInnerHTML: {
        __html: e
      },
      ...o
    }
  );
}), I = c(D);
export {
  I as RichTextDisplay
};
