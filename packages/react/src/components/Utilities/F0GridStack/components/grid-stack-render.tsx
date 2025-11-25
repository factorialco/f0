import { createPortal } from "react-dom"
import type { GridStackReactWidget } from "../F0GridStack"
import { useGridStackContext } from "./grid-stack-context"
import { useGridStackRenderContext } from "./grid-stack-render-context"
import { GridStackWidgetContext } from "./grid-stack-widget-context"

export function GridStackRender() {
  const { _rawWidgetMetaMap } = useGridStackContext()
  const { getWidgetContainer } = useGridStackRenderContext()

  return (
    <>
      {Array.from(_rawWidgetMetaMap.value.entries()).map(([id, meta]) => {
        const widgetContainer = getWidgetContainer(id)

        if (!widgetContainer) {
          return null
        }

        return (
          <GridStackWidgetContext.Provider key={id} value={{ widget: { id } }}>
            {(meta as GridStackReactWidget).content &&
              createPortal(
                (meta as GridStackReactWidget).content!,
                widgetContainer
              )}
          </GridStackWidgetContext.Provider>
        )
      })}
    </>
  )
}
