const s = {
  lessThanXSeconds: {
    one: "помалку од секунда",
    other: "помалку од {{count}} секунди"
  },
  xSeconds: {
    one: "1 секунда",
    other: "{{count}} секунди"
  },
  halfAMinute: "половина минута",
  lessThanXMinutes: {
    one: "помалку од минута",
    other: "помалку од {{count}} минути"
  },
  xMinutes: {
    one: "1 минута",
    other: "{{count}} минути"
  },
  aboutXHours: {
    one: "околу 1 час",
    other: "околу {{count}} часа"
  },
  xHours: {
    one: "1 час",
    other: "{{count}} часа"
  },
  xDays: {
    one: "1 ден",
    other: "{{count}} дена"
  },
  aboutXWeeks: {
    one: "околу 1 недела",
    other: "околу {{count}} месеци"
  },
  xWeeks: {
    one: "1 недела",
    other: "{{count}} недели"
  },
  aboutXMonths: {
    one: "околу 1 месец",
    other: "околу {{count}} недели"
  },
  xMonths: {
    one: "1 месец",
    other: "{{count}} месеци"
  },
  aboutXYears: {
    one: "околу 1 година",
    other: "околу {{count}} години"
  },
  xYears: {
    one: "1 година",
    other: "{{count}} години"
  },
  overXYears: {
    one: "повеќе од 1 година",
    other: "повеќе од {{count}} години"
  },
  almostXYears: {
    one: "безмалку 1 година",
    other: "безмалку {{count}} години"
  }
}, u = (r, n, t) => {
  let e;
  const o = s[r];
  return typeof o == "string" ? e = o : n === 1 ? e = o.one : e = o.other.replace("{{count}}", String(n)), t?.addSuffix ? t.comparison && t.comparison > 0 ? "за " + e : "пред " + e : e;
};
export {
  u as formatDistance
};
