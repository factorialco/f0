import { jsx as E, jsxs as J } from "react/jsx-runtime";
import { useState as x, useEffect as H, useMemo as Q, useContext as X, useRef as Y, useLayoutEffect as Z } from "react";
import { useDebounceValue as $ } from "../../node_modules/.pnpm/usehooks-ts@3.1.1_react@18.3.1/node_modules/usehooks-ts/dist/index.js";
import { cn as U } from "../../lib/utils.js";
import { Popover as p, PopoverTrigger as ee, PopoverContent as te } from "../../ui/popover.js";
import { Content as V } from "./Content/index.js";
import { Trigger as ne } from "./Trigger/index.js";
import { F0DialogContext as ie } from "../../patterns/F0Dialog/components/F0DialogProvider.js";
const me = (e) => {
  const [b, m] = x(
    (e.alwaysOpen || e.defaultOpen) ?? !1
  ), h = (n) => {
    m(n), e.onOpenChange?.(n);
  };
  H(() => {
    e.defaultOpen && b && e.onOpenChange?.(!0);
  }, [e.defaultOpen]);
  const [u, f] = x(e.entities), [g, O] = x(""), [I, y] = $("", 300), w = Q(
    () => e.entities.some(
      (n) => n.subItems && n.subItems.length > 0
    ),
    [e.entities]
  ), v = X(ie), k = v.portalContainer && (v.position === "center" || v.position === "fullscreen") ? v.portalContainer : void 0;
  function G(n) {
    if (e.singleSelector) {
      e.onSelect(n), m(!1);
      return;
    }
    const i = e.selectedEntities ?? [], t = u.find((c) => c.id === n.id);
    if (!t)
      return;
    const s = new Set(
      (t.subItems ?? []).map((c) => c.subId)
    ), a = /* @__PURE__ */ new Set([t.id]);
    u.forEach((c) => {
      c.id !== t.id && (c.subItems ?? []).some(
        (S) => s.has(S.subId)
      ) && a.add(c.id);
    });
    const l = [...i];
    function d(c) {
      const o = l.findIndex((S) => S.id === c.id);
      o >= 0 ? l[o] = c : l.push(c);
    }
    a.forEach((c) => {
      const o = u.find((r) => r.id === c);
      if (!o) return;
      const S = o.subItems?.filter(
        (r) => s.has(r.subId)
      ) ?? [], C = l.findIndex((r) => r.id === c);
      if (C >= 0) {
        const r = l[C].subItems ?? [], A = new Set(r.map((T) => T.subId)), _ = [
          ...r,
          ...S.filter((T) => !A.has(T.subId))
        ];
        d({
          ...o,
          subItems: _
        });
      } else
        d({
          ...o,
          subItems: S
        });
    }), e.onSelect(l);
  }
  function M(n, i) {
    if (e.singleSelector)
      e.onSelect({ ...n, subItems: [{ ...i }] }), m(!1);
    else {
      const t = e.selectedEntities ?? [], s = new Set(t.map((d) => d.id)), a = new Map(
        t.map((d) => [d.id, d.subItems ?? []])
      );
      s.add(n.id), e.entities.forEach((d) => {
        d.subItems?.some(
          (o) => o.subId === i.subId
        ) && s.add(d.id);
      });
      const l = [];
      e.entities.forEach((d) => {
        if (s.has(d.id)) {
          let o = [...a.get(d.id) ?? []];
          d.subItems?.some(
            (r) => r.subId === i.subId
          ) && (o.some(
            (A) => A.subId === i.subId
          ) || o.push(i));
          const C = new Set(
            (d.subItems ?? []).map((r) => r.subId)
          );
          o = o.filter(
            (r) => C.has(r.subId)
          ), l.push({
            ...d,
            subItems: o
          });
        }
      }), e.onSelect(l);
    }
  }
  function P(n) {
    if (e.singleSelector) {
      e.onSelect(null);
      return;
    }
    let i = [];
    const t = e.selectedEntities ?? [];
    if (w) {
      const s = u.find(
        (l) => l.id === n.id
      );
      if (!s)
        return;
      const a = new Set(
        (s.subItems ?? []).map((l) => l.subId)
      );
      for (const l of t) {
        const d = (l.subItems ?? []).filter(
          (c) => !a.has(c.subId)
        );
        d.length > 0 && i.push({
          ...l,
          subItems: d
        });
      }
    } else
      i = (t ?? []).filter((s) => s.id !== n.id);
    e.onSelect(i);
  }
  function W(n, i) {
    if (e.singleSelector) {
      e.onSelect(null);
      return;
    }
    const t = e.selectedEntities ?? [], s = i.subId, a = [];
    for (const l of t) {
      const d = l.subItems?.filter((c) => c.subId !== s) ?? [];
      d.length > 0 && a.push({
        ...l,
        subItems: d
      });
    }
    e.onSelect(a);
  }
  function z() {
    if (e.singleSelector) {
      e.onSelect(null);
      return;
    }
    const n = e.selectedEntities ?? [];
    let i = [];
    if (w) {
      const t = new Set(
        u.flatMap(
          (s) => (s.subItems ?? []).map((a) => a.subId)
        )
      );
      for (const s of n) {
        const a = (s.subItems ?? []).filter(
          (l) => !t.has(l.subId)
        );
        a.length > 0 && i.push({
          ...s,
          subItems: a
        });
      }
    } else {
      const t = new Set(
        u.map((s) => s.id)
      );
      i = (n ?? []).filter((s) => !t.has(s.id));
    }
    e.onSelect(i);
  }
  function D() {
    const n = [...e.selectedEntities ?? []];
    u.forEach((i) => {
      const t = n.find((s) => s.id === i.id);
      if (!t)
        n.push({
          ...i,
          subItems: i.subItems || []
        });
      else {
        const s = Array.from(
          /* @__PURE__ */ new Set([
            ...t.subItems ?? [],
            ...i.subItems ?? []
          ])
        );
        t.subItems = s;
      }
    }), e.singleSelector || e.onSelect(n);
  }
  const K = (n) => {
    O(n), y(n);
  }, R = (n, i) => {
    e.onItemExpandedChange(n.id, i), f(
      u.map(
        (t) => t.id === n.id ? { ...t, expanded: !n.expanded } : t
      )
    );
  };
  H(() => {
    if (!I) {
      f(e.entities);
      return;
    }
    if (w && !e.applySearchToGroup) {
      const i = e.entities.map((t) => {
        const s = se(t, I), a = t.subItems?.map((l) => ({
          ...l,
          score: L(
            I,
            l.subSearchKeys ?? [l.subName]
          )
        })).filter((l) => l.score < 1 / 0).sort((l, d) => l.score - d.score);
        return {
          ...t,
          score: s,
          expanded: t.expanded ?? (a?.length ?? 0) > 0,
          subItems: a
        };
      }).filter((t) => t.score < 1 / 0).sort((t, s) => t.score - s.score);
      f(i);
    } else {
      const n = e.entities.map((i) => {
        const t = L(
          I,
          i.searchKeys ?? [i.name]
        );
        return { ...i, score: t };
      }).filter((i) => i.score < 1 / 0).sort((i, t) => i.score - t.score);
      f(n);
    }
  }, [
    I,
    e.entities,
    e.applySearchToGroup,
    w,
    f
  ]);
  const F = Y(null), [q, B] = x(0);
  return Z(() => {
    const n = () => {
      F.current && B(F.current.offsetWidth);
    };
    return n(), window.addEventListener("resize", n), () => window.removeEventListener("resize", n);
  }, []), e.alwaysOpen ? /* @__PURE__ */ E(
    "div",
    {
      ref: F,
      className: U(
        "scrollbar-macos relative overflow-hidden rounded-xl border-[1px] border-solid border-f1-border-secondary bg-transparent p-0",
        e.width ? "w-fit" : "w-full"
      ),
      children: /* @__PURE__ */ E(
        V,
        {
          groupView: w,
          entities: u,
          groups: e.groups,
          onGroupChange: e.onGroupChange,
          selectedGroup: e.selectedGroup,
          onSelect: G,
          onRemove: P,
          onSubItemRemove: W,
          onSubItemSelect: M,
          onClear: z,
          onSelectAll: D,
          selectedEntities: e.selectedEntities ?? [],
          search: g,
          onSearch: K,
          onToggleExpand: R,
          searchPlaceholder: e.searchPlaceholder,
          selectAllLabel: e.selectAllLabel,
          clearLabel: e.clearLabel,
          selectedLabel: e.selectedLabel,
          singleSelector: e.singleSelector,
          loading: e.loading,
          notFoundTitle: e.notFoundTitle,
          notFoundSubtitle: e.notFoundSubtitle,
          width: e.width ?? q - 2,
          disabled: e.disabled,
          hiddenAvatar: e.hiddenAvatar,
          onCreate: e.onCreate,
          onCreateLabel: e.onCreateLabel
        }
      )
    }
  ) : /* @__PURE__ */ J(p, { ...e, onOpenChange: h, open: b, children: [
    /* @__PURE__ */ E(
      ee,
      {
        className: "w-full",
        disabled: e.disabled,
        "aria-label": e.label || e.placeholder,
        children: e.children ? e.children : /* @__PURE__ */ E(
          ne,
          {
            selected: e.selectedItemsCopy,
            selectedEntities: e.selectedEntities ?? [],
            hiddenAvatar: e.hiddenAvatar,
            label: e.label,
            labelIcon: e.labelIcon,
            icon: e.icon,
            error: e.error,
            status: e.status,
            hint: e.hint,
            hideLabel: e.hideLabel,
            maxLength: e.maxLength,
            value: e.value?.toString() ?? void 0,
            disabled: e.disabled,
            placeholder: e.placeholder,
            loading: e.alwaysOpen ? e.loading : !1,
            required: e.required,
            readonly: e.readonly,
            append: e.append,
            size: e.size,
            open: b
          }
        )
      }
    ),
    /* @__PURE__ */ E(
      te,
      {
        container: k,
        className: U(
          "scrollbar-macos relative w-full overflow-hidden overscroll-contain rounded-xl border-[1px] border-solid border-f1-border-secondary bg-transparent p-0"
        ),
        children: /* @__PURE__ */ E(
          V,
          {
            groupView: w,
            entities: u,
            groups: e.groups,
            onGroupChange: e.onGroupChange,
            selectedGroup: e.selectedGroup,
            onSelect: G,
            onRemove: P,
            onSubItemRemove: W,
            onSubItemSelect: M,
            onClear: z,
            onSelectAll: D,
            selectedEntities: e.selectedEntities ?? [],
            search: g,
            onSearch: K,
            onToggleExpand: R,
            searchPlaceholder: e.searchPlaceholder,
            selectAllLabel: e.selectAllLabel,
            clearLabel: e.clearLabel,
            selectedLabel: e.selectedLabel,
            singleSelector: e.singleSelector,
            loading: e.loading,
            notFoundTitle: e.notFoundTitle,
            notFoundSubtitle: e.notFoundSubtitle,
            width: e.width,
            disabled: e.disabled,
            hiddenAvatar: e.hiddenAvatar,
            actions: e.actions,
            onCreate: e.onCreate,
            onCreateLabel: e.onCreateLabel
          }
        )
      }
    )
  ] });
};
function N(e) {
  return e.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim();
}
function j(e) {
  return N(e).split(/\s+/).filter((b) => b.length > 0);
}
function L(e = "", b) {
  const m = j(e);
  if (m.length === 0)
    return 1 / 0;
  for (const h of b) {
    const u = N(h), f = j(h), g = N(e);
    if (u.includes(g) || m.every(
      (I) => f.some((y) => y.includes(I))
    ))
      return 1;
  }
  return 1 / 0;
}
function se(e, b) {
  const m = L(b, e.searchKeys ?? [e.name]);
  let h = 1 / 0;
  return e.subItems?.length && (h = e.subItems.reduce((u, f) => {
    const g = L(
      b,
      f.subSearchKeys ?? [f.subName]
    );
    return Math.min(u, g);
  }, 1 / 0)), Math.min(m, h);
}
export {
  me as EntitySelect
};
