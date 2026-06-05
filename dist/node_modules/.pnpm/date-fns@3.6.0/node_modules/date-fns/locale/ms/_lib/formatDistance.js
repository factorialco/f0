const r = {
  lessThanXSeconds: {
    one: "kurang dari 1 saat",
    other: "kurang dari {{count}} saat"
  },
  xSeconds: {
    one: "1 saat",
    other: "{{count}} saat"
  },
  halfAMinute: "setengah minit",
  lessThanXMinutes: {
    one: "kurang dari 1 minit",
    other: "kurang dari {{count}} minit"
  },
  xMinutes: {
    one: "1 minit",
    other: "{{count}} minit"
  },
  aboutXHours: {
    one: "sekitar 1 jam",
    other: "sekitar {{count}} jam"
  },
  xHours: {
    one: "1 jam",
    other: "{{count}} jam"
  },
  xDays: {
    one: "1 hari",
    other: "{{count}} hari"
  },
  aboutXWeeks: {
    one: "sekitar 1 minggu",
    other: "sekitar {{count}} minggu"
  },
  xWeeks: {
    one: "1 minggu",
    other: "{{count}} minggu"
  },
  aboutXMonths: {
    one: "sekitar 1 bulan",
    other: "sekitar {{count}} bulan"
  },
  xMonths: {
    one: "1 bulan",
    other: "{{count}} bulan"
  },
  aboutXYears: {
    one: "sekitar 1 tahun",
    other: "sekitar {{count}} tahun"
  },
  xYears: {
    one: "1 tahun",
    other: "{{count}} tahun"
  },
  overXYears: {
    one: "lebih dari 1 tahun",
    other: "lebih dari {{count}} tahun"
  },
  almostXYears: {
    one: "hampir 1 tahun",
    other: "hampir {{count}} tahun"
  }
}, u = (o, a, n) => {
  let t;
  const e = r[o];
  return typeof e == "string" ? t = e : a === 1 ? t = e.one : t = e.other.replace("{{count}}", String(a)), n?.addSuffix ? n.comparison && n.comparison > 0 ? "dalam masa " + t : t + " yang lalu" : t;
};
export {
  u as formatDistance
};
