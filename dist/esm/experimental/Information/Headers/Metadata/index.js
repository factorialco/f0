import { experimentalComponent as e } from "../../../../lib/experimental.js";
import { cn as t } from "../../../../lib/utils.js";
import { F0Icon as n } from "../../../../components/F0Icon/index.js";
import r from "../../../../icons/app/InfoCircleLine.js";
import { Tooltip as i } from "../../../Overlays/Tooltip/index.js";
import { F0Button as a } from "../../../../components/F0Button/F0Button.js";
import { MobileDropdown as o } from "../../../Navigation/Dropdown/index.js";
import { ButtonCopy as s } from "../../../../ui/ButtonCopy/ButtonCopy.js";
import { MetadataValue as c } from "./MetadataValue.js";
import { Fragment as l, memo as u, useState as d } from "react";
import { jsx as f, jsxs as p } from "react/jsx-runtime";
import { AnimatePresence as m, motion as h } from "motion/react";
//#region src/experimental/Information/Headers/Metadata/index.tsx
var g = (e) => e?.type !== "copy", _ = (e) => e?.type === "copy", v = {
	none: "gap-y-0",
	xs: "gap-y-1",
	sm: "gap-y-2",
	md: "gap-y-3"
};
function y({ item: e }) {
	let [l, u] = d(!1), v = e.value.type === "data-list" && e.value.data.length > 1 || e.value.type === "tag-list" && e.value.tags.length > 1, y = !!e.actions?.length, b = y || v, x = (e, t) => {
		if (t) return t;
		let n;
		switch (e.type) {
			case "text": return e.content;
			case "avatar": return e.text;
			case "status":
			case "dot-tag": return e.label;
			case "date": return e.formattedDate;
			case "tag-list": return e.tags.join(", ");
			case "data-list": return e.data.join(", ");
			case "list": return "";
			case "progress-bar": {
				let t = typeof e.max == "number" && e.max > 0 ? e.max : 100;
				return e.label ?? `${e.value}/${t}`;
			}
			default: return n = e, n;
		}
	};
	return /* @__PURE__ */ p("div", {
		className: "flex h-8 items-center gap-2",
		children: [
			e.icon && /* @__PURE__ */ f("span", {
				className: "flex shrink-0 items-center text-f1-foreground-secondary",
				children: /* @__PURE__ */ f(n, {
					icon: e.icon,
					size: "md"
				})
			}),
			/* @__PURE__ */ p("div", {
				className: t("flex w-28 items-center gap-1 truncate text-f1-foreground-secondary md:w-fit", e.hideLabel && "md:hidden"),
				children: [e.label, e.info && /* @__PURE__ */ f("div", {
					className: "flex h-4 w-4 items-center text-f1-foreground-tertiary hover:cursor-help",
					children: /* @__PURE__ */ f(i, {
						label: e.info.title,
						description: e.info.description,
						children: /* @__PURE__ */ f(n, {
							icon: r,
							size: "sm"
						})
					})
				})]
			}),
			/* @__PURE__ */ p("div", {
				role: "button",
				tabIndex: b ? 0 : -1,
				onMouseEnter: () => b && u(!0),
				onMouseLeave: () => b && u(!1),
				onFocus: () => b && u(!0),
				onBlur: () => b && u(!1),
				className: "relative flex h-5 w-fit items-center hover:cursor-default",
				"aria-label": `${e.label} actions`,
				children: [
					/* @__PURE__ */ f("div", {
						className: t("hidden font-medium text-f1-foreground md:block", !y && "block"),
						children: /* @__PURE__ */ f(c, {
							item: e,
							collapse: !0
						})
					}),
					y && /* @__PURE__ */ f("div", {
						className: "w-full md:hidden",
						children: /* @__PURE__ */ f(o, {
							items: e.actions?.filter(g).map((e) => ({
								label: e.label,
								icon: e.icon,
								onClick: e.onClick
							})) ?? [],
							children: /* @__PURE__ */ f(c, {
								item: e,
								collapse: !0
							})
						})
					}),
					/* @__PURE__ */ f(m, { children: l && b && /* @__PURE__ */ p(h.div, {
						className: t("absolute -left-1.5 -top-1.5 z-50 hidden max-h-[80vh] items-start justify-center gap-1.5 overflow-y-auto whitespace-nowrap rounded-sm bg-f1-background py-1 pl-1.5 shadow-md ring-1 ring-inset ring-f1-border-secondary md:flex", !v && "h-8 items-start", y ? "pr-1" : "pr-1.5"),
						initial: { opacity: 0 },
						animate: { opacity: 1 },
						exit: { opacity: 0 },
						transition: { duration: .1 },
						children: [/* @__PURE__ */ f("div", {
							className: t("flex h-6 items-center font-medium text-f1-foreground", v && "h-auto items-start pt-0.5"),
							children: /* @__PURE__ */ f(c, { item: e })
						}), y && /* @__PURE__ */ f(h.div, {
							className: "flex gap-1",
							initial: { x: -16 },
							animate: { x: 0 },
							exit: { x: -16 },
							transition: { duration: .1 },
							children: e.actions?.map((t, n) => _(t) ? /* @__PURE__ */ f(s, { valueToCopy: x(e.value, t.copyValue) }, `copy-${n}`) : /* @__PURE__ */ f(i, {
								label: t.label,
								children: /* @__PURE__ */ f(a, {
									size: "sm",
									variant: "neutral",
									label: t.label,
									hideLabel: !0,
									icon: t.icon,
									onClick: t.onClick
								}, `action-${n}`)
							}, `tooltip-${n}`))
						})]
					}) })
				]
			})
		]
	});
}
var b = u(function({ items: e, rowGap: n = "none" }) {
	let r = e.filter((e) => typeof e == "object");
	return /* @__PURE__ */ f("div", {
		className: t("flex flex-col items-start gap-x-3 md:flex-row md:flex-wrap md:items-center", v[n]),
		children: r.map((e, t) => /* @__PURE__ */ p(l, { children: [/* @__PURE__ */ f(y, { item: e }), t < r.length - 1 && /* @__PURE__ */ f("div", { className: "hidden h-4 w-[1px] bg-f1-border md:block" })] }, `metadata-item-${t}`))
	});
}), x = e("Metadata", b);
//#endregion
export { x as Metadata };
