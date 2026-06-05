import { buildMatchFn as a } from "../../_lib/buildMatchFn.js";
import { buildMatchPatternFn as t } from "../../_lib/buildMatchPatternFn.js";
const r = /^(\d+)(.)?/i, e = /\d+/i, n = {
  narrow: /^(k.a.|k.o.)/i,
  abbreviated: /^(k.a.|k.o.)/i,
  wide: /^(kristo aurretik|kristo ondoren)/i
}, s = {
  narrow: [/^k.a./i, /^k.o./i],
  abbreviated: [/^(k.a.)/i, /^(k.o.)/i],
  wide: [/^(kristo aurretik)/i, /^(kristo ondoren)/i]
}, o = {
  narrow: /^[1234]/i,
  abbreviated: /^[1234]H/i,
  wide: /^[1234](.)? hiruhilekoa/i
}, d = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, u = {
  narrow: /^[uomaei]/i,
  abbreviated: /^(urt|ots|mar|api|mai|eka|uzt|abu|ira|urr|aza|abe)/i,
  wide: /^(urtarrila|otsaila|martxoa|apirila|maiatza|ekaina|uztaila|abuztua|iraila|urria|azaroa|abendua)/i
}, l = {
  narrow: [
    /^u/i,
    /^o/i,
    /^m/i,
    /^a/i,
    /^m/i,
    /^e/i,
    /^u/i,
    /^a/i,
    /^i/i,
    /^u/i,
    /^a/i,
    /^a/i
  ],
  any: [
    /^urt/i,
    /^ots/i,
    /^mar/i,
    /^api/i,
    /^mai/i,
    /^eka/i,
    /^uzt/i,
    /^abu/i,
    /^ira/i,
    /^urr/i,
    /^aza/i,
    /^abe/i
  ]
}, h = {
  narrow: /^[iaol]/i,
  short: /^(ig|al|as|az|og|or|lr)/i,
  abbreviated: /^(iga|ast|ast|ast|ost|ost|lar)/i,
  wide: /^(igandea|astelehena|asteartea|asteazkena|osteguna|ostirala|larunbata)/i
}, m = {
  narrow: [/^i/i, /^a/i, /^a/i, /^a/i, /^o/i, /^o/i, /^l/i],
  short: [/^ig/i, /^al/i, /^as/i, /^az/i, /^og/i, /^or/i, /^lr/i],
  abbreviated: [/^iga/i, /^ast/i, /^ast/i, /^ast/i, /^ost/i, /^ost/i, /^lar/i],
  wide: [
    /^igandea/i,
    /^astelehena/i,
    /^asteartea/i,
    /^asteazkena/i,
    /^osteguna/i,
    /^ostirala/i,
    /^larunbata/i
  ]
}, g = {
  narrow: /^(a|p|ge|eg|((goiza|goizean)|arratsaldea|(gaua|gauean)))/i,
  any: /^([ap]\.?\s?m\.?|gauerdia|eguerdia|((goiza|goizean)|arratsaldea|(gaua|gauean)))/i
}, c = {
  narrow: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^ge/i,
    noon: /^eg/i,
    morning: /goiz/i,
    afternoon: /arratsaldea/i,
    evening: /arratsaldea/i,
    night: /gau/i
  },
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^gauerdia/i,
    noon: /^eguerdia/i,
    morning: /goiz/i,
    afternoon: /arratsaldea/i,
    evening: /arratsaldea/i,
    night: /gau/i
  }
}, p = {
  ordinalNumber: t({
    matchPattern: r,
    parsePattern: e,
    valueCallback: (i) => parseInt(i, 10)
  }),
  era: a({
    matchPatterns: n,
    defaultMatchWidth: "wide",
    parsePatterns: s,
    defaultParseWidth: "wide"
  }),
  quarter: a({
    matchPatterns: o,
    defaultMatchWidth: "wide",
    parsePatterns: d,
    defaultParseWidth: "any",
    valueCallback: (i) => i + 1
  }),
  month: a({
    matchPatterns: u,
    defaultMatchWidth: "wide",
    parsePatterns: l,
    defaultParseWidth: "any"
  }),
  day: a({
    matchPatterns: h,
    defaultMatchWidth: "wide",
    parsePatterns: m,
    defaultParseWidth: "wide"
  }),
  dayPeriod: a({
    matchPatterns: g,
    defaultMatchWidth: "any",
    parsePatterns: c,
    defaultParseWidth: "any"
  })
};
export {
  p as match
};
