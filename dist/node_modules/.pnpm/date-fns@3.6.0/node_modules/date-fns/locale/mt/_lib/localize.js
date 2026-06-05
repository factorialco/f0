import { buildLocalizeFn as a } from "../../_lib/buildLocalizeFn.js";
const i = {
  narrow: ["Q", "W"],
  abbreviated: ["QK", "WK"],
  wide: ["qabel Kristu", "wara Kristu"]
}, e = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["K1", "K2", "K3", "K4"],
  wide: ["1. kwart", "2. kwart", "3. kwart", "4. kwart"]
}, r = {
  narrow: ["J", "F", "M", "A", "M", "Ġ", "L", "A", "S", "O", "N", "D"],
  abbreviated: [
    "Jan",
    "Fra",
    "Mar",
    "Apr",
    "Mej",
    "Ġun",
    "Lul",
    "Aww",
    "Set",
    "Ott",
    "Nov",
    "Diċ"
  ],
  wide: [
    "Jannar",
    "Frar",
    "Marzu",
    "April",
    "Mejju",
    "Ġunju",
    "Lulju",
    "Awwissu",
    "Settembru",
    "Ottubru",
    "Novembru",
    "Diċembru"
  ]
}, o = {
  narrow: ["Ħ", "T", "T", "E", "Ħ", "Ġ", "S"],
  short: ["Ħa", "Tn", "Tl", "Er", "Ħa", "Ġi", "Si"],
  abbreviated: ["Ħad", "Tne", "Tli", "Erb", "Ħam", "Ġim", "Sib"],
  wide: [
    "Il-Ħadd",
    "It-Tnejn",
    "It-Tlieta",
    "L-Erbgħa",
    "Il-Ħamis",
    "Il-Ġimgħa",
    "Is-Sibt"
  ]
}, t = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "nofsillejl",
    noon: "nofsinhar",
    morning: "għodwa",
    afternoon: "wara nofsinhar",
    evening: "filgħaxija",
    night: "lejl"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "nofsillejl",
    noon: "nofsinhar",
    morning: "għodwa",
    afternoon: "wara nofsinhar",
    evening: "filgħaxija",
    night: "lejl"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "nofsillejl",
    noon: "nofsinhar",
    morning: "għodwa",
    afternoon: "wara nofsinhar",
    evening: "filgħaxija",
    night: "lejl"
  }
}, l = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "f'nofsillejl",
    noon: "f'nofsinhar",
    morning: "filgħodu",
    afternoon: "wara nofsinhar",
    evening: "filgħaxija",
    night: "billejl"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "f'nofsillejl",
    noon: "f'nofsinhar",
    morning: "filgħodu",
    afternoon: "wara nofsinhar",
    evening: "filgħaxija",
    night: "billejl"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "f'nofsillejl",
    noon: "f'nofsinhar",
    morning: "filgħodu",
    afternoon: "wara nofsinhar",
    evening: "filgħaxija",
    night: "billejl"
  }
}, d = (n, f) => Number(n) + "º", u = {
  ordinalNumber: d,
  era: a({
    values: i,
    defaultWidth: "wide"
  }),
  quarter: a({
    values: e,
    defaultWidth: "wide",
    argumentCallback: (n) => n - 1
  }),
  month: a({
    values: r,
    defaultWidth: "wide"
  }),
  day: a({
    values: o,
    defaultWidth: "wide"
  }),
  dayPeriod: a({
    values: t,
    defaultWidth: "wide",
    formattingValues: l,
    defaultFormattingWidth: "wide"
  })
};
export {
  u as localize
};
