import { AvatarVariant } from '../F0Avatar';
export declare function getAvatarDisplayName(avatarType: "person", avatar: Omit<Extract<AvatarVariant, {
    type: "person";
}>, "type">): string;
export declare function getAvatarDisplayName(avatarType: "team", avatar: Omit<Extract<AvatarVariant, {
    type: "team";
}>, "type">): string;
export declare function getAvatarDisplayName(avatarType: "company", avatar: Omit<Extract<AvatarVariant, {
    type: "company";
}>, "type">): string;
export declare function getAvatarDisplayName(avatarType: "file", avatar: Omit<Extract<AvatarVariant, {
    type: "file";
}>, "type">): string;
export declare function getAvatarDisplayName(avatarType: "flag", avatar: Omit<Extract<AvatarVariant, {
    type: "flag";
}>, "type">): string;
export declare function getAvatarDisplayName(avatarType: "person" | "team" | "company" | "file" | "flag", avatar: any): string;
