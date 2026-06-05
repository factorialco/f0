const s = {
  lessThanXSeconds: {
    one: "ավելի քիչ քան 1 վայրկյան",
    other: "ավելի քիչ քան {{count}} վայրկյան"
  },
  xSeconds: {
    one: "1 վայրկյան",
    other: "{{count}} վայրկյան"
  },
  halfAMinute: "կես րոպե",
  lessThanXMinutes: {
    one: "ավելի քիչ քան 1 րոպե",
    other: "ավելի քիչ քան {{count}} րոպե"
  },
  xMinutes: {
    one: "1 րոպե",
    other: "{{count}} րոպե"
  },
  aboutXHours: {
    one: "մոտ 1 ժամ",
    other: "մոտ {{count}} ժամ"
  },
  xHours: {
    one: "1 ժամ",
    other: "{{count}} ժամ"
  },
  xDays: {
    one: "1 օր",
    other: "{{count}} օր"
  },
  aboutXWeeks: {
    one: "մոտ 1 շաբաթ",
    other: "մոտ {{count}} շաբաթ"
  },
  xWeeks: {
    one: "1 շաբաթ",
    other: "{{count}} շաբաթ"
  },
  aboutXMonths: {
    one: "մոտ 1 ամիս",
    other: "մոտ {{count}} ամիս"
  },
  xMonths: {
    one: "1 ամիս",
    other: "{{count}} ամիս"
  },
  aboutXYears: {
    one: "մոտ 1 տարի",
    other: "մոտ {{count}} տարի"
  },
  xYears: {
    one: "1 տարի",
    other: "{{count}} տարի"
  },
  overXYears: {
    one: "ավելի քան 1 տարի",
    other: "ավելի քան {{count}} տարի"
  },
  almostXYears: {
    one: "համարյա 1 տարի",
    other: "համարյա {{count}} տարի"
  }
}, u = (r, n, t) => {
  let e;
  const o = s[r];
  return typeof o == "string" ? e = o : n === 1 ? e = o.one : e = o.other.replace("{{count}}", String(n)), t?.addSuffix ? t.comparison && t.comparison > 0 ? e + " հետո" : e + " առաջ" : e;
};
export {
  u as formatDistance
};
