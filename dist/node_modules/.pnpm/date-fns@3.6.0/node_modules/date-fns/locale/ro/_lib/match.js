import { buildMatchFn as a } from "../../_lib/buildMatchFn.js";
import { buildMatchPatternFn as t } from "../../_lib/buildMatchPatternFn.js";
const e = /^(\d+)?/i, r = /\d+/i, n = {
  narrow: /^(Î|D)/i,
  abbreviated: /^(Î\.?\s?d\.?\s?C\.?|Î\.?\s?e\.?\s?n\.?|D\.?\s?C\.?|e\.?\s?n\.?)/i,
  wide: /^(Înainte de Cristos|Înaintea erei noastre|După Cristos|Era noastră)/i
}, s = {
  any: [/^ÎC/i, /^DC/i],
  wide: [
    /^(Înainte de Cristos|Înaintea erei noastre)/i,
    /^(După Cristos|Era noastră)/i
  ]
}, d = {
  narrow: /^[1234]/i,
  abbreviated: /^T[1234]/i,
  wide: /^trimestrul [1234]/i
}, m = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, o = {
  narrow: /^[ifmaasond]/i,
  abbreviated: /^(ian|feb|mar|apr|mai|iun|iul|aug|sep|oct|noi|dec)/i,
  wide: /^(ianuarie|februarie|martie|aprilie|mai|iunie|iulie|august|septembrie|octombrie|noiembrie|decembrie)/i
}, u = {
  narrow: [
    /^i/i,
    /^f/i,
    /^m/i,
    /^a/i,
    /^m/i,
    /^i/i,
    /^i/i,
    /^a/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ],
  any: [
    /^ia/i,
    /^f/i,
    /^mar/i,
    /^ap/i,
    /^mai/i,
    /^iun/i,
    /^iul/i,
    /^au/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ]
}, c = {
  narrow: /^[dlmjvs]/i,
  short: /^(d|l|ma|mi|j|v|s)/i,
  abbreviated: /^(dum|lun|mar|mie|jo|vi|sâ)/i,
  wide: /^(duminica|luni|marţi|miercuri|joi|vineri|sâmbătă)/i
}, h = {
  narrow: [/^d/i, /^l/i, /^m/i, /^m/i, /^j/i, /^v/i, /^s/i],
  any: [/^d/i, /^l/i, /^ma/i, /^mi/i, /^j/i, /^v/i, /^s/i]
}, p = {
  narrow: /^(a|p|mn|a|(dimineaţa|după-amiaza|seara|noaptea))/i,
  any: /^([ap]\.?\s?m\.?|miezul nopții|amiaza|(dimineaţa|după-amiaza|seara|noaptea))/i
}, l = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mn/i,
    noon: /amiaza/i,
    morning: /dimineaţa/i,
    afternoon: /după-amiaza/i,
    evening: /seara/i,
    night: /noaptea/i
  }
}, f = {
  ordinalNumber: t({
    matchPattern: e,
    parsePattern: r,
    valueCallback: (i) => parseInt(i, 10)
  }),
  era: a({
    matchPatterns: n,
    defaultMatchWidth: "wide",
    parsePatterns: s,
    defaultParseWidth: "any"
  }),
  quarter: a({
    matchPatterns: d,
    defaultMatchWidth: "wide",
    parsePatterns: m,
    defaultParseWidth: "any",
    valueCallback: (i) => i + 1
  }),
  month: a({
    matchPatterns: o,
    defaultMatchWidth: "wide",
    parsePatterns: u,
    defaultParseWidth: "any"
  }),
  day: a({
    matchPatterns: c,
    defaultMatchWidth: "wide",
    parsePatterns: h,
    defaultParseWidth: "any"
  }),
  dayPeriod: a({
    matchPatterns: p,
    defaultMatchWidth: "any",
    parsePatterns: l,
    defaultParseWidth: "any"
  })
};
export {
  f as match
};
