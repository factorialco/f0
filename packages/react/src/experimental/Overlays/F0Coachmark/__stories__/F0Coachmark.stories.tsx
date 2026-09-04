import type { Meta, StoryObj } from "@storybook/react-vite"

import { useEffect, useMemo, useState } from "react"
import { expect, screen, userEvent, waitFor, within } from "storybook/test"

import { F0Button } from "@/components/F0Button"
import { withSnapshot } from "@/lib/storybook-utils/parameters"

import { F0Coachmark } from "../F0Coachmark"
import { defineStepByStepCoachmarkGuidance } from "../guidance"
import { coachmarks } from "../imperative"
import type { F0CoachmarkProps } from "../types"

type AnchoredCoachmarkProps = Omit<
  F0CoachmarkProps,
  "target" | "onAction" | "onClose"
> & {
  /** Label of the element the panel points at. */
  anchorLabel?: string
}

/**
 * Visual stories drive the panel directly, the way `CoachmarkProvider` does:
 * with an already-resolved element. It is the only way to render several at once
 * (the four sides of the Chromatic snapshot) — through the public
 * `coachmarks.open` API only one is ever on screen, by design.
 */
const AnchoredCoachmark = ({
  anchorLabel = "Filters",
  ...props
}: AnchoredCoachmarkProps) => {
  const [target, setTarget] = useState<HTMLElement | null>(null)

  return (
    <>
      <span ref={setTarget} className="inline-flex">
        <F0Button variant="outline" label={anchorLabel} />
      </span>
      {target && (
        <F0Coachmark
          {...props}
          target={target}
          onAction={() => undefined}
          onClose={() => undefined}
        />
      )}
    </>
  )
}

const meta = {
  title: "F0Coachmark",
  component: AnchoredCoachmark,
  // !autodocs is required to opt out — autodocs is enabled globally in
  // .storybook/preview.tsx, so dropping the tag alone has no effect.
  tags: ["!autodocs", "experimental"],
  argTypes: {
    side: {
      control: "select",
      options: ["top", "right", "bottom", "left"],
    },
    align: {
      control: "select",
      options: ["start", "center", "end"],
    },
  },
  args: {
    title: "Filters got smarter",
    description:
      "Stack filters on jobs and candidates, then save the combination as a view your whole team can reuse.",
    actionLabel: "Learn more",
  },
  decorators: [
    // The panel is portalled, so it never stretches this box. Anchoring at the
    // TOP of a box tall enough to hold the panel keeps it inside the example
    // instead of spilling onto whatever follows in the docs.
    //
    // min-h-72 (288px) is sized off the tallest panel in the docs column:
    // 8px top padding + 32px anchor + 8px sideOffset + 198px panel = 246px,
    // leaving ~42px of slack for copy wrapping differently at narrow widths.
    // `min-h` rather than `h` so the Snapshot story's grid can still grow.
    (Story) => (
      <div className="flex min-h-72 items-start justify-center px-6 pb-6 pt-2">
        {Story()}
      </div>
    ),
  ],
} satisfies Meta<typeof AnchoredCoachmark>

export default meta

type Story = StoryObj<typeof meta>

export const Basic: Story = {}

/**
 * A step indicator appears on its own once a coachmark has more than one step.
 * The action label follows: `Next` until the last step, then `Got it`.
 */
export const WithStep: Story = {
  tags: ["no-sidebar"],
  args: {
    step: { current: 1, total: 3 },
    actionLabel: undefined,
  },
}

/**
 * The last step of a sequence ends it, so its action says so rather than
 * pointing forward.
 */
export const LastStep: Story = {
  tags: ["no-sidebar"],
  args: {
    step: { current: 3, total: 3 },
    actionLabel: undefined,
  },
}

/**
 * `arrow: false` removes the pointer while keeping the anchored positioning.
 */
export const WithoutArrow: Story = {
  tags: ["no-sidebar"],
  args: { arrow: false },
}

/**
 * Title and action only — `description` is optional.
 */
export const WithoutDescription: Story = {
  tags: ["no-sidebar"],
  args: { description: undefined },
}

/**
 * The coachmark flips to the opposite side and shifts along its target when it
 * would overflow the viewport, so it stays visible near a screen edge.
 */
