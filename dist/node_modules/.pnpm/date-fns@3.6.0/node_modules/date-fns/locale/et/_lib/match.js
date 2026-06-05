import { buildMatchFn as a } from "../../_lib/buildMatchFn.js";
import { buildMatchPatternFn as e } from "../../_lib/buildMatchPatternFn.js";
const i = /^\d+\./i, r = /\d+/i, n = {
  narrow: /^(e\.m\.a|m\.a\.j|eKr|pKr)/i,
  abbreviated: /^(e\.m\.a|m\.a\.j|eKr|pKr)/i,
  wide: /^(enne meie ajaarvamist|meie ajaarvamise järgi|enne Kristust|pärast Kristust)/i
}, s = {
  any: [/^e/i, /^(m|p)/i]
}, m = {
  narrow: /^[1234]/i,
  abbreviated: /^K[1234]/i,
  wide: /^[1234](\.)? kvartal/i
}, d = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, o = {
  narrow: /^[jvmasond]/i,
  abbreviated: /^(jaan|veebr|märts|apr|mai|juuni|juuli|aug|sept|okt|nov|dets)/i,
  wide: /^(jaanuar|veebruar|märts|aprill|mai|juuni|juuli|august|september|oktoober|november|detsember)/i
}, u = {
  narrow: [
    /^j/i,
    /^v/i,
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
    /^v/i,
    /^mär/i,
    /^ap/i,
    /^mai/i,
    /^juun/i,
    /^juul/i,
    /^au/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ]
}, l = {
  narrow: /^[petknrl]/i,
  short: /^[petknrl]/i,
  abbreviated: /^(püh?|esm?|tei?|kolm?|nel?|ree?|laup?)\.?/i,
  wide: /^(pühapäev|esmaspäev|teisipäev|kolmapäev|neljapäev|reede|laupäev)/i
}, p = {
  any: [/^p/i, /^e/i, /^t/i, /^k/i, /^n/i, /^r/i, /^l/i]
}, h = {
  any: /^(am|pm|keskööl?|keskpäev(al)?|hommik(ul)?|pärastlõunal?|õhtul?|öö(sel)?)/i
}, c = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^keskö/i,
    noon: /^keskp/i,
    morning: /hommik/i,
    afternoon: /pärastlõuna/i,
    evening: /õhtu/i,
    night: /öö/i
  }
}, b = {
  ordinalNumber: e({
    matchPattern: i,
    parsePattern: r,
    valueCallback: (t) => parseInt(t, 10)
  }),
  era: a({
    matchPatterns: n,
    defaultMatchWidth: "wide",
    parsePatterns: s,
    defaultParseWidth: "any"
  }),
  quarter: a({
    matchPatterns: m,
    defaultMatchWidth: "wide",
    parsePatterns: d,
    defaultParseWidth: "any",
    valueCallback: (t) => t + 1
  }),
  month: a({
    matchPatterns: o,
    defaultMatchWidth: "wide",
    parsePatterns: u,
    defaultParseWidth: "any"
  }),
  day: a({
    matchPatterns: l,
    defaultMatchWidth: "wide",
    parsePatterns: p,
    defaultParseWidth: "any"
  }),
  dayPeriod: a({
    matchPatterns: h,
    defaultMatchWidth: "any",
    parsePatterns: c,
    defaultParseWidth: "any"
  })
};
export {
  b as match
};
