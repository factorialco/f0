const s = {
  lessThanXSeconds: {
    one: "1 сониядан кам",
    other: "{{count}} сониядан кам"
  },
  xSeconds: {
    one: "1 сония",
    other: "{{count}} сония"
  },
  halfAMinute: "ярим дақиқа",
  lessThanXMinutes: {
    one: "1 дақиқадан кам",
    other: "{{count}} дақиқадан кам"
  },
  xMinutes: {
    one: "1 дақиқа",
    other: "{{count}} дақиқа"
  },
  aboutXHours: {
    one: "тахминан 1 соат",
    other: "тахминан {{count}} соат"
  },
  xHours: {
    one: "1 соат",
    other: "{{count}} соат"
  },
  xDays: {
    one: "1 кун",
    other: "{{count}} кун"
  },
  aboutXWeeks: {
    one: "тахминан 1 хафта",
    other: "тахминан {{count}} хафта"
  },
  xWeeks: {
    one: "1 хафта",
    other: "{{count}} хафта"
  },
  aboutXMonths: {
    one: "тахминан 1 ой",
    other: "тахминан {{count}} ой"
  },
  xMonths: {
    one: "1 ой",
    other: "{{count}} ой"
  },
  aboutXYears: {
    one: "тахминан 1 йил",
    other: "тахминан {{count}} йил"
  },
  xYears: {
    one: "1 йил",
    other: "{{count}} йил"
  },
  overXYears: {
    one: "1 йилдан кўп",
    other: "{{count}} йилдан кўп"
  },
  almostXYears: {
    one: "деярли 1 йил",
    other: "деярли {{count}} йил"
  }
}, u = (r, n, t) => {
  let e;
  const o = s[r];
  return typeof o == "string" ? e = o : n === 1 ? e = o.one : e = o.other.replace("{{count}}", String(n)), t?.addSuffix ? t.comparison && t.comparison > 0 ? e + "дан кейин" : e + " олдин" : e;
};
export {
  u as formatDistance
};
