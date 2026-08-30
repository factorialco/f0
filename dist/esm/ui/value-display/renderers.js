import { AlertTagCell as e } from "./types/alertTag/alertTag.js";
import { NumberCell as t } from "./types/number/number.js";
import { AmountCell as n } from "./types/amount/amount.js";
import { AvatarListCell as r } from "./types/avatarList/avatarList.js";
import { BarSeriesCell as i } from "./types/barSeries/barSeries.js";
import { CategoryBarChartCell as a } from "./types/categoryBarChart/categoryBarChart.js";
import { CompanyCell as o } from "./types/company/company.js";
import { CompoundCell as s } from "./types/compound/compound.js";
import { CountCell as c } from "./types/count/count.js";
import { CountryCell as l } from "./types/country/country.js";
import { DateCell as u } from "./types/date/date.js";
import { DeltaCell as d } from "./types/delta/delta.js";
import { DotTagCell as f } from "./types/dotTag/dotTag.js";
import { FileCell as p } from "./types/file/file.js";
import { IconCell as m } from "./types/icon/icon.js";
import { FolderCell as h } from "./types/folder/folder.js";
import { HourDistributionCell as g } from "./types/hourDistribution/hourDistribution.js";
import { LongTextCell as _ } from "./types/longText/longText.js";
import { PercentageCell as v } from "./types/percentage/percentage.js";
import { PersonCell as y } from "./types/person/person.js";
import { ProgressBarCell as b } from "./types/progressBar/progressBar.js";
import { ProgressSeriesCell as x } from "./types/progressSeries/progressSeries.js";
import { StatusCell as S } from "./types/status/status.js";
import { SummaryCell as C } from "./types/summary/summary.js";
import { TagCell as w } from "./types/tag/tag.js";
import { TagListCell as T } from "./types/tagList/tagList.js";
import { TeamCell as E } from "./types/team/team.js";
import { TextCell as D } from "./types/text/text.js";
//#region src/ui/value-display/renderers.tsx
var O = {
	text: D,
	longText: _,
	number: t,
	date: u,
	amount: n,
	compound: s,
	avatarList: r,
	status: S,
	alertTag: e,
	person: y,
	percentage: v,
	progressBar: b,
	progressSeries: x,
	barSeries: i,
	categoryBarChart: a,
	hourDistribution: g,
	company: o,
	team: E,
	tag: w,
	dotTag: f,
	tagList: T,
	icon: m,
	file: p,
	folder: h,
	country: l,
	delta: d,
	summary: C,
	count: c
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
