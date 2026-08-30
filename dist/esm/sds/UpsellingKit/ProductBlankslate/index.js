import { withDataTestId as e } from "../../../lib/data-testid/index.js";
import { cn as t } from "../../../lib/utils.js";
import { F0Icon as n } from "../../../components/F0Icon/index.js";
import r from "../../../icons/app/CheckCircle.js";
import { F0TagStatus as i } from "../../../components/tags/F0TagStatus/index.js";
import { F0AvatarModule as a } from "../../../components/avatars/F0AvatarModule/index.js";
import { F0TagRaw as o } from "../../../components/tags/F0TagRaw/index.js";
import { forwardRef as s } from "react";
import { jsx as c, jsxs as l } from "react/jsx-runtime";
//#region src/sds/UpsellingKit/ProductBlankslate/index.tsx
var u = ({ benefits: e }) => /* @__PURE__ */ c("div", {
	className: "flex flex-col gap-2",
	children: e.map((e, t) => /* @__PURE__ */ c(d, { text: e }, t))
}), d = ({ text: e }) => /* @__PURE__ */ l("div", {
	className: "flex flex-row items-start gap-2",
	children: [/* @__PURE__ */ c(n, {
		icon: r,
		size: "md",
		className: "text-f1-icon-positive"
	}), /* @__PURE__ */ c("span", { children: e })]
}), f = s(({ title: e, image: n, benefits: r, actions: s, withShadow: d = !0, module: f, moduleName: p, tag: m, promoTag: h }, g) => /* @__PURE__ */ l("div", {
	ref: g,
	className: t("bg-white flex flex-row rounded-xl border border-f1-border-secondary", d && "shadow-md"),
	children: [/* @__PURE__ */ c("div", {
		className: "aspect-auto flex-shrink-0 overflow-hidden rounded-xl py-1 pl-1",
		children: /* @__PURE__ */ c("img", {
			src: n,
			alt: "",
			className: "h-full w-full rounded-lg object-cover"
		})
	}), /* @__PURE__ */ l("div", {
		className: "flex flex-col justify-center gap-8 px-8 py-5",
		children: [/* @__PURE__ */ l("div", {
			className: "flex flex-col gap-5",
			children: [/* @__PURE__ */ l("div", {
				className: "flex flex-col gap-2",
				children: [
					/* @__PURE__ */ l("div", {
						className: "flex flex-row items-center gap-2",
						children: [f && /* @__PURE__ */ c(a, { module: f }), p && /* @__PURE__ */ c("p", {
							className: "text-base font-medium text-f1-foreground",
							children: p
						})]
					}),
					(m || h) && /* @__PURE__ */ l("div", {
						className: "flex justify-start gap-2",
						children: [m && /* @__PURE__ */ c(o, {
							icon: m.icon,
							text: m.label
						}), h && /* @__PURE__ */ c(i, {
							variant: h.variant || "positive",
							text: h.label
						})]
					}),
					/* @__PURE__ */ c("h2", {
						className: "font-bold text-xl text-f1-foreground",
						children: e
					})
				]
			}), /* @__PURE__ */ c(u, { benefits: r })]
		}), s && /* @__PURE__ */ c("div", {
			className: "flex gap-3",
			children: s
		})]
	})]
}));
f.displayName = "ProductBlankslate";
var p = e(f);
//#endregion
export { p as ProductBlankslate };
