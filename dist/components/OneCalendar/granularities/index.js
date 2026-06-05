import { WeekStartDay as a } from "../types.js";
import { dayGranularity as i } from "./day/index.js";
import { halfyearGranularity as n } from "./halfyear/index.js";
import { monthGranularity as o } from "./month/index.js";
import { quarterGranularity as y } from "./quarter/index.js";
import { rangeGranularity as m } from "./range/index.js";
import { weekGranularity as f, createWeekGranularity as u } from "./week/index.js";
import { yearGranularity as l } from "./year/index.js";
const t = {
  day: i,
  week: f,
  month: o,
  quarter: y,
  halfyear: n,
  year: l,
  range: m
};
function w(e) {
  const r = e ?? a.Monday;
  return r === a.Monday ? t : {
    ...t,
    week: u(r)
  };
}
export {
  w as getGranularityDefinitions,
  t as granularityDefinitions
};
