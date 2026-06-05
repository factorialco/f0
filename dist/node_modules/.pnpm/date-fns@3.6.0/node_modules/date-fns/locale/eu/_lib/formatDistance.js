const r = {
  lessThanXSeconds: {
    one: "segundo bat baino gutxiago",
    other: "{{count}} segundo baino gutxiago"
  },
  xSeconds: {
    one: "1 segundo",
    other: "{{count}} segundo"
  },
  halfAMinute: "minutu erdi",
  lessThanXMinutes: {
    one: "minutu bat baino gutxiago",
    other: "{{count}} minutu baino gutxiago"
  },
  xMinutes: {
    one: "1 minutu",
    other: "{{count}} minutu"
  },
  aboutXHours: {
    one: "1 ordu gutxi gorabehera",
    other: "{{count}} ordu gutxi gorabehera"
  },
  xHours: {
    one: "1 ordu",
    other: "{{count}} ordu"
  },
  xDays: {
    one: "1 egun",
    other: "{{count}} egun"
  },
  aboutXWeeks: {
    one: "aste 1 inguru",
    other: "{{count}} aste inguru"
  },
  xWeeks: {
    one: "1 aste",
    other: "{{count}} astean"
  },
  aboutXMonths: {
    one: "1 hilabete gutxi gorabehera",
    other: "{{count}} hilabete gutxi gorabehera"
  },
  xMonths: {
    one: "1 hilabete",
    other: "{{count}} hilabete"
  },
  aboutXYears: {
    one: "1 urte gutxi gorabehera",
    other: "{{count}} urte gutxi gorabehera"
  },
  xYears: {
    one: "1 urte",
    other: "{{count}} urte"
  },
  overXYears: {
    one: "1 urte baino gehiago",
    other: "{{count}} urte baino gehiago"
  },
  almostXYears: {
    one: "ia 1 urte",
    other: "ia {{count}} urte"
  }
}, a = (n, u, t) => {
  let e;
  const o = r[n];
  return typeof o == "string" ? e = o : u === 1 ? e = o.one : e = o.other.replace("{{count}}", String(u)), t?.addSuffix ? t.comparison && t.comparison > 0 ? "en " + e : "duela " + e : e;
};
export {
  a as formatDistance
};
