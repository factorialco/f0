/// <reference types="user-agent-data-types" />

type UrlString = `http://${string}` | `https://${string}`

interface DataAttributes {
  [key: `data-${string}`]: string | undefined
}
