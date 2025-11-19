import { ComponentType } from "react"
import { createPortal } from "react-dom"
import { useGridStackContext } from "./grid-stack-context"
import { useGridStackRenderContext } from "./grid-stack-render-context"
import { GridStackWidgetContext } from "./grid-stack-widget-context"

export interface ComponentDataType<T = object> {
  name: string
  props: T
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type ComponentMap = Record<string, ComponentType<any>>

export function GridStackRender() {
  const { _rawWidgetMetaMap } = useGridStackContext()
  const { getWidgetContainer } = useGridStackRenderContext()

  return (
    <>
      {Array.from(_rawWidgetMetaMap.value.entries()).map(([id, meta]) => {
        const widgetContainer = getWidgetContainer(id)

        if (!widgetContainer) {
          console.warn("Widget container not found for id: ", id)
          return null
          throw new Error(`Widget container not found for id: ${id}`)
        }

        return (
          <GridStackWidgetContext.Provider key={id} value={{ widget: { id } }}>
            {createPortal(meta.render, widgetContainer)}
          </GridStackWidgetContext.Provider>
        )
      })}
    </>
  )
}
