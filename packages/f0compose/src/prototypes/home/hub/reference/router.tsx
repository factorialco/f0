/** Translate the imported app's paths into Home's URL, keeping one router and agent. */
import { createContext, useCallback, useContext, type ReactNode } from "react"
import {
  useLocation as useHomeLocation,
  useNavigate as useHomeNavigate,
  useSearchParams,
} from "react-router-dom"
export { useSearchParams } from "react-router-dom"
export type { RouteObject } from "react-router-dom"

export const ImportedOutlet = createContext<ReactNode>(null)
export function Outlet() {
  return useContext(ImportedOutlet)
}
export function useLocation() {
  const location = useHomeLocation()
  const params = new URLSearchParams(location.search)
  const view = params.get("view") ?? "home"
  const aliases: Record<string, string> = {
    hours: "time-tracking",
    absences: "time-off",
    learning: "training",
    spend: "spending",
    files: "documents",
  }
  const page = params.get("page")
  return {
    ...location,
    pathname: `/p/${aliases[view] ?? view}${page ? `/${page}` : ""}`,
  }
}
export function homeHref(href: string) {
  const url = new URL(href, "http://localhost")
  const match = url.pathname.match(/^\/(?:p|m)\/([^/]+)(?:\/(.*))?$/)
  if (!match || match[1] === "home") return href
  const params = new URLSearchParams(url.search)
  params.set("view", match[1])
  if (match[2]) params.set("page", match[2])
  return `/p/home?${params}`
}
export function useNavigate() {
  const navigate = useHomeNavigate()
  return useCallback((href: string) => navigate(homeHref(href)), [navigate])
}
export function useParams<T extends string = string>(): Partial<
  Record<T, string>
> {
  const [params] = useSearchParams()
  const folder = params.get("page")?.match(/^library\/(.+)$/)?.[1]
  return { folderId: folder } as Partial<Record<T, string>>
}
