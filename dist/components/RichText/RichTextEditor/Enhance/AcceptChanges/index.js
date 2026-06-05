import { jsxs as m, jsx as n } from "react/jsx-runtime";
import s from "../../../../../icons/app/Check.js";
import u from "../../../../../icons/app/Cross.js";
import "../../../../../icons/app/Menu.js";
import d from "../../../../../icons/app/Reset.js";
import { useI18n as f } from "../../../../../lib/providers/i18n/i18n-provider.js";
import { F0Button as o } from "../../../../F0Button/F0Button.js";
const k = ({
  setLastIntent: t,
  lastIntent: i,
  setIsAcceptChangesOpen: l,
  editor: e,
  handleEnhanceWithAI: c
}) => {
  const a = f();
  return /* @__PURE__ */ m("div", { className: "dark flex items-center gap-2 rounded-md border border-solid border-f1-border bg-f1-background p-1 drop-shadow-sm", children: [
    /* @__PURE__ */ n(
      o,
      {
        label: a.richTextEditor.ai.rejectChangesButtonLabel,
        onClick: (r) => {
          r.preventDefault(), e.commands.clearEnhanceHighlight(), e.chain().focus().undo().run(), l(!1), e.setEditable(!0), t(null);
        },
        size: "sm",
        variant: "outline",
        icon: u
      }
    ),
    /* @__PURE__ */ n(
      o,
      {
        label: a.richTextEditor.ai.repeatButtonLabel,
        onClick: (r) => {
          r.preventDefault(), e.commands.clearEnhanceHighlight(), e.chain().focus().undo().run(), c(
            i?.selectedIntent,
            i?.customIntent
          );
        },
        size: "sm",
        variant: "outline",
        icon: d
      }
    ),
    /* @__PURE__ */ n(
      o,
      {
        label: a.richTextEditor.ai.acceptChangesButtonLabel,
        onClick: (r) => {
          r.preventDefault(), e.commands.clearEnhanceHighlight(), l(!1), e.setEditable(!0), t(null);
        },
        size: "sm",
        variant: "default",
        icon: s
      }
    )
  ] });
};
export {
  k as AcceptChanges
};
