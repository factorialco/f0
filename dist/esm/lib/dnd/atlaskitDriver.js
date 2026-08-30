import { draggable as e, dropTargetForElements as t, monitorForElements as n } from "@atlaskit/pragmatic-drag-and-drop/element/adapter";
import { attachClosestEdge as r } from "@atlaskit/pragmatic-drag-and-drop-hitbox/closest-edge";
import { combine as i } from "@atlaskit/pragmatic-drag-and-drop/combine";
//#region src/lib/dnd/atlaskitDriver.ts
function a(a) {
	let o = /* @__PURE__ */ new Set();
	return i(n({
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
		registerDraggable(t, { payload: n, disabled: r, handle: i }) {
			return r ? () => {} : e({
				element: t,
				getInitialData: () => ({
					...n,
					instanceId: a
				}),
				dragHandle: i ?? void 0
			});
		},
		registerDroppable(e, { id: n }) {
			return t({
				element: e,
				getData: ({ input: e, element: t }) => r({
					type: "list-droppable",
					index: 0,
					id: n
				}, {
					input: e,
					element: t,
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
