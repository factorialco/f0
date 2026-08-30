import { combine as e } from "../../_embedded/B-6-8PVE.js";
import { draggable as t, dropTargetForElements as n, monitorForElements as r } from "../../_embedded/BeMnDuG8.js";
import "../../_embedded/nR-CGXgB.js";
import { attachClosestEdge as i } from "../../_embedded/Cky57_ZF.js";
//#region src/lib/dnd/atlaskitDriver.ts
function a(a) {
	let o = /* @__PURE__ */ new Set();
	return e(r({
		canMonitor(e) {
			return e.source.data.instanceId === a;
		},
		onDragStart(e) {
			let t = e.source.data;
			o.forEach((e) => e({
				phase: "start",
				source: t
			}));
		},
		onDrop(e) {
			let t = e.source.data;
			o.forEach((e) => e({
				phase: "drop",
				source: t
			}));
		},
		onDropTargetChange(e) {
			let t = e.source.data;
			o.forEach((e) => e({
				phase: "over",
				source: t
			}));
		}
	})), {
		registerDraggable(e, { payload: n, disabled: r, handle: i }) {
			return r ? () => {} : t({
				element: e,
				getInitialData: () => ({
					...n,
					instanceId: a
				}),
				dragHandle: i ?? void 0
			});
		},
		registerDroppable(e, { id: t }) {
			return n({
				element: e,
				getData: ({ input: e, element: n }) => i({
					type: "list-droppable",
					index: 0,
					id: t
				}, {
					input: e,
					element: n,
					allowedEdges: ["top", "bottom"]
				})
			});
		},
		subscribe(e) {
			return o.add(e), () => o.delete(e);
		}
	};
}
//#endregion
export { a as createAtlaskitDriver };
