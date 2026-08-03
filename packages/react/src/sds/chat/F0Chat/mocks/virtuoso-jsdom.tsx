import { type ComponentProps, createElement, type ReactNode } from "react"

type VirtuosoModule = typeof import("react-virtuoso")

/**
 * jsdom has no layout, so Virtuoso would render zero rows. Wrapping the real
 * component in the official VirtuosoMockContext gives every row a fixed height
 * and a viewport tall enough to render EVERYTHING — content assertions then
 * see the full transcript, like the old pass-through virtualizer mock did.
 *
 * Use from a test file as:
 *   vi.mock("react-virtuoso", async (importOriginal) => {
 *     const { mockVirtuosoModule } = await import("../mocks/virtuoso-jsdom")
 *     return mockVirtuosoModule(await importOriginal())
 *   })
 */
export function mockVirtuosoModule(actual: VirtuosoModule): VirtuosoModule {
  // jsdom implements neither. The scrollTo stub must APPLY the offset and
  // dispatch a scroll event: Virtuoso keeps the list `visibility: hidden`
  // until it observes the scroll that reaches its initial location — a silent
  // no-op would leave every test asserting against an empty transcript.
  Element.prototype.scrollTo = function (
    xOrOptions?: number | ScrollToOptions,
    y?: number
  ) {
    const top =
      typeof xOrOptions === "object" ? (xOrOptions?.top ?? 0) : (y ?? 0)
    this.scrollTop = top
    this.dispatchEvent(new Event("scroll"))
  }
  if (!Element.prototype.scrollBy) {
    Element.prototype.scrollBy = () => {}
  }
  const MockedVirtuoso = ({
    // Entry positioning defers rendering across animation frames — which never
    // arrive inside a synchronous jsdom assertion, leaving the list empty.
    // Tests assert CONTENT; positioning is validated in Storybook.
    initialTopMostItemIndex: _initialTopMostItemIndex,
    ...props
  }: ComponentProps<typeof actual.Virtuoso>): ReactNode =>
    createElement(
      actual.VirtuosoMockContext.Provider,
      { value: { viewportHeight: 100_000, itemHeight: 40 } },
      createElement(actual.Virtuoso, props)
    )
  return { ...actual, Virtuoso: MockedVirtuoso as typeof actual.Virtuoso }
}
