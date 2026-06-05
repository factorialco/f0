import { buildLocalizeFn as i } from "../../_lib/buildLocalizeFn.js";
const t = {
  narrow: ["ab. J.C.", "apr. J.C."],
  abbreviated: ["ab. J.C.", "apr. J.C."],
  wide: ["abans Jèsus-Crist", "après Jèsus-Crist"]
}, m = {
  narrow: ["T1", "T2", "T3", "T4"],
  abbreviated: ["1èr trim.", "2nd trim.", "3en trim.", "4en trim."],
  wide: ["1èr trimèstre", "2nd trimèstre", "3en trimèstre", "4en trimèstre"]
}, o = {
  narrow: [
    "GN",
    "FB",
    "MÇ",
    "AB",
    "MA",
    "JN",
    "JL",
    "AG",
    "ST",
    "OC",
    "NV",
    "DC"
  ],
  abbreviated: [
    "gen.",
    "febr.",
    "març",
    "abr.",
    "mai",
    "junh",
    "jul.",
    "ag.",
    "set.",
    "oct.",
    "nov.",
    "dec."
  ],
  wide: [
    "genièr",
    "febrièr",
    "març",
    "abril",
    "mai",
    "junh",
    "julhet",
    "agost",
    "setembre",
    "octòbre",
    "novembre",
    "decembre"
  ]
}, s = {
  narrow: ["dg.", "dl.", "dm.", "dc.", "dj.", "dv.", "ds."],
  short: ["dg.", "dl.", "dm.", "dc.", "dj.", "dv.", "ds."],
  abbreviated: ["dg.", "dl.", "dm.", "dc.", "dj.", "dv.", "ds."],
  wide: [
    "dimenge",
    "diluns",
    "dimars",
    "dimècres",
    "dijòus",
    "divendres",
    "dissabte"
  ]
}, u = {
  narrow: {
    am: "am",
    pm: "pm",
    midnight: "mièjanuèch",
    noon: "miègjorn",
    morning: "matin",
    afternoon: "aprèp-miègjorn",
    evening: "vèspre",
    night: "nuèch"
  },
  abbreviated: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "mièjanuèch",
    noon: "miègjorn",
    morning: "matin",
    afternoon: "aprèp-miègjorn",
    evening: "vèspre",
    night: "nuèch"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "mièjanuèch",
    noon: "miègjorn",
    morning: "matin",
    afternoon: "aprèp-miègjorn",
    evening: "vèspre",
    night: "nuèch"
  }
}, g = {
  narrow: {
    am: "am",
    pm: "pm",
    midnight: "mièjanuèch",
    noon: "miègjorn",
    morning: "del matin",
    afternoon: "de l’aprèp-miègjorn",
    evening: "del ser",
    night: "de la nuèch"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "mièjanuèch",
    noon: "miègjorn",
    morning: "del matin",
    afternoon: "de l’aprèp-miègjorn",
    evening: "del ser",
    night: "de la nuèch"
  },
  wide: {
    am: "ante meridiem",
    pm: "post meridiem",
    midnight: "mièjanuèch",
    noon: "miègjorn",
    morning: "del matin",
    afternoon: "de l’aprèp-miègjorn",
    evening: "del ser",
    night: "de la nuèch"
  }
}, l = (r, d) => {
  const a = Number(r), e = d?.unit;
  let n;
  switch (a) {
    case 1:
      n = "èr";
      break;
    case 2:
      n = "nd";
      break;
    default:
      n = "en";
  }
  return (e === "year" || e === "week" || e === "hour" || e === "minute" || e === "second") && (n += "a"), a + n;
}, c = {
  ordinalNumber: l,
  era: i({
    values: t,
    defaultWidth: "wide"
  }),
  quarter: i({
    values: m,
    defaultWidth: "wide",
    argumentCallback: (r) => r - 1
  }),
  month: i({
    values: o,
    defaultWidth: "wide"
  }),
  day: i({
    values: s,
    defaultWidth: "wide"
  }),
  dayPeriod: i({
    values: u,
    defaultWidth: "wide",
    formattingValues: g,
    defaultFormattingWidth: "wide"
  })
};
export {
  c as localize
};
