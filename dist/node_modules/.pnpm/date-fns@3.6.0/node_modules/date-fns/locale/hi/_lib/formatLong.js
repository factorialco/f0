import { buildFormatLongFn as t } from "../../_lib/buildFormatLongFn.js";
const m = {
  full: "EEEE, do MMMM, y",
  // CLDR #1787
  long: "do MMMM, y",
  // CLDR #1788
  medium: "d MMM, y",
  // CLDR #1789
  short: "dd/MM/yyyy"
  // CLDR #1790
}, o = {
  full: "h:mm:ss a zzzz",
  // CLDR #1791
  long: "h:mm:ss a z",
  // CLDR #1792
  medium: "h:mm:ss a",
  // CLDR #1793
  short: "h:mm a"
  // CLDR #1794
}, a = {
  full: "{{date}} 'को' {{time}}",
  // CLDR #1795
  long: "{{date}} 'को' {{time}}",
  // CLDR #1796
  medium: "{{date}}, {{time}}",
  // CLDR #1797
  short: "{{date}}, {{time}}"
  // CLDR #1798
}, e = {
  date: t({
    formats: m,
    defaultWidth: "full"
  }),
  time: t({
    formats: o,
    defaultWidth: "full"
  }),
  dateTime: t({
    formats: a,
    defaultWidth: "full"
  })
};
export {
  e as formatLong
};
