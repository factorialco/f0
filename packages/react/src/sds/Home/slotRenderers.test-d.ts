import { assertType } from "vitest"

import { PalmTree } from "@/icons/app"

import { type HomeWidgetSlot, listSlot } from "./slotRenderers"

/**
 * TYPE-LEVEL tests for the `list` slot schema: the items' shape must FOLLOW
 * the schema, at compile time. Every `@ts-expect-error` here is load-bearing —
 * if the schema stops rejecting that case, `tsc` flags the directive as
 * unused and the suite fails.
 */

const ada = { firstName: "Ada", lastName: "Lovelace" }

test("left decides the avatar data every row must carry", () => {
  assertType<HomeWidgetSlot>(
    listSlot({ left: "person" }, [{ id: 1, title: "Ada", avatar: ada }])
  )
  listSlot({ left: "team" }, [
    { id: 1, title: "Payroll", avatar: { name: "Payroll" } },
  ])
  listSlot({ left: "icon" }, [
    { id: 1, title: "Row", avatar: { icon: PalmTree } },
  ])
  listSlot({ left: "flag" }, [
    { id: 1, title: "Spain", avatar: { flag: "es" } },
  ])
  listSlot({ left: "module" }, [
    { id: 1, title: "Post", module: "communities" },
  ])
  listSlot({ left: "alert" }, [{ id: 1, title: "In", alert: "positive" }])

  listSlot({ left: "person" }, [
    // @ts-expect-error a person slot rejects team data
    { id: 1, title: "x", avatar: { name: "Payroll" } },
  ])
  listSlot({ left: "team" }, [
    // @ts-expect-error a team slot rejects person data
    { id: 1, title: "x", avatar: ada },
  ])
  listSlot({ left: "module" }, [
    // @ts-expect-error a module slot takes `module`, not an avatar
    { id: 1, title: "x", avatar: ada },
  ])
  listSlot({ left: "alert" }, [
    // @ts-expect-error an alert slot takes `alert`, not a module
    { id: 1, title: "x", module: "communities" },
  ])
  listSlot({}, [
    // @ts-expect-error no left declared → no avatar allowed
    { id: 1, title: "x", avatar: ada },
  ])
  listSlot({ left: "person" }, [
    { id: 1, title: "ok", avatar: ada },
    // @ts-expect-error rows cannot mix kinds — this row is not person data
    { id: 2, title: "bad", avatar: { flag: "es" } },
  ])
})

test("right decides the trailing data every row must carry", () => {
  listSlot({ right: "counter" }, [{ id: 1, title: "x", count: 3 }])
  listSlot({ right: "person" }, [{ id: 1, title: "x", rightAvatar: ada }])
  listSlot({ right: "person-list" }, [
    { id: 1, title: "x", avatars: [ada], remainingCount: 2 },
  ])

  listSlot({ right: "counter" }, [
    // @ts-expect-error a counter slot takes `count`, not faces
    { id: 1, title: "x", avatars: [ada] },
  ])
  listSlot({}, [
    // @ts-expect-error no right declared → no count allowed
    { id: 1, title: "x", count: 3 },
  ])
  listSlot({ right: "team-list" }, [
    // @ts-expect-error the faces must match the declared list type
    { id: 1, title: "x", avatars: [ada] },
  ])
})

test("the schema's text voices are required — and forbidden when not declared", () => {
  listSlot({ subtitleRequired: true }, [{ id: 1, title: "x", subtitle: "y" }])
  listSlot({ descriptionRequired: true }, [
    { id: 1, title: "x", description: "y" },
  ])

  listSlot({ subtitleRequired: true }, [
    // @ts-expect-error subtitleRequired demands a subtitle on every row
    { id: 1, title: "x" },
  ])
  listSlot({ descriptionRequired: true }, [
    // @ts-expect-error descriptionRequired demands a description on every row
    { id: 1, title: "x" },
  ])
  listSlot({}, [
    // @ts-expect-error a subtitle is not allowed unless the schema declares it
    { id: 1, title: "x", subtitle: "y" },
  ])
  listSlot({}, [
    // @ts-expect-error a description is not allowed unless the schema declares it
    { id: 1, title: "x", description: "y" },
  ])
})

test("clickBehavior: link is the ONLY click behavior — href, never onClick", () => {
  listSlot({ clickBehavior: "link" }, [{ id: 1, title: "x", href: "/x" }])

  listSlot({ clickBehavior: "link" }, [
    // @ts-expect-error link rows demand an href
    { id: 1, title: "x" },
  ])
  listSlot({ clickBehavior: "link" }, [
    // @ts-expect-error rows never take an onClick — navigation is href-only
    { id: 1, title: "x", href: "/x", onClick: () => {} },
  ])
  // @ts-expect-error "onClick" is not a click behavior — rows are links or inert
  listSlot({ clickBehavior: "onClick" }, [])
  listSlot({}, [
    // @ts-expect-error inert rows take no href
    { id: 1, title: "x", href: "/x" },
  ])
})

test("the schema only speaks the declared kinds", () => {
  // @ts-expect-error not a left kind
  listSlot({ left: "banana" }, [])
  // @ts-expect-error not a right kind
  listSlot({ right: "banana-list" }, [])
})
