const u = {
  lessThanXSeconds: {
    one: "1びょうみまん",
    other: "{{count}}びょうみまん",
    oneWithSuffix: "やく1びょう",
    otherWithSuffix: "やく{{count}}びょう"
  },
  xSeconds: {
    one: "1びょう",
    other: "{{count}}びょう"
  },
  halfAMinute: "30びょう",
  lessThanXMinutes: {
    one: "1ぷんみまん",
    other: "{{count}}ふんみまん",
    oneWithSuffix: "やく1ぷん",
    otherWithSuffix: "やく{{count}}ふん"
  },
  xMinutes: {
    one: "1ぷん",
    other: "{{count}}ふん"
  },
  aboutXHours: {
    one: "やく1じかん",
    other: "やく{{count}}じかん"
  },
  xHours: {
    one: "1じかん",
    other: "{{count}}じかん"
  },
  xDays: {
    one: "1にち",
    other: "{{count}}にち"
  },
  aboutXWeeks: {
    one: "やく1しゅうかん",
    other: "やく{{count}}しゅうかん"
  },
  xWeeks: {
    one: "1しゅうかん",
    other: "{{count}}しゅうかん"
  },
  aboutXMonths: {
    one: "やく1かげつ",
    other: "やく{{count}}かげつ"
  },
  xMonths: {
    one: "1かげつ",
    other: "{{count}}かげつ"
  },
  aboutXYears: {
    one: "やく1ねん",
    other: "やく{{count}}ねん"
  },
  xYears: {
    one: "1ねん",
    other: "{{count}}ねん"
  },
  overXYears: {
    one: "1ねんいじょう",
    other: "{{count}}ねんいじょう"
  },
  almostXYears: {
    one: "1ねんちかく",
    other: "{{count}}ねんちかく"
  }
}, h = (r, n, t) => {
  t = t || {};
  let e;
  const o = u[r];
  return typeof o == "string" ? e = o : n === 1 ? t.addSuffix && o.oneWithSuffix ? e = o.oneWithSuffix : e = o.one : t.addSuffix && o.otherWithSuffix ? e = o.otherWithSuffix.replace("{{count}}", String(n)) : e = o.other.replace("{{count}}", String(n)), t.addSuffix ? t.comparison && t.comparison > 0 ? e + "あと" : e + "まえ" : e;
};
export {
  h as formatDistance
};
