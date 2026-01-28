import { createPortal } from "react-dom"

import { useGridStackContext } from "./grid-stack-context"
import { useGridStackRenderContext } from "./grid-stack-render-context"
import { GridStackWidgetContext } from "./grid-stack-widget-context"

export function GridStackRender() {
  const { _reactContentMap } = useGridStackContext()
  const { getWidgetContainer } = useGridStackRenderContext()

  return (
    <>
      {Array.from(_reactContentMap.value.entries()).map(([id, content]) => {
        const widgetContainer = getWidgetContainer(id)

        if (!widgetContainer) {
          console.error(`Widget container not found for widget ${id}`)
          return null
        }

        return (
          <GridStackWidgetContext.Provider key={id} value={{ widget: { id } }}>
            {content && createPortal(content, widgetContainer)}
          </GridStackWidgetContext.Provider>
        )
      })}
    </>
  )
}
