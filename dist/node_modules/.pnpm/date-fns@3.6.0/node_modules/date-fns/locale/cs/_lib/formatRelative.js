const r = [
  "neděli",
  "pondělí",
  "úterý",
  "středu",
  "čtvrtek",
  "pátek",
  "sobotu"
], a = {
  lastWeek: "'poslední' eeee 've' p",
  yesterday: "'včera v' p",
  today: "'dnes v' p",
  tomorrow: "'zítra v' p",
  nextWeek: (e) => {
    const t = e.getDay();
    return "'v " + r[t] + " o' p";
  },
  other: "P"
}, n = (e, t) => {
  const o = a[e];
  return typeof o == "function" ? o(t) : o;
};
export {
  n as formatRelative
};
