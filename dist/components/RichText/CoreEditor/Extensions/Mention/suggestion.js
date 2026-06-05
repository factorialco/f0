import { jsx as R } from "react/jsx-runtime";
import { ReactRenderer as y } from "../../../../../node_modules/.pnpm/@tiptap_react@2.24.0_@tiptap_core@2.24.0_@tiptap_pm@2.24.0__@tiptap_pm@2.24.0_react-dom@18.3._lkknks4fnf2kntdvgdogokq7xe/node_modules/@tiptap/react/dist/index.js";
import { c as C } from "../../../../../_virtual/client.js";
import { MentionList as x } from "./MentionList/index.js";
import { MentionPopover as w } from "./MentionPopover/index.js";
function G(h, f, m, s) {
  return {
    char: "@",
    minLength: 0,
    items: async ({ query: o }) => {
      if (m)
        try {
          const t = await m(o);
          return f(t || []), t || [];
        } catch {
          return [];
        }
      else if (s) {
        const t = o.toLowerCase().trim();
        let n;
        return t ? n = s.filter(
          (i) => i.label.toLowerCase().includes(t)
        ) : n = s, f(n), n;
      }
      return h;
    },
    render: () => {
      let o = null, t = null, n = null, i = null;
      const g = () => {
        const e = window.getSelection();
        if (e && e.rangeCount > 0) {
          const u = e.getRangeAt(0), { startContainer: l, startOffset: c } = u;
          if (l.nodeType === Node.TEXT_NODE) {
            const a = (l.textContent || "").lastIndexOf("@", c);
            if (a !== -1) {
              const d = document.createRange();
              return d.setStart(l, a), d.setEnd(l, a + 1), d.getBoundingClientRect();
            }
          }
          return u.getBoundingClientRect();
        }
        return document.body.getBoundingClientRect();
      };
      return {
        onStart: (e) => {
          i = e;
          const u = (r) => {
            if (!i) return;
            const { editor: a, range: d } = i;
            a.chain().focus().insertContentAt(d, [
              {
                type: "mention",
                attrs: {
                  id: String(r.id),
                  label: r.label,
                  image_url: r.image_url,
                  href: r.href
                }
              },
              {
                type: "text",
                text: " "
              }
            ]).run(), a.view.dom.ownerDocument.defaultView?.getSelection()?.collapseToEnd();
          };
          o = new y(x, {
            props: { items: e.items, command: u },
            editor: e.editor
          });
          const c = (() => {
            if (e.clientRect) {
              const r = e.clientRect();
              if (r && r.width && r.height) return r;
            }
            return g();
          })();
          n = document.createElement("div"), document.body.appendChild(n), t = C.createRoot(n), t.render(
            /* @__PURE__ */ R(
              w,
              {
                content: o.element,
                anchorRect: c,
                editor: e.editor
              }
            )
          ), e.editor?.commands.focus();
        },
        onUpdate: (e) => {
          if (i = e, !o || !n || !t) return;
          o.updateProps({ items: e.items });
          const l = (() => {
            if (e.clientRect) {
              const c = e.clientRect();
              if (c && c.width && c.height) return c;
            }
            return g();
          })();
          t.render(
            /* @__PURE__ */ R(
              w,
              {
                content: o.element,
                anchorRect: l,
                editor: e.editor
              }
            )
          );
        },
        onKeyDown: (e) => o ? e.event.key === "ArrowUp" || e.event.key === "ArrowDown" ? o.ref?.onKeyDown(e) || !1 : e.event.key === "Escape" ? (i = null, t && n && (t.unmount(), n.remove()), !0) : o.ref?.onKeyDown(e) || !1 : !1,
        onExit() {
          i = null, t && n && (t.unmount(), n.remove()), o?.destroy();
        }
      };
    }
  };
}
export {
  G as createSuggestionConfig
};
