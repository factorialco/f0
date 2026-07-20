/**
 * Given a scroll event on the viewer container, return the 1-based page number
 * of the page that occupies the most visible height, or null if none.
 */
export const calculateVisiblePage = (
  container: HTMLElement,
  pageElements: (HTMLElement | null)[],
  paddingTop: number
): number | null => {
  let visiblePage: number | null = null
  let maxVisibleHeight = 0

  pageElements.forEach((element, index) => {
    if (!element) return

    const elementHeight = element.offsetHeight
    const startOfElement = element.offsetTop
    const endOfElement = startOfElement + elementHeight

    const viewportHeight = container.offsetHeight - paddingTop
    const viewportStart = container.scrollTop + paddingTop
    const viewportEnd = viewportStart + viewportHeight

    const isVisible =
      viewportStart < endOfElement && viewportEnd > startOfElement
    if (!isVisible) return

    let visibleHeight: number
    if (viewportStart <= startOfElement) {
      visibleHeight =
        viewportEnd > endOfElement
          ? elementHeight
          : viewportEnd - startOfElement
    } else {
      let missingHeight = viewportStart - startOfElement
      if (viewportEnd < endOfElement)
        missingHeight += endOfElement - viewportEnd
      visibleHeight = elementHeight - missingHeight
    }

    if (visibleHeight > maxVisibleHeight) {
      maxVisibleHeight = visibleHeight
      visiblePage = index + 1
    }
  })

  return visiblePage
}
