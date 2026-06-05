function f(t, r) {
  if (!t || typeof t != "object")
    return;
  const n = r.split(".");
  let e = t;
  for (const o of n)
    if (e && typeof e == "object" && o in e)
      e = e[o];
    else
      return;
  return e;
}
export {
  f as getValueByPath
};
