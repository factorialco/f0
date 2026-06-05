import { extractClosestEdge as i } from "../../../node_modules/.pnpm/@atlaskit_pragmatic-drag-and-drop-hitbox@1.1.0/node_modules/@atlaskit/pragmatic-drag-and-drop-hitbox/dist/esm/closest-edge.js";
function s(a, t) {
  const n = t.find(
    (r) => r.data.type === "list-droppable" && r.data.id === a
  ), e = t.find(
    (r) => r.data.type === "list-card-target"
  );
  return n ? e && e.data ? { type: "sameLaneOverCard", laneTarget: n, cardTarget: e } : { type: "sameLaneOverEmptySpace", laneTarget: n, cardTarget: void 0 } : e && e.data ? { type: "differentLaneOverCard", laneTarget: void 0, cardTarget: e } : {
    type: "differentLaneOverEmptySpace",
    laneTarget: void 0,
    cardTarget: void 0
  };
}
function f(a) {
  const {
    cardTarget: t,
    fromLaneId: n,
    toLaneId: e,
    sourceId: r
  } = a, o = Number(t.data.index), d = i(t.data);
  return {
    fromLaneId: n,
    toLaneId: e,
    sourceId: r,
    position: d === "bottom" ? "below" : "above",
    indexOfTarget: o
  };
}
function p(a) {
  const {
    fromLaneId: t,
    toLaneId: n,
    sourceId: e
  } = a;
  return {
    fromLaneId: t,
    toLaneId: n,
    sourceId: e,
    indexOfTarget: null,
    position: null
  };
}
function u(a) {
  const { cardTarget: t, fromLaneId: n, toLaneId: e, sourceId: r } = a, o = Number(t.data.index), d = i(t.data);
  return {
    fromLaneId: n,
    toLaneId: e,
    sourceId: r,
    position: d === "bottom" ? "below" : "above",
    indexOfTarget: o
  };
}
function m(a) {
  const { fromLaneId: t, toLaneId: n, sourceId: e } = a;
  return {
    fromLaneId: t,
    toLaneId: n,
    sourceId: e,
    indexOfTarget: null,
    position: null
  };
}
export {
  s as findTypeOfDropForLane,
  u as optimisticDifferentLaneInsertOverCard,
  m as optimisticDifferentLaneInsertOverEmpty,
  f as optimisticSameLaneOverCard,
  p as optimisticSameLaneOverEmpty
};
