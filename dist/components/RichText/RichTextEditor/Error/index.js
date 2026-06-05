import { jsxs as i, jsx as e } from "react/jsx-runtime";
import { F0AvatarAlert as s } from "../../../avatars/F0AvatarAlert/index.js";
import { useI18n as c } from "../../../../lib/providers/i18n/i18n-provider.js";
import { F0Button as n } from "../../../F0Button/F0Button.js";
const u = ({ error: t, editor: l, setError: a }) => {
  const r = c();
  return /* @__PURE__ */ i("div", { className: "flex w-max max-w-full items-center gap-10 rounded-md bg-f1-background-critical p-1 drop-shadow-sm", children: [
    /* @__PURE__ */ i("div", { className: "flex w-full flex-row items-center gap-2", children: [
      /* @__PURE__ */ e("div", { className: "flex-shrink-0", children: /* @__PURE__ */ e(s, { size: "sm", type: "critical" }) }),
      /* @__PURE__ */ e(
        "p",
        {
          className: "w-full max-w-xl flex-grow truncate text-ellipsis text-sm font-semibold text-f1-foreground-critical",
          title: t || r.richTextEditor.ai.defaultError,
          children: t || r.richTextEditor.ai.defaultError
        }
      )
    ] }),
    /* @__PURE__ */ e("div", { className: "mr- flex-shrink-0", children: /* @__PURE__ */ e(
      n,
      {
        variant: "outline",
        onClick: (o) => {
          o.preventDefault(), a(null), l.setEditable(!0);
        },
        label: r.richTextEditor.ai.closeErrorButtonLabel,
        size: "sm"
      }
    ) })
  ] });
};
export {
  u as Error
};
