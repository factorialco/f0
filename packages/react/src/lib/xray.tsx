import { cva } from "cva"
import * as React from "react"
import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react"
import { createPortal } from "react-dom"
import { componentTypes, type ComponentMetadata, type ComponentTypes } from "./component/types"

declare global {
  interface Window {
    XRay: {
      enable: (filter?: ComponentTypes[]) => void
      disable: () => void
    }
  }
}

export const XRayContext = createContext<{
  enabled: boolean
  filter: ComponentTypes[]
  enable: (filter?: ComponentTypes[]) => void
  disable: () => void
}>({ enabled: false, enable: () => null, disable: () => null, filter: [] })

export const XRayProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [enabled, setEnabled] = useState(false)
  const [filter, setFilter] = useState<ComponentTypes[]>([])

  const enable = useCallback(
    (filter?: ComponentTypes[]) => {
      setFilter(filter || [...componentTypes].filter((type) => type !== "layout"))
      setEnabled(true)
    },
    [setFilter, setEnabled]
  )

  const disable = useCallback(() => setEnabled(false), [setEnabled])

  useEffect(() => {
    window.XRay = {
      enable,
      disable,
    }
  }, [enable, disable])

  return (
    <XRayContext.Provider value={{ enabled, enable, disable, filter }}>
      {children}
      {enabled &&
        typeof document !== "undefined" &&
        createPortal(
          <div className="bg-white fixed right-2 top-2 z-50 flex flex-col space-y-2 rounded-2xs border-solid border-f1-border p-4 opacity-80 shadow-md">
            <div className="text-md z-50 font-semibold">XRay</div>
            <div className="flex flex-col space-y-2">
              {componentTypes.map((type) => (
                <label className="block" key={type}>
                  <input
                    onChange={(event) =>
                      event.target.checked
                        ? setFilter([...filter, type])
                        : setFilter(filter.filter((f) => f !== type))
                    }
                    type="checkbox"
                    checked={filter.includes(type)}
                    className="mr-2"
                  />
                  {type}
                </label>
              ))}
            </div>
          </div>,
          document?.body
        )}
    </XRayContext.Provider>
  )
}

type TypeVariant = Record<ComponentTypes, string>

const wrapperVariants = cva({
  base: "outline-opacity-50 pointer-events-none absolute z-40 outline-dashed",
  variants: {
    type: {
      layout: "outline-red-500",
      info: "outline-blue-500",
      action: "outline-green-600",
      form: "outline-purple-600",
    } satisfies TypeVariant,
  },
})

const tagVariants = cva({
  base: "absolute z-40 bg-opacity-50 px-2 py-1 text-sm uppercase",
  variants: {
    type: {
      layout: "bg-red-500 text-white",
      info: "bg-blue-500 text-white",
      action: "bg-green-600 text-white",
      form: "bg-purple-600 text-white",
    } satisfies TypeVariant,
  },
})

export const useComponentXRay = <R extends HTMLElement | SVGElement>(
  meta: ComponentMetadata,
  forwardedRef: React.ForwardedRef<R>
) => {
  const { enabled, filter } = React.useContext(XRayContext)
  const ref = useRef<R | null>(null)
  useImperativeHandle(forwardedRef, () => ref.current as R)
  const showXray = enabled && !meta.internal
  const layoutElement = typeof document !== "undefined" ? document.body : null

  useEffect(() => {
    if (!showXray || !ref.current || !filter.includes(meta.type)) return

    const element = ref.current
    element.dataset.componentName = meta.name

    let wrapper: HTMLElement | null = null
    let tag: HTMLElement | null = null

    if (layoutElement) {
      const elementRect = element.getBoundingClientRect()
      const { top, left, width, height } = elementRect

      wrapper = document.createElement("div")

      wrapper.className = wrapperVariants({ type: meta.type })
      wrapper.style.top = `${top}px`
      wrapper.style.left = `${left}px`
      wrapper.style.width = `${width}px`
      wrapper.style.height = `${height}px`

      tag = document.createElement("div")
      tag.className = tagVariants({ type: meta.type })
      tag.style.top = `${top}px`
      tag.style.left = `${left}px`
      tag.innerText = meta.name

      layoutElement.appendChild(tag)
      layoutElement.appendChild(wrapper)
    }

    return () => {
      if (wrapper) layoutElement?.removeChild(wrapper)
      if (tag) layoutElement?.removeChild(tag)
    }
  }, [showXray, meta.name, meta.type, filter, layoutElement])

  return {
    ref,
    enabled,
  }
}

export const useXRay = () => {
  return useContext(XRayContext)
}
