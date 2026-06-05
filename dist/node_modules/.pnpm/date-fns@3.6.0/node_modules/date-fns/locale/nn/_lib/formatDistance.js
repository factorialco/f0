const i = {
  lessThanXSeconds: {
    one: "mindre enn eitt sekund",
    other: "mindre enn {{count}} sekund"
  },
  xSeconds: {
    one: "eitt sekund",
    other: "{{count}} sekund"
  },
  halfAMinute: "eit halvt minutt",
  lessThanXMinutes: {
    one: "mindre enn eitt minutt",
    other: "mindre enn {{count}} minutt"
  },
  xMinutes: {
    one: "eitt minutt",
    other: "{{count}} minutt"
  },
  aboutXHours: {
    one: "omtrent ein time",
    other: "omtrent {{count}} timar"
  },
  xHours: {
    one: "ein time",
    other: "{{count}} timar"
  },
  xDays: {
    one: "ein dag",
    other: "{{count}} dagar"
  },
  aboutXWeeks: {
    one: "omtrent ei veke",
    other: "omtrent {{count}} veker"
  },
  xWeeks: {
    one: "ei veke",
    other: "{{count}} veker"
  },
  aboutXMonths: {
    one: "omtrent ein månad",
    other: "omtrent {{count}} månader"
  },
  xMonths: {
    one: "ein månad",
    other: "{{count}} månader"
  },
  aboutXYears: {
    one: "omtrent eitt år",
    other: "omtrent {{count}} år"
  },
  xYears: {
    one: "eitt år",
    other: "{{count}} år"
  },
  overXYears: {
    one: "over eitt år",
    other: "over {{count}} år"
  },
  almostXYears: {
    one: "nesten eitt år",
    other: "nesten {{count}} år"
  }
}, s = [
  "null",
  "ein",
  "to",
  "tre",
  "fire",
  "fem",
  "seks",
  "sju",
  "åtte",
  "ni",
  "ti",
  "elleve",
  "tolv"
], u = (r, t, o) => {
  let e;
  const n = i[r];
  return typeof n == "string" ? e = n : t === 1 ? e = n.one : e = n.other.replace(
    "{{count}}",
    t < 13 ? s[t] : String(t)
  ), o?.addSuffix ? o.comparison && o.comparison > 0 ? "om " + e : e + " sidan" : e;
};
export {
  u as formatDistance
};
