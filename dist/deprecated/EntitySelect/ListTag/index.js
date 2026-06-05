import { jsx as o } from "react/jsx-runtime";
import { F0Icon as p } from "../../../components/F0Icon/index.js";
import { BaseTag as i } from "../../../components/tags/internal/BaseTag/index.js";
import l from "../../../icons/app/Cross.js";
import "../../../icons/app/Menu.js";
import c from "../../../icons/app/PersonNegative.js";
import { cn as f } from "../../../lib/utils.js";
import { BaseAvatar as t } from "../../../components/avatars/internal/BaseAvatar/BaseAvatar.js";
const F = ({
  entity: r,
  onRemove: a,
  disabled: m = !1,
  deactivated: e = !1,
  hiddenAvatar: s = !1
}) => /* @__PURE__ */ o("div", { className: "pr-2 pt-1.5", children: /* @__PURE__ */ o(
  i,
  {
    className: f(
      "max-w-54 w-fit gap-1 text-ellipsis break-all border-[1px] border-solid border-f1-border-secondary py-[1px] pl-[1px]",
      "rounded-full",
      s ? "pl-2" : "pl-0"
    ),
    left: !s && /* @__PURE__ */ o(
      t,
      {
        src: r.subAvatar,
        name: r.subName,
        size: "xs",
        type: "rounded",
        icon: e ? { icon: c, color: "secondary" } : void 0
      }
    ),
    right: !m && /* @__PURE__ */ o(
      p,
      {
        icon: l,
        size: "sm",
        className: "cursor-pointer text-f1-icon-secondary",
        onClick: () => a?.(r)
      }
    ),
    text: r.subName,
    deactivated: e
  }
) });
export {
  F as ListTag
};
