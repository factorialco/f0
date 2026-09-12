import { useSyncExternalStore } from "react";
import type { ProfileId } from "../profileStore";
const listeners = new Set<() => void>();
const key = (profile: ProfileId) =>
  `f0compose:home:collapsed-widgets:${profile}`;
const fallback = new Map<ProfileId, string>();
function read(profile: ProfileId): string {
  try {
    return localStorage.getItem(key(profile)) ?? fallback.get(profile) ?? "[]";
  } catch {
    return fallback.get(profile) ?? "[]";
  }
}
export function useWidgetCollapse(profile: ProfileId) {
  const raw = useSyncExternalStore(
    (listener) => {
      listeners.add(listener);
      return () => {
        listeners.delete(listener);
      };
    },
    () => read(profile),
  );
  let collapsed: string[] = [];
  try {
    const parsed: unknown = JSON.parse(raw);
    if (Array.isArray(parsed))
      collapsed = parsed.filter((id): id is string => typeof id === "string");
  } catch {
    /* Old storage. */
  }
  const setCollapsed = (ids: string[]) => {
    fallback.set(profile, JSON.stringify(ids));
    try {
      localStorage.setItem(key(profile), JSON.stringify(ids));
    } catch {
      /* Session fallback. */
    }
    listeners.forEach((listener) => listener());
  };
  return {
    collapsed,
    setCollapsed,
    toggleCollapsed: (id: string) =>
      setCollapsed(
        collapsed.includes(id)
          ? collapsed.filter((item) => item !== id)
          : [...collapsed, id],
      ),
  };
}
