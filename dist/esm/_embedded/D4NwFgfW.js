import { require_dist as e } from "./DyCG63P1.js";
import { isHoneyPotElement as t } from "./DjdiB0gs.js";
import { getElementFromPointWithoutHoneypot as n } from "./CI8AaMmu.js";
import r from "./D3ikuXMl.js";
import { isLeavingWindow as i } from "./B8gLyjB1.js";
import { getBindingsForBrokenDrags as a } from "./hK6-IYUN.js";
import { getInput as o } from "./CTMA7tag.js";
import { makeDispatch as s } from "./d9horkIK.js";
//#region ../../node_modules/.pnpm/@atlaskit+pragmatic-drag-and-drop@1.7.4/node_modules/@atlaskit/pragmatic-drag-and-drop/dist/esm/ledger/lifecycle-manager.js
var c = e(), l = { isActive: !1 };
function u() {
	return !l.isActive;
}
function d(e) {
	return e.dataTransfer ? e.dataTransfer.setDragImage.bind(e.dataTransfer) : null;
}
function f(e) {
	var t = e.current, n = e.next;
	if (t.length !== n.length) return !0;
	for (var r = 0; r < t.length; r++) if (t[r].element !== n[r].element) return !0;
	return !1;
}
function p(e) {
	var p = e.event, g = e.dragType, _ = e.getDropTargetsOver, v = e.dispatchEvent;
	if (!u()) return;
	var y = h({
		event: p,
		dragType: g,
		getDropTargetsOver: _
	});
	l.isActive = !0;
	var b = { current: y };
	m({
		event: p,
		current: y.dropTargets
	});
	var x = s({
		source: g.payload,
		dispatchEvent: v,
		initial: y
	});
	function S(e) {
		var t = f({
			current: b.current.dropTargets,
			next: e.dropTargets
		});
		b.current = e, t && x.dragUpdate({ current: b.current });
	}
	function C(e) {
		var r = o(e), i = _({
			target: t(e.target) ? n({
				x: r.clientX,
				y: r.clientY
			}) : e.target,
			input: r,
			source: g.payload,
			current: b.current.dropTargets
		});
		i.length && (e.preventDefault(), m({
			event: e,
			current: i
		})), S({
			dropTargets: i,
			input: r
		});
	}
	function w() {
		b.current.dropTargets.length && S({
			dropTargets: [],
			input: b.current.input
		}), x.drop({
			current: b.current,
			updatedSourcePayload: null
		}), T();
	}
	function T() {
		l.isActive = !1, E();
	}
	var E = (0, c.bindAll)(window, [
		{
			type: "dragover",
			listener: function(e) {
				C(e), x.drag({ current: b.current });
			}
		},
		{
			type: "dragenter",
			listener: C
		},
		{
			type: "dragleave",
			listener: function(e) {
				i({ dragLeave: e }) && (S({
					input: b.current.input,
					dropTargets: []
				}), g.startedFrom === "external" && w());
			}
		},
		{
			type: "drop",
			listener: function(e) {
				if (b.current = {
					dropTargets: b.current.dropTargets,
					input: o(e)
				}, !b.current.dropTargets.length) {
					w();
					return;
				}
				e.preventDefault(), m({
					event: e,
					current: b.current.dropTargets
				}), x.drop({
					current: b.current,
					updatedSourcePayload: g.type === "external" ? g.getDropPayload(e) : null
				}), T();
			}
		},
		{
			type: "dragend",
			listener: function(e) {
				b.current = {
					dropTargets: b.current.dropTargets,
					input: o(e)
				}, w();
			}
		}
	].concat(r(a({ onDragEnd: w }))), { capture: !0 });
	x.start({ nativeSetDragImage: d(p) });
}
function m(e) {
	var t = e.event, n = e.current[0]?.dropEffect;
	n != null && t.dataTransfer && (t.dataTransfer.dropEffect = n);
}
function h(e) {
	var t = e.event, n = e.dragType, r = e.getDropTargetsOver, i = o(t);
	return n.startedFrom === "external" ? {
		input: i,
		dropTargets: []
	} : {
		input: i,
		dropTargets: r({
			input: i,
			source: n.payload,
			target: t.target,
			current: []
		})
	};
}
var g = {
	canStart: u,
	start: p
};
//#endregion
export { g as lifecycle };
