import { jsx as f, jsxs as ie, Fragment as Ie } from "react/jsx-runtime";
import { clamp as Ee } from "../../../../node_modules/.pnpm/@radix-ui_number@1.1.1/node_modules/@radix-ui/number/dist/index.js";
import { composeEventHandlers as E } from "../../../../node_modules/.pnpm/@radix-ui_primitive@1.1.3/node_modules/@radix-ui/primitive/dist/index.js";
import { createCollection as Qe } from "../../../../node_modules/.pnpm/@radix-ui_react-collection@1.1.7_@types_react-dom@18.3.1_@types_react@18.3.18_react-dom@18.3._ohhxt77aoycyropnnxh3lu52qu/node_modules/@radix-ui/react-collection/dist/index.js";
import { useComposedRefs as H } from "../../../../node_modules/.pnpm/@radix-ui_react-compose-refs@1.1.2_@types_react@18.3.18_react@18.3.1/node_modules/@radix-ui/react-compose-refs/dist/index.js";
import { createContextScope as et } from "../../../../node_modules/.pnpm/@radix-ui_react-context@1.1.3_@types_react@18.3.18_react@18.3.1/node_modules/@radix-ui/react-context/dist/index.js";
import { useDirection as tt } from "../../../../node_modules/.pnpm/@radix-ui_react-direction@1.1.1_@types_react@18.3.18_react@18.3.1/node_modules/@radix-ui/react-direction/dist/index.js";
import { DismissableLayer as ot } from "../../../../node_modules/.pnpm/@radix-ui_react-dismissable-layer@1.1.11_@types_react-dom@18.3.1_@types_react@18.3.18_react-d_yogtd4jid4ravehalgybjmgjoa/node_modules/@radix-ui/react-dismissable-layer/dist/index.js";
import { useFocusGuards as nt } from "../../../../node_modules/.pnpm/@radix-ui_react-focus-guards@1.1.3_@types_react@18.3.18_react@18.3.1/node_modules/@radix-ui/react-focus-guards/dist/index.js";
import { FocusScope as rt } from "../../../../node_modules/.pnpm/@radix-ui_react-focus-scope@1.1.7_@types_react-dom@18.3.1_@types_react@18.3.18_react-dom@18.3_fxxdd3snaqcmuaxaxg4jpt5v6a/node_modules/@radix-ui/react-focus-scope/dist/index.js";
import { useId as Te } from "../../../../node_modules/.pnpm/@radix-ui_react-id@1.1.1_@types_react@18.3.18_react@18.3.1/node_modules/@radix-ui/react-id/dist/index.js";
import { createPopperScope as Ne, Root as st, Anchor as ct, Content as lt, Arrow as it } from "../../../../node_modules/.pnpm/@radix-ui_react-popper@1.2.8_@types_react-dom@18.3.1_@types_react@18.3.18_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@radix-ui/react-popper/dist/index.js";
import { Portal as at } from "../../../../node_modules/.pnpm/@radix-ui_react-portal@1.1.9_@types_react-dom@18.3.1_@types_react@18.3.18_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@radix-ui/react-portal/dist/index.js";
import { Primitive as M } from "../../../../node_modules/.pnpm/@radix-ui_react-primitive@2.1.3_@types_react-dom@18.3.1_@types_react@18.3.18_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@radix-ui/react-primitive/dist/index.js";
import { createSlot as dt } from "../../../../node_modules/.pnpm/@radix-ui_react-slot@1.2.3_@types_react@18.3.18_react@18.3.1/node_modules/@radix-ui/react-slot/dist/index.js";
import { useCallbackRef as ut } from "../../../../node_modules/.pnpm/@radix-ui_react-use-callback-ref@1.1.1_@types_react@18.3.18_react@18.3.1/node_modules/@radix-ui/react-use-callback-ref/dist/index.js";
import { useControllableState as _e } from "../../../../node_modules/.pnpm/@radix-ui_react-use-controllable-state@1.2.2_@types_react@18.3.18_react@18.3.1/node_modules/@radix-ui/react-use-controllable-state/dist/index.js";
import { useLayoutEffect as q } from "../../../../node_modules/.pnpm/@radix-ui_react-use-layout-effect@1.1.1_@types_react@18.3.18_react@18.3.1/node_modules/@radix-ui/react-use-layout-effect/dist/index.js";
import { usePrevious as pt } from "../../../../node_modules/.pnpm/@radix-ui_react-use-previous@1.1.1_@types_react@18.3.18_react@18.3.1/node_modules/@radix-ui/react-use-previous/dist/index.js";
import { VISUALLY_HIDDEN_STYLES as ft } from "../../../../node_modules/.pnpm/@radix-ui_react-visually-hidden@1.2.3_@types_react-dom@18.3.1_@types_react@18.3.18_react-dom@_jh4b6g5hyzelaffwdc575htfhy/node_modules/@radix-ui/react-visually-hidden/dist/index.js";
import { hideOthers as mt } from "../../../../node_modules/.pnpm/aria-hidden@1.2.6/node_modules/aria-hidden/dist/es2015/index.js";
import * as o from "react";
import * as be from "react-dom";
import ht from "../../../../node_modules/.pnpm/react-remove-scroll@2.7.1_@types_react@18.3.18_react@18.3.1/node_modules/react-remove-scroll/dist/es2015/Combination.js";
const gt = [" ", "Enter", "ArrowUp", "ArrowDown"], St = [" ", "Enter"], $ = "Select", [de, ue, wt] = Qe($), [oe] = et(
  $,
  [wt, Ne]
), pe = Ne(), [vt, X] = oe($), [Ct, yt] = oe($), Ae = (t) => {
  const {
    __scopeSelect: n,
    children: e,
    open: s,
    defaultOpen: l,
    onOpenChange: u,
    value: c,
    defaultValue: r,
    onValueChange: i,
    onItemCheckChange: p,
    dir: w,
    name: y,
    autoComplete: N,
    disabled: P,
    required: x,
    form: a,
    multiple: g
  } = t, C = pe(n), [h, m] = o.useState(
    null
  ), [I, ne] = o.useState(
    null
  ), [D, A] = o.useState(!1), U = tt(w), [K, Q] = _e({
    prop: s,
    defaultProp: l ?? !1,
    onChange: u,
    caller: $
  }), [L, G] = _e({
    prop: c,
    defaultProp: r,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onChange: i,
    caller: $
  }), z = o.useRef(null), V = h ? a || !!h.closest("form") : !0, [Y, W] = o.useState(
    /* @__PURE__ */ new Set()
  ), B = Array.from(Y).map((_) => _.props.value).join(";");
  return /* @__PURE__ */ f(st, { ...C, children: /* @__PURE__ */ ie(
    vt,
    {
      required: x,
      scope: n,
      trigger: h,
      onTriggerChange: m,
      valueNode: I,
      onValueNodeChange: ne,
      valueNodeHasChildren: D,
      onValueNodeHasChildrenChange: A,
      contentId: Te(),
      value: L,
      onValueChange: (_) => G(_),
      onItemCheckChange: p,
      open: K,
      onOpenChange: Q,
      dir: U,
      triggerPointerDownPosRef: z,
      disabled: P,
      multiple: g,
      children: [
        /* @__PURE__ */ f(de.Provider, { scope: n, children: /* @__PURE__ */ f(
          Ct,
          {
            scope: t.__scopeSelect,
            onNativeOptionAdd: o.useCallback((_) => {
              W((O) => new Set(O).add(_));
            }, []),
            onNativeOptionRemove: o.useCallback((_) => {
              W((O) => {
                const F = new Set(O);
                return F.delete(_), F;
              });
            }, []),
            children: e
          }
        ) }),
        V ? /* @__PURE__ */ ie(
          Xe,
          {
            "aria-hidden": !0,
            required: x,
            tabIndex: -1,
            name: y,
            autoComplete: N,
            value: L,
            onChange: (_) => {
              G(
                g ? Array.from(_.currentTarget.selectedOptions).map(
                  (O) => O.value
                ) : _.target.value
              );
            },
            disabled: P,
            form: a,
            multiple: g,
            children: [
              L === void 0 ? /* @__PURE__ */ f("option", { value: "" }) : null,
              Array.from(Y)
            ]
          },
          B
        ) : null
      ]
    }
  ) });
};
Ae.displayName = $;
const Me = "SelectTrigger", Oe = o.forwardRef((t, n) => {
  const { __scopeSelect: e, disabled: s = !1, ...l } = t, u = pe(e), c = X(Me, e), r = c.disabled || s, i = H(n, c.onTriggerChange), p = ue(e), w = o.useRef("touch"), [y, N, P] = $e(
    (a) => {
      const g = p().filter((m) => !m.disabled), C = g.find(
        (m) => m.value === c.value
      ), h = Je(g, a, C);
      h !== void 0 && c.onValueChange(h.value);
    }
  ), x = (a) => {
    r || (c.onOpenChange(!0), P()), a && (c.triggerPointerDownPosRef.current = {
      x: Math.round(a.pageX),
      y: Math.round(a.pageY)
    });
  };
  return /* @__PURE__ */ f(ct, { asChild: !0, ...u, children: /* @__PURE__ */ f(
    M.button,
    {
      type: "button",
      role: "combobox",
      "aria-controls": c.contentId,
      "aria-expanded": c.open,
      "aria-required": c.required,
      "aria-autocomplete": "none",
      dir: c.dir,
      "data-state": c.open ? "open" : "closed",
      disabled: r,
      "data-disabled": r ? "" : void 0,
      "data-placeholder": Ze(c.value) ? "" : void 0,
      ...l,
      ref: i,
      onClick: E(l.onClick, (a) => {
        a.currentTarget.focus(), w.current !== "mouse" && x(a);
      }),
      onPointerDown: E(
        l.onPointerDown,
        (a) => {
          w.current = a.pointerType;
          const g = a.target;
          g.hasPointerCapture(a.pointerId) && g.releasePointerCapture(a.pointerId), a.button === 0 && a.ctrlKey === !1 && a.pointerType === "mouse" && (x(a), a.preventDefault());
        }
      ),
      onKeyDown: E(l.onKeyDown, (a) => {
        const g = y.current !== "";
        !(a.ctrlKey || a.altKey || a.metaKey) && a.key.length === 1 && N(a.key), !(g && a.key === " ") && gt.includes(a.key) && (x(), a.preventDefault());
      })
    }
  ) });
});
Oe.displayName = Me;
const De = "SelectValue", xt = o.forwardRef(
  (t, n) => {
    const {
      __scopeSelect: e,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      className: s,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      style: l,
      children: u,
      placeholder: c = "",
      ...r
    } = t, i = X(De, e), { onValueNodeHasChildrenChange: p } = i, w = u !== void 0, y = H(
      n,
      i.onValueNodeChange
    );
    return q(() => {
      p(w);
    }, [p, w]), /* @__PURE__ */ f(
      M.span,
      {
        ...r,
        ref: y,
        style: { pointerEvents: "none" },
        children: Ze(i.value) ? /* @__PURE__ */ f(Ie, { children: c }) : u
      }
    );
  }
);
xt.displayName = De;
const It = "SelectIcon", Tt = o.forwardRef(
  (t, n) => {
    const { __scopeSelect: e, children: s, ...l } = t;
    return /* @__PURE__ */ f(M.span, { "aria-hidden": !0, ...l, ref: n, children: s || "▼" });
  }
);
Tt.displayName = It;
const Pt = "SelectPortal", Le = (t) => /* @__PURE__ */ f(at, { asChild: !0, ...t });
Le.displayName = Pt;
const J = "SelectContent", ke = o.forwardRef((t, n) => {
  const e = X(J, t.__scopeSelect), [s, l] = o.useState();
  if (q(() => {
    l(new DocumentFragment());
  }, []), !e.open) {
    const u = s;
    return u ? be.createPortal(
      /* @__PURE__ */ f(Ve, { scope: t.__scopeSelect, children: /* @__PURE__ */ f(de.Slot, { scope: t.__scopeSelect, children: /* @__PURE__ */ f("div", { children: t.children }) }) }),
      u
    ) : null;
  }
  return /* @__PURE__ */ f(Be, { ...t, ref: n });
});
ke.displayName = J;
const k = 10, [Ve, Z] = oe(J), Rt = "SelectContentImpl", Et = dt("SelectContent.RemoveScroll"), _t = ({
  disableScrollLock: t,
  children: n
}) => t ? n : /* @__PURE__ */ f(ht, { as: Et, allowPinchZoom: !0, children: n }), Be = o.forwardRef((t, n) => {
  const {
    __scopeSelect: e,
    position: s = "item-aligned",
    onCloseAutoFocus: l,
    onEscapeKeyDown: u,
    onPointerDownOutside: c,
    disableScrollLock: r = !1,
    //
    // PopperContent props
    side: i,
    sideOffset: p,
    align: w,
    alignOffset: y,
    arrowPadding: N,
    collisionBoundary: P,
    collisionPadding: x,
    sticky: a,
    hideWhenDetached: g,
    avoidCollisions: C,
    //
    ...h
  } = t, m = X(J, e), [I, ne] = o.useState(
    null
  ), [D, A] = o.useState(
    null
  ), U = H(n, (d) => ne(d)), [K, Q] = o.useState(null), [L, G] = o.useState(null), z = ue(e), [V, Y] = o.useState(!1), W = o.useRef(!1), B = o.useRef(null);
  o.useEffect(() => {
    if (I && (B.current && (B.current(), B.current = null), m.open && s === "popper")) {
      const d = mt(I);
      return B.current = d, () => {
        d && d(), B.current = null;
      };
    }
  }, [I, m.open, s]), nt();
  const _ = o.useCallback(
    (d) => {
      const [b, ...T] = z().map(
        (R) => R.ref.current
      ), [S] = T.slice(-1), v = document.activeElement;
      for (const R of d)
        if (R === v || (R?.scrollIntoView({ block: "nearest" }), R === b && D && (D.scrollTop = 0), R === S && D && (D.scrollTop = D.scrollHeight), R?.focus(), document.activeElement !== v)) return;
    },
    [z, D]
  ), O = o.useCallback(() => {
    if (!m.multiple) {
      _([K, I]);
      return;
    }
  }, [_, K, I, m.multiple]);
  o.useEffect(() => {
    V && O();
  }, [V, O]);
  const { onOpenChange: F, triggerPointerDownPosRef: j } = m;
  o.useEffect(() => {
    if (I) {
      let d = { x: 0, y: 0 };
      const b = (S) => {
        d = {
          x: Math.abs(
            Math.round(S.pageX) - (j.current?.x ?? 0)
          ),
          y: Math.abs(
            Math.round(S.pageY) - (j.current?.y ?? 0)
          )
        };
      }, T = (S) => {
        d.x <= 10 && d.y <= 10 ? S.preventDefault() : I.contains(S.target) || F(!1), document.removeEventListener("pointermove", b), j.current = null;
      };
      return j.current !== null && (document.addEventListener("pointermove", b), document.addEventListener("pointerup", T, {
        capture: !0,
        once: !0
      })), () => {
        document.removeEventListener("pointermove", b), document.removeEventListener("pointerup", T, {
          capture: !0
        });
      };
    }
  }, [I, F, j]), o.useEffect(() => {
    const d = () => F(!1);
    return window.addEventListener("blur", d), window.addEventListener("resize", d), () => {
      window.removeEventListener("blur", d), window.removeEventListener("resize", d);
    };
  }, [F]);
  const [fe, me] = $e((d) => {
    const b = z().filter((v) => !v.disabled), T = b.find(
      (v) => v.ref.current === document.activeElement
    ), S = Je(b, d, T);
    S && setTimeout(() => S.ref.current.focus());
  }), ee = o.useCallback(
    (d, b, T) => {
      const S = (Array.isArray(m.value) ? m.value : [m.value]).filter((se) => se !== void 0), v = !W.current && !T;
      (m.value !== void 0 && S.includes(b) || v) && (Q(d), v && (W.current = !0));
    },
    [m.value]
  ), he = o.useCallback(() => I?.focus(), [I]), re = o.useCallback(
    (d, b, T) => {
      const S = !W.current && !T;
      (m.value !== void 0 && m.value === b || S) && G(d);
    },
    [m.value]
  ), le = s === "popper" ? we : He, te = le === we ? {
    side: i,
    sideOffset: p,
    align: w,
    alignOffset: y,
    arrowPadding: N,
    collisionBoundary: P,
    collisionPadding: x,
    sticky: a,
    hideWhenDetached: g,
    avoidCollisions: C
  } : {};
  return /* @__PURE__ */ f(
    Ve,
    {
      scope: e,
      content: I,
      viewport: D,
      onViewportChange: A,
      itemRefCallback: ee,
      selectedItem: K,
      onItemLeave: he,
      itemTextRefCallback: re,
      focusSelectedItem: O,
      selectedItemText: L,
      position: s,
      isPositioned: V,
      searchRef: fe,
      children: /* @__PURE__ */ f(_t, { disableScrollLock: r, children: /* @__PURE__ */ f(
        rt,
        {
          asChild: !0,
          trapped: !1,
          onMountAutoFocus: (d) => {
            d.preventDefault();
          },
          onUnmountAutoFocus: E(
            l,
            (d) => {
              m.trigger?.isConnected && m.trigger.focus({ preventScroll: !0 }), d.preventDefault();
            }
          ),
          children: /* @__PURE__ */ f(
            ot,
            {
              asChild: !0,
              disableOutsidePointerEvents: !r,
              onEscapeKeyDown: u,
              onPointerDownOutside: c,
              onFocusOutside: (d) => d.preventDefault(),
              onDismiss: () => m.onOpenChange(!1),
              children: /* @__PURE__ */ f(
                le,
                {
                  role: "listbox",
                  id: m.contentId,
                  "data-state": m.open ? "open" : "closed",
                  dir: m.dir,
                  onContextMenu: (d) => d.preventDefault(),
                  ...h,
                  ...te,
                  onPlaced: () => Y(!0),
                  ref: U,
                  style: {
                    // flex layout so we can place the scroll buttons properly
                    display: "flex",
                    flexDirection: "column",
                    // reset the outline by default as the content MAY get focused
                    outline: "none",
                    ...h.style
                  },
                  onKeyDown: E(
                    h.onKeyDown,
                    (d) => {
                      const b = d.ctrlKey || d.altKey || d.metaKey;
                      if (d.key === "Tab" && d.preventDefault(), !b && d.key.length === 1 && me(d.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(d.key)) {
                        let S = z().filter((v) => !v.disabled).map((v) => v.ref.current);
                        if (["ArrowUp", "End"].includes(d.key) && (S = S.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(d.key)) {
                          const v = d.target, R = S.indexOf(v);
                          S = S.slice(R + 1);
                        }
                        setTimeout(() => _(S)), d.preventDefault();
                      }
                    }
                  )
                }
              )
            }
          )
        }
      ) })
    }
  );
});
Be.displayName = Rt;
const Nt = "SelectItemAlignedPosition", He = o.forwardRef((t, n) => {
  const { __scopeSelect: e, onPlaced: s, ...l } = t, u = X(J, e), c = Z(J, e), [r, i] = o.useState(null), [p, w] = o.useState(null), y = H(n, (A) => w(A)), N = ue(e), P = o.useRef(!1), x = o.useRef(!0), { viewport: a, selectedItem: g, selectedItemText: C, focusSelectedItem: h } = c, m = o.useCallback(() => {
    if (u.trigger && u.valueNode && r && p && a && g && C) {
      const A = u.trigger.getBoundingClientRect(), U = p.getBoundingClientRect(), K = u.valueNode.getBoundingClientRect(), Q = C.getBoundingClientRect();
      if (u.dir !== "rtl") {
        const T = Q.left - U.left, S = K.left - T, v = A.left - S, R = A.width + v, se = Math.max(R, U.width), ge = window.innerWidth - k, Se = Ee(S, [
          k,
          // Prevents the content from going off the starting edge of the
          // viewport. It may still go off the ending edge, but this can be
          // controlled by the user since they may want to manage overflow in a
          // specific way.
          // https://github.com/radix-ui/primitives/issues/2049
          Math.max(k, ge - se)
        ]);
        r.style.minWidth = R + "px", r.style.left = Se + "px";
      } else {
        const T = U.right - Q.right, S = window.innerWidth - K.right - T, v = window.innerWidth - A.right - S, R = A.width + v, se = Math.max(R, U.width), ge = window.innerWidth - k, Se = Ee(S, [
          k,
          Math.max(k, ge - se)
        ]);
        r.style.minWidth = R + "px", r.style.right = Se + "px";
      }
      const L = N(), G = window.innerHeight - k * 2, z = a.scrollHeight, V = window.getComputedStyle(p), Y = parseInt(V.borderTopWidth, 10), W = parseInt(V.paddingTop, 10), B = parseInt(
        V.borderBottomWidth,
        10
      ), _ = parseInt(V.paddingBottom, 10), O = Y + W + z + _ + B, F = Math.min(
        g.offsetHeight * 5,
        O
      ), j = window.getComputedStyle(a), fe = parseInt(j.paddingTop, 10), me = parseInt(j.paddingBottom, 10), ee = A.top + A.height / 2 - k, he = G - ee, re = g.offsetHeight / 2, le = g.offsetTop + re, te = Y + W + le, d = O - te;
      if (te <= ee) {
        const T = L.length > 0 && g === L[L.length - 1].ref.current;
        r.style.bottom = "0px";
        const S = p.clientHeight - a.offsetTop - a.offsetHeight, v = Math.max(
          he,
          re + // viewport might have padding bottom, include it to avoid a scrollable viewport
          (T ? me : 0) + S + B
        ), R = te + v;
        r.style.height = R + "px";
      } else {
        const T = L.length > 0 && g === L[0].ref.current;
        r.style.top = "0px";
        const v = Math.max(
          ee,
          Y + a.offsetTop + // viewport might have padding top, include it to avoid a scrollable viewport
          (T ? fe : 0) + re
        ) + d;
        r.style.height = v + "px", a.scrollTop = te - ee + a.offsetTop;
      }
      r.style.margin = `${k}px 0`, r.style.minHeight = F + "px", r.style.maxHeight = G + "px", s?.(), requestAnimationFrame(() => P.current = !0);
    }
  }, [
    N,
    u.trigger,
    u.valueNode,
    r,
    p,
    a,
    g,
    C,
    u.dir,
    s
  ]);
  q(() => m(), [m]);
  const [I, ne] = o.useState();
  q(() => {
    p && ne(window.getComputedStyle(p).zIndex);
  }, [p]);
  const D = o.useCallback(
    (A) => {
      A && x.current === !0 && (m(), h?.(), x.current = !1);
    },
    [m, h]
  );
  return /* @__PURE__ */ f(
    At,
    {
      scope: e,
      contentWrapper: r,
      shouldExpandOnScrollRef: P,
      onScrollButtonChange: D,
      children: /* @__PURE__ */ f(
        "div",
        {
          ref: i,
          style: {
            display: "flex",
            flexDirection: "column",
            position: "fixed",
            zIndex: I
          },
          children: /* @__PURE__ */ f(
            M.div,
            {
              ...l,
              ref: y,
              style: {
                // When we get the height of the content, it includes borders. If we were to set
                // the height without having `boxSizing: 'border-box'` it would be too big.
                boxSizing: "border-box",
                // We need to ensure the content doesn't get taller than the wrapper
                maxHeight: "100%",
                ...l.style
              }
            }
          )
        }
      )
    }
  );
});
He.displayName = Nt;
const bt = "SelectPopperPosition", we = o.forwardRef((t, n) => {
  const {
    __scopeSelect: e,
    align: s = "start",
    collisionPadding: l = k,
    ...u
  } = t, c = pe(e);
  return /* @__PURE__ */ f(
    lt,
    {
      ...c,
      ...u,
      ref: n,
      align: s,
      collisionPadding: l,
      style: {
        // Ensure border-box for floating-ui calculations
        boxSizing: "border-box",
        ...u.style,
        "--radix-select-content-transform-origin": "var(--radix-popper-transform-origin)",
        "--radix-select-content-available-width": "var(--radix-popper-available-width)",
        "--radix-select-content-available-height": "var(--radix-popper-available-height)",
        "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
        "--radix-select-trigger-height": "var(--radix-popper-anchor-height)"
      }
    }
  );
});
we.displayName = bt;
const [At, Pe] = oe(J, {}), ve = "SelectViewport", We = o.forwardRef((t, n) => {
  const { __scopeSelect: e, nonce: s, ...l } = t, u = Z(ve, e), c = Pe(ve, e), r = H(
    n,
    u.onViewportChange
  ), i = o.useRef(0);
  return /* @__PURE__ */ ie(Ie, { children: [
    /* @__PURE__ */ f(
      "style",
      {
        dangerouslySetInnerHTML: {
          __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
        },
        nonce: s
      }
    ),
    /* @__PURE__ */ f(de.Slot, { scope: e, children: /* @__PURE__ */ f(
      M.div,
      {
        "data-radix-select-viewport": "",
        role: "presentation",
        ...l,
        ref: r,
        style: {
          // we use position: 'relative' here on the `viewport` so that when we call
          // `selectedItem.offsetTop` in calculations, the offset is relative to the viewport
          // (independent of the scrollUpButton).
          position: "relative",
          flex: 1,
          // Viewport should only be scrollable in the vertical direction.
          // This won't work in vertical writing modes, so we'll need to
          // revisit this if/when that is supported
          // https://developer.chrome.com/blog/vertical-form-controls
          overflow: "hidden auto",
          ...l.style
        },
        onScroll: E(l.onScroll, (p) => {
          const w = p.currentTarget, { contentWrapper: y, shouldExpandOnScrollRef: N } = c;
          if (N?.current && y) {
            const P = Math.abs(
              i.current - w.scrollTop
            );
            if (P > 0) {
              const x = window.innerHeight - k * 2, a = parseFloat(y.style.minHeight), g = parseFloat(y.style.height), C = Math.max(a, g);
              if (C < x) {
                const h = C + P, m = Math.min(
                  x,
                  h
                ), I = h - m;
                y.style.height = m + "px", y.style.bottom === "0px" && (w.scrollTop = I > 0 ? I : 0, y.style.justifyContent = "flex-end");
              }
            }
          }
          i.current = w.scrollTop;
        })
      }
    ) })
  ] });
});
We.displayName = ve;
const Fe = "SelectGroup", [Mt, Ot] = oe(Fe), Dt = o.forwardRef(
  (t, n) => {
    const { __scopeSelect: e, ...s } = t, l = Te();
    return /* @__PURE__ */ f(Mt, { scope: e, id: l, children: /* @__PURE__ */ f(
      M.div,
      {
        role: "group",
        "aria-labelledby": l,
        ...s,
        ref: n
      }
    ) });
  }
);
Dt.displayName = Fe;
const Ue = "SelectLabel", Lt = o.forwardRef(
  (t, n) => {
    const { __scopeSelect: e, ...s } = t, l = Ot(Ue, e);
    return /* @__PURE__ */ f(M.div, { id: l.id, ...s, ref: n });
  }
);
Lt.displayName = Ue;
const ae = "SelectItem", [kt, Ke] = oe(ae), Ge = o.forwardRef(
  (t, n) => {
    const {
      __scopeSelect: e,
      value: s,
      disabled: l = !1,
      textValue: u,
      ...c
    } = t, r = X(ae, e), i = Z(ae, e), p = r.multiple ? r.value?.includes(s) || !1 : r.value === s, [w, y] = o.useState(u ?? ""), [N, P] = o.useState(!1), x = H(
      n,
      (h) => i.itemRefCallback?.(h, s, l)
    ), a = Te(), g = o.useRef("touch"), C = () => {
      if (!l)
        if (r.onItemCheckChange?.(s, !p), r.multiple) {
          const h = r.value ?? [], m = p ? h.filter((I) => I !== s) : [...h, s];
          r.onValueChange(m);
        } else
          r.onValueChange(s), r.onOpenChange(!1);
    };
    if (s === "")
      throw new Error(
        "A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder."
      );
    return /* @__PURE__ */ f(
      kt,
      {
        scope: e,
        value: s,
        disabled: l,
        textId: a,
        isSelected: p,
        onItemTextChange: o.useCallback((h) => {
          y(
            (m) => m || (h?.textContent ?? "").trim()
          );
        }, []),
        children: /* @__PURE__ */ f(
          de.ItemSlot,
          {
            scope: e,
            value: s,
            disabled: l,
            textValue: w,
            children: /* @__PURE__ */ f(
              M.div,
              {
                role: "option",
                "aria-labelledby": a,
                "data-highlighted": N ? "" : void 0,
                "aria-selected": p && N,
                "data-state": p ? "checked" : "unchecked",
                "aria-disabled": l || void 0,
                "data-disabled": l ? "" : void 0,
                tabIndex: l ? void 0 : -1,
                ...c,
                ref: x,
                onFocus: E(
                  c.onFocus,
                  () => P(!0)
                ),
                onBlur: E(
                  c.onBlur,
                  () => P(!1)
                ),
                onClick: E(c.onClick, () => {
                  g.current !== "mouse" && C();
                }),
                onPointerUp: E(c.onPointerUp, () => {
                  g.current === "mouse" && C();
                }),
                onPointerDown: E(
                  c.onPointerDown,
                  (h) => {
                    g.current = h.pointerType;
                  }
                ),
                onPointerMove: E(
                  c.onPointerMove,
                  (h) => {
                    g.current = h.pointerType, l ? i.onItemLeave?.() : g.current === "mouse" && h.currentTarget.focus({ preventScroll: !0 });
                  }
                ),
                onPointerLeave: E(
                  c.onPointerLeave,
                  (h) => {
                    h.currentTarget === document.activeElement && i.onItemLeave?.();
                  }
                ),
                onKeyDown: E(c.onKeyDown, (h) => {
                  i.searchRef?.current !== "" && h.key === " " || (St.includes(h.key) && C(), h.key === " " && h.preventDefault());
                })
              }
            )
          }
        )
      }
    );
  }
);
Ge.displayName = ae;
const ce = "SelectItemText", ze = o.forwardRef((t, n) => {
  const { __scopeSelect: e, className: s, style: l, ...u } = t, c = X(ce, e), r = Z(ce, e), i = Ke(ce, e), p = yt(
    ce,
    e
  ), [w, y] = o.useState(null), N = H(
    n,
    (C) => y(C),
    i.onItemTextChange,
    (C) => r.itemTextRefCallback?.(
      C,
      i.value,
      i.disabled
    )
  ), P = w?.textContent, x = o.useMemo(
    () => /* @__PURE__ */ f(
      "option",
      {
        value: i.value,
        disabled: i.disabled,
        children: P
      },
      i.value
    ),
    [i.disabled, i.value, P]
  ), { onNativeOptionAdd: a, onNativeOptionRemove: g } = p;
  return q(() => (a(x), () => g(x)), [a, g, x]), /* @__PURE__ */ ie(Ie, { children: [
    /* @__PURE__ */ f(
      M.span,
      {
        id: i.textId,
        ...u,
        ref: N
      }
    ),
    i.isSelected && c.valueNode && !c.valueNodeHasChildren ? be.createPortal(u.children, c.valueNode) : null
  ] });
});
ze.displayName = ce;
const Ye = "SelectItemIndicator", je = o.forwardRef((t, n) => {
  const { __scopeSelect: e, ...s } = t;
  return Ke(Ye, e).isSelected ? /* @__PURE__ */ f(M.span, { "aria-hidden": !0, ...s, ref: n }) : null;
});
je.displayName = Ye;
const Ce = "SelectScrollUpButton", Vt = o.forwardRef((t, n) => {
  const e = Z(
    Ce,
    t.__scopeSelect
  ), s = Pe(
    Ce,
    t.__scopeSelect
  ), [l, u] = o.useState(!1), c = H(
    n,
    s.onScrollButtonChange
  );
  return q(() => {
    if (e.viewport && e.isPositioned) {
      let r = function() {
        const p = i.scrollTop > 0;
        u(p);
      };
      const i = e.viewport;
      return r(), i.addEventListener("scroll", r), () => i.removeEventListener("scroll", r);
    }
  }, [e.viewport, e.isPositioned]), l ? /* @__PURE__ */ f(
    Re,
    {
      ...t,
      ref: c,
      onAutoScroll: () => {
        const { viewport: r, selectedItem: i } = e;
        r && i && (r.scrollTop = r.scrollTop - i.offsetHeight);
      }
    }
  ) : null;
});
Vt.displayName = Ce;
const ye = "SelectScrollDownButton", Bt = o.forwardRef((t, n) => {
  const e = Z(
    ye,
    t.__scopeSelect
  ), s = Pe(
    ye,
    t.__scopeSelect
  ), [l, u] = o.useState(!1), c = H(
    n,
    s.onScrollButtonChange
  );
  return q(() => {
    if (e.viewport && e.isPositioned) {
      let r = function() {
        const p = i.scrollHeight - i.clientHeight, w = Math.ceil(i.scrollTop) < p;
        u(w);
      };
      const i = e.viewport;
      return r(), i.addEventListener("scroll", r), () => i.removeEventListener("scroll", r);
    }
  }, [e.viewport, e.isPositioned]), l ? /* @__PURE__ */ f(
    Re,
    {
      ...t,
      ref: c,
      onAutoScroll: () => {
        const { viewport: r, selectedItem: i } = e;
        r && i && (r.scrollTop = r.scrollTop + i.offsetHeight);
      }
    }
  ) : null;
});
Bt.displayName = ye;
const Re = o.forwardRef((t, n) => {
  const { __scopeSelect: e, onAutoScroll: s, ...l } = t, u = Z(
    "SelectScrollButton",
    e
  ), c = o.useRef(null), r = ue(e), i = o.useCallback(() => {
    c.current !== null && (window.clearInterval(c.current), c.current = null);
  }, []);
  return o.useEffect(() => () => i(), [i]), q(() => {
    r().find(
      (w) => w.ref.current === document.activeElement
    )?.ref.current?.scrollIntoView({ block: "nearest" });
  }, [r]), /* @__PURE__ */ f(
    M.div,
    {
      "aria-hidden": !0,
      ...l,
      ref: n,
      style: { flexShrink: 0, ...l.style },
      onPointerDown: E(
        l.onPointerDown,
        () => {
          c.current === null && (c.current = window.setInterval(s, 50));
        }
      ),
      onPointerMove: E(
        l.onPointerMove,
        () => {
          u.onItemLeave?.(), c.current === null && (c.current = window.setInterval(s, 50));
        }
      ),
      onPointerLeave: E(
        l.onPointerLeave,
        () => {
          i();
        }
      )
    }
  );
});
Re.displayName = "SelectScrollButtonImpl";
const Ht = "SelectSeparator", qe = o.forwardRef((t, n) => {
  const { __scopeSelect: e, ...s } = t;
  return /* @__PURE__ */ f(M.div, { "aria-hidden": !0, ...s, ref: n });
});
qe.displayName = Ht;
const xe = "SelectArrow", Wt = o.forwardRef(
  (t, n) => {
    const { __scopeSelect: e, ...s } = t, l = pe(e), u = X(xe, e), c = Z(xe, e);
    return u.open && c.position === "popper" ? /* @__PURE__ */ f(
      it,
      {
        ...l,
        ...s,
        ref: n
      }
    ) : null;
  }
);
Wt.displayName = xe;
const Ft = "SelectBubbleInput";
function Ut(t, n) {
  return Array.isArray(t) && Array.isArray(n) ? t.length !== n.length ? !1 : t.every((e, s) => e === n[s]) : Array.isArray(t) || Array.isArray(n) ? !1 : t === n;
}
const Xe = o.forwardRef(
  ({ __scopeSelect: t, value: n, ...e }, s) => {
    const l = o.useRef(null), u = H(s, l), c = pt(n);
    return o.useEffect(() => {
      const r = l.current;
      if (!r || Ut(c, n)) return;
      const i = Object.getOwnPropertyDescriptor(
        window.HTMLOptionElement.prototype,
        "selected"
      )?.set;
      if (i) {
        const p = Array.isArray(n) ? n : [n];
        for (const w of r.options)
          i.call(w, p.includes(w.value));
      }
      r.dispatchEvent(new Event("change", { bubbles: !0 }));
    }, [c, n]), /* @__PURE__ */ f(
      M.select,
      {
        ...e,
        style: { ...ft, ...e.style },
        ref: u,
        defaultValue: n
      }
    );
  }
);
Xe.displayName = Ft;
function Ze(t) {
  return Array.isArray(t) ? t.length === 0 || t.every((n) => n === "") : t === "" || t === void 0;
}
function $e(t) {
  const n = ut(t), e = o.useRef(""), s = o.useRef(0), l = o.useCallback(
    (c) => {
      const r = e.current + c;
      n(r), (function i(p) {
        e.current = p, window.clearTimeout(s.current), p !== "" && (s.current = window.setTimeout(() => i(""), 1e3));
      })(r);
    },
    [n]
  ), u = o.useCallback(() => {
    e.current = "", window.clearTimeout(s.current);
  }, []);
  return o.useEffect(() => () => window.clearTimeout(s.current), []), [e, l, u];
}
function Je(t, n, e) {
  const l = n.length > 1 && Array.from(n).every((p) => p === n[0]) ? n[0] : n, u = e ? t.indexOf(e) : -1;
  let c = Kt(t, Math.max(u, 0));
  l.length === 1 && (c = c.filter((p) => p !== e));
  const i = c.find(
    (p) => p.textValue.toLowerCase().startsWith(l.toLowerCase())
  );
  return i !== e ? i : void 0;
}
function Kt(t, n) {
  return t.map((e, s) => t[(n + s) % t.length]);
}
const fo = Ae, mo = Oe, ho = Le, go = ke, So = We, wo = Ge, vo = ze, Co = je, yo = qe;
export {
  go as Content,
  wo as Item,
  Co as ItemIndicator,
  vo as ItemText,
  ho as Portal,
  fo as Root,
  Ae as Select,
  Wt as SelectArrow,
  ke as SelectContent,
  Dt as SelectGroup,
  Tt as SelectIcon,
  Ge as SelectItem,
  kt as SelectItemContextProvider,
  je as SelectItemIndicator,
  ze as SelectItemText,
  Lt as SelectLabel,
  Le as SelectPortal,
  Bt as SelectScrollDownButton,
  Vt as SelectScrollUpButton,
  qe as SelectSeparator,
  Oe as SelectTrigger,
  xt as SelectValue,
  We as SelectViewport,
  yo as Separator,
  mo as Trigger,
  So as Viewport,
  Ke as useSelectItemContext
};
