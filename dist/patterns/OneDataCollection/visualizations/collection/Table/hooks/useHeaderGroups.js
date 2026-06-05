import { useMemo as p } from "react";
const l = "border-0 border-r border-solid border-f1-border-secondary", d = (o, e) => {
  const r = [];
  return o.forEach((n, t) => {
    const s = n.headerGroupId;
    if (!s) {
      r.push({
        type: "ungrouped",
        columnIndices: [t]
      });
      return;
    }
    const u = r[r.length - 1];
    u && u.type === "group" && u.id === s ? (u.colSpan++, u.columnIndices.push(t)) : r.push({
      colSpan: 1,
      id: s,
      type: "group",
      columnIndices: [t],
      label: e[s] ?? s
    });
  }), r;
}, i = (o, e) => p(() => !e || !o.some((n) => n.headerGroupId) ? null : d(o, e), [o, e]);
export {
  d as computeHeaderGroups,
  l as groupBorderClass,
  i as useHeaderGroups
};
