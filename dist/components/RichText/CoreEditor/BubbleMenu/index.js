import { jsx as o, jsxs as a, Fragment as F } from "react/jsx-runtime";
import { BubbleMenu as B } from "../../../../node_modules/.pnpm/@tiptap_react@2.24.0_@tiptap_core@2.24.0_@tiptap_pm@2.24.0__@tiptap_pm@2.24.0_react-dom@18.3._lkknks4fnf2kntdvgdogokq7xe/node_modules/@tiptap/react/dist/index.js";
import { NodeSelection as T } from "../../../../node_modules/.pnpm/prosemirror-state@1.4.3/node_modules/prosemirror-state/dist/index.js";
import { EnhanceActivator as v } from "../../RichTextEditor/Enhance/index.js";
import { Toolbar as M } from "../Toolbar/index.js";
import { ToolbarDivider as j } from "../Toolbar/ToolbarDivider/index.js";
import { isTextSelection as C } from "../../../../node_modules/.pnpm/@tiptap_core@2.24.0_@tiptap_pm@2.24.0/node_modules/@tiptap/core/dist/index.js";
const I = ({
  editorId: r,
  editor: e,
  disableButtons: n,
  isToolbarOpen: m,
  isFullscreen: u,
  plainHtmlMode: f = !1,
  enhanceConfig: t,
  onEnhanceWithAI: s,
  isLoadingEnhance: c = !1,
  setLastIntent: i,
  isAcceptChangesOpen: p = !1,
  hasError: h = !1
}) => /* @__PURE__ */ o(
  B,
  {
    tippyOptions: {
      duration: 100,
      placement: "top",
      hideOnClick: !1,
      appendTo: () => u ? document.body : document.getElementById(r) || document.body,
      zIndex: 9999
    },
    editor: e,
    shouldShow: ({ view: b, state: d, from: E, to: x }) => {
      const { doc: g, selection: l } = d, { empty: w } = l;
      if (l instanceof T)
        return !1;
      const y = !g.textBetween(E, x).length && C(d.selection), k = document.getElementById(r)?.contains(document.activeElement);
      return !(!(b.hasFocus() || k) || w || y || !e.isEditable);
    },
    children: !m && !(c || p || h) && /* @__PURE__ */ a("div", { className: "dark z-50 flex w-max flex-row items-center gap-1 rounded-lg border border-solid border-f1-border bg-f1-background p-1 drop-shadow-sm", children: [
      t && s && i && /* @__PURE__ */ a(F, { children: [
        /* @__PURE__ */ o(
          v,
          {
            editor: e,
            onEnhanceWithAI: s,
            isLoadingEnhance: c,
            enhanceConfig: t,
            disableButtons: n,
            hideLabel: !0,
            position: "top",
            setLastIntent: i
          }
        ),
        /* @__PURE__ */ o(j, {})
      ] }),
      /* @__PURE__ */ o(
        M,
        {
          editor: e,
          disableButtons: n,
          darkMode: !0,
          showEmojiPicker: !1,
          plainHtmlMode: f
        }
      )
    ] })
  }
);
export {
  I as EditorBubbleMenu
};
