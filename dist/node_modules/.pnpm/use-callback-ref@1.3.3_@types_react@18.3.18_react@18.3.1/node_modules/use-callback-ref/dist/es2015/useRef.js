import { useState as u } from "react";
function n(c, r) {
  var e = u(function() {
    return {
      // value
      value: c,
      // last callback
      callback: r,
      // "memoized" public interface
      facade: {
        get current() {
          return e.value;
        },
        set current(a) {
          var t = e.value;
          t !== a && (e.value = a, e.callback(a, t));
        }
      }
    };
  })[0];
  return e.callback = r, e.facade;
}
export {
  n as useCallbackRef
};
