import { extractClosestEdge as e } from "../../../_embedded/Cky57_ZF.js";
//#region src/ui/Kanban/components/kanbanLane.handlers.ts
function t(e, t) {
	let n = t.find((t) => t.data.type === "list-droppable" && t.data.id === e), r = t.find((e) => e.data.type === "list-card-target");
	return n ? r && r.data ? {
		type: "sameLaneOverCard",
		laneTarget: n,
		cardTarget: r
	} : {
		type: "sameLaneOverEmptySpace",
		laneTarget: n,
		cardTarget: void 0
	} : r && r.data ? {
		type: "differentLaneOverCard",
		laneTarget: void 0,
		cardTarget: r
	} : {
		type: "differentLaneOverEmptySpace",
		laneTarget: void 0,
		cardTarget: void 0
	};
}
function n(t) {
	let { resourceIndexOnLane: n, cardTarget: r, sourceItem: i, fromLaneId: a, toLaneId: o, sourceId: s, setItems: c } = t, l = Number(r.data.index), u = e(r.data);
	return c((e) => {
		let t = [...e];
		return t.splice(n, 1), t.splice(l + (n > l ? 0 : -1) + +(u === "bottom"), 0, i), t;
	}), {
		fromLaneId: a,
		toLaneId: o,
		sourceId: s,
		position: u === "bottom" ? "below" : "above",
		indexOfTarget: l
	};
}
function r(e) {
	let { resourceIndexOnLane: t, sourceItem: n, fromLaneId: r, toLaneId: i, sourceId: a, setItems: o } = e;
	return o((e) => {
		let r = [...e];
		return r.splice(t, 1), r.splice(0, 0, n), r;
	}), {
		fromLaneId: r,
		toLaneId: i,
		sourceId: a,
		indexOfTarget: null,
		position: null
	};
}
function i(t) {
	let { cardTarget: n, sourceItem: r, fromLaneId: i, toLaneId: a, sourceId: o, setItems: s } = t, c = Number(n.data.index), l = e(n.data);
	return s((e) => {
		let t = [...e];
		return t.splice(c + +(l === "bottom"), 0, r), t;
	}), {
		fromLaneId: i,
		toLaneId: a,
		sourceId: o,
		position: l === "bottom" ? "below" : "above",
		indexOfTarget: c
	};
}
function a(e) {
	let { sourceItem: t, fromLaneId: n, toLaneId: r, sourceId: i, setItems: a } = e;
	return a((e) => {
		let n = [...e];
		return n.splice(0, 0, t), n;
	}), {
		fromLaneId: n,
		toLaneId: r,
		sourceId: i,
		indexOfTarget: null,
		position: null
	};
}
//#endregion
export { t as findTypeOfDropForLane, i as optimisticDifferentLaneInsertOverCard, a as optimisticDifferentLaneInsertOverEmpty, n as optimisticSameLaneOverCard, r as optimisticSameLaneOverEmpty };
