import { jsx as l } from "react/jsx-runtime";
import { useRef as y, useState as g, useLayoutEffect as v } from "react";
import { createPortal as x } from "react-dom";
import { ButtonInternal as M } from "../../../../components/F0Button/internal.js";
import "../../../../icons/app/Menu.js";
import H from "../../../../icons/app/Quote.js";
import { cn as I } from "../../../../lib/utils.js";
import { useI18n as R } from "../../../../lib/providers/i18n/i18n-provider.js";
const c = 8, o = 8;
function z({ anchor: t, onReply: m }) {
  const u = R(), i = y(null), [r, s] = g(
    null
  );
  if (v(() => {
    if (!t) {
      s(null);
      return;
    }
    const n = i.current;
    if (!n) return;
    const d = n.offsetWidth, f = n.offsetHeight, a = window.innerWidth, b = window.innerHeight;
    let e = t.rect.top - f - c;
    e < o && (e = t.rect.bottom + c), e = Math.min(
      Math.max(e, o),
      b - f - o
    );
    const h = t.rect.left + t.rect.width / 2 - d / 2, w = Math.min(
      Math.max(h, o),
      a - d - o
    );
    s({ top: e, left: w });
  }, [t]), typeof document > "u" || !t) return null;
  const p = u.ai.reply;
  return x(
    /* @__PURE__ */ l(
      "div",
      {
        style: {
          position: "fixed",
          top: r?.top ?? -9999,
          left: r?.left ?? -9999,
          visibility: r ? "visible" : "hidden"
        },
        className: I(
          "z-50 rounded-md bg-f1-background p-1 border border-solid border-f1-border-secondary",
          "drop-shadow"
        ),
        children: /* @__PURE__ */ l(
          M,
          {
            ref: i,
            type: "button",
            variant: "ghost",
            label: p,
            icon: H,
            onClick: () => {
              m(t.text);
            }
          }
        )
      }
    ),
    document.body
  );
}
export {
  z as ReplyPopover
};
