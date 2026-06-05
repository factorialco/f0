const n = [
  "vasárnap",
  "hétfőn",
  "kedden",
  "szerdán",
  "csütörtökön",
  "pénteken",
  "szombaton"
];
function r(t) {
  return (o) => {
    const e = n[o.getDay()];
    return `${t ? "" : "'múlt' "}'${e}' p'-kor'`;
  };
}
const a = {
  lastWeek: r(!1),
  yesterday: "'tegnap' p'-kor'",
  today: "'ma' p'-kor'",
  tomorrow: "'holnap' p'-kor'",
  nextWeek: r(!0),
  other: "P"
}, c = (t, o) => {
  const e = a[t];
  return typeof e == "function" ? e(o) : e;
};
export {
  c as formatRelative
};
