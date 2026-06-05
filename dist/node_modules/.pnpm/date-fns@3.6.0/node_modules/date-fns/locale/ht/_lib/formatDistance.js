const a = {
  lessThanXSeconds: {
    one: "mwens pase yon segond",
    other: "mwens pase {{count}} segond"
  },
  xSeconds: {
    one: "1 segond",
    other: "{{count}} segond"
  },
  halfAMinute: "30 segond",
  lessThanXMinutes: {
    one: "mwens pase yon minit",
    other: "mwens pase {{count}} minit"
  },
  xMinutes: {
    one: "1 minit",
    other: "{{count}} minit"
  },
  aboutXHours: {
    one: "anviwon inè",
    other: "anviwon {{count}} è"
  },
  xHours: {
    one: "1 lè",
    other: "{{count}} lè"
  },
  xDays: {
    one: "1 jou",
    other: "{{count}} jou"
  },
  aboutXWeeks: {
    one: "anviwon 1 semèn",
    other: "anviwon {{count}} semèn"
  },
  xWeeks: {
    one: "1 semèn",
    other: "{{count}} semèn"
  },
  aboutXMonths: {
    one: "anviwon 1 mwa",
    other: "anviwon {{count}} mwa"
  },
  xMonths: {
    one: "1 mwa",
    other: "{{count}} mwa"
  },
  aboutXYears: {
    one: "anviwon 1 an",
    other: "anviwon {{count}} an"
  },
  xYears: {
    one: "1 an",
    other: "{{count}} an"
  },
  overXYears: {
    one: "plis pase 1 an",
    other: "plis pase {{count}} an"
  },
  almostXYears: {
    one: "prèske 1 an",
    other: "prèske {{count}} an"
  }
}, r = (s, t, o) => {
  let n;
  const e = a[s];
  return typeof e == "string" ? n = e : t === 1 ? n = e.one : n = e.other.replace("{{count}}", String(t)), o?.addSuffix ? o.comparison && o.comparison > 0 ? "nan " + n : "sa fè " + n : n;
};
export {
  r as formatDistance
};
