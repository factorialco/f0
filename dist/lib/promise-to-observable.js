import { Observable as e } from "../node_modules/.pnpm/zen-observable-ts@1.1.0/node_modules/zen-observable-ts/module.js";
function o(t) {
  return new e((l) => (l.next({
    loading: !0,
    error: null,
    data: null
  }), t.then((n) => {
    l.next({
      loading: !1,
      error: null,
      data: n
    }), l.complete();
  }).catch((n) => {
    l.next({
      loading: !1,
      error: n,
      data: null
    }), l.complete();
  }), () => {
  }));
}
export {
  o as promiseToObservable
};
