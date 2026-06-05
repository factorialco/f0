var r = !1;
if (typeof window < "u")
  try {
    var e = Object.defineProperty({}, "passive", {
      get: function() {
        return r = !0, !0;
      }
    });
    window.addEventListener("test", e, e), window.removeEventListener("test", e, e);
  } catch {
    r = !1;
  }
var a = r ? { passive: !1 } : !1;
export {
  a as nonPassive
};
