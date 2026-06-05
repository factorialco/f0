function e(n) {
  return (t, a) => {
    if (t === 1)
      return a?.addSuffix ? n.one[0].replace("{{time}}", n.one[2]) : n.one[0].replace("{{time}}", n.one[1]);
    {
      const i = t % 10 === 1 && t % 100 !== 11;
      return a?.addSuffix ? n.other[0].replace("{{time}}", i ? n.other[3] : n.other[4]).replace("{{count}}", String(t)) : n.other[0].replace("{{time}}", i ? n.other[1] : n.other[2]).replace("{{count}}", String(t));
    }
  };
}
const m = {
  lessThanXSeconds: e({
    one: ["mazāk par {{time}}", "sekundi", "sekundi"],
    other: [
      "mazāk nekā {{count}} {{time}}",
      "sekunde",
      "sekundes",
      "sekundes",
      "sekundēm"
    ]
  }),
  xSeconds: e({
    one: ["1 {{time}}", "sekunde", "sekundes"],
    other: [
      "{{count}} {{time}}",
      "sekunde",
      "sekundes",
      "sekundes",
      "sekundēm"
    ]
  }),
  halfAMinute: (n, t) => t?.addSuffix ? "pusminūtes" : "pusminūte",
  lessThanXMinutes: e({
    one: ["mazāk par {{time}}", "minūti", "minūti"],
    other: [
      "mazāk nekā {{count}} {{time}}",
      "minūte",
      "minūtes",
      "minūtes",
      "minūtēm"
    ]
  }),
  xMinutes: e({
    one: ["1 {{time}}", "minūte", "minūtes"],
    other: ["{{count}} {{time}}", "minūte", "minūtes", "minūtes", "minūtēm"]
  }),
  aboutXHours: e({
    one: ["apmēram 1 {{time}}", "stunda", "stundas"],
    other: [
      "apmēram {{count}} {{time}}",
      "stunda",
      "stundas",
      "stundas",
      "stundām"
    ]
  }),
  xHours: e({
    one: ["1 {{time}}", "stunda", "stundas"],
    other: ["{{count}} {{time}}", "stunda", "stundas", "stundas", "stundām"]
  }),
  xDays: e({
    one: ["1 {{time}}", "diena", "dienas"],
    other: ["{{count}} {{time}}", "diena", "dienas", "dienas", "dienām"]
  }),
  aboutXWeeks: e({
    one: ["apmēram 1 {{time}}", "nedēļa", "nedēļas"],
    other: [
      "apmēram {{count}} {{time}}",
      "nedēļa",
      "nedēļu",
      "nedēļas",
      "nedēļām"
    ]
  }),
  xWeeks: e({
    one: ["1 {{time}}", "nedēļa", "nedēļas"],
    other: [
      "{{count}} {{time}}",
      // TODO
      "nedēļa",
      "nedēļu",
      "nedēļas",
      "nedēļām"
    ]
  }),
  aboutXMonths: e({
    one: ["apmēram 1 {{time}}", "mēnesis", "mēneša"],
    other: [
      "apmēram {{count}} {{time}}",
      "mēnesis",
      "mēneši",
      "mēneša",
      "mēnešiem"
    ]
  }),
  xMonths: e({
    one: ["1 {{time}}", "mēnesis", "mēneša"],
    other: ["{{count}} {{time}}", "mēnesis", "mēneši", "mēneša", "mēnešiem"]
  }),
  aboutXYears: e({
    one: ["apmēram 1 {{time}}", "gads", "gada"],
    other: ["apmēram {{count}} {{time}}", "gads", "gadi", "gada", "gadiem"]
  }),
  xYears: e({
    one: ["1 {{time}}", "gads", "gada"],
    other: ["{{count}} {{time}}", "gads", "gadi", "gada", "gadiem"]
  }),
  overXYears: e({
    one: ["ilgāk par 1 {{time}}", "gadu", "gadu"],
    other: ["vairāk nekā {{count}} {{time}}", "gads", "gadi", "gada", "gadiem"]
  }),
  almostXYears: e({
    one: ["gandrīz 1 {{time}}", "gads", "gada"],
    other: ["vairāk nekā {{count}} {{time}}", "gads", "gadi", "gada", "gadiem"]
  })
}, s = (n, t, a) => {
  const i = m[n](t, a);
  return a?.addSuffix ? a.comparison && a.comparison > 0 ? "pēc " + i : "pirms " + i : i;
};
export {
  s as formatDistance
};
