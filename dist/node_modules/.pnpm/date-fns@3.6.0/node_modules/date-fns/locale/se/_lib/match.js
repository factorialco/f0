import { buildMatchFn as a } from "../../_lib/buildMatchFn.js";
import { buildMatchPatternFn as t } from "../../_lib/buildMatchPatternFn.js";
const e = /^(\d+)\.?/i, n = /\d+/i, r = {
  narrow: /^(o\.? ?Kr\.?|m\.? ?Kr\.?)/i,
  abbreviated: /^(o\.? ?Kr\.?|m\.? ?Kr\.?)/i,
  wide: /^(ovdal Kristusa|ovdal min áiggi|maŋŋel Kristusa|min áigi)/i
}, s = {
  any: [/^o/i, /^m/i]
}, o = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](\.)? kvartála/i
}, m = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, d = {
  narrow: /^[ogncmsbčj]/i,
  abbreviated: /^(ođđa|guov|njuk|cuo|mies|geas|suoi|borg|čakč|golg|skáb|juov)\.?/i,
  wide: /^(ođđajagemánnu|guovvamánnu|njukčamánnu|cuoŋománnu|miessemánnu|geassemánnu|suoidnemánnu|borgemánnu|čakčamánnu|golggotmánnu|skábmamánnu|juovlamánnu)/i
}, u = {
  narrow: [
    /^o/i,
    /^g/i,
    /^n/i,
    /^c/i,
    /^m/i,
    /^g/i,
    /^s/i,
    /^b/i,
    /^č/i,
    /^g/i,
    /^s/i,
    /^j/i
  ],
  any: [
    /^o/i,
    /^gu/i,
    /^n/i,
    /^c/i,
    /^m/i,
    /^ge/i,
    /^su/i,
    /^b/i,
    /^č/i,
    /^go/i,
    /^sk/i,
    /^j/i
  ]
}, h = {
  narrow: /^[svmgdbl]/i,
  short: /^(sotn|vuos|maŋ|gask|duor|bear|láv)/i,
  abbreviated: /^(sotn|vuos|maŋ|gask|duor|bear|láv)/i,
  wide: /^(sotnabeaivi|vuossárga|maŋŋebárga|gaskavahkku|duorastat|bearjadat|lávvardat)/i
}, g = {
  any: [/^s/i, /^v/i, /^m/i, /^g/i, /^d/i, /^b/i, /^l/i]
}, c = {
  narrow: /^(gaskaidja|gaskabeaivvi|(på) (iđđes|maŋŋel gaskabeaivvi|eahkes|ihkku)|[ap])/i,
  any: /^([ap]\.?\s?m\.?|gaskaidja|gaskabeaivvi|(på) (iđđes|maŋŋel gaskabeaivvi|eahkes|ihkku))/i
}, l = {
  any: {
    am: /^a(\.?\s?m\.?)?$/i,
    pm: /^p(\.?\s?m\.?)?$/i,
    midnight: /^gaskai/i,
    noon: /^gaskab/i,
    morning: /iđđes/i,
    afternoon: /maŋŋel gaskabeaivvi/i,
    evening: /eahkes/i,
    night: /ihkku/i
  }
}, k = {
  ordinalNumber: t({
    matchPattern: e,
    parsePattern: n,
    valueCallback: (i) => parseInt(i, 10)
  }),
  era: a({
    matchPatterns: r,
    defaultMatchWidth: "wide",
    parsePatterns: s,
    defaultParseWidth: "any"
  }),
  quarter: a({
    matchPatterns: o,
    defaultMatchWidth: "wide",
    parsePatterns: m,
    defaultParseWidth: "any",
    valueCallback: (i) => i + 1
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
    parsePatterns: g,
    defaultParseWidth: "any"
  }),
  dayPeriod: a({
    matchPatterns: c,
    defaultMatchWidth: "any",
    parsePatterns: l,
    defaultParseWidth: "any"
  })
};
export {
  k as match
};
