import { buildMatchFn as a } from "../../_lib/buildMatchFn.js";
import { buildMatchPatternFn as i } from "../../_lib/buildMatchPatternFn.js";
const r = /^(\d+)(ος|η|ο)?/i, e = /\d+/i, n = {
  narrow: /^(πΧ|μΧ)/i,
  abbreviated: /^(π\.?\s?χ\.?|π\.?\s?κ\.?\s?χ\.?|μ\.?\s?χ\.?|κ\.?\s?χ\.?)/i,
  wide: /^(προ Χριστο(ύ|υ)|πριν απ(ό|ο) την Κοιν(ή|η) Χρονολογ(ί|ι)α|μετ(ά|α) Χριστ(ό|ο)ν|Κοιν(ή|η) Χρονολογ(ί|ι)α)/i
}, s = {
  any: [/^π/i, /^(μ|κ)/i]
}, d = {
  narrow: /^[1234]/i,
  abbreviated: /^τ[1234]/i,
  wide: /^[1234]ο? τρ(ί|ι)μηνο/i
}, o = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, h = {
  narrow: /^[ιφμαμιιασονδ]/i,
  abbreviated: /^(ιαν|φεβ|μ[άα]ρ|απρ|μ[άα][ιΐ]|ιο[ύυ]ν|ιο[ύυ]λ|α[ύυ]γ|σεπ|οκτ|νο[έε]|δεκ)/i,
  wide: /^(μ[άα][ιΐ]|α[ύυ]γο[υύ]στ)(ος|ου)|(ιανου[άα]ρ|φεβρου[άα]ρ|μ[άα]ρτ|απρ[ίι]λ|ιο[ύυ]ν|ιο[ύυ]λ|σεπτ[έε]μβρ|οκτ[ώω]βρ|νο[έε]μβρ|δεκ[έε]μβρ)(ιος|ίου)/i
}, c = {
  narrow: [
    /^ι/i,
    /^φ/i,
    /^μ/i,
    /^α/i,
    /^μ/i,
    /^ι/i,
    /^ι/i,
    /^α/i,
    /^σ/i,
    /^ο/i,
    /^ν/i,
    /^δ/i
  ],
  any: [
    /^ια/i,
    /^φ/i,
    /^μ[άα]ρ/i,
    /^απ/i,
    /^μ[άα][ιΐ]/i,
    /^ιο[ύυ]ν/i,
    /^ιο[ύυ]λ/i,
    /^α[ύυ]/i,
    /^σ/i,
    /^ο/i,
    /^ν/i,
    /^δ/i
  ]
}, P = {
  narrow: /^[κδτπσ]/i,
  short: /^(κυ|δε|τρ|τε|π[εέ]|π[αά]|σ[αά])/i,
  abbreviated: /^(κυρ|δευ|τρι|τετ|πεμ|παρ|σαβ)/i,
  wide: /^(κυριακ(ή|η)|δευτ(έ|ε)ρα|τρ(ί|ι)τη|τετ(ά|α)ρτη|π(έ|ε)μπτη|παρασκευ(ή|η)|σ(ά|α)ββατο)/i
}, m = {
  narrow: [/^κ/i, /^δ/i, /^τ/i, /^τ/i, /^π/i, /^π/i, /^σ/i],
  any: [/^κ/i, /^δ/i, /^τρ/i, /^τε/i, /^π[εέ]/i, /^π[αά]/i, /^σ/i]
}, l = {
  narrow: /^(πμ|μμ|μεσ(ά|α)νυχτα|μεσημ(έ|ε)ρι|πρω(ί|ι)|απ(ό|ο)γευμα|βρ(ά|α)δυ|ν(ύ|υ)χτα)/i,
  any: /^([πμ]\.?\s?μ\.?|μεσ(ά|α)νυχτα|μεσημ(έ|ε)ρι|πρω(ί|ι)|απ(ό|ο)γευμα|βρ(ά|α)δυ|ν(ύ|υ)χτα)/i
}, u = {
  any: {
    am: /^πμ|π\.\s?μ\./i,
    pm: /^μμ|μ\.\s?μ\./i,
    midnight: /^μεσάν/i,
    noon: /^μεσημ(έ|ε)/i,
    morning: /πρω(ί|ι)/i,
    afternoon: /απ(ό|ο)γευμα/i,
    evening: /βρ(ά|α)δυ/i,
    night: /ν(ύ|υ)χτα/i
  }
}, b = {
  ordinalNumber: i({
    matchPattern: r,
    parsePattern: e,
    valueCallback: (t) => parseInt(t, 10)
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
    parsePatterns: o,
    defaultParseWidth: "any",
    valueCallback: (t) => t + 1
  }),
  month: a({
    matchPatterns: h,
    defaultMatchWidth: "wide",
    parsePatterns: c,
    defaultParseWidth: "any"
  }),
  day: a({
    matchPatterns: P,
    defaultMatchWidth: "wide",
    parsePatterns: m,
    defaultParseWidth: "any"
  }),
  dayPeriod: a({
    matchPatterns: l,
    defaultMatchWidth: "any",
    parsePatterns: u,
    defaultParseWidth: "any"
  })
};
export {
  b as match
};
