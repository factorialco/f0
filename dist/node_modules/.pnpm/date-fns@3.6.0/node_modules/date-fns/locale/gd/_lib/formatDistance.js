const h = {
  lessThanXSeconds: {
    one: "nas lugha na diog",
    other: "nas lugha na {{count}} diogan"
  },
  xSeconds: {
    one: "1 diog",
    two: "2 dhiog",
    twenty: "20 diog",
    other: "{{count}} diogan"
  },
  halfAMinute: "leth mhionaid",
  lessThanXMinutes: {
    one: "nas lugha na mionaid",
    other: "nas lugha na {{count}} mionaidean"
  },
  xMinutes: {
    one: "1 mionaid",
    two: "2 mhionaid",
    twenty: "20 mionaid",
    other: "{{count}} mionaidean"
  },
  aboutXHours: {
    one: "mu uair de thìde",
    other: "mu {{count}} uairean de thìde"
  },
  xHours: {
    one: "1 uair de thìde",
    two: "2 uair de thìde",
    twenty: "20 uair de thìde",
    other: "{{count}} uairean de thìde"
  },
  xDays: {
    one: "1 là",
    other: "{{count}} là"
  },
  aboutXWeeks: {
    one: "mu 1 seachdain",
    other: "mu {{count}} seachdainean"
  },
  xWeeks: {
    one: "1 seachdain",
    other: "{{count}} seachdainean"
  },
  aboutXMonths: {
    one: "mu mhìos",
    other: "mu {{count}} mìosan"
  },
  xMonths: {
    one: "1 mìos",
    other: "{{count}} mìosan"
  },
  aboutXYears: {
    one: "mu bhliadhna",
    other: "mu {{count}} bliadhnaichean"
  },
  xYears: {
    one: "1 bhliadhna",
    other: "{{count}} bliadhna"
  },
  overXYears: {
    one: "còrr is bliadhna",
    other: "còrr is {{count}} bliadhnaichean"
  },
  almostXYears: {
    one: "cha mhòr bliadhna",
    other: "cha mhòr {{count}} bliadhnaichean"
  }
}, i = (t, o, a) => {
  let e;
  const n = h[t];
  return typeof n == "string" ? e = n : o === 1 ? e = n.one : o === 2 && n.two ? e = n.two : o === 20 && n.twenty ? e = n.twenty : e = n.other.replace("{{count}}", String(o)), a?.addSuffix ? a.comparison && a.comparison > 0 ? "ann an " + e : "o chionn " + e : e;
};
export {
  i as formatDistance
};