export const CollisionAware: Story = {
  tags: ["no-sidebar"],
  args: { side: "top" },
  decorators: [
    (Story) => (
      <div className="flex h-72 w-full items-end justify-center pb-2">
        {Story()}
      </div>
    ),
  ],
}

const sides = ["top", "right", "bottom", "left"] as const

export const Snapshot: Story = {
  tags: ["no-sidebar"],
  parameters: withSnapshot({}),
  decorators: [(Story) => <div className="p-16">{Story()}</div>],
  // Each cell is sized so the panel never collides with the viewport or a
  // neighbour — otherwise Radix flips the side and the snapshot stops showing
  // the four orientations it is meant to cover.
  render: (args) => (
    <div className="grid grid-cols-2">
      {sides.map((side) => (
        <div
          key={side}
          className="flex h-96 w-[46rem] items-center justify-center"
        >
          <AnchoredCoachmark {...args} side={side} anchorLabel={side} />
        </div>
      ))}
    </div>
  ),
}

/**
 * The real API. `coachmarks.open` takes the element to point at and the copy;
 * the coachmark closes itself, sequences its own steps, and queues behind
 * whatever is already on screen. There is no component to render and no `open`
 * state to keep in sync.
 */
export const Imperative: Story = {
  // Fires real coachmarks into the global overlay (a shared, document-level
  // layer), which can leak into other stories running in the same worker page.
  // It's an interactive playground, not a visit target.
  tags: ["!test", "no-sidebar"],
  parameters: {
    layout: "fullscreen",
    docs: { story: { inline: false, height: "460px" } },
  },
  decorators: [(Story) => <>{Story()}</>],
  render: function Imperative() {
    // Leave nothing behind for the next story on the docs page.
    useEffect(() => () => coachmarks.closeAll(), [])

    return (
      <div className="flex flex-col gap-6 p-8">
        <div className="flex flex-row gap-2">
          <span id="story-filters">
            <F0Button variant="outline" label="Filters" />
          </span>
          <span id="story-views">
            <F0Button variant="outline" label="Views" />
          </span>
        </div>
        <div className="flex flex-col items-start gap-2">
          <F0Button
            variant="ghost"
            label="One coachmark"
            onClick={() => {
              coachmarks.open({
                id: "story-single",
                targetElement: "#story-filters",
                title: "Filters got smarter",
                description:
                  "Stack filters on jobs and candidates, then save the combination as a view.",
                action: { label: "Learn more" },
              })
            }}
          />
          <F0Button
            variant="ghost"
            label="A two-step walkthrough"
            onClick={() => {
              coachmarks.open({
                id: "story-sequence",
                steps: [
                  {
                    targetElement: "#story-filters",
                    title: "Start with a filter",
                    description: "Narrow the list down to what you care about.",
                  },
                  {
                    targetElement: "#story-views",
                    title: "Then save it as a view",
                    description: "Your whole team can reuse it.",
                    side: "bottom",
                  },
                ],
              })
            }}
          />
          <F0Button
            variant="ghost"
            label="Two at once — the second one queues"
            onClick={() => {
              coachmarks.open({
                id: "story-queued-1",
                targetElement: "#story-filters",
                title: "First in line",
              })
              coachmarks.open({
                id: "story-queued-2",
                targetElement: "#story-views",
                title: "Waits its turn",
              })
            }}
          />
        </div>
      </div>
    )
  },
}

/**
 * A WALKTHROUGH DECLARED IN ONE PLACE. The steps name the elements they point
 * at, `anchor()` marks them, and the names are a union the compiler holds both
 * sides to — no selectors written against someone else's markup.
 *
 * It also brings what walking someone through a page needs: the page dimmed
 * except the step's element, a shield over it (`data-f0-coachmark-blocker`) that
 * swallows presses, a wiggle when one lands, and a way out for the reader who
 * keeps pressing — five of them and the walkthrough gives up.
 */
