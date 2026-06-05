function o(r, t) {
  try {
    const e = localStorage.getItem(r);
    return e === null ? t : JSON.parse(e);
  } catch {
    return t;
  }
}
function a(r, t) {
  try {
    localStorage.setItem(r, JSON.stringify(t));
  } catch {
  }
}
export {
  o as readFromLocalStorage,
  a as writeToLocalStorage
};
