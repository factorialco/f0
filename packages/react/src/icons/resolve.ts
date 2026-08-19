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
 * To accept only some of the icon sets, use {@link IconTypeOf}.
 */
export type IconType = IconComponent | IconName

/**
 * An icon restricted to some of the icon sets, as a component or a name.
 *
 * ```ts
 * icon: IconType                      // any name, or a component
 * icon: IconTypeOf<"modules">         // module names only, or a component
 * icon: IconTypeOf<"modules" | "ai">  // either of those sets, or a component
 * icon: IconName<"modules">           // module names only, no component
 * ```
 *
 * Narrowing constrains the *names*. A component still satisfies this type,
 * because icon components are structurally identical and can't be told apart
 * by the set they came from.
 *
 * `IconType` is deliberately not generic: it appears on hundreds of public
 * props, and a default type argument gets expanded to
 * `IconType<keyof IconNamesByNamespace>` in the rolled-up `.d.ts`, which is
 * what consumers would then see on every one of them.
 */
export type IconTypeOf<Namespace extends IconNamespace> =
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
