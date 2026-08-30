import { withDataTestId as e } from "../../lib/data-testid/index.js";
import { experimentalComponent as t } from "../../lib/experimental.js";
import n from "../../icons/app/Check.js";
import r from "../../icons/app/Cross.js";
import { ButtonInternal as i } from "../../components/F0Button/internal.js";
import { ChatTextarea as a } from "./components/ChatTextarea.js";
import { AiPromotionChatStateProvider as o, useAiPromotionChat as s } from "./providers/AiPromotionChatStateProvider.js";
import { SidebarWindow as c } from "./components/ChatWindow.js";
import { CustomButton as l } from "./components/CustomButton.js";
import u from "./OneIcon.js";
import { jsx as d, jsxs as f } from "react/jsx-runtime";
//#region src/experimental/AiPromotionChat/index.tsx
var p = ({ enabled: e = !1, greeting: t, title: n, description: r, benefits: i, actions: a, onShow: s, onHide: c, children: l }) => /* @__PURE__ */ d(o, {
	enabled: e,
	greeting: t,
	title: n,
	description: r,
	benefits: i,
	actions: a,
	onShow: s,
	onHide: c,
	children: l
}), m = e(t("AiPromotionChat", () => {
	let { enabled: e, greeting: t, title: o, description: p, benefits: m, actions: h, setOpen: g, onHide: _ } = s();
	return e ? /* @__PURE__ */ f(c, { children: [
		/* @__PURE__ */ d("div", {
			className: "flex items-center justify-end p-3 pb-0",
			children: /* @__PURE__ */ d(i, {
				variant: "ghost",
				hideLabel: !0,
				label: "",
				icon: r,
				onClick: () => {
					g(!1), _?.();
				}
			})
		}),
		/* @__PURE__ */ d("div", {
			className: "flex-1 content-center overflow-y-auto",
			children: /* @__PURE__ */ f("div", {
				className: "flex flex-col gap-4 p-6 pt-3",
				children: [
					/* @__PURE__ */ f("div", {
						className: "flex flex-col gap-4",
						children: [/* @__PURE__ */ d(u, {
							spin: !0,
							size: "lg"
						}), /* @__PURE__ */ f("div", { children: [/* @__PURE__ */ d("p", {
							className: "text-lg font-medium text-f1-foreground-secondary",
							children: t
						}), /* @__PURE__ */ d("h1", {
							className: "text-2xl font-semibold text-f1-foreground",
							children: o
						})] })]
					}),
					p && /* @__PURE__ */ d("p", {
						className: "text-md text-f1-foreground-secondary",
						children: p
					}),
					m?.length && /* @__PURE__ */ d("ul", {
						className: "flex flex-col gap-2",
						children: m.map((e, t) => /* @__PURE__ */ f("li", {
							className: "flex items-center gap-1",
							children: [/* @__PURE__ */ d(n, { className: "h-5 w-5 flex-shrink-0" }), /* @__PURE__ */ f("span", {
								className: "text-md text-f1-foreground",
								children: [
									e.noBoldText,
									" ",
									/* @__PURE__ */ d("strong", { children: e.boldText })
								]
							})]
						}, t))
					}),
					h?.length && /* @__PURE__ */ d("div", {
						className: "flex flex-col gap-3 pt-2",
						children: h.map((e, t) => /* @__PURE__ */ d(l, {
							action: e,
							onClose: () => g(!1)
						}, t))
					})
				]
			})
		}),
		/* @__PURE__ */ d("div", {
			className: "m-3 mt-2 flex-shrink-0",
			children: /* @__PURE__ */ d(a, {})
		})
	] }) : null;
})), h = e(t("AiPromotionChatProvider", p));
//#endregion
export { m as AiPromotionChat, h as AiPromotionChatProvider };
