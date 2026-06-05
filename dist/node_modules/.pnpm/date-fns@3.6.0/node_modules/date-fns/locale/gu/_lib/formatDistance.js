const s = {
  lessThanXSeconds: {
    one: "હમણાં",
    // CLDR #1461
    other: "​આશરે {{count}} સેકંડ"
  },
  xSeconds: {
    one: "1 સેકંડ",
    other: "{{count}} સેકંડ"
  },
  halfAMinute: "અડધી મિનિટ",
  lessThanXMinutes: {
    one: "આ મિનિટ",
    // CLDR #1448
    other: "​આશરે {{count}} મિનિટ"
  },
  xMinutes: {
    one: "1 મિનિટ",
    other: "{{count}} મિનિટ"
  },
  aboutXHours: {
    one: "​આશરે 1 કલાક",
    other: "​આશરે {{count}} કલાક"
  },
  xHours: {
    one: "1 કલાક",
    other: "{{count}} કલાક"
  },
  xDays: {
    one: "1 દિવસ",
    other: "{{count}} દિવસ"
  },
  aboutXWeeks: {
    one: "આશરે 1 અઠવાડિયું",
    other: "આશરે {{count}} અઠવાડિયા"
  },
  xWeeks: {
    one: "1 અઠવાડિયું",
    other: "{{count}} અઠવાડિયા"
  },
  aboutXMonths: {
    one: "આશરે 1 મહિનો",
    other: "આશરે {{count}} મહિના"
  },
  xMonths: {
    one: "1 મહિનો",
    other: "{{count}} મહિના"
  },
  aboutXYears: {
    one: "આશરે 1 વર્ષ",
    other: "આશરે {{count}} વર્ષ"
  },
  xYears: {
    one: "1 વર્ષ",
    other: "{{count}} વર્ષ"
  },
  overXYears: {
    one: "1 વર્ષથી વધુ",
    other: "{{count}} વર્ષથી વધુ"
  },
  almostXYears: {
    one: "લગભગ 1 વર્ષ",
    other: "લગભગ {{count}} વર્ષ"
  }
}, u = (r, n, t) => {
  let e;
  const o = s[r];
  return typeof o == "string" ? e = o : n === 1 ? e = o.one : e = o.other.replace("{{count}}", String(n)), t?.addSuffix ? t.comparison && t.comparison > 0 ? e + "માં" : e + " પહેલાં" : e;
};
export {
  u as formatDistance
};
