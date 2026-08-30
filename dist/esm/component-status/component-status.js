import e from "../_virtual/_virtual_f0-component-status-data.js";
//#region src/component-status/component-status.ts
var t = e, n = "good", r = {
	stable: "Stable",
	experimental: "Experimental",
	deprecated: "Deprecated",
	internal: "Internal",
	unknown: "No tag"
};
function i(e, t, n) {
	return e === "deprecated" ? "deprecated" : e === "internal" ? "internal" : n && t ? "stable" : "experimental";
}
function a(e) {
	return e === "stable" || e === "experimental";
}
function o(e, t, n, r) {
	return e === "deprecated" ? "Deprecated — avoid in new work and migrate to the recommended alternative." : e === "internal" ? "Internal — not part of the public API." : t && n ? "Stable — meets the full definition of done." : r === "tagged-but-below-bar" ? "Marked stable, but it doesn't meet the definition of done yet — treated as experimental." : r === "meets-bar-not-tagged" ? "Meets the definition of done but isn't marked stable yet — still experimental until promoted." : e === "unknown" ? "No maturity tag set — treated as experimental. Complete the checklist below to reach stable." : "Experimental. Complete the checklist below to reach stable.";
}
var s = /^F0[A-Z]/;
function c(e) {
	let t = e.split("/");
	return t.pop(), t[t.length - 1] === "__stories__" && t.pop(), t[t.length - 1] ?? "";
}
var l = [
	"none",
	"stub",
	"acceptable",
	"good",
	"gold"
];
function u(e, t) {
	return l.indexOf(e) >= l.indexOf(t);
}
var d = [
	"skipped",
	"todo",
	"enforced"
];
function f(e, t) {
	return d.indexOf(e) >= d.indexOf(t);
}
var p = [
	{
		key: "naming",
		label: "Named with the \"F0\" prefix",
		detail: "The component folder and exported symbol are \"F0\" followed by an uppercase letter (e.g. F0Button).",
		isMet: (e) => s.test(c(e.storyFile))
	},
	{
		key: "stories",
		label: "Has Storybook stories",
		detail: "A .stories.tsx file with representative stories.",
		isMet: (e) => e.hasStories
	},
	{
		key: "unitTests",
		label: "Has unit tests",
		detail: "Vitest unit tests covering the public API (a __tests__/ folder or .test.tsx file).",
		isMet: (e) => e.hasUnitTests
	},
	{
		key: "playFunction",
		label: "Has a play function",
		detail: "A Storybook play function (interaction test) covering the primary user flow.",
		isMet: (e) => e.hasPlayFunction
	},
	{
		key: "snapshot",
		label: "Has a visual snapshot story",
		detail: "A Chromatic visual-regression story (via withSnapshot) that renders the component's variants, so unintended visual changes are caught.",
		isMet: (e) => e.hasSnapshot
	},
	{
		key: "mdxDocs",
		label: "Has MDX documentation",
		detail: "An .mdx documentation page alongside the stories.",
		isMet: (e) => e.hasMdxDocs
	},
	{
		key: "docQuality",
		label: `Docs reach "${n}" quality`,
		detail: "Docs at the Good tier build on the Acceptable base and add:",
		criteria: [
			{
				label: "Required sections (Anatomy, Guidelines, Accessibility) and a props table",
				isMet: (e) => e.docSignals.sectionsCount >= 2 && e.docSignals.hasProps
			},
			{
				label: "DoDont examples with realistic Factorial copy",
				isMet: (e) => e.docSignals.hasDoDonts
			},
			{
				label: "A \"when not to use\" section",
				isMet: (e) => e.docSignals.hasWhenNotToUse
			},
			{
				label: "At least three named example stories",
				isMet: (e) => e.docSignals.exampleCount >= 3
			}
		],
		isMet: (e) => u(e.docQuality, n)
	},
	{
		key: "a11y",
		label: "Accessibility enforced",
		detail: "Every story runs axe blocking (test: \"error\"), never skipped or \"todo\" — on a green main, axe-clean (WCAG 2.0–2.2, A/AA).",
		isMet: (e) => f(e.a11yTier, "enforced")
	}
];
function m(e) {
	let t = p.map((t) => ({
		key: t.key,
		label: t.label,
		met: t.isMet(e),
		detail: t.detail,
		criteria: t.criteria?.map((t) => ({
			label: t.label,
			met: t.isMet(e)
		}))
	})), n = t.filter((e) => !e.met).map((e) => e.label), s = n.length === 0, c = e.apiStatus === "stable", l = null;
	c && !s ? l = "tagged-but-below-bar" : !c && s && (l = "meets-bar-not-tagged");
	let u = i(e.apiStatus, s, c);
	return {
		...e,
		requirements: t,
		missing: n,
		meetsBar: s,
		taggedStable: c,
		stableReady: s,
		discrepancy: l,
		effectiveStatus: u,
		label: r[u],
		summary: o(e.apiStatus, s, c, l),
		showChecklist: a(u)
	};
}
function h(e) {
	return e.toLowerCase().replace(/^f0/, "").replace(/[^a-z0-9]/g, "");
}
function g(e) {
	let t = e.split("/");
	return t[t.length - 1] ?? e;
}
function _(e, n = t.components) {
	if (!e) return null;
	let r = h(e), i = h(g(e)), a = (e) => e.find((e) => e.zone === "components") ?? e[0], o = n.filter((e) => h(e.name) === r);
	return o.length === 0 && (o = n.filter((e) => h(g(e.name)) === r || h(e.name) === i || h(g(e.name)) === i)), o.length === 0 && (o = n.filter((e) => h(e.name).endsWith(r))), o.length > 0 ? m(a(o)) : null;
}
function v(e = t.components) {
	return e.map(m);
}
function y() {
	return t.generatedAt;
}
//#endregion
export { d as A11Y_TIER_ORDER, s as F0_NAME_PATTERN, n as MIN_DOC_QUALITY, p as STABLE_REQUIREMENTS, r as STATUS_LABELS, f as a11yTierAtLeast, c as componentFolderName, t as componentStatusData, m as evaluateComponentStatus, v as getAllComponentStatuses, _ as getComponentStatus, y as getStatusGeneratedAt };
