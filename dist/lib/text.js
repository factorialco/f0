import { useEffect as t } from "react";
import { d as i } from "../_virtual/index.js";
const a = (o) => i.parse(o).length > 0, h = (o, e, n = !1, s = "") => {
  if (e.disallowEmpty && o.length === 0) {
    const r = `${s}: You need to provide some text that is not empty`;
    if (n)
      console.warn(r);
    else
      throw Error(r);
  }
  if (e.maxLength !== void 0 && o.length > e.maxLength) {
    const r = `${s}: "${o}" should have no more than ${e.maxLength} characters`;
    if (n)
      console.warn(r);
    else
      throw Error(r);
  }
  if (e.minLength !== void 0 && o.length < e.minLength) {
    const r = `${s}: "${o}" should have at least ${e.minLength} characters`;
    if (n)
      console.warn(r);
    else
      throw Error(r);
  }
  if (e.disallowEmojis && a(o)) {
    const r = `${s}: Emojis are not allowed here: "${o}"`;
    if (n)
      console.warn(r);
    else
      throw Error(r);
  }
}, f = (o, e, n = {
  warn: void 0,
  componentName: ""
}) => {
  t(() => {
    if (o !== void 0 && e) {
      const s = n.warn ?? !0;
      h(o, e, s, n.componentName);
    }
  }, [o, e, n]);
};
export {
  a as containsEmojis,
  f as useTextFormatEnforcer
};
