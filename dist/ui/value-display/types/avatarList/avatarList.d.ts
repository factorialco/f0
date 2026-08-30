import { CompanyAvatarVariant, PersonAvatarVariant, TeamAvatarVariant } from '../../../../components/avatars/F0Avatar';
import { F0AvatarListExtras } from '../../../../components/avatars/F0AvatarList/types';
import { ValueDisplayRendererContext } from '../../renderers';
type AvatarListValue = {
    /**
     * Maximum number of visible avatars. Overflow is collapsed into a `+N`
     * counter that opens the full list on hover.
     */
    max?: number;
    /**
     * @deprecated No longer has any effect; the `+N` popover always caps at the
     * available viewport height and scrolls. See
     * `F0AvatarListProps["tooltipScroll"]`.
     * @removeIn 5.0
     * @migration Remove the prop.
     */
    tooltipScroll?: "vertical" | "none";
} & ({
    type?: "person";
    avatarList: (PersonAvatarVariant & F0AvatarListExtras)[];
} | {
    type: "team";
    avatarList: (TeamAvatarVariant & F0AvatarListExtras)[];
} | {
    type: "company";
    avatarList: (CompanyAvatarVariant & F0AvatarListExtras)[];
});
export type AvatarListCellValue = AvatarListValue;
export declare const AvatarListCell: (args: AvatarListCellValue, meta: ValueDisplayRendererContext) => import("react").JSX.Element;
export {};
