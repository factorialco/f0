import { StandardLayout } from "@factorialco/f0-react"
import { Page } from "@factorialco/f0-react/dist/experimental"

import { Outlet } from "@/prototypes/home/hub/reference/router"

import { ProfileHeader } from "../components/ProfileHeader"

/**
 * Layout route for the Profile prototype. Owns the persistent page shell
 * (`Page` + `ProfileHeader` tab strip + `StandardLayout`); the routed body
 * renders in `<Outlet/>`.
 */
export function ProfileLayout() {
  return (
    <Page embedded header={<ProfileHeader />}>
      <StandardLayout>
        <Outlet />
      </StandardLayout>
    </Page>
  )
}
