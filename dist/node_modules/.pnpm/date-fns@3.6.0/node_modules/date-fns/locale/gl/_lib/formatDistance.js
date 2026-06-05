const t = {
  lessThanXSeconds: {
    one: "menos dun segundo",
    other: "menos de {{count}} segundos"
  },
  xSeconds: {
    one: "1 segundo",
    other: "{{count}} segundos"
  },
  halfAMinute: "medio minuto",
  lessThanXMinutes: {
    one: "menos dun minuto",
    other: "menos de {{count}} minutos"
  },
  xMinutes: {
    one: "1 minuto",
    other: "{{count}} minutos"
  },
  aboutXHours: {
    one: "arredor dunha hora",
    other: "arredor de {{count}} horas"
  },
  xHours: {
    one: "1 hora",
    other: "{{count}} horas"
  },
  xDays: {
    one: "1 día",
    other: "{{count}} días"
  },
  aboutXWeeks: {
    one: "arredor dunha semana",
    other: "arredor de {{count}} semanas"
  },
  xWeeks: {
    one: "1 semana",
    other: "{{count}} semanas"
  },
  aboutXMonths: {
    one: "arredor de 1 mes",
    other: "arredor de {{count}} meses"
  },
  xMonths: {
    one: "1 mes",
    other: "{{count}} meses"
  },
  aboutXYears: {
    one: "arredor dun ano",
    other: "arredor de {{count}} anos"
  },
  xYears: {
    one: "1 ano",
    other: "{{count}} anos"
  },
  overXYears: {
    one: "máis dun ano",
    other: "máis de {{count}} anos"
  },
  almostXYears: {
    one: "case un ano",
    other: "case {{count}} anos"
  }
}, a = (s, r, n) => {
  let e;
  const o = t[s];
  return typeof o == "string" ? e = o : r === 1 ? e = o.one : e = o.other.replace("{{count}}", String(r)), n?.addSuffix ? n.comparison && n.comparison > 0 ? "en " + e : "hai " + e : e;
};
export {
  a as formatDistance
};
