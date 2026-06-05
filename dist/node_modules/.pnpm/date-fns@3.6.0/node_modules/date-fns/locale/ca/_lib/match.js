import { buildMatchFn as i } from "../../_lib/buildMatchFn.js";
import { buildMatchPatternFn as a } from "../../_lib/buildMatchPatternFn.js";
const t = /^(\d+)(è|r|n|r|t)?/i, r = /\d+/i, d = {
  narrow: /^(aC|dC)/i,
  abbreviated: /^(a. de C.|d. de C.)/i,
  wide: /^(abans de Crist|despr[eé]s de Crist)/i
}, n = {
  narrow: [/^aC/i, /^dC/i],
  abbreviated: [/^(a. de C.)/i, /^(d. de C.)/i],
  wide: [/^(abans de Crist)/i, /^(despr[eé]s de Crist)/i]
}, s = {
  narrow: /^[1234]/i,
  abbreviated: /^T[1234]/i,
  wide: /^[1234](è|r|n|r|t)? trimestre/i
}, m = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, o = {
  narrow: /^(GN|FB|MÇ|AB|MG|JN|JL|AG|ST|OC|NV|DS)/i,
  abbreviated: /^(gen.|febr.|març|abr.|maig|juny|jul.|ag.|set.|oct.|nov.|des.)/i,
  wide: /^(gener|febrer|març|abril|maig|juny|juliol|agost|setembre|octubre|novembre|desembre)/i
}, l = {
  narrow: [
    /^GN/i,
    /^FB/i,
    /^MÇ/i,
    /^AB/i,
    /^MG/i,
    /^JN/i,
    /^JL/i,
    /^AG/i,
    /^ST/i,
    /^OC/i,
    /^NV/i,
    /^DS/i
  ],
  abbreviated: [
    /^gen./i,
    /^febr./i,
    /^març/i,
    /^abr./i,
    /^maig/i,
    /^juny/i,
    /^jul./i,
    /^ag./i,
    /^set./i,
    /^oct./i,
    /^nov./i,
    /^des./i
  ],
  wide: [
    /^gener/i,
    /^febrer/i,
    /^març/i,
    /^abril/i,
    /^maig/i,
    /^juny/i,
    /^juliol/i,
    /^agost/i,
    /^setembre/i,
    /^octubre/i,
    /^novembre/i,
    /^desembre/i
  ]
}, b = {
  narrow: /^(dg\.|dl\.|dt\.|dm\.|dj\.|dv\.|ds\.)/i,
  short: /^(dg\.|dl\.|dt\.|dm\.|dj\.|dv\.|ds\.)/i,
  abbreviated: /^(dg\.|dl\.|dt\.|dm\.|dj\.|dv\.|ds\.)/i,
  wide: /^(diumenge|dilluns|dimarts|dimecres|dijous|divendres|dissabte)/i
}, c = {
  narrow: [/^dg./i, /^dl./i, /^dt./i, /^dm./i, /^dj./i, /^dv./i, /^ds./i],
  abbreviated: [/^dg./i, /^dl./i, /^dt./i, /^dm./i, /^dj./i, /^dv./i, /^ds./i],
  wide: [
    /^diumenge/i,
    /^dilluns/i,
    /^dimarts/i,
    /^dimecres/i,
    /^dijous/i,
    /^divendres/i,
    /^disssabte/i
  ]
}, h = {
  narrow: /^(a|p|mn|md|(del|de la) (matí|tarda|vespre|nit))/i,
  abbreviated: /^([ap]\.?\s?m\.?|mitjanit|migdia|(del|de la) (matí|tarda|vespre|nit))/i,
  wide: /^(ante meridiem|post meridiem|mitjanit|migdia|(del|de la) (matí|tarda|vespre|nit))/i
}, u = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mitjanit/i,
    noon: /^migdia/i,
    morning: /matí/i,
    afternoon: /tarda/i,
    evening: /vespre/i,
    night: /nit/i
  }
}, g = {
  ordinalNumber: a({
    matchPattern: t,
    parsePattern: r,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: i({
    matchPatterns: d,
    defaultMatchWidth: "wide",
    parsePatterns: n,
    defaultParseWidth: "wide"
  }),
  quarter: i({
    matchPatterns: s,
    defaultMatchWidth: "wide",
    parsePatterns: m,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: i({
    matchPatterns: o,
    defaultMatchWidth: "wide",
    parsePatterns: l,
    defaultParseWidth: "wide"
  }),
  day: i({
    matchPatterns: b,
    defaultMatchWidth: "wide",
    parsePatterns: c,
    defaultParseWidth: "wide"
  }),
  dayPeriod: i({
    matchPatterns: h,
    defaultMatchWidth: "wide",
    parsePatterns: u,
    defaultParseWidth: "any"
  })
};
export {
  g as match
};
