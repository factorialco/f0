import { ValueDisplayRendererContext } from '../../renderers';
import { WithAvatarBadge } from '../types';
interface PersonValue {
    firstName: string;
    lastName: string;
    src?: string;
    deactivated?: boolean;
}
export type PersonCellValue = WithAvatarBadge<PersonValue>;
export declare const PersonCell: (args: PersonCellValue, meta: ValueDisplayRendererContext) => import("react").JSX.Element;
export {};
