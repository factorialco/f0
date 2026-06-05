import { buildMatchFn as t } from "../../_lib/buildMatchFn.js";
import { buildMatchPatternFn as r } from "../../_lib/buildMatchPatternFn.js";
const i = /^(\d+)(-rë|-të|t|)?/i, e = /\d+/i, n = {
  narrow: /^(p|m)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(para krishtit|mbas krishtit)/i
}, s = {
  any: [/^b/i, /^(p|m)/i]
}, m = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234]-mujori (i{1,3}|iv)/i
}, d = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, h = {
  narrow: /^[jsmpqkftnd]/i,
  abbreviated: /^(jan|shk|mar|pri|maj|qer|kor|gus|sht|tet|nën|dhj)/i,
  wide: /^(janar|shkurt|mars|prill|maj|qershor|korrik|gusht|shtator|tetor|nëntor|dhjetor)/i
}, o = {
  narrow: [
    /^j/i,
    /^s/i,
    /^m/i,
    /^p/i,
    /^m/i,
    /^q/i,
    /^k/i,
    /^g/i,
    /^s/i,
    /^t/i,
    /^n/i,
    /^d/i
  ],
  any: [
    /^ja/i,
    /^shk/i,
    /^mar/i,
    /^pri/i,
    /^maj/i,
    /^qer/i,
    /^kor/i,
    /^gu/i,
    /^sht/i,
    /^tet/i,
    /^n/i,
    /^d/i
  ]
}, c = {
  narrow: /^[dhmeps]/i,
  short: /^(di|hë|ma|më|en|pr|sh)/i,
  abbreviated: /^(die|hën|mar|mër|enj|pre|sht)/i,
  wide: /^(dielë|hënë|martë|mërkurë|enjte|premte|shtunë)/i
}, p = {
  narrow: [/^d/i, /^h/i, /^m/i, /^m/i, /^e/i, /^p/i, /^s/i],
  any: [/^d/i, /^h/i, /^ma/i, /^më/i, /^e/i, /^p/i, /^s/i]
}, P = {
  narrow: /^(p|m|me|në (mëngjes|mbasdite|mbrëmje|mesnatë))/i,
  any: /^([pm]\.?\s?d\.?|drek|në (mëngjes|mbasdite|mbrëmje|mesnatë))/i
}, u = {
  any: {
    am: /^p/i,
    pm: /^m/i,
    midnight: /^me/i,
    noon: /^dr/i,
    morning: /mëngjes/i,
    afternoon: /mbasdite/i,
    evening: /mbrëmje/i,
    night: /natë/i
  }
}, j = {
  ordinalNumber: r({
    matchPattern: i,
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
    matchPatterns: m,
    defaultMatchWidth: "wide",
    parsePatterns: d,
    defaultParseWidth: "any",
    valueCallback: (a) => a + 1
  }),
  month: t({
    matchPatterns: h,
    defaultMatchWidth: "wide",
    parsePatterns: o,
    defaultParseWidth: "any"
  }),
  day: t({
    matchPatterns: c,
    defaultMatchWidth: "wide",
    parsePatterns: p,
    defaultParseWidth: "any"
  }),
  dayPeriod: t({
    matchPatterns: P,
    defaultMatchWidth: "any",
    parsePatterns: u,
    defaultParseWidth: "any"
  })
};
export {
  j as match
};
