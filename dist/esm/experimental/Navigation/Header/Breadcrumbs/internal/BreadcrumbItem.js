import { cn as e } from "../../../../../lib/utils.js";
import { Link as t } from "../../../../../lib/linkHandler.js";
import { F0AvatarModule as n } from "../../../../../components/avatars/F0AvatarModule/index.js";
import { getBreadcrumbKey as r } from "../getBreadcrumbKey.js";
import { BreadcrumbSelect as i } from "./BreadcrumbSelect/index.js";
import { BreadcrumbSkeleton as a } from "./BreadcrumbSkeleton.js";
import { BreadcrumbItem as o, BreadcrumbLink as s, BreadcrumbPage as c } from "../../../../../ui/breadcrumb.js";
import { BreadcrumbCollectionSelect as l } from "./BreadcrumbCollectionSelect/index.js";
import { BreadcrumbSeparator as u } from "./BreadcrumbSeparator.js";
import { forwardRef as d } from "react";
import { Fragment as f, jsx as p, jsxs as m } from "react/jsx-runtime";
import { motion as h } from "motion/react";
//#region src/experimental/Navigation/Header/Breadcrumbs/internal/BreadcrumbItem.tsx
var g = d(({ item: e, isLast: t, isOnly: n = !1, isFirst: i = !1, children: a }, s) => /* @__PURE__ */ m(o, {
	ref: s,
	children: [
		!i && /* @__PURE__ */ p(u, {}),
		/* @__PURE__ */ p(_, {
			item: e,
			isLast: t,
			isOnly: n,
			isFirst: i
		}),
		a
	]
}, r(e)));
g.displayName = "BreadcrumbItem";
var _ = d(({ item: r, isLast: o, isOnly: u = !1, isFirst: d = !1 }, g) => {
	let _ = "loading" in r && r.loading, v = _ ? "loading" : "type" in r && r.type ? r.type : o || u ? "page" : "link", y = /* @__PURE__ */ m(h.div, {
		layoutId: `breadcrumb-${r.id}`,
		className: e("flex items-center gap-2 px-1.5", d && "pl-0", u && "text-2xl font-semibold"),
		transition: { duration: .15 },
		children: [!_ && "module" in r && r.module && (u || d) && /* @__PURE__ */ p(n, {
			module: r.module,
			size: u ? "md" : "xs"
		}), /* @__PURE__ */ p("span", {
			className: "truncate",
			children: !_ && "label" in r ? r.label : ""
		})]
	}), b = {
		loading: /* @__PURE__ */ p(a, {}),
		select: "type" in r && r.type === "select" && (r.options || r.source) && /* @__PURE__ */ p(f, { children: /* @__PURE__ */ p(i, {
			label: r.label,
			hideLabel: !0,
			source: r.source,
			options: r.options,
			mapOptions: r.mapOptions,
			defaultItem: r.defaultItem,
			clearable: !1,
			onChange: r.onChange,
			value: r.value,
			showSearchBox: r.searchbox
		}) }),
		"collection-select": "type" in r && r.type === "collection-select" && /* @__PURE__ */ p(l, { item: r }),
		page: /* @__PURE__ */ p(c, {
			"aria-hidden": "true",
			className: "p-0",
			children: y
		}),
		link: /* @__PURE__ */ p(s, {
			asChild: !0,
			className: "p-0",
			children: /* @__PURE__ */ p(t, {
				..."href" in r && !("type" in r) ? r : {},
				className: "block",
				children: y
			})
		})
	}, x = v === "select" || v === "collection-select";
	return /* @__PURE__ */ p(h.div, {
		ref: g,
		layout: !x,
		className: e(_ && "max-w-40"),
		transition: { duration: .15 },
		children: b[v]
	});
});
_.displayName = "BreadcrumbContent";
//#endregion
export { g as BreadcrumbItem };
