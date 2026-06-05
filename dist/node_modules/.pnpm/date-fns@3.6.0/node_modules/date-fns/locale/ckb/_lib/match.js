import { buildMatchFn as t } from "../../_lib/buildMatchFn.js";
import { buildMatchPatternFn as i } from "../../_lib/buildMatchPatternFn.js";
const r = /^(\d+)(th|st|nd|rd)?/i, e = /\d+/i, n = {
  narrow: /^(پ|د)/i,
  abbreviated: /^(پ-ز|د.ز)/i,
  wide: /^(پێش زاین| دوای زاین)/i
}, s = {
  any: [/^د/g, /^پ/g]
}, d = {
  narrow: /^[1234]/i,
  abbreviated: /^م[1234]چ/i,
  wide: /^(یەکەم|دووەم|سێیەم| چوارەم) (چارەگی)? quarter/i
}, h = {
  wide: [/چارەگی یەکەم/, /چارەگی دووەم/, /چارەگی سيیەم/, /چارەگی چوارەم/],
  any: [/1/i, /2/i, /3/i, /4/i]
}, o = {
  narrow: /^(ک-د|ش|ئا|ن|م|ح|ت|ئە|تش-ی|تش-د|ک-ی)/i,
  abbreviated: /^(کان-دوو|شوب|ئاد|نیس|مایس|حوز|تەم|ئاب|ئەل|تش-یەک|تش-دوو|کان-یەک)/i,
  wide: /^(کانوونی دووەم|شوبات|ئادار|نیسان|مایس|حوزەیران|تەمموز|ئاب|ئەیلول|تشرینی یەکەم|تشرینی دووەم|کانوونی یەکەم)/i
}, c = {
  narrow: [
    /^ک-د/i,
    /^ش/i,
    /^ئا/i,
    /^ن/i,
    /^م/i,
    /^ح/i,
    /^ت/i,
    /^ئا/i,
    /^ئە/i,
    /^تش-ی/i,
    /^تش-د/i,
    /^ک-ی/i
  ],
  any: [
    /^کان-دوو/i,
    /^شوب/i,
    /^ئاد/i,
    /^نیس/i,
    /^مایس/i,
    /^حوز/i,
    /^تەم/i,
    /^ئاب/i,
    /^ئەل/i,
    /^تش-یەک/i,
    /^تش-دوو/i,
    /^|کان-یەک/i
  ]
}, P = {
  narrow: /^(ش|ی|د|س|چ|پ|هە)/i,
  short: /^(یە-شە|دوو-شە|سێ-شە|چو-شە|پێ-شە|هە|شە)/i,
  abbreviated: /^(یەک-شەم|دوو-شەم|سێ-شەم|چوار-شەم|پێنخ-شەم|هەینی|شەمە)/i,
  wide: /^(یەک شەمە|دوو شەمە|سێ شەمە|چوار شەمە|پێنج شەمە|هەینی|شەمە)/i
}, m = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, u = {
  narrow: /^(پ|د|ن-ش|ن| (بەیانی|دوای نیوەڕۆ|ئێوارە|شەو))/i,
  abbreviated: /^(پ-ن|د-ن|نیوە شەو|نیوەڕۆ|بەیانی|دوای نیوەڕۆ|ئێوارە|شەو)/,
  wide: /^(پێش نیوەڕۆ|دوای نیوەڕۆ|نیوەڕۆ|نیوە شەو|لەبەیانیدا|لەدواینیوەڕۆدا|لە ئێوارەدا|لە شەودا)/,
  any: /^(پ|د|بەیانی|نیوەڕۆ|ئێوارە|شەو)/
}, l = {
  any: {
    am: /^د/i,
    pm: /^پ/i,
    midnight: /^ن-ش/i,
    noon: /^ن/i,
    morning: /بەیانی/i,
    afternoon: /دواینیوەڕۆ/i,
    evening: /ئێوارە/i,
    night: /شەو/i
  }
}, b = {
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
    parsePatterns: h,
    defaultParseWidth: "any",
    valueCallback: (a) => a + 1
  }),
  month: t({
    matchPatterns: o,
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
    matchPatterns: u,
    defaultMatchWidth: "any",
    parsePatterns: l,
    defaultParseWidth: "any"
  })
};
export {
  b as match
};
