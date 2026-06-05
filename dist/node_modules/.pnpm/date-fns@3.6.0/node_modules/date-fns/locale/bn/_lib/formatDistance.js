import { numberToLocale as u } from "./localize.js";
const s = {
  lessThanXSeconds: {
    one: "প্রায় ১ সেকেন্ড",
    other: "প্রায় {{count}} সেকেন্ড"
  },
  xSeconds: {
    one: "১ সেকেন্ড",
    other: "{{count}} সেকেন্ড"
  },
  halfAMinute: "আধ মিনিট",
  lessThanXMinutes: {
    one: "প্রায় ১ মিনিট",
    other: "প্রায় {{count}} মিনিট"
  },
  xMinutes: {
    one: "১ মিনিট",
    other: "{{count}} মিনিট"
  },
  aboutXHours: {
    one: "প্রায় ১ ঘন্টা",
    other: "প্রায় {{count}} ঘন্টা"
  },
  xHours: {
    one: "১ ঘন্টা",
    other: "{{count}} ঘন্টা"
  },
  xDays: {
    one: "১ দিন",
    other: "{{count}} দিন"
  },
  aboutXWeeks: {
    one: "প্রায় ১ সপ্তাহ",
    other: "প্রায় {{count}} সপ্তাহ"
  },
  xWeeks: {
    one: "১ সপ্তাহ",
    other: "{{count}} সপ্তাহ"
  },
  aboutXMonths: {
    one: "প্রায় ১ মাস",
    other: "প্রায় {{count}} মাস"
  },
  xMonths: {
    one: "১ মাস",
    other: "{{count}} মাস"
  },
  aboutXYears: {
    one: "প্রায় ১ বছর",
    other: "প্রায় {{count}} বছর"
  },
  xYears: {
    one: "১ বছর",
    other: "{{count}} বছর"
  },
  overXYears: {
    one: "১ বছরের বেশি",
    other: "{{count}} বছরের বেশি"
  },
  almostXYears: {
    one: "প্রায় ১ বছর",
    other: "প্রায় {{count}} বছর"
  }
}, a = (r, n, t) => {
  let o;
  const e = s[r];
  return typeof e == "string" ? o = e : n === 1 ? o = e.one : o = e.other.replace("{{count}}", u(n)), t?.addSuffix ? t.comparison && t.comparison > 0 ? o + " এর মধ্যে" : o + " আগে" : o;
};
export {
  a as formatDistance
};
