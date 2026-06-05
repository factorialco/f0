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
  narrow: /^[جفمأسند]/,
  abbreviated: /^(جانفي|فيفري|مارس|أفريل|ماي|جوان|جويلية|أوت|سبتمبر|أكتوبر|نوفمبر|ديسمبر)/,
  wide: /^(جانفي|فيفري|مارس|أفريل|ماي|جوان|جويلية|أوت|سبتمبر|أكتوبر|نوفمبر|ديسمبر)/
}, c = {
  narrow: [
    /^ج/i,
    /^ف/i,
    /^م/i,
    /^أ/i,
    /^م/i,
    /^ج/i,
    /^ج/i,
    /^أ/i,
    /^س/i,
    /^أ/i,
    /^ن/i,
    /^د/i
  ],
  any: [
    /^جانفي/i,
    /^فيفري/i,
    /^مارس/i,
    /^أفريل/i,
    /^ماي/i,
    /^جوان/i,
    /^جويلية/i,
    /^أوت/i,
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
  narrow: /^(ص|ع|ن ل|ل|(في|مع) (صباح|قايلة|عشية|ليل))/,
  any: /^([صع]|نص الليل|قايلة|(في|مع) (صباح|قايلة|عشية|ليل))/
}, u = {
  any: {
    am: /^ص/,
    pm: /^ع/,
    midnight: /نص الليل/,
    noon: /قايلة/,
    afternoon: /بعد القايلة/,
    morning: /صباح/,
    evening: /عشية/,
    night: /ليل/
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
