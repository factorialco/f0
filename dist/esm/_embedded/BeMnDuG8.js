import e from "./DI_QKvND.js";
import { require_dist as t } from "./DyCG63P1.js";
import { getElementFromPointWithoutHoneypot as n } from "./CI8AaMmu.js";
import { makeHoneyPotFix as r } from "./DIDIj-mF.js";
import { once as i } from "./auabBO2e.js";
import { getInput as a } from "./CTMA7tag.js";
import { combine as o } from "./B-6-8PVE.js";
import { addAttribute as s } from "./DCgcmaLB.js";
import { makeAdapter as c } from "./BwFnfaFO.js";
import { androidFallbackText as l, isAndroid as u } from "./DFonUhaZ.js";
import { textMediaType as d } from "./BUPKAWbS.js";
import "./CA5pV3AP.js";
import { elementAdapterNativeDataKey as f } from "./pQKmRnrc.js";
//#region ../../node_modules/.pnpm/@atlaskit+pragmatic-drag-and-drop@1.7.4/node_modules/@atlaskit/pragmatic-drag-and-drop/dist/esm/adapter/element-adapter.js
var p = t(), m = /* @__PURE__ */ new WeakMap();
function h(e) {
	return m.set(e.element, e), function() {
		m.delete(e.element);
	};
}
var g = r(), _ = c({
	typeKey: "element",
	defaultDropEffect: "move",
	mount: function(t) {
		return o(g.bindEvents(), (0, p.bind)(document, {
			type: "dragstart",
			listener: function(r) {
				if (t.canStart(r) && !r.defaultPrevented) {
					if (!r.dataTransfer) {
						process.env.NODE_ENV !== "production" && console.warn("\n              It appears as though you have are not testing DragEvents correctly.\n\n              - If you are unit testing, ensure you have polyfilled DragEvent.\n              - If you are browser testing, ensure you are dispatching drag events correctly.\n\n              Please see our testing guides for more information:\n              https://atlassian.design/components/pragmatic-drag-and-drop/core-package/testing\n            ".replace(/ {2}/g, ""));
						return;
					}
					var i = r.target;
					if (!(i instanceof HTMLElement)) return null;
					var o = m.get(i);
					if (!o) return null;
					var s = a(r), c = {
						element: o.element,
						dragHandle: o.dragHandle ?? null,
						input: s
					};
					if (o.canDrag && !o.canDrag(c)) return r.preventDefault(), null;
					if (o.dragHandle) {
						var p = n({
							x: s.clientX,
							y: s.clientY
						});
						if (!o.dragHandle.contains(p)) return r.preventDefault(), null;
					}
					var h = o.getInitialDataForExternal?.call(o, c) ?? null;
					if (h) for (var g = 0, _ = Object.entries(h); g < _.length; g++) {
						var v = e(_[g], 2), y = v[0], b = v[1];
						r.dataTransfer.setData(y, b ?? "");
					}
					u() && !r.dataTransfer.types.includes("text/plain") && !r.dataTransfer.types.includes("text/uri-list") && r.dataTransfer.setData(d, l), r.dataTransfer.setData(f, "");
					var x = {
						type: "element",
						payload: {
							element: o.element,
							dragHandle: o.dragHandle ?? null,
							data: o.getInitialData?.call(o, c) ?? {}
						},
						startedFrom: "internal"
					};
					t.start({
						event: r,
						dragType: x
					});
				}
			}
		}));
	},
	dispatchEventToSource: function(e) {
		var t, n, r = e.eventName, i = e.payload;
		(t = m.get(i.source.element)) == null || (n = t[r]) == null || n.call(t, i);
	},
	onPostDispatch: g.getOnPostDispatch()
}), v = _.dropTarget, y = _.monitor;
function b(e) {
	if (process.env.NODE_ENV !== "production" && e.dragHandle && !e.element.contains(e.dragHandle) && console.warn("Drag handle element must be contained in draggable element", {
		element: e.element,
		dragHandle: e.dragHandle
	}), process.env.NODE_ENV !== "production") {
		var t = m.get(e.element);
		t && console.warn("You have already registered a `draggable` on the same element", {
			existing: t,
			proposed: e
		});
	}
	var n = o(_.registerUsage(), h(e), s(e.element, {
		attribute: "draggable",
		value: "true"
	}));
	return i(n);
}
//#endregion
export { b as draggable, v as dropTargetForElements, y as monitorForElements };
