import { buildMatchPatternFn as i } from "../../_lib/buildMatchPatternFn.js";
import { buildMatchFn as a } from "../../_lib/buildMatchFn.js";
const r = /^(\d+)(th|st|nd|rd)?/i, e = /\d+/i, n = {
  narrow: /[قب]/,
  abbreviated: /[قب]\.م\./,
  wide: /(قبل|بعد) الميلاد/
}, s = {
  any: [/قبل/, /بعد/]
}, d = {
  narrow: /^[1234]/i,
  abbreviated: /ر[1234]/,
  wide: /الربع (الأول|الثاني|الثالث|الرابع)/
}, o = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, h = {
  narrow: /^[أيفمسند]/,
  abbreviated: /^(يناير|فبراير|مارس|أبريل|مايو|يونيو|يوليو|أغسطس|سبتمبر|أكتوبر|نوفمبر|ديسمبر)/,
  wide: /^(يناير|فبراير|مارس|أبريل|مايو|يونيو|يوليو|أغسطس|سبتمبر|أكتوبر|نوفمبر|ديسمبر)/
}, c = {
  narrow: [
    /^ي/i,
    /^ف/i,
    /^م/i,
    /^أ/i,
    /^م/i,
    /^ي/i,
    /^ي/i,
    /^أ/i,
    /^س/i,
    /^أ/i,
    /^ن/i,
    /^د/i
  ],
  any: [
    /^يناير/i,
    /^فبراير/i,
    /^مارس/i,
    /^أبريل/i,
    /^مايو/i,
    /^يونيو/i,
    /^يوليو/i,
    /^أغسطس/i,
    /^سبتمبر/i,
    /^أكتوبر/i,
    /^نوفمبر/i,
    /^ديسمبر/i
  ]
}, P = {
  narrow: /^[حنثرخجس]/i,
  short: /^(أحد|اثنين|ثلاثاء|أربعاء|خميس|جمعة|سبت)/i,
  abbreviated: /^(أحد|اثنين|ثلاثاء|أربعاء|خميس|جمعة|سبت)/i,
  wide: /^(الأحد|الاثنين|الثلاثاء|الأربعاء|الخميس|الجمعة|السبت)/i
}, m = {
  narrow: [/^ح/i, /^ن/i, /^ث/i, /^ر/i, /^خ/i, /^ج/i, /^س/i],
  wide: [
    /^الأحد/i,
    /^الاثنين/i,
    /^الثلاثاء/i,
    /^الأربعاء/i,
    /^الخميس/i,
    /^الجمعة/i,
    /^السبت/i
  ],
  any: [/^أح/i, /^اث/i, /^ث/i, /^أر/i, /^خ/i, /^ج/i, /^س/i]
}, l = {
  narrow: /^(ص|م|منتصف الليل|الظهر|بعد الظهر|في الصباح|في المساء|في الليل)/,
  any: /^(ص|م|منتصف الليل|الظهر|بعد الظهر|في الصباح|في المساء|في الليل)/
}, u = {
  any: {
    am: /^ص/,
    pm: /^م/,
    midnight: /منتصف الليل/,
    noon: /الظهر/,
    afternoon: /بعد الظهر/,
    morning: /في الصباح/,
    evening: /في المساء/,
    night: /في الليل/
  }
}, w = {
  ordinalNumber: i({
    matchPattern: r,
    parsePattern: e,
    valueCallback: (t) => parseInt(t, 10)
  }),
  era: a({
    matchPatterns: n,
    defaultMatchWidth: "wide",
    parsePatterns: s,
    defaultParseWidth: "any"
  }),
  quarter: a({
    matchPatterns: d,
    defaultMatchWidth: "wide",
    parsePatterns: o,
    defaultParseWidth: "any",
    valueCallback: (t) => t + 1
  }),
  month: a({
    matchPatterns: h,
    defaultMatchWidth: "wide",
    parsePatterns: c,
    defaultParseWidth: "any"
  }),
  day: a({
    matchPatterns: P,
    defaultMatchWidth: "wide",
    parsePatterns: m,
    defaultParseWidth: "any"
  }),
  dayPeriod: a({
    matchPatterns: l,
    defaultMatchWidth: "any",
    parsePatterns: u,
    defaultParseWidth: "any"
  })
};
export {
  w as match
};
