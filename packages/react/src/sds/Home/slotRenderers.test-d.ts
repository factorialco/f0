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

test("the OPTIONAL flags let a feed mix rows the schema would otherwise even out", () => {
  // Some rows two-line, some one — and some trailing a face, some nothing.
  listSlot(
    { right: "person", rightOptional: true, descriptionOptional: true },
    [
      { id: 1, title: "with both", description: "Due Today", rightAvatar: ada },
      { id: 2, title: "with neither" },
    ]
  )

  listSlot({ right: "counter", rightOptional: true }, [
    { id: 1, title: "x", count: 3 },
    { id: 2, title: "y" },
  ])

  // Optional means allowed, not unchecked: the data still has to be the kind
  // the schema declared.
  listSlot({ right: "person", rightOptional: true }, [
    // @ts-expect-error a person slot still rejects a count
    { id: 1, title: "x", count: 3 },
  ])
  listSlot({ descriptionOptional: true }, [
    // @ts-expect-error a subtitle is still not allowed unless declared
    { id: 1, title: "x", subtitle: "y" },
  ])

  // A subtitle only SOME rows have — the late ones say how late they are.
  listSlot({ subtitleOptional: true }, [
    { id: 1, title: "Expenses", subtitle: "2 days overdue" },
    { id: 2, title: "Onboarding" },
  ])
})

test("a row's subtitle may be critical — wherever a subtitle is declared at all", () => {
  listSlot({ subtitleRequired: true }, [
    { id: 1, title: "x", subtitle: "2 days overdue", subtitleCritical: true },
    { id: 2, title: "y", subtitle: "Due Friday" },
  ])
  listSlot({ subtitleOptional: true }, [
    { id: 1, title: "x", subtitle: "2 days overdue", subtitleCritical: true },
    { id: 2, title: "y" },
  ])

  listSlot({}, [
    // @ts-expect-error nothing to colour: this schema declares no subtitle
    { id: 1, title: "x", subtitleCritical: true },
  ])
})

test("a row's second line may be critical — wherever a description is declared at all", () => {
  listSlot({ descriptionRequired: true }, [
    {
      id: 1,
      title: "x",
      description: "Rejected by Finance",
      descriptionCritical: true,
    },
    { id: 2, title: "y", description: "Due Friday" },
  ])
  listSlot({ descriptionOptional: true }, [
    {
      id: 1,
      title: "x",
      description: "Rejected by Finance",
      descriptionCritical: true,
    },
    { id: 2, title: "y" },
  ])

  listSlot({}, [
    // @ts-expect-error nothing to colour: this schema declares no description
    { id: 1, title: "x", descriptionCritical: true },
  ])
})

test("a second line may be a LIST of facts, each with its own tone", () => {
  listSlot({ descriptionRequired: true }, [
    {
      id: 1,
      title: "Expenses",
      description: [
        { text: "2 days overdue", critical: true },
        { text: "€340" },
        { text: "12 receipts" },
      ],
    },
    // The plain string form still works beside it, in the same list.
    { id: 2, title: "Onboarding", description: "Due Friday" },
  ])

  listSlot({ descriptionOptional: true }, [
    { id: 1, title: "x", description: [{ text: "Rejected", critical: true }] },
    { id: 2, title: "y" },
  ])

  listSlot({ descriptionRequired: true }, [
    {
      id: 1,
      title: "x",
      // @ts-expect-error a part's tone is `critical`, not `descriptionCritical`
      description: [{ text: "Rejected", descriptionCritical: true }],
    },
  ])

  listSlot({ descriptionRequired: true }, [
    // @ts-expect-error parts carry their own tone — the whole-line flag is not also allowed
    {
      id: 1,
      title: "x",
      description: [{ text: "Rejected", critical: true }],
      descriptionCritical: true,
    },
  ])

  listSlot({}, [
    // @ts-expect-error nothing to say: this schema declares no description
    { id: 1, title: "x", description: [{ text: "Rejected" }] },
  ])
})

test("the two murmuring lines carry their tone independently", () => {
  listSlot({ subtitleRequired: true, descriptionRequired: true }, [
    {
      id: 1,
      title: "x",
      subtitle: "Travel",
      description: "Rejected by Finance",
      descriptionCritical: true,
    },
    {
      id: 2,
      title: "y",
      subtitle: "2 days overdue",
      subtitleCritical: true,
      description: "Submitted Monday",
    },
  ])
})

test("an icon row may be tinted, and only with a colour from the palette", () => {
  listSlot({ left: "icon" }, [
    { id: 1, title: "Row", avatar: { icon: PalmTree, color: "purple" } },
  ])

  // A hex of its own, for a colour that is already data.
  listSlot({ left: "icon" }, [
    { id: 1, title: "Row", avatar: { icon: PalmTree, color: "#4F46E5" } },
  ])

  listSlot({ left: "icon" }, [
    // @ts-expect-error a bare name is neither a palette colour nor a hex
    { id: 1, title: "Row", avatar: { icon: PalmTree, color: "octarine" } },
  ])
  listSlot({ left: "person" }, [
    // @ts-expect-error only the icon glyph takes a colour
    { id: 1, title: "x", avatar: { ...ada, color: "purple" } },
  ])
})

test("a row's actions are its own — no schema flag gates them", () => {
  listSlot({}, [
    {
      id: 1,
      title: "x",
      actions: [{ label: "Dismiss", icon: PalmTree, onClick: () => {} }],
    },
    { id: 2, title: "y" },
  ])

  listSlot({}, [
    {
      id: 1,
      title: "x",
      // @ts-expect-error an action names what it does — the label is required
      actions: [{ icon: PalmTree, onClick: () => {} }],
    },
  ])
})

test("the schema only speaks the declared kinds", () => {
  // @ts-expect-error not a left kind
  listSlot({ left: "banana" }, [])
  // @ts-expect-error not a right kind
  listSlot({ right: "banana-list" }, [])
})
