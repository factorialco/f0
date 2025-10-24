export type UrlString = `http://${string}` | `https://${string}`

export interface DataAttributes {
  [key: `data-${string}`]: string | undefined
}
