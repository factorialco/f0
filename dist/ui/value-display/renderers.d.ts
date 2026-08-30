import { ReactNode } from 'react';
import { ValueDisplayRendererContext } from './types.ts';
export type { ValueDisplayRendererContext };
/**
 * The renderer function to use for a property.
 */
export type ValueDisplayRenderer = (def: any, context: ValueDisplayRendererContext, undefinedValue?: string) => ReactNode;
export declare const valueDisplayRenderers: {
    readonly text: (args: import('./types/text').TextCellValue, meta: ValueDisplayRendererContext) => import("react").JSX.Element;
    readonly longText: (args: import('./types/longText').LongTextCellValue, meta: ValueDisplayRendererContext) => import("react").JSX.Element;
    readonly number: (args: import('./types/number').NumberCellValue, meta: ValueDisplayRendererContext) => import("react").JSX.Element;
    readonly date: (args: import('./types/date').DateCellValue, meta: ValueDisplayRendererContext) => import("react").JSX.Element;
    readonly amount: (args: import('./types/amount').AmountCellValue, meta: ValueDisplayRendererContext) => import("react").JSX.Element;
    readonly compound: (args: import('./types/compound').CompoundCellValue, meta: ValueDisplayRendererContext) => import("react").JSX.Element;
    readonly avatarList: (args: import('./types/avatarList').AvatarListCellValue, meta: ValueDisplayRendererContext) => import("react").JSX.Element;
    readonly status: (args: import('./types/status').StatusCellValue) => import("react").JSX.Element;
    readonly alertTag: (args: import('./types/alertTag').AlertTagCellValue) => import("react").JSX.Element;
    readonly person: (args: import('./types/person').PersonCellValue, meta: ValueDisplayRendererContext) => import("react").JSX.Element;
    readonly percentage: (args: import('./types/percentage').PercentageCellValue, meta: ValueDisplayRendererContext) => import("react").JSX.Element | null;
    readonly progressBar: (args: import('./types/progressBar').ProgressBarCellValue, _meta: ValueDisplayRendererContext) => import("react").JSX.Element | null;
    readonly progressSeries: (args: import('./types/progressSeries').ProgressSeriesCellValue, meta: ValueDisplayRendererContext) => import("react").JSX.Element;
    readonly barSeries: (args: import('./types/barSeries').BarSeriesCellValue, meta: ValueDisplayRendererContext) => import("react").JSX.Element;
    readonly categoryBarChart: (args: import('./types/categoryBarChart').CategoryBarChartCellValue, meta: ValueDisplayRendererContext) => import("react").JSX.Element;
    readonly hourDistribution: (args: import('./types/hourDistribution').HourDistributionCellValue, meta: ValueDisplayRendererContext) => import("react").JSX.Element;
    readonly company: (args: import('./types/company').CompanyCellValue, meta: ValueDisplayRendererContext) => import("react").JSX.Element;
    readonly team: (args: import('./types/team').TeamCellValue, meta: ValueDisplayRendererContext) => import("react").JSX.Element;
    readonly tag: (args: import('./types/tag').TagCellValue) => import("react").JSX.Element;
    readonly dotTag: (args: import('./types/dotTag').DotTagCellValue) => import("react").JSX.Element;
    readonly tagList: (args: import('./types/tagList').TagListCellValue) => import("react").JSX.Element;
    readonly icon: (args: import('./types/icon').IconCellValue, meta: ValueDisplayRendererContext) => import("react").JSX.Element;
    readonly file: (args: import('./types/file').FileCellValue) => import("react").JSX.Element;
    readonly folder: (args: import('./types/folder').FolderCellValue) => import("react").JSX.Element;
    readonly country: (args: import('./types/country').CountryCellValue, context: ValueDisplayRendererContext) => import("react").JSX.Element;
    readonly delta: (args: import('./types/delta').DeltaCellValue) => import("react").JSX.Element;
    readonly summary: (args: import('./types/summary').SummaryCellValue, meta: ValueDisplayRendererContext) => import("react").JSX.Element;
    readonly count: (args: import('./types/count').CountCellValue, meta: ValueDisplayRendererContext) => import("react").JSX.Element;
};
/**
 * The type of renderer to use for a property.
 */
export type ValueDisplayRendererType = keyof typeof valueDisplayRenderers;
/**
 * The definition of a renderer.
 * Union type of all possible renderer definitions to ensure the value is the type related the `type`{ [RenderedType]: RendererFuncArgument }.
 */
export type ValueDisplayRendererDefinition = {
    [K in keyof typeof valueDisplayRenderers]: {
        type: K;
        value: Parameters<(typeof valueDisplayRenderers)[K]>[0];
    };
}[keyof typeof valueDisplayRenderers];
export type ValueDisplayDefinition = {
    render: ValueDisplayRendererDefinition | string | number | undefined;
};
/**
 * Renders the value of a metadata property
 * @param args
 * @param context
 * @returns
 */
export declare const metadataRenderer: ValueDisplayRenderer;
