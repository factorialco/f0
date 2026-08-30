import { cn as e } from "../../../../lib/utils.js";
import { TooltipInternal as t } from "../../../../experimental/Overlays/Tooltip/index.js";
import { formatTime24Hours as n } from "../../../../lib/date.js";
import { jsx as r } from "react/jsx-runtime";
//#region src/sds/Home/ClockIn/ClockInGraph/HorizontalBar.tsx
var i = " • ", a = (e) => {
	let t = Math.floor(e / 60), n = e % 60;
	return t ? n ? `${t}h ${n}min` : `${t}h` : `${n}min`;
}, o = (e) => {
	if (!e.from || !e.to) return;
	let t = Math.round((e.to.getTime() - e.from.getTime()) / 6e4);
	return [`${n(e.from)} – ${n(e.to)} (${a(t)})`, e.label].filter(Boolean).join(i);
};
function s({ segments: n }) {
	let i = n.map(o);
	return /* @__PURE__ */ r("div", {
		"aria-hidden": !i.some(Boolean) || void 0,
		className: "flex h-1.5 w-full flex-row items-stretch gap-0.5",
		children: n.map((n, a) => {
			let o = i[a], s = /* @__PURE__ */ r("div", {
				className: e("min-w-0 rounded-full", o && "relative origin-center after:absolute after:inset-x-0 after:-inset-y-2 after:content-[''] motion-safe:transition-transform motion-safe:duration-150 motion-safe:ease-out motion-safe:hover:scale-y-150"),
				style: {
					flex: `${n.value} 1 0%`,
					backgroundColor: n.color
				},
				role: o ? "img" : void 0,
				"aria-label": o
			}, a);
			return o ? /* @__PURE__ */ r(t, {
				label: o,
				instant: !0,
				children: s
			}, a) : s;
		})
	});
}
//#endregion
export { s as HorizontalBar, o as segmentTooltip };
