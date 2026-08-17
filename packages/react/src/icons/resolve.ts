import { iconRegistry, type IconName, type IconNamespace } from "./registry"
import type { IconComponent } from "./types"

/**
 * An icon, either as a component or as the name of one.
 *
 * Passing a name avoids importing the component just to hand it to a prop:
 *
 * ```tsx
 * <F0Icon icon="pencil" />           // preferred
 * <F0Icon icon={Pencil} />           // still supported
 * <F0Icon icon="modules:payroll" />  // non-`app` namespaces are prefixed
 * <F0Icon icon={CalendarAnimated} /> // animated icons are component-only
 * ```
 *
 * The type parameter narrows which sets a prop accepts. It defaults to all of
 * them, so a plain `IconType` keeps meaning what it always has:
 *
 * ```ts
 * icon: IconType                    // any name, or a component
 * icon: IconType<"modules">         // module names only, or a component
 * icon: IconType<"modules" | "ai">  // either of those sets, or a component
 * icon: IconName<"modules">         // module names only, no component
 * ```
 */
export type IconType<Namespace extends IconNamespace = IconNamespace> =
  | IconComponent
  | IconName<Namespace>

/** Whether `value` names an icon in the registry. */
export function isIconName(value: string): value is IconName {
  // `hasOwnProperty` rather than a bare lookup: names can come from backend
  // data, and `iconRegistry["toString"]` would otherwise resolve to an
  // inherited `Object.prototype` method and blow up at render time.
  return Object.prototype.hasOwnProperty.call(iconRegistry, value)
}

/**
 * Resolves an arbitrary string to an icon component, or `undefined` if it does
 * not name one. Use this for names that aren't known at compile time — coming
 * from an API, a config file or a CMS. When the name *is* known, prefer passing
 * it straight to an `IconType` prop so TypeScript can validate it.
 */
export function resolveIconName(name: string): IconComponent | undefined {
  return isIconName(name) ? iconRegistry[name] : undefined
}

/**
 * Resolves an icon to its component.
 *
 * Components are returned untouched, which is what keeps `IconType` backwards
 * compatible. Returns `undefined` for a name outside the registry, so callers
 * can choose between a fallback icon and rendering nothing.
 */
export function resolveIcon(icon: IconType): IconComponent | undefined {
  return typeof icon === "string" ? resolveIconName(icon) : icon
}
