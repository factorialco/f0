import { cn as e, focusRing as t } from "../../../../lib/utils.js";
import { F0Icon as n } from "../../../../components/F0Icon/index.js";
import r from "../../../../icons/app/ChevronDown.js";
import i from "../../../../icons/app/Circle.js";
import { useI18n as a } from "../../../../lib/providers/i18n/i18n-provider.js";
import { Skeleton as o } from "../../../../ui/skeleton.js";
import { OneEllipsis as s } from "../../../../lib/OneEllipsis/PlainEllipsis.js";
import { F0AvatarCompany as c } from "../../../../components/avatars/F0AvatarCompany/index.js";
import { F0Select as l } from "../../../../F0Select.js";
import { useMemo as u, useState as d } from "react";
import { jsx as f, jsxs as p } from "react/jsx-runtime";
import { motion as m } from "motion/react";
//#region src/patterns/Navigation/Sidebar/CompanySelector/index.tsx
function h({ companies: e, selected: t, onChange: n, isLoading: r = !1, withNotification: i = !1, additionalOptions: a = [] }) {
	let s = u(() => e.find((e) => e.id === t) || e[0], [e, t]);
	return r ? /* @__PURE__ */ p("div", {
		className: "flex w-fit items-center gap-2 p-1.5",
		children: [/* @__PURE__ */ f(o, { className: "size-6" }), /* @__PURE__ */ f(o, { className: "h-3 w-14" })]
	}) : e.length + (a?.length || 0) === 1 ? /* @__PURE__ */ f("div", {
		className: "p-1.5",
		style: { maxWidth: "168px" },
		children: /* @__PURE__ */ f(_, {
			company: s,
			withNotification: i
		})
	}) : /* @__PURE__ */ f("div", {
		className: "min-w-0 flex-1",
		children: /* @__PURE__ */ f(g, {
			companies: e,
			selected: s,
			onChange: n,
			additionalOptions: a,
			children: /* @__PURE__ */ f(_, {
				company: s,
				withNotification: i
			})
		})
	});
}
var g = ({ companies: i, selected: o, onChange: s, children: c, additionalOptions: h = [] }) => {
	let g = a(), [_, v] = d(!1), y = u(() => [
		...i.map((e) => ({
			value: e.id,
			label: e.name,
			avatar: {
				type: "company",
				name: e.name,
				src: e.logo,
				"aria-label": `${e.name} logo`
			}
		})),
		...h.length ? [{ type: "separator" }] : [],
		...h
	], [i, h]);
	return /* @__PURE__ */ f(l, {
		label: g.navigation.sidebar.companySelector.label,
		hideLabel: !0,
		options: y,
		value: o.id,
		onChange: (e) => {
			let t = h?.find((t) => t.value === e);
			if (t?.onClick) {
				t.onClick();
				return;
			}
			s(e);
		},
		placeholder: g.navigation.sidebar.companySelector.placeholder,
		open: _,
		onOpenChange: v,
		children: /* @__PURE__ */ p("div", {
			className: e("group flex w-fit max-w-full flex-nowrap items-center justify-center gap-1 rounded p-1.5 text-f1-foreground transition-colors hover:bg-f1-background-hover data-[state=open]:bg-f1-background-hover", t()),
			"data-testid": "company-selector-button",
			tabIndex: 0,
			title: o?.name,
			children: [c, /* @__PURE__ */ f("div", {
				className: "flex w-5 shrink-0 items-center justify-center",
				children: /* @__PURE__ */ f("div", {
					className: "flex h-3 w-3 items-center justify-center rounded-2xs bg-f1-background-secondary transition-all",
					children: /* @__PURE__ */ f(m.div, {
						animate: { rotate: _ ? 180 : 0 },
						transition: { duration: .2 },
						className: "flex h-3 w-3 shrink-0 items-center justify-center text-f1-icon-bold",
						children: /* @__PURE__ */ f(n, {
							icon: r,
							size: "xs"
						})
					})
				})
			})]
		})
	});
}, _ = ({ company: t, withNotification: n = !1 }) => /* @__PURE__ */ p("div", {
	className: e("flex min-w-0 max-w-full flex-1 items-center gap-2 overflow-hidden text-lg font-semibold text-f1-foreground transition-colors"),
	children: [/* @__PURE__ */ f(c, {
		name: t?.name?.[0],
		src: t?.logo,
		size: "sm",
		badge: n ? {
			icon: i,
			type: "highlight"
		} : void 0
	}), /* @__PURE__ */ f(s, {
		tag: "span",
		children: t?.name ?? ""
	})]
});
//#endregion
export { h as CompanySelector };
