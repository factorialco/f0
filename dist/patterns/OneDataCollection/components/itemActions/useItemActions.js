import { useState as m } from "react";
import { filterItemActions as I } from "../../item-actions.js";
import { actionsToDropdownItems as c } from "../../visualizations/collection/utils.js";
const O = ({
  source: n,
  item: l
}) => {
  const [a, t] = m(!1), [s, r] = m(null);
  if (!n.itemActions)
    return {
      hasItemActions: !1,
      hasMobileItemActions: !1,
      primaryItemActions: [],
      dropdownItemActions: [],
      mobileDropdownItemActions: [],
      handleDropDownOpenChange: () => {
      },
      dropDownOpen: !1,
      setDropDownOpen: () => {
      }
    };
  const e = I(n.itemActions, l), D = e.filter(
    (o) => o.type === "separator" || o.hideInMobileDropdown !== !0
  ), i = e.filter(
    (o) => o.type === "primary"
  ).slice(0, 2), A = c(
    e.filter(
      (o) => o.type === "separator" || !i.includes(o)
    )
  ), p = c(D), d = p.some(
    (o) => o.type !== "separator"
  ), f = (o) => {
    if (!o) {
      r(
        setTimeout(() => {
          t(!1);
        }, 100)
      );
      return;
    }
    s && (clearTimeout(s), r(null)), t(!0);
  };
  return {
    hasItemActions: e.length > 0,
    hasMobileItemActions: d,
    primaryItemActions: i,
    dropdownItemActions: A,
    mobileDropdownItemActions: p,
    handleDropDownOpenChange: f,
    dropDownOpen: a,
    setDropDownOpen: t
  };
};
export {
  O as useItemActions
};
