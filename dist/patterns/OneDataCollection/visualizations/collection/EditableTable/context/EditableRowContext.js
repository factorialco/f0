import { jsx as w } from "react/jsx-runtime";
import { useState as m, useRef as L, useEffect as p, useCallback as x, createContext as v, useContext as F } from "react";
import { useI18n as I } from "../../../../../../lib/providers/i18n/i18n-provider.js";
const E = v(null);
function _({
  item: b,
  onCellChange: f,
  children: y
}) {
  const [g, h] = m(b), [R, r] = m({}), [j, u] = m({}), { t: d } = I(), a = L(g);
  a.current = g, p(() => {
    h(b);
  }, [b]);
  const k = x(
    (o, s) => {
      const c = { ...a.current, [o]: s };
      a.current = c, h(c), r((e) => {
        if (o in e) {
          const { [o]: t, ...n } = e;
          return n;
        }
        return e;
      }), u((e) => ({ ...e, [o]: !0 })), f(c).then((e) => {
        e && Object.keys(e).length > 0 && r((t) => ({ ...t, ...e }));
      }).catch((e) => {
        r((t) => ({
          ...t,
          [o]: e instanceof Error ? e.message : d("collections.editableTable.errors.saveFailed")
        }));
      }).finally(() => {
        u((e) => ({ ...e, [o]: !1 }));
      });
    },
    [f, d]
  ), C = x(
    (o) => {
      const s = Object.keys(o);
      if (s.length === 0) return;
      const c = { ...a.current, ...o };
      a.current = c, h(c), r((t) => {
        const n = { ...t };
        let l = !1;
        for (const i of s)
          i in n && (delete n[i], l = !0);
        return l ? n : t;
      });
      const e = {};
      for (const t of s)
        e[t] = !0;
      u((t) => ({ ...t, ...e })), f(c).then((t) => {
        t && Object.keys(t).length > 0 && r((n) => ({ ...n, ...t }));
      }).catch((t) => {
        const n = t instanceof Error ? t.message : d("collections.editableTable.errors.saveFailed");
        r((l) => {
          const i = { ...l };
          for (const O of s)
            i[O] = n;
          return i;
        });
      }).finally(() => {
        u((t) => {
          const n = { ...t };
          for (const l of s)
            n[l] = !1;
          return n;
        });
      });
    },
    [f, d]
  );
  return /* @__PURE__ */ w(
    E.Provider,
    {
      value: {
        localItem: g,
        cellErrors: R,
        cellLoading: j,
        handleCellChange: k,
        batchCellChanges: C
      },
      children: y
    }
  );
}
function q() {
  return F(E);
}
export {
  _ as EditableRowProvider,
  q as useEditableRow
};