export const Guidance: Story = {
  // Same reason as `Imperative`: it fires real coachmarks into the shared
  // document-level overlay. A playground, not a visit target.
  tags: ["!test", "no-sidebar"],
  parameters: {
    layout: "fullscreen",
    docs: { story: { inline: false, height: "520px" } },
  },
  decorators: [(Story) => <>{Story()}</>],
  render: function Guidance() {
    const tour = useMemo(
      () =>
        defineStepByStepCoachmarkGuidance({
          id: "story-guidance",
          steps: [
            {
              element: "filters",
              title: "Start with a filter",
              description: "Narrow the list down to what you care about.",
            },
            {
              element: "views",
              title: "Then save it as a view",
              description: "Your whole team can reuse it.",
            },
            {
              element: "list",
              title: "That is the list you get",
              description: "Filtered, saved, and shared — in that order.",
              side: "top",
            },
          ],
        }),
      []
    )

    // Leave nothing behind for the next story on the docs page.
    useEffect(() => () => tour.stop(), [tour])

    return (
      <div className="flex flex-col items-start gap-6 p-8">
        <F0Button
          variant="outline"
          label="Start the walkthrough"
          onClick={() => {
            tour.start()
          }}
        />
        <div className="flex flex-row gap-2">
          <span {...tour.anchor("filters")} className="inline-flex">
            <F0Button variant="outline" label="Filters" />
          </span>
          <span {...tour.anchor("views")} className="inline-flex">
            <F0Button variant="outline" label="Views" />
          </span>
        </div>
        <div
          {...tour.anchor("list")}
          className="flex w-80 flex-col gap-2 rounded-md border border-solid border-f1-border bg-f1-background p-4"
        >
          <p className="m-0 font-medium">Candidates</p>
          <p className="m-0 text-f1-foreground-secondary">
            Three rows, one of them yours.
          </p>
        </div>
      </div>
    )
  },
}

/**
 * The imperative flow, exercised: a sequence advances on its own action and the
 * coachmark closes itself on the last step. Nothing here tracks `open`.
 */
export const ImperativeBehavior: Story = {
  tags: ["no-sidebar"],
  parameters: { layout: "fullscreen" },
  decorators: [(Story) => <>{Story()}</>],
  render: function ImperativeBehavior() {
    useEffect(() => {
      coachmarks.closeAll()
      coachmarks.open({
        id: "story-behavior",
        steps: [
          { targetElement: "#behavior-anchor", title: "Start with a filter" },
          {
            targetElement: "#behavior-anchor",
            title: "Then save it as a view",
          },
        ],
      })
      return () => coachmarks.closeAll()
    }, [])

    return (
      <div className="p-8">
        <span id="behavior-anchor">
          <F0Button variant="outline" label="Filters" />
        </span>
      </div>
    )
  },
  play: async ({ step }) => {
    const dialog = await screen.findByRole("dialog")

    await step("focus lands on the panel, not the dismiss button", async () => {
      await waitFor(() => expect(dialog).toHaveFocus())
      await expect(dialog).toHaveAccessibleName("Start with a filter")
      await expect(dialog).toHaveTextContent("1/2")
    })

    await step("the action advances to the next step", async () => {
      await userEvent.click(
        within(dialog).getByRole("button", { name: "Next" })
      )
      await waitFor(() =>
        expect(screen.getByRole("dialog")).toHaveAccessibleName(
          "Then save it as a view"
        )
      )
    })

    await step("the last step closes the coachmark", async () => {
      await userEvent.click(
        within(screen.getByRole("dialog")).getByRole("button", {
          name: "Got it",
        })
      )
      await waitFor(() =>
        expect(screen.queryByRole("dialog")).not.toBeInTheDocument()
      )
    })
  },
}

// F0Coachmark calls useI18n, so it cannot be rendered as inline JSX in MDX.
// These render inside the full decorator chain and are embedded in the docs
// through <Canvas> as DoDonts children. The meta decorator's top anchoring is
// what keeps each panel off the caption underneath its card.

export const DoDontsGoodCopy: Story = {
  tags: ["no-sidebar"],
  args: {
    title: "Filters got smarter",
    description:
      "Stack filters on jobs and candidates, then save the combination as a view your whole team can reuse.",
    actionLabel: "Learn more",
  },
}

export const DoDontsBadCopy: Story = {
  tags: ["no-sidebar"],
  args: {
    title: "Update",
    description:
      "We have made some changes to this area of the product that you might find useful, so please take a moment to review them whenever you get the chance.",
    actionLabel: "OK",
  },
}
