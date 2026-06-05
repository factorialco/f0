import { clsx as n } from "../node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.js";
import { twMerge as o } from "../node_modules/.pnpm/tailwind-merge@2.6.0/node_modules/tailwind-merge/dist/bundle-mjs.js";
function r(...i) {
  return o(n(i));
}
function s(i) {
  return r(
    "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-f1-special-ring focus-visible:ring-offset-1",
    i
  );
}
export {
  r as cn,
  s as focusRing
};
