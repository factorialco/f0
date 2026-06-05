import { startOfWeek as e } from "./startOfWeek.js";
function o(a, r, t) {
  const f = e(a, t), k = e(r, t);
  return +f == +k;
}
export {
  o as default,
  o as isSameWeek
};
