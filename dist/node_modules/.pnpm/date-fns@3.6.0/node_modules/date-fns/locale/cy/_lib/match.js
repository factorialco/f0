import { buildMatchFn as a } from "../../_lib/buildMatchFn.js";
import { buildMatchPatternFn as r } from "../../_lib/buildMatchPatternFn.js";
const t = /^(\d+)(af|ail|ydd|ed|fed|eg|ain)?/i, e = /\d+/i, n = {
  narrow: /^(c|o)/i,
  abbreviated: /^(c\.?\s?c\.?|o\.?\s?c\.?)/i,
  wide: /^(cyn christ|ar ôl crist|ar ol crist)/i
}, d = {
  wide: [/^c/i, /^(ar ôl crist|ar ol crist)/i],
  any: [/^c/i, /^o/i]
}, h = {
  narrow: /^[1234]/i,
  abbreviated: /^ch[1234]/i,
  wide: /^(chwarter 1af)|([234](ail|ydd)? chwarter)/i
}, s = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, c = {
  narrow: /^(i|ch|m|e|g|a|h|t|rh)/i,
  abbreviated: /^(ion|chwe|maw|ebr|mai|meh|gor|aws|med|hyd|tach|rhag)/i,
  wide: /^(ionawr|chwefror|mawrth|ebrill|mai|mehefin|gorffennaf|awst|medi|hydref|tachwedd|rhagfyr)/i
}, o = {
  narrow: [
    /^i/i,
    /^ch/i,
    /^m/i,
    /^e/i,
    /^m/i,
    /^m/i,
    /^g/i,
    /^a/i,
    /^m/i,
    /^h/i,
    /^t/i,
    /^rh/i
  ],
  any: [
    /^io/i,
    /^ch/i,
    /^maw/i,
    /^e/i,
    /^mai/i,
    /^meh/i,
    /^g/i,
    /^a/i,
    /^med/i,
    /^h/i,
    /^t/i,
    /^rh/i
  ]
}, m = {
  narrow: /^(s|ll|m|i|g)/i,
  short: /^(su|ll|ma|me|ia|gw|sa)/i,
  abbreviated: /^(sul|llun|maw|mer|iau|gwe|sad)/i,
  wide: /^dydd (sul|llun|mawrth|mercher|iau|gwener|sadwrn)/i
}, y = {
  narrow: [/^s/i, /^ll/i, /^m/i, /^m/i, /^i/i, /^g/i, /^s/i],
  wide: [
    /^dydd su/i,
    /^dydd ll/i,
    /^dydd ma/i,
    /^dydd me/i,
    /^dydd i/i,
    /^dydd g/i,
    /^dydd sa/i
  ],
  any: [/^su/i, /^ll/i, /^ma/i, /^me/i, /^i/i, /^g/i, /^sa/i]
}, l = {
  narrow: /^(b|h|hn|hd|(yn y|y|yr|gyda'r) (bore|prynhawn|nos|hwyr))/i,
  any: /^(y\.?\s?[bh]\.?|hanner nos|hanner dydd|(yn y|y|yr|gyda'r) (bore|prynhawn|nos|hwyr))/i
}, w = {
  any: {
    am: /^b|(y\.?\s?b\.?)/i,
    pm: /^h|(y\.?\s?h\.?)|(yr hwyr)/i,
    midnight: /^hn|hanner nos/i,
    noon: /^hd|hanner dydd/i,
    morning: /bore/i,
    afternoon: /prynhawn/i,
    evening: /^gyda'r nos$/i,
    night: /blah/i
  }
}, b = {
  ordinalNumber: r({
    matchPattern: t,
    parsePattern: e,
    valueCallback: (i) => parseInt(i, 10)
  }),
  era: a({
    matchPatterns: n,
    defaultMatchWidth: "wide",
    parsePatterns: d,
    defaultParseWidth: "any"
  }),
  quarter: a({
    matchPatterns: h,
    defaultMatchWidth: "wide",
    parsePatterns: s,
    defaultParseWidth: "any",
    valueCallback: (i) => i + 1
  }),
  month: a({
    matchPatterns: c,
    defaultMatchWidth: "wide",
    parsePatterns: o,
    defaultParseWidth: "any"
  }),
  day: a({
    matchPatterns: m,
    defaultMatchWidth: "wide",
    parsePatterns: y,
    defaultParseWidth: "any"
  }),
  dayPeriod: a({
    matchPatterns: l,
    defaultMatchWidth: "any",
    parsePatterns: w,
    defaultParseWidth: "any"
  })
};
export {
  b as match
};
