const s = {
  lessThanXSeconds: {
    one: "کمتر از یک ثانیه",
    other: "کمتر از {{count}} ثانیه"
  },
  xSeconds: {
    one: "1 ثانیه",
    other: "{{count}} ثانیه"
  },
  halfAMinute: "نیم دقیقه",
  lessThanXMinutes: {
    one: "کمتر از یک دقیقه",
    other: "کمتر از {{count}} دقیقه"
  },
  xMinutes: {
    one: "1 دقیقه",
    other: "{{count}} دقیقه"
  },
  aboutXHours: {
    one: "حدود 1 ساعت",
    other: "حدود {{count}} ساعت"
  },
  xHours: {
    one: "1 ساعت",
    other: "{{count}} ساعت"
  },
  xDays: {
    one: "1 روز",
    other: "{{count}} روز"
  },
  aboutXWeeks: {
    one: "حدود 1 هفته",
    other: "حدود {{count}} هفته"
  },
  xWeeks: {
    one: "1 هفته",
    other: "{{count}} هفته"
  },
  aboutXMonths: {
    one: "حدود 1 ماه",
    other: "حدود {{count}} ماه"
  },
  xMonths: {
    one: "1 ماه",
    other: "{{count}} ماه"
  },
  aboutXYears: {
    one: "حدود 1 سال",
    other: "حدود {{count}} سال"
  },
  xYears: {
    one: "1 سال",
    other: "{{count}} سال"
  },
  overXYears: {
    one: "بیشتر از 1 سال",
    other: "بیشتر از {{count}} سال"
  },
  almostXYears: {
    one: "نزدیک 1 سال",
    other: "نزدیک {{count}} سال"
  }
}, u = (r, n, t) => {
  let e;
  const o = s[r];
  return typeof o == "string" ? e = o : n === 1 ? e = o.one : e = o.other.replace("{{count}}", String(n)), t?.addSuffix ? t.comparison && t.comparison > 0 ? "در " + e : e + " قبل" : e;
};
export {
  u as formatDistance
};
