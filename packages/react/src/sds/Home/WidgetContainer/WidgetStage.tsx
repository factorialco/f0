import { ReactNode, useCallback, useLayoutEffect, useRef } from "react"
import { createPortal } from "react-dom"

export const WidgetStage = ({
  host,
  children,
}: {
  host?: HTMLElement | null
  children: ReactNode
}) => {
  const stageRef = useRef<HTMLDivElement>()
  if (!stageRef.current) {
    const stage = document.createElement("div")
    stage.style.display = "contents"
    stage.dataset.widgetStage = ""
    stageRef.current = stage
  }
  const stage = stageRef.current

  const hostRef = useRef(host)
  hostRef.current = host

  const anchorNode = useRef<HTMLDivElement | null>(null)
  const anchorRef = useCallback(
    (node: HTMLDivElement | null) => {
      anchorNode.current = node
      const parent = hostRef.current ?? node
      if (parent && stage.parentElement !== parent) {
        parent.appendChild(stage)
      }
    },
    [stage]
  )

  useLayoutEffect(() => {
    const parent = host ?? anchorNode.current
    if (parent && stage.parentElement !== parent) {
      parent.appendChild(stage)
    }
  }, [host, stage])

  useLayoutEffect(() => () => stage.remove(), [stage])

  return (
    <>
      <div ref={anchorRef} style={{ display: "contents" }} />
      {createPortal(children, stage)}
    </>
  )
}
