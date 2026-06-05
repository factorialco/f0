const e = {
  lastWeek: "eeee 'lepas pada jam' p",
  yesterday: "'Semalam pada jam' p",
  today: "'Hari ini pada jam' p",
  tomorrow: "'Esok pada jam' p",
  nextWeek: "eeee 'pada jam' p",
  other: "P"
}, m = (a, t, o, p) => e[a];
export {
  m as formatRelative
};
