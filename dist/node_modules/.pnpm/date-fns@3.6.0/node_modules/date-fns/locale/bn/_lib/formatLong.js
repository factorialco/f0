import { buildFormatLongFn as t } from "../../_lib/buildFormatLongFn.js";
const m = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, o = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, a = {
  full: "{{date}} {{time}} 'সময়'",
  long: "{{date}} {{time}} 'সময়'",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
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
