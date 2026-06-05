const n = (r, s) => {
  const t = /* @__PURE__ */ new Map();
  for (const e of r) {
    const o = String(e[s]);
    t.has(o) || t.set(o, []), t.get(o)?.push(e);
  }
  return t;
};
export {
  n as groupBy
};
