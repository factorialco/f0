const a = {
  lastWeek: (e) => {
    switch (e.getDay()) {
      case 0:
        return "'прошле недеље у' p";
      case 3:
        return "'прошле среде у' p";
      case 6:
        return "'прошле суботе у' p";
      default:
        return "'прошли' EEEE 'у' p";
    }
  },
  yesterday: "'јуче у' p",
  today: "'данас у' p",
  tomorrow: "'сутра у' p",
  nextWeek: (e) => {
    switch (e.getDay()) {
      case 0:
        return "'следеће недеље у' p";
      case 3:
        return "'следећу среду у' p";
      case 6:
        return "'следећу суботу у' p";
      default:
        return "'следећи' EEEE 'у' p";
    }
  },
  other: "P"
}, s = (e, t, n, o) => {
  const r = a[e];
  return typeof r == "function" ? r(t) : r;
};
export {
  s as formatRelative
};
