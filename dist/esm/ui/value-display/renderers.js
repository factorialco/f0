import { AlertTagCell as e } from "./types/alertTag/alertTag.js";
import { NumberCell as t } from "./types/number/number.js";
import { AmountCell as n } from "./types/amount/amount.js";
import { AvatarListCell as r } from "./types/avatarList/avatarList.js";
import { CompanyCell as i } from "./types/company/company.js";
import { DateCell as a } from "./types/date/date.js";
import { DotTagCell as o } from "./types/dotTag/dotTag.js";
import { FileCell as s } from "./types/file/file.js";
import { IconCell as c } from "./types/icon/icon.js";
import { FolderCell as l } from "./types/folder/folder.js";
import { PersonCell as u } from "./types/person/person.js";
import { ProgressBarCell as d } from "./types/progressBar/progressBar.js";
import { StatusCell as f } from "./types/status/status.js";
import { TagCell as p } from "./types/tag/tag.js";
import { TagListCell as m } from "./types/tagList/tagList.js";
import { TeamCell as h } from "./types/team/team.js";
import { TextCell as g } from "./types/text/text.js";
import { BarSeriesCell as _ } from "./types/barSeries/barSeries.js";
import { CategoryBarChartCell as v } from "./types/categoryBarChart/categoryBarChart.js";
import { CompoundCell as y } from "./types/compound/compound.js";
import { CountCell as b } from "./types/count/count.js";
import { CountryCell as x } from "./types/country/country.js";
import { DeltaCell as S } from "./types/delta/delta.js";
import { HourDistributionCell as C } from "./types/hourDistribution/hourDistribution.js";
import { LongTextCell as w } from "./types/longText/longText.js";
import { PercentageCell as T } from "./types/percentage/percentage.js";
import { ProgressSeriesCell as E } from "./types/progressSeries/progressSeries.js";
import { SummaryCell as D } from "./types/summary/summary.js";
//#region src/ui/value-display/renderers.tsx
var O = {
	text: g,
	longText: w,
	number: t,
	date: a,
	amount: n,
	compound: y,
	avatarList: r,
	status: f,
	alertTag: e,
	person: u,
	percentage: T,
	progressBar: d,
	progressSeries: E,
	barSeries: _,
	categoryBarChart: v,
	hourDistribution: C,
	company: i,
	team: h,
	tag: p,
	dotTag: o,
	tagList: m,
	icon: c,
	file: s,
	folder: l,
	country: x,
	delta: S,
	summary: D,
	count: b
}, k = (e) => e !== void 0 && typeof e == "object", A = (e, t, n) => {
	let { type: r, value: i } = k(e) ? e : {
		type: "text",
		value: e ?? n
	}, a = O[r];
	return a ? i === void 0 ? n : a(i, {
		visualization: t.visualization,
		i18n: t.i18n,
		tableAlign: t.tableAlign
	}) : `[Invalid ${r} renderer]`;
};
//#endregion
export { A as metadataRenderer, O as valueDisplayRenderers };
