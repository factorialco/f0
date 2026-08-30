import { A11Y_WCAG_TAGS as e } from "../lib/storybook-utils/a11yAxeConfig.js";
import { useCallback as t, useEffect as n, useRef as r, useState as i } from "react";
import { jsx as a, jsxs as o } from "react/jsx-runtime";
//#region src/component-status/A11yRow.tsx
var s = [...e];
function c(e) {
	let t = null;
	for (let n of e) {
		let e = /^wcag(\d)(\d)(\d{1,2})$/.exec(n);
		if (e) {
			t = `${e[1]}.${e[2]}.${e[3]}`;
			break;
		}
	}
	let n = e.some((e) => /^wcag2\d?aa$/.test(e)) ? "AA" : "A", r = e.includes("wcag22a") || e.includes("wcag22aa") ? "2.2" : e.includes("wcag21a") || e.includes("wcag21aa") ? "2.1" : "2.0";
	return {
		sc: t,
		level: n,
		version: r
	};
}
function l() {
	return typeof document < "u" && document.querySelector("#storybook-docs") !== null;
}
async function u() {
	let { default: e } = await import("axe-core"), t = Array.from(document.querySelectorAll("#storybook-docs .docs-story")), n = t.length > 0 ? t : [], r = /* @__PURE__ */ new Map();
	for (let t of n) {
		let n;
		try {
			n = await e.run(t, { runOnly: {
				type: "tag",
				values: s
			} });
		} catch {
			continue;
		}
		for (let e of n.violations) {
			let t = r.get(e.id), n = e.nodes.length;
			t ? t.nodes += n : r.set(e.id, {
				ruleId: e.id,
				description: e.description,
				nodes: n,
				...c(e.tags)
			});
		}
	}
	return Array.from(r.values()).sort((e, t) => t.nodes - e.nodes);
}
function d() {
	let [e, n] = i({ status: "idle" }), a = r(!1);
	return {
		state: e,
		start: t(() => {
			if (!a.current) {
				if (a.current = !0, !l()) {
					n({ status: "unavailable" });
					return;
				}
				n({ status: "running" }), u().then((e) => n({
					status: "done",
					criteria: e
				}), () => n({ status: "unavailable" }));
			}
		}, [])
	};
}
var f = {
	panel: {
		strong: "text-f1-foreground",
		muted: "text-f1-foreground-secondary"
	},
	tooltip: {
		strong: "",
		muted: "opacity-75"
	}
};
function p({ state: e, tone: t = "panel" }) {
	let n = f[t];
	return /* @__PURE__ */ o("div", {
		className: "mt-2",
		"aria-live": "polite",
		children: [
			e.status === "running" && /* @__PURE__ */ o("div", {
				className: "flex items-center gap-2",
				children: [/* @__PURE__ */ o("svg", {
					className: `h-4 w-4 shrink-0 animate-spin motion-reduce:animate-none ${n.muted}`,
					viewBox: "0 0 24 24",
					fill: "none",
					"aria-hidden": "true",
					children: [/* @__PURE__ */ a("circle", {
						cx: "12",
						cy: "12",
						r: "9",
						stroke: "currentColor",
						strokeOpacity: "0.25",
						strokeWidth: "3"
					}), /* @__PURE__ */ a("path", {
						d: "M21 12a9 9 0 0 0-9-9",
						stroke: "currentColor",
						strokeWidth: "3",
						strokeLinecap: "round"
					})]
				}), /* @__PURE__ */ a("span", { children: "Checking the rendered stories…" })]
			}),
			e.status === "unavailable" && /* @__PURE__ */ o("p", {
				className: "m-0",
				children: [
					"Live results are available on the Storybook docs page. See the story’s",
					" ",
					/* @__PURE__ */ a("strong", { children: "Accessibility" }),
					" tab for per-element detail."
				]
			}),
			e.status === "done" && e.criteria.length === 0 && /* @__PURE__ */ a("p", {
				className: "m-0 text-f1-foreground-positive",
				children: "No violations in the stories’ default state."
			}),
			e.status === "done" && e.criteria.length > 0 && /* @__PURE__ */ a("div", {
				role: "list",
				className: "space-y-1",
				children: e.criteria.map((e) => /* @__PURE__ */ o("div", {
					role: "listitem",
					className: "flex items-start gap-2 text-base",
					children: [/* @__PURE__ */ a("span", {
						"aria-hidden": !0,
						className: "shrink-0 text-f1-foreground-warning",
						children: "⚠"
					}), /* @__PURE__ */ o("span", { children: [
						/* @__PURE__ */ a("code", {
							className: n.strong,
							children: e.ruleId
						}),
						e.sc && /* @__PURE__ */ o("span", {
							className: n.muted,
							children: [
								" ",
								"· WCAG ",
								e.sc,
								" ",
								e.level,
								" (",
								e.version,
								")"
							]
						}),
						/* @__PURE__ */ o("span", {
							className: n.muted,
							children: [
								" ",
								"· ",
								e.description,
								" · ",
								e.nodes,
								" ",
								e.nodes === 1 ? "element" : "elements"
							]
						})
					] })]
				}, e.ruleId))
			}),
			(e.status === "done" || e.status === "unavailable") && /* @__PURE__ */ a("p", {
				className: `mt-2 text-sm ${n.muted}`,
				children: "Checked in each story’s default state — violations behind interactions (open menus, dialogs) aren’t shown here. CI enforces the full set, including play-function states."
			})
		]
	});
}
function m(e) {
	let t = e === "enforced";
	return {
		enforced: t,
		glyph: t ? "✓" : "✕",
		text: e === "enforced" ? "enforced" : e === "skipped" ? "axe skipped" : "not enforced yet"
	};
}
function h({ detail: e, tier: n }) {
	let { state: r, start: i } = d(), s = t((e) => {
		e.currentTarget.open && i();
	}, [i]), { glyph: c, enforced: l, text: u } = m(n);
	return /* @__PURE__ */ o("div", {
		role: "listitem",
		className: "flex items-start gap-2",
		children: [/* @__PURE__ */ a("span", {
			"aria-hidden": !0,
			className: `mt-0.5 shrink-0 ${l ? "text-f1-foreground-positive" : "text-f1-foreground-secondary"}`,
			children: c
		}), /* @__PURE__ */ o("div", {
			className: "min-w-0",
			children: [/* @__PURE__ */ o("div", {
				className: "text-base text-f1-foreground",
				children: [
					"Accessibility",
					" ",
					/* @__PURE__ */ o("span", {
						className: "text-f1-foreground-secondary",
						children: ["— ", u]
					})
				]
			}), /* @__PURE__ */ o("div", {
				className: "mt-0.5 text-base text-f1-foreground-secondary",
				children: [e, /* @__PURE__ */ o("details", {
					className: "mt-1",
					onToggle: s,
					children: [/* @__PURE__ */ a("summary", {
						className: "cursor-pointer list-none text-f1-foreground marker:hidden [&::-webkit-details-marker]:hidden",
						children: "Check the rendered stories"
					}), /* @__PURE__ */ a(p, {
						state: r,
						tone: "panel"
					})]
				})]
			})]
		})]
	});
}
function g({ detail: e, tier: t }) {
	let { state: r, start: i } = d();
	n(() => {
		i();
	}, [i]);
	let { glyph: s, enforced: c, text: l } = m(t);
	return /* @__PURE__ */ o("div", {
		role: "listitem",
		className: "flex items-start gap-2",
		children: [/* @__PURE__ */ a("span", {
			"aria-hidden": !0,
			className: `mt-0.5 shrink-0 ${c ? "text-f1-foreground-positive" : "opacity-60"}`,
			children: s
		}), /* @__PURE__ */ o("div", {
			className: "min-w-0",
			children: [
				/* @__PURE__ */ o("div", {
					className: "text-base",
					children: ["Accessibility ", /* @__PURE__ */ o("span", {
						className: "opacity-75",
						children: ["— ", l]
					})]
				}),
				/* @__PURE__ */ a("div", {
					className: "mt-0.5 text-base opacity-75",
					children: e
				}),
				/* @__PURE__ */ a(p, {
					state: r,
					tone: "tooltip"
				})
			]
		})]
	});
}
//#endregion
export { p as A11yAuditResults, h as A11yRow, g as A11yTooltipRow, d as useA11yAudit };
