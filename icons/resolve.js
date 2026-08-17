import { iconRegistry } from "./registry";
/** Whether `value` names an icon in the registry. */
export function isIconName(value) {
    // `hasOwnProperty` rather than a bare lookup: names can come from backend
    // data, and `iconRegistry["toString"]` would otherwise resolve to an
    // inherited `Object.prototype` method and blow up at render time.
    return Object.prototype.hasOwnProperty.call(iconRegistry, value);
}
/**
 * Resolves an arbitrary string to an icon component, or `undefined` if it does
 * not name one. Use this for names that aren't known at compile time — coming
 * from an API, a config file or a CMS. When the name *is* known, prefer passing
 * it straight to an `IconType` prop so TypeScript can validate it.
 */
export function resolveIconName(name) {
    return isIconName(name) ? iconRegistry[name] : undefined;
}
/**
 * Resolves an icon to its component.
 *
 * Components are returned untouched, which is what keeps `IconType` backwards
 * compatible. Returns `undefined` for a name outside the registry, so callers
 * can choose between a fallback icon and rendering nothing.
 */
export function resolveIcon(icon) {
    return typeof icon === "string" ? resolveIconName(icon) : icon;
}
