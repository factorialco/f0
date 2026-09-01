import { withDataTestId as e } from "../../../lib/data-testid/index.js";
import { experimentalComponent as t } from "../../../lib/experimental.js";
import { cn as n } from "../../../lib/utils.js";
import r from "../../../icons/app/Menu.js";
import { F0Button as i } from "../../../components/F0Button/F0Button.js";
import { F0AvatarPerson as a } from "../../../components/avatars/F0AvatarPerson/index.js";
import { OneSwitch as o } from "../../../experimental/AiPromotionChat/OneSwitch.js";
import { useSidebar as s } from "../../../patterns/ApplicationFrame/FrameProvider.js";
import { F0OneSwitch as c } from "../../../kits/ai/F0OneSwitch/F0OneSwitch.js";
import { F0AvatarPulse as l } from "../F0AvatarPulse/F0AvatarPulse.js";
import { cva as u } from "cva";
import { jsx as d, jsxs as f } from "react/jsx-runtime";
//#region src/sds/Home/DaytimePage/index.tsx
var p = u({
	base: "pointer-events-none absolute inset-0 h-screen max-h-[1000px] opacity-[0.08]",
	variants: { period: {
		morning: "bg-gradient-to-bl from-[#E51943] from-20% via-[#F97316] via-35% to-transparent to-50%",
		afternoon: "bg-gradient-to-bl from-[#5596F6] from-20% via-[#10B881] via-35% to-transparent to-50%",
		evening: "bg-gradient-to-bl from-[#3739A8] from-20% via-[#CB6687] via-35% to-transparent to-50%"
	} },
	defaultVariants: { period: "morning" }
});
function m({ children: e, header: t, period: u, embedded: m = !1, hideOneSwitch: h = !1 }) {
	let { sidebarState: g, toggleSidebar: _, isSmallScreen: v } = s();
	return /* @__PURE__ */ f("div", {
		className: `relative flex w-full flex-col overflow-hidden border border-solid border-f1-border-secondary ${m ? "" : "xs:rounded-xl"} bg-f1-special-page shadow`,
		children: [
			/* @__PURE__ */ d("div", { className: p({ period: u }) }),
			t && /* @__PURE__ */ f("div", {
				className: "flex flex-row items-center justify-between pr-6 @container",
				children: [/* @__PURE__ */ f("div", {
					className: "flex flex-row items-center gap-2 px-5 py-4 @5xl:px-page",
					children: [(v || g === "hidden") && /* @__PURE__ */ d(i, {
						variant: "ghost",
						onClick: () => _(),
						label: "Open main menu",
						icon: r,
						hideLabel: !0
					}), /* @__PURE__ */ f("div", {
						className: n("flex flex-row items-center", v ? "gap-1.5" : "gap-3"),
						children: [t?.onPulseClick ? /* @__PURE__ */ d(l, {
							src: t.employeeAvatar,
							firstName: t.employeeFirstName,
							lastName: t.employeeLastName,
							pulse: t.pulse,
							onPulseClick: t.onPulseClick
						}) : /* @__PURE__ */ d(a, {
							src: t.employeeAvatar,
							firstName: t.employeeFirstName,
							lastName: t.employeeLastName,
							size: v ? "small" : t.description ? "large" : "medium"
						}), /* @__PURE__ */ f("div", {
							className: "flex flex-col",
							children: [/* @__PURE__ */ d("p", {
								className: n(v ? "text-lg" : "text-2xl", "font-semibold text-f1-foreground"),
								children: t.title
							}), t.description && /* @__PURE__ */ d("p", {
								className: n(v ? "text-md" : "text-lg", "text-f1-foreground-secondary"),
								children: t.description
							})]
						})]
					})]
				}), /* @__PURE__ */ f("div", { children: [!h && /* @__PURE__ */ d(c, {}), /* @__PURE__ */ d(o, {})] })]
			}),
			/* @__PURE__ */ d("div", {
				className: n("isolate flex w-full flex-1 flex-col overflow-y-auto overflow-x-hidden [&>*]:flex-1", v && "-mt-3"),
				children: e
			})
		]
	});
}
m.displayName = "DaytimePage";
var h = e(t("DaytimePage", m));
//#endregion
export { h as DaytimePage };
