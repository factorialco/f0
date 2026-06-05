import { buildMatchFn as t } from "../../_lib/buildMatchFn.js";
import { buildMatchPatternFn as i } from "../../_lib/buildMatchPatternFn.js";
const r = /^(\d+)(th|st|nd|rd)?/i, e = /\d+/i, n = {
  narrow: /^(ب|ك)/i,
  wide: /^(مىيلادىدىن بۇرۇن|مىيلادىدىن كىيىن)/i
}, s = {
  any: [/^بۇرۇن/i, /^كىيىن/i]
}, d = {
  narrow: /^[1234]/i,
  abbreviated: /^چ[1234]/i,
  wide: /^چارەك [1234]/i
}, o = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, h = {
  // eslint-disable-next-line no-misleading-character-class
  narrow: /^[يفمئامئ‍ئاسۆند]/i,
  abbreviated: /^(يانۋار|فېۋىرال|مارت|ئاپرىل|ماي|ئىيۇن|ئىيول|ئاۋغۇست|سىنتەبىر|ئۆكتەبىر|نويابىر|دىكابىر)/i,
  wide: /^(يانۋار|فېۋىرال|مارت|ئاپرىل|ماي|ئىيۇن|ئىيول|ئاۋغۇست|سىنتەبىر|ئۆكتەبىر|نويابىر|دىكابىر)/i
}, c = {
  narrow: [
    /^ي/i,
    /^ف/i,
    /^م/i,
    /^ا/i,
    /^م/i,
    /^ى‍/i,
    /^ى‍/i,
    /^ا‍/i,
    /^س/i,
    /^ۆ/i,
    /^ن/i,
    /^د/i
  ],
  any: [
    /^يان/i,
    /^فېۋ/i,
    /^مار/i,
    /^ئاپ/i,
    /^ماي/i,
    /^ئىيۇن/i,
    /^ئىيول/i,
    /^ئاۋ/i,
    /^سىن/i,
    /^ئۆك/i,
    /^نوي/i,
    /^دىك/i
  ]
}, P = {
  narrow: /^[دسچپجشي]/i,
  short: /^(يە|دۈ|سە|چا|پە|جۈ|شە)/i,
  abbreviated: /^(يە|دۈ|سە|چا|پە|جۈ|شە)/i,
  wide: /^(يەكشەنبە|دۈشەنبە|سەيشەنبە|چارشەنبە|پەيشەنبە|جۈمە|شەنبە)/i
}, m = {
  narrow: [/^ي/i, /^د/i, /^س/i, /^چ/i, /^پ/i, /^ج/i, /^ش/i],
  any: [/^ي/i, /^د/i, /^س/i, /^چ/i, /^پ/i, /^ج/i, /^ش/i]
}, l = {
  narrow: /^(ئە|چ|ك|چ|(دە|ئەتىگەن) ( ئە‍|چۈشتىن كىيىن|ئاخشىم|كىچە))/i,
  any: /^(ئە|چ|ك|چ|(دە|ئەتىگەن) ( ئە‍|چۈشتىن كىيىن|ئاخشىم|كىچە))/i
}, u = {
  any: {
    am: /^ئە/i,
    pm: /^چ/i,
    midnight: /^ك/i,
    noon: /^چ/i,
    morning: /ئەتىگەن/i,
    afternoon: /چۈشتىن كىيىن/i,
    evening: /ئاخشىم/i,
    night: /كىچە/i
  }
}, w = {
  ordinalNumber: i({
    matchPattern: r,
    parsePattern: e,
    valueCallback: (a) => parseInt(a, 10)
  }),
  era: t({
    matchPatterns: n,
    defaultMatchWidth: "wide",
    parsePatterns: s,
    defaultParseWidth: "any"
  }),
  quarter: t({
    matchPatterns: d,
    defaultMatchWidth: "wide",
    parsePatterns: o,
    defaultParseWidth: "any",
    valueCallback: (a) => a + 1
  }),
  month: t({
    matchPatterns: h,
    defaultMatchWidth: "wide",
    parsePatterns: c,
    defaultParseWidth: "any"
  }),
  day: t({
    matchPatterns: P,
    defaultMatchWidth: "wide",
    parsePatterns: m,
    defaultParseWidth: "any"
  }),
  dayPeriod: t({
    matchPatterns: l,
    defaultMatchWidth: "any",
    parsePatterns: u,
    defaultParseWidth: "any"
  })
};
export {
  w as match
};
