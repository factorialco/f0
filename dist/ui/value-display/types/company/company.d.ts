import { ValueDisplayRendererContext } from '../../renderers';
import { WithAvatarBadge } from '../types';
interface CompanyValue {
    name: string;
    src?: string;
}
export type CompanyCellValue = WithAvatarBadge<CompanyValue>;
export declare const CompanyCell: (args: CompanyCellValue, meta: ValueDisplayRendererContext) => import("react").JSX.Element;
export {};
