import { buildMatchFn as a } from "../../_lib/buildMatchFn.js";
import { buildMatchPatternFn as t } from "../../_lib/buildMatchPatternFn.js";
const n = /^(\d+)(d|na|tr|mh)?/i, r = /\d+/i, e = {
  narrow: /^(r|a)/i,
  abbreviated: /^(r\.?\s?c\.?|r\.?\s?a\.?\s?c\.?|a\.?\s?d\.?|a\.?\s?c\.?)/i,
  wide: /^(ro Chrìosta|ron aois choitchinn|anno domini|aois choitcheann)/i
}, d = {
  any: [/^b/i, /^(a|c)/i]
}, s = {
  narrow: /^[1234]/i,
  abbreviated: /^c[1234]/i,
  wide: /^[1234](cd|na|tr|mh)? cairteal/i
}, h = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, c = {
  narrow: /^[fgmcòilsd]/i,
  abbreviated: /^(faoi|gear|màrt|gibl|cèit|ògmh|iuch|lùn|sult|dàmh|samh|dùbh)/i,
  wide: /^(am faoilleach|an gearran|am màrt|an giblean|an cèitean|an t-Ògmhios|an t-Iuchar|an lùnastal|an t-Sultain|an dàmhair|an t-Samhain|an dùbhlachd)/i
}, m = {
  narrow: [
    /^f/i,
    /^g/i,
    /^m/i,
    /^g/i,
    /^c/i,
    /^ò/i,
    /^i/i,
    /^l/i,
    /^s/i,
    /^d/i,
    /^s/i,
    /^d/i
  ],
  any: [
    /^fa/i,
    /^ge/i,
    /^mà/i,
    /^gi/i,
    /^c/i,
    /^ò/i,
    /^i/i,
    /^l/i,
    /^su/i,
    /^d/i,
    /^sa/i,
    /^d/i
  ]
}, o = {
  narrow: /^[dlmcahs]/i,
  short: /^(dò|lu|mà|ci|ar|ha|sa)/i,
  abbreviated: /^(did|dil|dim|dic|dia|dih|dis)/i,
  wide: /^(didòmhnaich|diluain|dimàirt|diciadain|diardaoin|dihaoine|disathairne)/i
}, l = {
  narrow: [/^d/i, /^l/i, /^m/i, /^c/i, /^a/i, /^h/i, /^s/i],
  any: [/^d/i, /^l/i, /^m/i, /^c/i, /^a/i, /^h/i, /^s/i]
}, P = {
  narrow: /^(a|p|mi|n|(san|aig) (madainn|feasgar|feasgar|oidhche))/i,
  any: /^([ap]\.?\s?m\.?|meadhan oidhche|meadhan là|(san|aig) (madainn|feasgar|feasgar|oidhche))/i
}, u = {
  any: {
    am: /^m/i,
    pm: /^f/i,
    midnight: /^meadhan oidhche/i,
    noon: /^meadhan là/i,
    morning: /sa mhadainn/i,
    afternoon: /feasgar/i,
    evening: /feasgar/i,
    night: /air an oidhche/i
  }
}, b = {
  ordinalNumber: t({
    matchPattern: n,
    parsePattern: r,
    valueCallback: (i) => parseInt(i, 10)
  }),
  era: a({
    matchPatterns: e,
    defaultMatchWidth: "wide",
    parsePatterns: d,
    defaultParseWidth: "any"
  }),
  quarter: a({
    matchPatterns: s,
    defaultMatchWidth: "wide",
    parsePatterns: h,
    defaultParseWidth: "any",
    valueCallback: (i) => i + 1
  }),
  month: a({
    matchPatterns: c,
    defaultMatchWidth: "wide",
    parsePatterns: m,
    defaultParseWidth: "any"
  }),
  day: a({
    matchPatterns: o,
    defaultMatchWidth: "wide",
    parsePatterns: l,
    defaultParseWidth: "any"
  }),
  dayPeriod: a({
    matchPatterns: P,
    defaultMatchWidth: "any",
    parsePatterns: u,
    defaultParseWidth: "any"
  })
};
export {
  b as match
};
