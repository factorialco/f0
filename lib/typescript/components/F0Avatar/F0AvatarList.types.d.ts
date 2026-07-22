import { type F0AvatarCompanyProps, type F0AvatarFileProps, type F0AvatarFlagProps, type F0AvatarPersonProps, type F0AvatarTeamProps } from "./F0Avatar.types";
export declare const AVATAR_LIST_SIZES: readonly ["xs", "sm", "md"];
export type AvatarListSize = (typeof AVATAR_LIST_SIZES)[number];
export declare const F0_AVATAR_LIST_TYPES: readonly ["person", "team", "company", "flag", "file"];
export type F0AvatarListType = (typeof F0_AVATAR_LIST_TYPES)[number];
export type F0AvatarListPersonItem = Pick<F0AvatarPersonProps, "firstName" | "lastName" | "src">;
export type F0AvatarListTeamItem = Pick<F0AvatarTeamProps, "name" | "src">;
export type F0AvatarListCompanyItem = Pick<F0AvatarCompanyProps, "name" | "src">;
export type F0AvatarListFlagItem = Pick<F0AvatarFlagProps, "flag">;
export type F0AvatarListFileItem = Pick<F0AvatarFileProps, "file">;
type F0AvatarListTypeMapping = {
    person: F0AvatarListPersonItem;
    team: F0AvatarListTeamItem;
    company: F0AvatarListCompanyItem;
    flag: F0AvatarListFlagItem;
    file: F0AvatarListFileItem;
};
export type F0AvatarListProps<T extends F0AvatarListType = F0AvatarListType> = {
    type: T;
    avatars: Array<F0AvatarListTypeMapping[T]>;
    size?: AvatarListSize;
    max?: number;
    remainingCount?: number;
};
export type F0AvatarListAnyProps = {
    [K in F0AvatarListType]: F0AvatarListProps<K>;
}[F0AvatarListType];
export {};
//# sourceMappingURL=F0AvatarList.types.d.ts.map