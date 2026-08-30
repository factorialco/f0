import { withDataTestId as e } from "../../lib/data-testid/index.js";
import { cn as t } from "../../lib/utils.js";
import { F0Icon as n } from "../F0Icon/index.js";
import r from "../../icons/app/Check.js";
import { useI18n as i } from "../../lib/providers/i18n/i18n-provider.js";
import { F0AvatarEmoji as a } from "../avatars/F0AvatarEmoji/index.js";
import { F0AvatarFile as o } from "../avatars/F0AvatarFile/F0AvatarFile.js";
import { F0AvatarIcon as s } from "../avatars/F0AvatarIcon/index.js";
import { F0Avatar as c } from "../avatars/F0Avatar/index.js";
import { useReducedMotion as l } from "../../lib/a11y.js";
import { F0Link as u } from "../F0Link/F0Link.js";
import { jsx as d, jsxs as f } from "react/jsx-runtime";
import { motion as p } from "motion/react";
//#region src/components/CardSelectable/CardSelectable.tsx
function m({ avatar: e }) {
	return e.type === "emoji" ? /* @__PURE__ */ d(a, {
		emoji: e.emoji,
		size: "md"
	}) : e.type === "file" ? /* @__PURE__ */ d(o, {
		file: e.file,
		size: "md"
	}) : e.type === "icon" ? /* @__PURE__ */ d(s, {
		icon: e.icon,
		size: "md"
	}) : /* @__PURE__ */ d(c, {
		avatar: e,
		size: "md"
	});
}
function h({ checked: e }) {
	return /* @__PURE__ */ d("div", {
		className: t("flex h-5 w-5 shrink-0 items-center justify-center rounded-full transition-colors", e ? "bg-f1-background-selected-bold" : "border-2 border-solid border-f1-border bg-f1-background"),
		children: e && /* @__PURE__ */ d("div", { className: "h-2 w-2 rounded-full bg-f1-background" })
	});
}
function g({ checked: e }) {
	return /* @__PURE__ */ d("div", {
		"aria-hidden": "true",
		className: t("flex h-5 w-5 shrink-0 items-center justify-center rounded-xs transition-colors", e ? "bg-f1-background-selected-bold text-f1-foreground-inverse" : "border border-solid border-f1-border bg-f1-background"),
		children: e && /* @__PURE__ */ d(n, {
			icon: r,
			size: "sm"
		})
	});
}
function _({ checked: e }) {
	return /* @__PURE__ */ d("div", {
		"aria-hidden": "true",
		className: t("flex h-6 w-10 shrink-0 items-center rounded-full p-0.5 transition-colors", e ? "bg-f1-background-selected-bold" : "bg-f1-border"),
		children: /* @__PURE__ */ d("div", { className: t("h-5 w-5 rounded-full bg-f1-background shadow-sm transition-transform", e ? "translate-x-4" : "translate-x-0") })
	});
}
function v({ item: e, selected: n, disabled: r, multiple: a, onSelect: o, isToggle: s, grouped: c, compact: v }) {
	let { forms: y } = i(), b = l(), x = r || e.disabled, S = () => {
		x || o();
	}, C = s ? "switch" : a ? "checkbox" : "radio", w = () => d(s ? _ : a ? g : h, { checked: n }), T = !!e.selectedContent, E = e.moreInfoLink;
	return /* @__PURE__ */ f("div", {
		className: t("relative flex flex-1 flex-col overflow-hidden transition-colors", c ? "" : t("rounded-xl border border-solid", n && !s ? "border-f1-border-selected-bold bg-f1-background-selected-secondary" : "border-f1-border bg-f1-background hover:border-f1-border-hover"), x && "cursor-not-allowed opacity-50"),
		children: [
			/* @__PURE__ */ f("div", {
				role: C,
				"aria-checked": n,
				"aria-disabled": x,
				tabIndex: x ? -1 : 0,
				onClick: S,
				onKeyDown: (e) => {
					(e.key === "Enter" || e.key === " ") && !x && (e.preventDefault(), S());
				},
				className: t("flex cursor-pointer items-center gap-3", "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-inset focus-visible:ring-f1-special-ring", c ? "px-4 py-3" : v ? "p-3" : "p-4", E && "pb-0"),
				children: [
					e.avatar && /* @__PURE__ */ d(m, { avatar: e.avatar }),
					/* @__PURE__ */ d("div", {
						className: "flex min-w-0 flex-1 flex-col gap-2",
						children: /* @__PURE__ */ f("div", {
							className: "flex flex-col gap-0.5",
							children: [/* @__PURE__ */ f("span", {
								className: t("text-base text-f1-foreground", c ? "font-medium" : "font-semibold"),
								children: [e.title, e.required && /* @__PURE__ */ d("span", {
									className: "ml-0.5 text-f1-foreground-critical",
									children: "*"
								})]
							}), e.description && /* @__PURE__ */ d("span", {
								className: "text-base text-f1-foreground-secondary",
								children: e.description
							})]
						})
					}),
					w()
				]
			}),
			E && /* @__PURE__ */ f("div", {
				className: t("flex flex-row items-start gap-3 pt-2", c ? "px-4 pb-3" : v ? "px-3 pb-3" : "px-4 pb-4"),
				children: [e.avatar && /* @__PURE__ */ d("div", {
					"aria-hidden": "true",
					className: "invisible",
					children: /* @__PURE__ */ d(m, { avatar: e.avatar })
				}), /* @__PURE__ */ d(u, {
					href: E.href,
					target: "_blank",
					variant: "link",
					className: "min-h-6 items-center self-start",
					children: E.label ?? y.moreInformation
				})]
			}),
			T && /* @__PURE__ */ d(p.div, {
				initial: !1,
				animate: {
					height: n ? "auto" : 0,
					opacity: +!!n,
					visibility: n ? "visible" : "hidden"
				},
				transition: {
					duration: b ? 0 : .15,
					ease: [
						.165,
						.84,
						.44,
						1
					]
				},
				className: "overflow-hidden",
				children: /* @__PURE__ */ d("div", {
					className: "border-0 border-t border-solid border-f1-border",
					onClick: (e) => e.stopPropagation(),
					onKeyDown: (e) => e.stopPropagation(),
					children: /* @__PURE__ */ d("div", {
						className: "flex flex-col gap-2 bg-f1-background-tertiary p-4",
						children: e.selectedContent
					})
				})
			})
		]
	});
}
var y = e(v);
//#endregion
export { y as CardSelectable };
