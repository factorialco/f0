import type { F0AvatarListCompanyItem, F0AvatarListFileItem, F0AvatarListFlagItem, F0AvatarListPersonItem, F0AvatarListTeamItem } from "../F0AvatarList.types";
export type PersonListAvatar = F0AvatarListPersonItem;
export type TeamListAvatar = F0AvatarListTeamItem;
export type CompanyListAvatar = F0AvatarListCompanyItem;
export type FlagListAvatar = F0AvatarListFlagItem;
export type FileListAvatar = F0AvatarListFileItem;
export type AvatarRenderInput = {
    type: "person";
    avatar: PersonListAvatar;
} | {
    type: "team";
    avatar: TeamListAvatar;
} | {
    type: "company";
    avatar: CompanyListAvatar;
} | {
    type: "flag";
    avatar: FlagListAvatar;
} | {
    type: "file";
    avatar: FileListAvatar;
};
export type SvgAvatarData = {
    kind: "image";
    src: string;
} | {
    kind: "initials";
    fill: string;
    text: string;
} | {
    kind: "file";
    text: string;
    textFill: string;
};
//# sourceMappingURL=list-types.d.ts.map