import e from "dompurify";
import t from "rehype-stringify";
import n from "remark-gfm";
import r from "remark-parse";
import i from "remark-rehype";
import { unified as a } from "unified";
//#region src/lib/markdown.ts
var o = a().use(r).use(i).use(t), s = a().use(r).use(n).use(i).use(t), c = /* @__PURE__ */ "h1.h2.h3.h4.h5.h6.p.br.hr.strong.b.em.i.del.s.a.ul.ol.li.blockquote.pre.code.table.thead.tbody.tr.th.td".split(".");
function l(t) {
	let n = String(o.processSync(t));
	return e.sanitize(n, {
		ALLOWED_TAGS: [
			"strong",
			"b",
			"em",
			"i"
		],
		KEEP_CONTENT: !0
	});
}
function u(t) {
	let n = String(s.processSync(t));
	return e.sanitize(n, {
		ALLOWED_TAGS: c,
		ALLOWED_ATTR: [
			"href",
			"target",
			"rel"
		],
		KEEP_CONTENT: !0
	});
}
function d(e) {
	return e.replace(/\*\*(.+?)\*\*/g, "$1").replace(/\*(.+?)\*/g, "$1").replace(/__(.+?)__/g, "$1").replace(/_(.+?)_/g, "$1").replace(/\[(.+?)\]\(.+?\)/g, "$1").replace(/`(.+?)`/g, "$1");
}
//#endregion
export { l as parseMarkdown, u as parseMarkdownDocument, d as stripMarkdown };
