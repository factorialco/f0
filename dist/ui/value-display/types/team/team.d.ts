import { ValueDisplayRendererContext } from '../../renderers';
import { WithAvatarBadge } from '../types';
interface TeamValue {
    name: string;
    src?: string;
}
export type TeamCellValue = WithAvatarBadge<TeamValue>;
export declare const TeamCell: (args: TeamCellValue, meta: ValueDisplayRendererContext) => import("react").JSX.Element;
export {};
