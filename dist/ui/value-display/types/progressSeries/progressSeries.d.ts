import { F0ProgressSeriesProps } from '../../../../experimental/F0ProgressSeries';
import { ValueDisplayRendererContext } from '../../renderers';
export type { F0ProgressSeriesBar as ProgressSeriesBar, F0ProgressSeriesColor as ProgressSeriesColor, F0ProgressSeriesSize as ProgressSeriesSize, } from '../../../../experimental/F0ProgressSeries';
/** Same surface as `F0ProgressSeries`, minus the testing-only props. */
export type ProgressSeriesCellValue = Omit<F0ProgressSeriesProps, "dataTestId">;
export declare const ProgressSeriesCell: (args: ProgressSeriesCellValue, meta: ValueDisplayRendererContext) => import("react").JSX.Element;
