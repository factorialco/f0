import { experimentalComponent as e } from "../../../lib/experimental.js";
import { cn as t } from "../../../lib/utils.js";
import '../../../_embedded/CMZMBcMl.css';/* empty css       */
import { forwardRef as n, useMemo as r } from "react";
import { jsx as i } from "react/jsx-runtime";
import a from "dompurify";
import o from "rehype-stringify";
import s from "remark-gfm";
import c from "remark-parse";
import l from "remark-rehype";
import { unified as u } from "unified";
//#region src/components/RichText/F0RichTextDisplay/F0RichTextDisplay.tsx
var d = u().use(c).use(s).use(l).use(o), f = n(function({ content: e, className: n, format: o = "html", ...s }, c) {
	let l = r(() => a.sanitize(o === "markdown" ? String(d.processSync(e)) : e, {
		ADD_ATTR: ["target"],
		ALLOWED_ATTR: [
			"href",
			"target",
			"rel",
			"class"
		]
	}), [o, e]), u = /<[^>]*>/.test(l);
	return /* @__PURE__ */ i("div", {
		ref: c,
		className: t("rich-text-display-container", !u && "whitespace-pre-wrap", n),
		dangerouslySetInnerHTML: { __html: l },
		...s
	});
}), p = e("F0RichTextDisplay", f), m = p;
//#endregion
export { p as F0RichTextDisplay, m as RichTextDisplay };
