function C(i, n) {
  const r = /* @__PURE__ */ new Set();
  if (!n) return r;
  function e(t, c, l = []) {
    for (const o of t) {
      if (o.id === c)
        return l.forEach((u) => r.add(u)), !0;
      const f = [...l, o.id];
      if (o.children && e(o.children, c, f))
        return r.add(o.id), !0;
    }
    return !1;
  }
  return e(i, n), r;
}
function w(i, n) {
  if (!n.trim())
    return i;
  const r = n.toLowerCase().trim();
  function e(t) {
    const c = t.label.toLowerCase().includes(r), l = t.children ? t.children.map(e).filter(Boolean) : void 0;
    return c || l && l.length > 0 ? {
      ...t,
      children: l && l.length > 0 ? l : void 0
    } : null;
  }
  return i.map(e).filter(Boolean);
}
function d(i, n) {
  function r(e, t, c = []) {
    for (const l of e) {
      if (l.id === t)
        return { item: l, parentPath: c };
      if (l.children) {
        const o = r(l.children, t, [...c, l.id]);
        if (o) return o;
      }
    }
    return null;
  }
  return r(i, n);
}
function s(i, n) {
  return i.map((r) => {
    if (r.id === n)
      return null;
    if (r.children) {
      const e = s(r.children, n);
      return {
        ...r,
        children: e.length > 0 ? e : void 0
      };
    }
    return r;
  }).filter(Boolean);
}
function P(i, n, r, e) {
  if (r === null) {
    const c = [...i];
    return c.splice(e, 0, n), c;
  }
  function t(c, l, o) {
    return c.map((f) => {
      if (f.id === l) {
        const h = [...f.children || []];
        return h.splice(o, 0, n), {
          ...f,
          children: h
        };
      }
      return f.children ? {
        ...f,
        children: t(f.children, l, o)
      } : f;
    });
  }
  return t(i, r, e);
}
function T(i, n, r) {
  if (r === null) return !1;
  if (r === n) return !0;
  if (!d(i, n)) return !1;
  function t(l, o, f) {
    for (const u of l)
      if (u.id === f || u.children && t(u.children, o, f))
        return !0;
    return !1;
  }
  const c = d(i, n);
  return c?.item.children ? t(c.item.children, n, r) : !1;
}
function a(i) {
  return i.map((n) => ({
    id: n.id,
    ...n.children && { children: a(n.children) }
  }));
}
function p(i, n, r) {
  return i.map((e) => e.id === n ? r : e.children ? {
    ...e,
    children: p(e.children, n, r)
  } : e);
}
function v(i, n, r, e) {
  const t = d(i, n);
  if (!t) return e;
  let c = e;
  if (r !== null) {
    if (d(i, r)) {
      const o = t.parentPath;
      if (o.length > 0 && o[o.length - 1] === r) {
        const f = d(
          i,
          o[o.length - 1]
        );
        if (f) {
          const u = f.item.children?.findIndex(
            (h) => h.id === n
          );
          u !== void 0 && u < e && (c = e - 1);
        }
      }
    }
  } else
    t.parentPath.length === 0 && i.findIndex((f) => f.id === n) < e && (c = e - 1);
  return c;
}
export {
  v as calculateAdjustedIndex,
  a as convertToIds,
  w as filterTree,
  C as findExpandedPath,
  d as findItemInTree,
  P as insertItemInTree,
  s as removeItemFromTree,
  p as updateItemInTree,
  T as wouldCreateCycle
};
