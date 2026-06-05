import { jsx as u, jsxs as R } from "react/jsx-runtime";
import { Root as w, Anchor as x, Content as p } from "../../../../../node_modules/.pnpm/@radix-ui_react-popover@1.1.5_@types_react-dom@18.3.1_@types_react@18.3.18_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/@radix-ui/react-popover/dist/index.js";
import { ReactRenderer as v } from "../../../../../node_modules/.pnpm/@tiptap_react@2.24.0_@tiptap_core@2.24.0_@tiptap_pm@2.24.0__@tiptap_pm@2.24.0_react-dom@18.3._lkknks4fnf2kntdvgdogokq7xe/node_modules/@tiptap/react/dist/index.js";
import { Suggestion as O } from "../../../../../node_modules/.pnpm/@tiptap_suggestion@2.12.0_@tiptap_core@2.24.0_@tiptap_pm@2.24.0__@tiptap_pm@2.24.0/node_modules/@tiptap/suggestion/dist/index.js";
import { c as z } from "../../../../../_virtual/client.js";
import { availableCommands as E, getGroupedCommands as y } from "./AvailableCommands.js";
import { CommandList as L } from "./CommandList.js";
import { Extension as P } from "../../../../../node_modules/.pnpm/@tiptap_core@2.24.0_@tiptap_pm@2.24.0/node_modules/@tiptap/core/dist/index.js";
const K = ({
  aiBlockConfig: f,
  translations: h,
  imageUploadConfig: g
}) => P.create({
  name: "slashCommand",
  addOptions() {
    return {
      suggestion: {
        char: "/",
        allowSpaces: !0,
        allowedPrefixes: [" ", `
`],
        startOfLine: !1,
        command: ({
          editor: s,
          range: c,
          props: r
        }) => {
          const { state: d } = s, { from: m, to: e } = d.selection, o = d.doc.resolve(m), a = o.parent.textBetween(
            Math.max(0, o.parentOffset - 50),
            // Look back up to 50 chars
            o.parentOffset,
            void 0,
            "￼"
          ).lastIndexOf("/");
          if (a !== -1) {
            const t = m - (o.parentOffset - a), l = e;
            s.chain().focus().deleteRange({ from: t, to: l }).run();
          } else
            s.chain().focus().deleteRange(c).run();
          r.command(s);
        }
      }
    };
  },
  addProseMirrorPlugins() {
    return [
      O({
        editor: this.editor,
        ...this.options.suggestion,
        items: ({ query: s }) => {
          const c = s.toLowerCase().trim(), r = E({
            translations: h,
            aiBlockConfig: f,
            imageUploadConfig: g
          }).filter((d) => {
            const m = d.title.toLowerCase();
            return c ? m.includes(c) : !0;
          });
          return r.length > 0 ? r : [];
        },
        render: () => {
          let s = null, c = null, r = null;
          const d = () => {
            const e = window.getSelection();
            if (e && e.rangeCount > 0) {
              const n = e.getRangeAt(0), { startContainer: o, startOffset: i } = n;
              if (o.nodeType === Node.TEXT_NODE) {
                const t = (o.textContent || "").lastIndexOf("/", i);
                if (t !== -1) {
                  const l = document.createRange();
                  return l.setStart(o, t), l.setEnd(o, t + 1), l.getBoundingClientRect();
                }
              }
              return n.getBoundingClientRect();
            }
            return document.body.getBoundingClientRect();
          }, m = ({
            content: e,
            anchorRect: n
          }) => {
            const o = {
              position: "absolute",
              top: n.bottom + window.scrollY,
              left: n.left + window.scrollX,
              width: 0,
              height: 0
            };
            return /* @__PURE__ */ R(w, { open: !0, modal: !1, children: [
              /* @__PURE__ */ u("div", { style: o }),
              /* @__PURE__ */ u(x, { asChild: !0, children: /* @__PURE__ */ u("div", { style: o }) }),
              /* @__PURE__ */ u(
                p,
                {
                  side: "bottom",
                  align: "start",
                  sideOffset: 15,
                  collisionPadding: 10,
                  style: { zIndex: 9999 },
                  onOpenAutoFocus: (i) => {
                    i.preventDefault();
                  },
                  onCloseAutoFocus: (i) => {
                    i.preventDefault();
                  },
                  children: /* @__PURE__ */ u(
                    "div",
                    {
                      ref: (i) => {
                        i && e.parentNode !== i && i.appendChild(e);
                      }
                    }
                  )
                }
              )
            ] });
          };
          return {
            onStart: (e) => {
              if (e.items.length === 0) return;
              const n = y({
                aiBlockConfig: f,
                translations: h,
                imageUploadConfig: g
              });
              let o = n;
              if (e.query && e.query.trim()) {
                const t = e.query.toLowerCase().trim();
                o = n.map((l) => ({
                  ...l,
                  commands: l.commands.filter((C) => C.title.toLowerCase().includes(t))
                })).filter((l) => l.commands.length > 0);
              }
              s = new v(L, {
                props: {
                  items: e.items,
                  groups: o,
                  command: e.command
                },
                editor: e.editor
              });
              const a = (() => {
                if (e.clientRect) {
                  const t = e.clientRect();
                  if (t && t.width && t.height) return t;
                }
                return d();
              })();
              r = document.createElement("div"), document.body.appendChild(r), c = z.createRoot(r), c.render(
                /* @__PURE__ */ u(
                  m,
                  {
                    content: s.element,
                    anchorRect: a,
                    editor: e.editor
                  }
                )
              );
            },
            onUpdate: (e) => {
              if (!s || !r || !c) return;
              const n = y({
                aiBlockConfig: f,
                translations: h,
                imageUploadConfig: g
              });
              let o = n;
              if (e.query && e.query.trim()) {
                const i = e.query.toLowerCase().trim();
                o = n.map((a) => ({
                  ...a,
                  commands: a.commands.filter((t) => t.title.toLowerCase().includes(i))
                })).filter((a) => a.commands.length > 0);
              }
              if (s.updateProps({
                items: e.items,
                groups: o
              }), e.items.length === 0)
                r && (r.style.display = "none");
              else {
                r && (r.style.display = "");
                const a = (() => {
                  if (e.clientRect) {
                    const t = e.clientRect();
                    if (t && t.width && t.height) return t;
                  }
                  return d();
                })();
                c.render(
                  /* @__PURE__ */ u(
                    m,
                    {
                      content: s.element,
                      anchorRect: a,
                      editor: e.editor
                    }
                  )
                );
              }
            },
            onKeyDown: (e) => {
              if (e.event.key === "Escape")
                return c && r && (c.unmount(), r.remove()), !0;
              const n = s?.ref;
              return n && typeof n == "object" && "onKeyDown" in n && typeof n.onKeyDown == "function" && n.onKeyDown(e) || !1;
            },
            onExit() {
              c && r && (c.unmount(), r.remove()), s?.destroy();
            }
          };
        }
      })
    ];
  }
});
export {
  K as createSlashCommandExtension
};
