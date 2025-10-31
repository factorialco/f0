/// <reference types="user-agent-data-types" />

type UrlString = `http://${string}` | `https://${string}`

interface DataAttributes {
  [key: `data-${string}`]: string | undefined
}

// Atlaskit DropIndicator ambient types (for TS resolution)
declare module "@atlaskit/pragmatic-drag-and-drop-react-drop-indicator" {
  import * as React from "react"
  export const DropIndicator: React.FC<{
    edge: "top" | "bottom" | "left" | "right"
    gap?: string | number
    type?: "default" | "no-terminal" | "terminal" | "terminal-no-bleed"
  }>
}

declare module "@atlaskit/pragmatic-drag-and-drop-react-drop-indicator/box" {
  export * from "@atlaskit/pragmatic-drag-and-drop-react-drop-indicator"
}
