import { F0Icon as e } from "../../F0Icon/index.js";
import { OneEllipsis as t } from "../../../lib/OneEllipsis/OneEllipsis.js";
import { F0TagStatus as n } from "../../tags/F0TagStatus/index.js";
import { F0Avatar as r } from "../../avatars/F0Avatar/index.js";
import { F0TagDot as i } from "../../tags/F0TagDot/index.js";
import { F0TagPerson as a } from "../../tags/F0TagPerson/index.js";
import { F0TagRaw as o } from "../../tags/F0TagRaw/index.js";
import { SelectItem as s } from "../../../ui/Select/components/SelectItem.js";
import { jsx as c, jsxs as l } from "react/jsx-runtime";
//#region src/components/F0Select/components/SelectItem.tsx
var u = /^\+\d{1,4}$/, d = /* @__PURE__ */ new Set(), f = (e) => {
	if (e.type === "dialCode") return process.env.NODE_ENV !== "production" && !u.test(e.dialCode) && !d.has(e.dialCode) && (d.add(e.dialCode), console.warn(`[F0Select] metadata dialCode "${e.dialCode}" is not a valid dial code (expected "+" followed by 1-4 digits).`)), e.dialCode;
}, p = ({ item: u }) => {
	let d = u.tag && typeof u.tag != "string" && u.tag.type === "status";
	return /* @__PURE__ */ c(s, {
		value: String(u.value),
		disabled: u.disabled,
		children: /* @__PURE__ */ l("div", {
			className: `flex w-full gap-1.5 ${u.description ? "items-start" : "items-center"}`,
			children: [
				u.avatar && /* @__PURE__ */ c("div", {
					className: "flex shrink-0 items-center",
					children: /* @__PURE__ */ c(r, {
						avatar: u.avatar,
						size: "xs"
					})
				}),
				u.icon && /* @__PURE__ */ c("div", {
					className: "flex shrink-0 items-center text-f1-icon",
					children: /* @__PURE__ */ c(e, { icon: u.icon })
				}),
				!d && /* @__PURE__ */ l("div", {
					className: "flex min-w-0 flex-1 flex-col",
					children: [/* @__PURE__ */ l("div", {
						className: "flex min-w-0 items-baseline gap-1.5",
						children: [/* @__PURE__ */ c(t, {
							lines: 2,
							className: "font-medium",
							children: u.label
						}), u.metadata && /* @__PURE__ */ c("span", {
							className: "whitespace-nowrap text-f1-foreground-secondary",
							children: f(u.metadata)
						})]
					}), u.description && /* @__PURE__ */ c(t, {
						lines: 2,
						className: "text-f1-foreground-secondary",
						children: u.description
					})]
				}),
				u.tag && /* @__PURE__ */ c("div", {
					className: u.description ? "self-start" : "self-center",
					children: typeof u.tag == "string" ? /* @__PURE__ */ c(o, { text: u.tag }) : u.tag.type === "dot" ? /* @__PURE__ */ c(i, { ...u.tag }) : u.tag.type === "icon" ? /* @__PURE__ */ c(o, {
						text: u.tag.text,
						icon: u.tag.icon
					}) : u.tag.type === "status" ? /* @__PURE__ */ c(n, {
						text: u.tag.text,
						variant: u.tag.variant
					}) : /* @__PURE__ */ c(a, {
						name: u.tag.name,
						src: u.tag.src
					})
				})
			]
		})
	});
};
//#endregion
export { p as SelectItem };
