import { ProgressBarCell as i } from "./types/progressBar/progressBar.js";
import { FolderCell as a } from "./types/folder/folder.js";
import { FileCell as n } from "./types/file/file.js";
import { DotTagCell as p } from "./types/dotTag/dotTag.js";
import { AlertTagCell as C } from "./types/alertTag/alertTag.js";
import { TagListCell as f } from "./types/tagList/tagList.js";
import { AvatarListCell as s } from "./types/avatarList/avatarList.js";
import { TagCell as u } from "./types/tag/tag.js";
import { StatusCell as g } from "./types/status/status.js";
import { TeamCell as c } from "./types/team/team.js";
import { CompanyCell as d } from "./types/company/company.js";
import { PersonCell as v } from "./types/person/person.js";
import { AmountCell as y } from "./types/amount/amount.js";
import { DateCell as T } from "./types/date/date.js";
import { TextCell as b } from "./types/text/text.js";
import { CountCell as D } from "./types/count/count.js";
import { SummaryCell as A } from "./types/summary/summary.js";
import { DeltaCell as L } from "./types/delta/delta.js";
import { CountryCell as x } from "./types/country/country.js";
import { HourDistributionCell as S } from "./types/hourDistribution/hourDistribution.js";
import { PercentageCell as B } from "./types/percentage/percentage.js";
import { CompoundCell as I } from "./types/compound/compound.js";
import { LongTextCell as P } from "./types/longText/longText.js";
import { NumberCell as R } from "./types/number/number.js";
import { IconCell as z } from "./types/icon/icon.js";
import { BarSeriesCell as F } from "./types/barSeries/barSeries.js";
const h = {
  text: b,
  longText: P,
  number: R,
  date: T,
  amount: y,
  compound: I,
  avatarList: s,
  status: g,
  alertTag: C,
  person: v,
  percentage: B,
  progressBar: i,
  barSeries: F,
  hourDistribution: S,
  company: d,
  team: c,
  tag: u,
  dotTag: p,
  tagList: f,
  icon: z,
  file: n,
  folder: a,
  country: x,
  delta: L,
  summary: A,
  count: D
}, j = (r) => r !== void 0 && typeof r == "object", ir = (r, o, t) => {
  const { type: e, value: l } = j(r) ? r : {
    type: "text",
    value: r ?? t
  }, m = h[e];
  return m ? l === void 0 ? t : m(l, {
    visualization: o.visualization,
    i18n: o.i18n,
    tableAlign: o.tableAlign
  }) : `[Invalid ${e} renderer]`;
};
export {
  ir as metadataRenderer,
  h as valueDisplayRenderers
};
