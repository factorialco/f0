const i = {
  lessThanXSeconds: {
    one: "unnit go ovtta sekundda",
    other: "unnit go {{count}} sekundda"
  },
  xSeconds: {
    one: "sekundda",
    other: "{{count}} sekundda"
  },
  halfAMinute: "bealle minuhta",
  lessThanXMinutes: {
    one: "unnit go bealle minuhta",
    other: "unnit go {{count}} minuhta"
  },
  xMinutes: {
    one: "minuhta",
    other: "{{count}} minuhta"
  },
  aboutXHours: {
    one: "sullii ovtta diimmu",
    other: "sullii {{count}} diimmu"
  },
  xHours: {
    one: "diimmu",
    other: "{{count}} diimmu"
  },
  xDays: {
    one: "beaivvi",
    other: "{{count}} beaivvi"
  },
  aboutXWeeks: {
    one: "sullii ovtta vahku",
    other: "sullii {{count}} vahku"
  },
  xWeeks: {
    one: "vahku",
    other: "{{count}} vahku"
  },
  aboutXMonths: {
    one: "sullii ovtta mánu",
    other: "sullii {{count}} mánu"
  },
  xMonths: {
    one: "mánu",
    other: "{{count}} mánu"
  },
  aboutXYears: {
    one: "sullii ovtta jagi",
    other: "sullii {{count}} jagi"
  },
  xYears: {
    one: "jagi",
    other: "{{count}} jagi"
  },
  overXYears: {
    one: "guhkit go jagi",
    other: "guhkit go {{count}} jagi"
  },
  almostXYears: {
    one: "measta jagi",
    other: "measta {{count}} jagi"
  }
}, a = (u, n, t) => {
  let e;
  const o = i[u];
  return typeof o == "string" ? e = o : n === 1 ? e = o.one : e = o.other.replace("{{count}}", String(n)), t?.addSuffix ? t.comparison && t.comparison > 0 ? "geahčen " + e : e + " áigi" : e;
};
export {
  a as formatDistance
};
