import { isSameWeek as r } from "../../../isSameWeek.js";
const m = {
  masculine: "ostatni",
  feminine: "ostatnia"
}, f = {
  masculine: "ten",
  feminine: "ta"
}, l = {
  masculine: "następny",
  feminine: "następna"
}, d = {
  0: "feminine",
  1: "masculine",
  2: "masculine",
  3: "feminine",
  4: "masculine",
  5: "masculine",
  6: "feminine"
};
function s(t, n, i, a) {
  let e;
  if (r(n, i, a))
    e = f;
  else if (t === "lastWeek")
    e = m;
  else if (t === "nextWeek")
    e = l;
  else
    throw new Error(`Cannot determine adjectives for token ${t}`);
  const o = n.getDay(), c = d[o];
  return `'${e[c]}' eeee 'o' p`;
}
const u = {
  lastWeek: s,
  yesterday: "'wczoraj o' p",
  today: "'dzisiaj o' p",
  tomorrow: "'jutro o' p",
  nextWeek: s,
  other: "P"
}, p = (t, n, i, a) => {
  const e = u[t];
  return typeof e == "function" ? e(t, n, i, a) : e;
};
export {
  p as formatRelative
};
