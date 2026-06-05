import { durationUnits as f } from "./types.js";
const c = [...f], d = ["hours", "minutes"], t = {
  days: 86400,
  hours: 3600,
  minutes: 60,
  seconds: 1
};
function l(s) {
  const o = Number.isFinite(s) ? s : 0;
  let n = Math.max(0, Math.floor(o));
  const e = Math.floor(n / t.days);
  n = n % t.days;
  const i = Math.floor(n / t.hours);
  n = n % t.hours;
  const u = Math.floor(n / t.minutes), r = n % t.minutes;
  return { days: e, hours: i, minutes: u, seconds: r };
}
function h(s) {
  return c.reduce((o, n) => {
    const e = s[n], i = Number.isFinite(e) ? e : 0, u = Math.max(0, Math.floor(i));
    return o + u * t[n];
  }, 0);
}
function m(s, o) {
  const n = Number.isFinite(s) ? s : 0;
  let e = Math.max(0, Math.floor(n));
  const i = { days: 0, hours: 0, minutes: 0, seconds: 0 }, u = c.filter((r) => o.includes(r));
  for (const r of u)
    i[r] = Math.floor(e / t[r]), e = e % t[r];
  return i;
}
function M(s, o) {
  return o != null && s > o ? o : s < 0 ? 0 : s;
}
export {
  d as DEFAULT_UNITS,
  t as SECONDS_PER_UNIT,
  c as UNIT_ORDER,
  M as clampValue,
  h as fieldsToSeconds,
  l as secondsToFields,
  m as secondsToVisibleFields
};
