const u = {
  lastWeek: (e) => {
    switch (e.getDay()) {
      case 0:
        return "'prošle nedjelje u' p";
      case 3:
        return "'prošle srijede u' p";
      case 6:
        return "'prošle subote u' p";
      default:
        return "'prošli' EEEE 'u' p";
    }
  },
  yesterday: "'juče u' p",
  today: "'danas u' p",
  tomorrow: "'sutra u' p",
  nextWeek: (e) => {
    switch (e.getDay()) {
      case 0:
        return "'sljedeće nedjelje u' p";
      case 3:
        return "'sljedeću srijedu u' p";
      case 6:
        return "'sljedeću subotu u' p";
      default:
        return "'sljedeći' EEEE 'u' p";
    }
  },
  other: "P"
}, o = (e, r, s, a) => {
  const t = u[e];
  return typeof t == "function" ? t(r) : t;
};
export {
  o as formatRelative
};
