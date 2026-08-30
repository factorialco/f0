import { F0Icon as e } from "../../../components/F0Icon/index.js";
import t from "../../../icons/app/ExternalLink.js";
import n from "../../../icons/app/Search.js";
import { app_exports as r } from "../../../icons/app/index.js";
import { useI18n as i } from "../../../lib/providers/i18n/i18n-provider.js";
import { Action as a } from "../../../ui/Action/Action.js";
import { CollapsibleMessage as o } from "./components/CollapsibleMessage.js";
import { jsx as s, jsxs as c } from "react/jsx-runtime";
//#region src/kits/ai/F0AiMessageSources/F0AiMessageSources.tsx
var l = (e) => r[e] ?? t, u = ({ iconName: t }) => t ? /* @__PURE__ */ s("div", {
	className: "mr-1 flex items-center justify-center",
	children: /* @__PURE__ */ s(e, {
		icon: l(t),
		size: "md",
		color: "default"
	})
}) : null;
function d({ sources: e, title: t }) {
	let r = i();
	if (!e || e.length === 0 || !Array.isArray(e)) return null;
	let l = t ?? r.ai.resourcesGroupTitle;
	return /* @__PURE__ */ s(o, {
		icon: n,
		title: l,
		children: /* @__PURE__ */ s("div", {
			className: "flex flex-col gap-1 rounded-lg border border-solid border-f1-border-secondary p-2",
			children: e.map((e, t) => {
				let n = /* @__PURE__ */ s(u, { iconName: e.icon });
				return e.link ? /* @__PURE__ */ s(a, {
					"aria-label": e.title,
					href: e.link,
					size: "md",
					target: e.targetBlank ? "_blank" : "_self",
					variant: "ghost",
					className: "justify-start truncate hover:bg-f1-background-hover",
					compact: !0,
					prepend: n,
					children: /* @__PURE__ */ s("div", {
						className: "flex w-full items-start",
						children: e.title
					})
				}, t) : /* @__PURE__ */ c("div", {
					className: "flex min-w-0 flex-1 items-center gap-1 px-[6px] py-1.5 font-medium text-f1-foreground",
					children: [n, e.title]
				}, t);
			})
		})
	});
}
d.displayName = "F0AiMessageSources";
//#endregion
export { d as F0AiMessageSources };
