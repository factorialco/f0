import { t as e } from "./purify.es-m7dSeJ6J.js";
import { a as t, i as n, n as r, r as i, t as a } from "./lib-G5YyWpsl.js";
//#region src/lib/markdown.ts
var o = a().use(i).use(r).use(t), s = a().use(i).use(n).use(r).use(t), c = /* @__PURE__ */ "h1.h2.h3.h4.h5.h6.p.br.hr.strong.b.em.i.del.s.a.ul.ol.li.blockquote.pre.code.table.thead.tbody.tr.th.td".split(".");
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
export { u as n, d as r, l as t };
