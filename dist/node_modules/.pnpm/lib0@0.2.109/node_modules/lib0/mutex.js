const n = () => {
  let e = !0;
  return (r, t) => {
    if (e) {
      e = !1;
      try {
        r();
      } finally {
        e = !0;
      }
    } else t !== void 0 && t();
  };
};
export {
  n as createMutex
};
