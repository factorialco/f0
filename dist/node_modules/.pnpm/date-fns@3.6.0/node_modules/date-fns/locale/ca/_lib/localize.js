import { buildLocalizeFn as a } from "../../_lib/buildLocalizeFn.js";
const d = {
  narrow: ["aC", "dC"],
  abbreviated: ["a. de C.", "d. de C."],
  wide: ["abans de Crist", "després de Crist"]
}, n = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["T1", "T2", "T3", "T4"],
  wide: ["1r trimestre", "2n trimestre", "3r trimestre", "4t trimestre"]
}, r = {
  narrow: [
    "GN",
    "FB",
    "MÇ",
    "AB",
    "MG",
    "JN",
    "JL",
    "AG",
    "ST",
    "OC",
    "NV",
    "DS"
  ],
  /**
   * Les abreviatures dels mesos de l'any es formen seguint una de les normes generals de formació d'abreviatures.
   * S'escriu la primera síl·laba i les consonants de la síl·laba següent anteriors a la primera vocal.
   * Els mesos de març, maig i juny no s'abreugen perquè són paraules d'una sola síl·laba.
   */
  abbreviated: [
    "gen.",
    "febr.",
    "març",
    "abr.",
    "maig",
    "juny",
    "jul.",
    "ag.",
    "set.",
    "oct.",
    "nov.",
    "des."
  ],
  wide: [
    "gener",
    "febrer",
    "març",
    "abril",
    "maig",
    "juny",
    "juliol",
    "agost",
    "setembre",
    "octubre",
    "novembre",
    "desembre"
  ]
}, m = {
  narrow: ["dg.", "dl.", "dt.", "dm.", "dj.", "dv.", "ds."],
  short: ["dg.", "dl.", "dt.", "dm.", "dj.", "dv.", "ds."],
  abbreviated: ["dg.", "dl.", "dt.", "dm.", "dj.", "dv.", "ds."],
  wide: [
    "diumenge",
    "dilluns",
    "dimarts",
    "dimecres",
    "dijous",
    "divendres",
    "dissabte"
  ]
}, o = {
  narrow: {
    am: "am",
    pm: "pm",
    midnight: "mitjanit",
    noon: "migdia",
    morning: "matí",
    afternoon: "tarda",
    evening: "vespre",
    night: "nit"
  },
  abbreviated: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "mitjanit",
    noon: "migdia",
    morning: "matí",
    afternoon: "tarda",
    evening: "vespre",
    night: "nit"
  },
  wide: {
    am: "ante meridiem",
    pm: "post meridiem",
    midnight: "mitjanit",
    noon: "migdia",
    morning: "matí",
    afternoon: "tarda",
    evening: "vespre",
    night: "nit"
  }
}, s = {
  narrow: {
    am: "am",
    pm: "pm",
    midnight: "de la mitjanit",
    noon: "del migdia",
    morning: "del matí",
    afternoon: "de la tarda",
    evening: "del vespre",
    night: "de la nit"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "de la mitjanit",
    noon: "del migdia",
    morning: "del matí",
    afternoon: "de la tarda",
    evening: "del vespre",
    night: "de la nit"
  },
  wide: {
    am: "ante meridiem",
    pm: "post meridiem",
    midnight: "de la mitjanit",
    noon: "del migdia",
    morning: "del matí",
    afternoon: "de la tarda",
    evening: "del vespre",
    night: "de la nit"
  }
}, l = (i, g) => {
  const e = Number(i), t = e % 100;
  if (t > 20 || t < 10)
    switch (t % 10) {
      case 1:
        return e + "r";
      case 2:
        return e + "n";
      case 3:
        return e + "r";
      case 4:
        return e + "t";
    }
  return e + "è";
}, v = {
  ordinalNumber: l,
  era: a({
    values: d,
    defaultWidth: "wide"
  }),
  quarter: a({
    values: n,
    defaultWidth: "wide",
    argumentCallback: (i) => i - 1
  }),
  month: a({
    values: r,
    defaultWidth: "wide"
  }),
  day: a({
    values: m,
    defaultWidth: "wide"
  }),
  dayPeriod: a({
    values: o,
    defaultWidth: "wide",
    formattingValues: s,
    defaultFormattingWidth: "wide"
  })
};
export {
  v as localize
};
