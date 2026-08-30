import { FIT_VIEW_PADDING_LOOSE as e, FIT_VIEW_PADDING_TIGHT as t } from "../constants.js";
import { useGraphZoomLevel as n } from "./useGraphZoomLevel.js";
import { useCallback as r, useEffect as i, useRef as a, useState as o } from "react";
import { getViewportForBounds as s, useReactFlow as c, useStoreApi as l } from "@xyflow/react";
//#region src/patterns/F0Graph/hooks/useGraphViewport.ts
function u(e) {
	return !!e && ((e.top ?? 0) > 0 || (e.right ?? 0) > 0 || (e.bottom ?? 0) > 0 || (e.left ?? 0) > 0);
}
function d({ defaultZoom: d, zoomPreset: f, zoomThresholds: p, currentUserNodeId: m, onZoomLevelChange: h, onViewportChange: g, nodeWindowingActive: _ = !1, getContentBounds: v, getNodePosition: y, viewportInset: b }) {
	let x = c(), S = l(), C = a(b);
	C.current = b;
	let w = u(b), [T, E] = o(d), D = n(T, {
		preset: f,
		thresholds: p
	}), O = a(D);
	i(() => {
		O.current !== D && (O.current = D, h?.(D));
	}, [D, h]);
	let [k, A] = o(!1), j = a(!1), M = a(d), N = r((e) => {
		j.current || (j.current = !0, A(!0)), e.zoom !== M.current && (M.current = e.zoom, E(e.zoom)), g?.({
			x: e.x,
			y: e.y,
			zoom: e.zoom
		});
	}, [g]), P = r(() => {
		x.zoomIn({ duration: 300 });
	}, [x]), F = r(() => {
		x.zoomOut({ duration: 300 });
	}, [x]), I = r((e) => {
		let t = C.current;
		if (!u(t)) return e;
		let { width: n, height: r } = S.getState(), i = (t) => (t - t / (1 + e)) / 2, a = i(n), o = i(r);
		return {
			top: `${o + (t.top ?? 0)}px`,
			right: `${a + (t.right ?? 0)}px`,
			bottom: `${o + (t.bottom ?? 0)}px`,
			left: `${a + (t.left ?? 0)}px`
		};
	}, [S]), L = r(() => {
		let e = _ ? v?.() : null;
		if (e) {
			let n = I(t);
			if (typeof n == "number") {
				x.fitBounds(e, {
					duration: 400,
					padding: n
				});
				return;
			}
			let { width: r, height: i, minZoom: a, maxZoom: o } = S.getState();
			x.setViewport(s(e, r, i, a, o, n), { duration: 400 });
			return;
		}
		x.fitView({
			duration: 400,
			padding: I(t)
		});
	}, [
		x,
		S,
		_,
		v,
		I
	]), R = r((e, t, n = d) => {
		let r = y?.(e);
		if (!r) return !1;
		let i = C.current, a = ((i?.right ?? 0) - (i?.left ?? 0)) / 2 / n, o = ((i?.bottom ?? 0) - (i?.top ?? 0)) / 2 / n;
		return x.setCenter(r.x + r.width / 2 + a, r.y + r.height / 2 + o, {
			duration: t,
			zoom: n
		}), !0;
	}, [
		x,
		y,
		d
	]);
	return {
		zoomLevel: D,
		viewportReady: k,
		handleViewportChange: N,
		handleZoomIn: P,
		handleZoomOut: F,
		handleFitView: L,
		handleFocusUser: r(() => {
			m && (_ && R(m, 400) || x.fitView({
				nodes: [{ id: m }],
				duration: 400,
				padding: I(e)
			}));
		}, [
			m,
			x,
			_,
			R,
			I
		]),
		centerOnNode: R,
		getFitPadding: I,
		hasViewportInset: w
	};
}
//#endregion
export { d as useGraphViewport };
