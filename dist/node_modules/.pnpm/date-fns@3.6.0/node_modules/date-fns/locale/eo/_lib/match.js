import { buildMatchPatternFn as e } from "../../_lib/buildMatchPatternFn.js";
import { buildMatchFn as a } from "../../_lib/buildMatchFn.js";
const i = /^(\d+)(-?a)?/i, r = /\d+/i, n = {
  narrow: /^([ap]k)/i,
  abbreviated: /^([ap]\.?\s?k\.?\s?e\.?)/i,
  wide: /^((antaǔ |post )?komuna erao)/i
}, o = {
  any: [/^a/i, /^[kp]/i]
}, s = {
  narrow: /^[1234]/i,
  abbreviated: /^k[1234]/i,
  wide: /^[1234](-?a)? kvaronjaro/i
}, m = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, d = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|maj|jun|jul|a(ŭ|ux|uh|u)g|sep|okt|nov|dec)/i,
  wide: /^(januaro|februaro|marto|aprilo|majo|junio|julio|a(ŭ|ux|uh|u)gusto|septembro|oktobro|novembro|decembro)/i
}, u = {
  narrow: [
    /^j/i,
    /^f/i,
    /^m/i,
    /^a/i,
    /^m/i,
    /^j/i,
    /^j/i,
    /^a/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ],
  any: [
    /^ja/i,
    /^f/i,
    /^mar/i,
    /^ap/i,
    /^maj/i,
    /^jun/i,
    /^jul/i,
    /^a(u|ŭ)/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ]
}, h = {
  narrow: /^[dlmĵjvs]/i,
  short: /^(di|lu|ma|me|(ĵ|jx|jh|j)a|ve|sa)/i,
  abbreviated: /^(dim|lun|mar|mer|(ĵ|jx|jh|j)a(ŭ|ux|uh|u)|ven|sab)/i,
  wide: /^(diman(ĉ|cx|ch|c)o|lundo|mardo|merkredo|(ĵ|jx|jh|j)a(ŭ|ux|uh|u)do|vendredo|sabato)/i
}, c = {
  narrow: [/^d/i, /^l/i, /^m/i, /^m/i, /^(j|ĵ)/i, /^v/i, /^s/i],
  any: [/^d/i, /^l/i, /^ma/i, /^me/i, /^(j|ĵ)/i, /^v/i, /^s/i]
}, p = {
  narrow: /^([ap]|(posttagmez|noktomez|tagmez|maten|vesper|nokt)[eo])/i,
  abbreviated: /^([ap][.\s]?t[.\s]?m[.\s]?|(posttagmez|noktomez|tagmez|maten|vesper|nokt)[eo])/i,
  wide: /^(anta(ŭ|ux)tagmez|posttagmez|noktomez|tagmez|maten|vesper|nokt)[eo]/i
}, P = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^noktom/i,
    noon: /^t/i,
    morning: /^m/i,
    afternoon: /^posttagmeze/i,
    evening: /^v/i,
    night: /^n/i
  }
}, b = {
  ordinalNumber: e({
    matchPattern: i,
    parsePattern: r,
    valueCallback: function(t) {
      return parseInt(t, 10);
    }
  }),
  era: a({
    matchPatterns: n,
    defaultMatchWidth: "wide",
    parsePatterns: o,
    defaultParseWidth: "any"
  }),
  quarter: a({
    matchPatterns: s,
    defaultMatchWidth: "wide",
    parsePatterns: m,
    defaultParseWidth: "any",
    valueCallback: function(t) {
      return t + 1;
    }
  }),
  month: a({
    matchPatterns: d,
    defaultMatchWidth: "wide",
    parsePatterns: u,
    defaultParseWidth: "any"
  }),
  day: a({
    matchPatterns: h,
    defaultMatchWidth: "wide",
    parsePatterns: c,
    defaultParseWidth: "any"
  }),
  dayPeriod: a({
    matchPatterns: p,
    defaultMatchWidth: "wide",
    parsePatterns: P,
    defaultParseWidth: "any"
  })
};
export {
  b as match
};
