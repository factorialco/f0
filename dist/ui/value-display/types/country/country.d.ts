import { CountryCode } from '../../../../lib/countries';
import { ValueDisplayRendererContext } from '../../renderers';
interface CountryValue {
    code: CountryCode | (string & {});
    label?: string;
}
export type CountryCellValue = CountryValue;
export declare const CountryCell: (args: CountryCellValue, context: ValueDisplayRendererContext) => import("react").JSX.Element;
export {};
