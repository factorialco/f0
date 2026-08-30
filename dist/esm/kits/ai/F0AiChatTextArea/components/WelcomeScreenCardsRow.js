import { F0CardHorizontal as e } from "../../../../experimental/F0CardHorizontal/F0CardHorizontal.js";
import { jsx as t } from "react/jsx-runtime";
var n = ({ cards: n }) => n.length === 0 ? null : /* @__PURE__ */ t("div", {
	className: "grid w-full grid-cols-2 gap-3",
	children: n.slice(0, 4).map((n) => /* @__PURE__ */ t(e, {
		avatar: {
			type: "icon",
			icon: n.icon
		},
		title: n.title,
		description: n.description,
		onClick: n.onClick
	}, n.id))
});
//#endregion
export { n as WelcomeScreenCardsRow };
