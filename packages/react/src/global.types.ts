export type UrlString = `http://${string}` | `https://${string}`

export type DataAttributes = {
  [key: `data-${string}`]: string | undefined
}
