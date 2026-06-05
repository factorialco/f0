const n = (t) => {
  if (!t || typeof t != "string")
    return !1;
  const r = t.lastIndexOf("/");
  if (r === -1)
    return !1;
  const s = t.substring(0, r), e = t.substring(r + 1);
  return !(!s || s.trim() === "" || !e || !/^v[0-9]+$/.test(e));
};
export {
  n as validateStorageKey
};
