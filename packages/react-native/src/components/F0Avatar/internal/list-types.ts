import type {
  F0AvatarCompanyProps,
  F0AvatarFileProps,
  F0AvatarFlagProps,
  F0AvatarPersonProps,
  F0AvatarTeamProps,
} from "../F0Avatar.types"

export type PersonListAvatar = Omit<F0AvatarPersonProps, "size">
export type TeamListAvatar = Omit<F0AvatarTeamProps, "size">
export type CompanyListAvatar = Omit<F0AvatarCompanyProps, "size">
export type FlagListAvatar = Omit<F0AvatarFlagProps, "size">
export type FileListAvatar = Omit<F0AvatarFileProps, "size">

export type AvatarRenderInput =
  | { type: "person"; avatar: PersonListAvatar }
  | { type: "team"; avatar: TeamListAvatar }
  | { type: "company"; avatar: CompanyListAvatar }
  | { type: "flag"; avatar: FlagListAvatar }
  | { type: "file"; avatar: FileListAvatar }

export type SvgAvatarData =
  | { kind: "image"; src: string }
  | { kind: "initials"; fill: string; text: string }
  | { kind: "file"; text: string; textFill: string }
