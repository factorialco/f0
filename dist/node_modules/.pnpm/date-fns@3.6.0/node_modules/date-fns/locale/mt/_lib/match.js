import { buildMatchFn as a } from "../../_lib/buildMatchFn.js";
import { buildMatchPatternFn as t } from "../../_lib/buildMatchPatternFn.js";
const r = /^(\d+)(º)?/i, e = /\d+/i, n = {
  narrow: /^(q|w)/i,
  abbreviated: /^(q\.?\s?k\.?|b\.?\s?c\.?\s?e\.?|w\.?\s?k\.?)/i,
  wide: /^(qabel kristu|before common era|wara kristu|common era)/i
}, s = {
  any: [/^(q|b)/i, /^(w|c)/i]
}, o = {
  narrow: /^[1234]/i,
  abbreviated: /^k[1234]/i,
  wide: /^[1234](\.)? kwart/i
}, l = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, d = {
  narrow: /^[jfmaglsond]/i,
  abbreviated: /^(jan|fra|mar|apr|mej|ġun|lul|aww|set|ott|nov|diċ)/i,
  wide: /^(jannar|frar|marzu|april|mejju|ġunju|lulju|awwissu|settembru|ottubru|novembru|diċembru)/i
}, m = {
  narrow: [
    /^j/i,
    /^f/i,
    /^m/i,
    /^a/i,
    /^m/i,
    /^ġ/i,
    /^l/i,
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
    /^mej/i,
    /^ġ/i,
    /^l/i,
    /^aw/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ]
}, h = {
  narrow: /^[ħteġs]/i,
  short: /^(ħa|tn|tl|er|ħa|ġi|si)/i,
  abbreviated: /^(ħad|tne|tli|erb|ħam|ġim|sib)/i,
  wide: /^(il-ħadd|it-tnejn|it-tlieta|l-erbgħa|il-ħamis|il-ġimgħa|is-sibt)/i
}, c = {
  narrow: [/^ħ/i, /^t/i, /^t/i, /^e/i, /^ħ/i, /^ġ/i, /^s/i],
  any: [
    /^(il-)?ħad/i,
    /^(it-)?tn/i,
    /^(it-)?tl/i,
    /^(l-)?er/i,
    /^(il-)?ham/i,
    /^(il-)?ġi/i,
    /^(is-)?si/i
  ]
}, f = {
  narrow: /^(a|p|f'nofsillejl|f'nofsinhar|(ta') (għodwa|wara nofsinhar|filgħaxija|lejl))/i,
  any: /^([ap]\.?\s?m\.?|f'nofsillejl|f'nofsinhar|(ta') (għodwa|wara nofsinhar|filgħaxija|lejl))/i
}, u = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^f'nofsillejl/i,
    noon: /^f'nofsinhar/i,
    morning: /għodwa/i,
    afternoon: /wara(\s.*)nofsinhar/i,
    evening: /filgħaxija/i,
    night: /lejl/i
  }
}, b = {
  ordinalNumber: t({
    matchPattern: r,
    parsePattern: e,
    valueCallback: (i) => parseInt(i, 10)
  }),
  era: a({
    matchPatterns: n,
    defaultMatchWidth: "wide",
    parsePatterns: s,
    defaultParseWidth: "any"
  }),
  quarter: a({
    matchPatterns: o,
    defaultMatchWidth: "wide",
    parsePatterns: l,
    defaultParseWidth: "any",
    valueCallback: (i) => i + 1
  }),
  month: a({
    matchPatterns: d,
    defaultMatchWidth: "wide",
    parsePatterns: m,
    defaultParseWidth: "any"
  }),
  day: a({
    matchPatterns: h,
    defaultMatchWidth: "wide",
    parsePatterns: c,
    defaultParseWidth: "any"
  }),
  dayPeriod: a({
    matchPatterns: f,
    defaultMatchWidth: "any",
    parsePatterns: u,
    defaultParseWidth: "any"
  })
};
export {
  b as match
};
