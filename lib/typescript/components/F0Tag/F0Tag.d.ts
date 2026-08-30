import { F0TagAlert } from "./F0TagAlert";
import { F0TagBalance } from "./F0TagBalance";
import { F0TagCompany } from "./F0TagCompany";
import { F0TagDot } from "./F0TagDot";
import { F0TagPerson } from "./F0TagPerson";
import { F0TagRaw } from "./F0TagRaw";
import { F0TagRoot } from "./F0TagRoot";
import { F0TagStatus } from "./F0TagStatus";
import { F0TagTeam } from "./F0TagTeam";
type F0TagNamespace = typeof F0TagRoot & {
    Dot: typeof F0TagDot;
    Raw: typeof F0TagRaw;
    Alert: typeof F0TagAlert;
    Status: typeof F0TagStatus;
    Person: typeof F0TagPerson;
    Team: typeof F0TagTeam;
    Company: typeof F0TagCompany;
    Balance: typeof F0TagBalance;
};
/**
 * Namespaced `F0Tag` API entry point.
 *
 * Use `F0Tag.*` semantic variants in product code.
 */
declare const F0Tag: F0TagNamespace;
export { F0Tag, F0TagRoot, F0TagDot, F0TagRaw, F0TagAlert, F0TagStatus, F0TagPerson, F0TagTeam, F0TagCompany, F0TagBalance, };
//# sourceMappingURL=F0Tag.d.ts.map