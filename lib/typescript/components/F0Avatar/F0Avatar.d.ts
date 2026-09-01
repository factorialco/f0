import { type ReactNode } from "react";
import { type F0AvatarProps } from "./F0Avatar.types";
import { F0AvatarAlert } from "./F0AvatarAlert";
import { F0AvatarCompany } from "./F0AvatarCompany";
import { F0AvatarDate } from "./F0AvatarDate";
import { F0AvatarEmoji } from "./F0AvatarEmoji";
import { F0AvatarFile } from "./F0AvatarFile";
import { F0AvatarFlag } from "./F0AvatarFlag";
import { F0AvatarIcon } from "./F0AvatarIcon";
import { F0AvatarList } from "./F0AvatarList";
import { F0AvatarModule } from "./F0AvatarModule";
import { F0AvatarPerson } from "./F0AvatarPerson";
import { F0AvatarTeam } from "./F0AvatarTeam";
/**
 * F0AvatarRoot - Shared polymorphic avatar root.
 *
 * Dispatches the discriminated `avatar` payload to the matching semantic avatar
 * variant so hosts can render a single entry point when the avatar type is dynamic.
 * Prefer `F0Avatar.*` named variants in product code.
 *
 * @example
 * Prefer named variants in product code
 * <F0Avatar.Person firstName="Alice" lastName="Smith" size="md" />
 * Use the root when the avatar type is determined at runtime
 * <F0AvatarRoot avatar={{ type: "person", firstName: "Alice", lastName: "Smith" }} size="md" />
 */
declare const F0AvatarRoot: {
    ({ avatar, size }: F0AvatarProps): ReactNode;
    displayName: string;
};
type F0AvatarNamespace = typeof F0AvatarRoot & {
    Person: typeof F0AvatarPerson;
    Team: typeof F0AvatarTeam;
    Company: typeof F0AvatarCompany;
    Emoji: typeof F0AvatarEmoji;
    File: typeof F0AvatarFile;
    Icon: typeof F0AvatarIcon;
    Flag: typeof F0AvatarFlag;
    Alert: typeof F0AvatarAlert;
    Date: typeof F0AvatarDate;
    Module: typeof F0AvatarModule;
    List: typeof F0AvatarList;
};
/**
 * Namespaced `F0Avatar` API entry point.
 *
 * Use `F0Avatar.*` semantic variants in product code,
 * or pass an `avatar` discriminated union to the root for polymorphic rendering.
 *
 * @example
 * <F0Avatar.Person firstName="Alice" lastName="Smith" />
 * <F0Avatar.Team name="Design" size="md" />
 * <F0Avatar avatar={{ type: "flag", flag: "ES" }} size="sm" />
 */
declare const F0Avatar: F0AvatarNamespace;
export { F0Avatar, F0AvatarRoot, F0AvatarPerson, F0AvatarTeam, F0AvatarCompany, F0AvatarEmoji, F0AvatarFile, F0AvatarIcon, F0AvatarFlag, F0AvatarAlert, F0AvatarDate, F0AvatarModule, F0AvatarList, };
//# sourceMappingURL=F0Avatar.d.ts.map